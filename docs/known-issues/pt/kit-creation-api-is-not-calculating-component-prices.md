---
title: 'A API de criação de kits não está calculando os preços dos componentes'
id: 3yyIEv6o3CjIbUg4KoLOWT
status: PUBLISHED
createdAt: 2023-03-28T16:34:55.491Z
updatedAt: 2023-03-28T16:34:55.990Z
publishedAt: 2023-03-28T16:34:55.990Z
firstPublishedAt: 2023-03-28T16:34:55.990Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: a-api-de-criacao-de-kits-nao-esta-calculando-os-precos-dos-componentes
kiStatus: Backlog
internalReference: 739693
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Atualmente, a carga útil do KIT API de inserção tem um formato que solicita os componentes que compõem este kit e suas quantidades e preços de acordo com as quantidades.

O preço esperado de um KIT deve ser uma soma ponderada dos preços de seus componentes * suas quantidades necessárias para compor o kit.

Por exemplo, se eu tiver um KIT que seja:

Componente (A) --> $10, 2 unidades
Componente (B) --> $25, 1 unidade

O preço do kit deve ser: 10*2 + 25 === 45.

Isto é o que acontece no KIT UI SkuKit.aspx.

Entretanto, a API https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/stockkeepingunitkit não contabiliza múltiplos componentes na soma, portanto, o preço só considera cada componente uma vez no cálculo (então, nosso exemplo acima seria, incorretamente, 10 + 25 = 35).





##

## Simulação


Crie um kit utilizando o seguinte API com um componente com uma quantidade de 2 ou mais https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/stockkeepingunitkit e depois verifique seu preço no módulo de preços UI.





##

## Workaround


Ao criar um kit, vá até a IU e salve os componentes mais uma vez para executar a lógica de cálculo da referida soma ponderada.

