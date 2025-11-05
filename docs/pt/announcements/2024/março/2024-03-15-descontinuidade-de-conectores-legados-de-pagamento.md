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

Em prosseguimento ao processo de [descontinuidade dos conectores legados de pagamento](/pt/announcements/conectores-legados-de-pagamentos-serao-descontinuados-em-2024--4R5YIjUu1IWkiOHzXtQU14), a tabela abaixo apresenta os conectores legados a serem removidos da plataforma VTEX e os novos conectores (integrados via Payment Provider Protocol) já disponíveis para substituí-los:

| **Conector legado** | **Nova versão (Conector PPP)** |
| :---: | :---: |
| Adyen | [AdyenV3](/pt/tutorial/configurar-pagamento-com-adyenv3--7xAz67E2Eg63LWCQNjVdwv) |
| AuthorizeNet/AuthorizeDotNet | - |
| BankInvoiceItau/BankIssuedInvoiceItau | [MaxiPagoV4](/pt/tutorial/configurar-pagamento-com-maxipagov4--4pWPhTago6uDxjFMB6kln3) |
| BankInvoiceSantander/BankIssuedInvoiceSantander | [Egetnet](/pt/tutorial/configurar-adquirente-getnet-com-o-conector-egetnet--75kwGKPKnK8mwiEmQGYiWq) |
| Bradesco/RegisteredBankInvoiceBradesco | [ShopfacilPayment](/pt/tutorial/configurar-pagamento-com-shopfacil--4v3z3CLrgZ2bByMx7uoMeG) |
| Braspag/BraspagV2 | [CieloEcommerce](/pt/tutorial/configurar-pagamento-com-cieloecommerce--6zuELBqEo0QzApbU4l7L4) |
| Cielo/CieloV3 | [CieloEcommerce](/pt/tutorial/configurar-pagamento-com-cieloecommerce--6zuELBqEo0QzApbU4l7L4) |
| Credomatic | - |
| CyberSource | [Cybersource IO](/pt/tutorial/configurar-gateway-cybersource--6nhvUTrLxeacsoYG6GkGM) |
| Decidir/DecidirV1 | [Payway](/pt/tutorial/configurar-pagamento-com-payway--wHkvX7olfPPsAdeFq7obp) |
| ERede/E-Rede V2/ERedeRest | [Itaú Rede](/pt/tutorial/configurar-pagamento-com-itau-rede--77BYOKxVzONWulAf8dTVSX) |
| Firstdata | [Fiserv AR](/pt/tutorial/configurar-pagamento-com-fiserv-ar--1qF6HiMShBpMCyzz53edlx) ou [Fiserv MX](/pt/tutorial/configurar-pagamento-com-fiserv-mx--3vcYUO1y0Zp9DWVI1AcvfK) |
| ItauShopline | [MaxiPagoV4](/pt/tutorial/configurar-pagamento-com-maxipagov4--4pWPhTago6uDxjFMB6kln3) |
| MaxiPago | [MaxiPagoV4](/pt/tutorial/configurar-pagamento-com-maxipagov4--4pWPhTago6uDxjFMB6kln3) |
| MercadoPagoV1 | [MercadoPagoV2](/pt/tutorial/configurar-o-subadquirente-mercadopagov2--1y6k8lCSzJYfPs2yObNFo4) |
| PagHiper | [PagHiperV2](/pt/tutorial/configurar-pagamento-com-paghiperv2--131E6zBcTTkzZtL82cZh1x) ou [PagHiperV3](/pt/tutorial/configurar-pagamento-com-paghiperv3--1dYVbSK0yHNY5vp0gJj4fC) |
| PagoEfectivo | [PagoEfectivoV2](/pt/tutorial/configurar-pagamento-com-pagoefectivov2--63Raoh7hlWoWbMJOAacfMV)  |
| PagosNet | - |
| PagosWeb | [Bamboo-Payments](/pt/tutorial/configurar-pagamento-com-bamboo-payments--33TDZBp1wmgzJdiZtvu1xY) |
| PagSeguro/PagSeguroDirect | [PagBankV3](/pt/tutorial/configurar-o-pagseguro-v3--5Noi1mUbBQ6CyqdeDQtWfw) |
| PayPal/PayPalPlus | [PayPalV2](/pt/tutorial/configurar-pagamento-com-paypalv2--2nGiQVk3YKvOAu8Zg4RKFr) |
| PayU/PayUGlobal | [PayUv2](/pt/tutorial/configurar-pagamento-com-payuv2--7twMgKUZZtJGmR72wS1k3n) |
| Redsys/RedsysV2 | [RedsysEXP](/pt/tutorial/configurar-pagamento-com-redsysexp--7DSQeUbDEgH6yUvtXg4wly) |
| Sitef/SitefDirectSale/SitefPreauth | [ESITEF](/pt/tutorial/configurar-pagamento-com-e-sitef--6UEi0QAlU6BXz5RgWj34Ac) |
| WebPay/WebPay2P | [Transbank Webpay](/pt/tutorial/configurar-pagamento-com-transbank-webpay--3uVwZ1gUx2g5TXGt0CHb44) |

## O que precisa ser feito?

Caso a sua loja utilize algum dos conectores legados listados acima, realize as ações específicas de acordo com a situação de cada conector:

- __Conector legado não possui ainda conector PPP correspondente disponível__: abra um ticket no [Suporte VTEX](/pt/support) para que o time de CX responsável pela sua conta possa auxiliá-lo na verificação de quais conectores PPP disponíveis são mais adequados ao seu tipo de operação e podem ser configurados em sua loja.

- __Conector PPP disponível para substituir conector legado__: entre em contato com o seu provedor de pagamento para obter mais informações sobre o processo de migração e configuração do novo conector em sua loja.

