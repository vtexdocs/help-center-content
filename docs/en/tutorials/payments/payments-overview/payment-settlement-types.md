---
title: 'Payment settlement types'
id:
status: PUBLISHED
createdAt: 2025-12-10T00:00:00.001Z
updatedAt: 2025-12-10T00:00:00.001Z
publishedAt: 2025-12-10T00:00:00.001Z
firstPublishedAt: 2025-12-10T00:00:00.001Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: payment-settlement-types
legacySlug: payment-settlement-types
locale: en
subcategoryId: 2Xay1NOZKE2CSqKMwckOm8
---

> ⚠️ This feature is in closed beta, meaning only specific customers can access it now. If you want to implement it in the future, please contact our [Support](https://support.vtex.com/hc/en-us/).

When a customer places an order in a VTEX store, the system generates an order number and processes the payment. Then, the payment settlement can occur in three ways:

- Total
- Hold
- Parcial

Each one impacts how the VTEX payment gateway transfers the amount to the payment provider.

Below is an example of a $100 order and how it can be settled in each scenario:

## Total settlement

In this model, the merchant issues an invoice either for the total amount ($100) or a [partial amount](https://help.vtex.com/docs/tracks/partial-invoices#sending-a-partial-invoice), such as $50.

The [Orders](https://help.vtex.com/docs/tutorials/orders-category) system sends a settlement request to the VTEX payment gateway based on the invoice total ($100 or $50). Then, the gateway transfers the total order amount ($100) to the payment provider, regardless of the amount on the invoice.


## Hold settlement

In this model, the merchant issues a [partial invoice](https://help.vtex.com/docs/tracks/partial-invoices#sending-a-partial-invoice) for $70, using the same example. The Orders system requests settlement for this amount, but the gateway holds the amount. It doesn't transfer the $70 to the payment provider until the remaining $30 is invoiced, completing the full order amount. When the amount from partial requests reaches the total transaction amount ($100), the gateway transfers the amount to the payment provider.

## Partial settlement

In this model, when the merchant issues a [partial invoice](https://help.vtex.com/docs/tracks/partial-invoices) (for example, $60), the Orders system requests settlement for the corresponding amount, and the gateway automatically transfers the $60 to the payment provider.

As new invoices are added, the gateway automatically and proportionally settles the remaining amount (up to $40 in this example).

> ⚠️ Only the **Total** settlement model is activated by default in all VTEX accounts. If you want to use the **Hold** or **Partial** settlement models in your store, contact [VTEX Support](https://help.vtex.com/en).

## How to identify partial settlement of an order

To see if an order followed the partial settlement model, follow the steps below:

1. In the VTEX Admin, go to **Orders > Transactions**, or type **Transactions** in the search bar at the top of the page.
2. Search or click the desired transaction.
3. Check if there is partial settlement information in the main box of payment details in the order.

![Payment settlement](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/payments/payments-overview/partial-settlement-payment-1.png)

4. In **Transaction events**, confirm partial settlements by checking if there are events of this type.

![Payment settlement 2](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/payments/payments-overview/partial-settlement-payment-2.png)
