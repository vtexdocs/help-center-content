---
title: 'Por que o pedido não fatura no marketplace?'
excerpt: "A nota pode estar na VTEX enquanto o marketplace ainda mostra um status anterior. Veja os logs do Bridge e envie a chave de acesso da NF, se for exigida."
id: frequentlyAskedQuestions_715
status: PUBLISHED
createdAt: 2017-04-27T22:28:23.898Z
updatedAt: 2026-11-05T19:12:00.000Z
publishedAt: 2020-05-11T15:48:16.337Z
firstPublishedAt: 2017-04-27T23:02:33.970Z
contentType: frequentlyAskedQuestion
productTeam: Marketplace
author: authors_3
slugEN: why-isnt-the-order-invoiced-on-the-marketplace
locale: pt
legacySlug: por-que-o-pedido-nao-fatura-no-marketplace
---

Este cenário é caracterizado pela inserção da nota fiscal e da fatura do pedido na VTEX, mas a permanência do status anterior no marketplace.

## Verifique o Bridge

Como em qualquer etapa da compra, algo pode ocorrer durante a integração. Porém, isso sempre ficará registrado no Bridge, para ajudar a entender e saber como corrigir.

[Saiba como analisar erros de integração no Bridge.](/pt/docs/tutorials/verificando-integracao-no-bridge)

## Insira a chave de acesso com a nota fiscal

Alguns marketplaces exigem o fornecimento da chave de acesso da nota fiscal no momento da inserção da nota fiscal no pedido. Sem essa informação, não é possível inserir dados de rastreio na VTEX nesses marketplaces.

Nesse caso, o pedido passa ao status faturado apenas na VTEX, sendo necessário atualizar o status manualmente no painel do próprio marketplace.

A chave de acesso da nota fiscal é um instrumento auxiliar para a consulta da NF-e, permitindo ao detentor desse documento confirmar sua efetiva existência. O nome do campo é **Invoice Key**:

![ChaveDeAcesso](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/faq/marketplace/por-que-o-pedido-nao-fatura-no-marketplace_1.png)

> ℹ️ Este dado é gerado na emissão da nota fiscal e é de responsabilidade do ERP. Caso tenha um, solicite-o.

Esse valor pode ser inserido manualmente pelo admin ou pela [API de notificação da fatura](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/oms/pvt/orders/-orderId-/invoice), pelo campo **invoiceKey**.
