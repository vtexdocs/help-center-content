---
title: 'Conectores legados de pagamentos serão descontinuados em 2024'
id: 4R5YIjUu1IWkiOHzXtQU14
status: PUBLISHED
createdAt: 2023-10-13T12:52:48.753Z
updatedAt: 2024-09-24T18:40:15.413Z
publishedAt: 2024-09-24T18:40:15.413Z
contentType: updates
productTeam: Shopping
author: 2Gy429C47ie3tL9XUEjeFL
slugEN: 2023-10-13-legacy-payment-connectors-will-be-discontinued-in-2024
locale: pt
legacySlug: conectores-legados-de-pagamentos-serao-descontinuados-em-2024
announcementImageID: 'undefined'
announcementSynopsisPT: 'Em 2024, a VTEX descontinuará os conectores legados de pagamentos, que não utilizam o Payment Provider Protocol.'
---

Para integrar meios de pagamentos à plataforma VTEX, provedores de pagamentos podem criar conectores de pagamentos utilizando o [Payment Provider Protocol](/pt/tutorial/payment-provider-protocol--RdsT2spdq80MMwwOeEq0m) (PPP). Entretanto, há diversos conectores legados utilizando versões anteriores da nossa arquitetura de integração de pagamentos, que são menos estáveis e menos performáticas.

> ⚠️ **Atualização (15/03/2024): **[Lista de conectores disponíveis para migração](/pt/announcements/descontinuidade-de-conectores-legados-de-pagamento--11SHyRwcAr4fs46K7PccOr).

## O que está mudando?

> ❗ As mudanças descritas neste documento não terão impacto na Black Friday 2023. Serão realizadas apenas no primeiro trimestre de 2024.

A VTEX está iniciando a descontinuação destes conectores legados, que acontecerá em etapas:

- **31 de janeiro de 2024** - Bloqueio da criação de novas afiliações de gateway usando conectores legados de pagamento. A partir desta data, lojas VTEX não poderão mais configurar conexões com os conectores que serão descontinuados. Todas as regras de pagamento já configuradas continuarão funcionando normalmente, sem impacto nas transações.
- **10 de fevereiro de 2024** - Data limite sugerida para submeter novos conectores para homologação. Caso empresas parceiras desejem desenvolver novos conectores usando o [PPP](/pt/tutorial/payment-provider-protocol--RdsT2spdq80MMwwOeEq0m), para substituir os conectores legados, é necessário que submetam para homologação até esta data. Caso contrário, a VTEX não garante a homologação de novos conectores em tempo hábil para que as lojas façam a configuração com o novo conector. Saiba mais sobre o [processo de homologação de novos conectores de pagamento](https://developers.vtex.com/docs/guides/payments-integration-payment-provider-homologation).
- **31 de março de 2024** - Descontinuação definitiva de conectores que não usam o [PPP](/pt/tutorial/payment-provider-protocol--RdsT2spdq80MMwwOeEq0m). A partir desta data a VTEX bloqueará todas as transações de conectores legados de pagamentos.

### Lista dos conectores legados de pagamentos

Confira a lista de todos os conectores que serão descontinuados:

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

## Por que estamos fazendo essa mudança?

Os conectores que utilizam o [PPP](/pt/tutorial/payment-provider-protocol--RdsT2spdq80MMwwOeEq0m) possuem taxas de autorização maiores do que os conectores legados. Portanto, migrar para novos conectores tende a aumentar as vendas das lojas VTEX.

Além disso, muitos conectores legados estão desatualizados em termos de tecnologia. A migração para conectores que utilizam o [PPP](/pt/tutorial/payment-provider-protocol--RdsT2spdq80MMwwOeEq0m) garante que as lojas VTEX utilizarão tecnologias mais modernas e estáveis oferecidas pela VTEX.

## O que precisa ser feito?

As ações necessárias a partir desta mudança dependem do seu contexto no ecossistema VTEX. Confira abaixo qual opção melhor se aplica ao seu negócio.

### Responsáveis por conectores legados de pagamentos

Se você é um provedor de pagamentos responsável por um ou mais [conectores que serão descontinuados](#lista-dos-conectores-legados-de-pagamentos), você deve desenvolver um novo conector utilizando o [Payment Provider Protocol](/pt/tutorial/payment-provider-protocol--RdsT2spdq80MMwwOeEq0m). Caso contrário, não poderá processar transações a partir da data de descontinuação mencionada acima.

Neste caso, recomendamos que submeta seu novo conector para homologação até 10 de fevereiro de 2024, para que as lojas tenham tempo hábil para reconfigurar suas conexões de pagamentos antes da descontinuação. Saiba mais sobre o [processo de homologação de novos conectores de pagamento](https://developers.vtex.com/docs/guides/payments-integration-payment-provider-homologation).

> ❗ A VTEX não pode garantir que seu novo conector de pagamentos estará disponível para lojistas VTEX antes da descontinuação oficial caso você o submeta para homologação após esta data.

Caso tenha dúvidas sobre este processo ou queira alinhar a comunicação conjunta com lojistas, entre em contato com seu Partner Manager VTEX.

### Lojas que utilizam de conectores legados de pagamentos

Se a sua loja utiliza um dos [conectores que serão descontinuados](#lista-dos-conectores-legados-de-pagamentos), você deve realizar configuração com o novo conector correspondente àquele provedor de pagamento antes de 31 de março de 2024. Caso contrário, não será possível realizar compras na sua loja utilizando o meio de pagamento em questão.

Ao longo do processo de descontinuação e migração, você pode entrar em contato com seus provedores de pagamentos para acompanhar a evolução e obter mais informações sobre o desenvolvimento dos novos conectores.

