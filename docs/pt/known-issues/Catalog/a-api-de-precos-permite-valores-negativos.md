---
title: 'A API de preços permite valores negativos'
id: 64gkWnDs5pvv8Ny1TJtTI0
status: PUBLISHED
createdAt: 2023-03-20T20:09:54.998Z
updatedAt: 2023-03-20T20:09:55.649Z
publishedAt: 2023-03-20T20:09:55.649Z
firstPublishedAt: 2023-03-20T20:09:55.649Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: pricing-api-allows-negative-values
locale: pt
kiStatus: Backlog
internalReference: 774548
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Atualmente, o PUT Price API permite a entrada de valores negativos via PUT API Payload, se você definir a marcação e o preço base para valores negativos, você definirá o produto como indisponível.




##

## Simulação


Sobre a API https://api.vtex.com/account/pricing/prices/1

Defina o seguinte preço:

`{`
"itemId": "1",`
"listPreço": nulo,`
"costPrice": 11.9,`
"markup": -100,`
"preço base": nulo,`
``Preços fixos'': [ ]`
`}`

A resposta será:

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)

O que quebra a lógica de preço e torna o produto indisponível, uma vez que o checkout e as aplicações de catálogo não são capazes de lidar com valores de preço negativos.



##

## Workaround


n/d





