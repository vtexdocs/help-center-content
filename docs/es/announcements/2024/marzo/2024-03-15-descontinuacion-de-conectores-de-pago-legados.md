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
| BankInvoiceItau/BankIssuedInvoiceItau | [MaxiPagoV4](/es/docs/tutorials/configurar-pago-con-maxipagov4) |
| BankInvoiceSantander/BankIssuedInvoiceSantander | [Egetnet](/es/docs/tutorials/configurar-adquirente-getnet-con-el-conector-egetnet) |
| Bradesco/RegisteredBankInvoiceBradesco | [ShopfacilPayment](/es/docs/tutorials/configurar-pago-con-shopfacil) |
| Braspag/BraspagV2 | [CieloEcommerce](/es/docs/tutorials/configurar-pago-con-cieloecommerce) |
| Cielo/CieloV3 | [CieloEcommerce](/es/docs/tutorials/configurar-pago-con-cieloecommerce) |
| Credomatic | - |
| CyberSource | [Cybersource IO](/es/docs/tutorials/configurar-gateway-cybersource) |
| Decidir/DecidirV1 | [Payway](/es/docs/tutorials/configurar-pago-con-payway) |
| ERede/E-Rede V2/ERedeRest | [Itaú Rede](/es/docs/tutorials/configurar-pago-con-itau-rede) |
| Firstdata | [Fiserv AR](/es/docs/tutorials/configurar-pago-con-fiserv-ar) o [Fiserv MX](/es/docs/tutorials/configurar-pago-con-fiserv-mx) |
| ItauShopline | [MaxiPagoV4](/es/docs/tutorials/configurar-pago-con-maxipagov4) |
| MaxiPago | [MaxiPagoV4](/es/docs/tutorials/configurar-pago-con-maxipagov4) |
| MercadoPagoV1 | [MercadoPagoV2](/es/docs/tutorials/configurar-el-subadquirente-mercadopagov2) |
| PagHiper | [PagHiperV2](/es/docs/tutorials/configurar-pago-con-paghiperv2) o [PagHiperV3](/es/docs/tutorials/configurar-pago-con-paghiperv3) |
| PagoEfectivo | [PagoEfectivoV2](/es/docs/tutorials/configurar-pago-con-pagoefectivov2)  |
| PagosNet | - |
| PagosWeb | [Bamboo-Payments](/es/docs/tutorials/configurar-pago-con-bamboo-payments) |
| PagSeguro/PagSeguroDirect | [PagBankV3](/es/docs/tutorials/configurar-el-pagseguro-v3) |
| PayPal/PayPalPlus | [PayPalV2](/es/docs/tutorials/configurar-pago-con-paypalv2) |
| PayU/PayUGlobal | [PayUv2](/es/docs/tutorials/configurar-pago-con-payuv2) |
| Redsys/RedsysV2 | [RedsysEXP](/es/docs/tutorials/configurar-pago-con-redsysexp) |
| Sitef/SitefDirectSale/SitefPreauth | [ESITEF](/es/docs/tutorials/configurar-pago-con-e-sitef) |
| WebPay/WebPay2P | [Transbank Webpay](/es/docs/tutorials/configurar-pago-con-transbank-webpay) |

## ¿Qué se necesita hacer?

Si tu tienda utiliza alguno de los conectores legados indicados anteriormente, realiza las acciones específicas relacionadas con cada conector:

- __El conector legado aún no tiene un conector PPP correspondiente disponible__: abre un ticket con el [soporte de VTEX](https://supporticket.vtex.com/support) para que el equipo CX responsable de tu cuenta te ayude a verificar qué conectores PPP disponibles se adaptan mejor a tu tipo de operación y se pueden configurar en tu tienda.

- __Conector PPP disponible para reemplazar el conector legado__: ponte en contacto con tu proveedor de pago para obtener más información sobre el proceso de migración y configuración del nuevo conector en tu tienda.

