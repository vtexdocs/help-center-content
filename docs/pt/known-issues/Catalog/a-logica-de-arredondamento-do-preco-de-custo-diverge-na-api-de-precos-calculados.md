---
title: 'A lógica de arredondamento do preço de custo diverge na API de preços calculados'
id: 744fWEh7fgMHwvidFEhlV
status: PUBLISHED
createdAt: 2023-06-12T17:15:06.190Z
updatedAt: 2023-06-12T17:15:06.890Z
publishedAt: 2023-06-12T17:15:06.890Z
firstPublishedAt: 2023-06-12T17:15:06.890Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: cost-price-rounding-logic-diverges-on-computed-prices-api
locale: pt
kiStatus: Backlog
internalReference: 842336
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Atualmente, a API de preços computados tem uma propriedade chamada "preço de custo" que, em cenários específicos, pode mostrar uma diferença de 1 centavo entre seu valor na interface do usuário e a API de preços computados https://developers.vtex.com/docs/api-reference/pricing-api#get-/pricing/prices/-itemId-/computed/-priceTableId-

## Simulação


Defina um produto com um preço de custo de 67,82 e nenhuma marcação.

Verifique a interface do usuário de preços e a resposta dessa API, que deve fornecer:

 ![](https://vtexhelp.zendesk.com/attachments/token/r33X4C7mwiOwq9GkcB72ngCur/?name=image.png)

Mesmo que o valor correto seja 67,8

## Workaround


A definição de preços fixos ou um arredondamento de preços resolve o problema.





