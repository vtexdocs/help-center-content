---
title: "Preços restritos ao valor máximo 'Int32' na API Change Price"
id: 5mzOjCUYs7vXUkttbsK0za
status: PUBLISHED
createdAt: 2022-04-25T17:28:05.159Z
updatedAt: 2024-02-16T20:26:04.281Z
publishedAt: 2024-02-16T20:26:04.281Z
firstPublishedAt: 2022-04-25T17:28:05.773Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: precos-restritos-ao-valor-maximo-int32-na-api-change-price
locale: pt
kiStatus: No Fix
internalReference: 566142
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


O Checkout REST API Change price não suporta preços maiores que um valor "Int32". Portanto, a aplicação de um "preço manual" será restrita ao número "2.147.483.647" (número em decimais).

## Simulação


Ao usar a API "Change price" (https://developers.vtex.com/vtex-rest-api/reference/pricechange), o envio de uma carga útil como "{"price":2500000000}" (que representa US$ 25.000.000,00) retornará um erro 500 com a mensagem "Value was too large or too small for an Int32."

## Workaround


Use a API Handle cart items para atualizar o preço.




