---
title: 'Descontinuidade de conectores legados de pagamento'
id: 11SHyRwcAr4fs46K7PccOr
status: PUBLISHED
createdAt: 2024-03-15T10:19:40.450Z
updatedAt: 2024-10-07T20:51:34.352Z
publishedAt: 2024-10-07T20:51:34.352Z
contentType: updates
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: 2024-03-15-discontinuation-of-legacy-payment-connectors
locale: pt
legacySlug: descontinuidade-de-conectores-legados-de-pagamento
announcementImageID: 'undefined'
announcementSynopsisPT: 'Conectores de pagamento legados serão removidos da plataforma VTEX'
---

Em prosseguimento ao processo de [descontinuidade dos conectores legados de pagamento](/pt/announcements/2023-10-13-conectores-legados-de-pagamentos-serao-descontinuados-em-2024), a tabela abaixo apresenta os conectores legados a serem removidos da plataforma VTEX e os novos conectores (integrados via Payment Provider Protocol) já disponíveis para substituí-los:

| **Conector legado** | **Nova versão (Conector PPP)** |
| :---: | :---: |
| Adyen | [AdyenV3](/pt/tutorial/configurar-pagamento-com-adyenv3--7xAz67E2Eg63LWCQNjVdwv) |
| AuthorizeNet/AuthorizeDotNet | - |
| BankInvoiceItau/BankIssuedInvoiceItau | [MaxiPagoV4](/pt/docs/tutorials/configurar-pagamento-com-maxipagov4) |
| BankInvoiceSantander/BankIssuedInvoiceSantander | [Egetnet](/pt/docs/tutorials/configurar-adquirente-getnet-com-o-conector-egetnet) |
| Bradesco/RegisteredBankInvoiceBradesco | [ShopfacilPayment](/pt/docs/tutorials/configurar-pagamento-com-shopfacil) |
| Braspag/BraspagV2 | [CieloEcommerce](/pt/docs/tutorials/configurar-pagamento-com-cieloecommerce) |
| Cielo/CieloV3 | [CieloEcommerce](/pt/docs/tutorials/configurar-pagamento-com-cieloecommerce) |
| Credomatic | - |
| CyberSource | [Cybersource IO](/pt/docs/tutorials/configurar-gateway-cybersource) |
| Decidir/DecidirV1 | [Payway](/pt/docs/tutorials/configurar-pagamento-com-payway) |
| ERede/E-Rede V2/ERedeRest | [Itaú Rede](/pt/docs/tutorials/configurar-pagamento-com-itau-rede) |
| Firstdata | [Fiserv AR](/pt/docs/tutorials/configurar-pagamento-com-fiserv-ar) ou [Fiserv MX](/pt/docs/tutorials/configurar-pagamento-com-fiserv-mx) |
| ItauShopline | [MaxiPagoV4](/pt/docs/tutorials/configurar-pagamento-com-maxipagov4) |
| MaxiPago | [MaxiPagoV4](/pt/docs/tutorials/configurar-pagamento-com-maxipagov4) |
| MercadoPagoV1 | [MercadoPagoV2](/pt/docs/tutorials/configurar-o-subadquirente-mercadopagov2) |
| PagHiper | [PagHiperV2](/pt/docs/tutorials/configurar-pagamento-com-paghiperv2) ou [PagHiperV3](/pt/docs/tutorials/configurar-pagamento-com-paghiperv3) |
| PagoEfectivo | [PagoEfectivoV2](/pt/docs/tutorials/configurar-pagamento-com-pagoefectivov2)  |
| PagosNet | - |
| PagosWeb | [Bamboo-Payments](/pt/docs/tutorials/configurar-pagamento-com-bamboo-payments) |
| PagSeguro/PagSeguroDirect | [PagBankV3](/pt/docs/tutorials/configurar-o-pagseguro-v3) |
| PayPal/PayPalPlus | [PayPalV2](/pt/docs/tutorials/configurar-pagamento-com-paypalv2) |
| PayU/PayUGlobal | [PayUv2](/pt/docs/tutorials/configurar-pagamento-com-payuv2) |
| Redsys/RedsysV2 | [RedsysEXP](/pt/docs/tutorials/configurar-pagamento-com-redsysexp) |
| Sitef/SitefDirectSale/SitefPreauth | [ESITEF](/pt/docs/tutorials/configurar-pagamento-com-e-sitef) |
| WebPay/WebPay2P | [Transbank Webpay](/pt/docs/tutorials/configurar-pagamento-com-transbank-webpay) |

## O que precisa ser feito?

Caso a sua loja utilize algum dos conectores legados listados acima, realize as ações específicas de acordo com a situação de cada conector:

- __Conector legado não possui ainda conector PPP correspondente disponível__: abra um ticket no [Suporte VTEX](https://supporticket.vtex.com/support) para que o time de CX responsável pela sua conta possa auxiliá-lo na verificação de quais conectores PPP disponíveis são mais adequados ao seu tipo de operação e podem ser configurados em sua loja.

- __Conector PPP disponível para substituir conector legado__: entre em contato com o seu provedor de pagamento para obter mais informações sobre o processo de migração e configuração do novo conector em sua loja.

