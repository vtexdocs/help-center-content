---
title: 'Descontinuación de conectores de pago legados'
id: 11SHyRwcAr4fs46K7PccOr
status: PUBLISHED
createdAt: 2024-03-15T10:19:40.450Z
updatedAt: 2024-10-07T20:51:34.352Z
publishedAt: 2024-10-07T20:51:34.352Z
contentType: updates
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: 2024-03-15-discontinuation-of-legacy-payment-connectors
locale: es
legacySlug: descontinuacion-de-conectores-de-pago-legados
announcementImageID: 'undefined'
announcementSynopsisES: 'Los conectores de pago legados serán eliminados de la plataforma VTEX'
---

Como parte del proceso en curso para descontinuar [conectores de pago legados](/es/announcements/2023-10-13-descontinuacion-de-conectores-de-pago-legados-en-2024), la siguiente tabla presenta los conectores legados que serán eliminados de la plataforma VTEX y los nuevos conectores (integrados vía Payment Provider Protocol) ya disponibles para reemplazarlos:

| **Conector legado** | **Nueva versión (Conector PPP)** |
| :---: | :---: |
| Adyen | [AdyenV3](/es/tutorial/configurar-pagos-con-adyenv3--7xAz67E2Eg63LWCQNjVdwv) |
| AuthorizeNet/AuthorizeDotNet | - |
| BankInvoiceItau/BankIssuedInvoiceItau | [MaxiPagoV4](/es/tutorial/configurar-pago-con-maxipagov4--4pWPhTago6uDxjFMB6kln3) |
| BankInvoiceSantander/BankIssuedInvoiceSantander | [Egetnet](/es/tutorial/configurar-adquirente-getnet-con-el-conector-egetnet--75kwGKPKnK8mwiEmQGYiWq) |
| Bradesco/RegisteredBankInvoiceBradesco | [ShopfacilPayment](/es/tutorial/configurar-pago-con-shopfacil--4v3z3CLrgZ2bByMx7uoMeG) |
| Braspag/BraspagV2 | [CieloEcommerce](/es/tutorial/configurar-pago-con-cieloecommerce--6zuELBqEo0QzApbU4l7L4) |
| Cielo/CieloV3 | [CieloEcommerce](/es/tutorial/configurar-pago-con-cieloecommerce--6zuELBqEo0QzApbU4l7L4) |
| Credomatic | - |
| CyberSource | [Cybersource IO](/es/tutorial/configurar-gateway-cybersource--6nhvUTrLxeacsoYG6GkGM) |
| Decidir/DecidirV1 | [Payway](/es/tutorial/configurar-pago-con-payway--wHkvX7olfPPsAdeFq7obp) |
| ERede/E-Rede V2/ERedeRest | [Itaú Rede](/es/tutorial/configurar-pago-con-itau-rede--77BYOKxVzONWulAf8dTVSX) |
| Firstdata | [Fiserv AR](/es/tutorial/configurar-pago-con-fiserv-ar--1qF6HiMShBpMCyzz53edlx) o [Fiserv MX](/es/tutorial/configurar-pago-con-fiserv-mx--3vcYUO1y0Zp9DWVI1AcvfK) |
| ItauShopline | [MaxiPagoV4](/es/tutorial/configurar-pago-con-maxipagov4--4pWPhTago6uDxjFMB6kln3) |
| MaxiPago | [MaxiPagoV4](/es/tutorial/configurar-pago-con-maxipagov4--4pWPhTago6uDxjFMB6kln3) |
| MercadoPagoV1 | [MercadoPagoV2](/es/tutorial/configurar-el-subadquirente-mercadopagov2--1y6k8lCSzJYfPs2yObNFo4) |
| PagHiper | [PagHiperV2](/es/tutorial/configurar-pago-con-paghiperv2--131E6zBcTTkzZtL82cZh1x) o [PagHiperV3](/es/tutorial/configurar-pago-con-paghiperv3--1dYVbSK0yHNY5vp0gJj4fC) |
| PagoEfectivo | [PagoEfectivoV2](/es/tutorial/configurar-pago-con-pagoefectivov2--63Raoh7hlWoWbMJOAacfMV)  |
| PagosNet | - |
| PagosWeb | [Bamboo-Payments](/es/tutorial/configurar-pago-con-bamboo-payments--33TDZBp1wmgzJdiZtvu1xY) |
| PagSeguro/PagSeguroDirect | [PagBankV3](/es/tutorial/configurar-el-pagseguro-v3--5Noi1mUbBQ6CyqdeDQtWfw) |
| PayPal/PayPalPlus | [PayPalV2](/es/tutorial/configurar-pago-con-paypalv2--2nGiQVk3YKvOAu8Zg4RKFr) |
| PayU/PayUGlobal | [PayUv2](/es/tutorial/setting-up-payments-with-payuv2--7twMgKUZZtJGmR72wS1k3n) |
| Redsys/RedsysV2 | [RedsysEXP](/es/tutorial/configurar-pago-con-redsysexp--7DSQeUbDEgH6yUvtXg4wly) |
| Sitef/SitefDirectSale/SitefPreauth | [ESITEF](/es/tutorial/configurar-pago-con-e-sitef--6UEi0QAlU6BXz5RgWj34Ac) |
| WebPay/WebPay2P | [Transbank Webpay](/es/tutorial/configurar-pago-con-transbank-webpay--3uVwZ1gUx2g5TXGt0CHb44) |

## ¿Qué se necesita hacer?

Si tu tienda utiliza alguno de los conectores legados indicados anteriormente, realiza las acciones específicas relacionadas con cada conector:

- __El conector legado aún no tiene un conector PPP correspondiente disponible__: abre un ticket con el [soporte de VTEX](https://supporticket.vtex.com/support) para que el equipo CX responsable de tu cuenta te ayude a verificar qué conectores PPP disponibles se adaptan mejor a tu tipo de operación y se pueden configurar en tu tienda.

- __Conector PPP disponible para reemplazar el conector legado__: ponte en contacto con tu proveedor de pago para obtener más información sobre el proceso de migración y configuración del nuevo conector en tu tienda.

