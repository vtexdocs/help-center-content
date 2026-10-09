---
title: 'Por que não aparece a forma de pagamento do pedido na VTEX?'
excerpt: "Pedidos de marketplace em geral são pagos no marketplace. Esse meio de pagamento não vem para a VTEX porque não altera o fluxo do pedido aqui."
id: frequentlyAskedQuestions_695
status: PUBLISHED
createdAt: 2017-04-27T22:29:28.700Z
updatedAt: 2026-10-07T00:00:00.000Z
publishedAt: 2019-12-31T14:24:53.813Z
firstPublishedAt: 2017-04-27T23:02:33.099Z
contentType: frequentlyAskedQuestion
productTeam: Payments
author: authors_3
slugEN: why-doesnt-the-payment-method-appear-on-the-order-on-vtex
locale: pt
legacySlug: por-que-nao-aparece-a-forma-de-pagamento-do-pedido-na-vtex
---

Quando uma compra é realizada no marketplace, [para a maioria das integrações](http://vtex.github.io/docs/integracao/marketplace/index.html), o pagamento é realizado no marketplace para posteriormente ser repassado ao seller. Nesse fluxo, o pagamento é realizado pelas formas de pagamento cadastradas no marketplace, ou seja, o processo de pagamento não passa pela VTEX.

Por isso, quando o pedido é integrado, não é repassado para a VTEX a informação da forma de pagamento, pois não é algo que vá impactar o fluxo do pedido na VTEX.

> ℹ️ O [VTEX Copilot](/pt/docs/tutorials/vtex-copilot-no-admin-vtex), no Admin VTEX, pode verificar este pedido: envie o número do pedido e ele mostra os dados de pagamento registrados e se a compra foi paga no marketplace, o que explica a ausência da forma de pagamento.
