---
title: 'Legacy payment connectors will be discontinued in 2024'
id: 4R5YIjUu1IWkiOHzXtQU14
status: PUBLISHED
createdAt: 2023-10-13T12:52:48.753Z
updatedAt: 2024-09-24T18:40:15.413Z
publishedAt: 2024-09-24T18:40:15.413Z
contentType: updates
productTeam: Shopping
author: 2Gy429C47ie3tL9XUEjeFL
slugEN: 2023-10-13-legacy-payment-connectors-will-be-discontinued-in-2024
locale: en
legacySlug: legacy-payment-connectors-will-be-discontinued-in-2024
announcementImageID: 'undefined'
announcementSynopsisEN: 'In 2024, VTEX will discontinue legacy payment connectors, that do not use the Payment Provider Protocol.'
---

To integrate payment methods to the VTEX platform, payment providers can create payment connectors using the [Payment Provider Protocol](/tutorial/payment-provider-protocol--RdsT2spdq80MMwwOeEq0m) (PPP). However, several legacy connectors are using older versions of our payment integration architecture, which are less stable and less performant.

> ⚠️ **Update (03/15/2024): **[List of connectors available for migration](/en/announcements/discontinuation-of-legacy-payment-connectors--11SHyRwcAr4fs46K7PccOr).

## What has changed?

> ❗ These changes will not affect Black Friday 2023. They will only be implemented in the first quarter of 2024.

VTEX is initiating the discontinuation of these legacy connectors, which will happen gradually:

- **January 31, 2024** - Blocking the creation of new gateway affiliations using legacy payment connectors. As of this date, VTEX stores will no longer be able to set up connections using the connectors that will be discontinued. All payment rules already configured will continue to operate as usual without affecting transactions.
- **February 10, 2024** - Suggested deadline for submitting new connectors for approval. If partner companies want to develop new connectors using the [PPP](/tutorial/payment-provider-protocol--RdsT2spdq80MMwwOeEq0m) to replace legacy connectors, we suggest submitting them for approval by this date. By doing so, VTEX stores will have a few weeks to reconfigure their payment connections before discontinuation. This date is also intended to guarantee the SLA of the [payment connector approval process on the VTEX platform](https://developers.vtex.com/docs/guides/payments-integration-payment-provider-homologation).
- **March 31, 2024** - Permanent discontinuation of connectors that do not use the [PPP](/tutorial/payment-provider-protocol--RdsT2spdq80MMwwOeEq0m). From this date, VTEX will block all transactions from legacy payment connectors.

### List of legacy payment connectors

See the list of all the connectors that will be discontinued:

- Adyen
- Alignet
- Amex
- AuthorizeNet/AuthorizeDotNet
- BanamexInvoice
- BankInvoiceItau/BankIssuedInvoiceItau
- BankInvoiceSantander/BankIssuedInvoiceSantander
- Bcash
- BoldCron
- Bradesco/RegisteredBankInvoiceBradesco
- BrasPag/Braspag
- Cielo/CieloV3
- Conductor
- Credomatic
- CyberSource
- Decidir/DecidirV1
- ERede/E-Rede V2/ERedeRest
- Evolucard
- Firstdata
- IPay88
- ItauShopline
- Koin
- MaxiPago
- MeoWallet
- MercadoPagoV1
- MobilPay
- Moip
- MOLPay
- Mundipagg/MundipaggFraudPrevention
- Nexxpago
- NPS
- PagamentoDigital
- PagBrasil
- PagHiper
- PagoEfectivo
- PagosNet
- PagosWeb
- PagSeguro/PagSeguroDirect
- PayClub
- Payme
- Paymentez
- PaymentHub
- PaymentsOS
- PayPal/PayPalPlus
- PayU/PayUGlobal
- Payzen
- Place2Pay/PlaceToPay
- Rede Pay/RedePay
- Redecard
- Redsys/RedsysV2
- SafetyPay
- SalesMachine
- Scopus
- Sitef/SitefDirectSale/SitefPreauth
- Stelo
- TNSPay
- TodoPago
- WebPay/WebPay2P
- WorldPay

## Why we are making this change?

Connectors using the [PPP](/tutorial/payment-provider-protocol--RdsT2spdq80MMwwOeEq0m) have higher authorization rates than legacy connectors. Therefore, migrating to new connectors tends to boost VTEX stores' sales.

Furthermore, many legacy connectors are outdated in terms of technology. Migrating to connectors using the [PPP](/tutorial/payment-provider-protocol--RdsT2spdq80MMwwOeEq0m) ensures that VTEX stores will be using more modern and stable technologies offered by VTEX.

## What needs to be done?

The actions required from this change depend on your context in the VTEX ecosystem. See below to find out the option that best applies to your business.

### Legacy payment connector providers

If you are a payment provider managing one or more [connectors being discontinued](#list-of-legacy-payment-connectors), you must develop a new connector using the [Payment Provider Protocol](/tutorial/payment-provider-protocol--RdsT2spdq80MMwwOeEq0m). Otherwise, you will not be able to process transactions as of the discontinuation date mentioned above.

In this case, we recommend that you submit your new connector for approval by February 10, 2024, so that stores have time to reconfigure their payment connections before discontinuation. Learn more about the [approval process for new payment connectors](https://developers.vtex.com/docs/guides/payments-integration-payment-provider-homologation).

> ❗ VTEX cannot guarantee that your new payment connector will be available to VTEX merchants before the official discontinuation if you submit it for approval after this date.

If you have any questions about this process or would like to align joint communication with merchants, please contact your VTEX Partner Manager.

### Stores using legacy payment connectors

If your store uses one of the [connectors that will be discontinued](#list-of-legacy-payment-connectors), you must configure it with the new connector corresponding to that payment provider before March 31, 2024. Otherwise, you will not be able to complete purchases in your store using the payment method in question.

Throughout the discontinuation and migration process, you can contact your payment providers to monitor the progress and get more information on the development of the new connectors.

