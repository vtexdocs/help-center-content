---
title: 'Preços restritos a "Int32" valor máximo no checkout APIs'
id: 5mzOjCUYs7vXUkttbsK0za
status: PUBLISHED
createdAt: 2022-04-25T17:28:05.159Z
updatedAt: 2022-11-25T21:51:41.123Z
publishedAt: 2022-11-25T21:51:41.123Z
firstPublishedAt: 2022-04-25T17:28:05.773Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: precos-restritos-a-int32-valor-maximo-no-checkout-apis
kiStatus: Backlog
internalReference: 566142
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Os APIs REST não suportam preços superiores a um valor "Int32". Portanto, a aplicação de um "preço manual" será restrita ao número "2.147.483.647" (número em casas decimais).



## Simulação


Ao utilizar a API "Change price" (https://developers.vtex.com/vtex-rest-api/reference/pricechange), o envio de uma carga útil como "{"price":2500000000}" (que representa $25.000.000,00) retornará um erro de 500 com a mensagem "Value was too large or too small for an Int32".



## Workaround


N/A

