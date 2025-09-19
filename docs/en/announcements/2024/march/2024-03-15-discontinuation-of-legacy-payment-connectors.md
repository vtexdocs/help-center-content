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

As another step in the process of [discontinuing legacy payment connectors](/en/announcements/legacy-payment-connectors-will-be-discontinued-in-2024--4R5YIjUu1IWkiOHzXtQU14), the table below lists the legacy connectors that will be removed from the VTEX platform and the new connectors (integrated via Payment Provider Protocol) that are available to replace them:

| **Legacy connector** | **New version (PPP connector)** |
| :---: | :---: |
| Adyen | [AdyenV3](/en/tutorial/configuring-payment-with-adyenv3--7xAz67E2Eg63LWCQNjVdwv) |
| AuthorizeNet/AuthorizeDotNet | - |
| BankInvoiceItau/BankIssuedInvoiceItau | [MaxiPagoV4](/en/tutorial/setting-up-payments-with-maxipagov4--4pWPhTago6uDxjFMB6kln3) |
| BankInvoiceSantander/BankIssuedInvoiceSantander | [Egetnet](/en/tutorial/setting-up-getnet-acquirer-with-egetnet-connector--75kwGKPKnK8mwiEmQGYiWq) |
| Bradesco/RegisteredBankInvoiceBradesco | [ShopfacilPayment](/en/tutorial/configure-payment-with-shopfacil--4v3z3CLrgZ2bByMx7uoMeG) |
| Braspag/BraspagV2 | [CieloEcommerce](/en/tutorial/setting-up-payments-with-cieloecommerce--6zuELBqEo0QzApbU4l7L4) |
| Cielo/CieloV3 | [CieloEcommerce](/en/tutorial/setting-up-payments-with-cieloecommerce--6zuELBqEo0QzApbU4l7L4) |
| Credomatic | - |
| CyberSource | [Cybersource IO](/en/tutorial/setting-up-cybersource-gateway--6nhvUTrLxeacsoYG6GkGM) |
| Decidir/DecidirV1 | [Payway](/en/tutorial/setting-up-payments-with-payway--wHkvX7olfPPsAdeFq7obp) |
| ERede/E-Rede V2/ERedeRest | [Itaú Rede](/en/tutorial/setting-up-payments-with-itau-rede--77BYOKxVzONWulAf8dTVSX) |
| Firstdata | [Fiserv AR](/en/tutorial/setting-up-payments-with-fiserv-ar--1qF6HiMShBpMCyzz53edlx) or [Fiserv MX](/en/tutorial/setting-up-payments-with-fiserv-mx--3vcYUO1y0Zp9DWVI1AcvfK) |
| ItauShopline | [MaxiPagoV4](/en/tutorial/setting-up-payments-with-maxipagov4--4pWPhTago6uDxjFMB6kln3) |
| MaxiPago | [MaxiPagoV4](/en/tutorial/setting-up-payments-with-maxipagov4--4pWPhTago6uDxjFMB6kln3) |
| MercadoPagoV1 | [MercadoPagoV2](/en/tutorial/setting-up-mercadopagov2-sub-acquirer--1y6k8lCSzJYfPs2yObNFo4) |
| PagHiper | [PagHiperV2](/en/tutorial/setting-up-payments-with-paghiperv2--131E6zBcTTkzZtL82cZh1x) or [PagHiperV3](/en/tutorial/setting-up-payments-with-paghiperv3--1dYVbSK0yHNY5vp0gJj4fC) |
| PagoEfectivo | [PagoEfectivoV2](/en/tutorial/setting-up-payments-with-pagoefectivov2--63Raoh7hlWoWbMJOAacfMV)  |
| PagosNet | - |
| PagosWeb | [Bamboo-Payments](/en/tutorial/setting-up-payments-with-bamboo-payments--33TDZBp1wmgzJdiZtvu1xY) |
| PagSeguro/PagSeguroDirect | [PagBankV3](/en/tutorial/setting-up-pagseguro-v3--5Noi1mUbBQ6CyqdeDQtWfw) |
| PayPal/PayPalPlus | [PayPalV2](/en/tutorial/setting-up-payments-with-paypalv2--2nGiQVk3YKvOAu8Zg4RKFr) |
| PayU/PayUGlobal | [PayUv2](/en/tutorial/setting-up-payments-with-payuv2--7twMgKUZZtJGmR72wS1k3n) |
| Redsys/RedsysV2 | [RedsysEXP](/en/tutorial/setting-up-payments-with-redsysexp--7DSQeUbDEgH6yUvtXg4wly) |
| Sitef/SitefDirectSale/SitefPreauth | [ESITEF](/en/tutorial/setting-up-payments-with-e-sitef--6UEi0QAlU6BXz5RgWj34Ac) |
| WebPay/WebPay2P | [Transbank Webpay](/en/tutorial/setting-up-payments-with-transbank-webpay--3uVwZ1gUx2g5TXGt0CHb44) |

## What needs to be done?

If your store uses any of the legacy connectors listed above, complete the specific actions that apply to each connector:

- __Legacy connector does not yet have a corresponding PPP connector available__: Open a ticket with [VTEX Support](/en/support) so that the CX team assigned to your account can assist you in checking which available PPP connectors are best suited to your type of operation and can be configured in your store.

- __PPP connector available to replace legacy connector__: Contact your payment provider for more information about the migration process and setting up the new connector in your store.
