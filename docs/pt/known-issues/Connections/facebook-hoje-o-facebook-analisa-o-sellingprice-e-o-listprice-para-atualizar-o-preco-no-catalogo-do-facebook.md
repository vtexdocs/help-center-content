---
title: '[Facebook] Hoje, o Facebook analisa o sellingPrice e o listPrice para atualizar o preço no catálogo do Facebook'
id: 4CDh12JM3y9AqBnuGDHgnT
status: PUBLISHED
createdAt: 2024-04-03T12:41:15.144Z
updatedAt: 2024-04-03T12:41:16.005Z
publishedAt: 2024-04-03T12:41:16.005Z
firstPublishedAt: 2024-04-03T12:41:16.005Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: facebook-today-facebook-looks-at-sellingprice-and-listprice-to-update-the-price-in-the-facebook-catalog
locale: pt
kiStatus: Backlog
internalReference: 924411
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Hoje, o Facebook analisa o sellingPrice e o listPrice para atualizar o preço no catálogo do Facebook.

## Simulação


O vendedor está usando unitMultiplier = 0,5

O Checkout faz o seguinte cálculo quando o item tem uma unidade multiplicadora, portanto, sellingPrice = price * unitMultiplier = 3999 * 0,5 = 1999,5. O arredondamento do checkout ignorará o decimal e considerará 1999

Qual é o problema com esse cálculo?
Quando o vendedor usa 0,5, por exemplo, no Facebook, estamos atualizando-o como o preço de liquidação no Facebook.
2. Quando o vendedor usa um multiplicador maior que 1,39, ele se enquadra no preço promocional, embora seja maior que o listPrice

## Workaround


o vendedor usa unitMultiplier = 10000





