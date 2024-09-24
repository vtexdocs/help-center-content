---
title: 'Discontinuation of legacy payment connectors'
id: 11SHyRwcAr4fs46K7PccOr
status: PUBLISHED
createdAt: 2024-03-15T10:19:40.450Z
updatedAt: 2024-08-20T13:27:49.613Z
publishedAt: 2024-08-20T13:27:49.613Z
contentType: updates
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: discontinuation-of-legacy-payment-connectors
locale: en
legacySlug: discontinuation-of-legacy-payment-connectors
announcementImageID: ''
announcementSynopsisEN: 'Legacy payment connectors will be removed from the VTEX platform'
---

As another step in the process of [discontinuing legacy payment connectors](https://help.vtex.com/en/announcements/legacy-payment-connectors-will-be-discontinued-in-2024--4R5YIjUu1IWkiOHzXtQU14), the table below lists the legacy connectors that will be removed from the VTEX platform and the new connectors (integrated via Payment Provider Protocol) that are available to replace them:

| **Legacy connector** | **New version (PPP connector)** |
| :---: | :---: |
| Adyen | AdyenV3 |
| AuthorizeNet/AuthorizeDotNet | - |
| BankInvoiceItau/BankIssuedInvoiceItau | MaxiPagoV4 |
| BankInvoiceSantander/BankIssuedInvoiceSantander | Egetnet |
| Bradesco/RegisteredBankInvoiceBradesco | ShopfacilPayment |
| Braspag/BraspagV2 | CieloEcommerce |
| Cielo/CieloV3 | CieloEcommerce |
| Credomatic | - |
| CyberSource | Cybersource IO |
| Decidir/DecidirV1 | Payway |
| ERede/E-Rede V2/ERedeRest | Itaú Rede |
| Firstdata | - |
| ItauShopline | MaxiPagoV4 |
| MaxiPago | MaxiPagoV4 |
| MercadoPagoV1 | MercadoPagoV2 |
| PagHiper | PagHiperV2 or PagHiperV3 |
| PagoEfectivo | PagoEfectivoV2  |
| PagosNet | - |
| PagosWeb | bamboo |
| PagSeguro/PagSeguroDirect | PagBankV3 |
| PayPal/PayPalPlus | PayPalV2 |
| PayU/PayUGlobal | PayUv2 |
| Redsys/RedsysV2 | RedsysEXP |
| Sitef/SitefDirectSale/SitefPreauth | ESITEF |
| WebPay/WebPay2P | Transbank Webpay |

## What needs to be done?

If your store uses any of the legacy connectors listed above, complete the specific actions that apply to each connector:

- __Legacy connector does not yet have a corresponding PPP connector available__: Open a ticket with [VTEX Support](https://help.vtex.com/en/support) so that the CX team assigned to your account can assist you in checking which available PPP connectors are best suited to your type of operation and can be configured in your store.

- __PPP connector available to replace legacy connector__: Contact your payment provider for more information about the migration process and setting up the new connector in your store.
