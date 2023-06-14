---
title: 'Os links internos de uma página de uma coleção têm URL canônico inexistente'
id: 1sJzMe74vio2Wkm60q6m6i
status: PUBLISHED
createdAt: 2017-12-21T17:38:14.109Z
updatedAt: 2022-12-22T20:46:13.577Z
publishedAt: 2022-12-22T20:46:13.577Z
firstPublishedAt: 2017-12-21T18:42:13.086Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Portal (CMS)
slug: os-links-internos-de-uma-pagina-de-uma-colecao-tem-url-canonico-inexistente
kiStatus: Backlog
internalReference: 
---

## Sumário

Ao criar uma URL no CMS e associar o URL para uma coleção por padrão, é possível criar uma URL amigável para uma coleção.

Ao acessar o link, um resultado de busca é gerado com um sidebar de filtros laterais. Clicando em qualquer um desses filtros, no link final da URL vai ser adicionado o ID da coleção, juntamente com outros parâmetros.

Ao acessar em qualquer um desses links e analisar a URL canonical, é evidente que os parâmetros são excluídos e o ID da coleção é mantido no final da URL como um path, o que produz que essa url canonical seja inexistente na VTEX e afeta o SEO da loja.


## Simulação

1. Acesse o link que apresenta o conteúdo da coleção.
2. Acesse em qualquer link dos filtros laterais.
3. Inspecione o HTML e analise a tag canonical.
4. Entre na URL indicada na tag canonical e poderá ver que tem o ID da coleção no final e não existe essa URL.


## Workaround

Atualmente não há workaround para esse caso.

