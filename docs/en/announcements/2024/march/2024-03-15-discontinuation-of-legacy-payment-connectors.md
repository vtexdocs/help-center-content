---
title: 'Discontinuation of legacy payment connectors'
id: 11SHyRwcAr4fs46K7PccOr
status: PUBLISHED
createdAt: 2024-03-15T10:19:40.450Z
updatedAt: 2024-10-07T20:51:34.352Z
publishedAt: 2024-10-07T20:51:34.352Z
contentType: updates
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: 2024-03-15-discontinuation-of-legacy-payment-connectors
locale: en
legacySlug: discontinuation-of-legacy-payment-connectors
announcementImageID: 'undefined'
announcementSynopsisEN: 'Legacy payment connectors will be removed from the VTEX platform'
---

As another step in the process of [discontinuing legacy payment connectors](/en/announcements/2023-10-13-legacy-payment-connectors-will-be-discontinued-in-2024), the table below lists the legacy connectors that will be removed from the VTEX platform and the new connectors (integrated via Payment Provider Protocol) that are available to replace them:

| **Legacy connector** | **New version (PPP connector)** |
| :---: | :---: |
| Adyen | [AdyenV3](/en/tutorial/configuring-payment-with-adyenv3--7xAz67E2Eg63LWCQNjVdwv) |
| AuthorizeNet/AuthorizeDotNet | - |
| BankInvoiceItau/BankIssuedInvoiceItau | [MaxiPagoV4](/en/docs/tutorials/setting-up-payments-with-maxipagov4) |
| BankInvoiceSantander/BankIssuedInvoiceSantander | [Egetnet](/en/docs/tutorials/setting-up-getnet-acquirer-with-egetnet-connector) |
| Bradesco/RegisteredBankInvoiceBradesco | [ShopfacilPayment](/en/docs/tutorials/configure-payment-with-shopfacil) |
| Braspag/BraspagV2 | [CieloEcommerce](/en/docs/tutorials/setting-up-payments-with-cieloecommerce) |
| Cielo/CieloV3 | [CieloEcommerce](/en/docs/tutorials/setting-up-payments-with-cieloecommerce) |
| Credomatic | - |
| CyberSource | [Cybersource IO](/en/docs/tutorials/setting-up-cybersource-gateway) |
| Decidir/DecidirV1 | [Payway](/en/docs/tutorials/setting-up-payments-with-payway) |
| ERede/E-Rede V2/ERedeRest | [Itaú Rede](/en/docs/tutorials/setting-up-payments-with-itau-rede) |
| Firstdata | [Fiserv AR](/en/docs/tutorials/setting-up-payments-with-fiserv-ar) or [Fiserv MX](/en/docs/tutorials/setting-up-payments-with-fiserv-mx) |
| ItauShopline | [MaxiPagoV4](/en/docs/tutorials/setting-up-payments-with-maxipagov4) |
| MaxiPago | [MaxiPagoV4](/en/docs/tutorials/setting-up-payments-with-maxipagov4) |
| MercadoPagoV1 | [MercadoPagoV2](/en/docs/tutorials/setting-up-mercadopagov2-sub-acquirer) |
| PagHiper | [PagHiperV2](/en/docs/tutorials/setting-up-payments-with-paghiperv2) or [PagHiperV3](/en/docs/tutorials/setting-up-payments-with-paghiperv3) |
| PagoEfectivo | [PagoEfectivoV2](/en/docs/tutorials/setting-up-payments-with-pagoefectivov2)  |
| PagosNet | - |
| PagosWeb | [Bamboo-Payments](/en/docs/tutorials/setting-up-payments-with-bamboo-payments) |
| PagSeguro/PagSeguroDirect | [PagBankV3](/en/docs/tutorials/setting-up-pagseguro-v3) |
| PayPal/PayPalPlus | [PayPalV2](/en/docs/tutorials/setting-up-payments-with-paypalv2) |
| PayU/PayUGlobal | [PayUv2](/en/docs/tutorials/setting-up-payments-with-payuv2) |
| Redsys/RedsysV2 | [RedsysEXP](/en/docs/tutorials/setting-up-payments-with-redsysexp) |
| Sitef/SitefDirectSale/SitefPreauth | [ESITEF](/en/docs/tutorials/setting-up-payments-with-e-sitef) |
| WebPay/WebPay2P | [Transbank Webpay](/en/docs/tutorials/setting-up-payments-with-transbank-webpay) |

## What needs to be done?

If your store uses any of the legacy connectors listed above, complete the specific actions that apply to each connector:

- __Legacy connector does not yet have a corresponding PPP connector available__: Open a ticket with [VTEX Support](https://supporticket.vtex.com/support) so that the CX team assigned to your account can assist you in checking which available PPP connectors are best suited to your type of operation and can be configured in your store.

- __PPP connector available to replace legacy connector__: Contact your payment provider for more information about the migration process and setting up the new connector in your store.
