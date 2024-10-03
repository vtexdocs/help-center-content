---
title: 'A API de criação de kits não está calculando os preços dos componentes'
id: 3yyIEv6o3CjIbUg4KoLOWT
status: PUBLISHED
createdAt: 2023-03-28T16:34:55.491Z
updatedAt: 2024-04-02T18:36:44.624Z
publishedAt: 2024-04-02T18:36:44.624Z
firstPublishedAt: 2023-03-28T16:34:55.990Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: kit-creation-api-is-not-calculating-component-prices
locale: pt
kiStatus: Backlog
internalReference: 739693
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Atualmente, a carga útil da API de inserção de KIT tem um formato que solicita os componentes que compõem esse kit e suas respectivas quantidades e preços.

O preço esperado de um KIT deve ser uma soma ponderada dos preços de seus componentes * suas quantidades necessárias para compor o kit.

Por exemplo, se eu tiver um KIT que seja:

Componente (A) --> $10, 2 unidades
Componente (B) --> $25, 1 unidade

O preço do kit deve ser: 10*2 + 25 === 45.

Isso é o que acontece no KIT UI SkuKit.aspx.

Entretanto, a API https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/stockkeepingunitkit não está fazendo essas atualizações de preço para outros componentes além do primeiro adicionado.


## Simulação


Crie um kit usando a seguinte API com um componente com uma quantidade de 2 ou mais https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/stockkeepingunitkit e, em seguida, verifique seu preço na interface do usuário do módulo de preços.



## Workaround


Insira o preço final do kit diretamente por meio da API de preços.

