---
title: Considerar parâmetro map na criação da tag canonical
id: ilHxRrPwliYiaGKaqQecE
status: PUBLISHED
createdAt: 2017-05-09T15:51:15.454Z
updatedAt: 2022-12-22T20:48:51.904Z
publishedAt: 2022-12-22T20:48:51.904Z
firstPublishedAt: 2017-05-17T15:23:15.611Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: considerar-parametro-map-na-criacao-da-tag-canonical
kiStatus: Backlog
internalReference: 
---

## Sumário

Ao acessar qualquer busca com o parâmetro `map` na URL (ex: `www.nomedasualoja.com.br/departamento/categoria/nomefiltro?PS=32&map=c,c,specificationFilter_7`), o mesmo é removido para a renderização da tag canonical. No entanto, o parâmetro map é essencial pra definir o conteúdo carregado (em relação aos produtos da página com map) e, assim, ao removê-lo, o resultado poderá sofrer alterações.


## Simulação

Para simular basta uma URL com map. Por exemplo:

`www.nomedasualoja.com.br/departamento/categoria/nomefiltro?PS=32&map=c,c,specificationFilter_7`

Ao verificar a canonical da página (você pode encontrar a canonical clicando com o botão direito do mouse em "código fonte da página"), é possível ver que ela só renderiza até a interrogação. Neste caso:
`www.nomedasualoja.com.br/departamento/categoria/nomefiltro`

Isso costuma ocorrer com filtros, coleções e hotsites.

## Workaround

Hoje não temos uma solução paliativa para esse cenário.


