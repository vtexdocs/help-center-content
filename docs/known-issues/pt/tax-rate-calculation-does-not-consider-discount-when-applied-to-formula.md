---
title: 'Taxa não considera desconto ao calcular valor aplicado por fórmula'
id: 58sEdphNQ4c4QEY8ewqYOq
status: PUBLISHED
createdAt: 2017-08-01T17:33:07.889Z
updatedAt: 2022-12-22T20:43:05.452Z
publishedAt: 2022-12-22T20:43:05.452Z
firstPublishedAt: 2017-08-15T18:56:51.500Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slug: taxa-nao-considera-desconto-ao-calcular-valor-aplicado-por-formula
kiStatus: Backlog
internalReference: 
---

## Sumário

O Pricing não está considerando uma promoção com desconto quando criarmos uma Taxa utilizando formula que veja o Valor total do pedido.

Ex como está:
Taxa configurada como ((total + shipping) * 0.1)

|||
|-|-|
|Subtotal|100,00|
|Descontos|10,00|
|Entrega|20,00|
|__Taxa__|__12,00__|
|Total|122,00|


Ex como deveria ser:
Taxa configurada como ((total + shipping) * 0.1)

|||
|-|-|
|Subtotal|100,00|
|Descontos|10,00|
|Entrega|20,00|
|__Taxa__|__11,00__|
|Total|121,00|

No exemplo de como deveria ser, pode-se observar que está sendo calculado o valor total na fórmula da Taxa considerando o Desconto de 10 reais.

## Simulação

Criar uma promoção qualquer e uma taxa com fórmula ex: ((total + shipping) * 0.1)
Simular no carrinho um produto que contenha essa promoção e essa taxa.
O valor do imposto será calculado com base no valor total, sem considerar o desconto da promoção.

## Workaround

Não há Workaround.

