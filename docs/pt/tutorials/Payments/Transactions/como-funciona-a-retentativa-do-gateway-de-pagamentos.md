---
title: 'Como funciona a retentativa do gateway de pagamentos?'
id: 2JaHsjQIs0ceks0e2Mkwgu
status: PUBLISHED
createdAt: 2019-01-24T21:38:42.128Z
updatedAt: 2019-12-31T15:27:07.836Z
publishedAt: 2019-12-31T15:27:07.836Z
firstPublishedAt: 2019-01-24T21:38:42.460Z
contentType: tutorial
productTeam: Financial
author: authors_59
slugEN: how-does-payment-gateway-retry-work
locale: pt
legacySlug: como-funciona-a-retentativa-do-gateway-de-pagamentos
subcategoryId: 3Gdgj9qfu8mO0c0S4Ukmsu
---

A retentativa é uma feature do gateway da VTEX que tem como objetivo __não perder pagamentos__. Caso algum sistema da cadeia de pagamentos não consiga prosseguir com uma transação no momento em que um pagamento é realizado, o gateway da VTEX realiza retentativas de envio das informações do pagamento. Com isso, a venda não é perdida. 

Abaixo, seguem os casos onde o gateway da VTEX realiza as retentativas:

- Operadora de pagamento sinaliza que um pagamento ainda está pendente.
- Operadora de pagamento fora do ar.
- Operadora de pagamento leva mais tempo para responder do que o esperado.
- Boletos que ainda não foram pagos. Neste caso, a retentativa ocorre apenas para boletos que não precisam de conciliação manual.
- Pagamentos realizados com wallets que possuam APIs de consulta próprias (como PagSeguro, Paypal etc.)
- Pedidos que caem em análises de fraude manuais.

## Artigos relacionados

- [O que é um gateway de pagamentos?](/pt/tutorial/o-que-e-um-gateway-de-pagamentos)
- [Diferença entre meios de pagamento e condições de pagamento](/pt/tutorial/diferenca-entre-meios-de-pagamento-e-condicoes-de-pagamento)
- [O que é um adquirente?](/pt/tutorial/o-que-e-um-adquirente)
