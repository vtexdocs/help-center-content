---
title: 'Erro no rateio do desconto quando tem unidade multiplicadora'
id: 1AbljaKsBmoKwGQOMAKo2C
status: PUBLISHED
createdAt: 2018-03-20T19:21:20.708Z
updatedAt: 2022-12-22T20:48:46.897Z
publishedAt: 2022-12-22T20:48:46.897Z
firstPublishedAt: 2018-03-20T19:48:07.230Z
contentType: knownIssue
productTeam: Shopping
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: error-in-apportioning-the-discount-when-there-is-a-multiplier-unit
locale: pt
kiStatus: Backlog
internalReference: 
---

## Sumário

Em casos de pedidos com desconto que possuem itens com unidade multiplicadora não inteira, o arredondamento está sendo realizado por item, e não após a soma de todos os itens.

Isso pode acarretar a perda de alguns centavos.

## Simulação

- Criar promoção percentual.
- Receber pedido com itens que utilizem unidade multiplicadora não inteira.
- Analisar o rateio do desconto.

## Workaround

No momento, não temos um workaround para este cenário.

