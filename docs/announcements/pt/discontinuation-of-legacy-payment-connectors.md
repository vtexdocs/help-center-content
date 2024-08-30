---
title: 'Descontinuidade de conectores legados de pagamento'
id: 11SHyRwcAr4fs46K7PccOr
status: PUBLISHED
createdAt: 2024-03-15T10:19:40.450Z
updatedAt: 2024-08-20T13:27:49.613Z
publishedAt: 2024-08-20T13:27:49.613Z
contentType: updates
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slug: descontinuidade-de-conectores-legados-de-pagamento
locale: pt
legacySlug: descontinuidade-de-conectores-legados-de-pagamento
announcementImageID: ''
announcementSynopsisPT: 'Conectores de pagamento legados serão removidos da plataforma VTEX'
---

Em prosseguimento ao processo de [descontinuidade dos conectores legados de pagamento](https://help.vtex.com/pt/announcements/conectores-legados-de-pagamentos-serao-descontinuados-em-2024--4R5YIjUu1IWkiOHzXtQU14), a tabela abaixo apresenta os conectores legados a serem removidos da plataforma VTEX e os novos conectores (integrados via Payment Provider Protocol) já disponíveis para substituí-los:

| **Conector legado** | **Nova versão (Conector PPP)** |
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
| PagHiper | PagHiperV2 ou PagHiperV3 |
| PagoEfectivo | PagoEfectivoV2  |
| PagosNet | - |
| PagosWeb | bamboo |
| PagSeguro/PagSeguroDirect | PagBankV3 |
| PayPal/PayPalPlus | PayPalV2 |
| PayU/PayUGlobal | PayUv2 |
| Redsys/RedsysV2 | RedsysEXP |
| Sitef/SitefDirectSale/SitefPreauth | ESITEF |
| WebPay/WebPay2P | Transbank Webpay |

## O que precisa ser feito?

Caso a sua loja utilize algum dos conectores legados listados acima, realize as ações específicas de acordo com a situação de cada conector:

- __Conector legado não possui ainda conector PPP correspondente disponível__: abra um ticket no [Suporte VTEX](https://help.vtex.com/pt/support) para que o time de CX responsável pela sua conta possa auxiliá-lo na verificação de quais conectores PPP disponíveis são mais adequados ao seu tipo de operação e podem ser configurados em sua loja.

- __Conector PPP disponível para substituir conector legado__: entre em contato com o seu provedor de pagamento para obter mais informações sobre o processo de migração e configuração do novo conector em sua loja.

