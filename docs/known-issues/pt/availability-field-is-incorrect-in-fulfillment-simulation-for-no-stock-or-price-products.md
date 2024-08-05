---
title: "O campo 'disponibilidade' está incorreto na Simulação de Cumprimento para produtos sem estoque ou preço"
id: 1k2zcLEN5vG6mnksLwEXxp
status: PUBLISHED
createdAt: 2023-10-04T14:22:53.519Z
updatedAt: 2023-10-04T14:22:54.219Z
publishedAt: 2023-10-04T14:22:54.219Z
firstPublishedAt: 2023-10-04T14:22:54.219Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: o-campo-disponibilidade-esta-incorreto-na-simulacao-de-cumprimento-para-produtos-sem-estoque-ou-preco
locale: pt
kiStatus: Backlog
internalReference: 773537
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Quando um produto está fora de estoque ou não tem preço, a simulação de atendimento informa incorretamente o campo `disponibilidade` como `disponível`.
Esse comportamento também se aplica ao contexto da seleção de presentes, em que o campo `selectableGifts` também é afetado por esse problema.


1. Se o item tiver um preço, mas não tiver estoque, a simulação de atendimento retornará `"availability": "nullPrice"` quando não houver endereço;
2. Se o item tiver um preço, mas não houver estoque, a simulação de atendimento retornará `"availability": "available"` quando houver um endereço.

## Simulação



- Tenha um produto sem estoque ou preço em um vendedor
- Faça uma simulação de atendiment

## Workaround


N/A




