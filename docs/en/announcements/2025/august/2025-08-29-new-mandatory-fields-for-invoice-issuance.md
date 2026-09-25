---
title: 'New mandatory fields for invoice issuance'
id: 5jDozNwc272jtq92dvKQkq
status: PUBLISHED
createdAt: 2025-08-29T23:29:00.226Z
updatedAt: 2025-09-30T17:22:53.181Z
publishedAt: 2025-09-30T17:22:53.181Z
contentType: updates
productTeam: Channels
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: 2025-08-29-new-mandatory-fields-for-invoice-issuance
locale: en
legacySlug: new-mandatory-fields-for-invoice-issuance
announcementImageID: 'undefined'
announcementSynopsisEN: 'Marketplace orders now carry in paymentData the payment details used to issue invoices (NT 2025.001).'
tags:
  - Breaking change
  - Orders
  - Integrations
---

> ℹ️ The changes apply only to stores in Brazil.

NT 2025.001 requires payment details on electronic invoices in Brazil. Marketplace orders now receive those details in `paymentData`. Merchants use them to issue the invoice. The data does not authorize, capture, refund, or settle a payment in the account Gateway.

The first release stored the same details in `customApps`, as described in the [August 29, 2025 release note](https://developers.vtex.com/updates/release-notes/2025-08-29-orders-api-support-for-nt-2025-001-fields). Connectors that have not migrated still send `customApps`. When `paymentData` is present, read it for the invoice. There is no single cutoff date for every marketplace.

Read the order with [Get order](https://developers.vtex.com/docs/api-reference/orders-api#get-/api/oms/pvt/orders/-orderId-). Each marketplace payment is one item in `paymentData.payments[]`. The previous format concatenated several payments with `|` in one string. Dafiti sent the `customApps` field names in the singular.

| Invoice data | Previous `customApps` field | `paymentData` field |
| --- | --- | --- |
| Payment method | `marketplacePaymentMethods` | `group`, `paymentSystem`, and `paymentSystemName` |
| Card brand | `marketplacePaymentCreditCardBrands` | `paymentSystemName` |
| Authorization code | `marketplacePaymentAuthorizationCodes` | `connectorResponses.authId` |
| Acquirer CNPJ | `marketplacePaymentCnpjAcquirers` | `connectorResponses.acquirerCnpj` |

When the marketplace label matches a VTEX payment method by name, `paymentSystem` receives that method's id and `group` receives the matching group, such as `creditCard`. When there is no match, `paymentSystem` is `"0"`, `paymentSystemName` keeps the marketplace label, and `group` is `promissory`. Values are not standardized. The same method can arrive as `CARD`, `Credit Card`, or `credit_card`.

`connectorResponses` can include `Message`, stating that the affiliate assumed the value. That text is not a Gateway operation result. In this flow, the invoice fields are `acquirerCnpj` and `authId`.

```json
{
  "payments": [
    {
      "paymentSystem": "0",
      "paymentSystemName": "Mastercard",
      "value": 100000,
      "installments": 1,
      "referenceValue": 100000,
      "group": "creditCard",
      "connectorResponses": {
        "acquirerCnpj": "01425787000104",
        "authId": "01010202"
      }
    }
  ]
}
```

`value` and `referenceValue` are in cents.

### Orders with asynchronous payment

Pix and boleto confirm payment after the order is created. `customApps` cannot be updated after `placeOrder`, so the fiscal details could be stored only once payment was already confirmed, and inventory was not reserved during that interval.

With `paymentData`, the integration can create the order before confirmation and fill in the fiscal details when the marketplace approves the payment. Until that update, the order can exist without these fields.

## What do I need to do?

Check with your integrator or marketplace whether the NT 2025.001 fields are being sent. When the order includes `paymentData`, the ERP or tax issuer must read the fields in that object. On connectors that still send only `customApps`, keep reading those fields until the connector migrates.

The marketplace availability table remains in the [Portuguese announcement](/pt/announcements/2025-08-29-novos-campos-obrigatorios-para-emissao-de-notas-fiscais).

For questions, contact [VTEX Support](https://support.vtex.com/).
