---
title: 'Problema na ordenação de melhor desconto'
id: 7JlXcIcicgQwkOkCuce4Ow
status: PUBLISHED
createdAt: 2017-04-03T20:07:11.542Z
updatedAt: 2022-12-22T20:45:13.711Z
publishedAt: 2022-12-22T20:45:13.711Z
firstPublishedAt: 2017-04-03T20:24:06.588Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Portal (CMS)
slug: problema-na-ordenacao-de-melhor-desconto
locale: pt
kiStatus: Backlog
internalReference: 
---

## Sumário

A ordenação do site não está funcionando corretamente, pois quando é feito o filtro por melhor preço ou melhores avaliações, os produtos são ordenados aparentemente de forma aleatória, ou seguindo um filtro anterior, não obedecendo ao filtro solicitado.

Os filtros são renderizados de forma automática quando o controle `<vtex.cmc:searchResult/>` é usado.

## Simulação

- Abrir uma página de vitrine.
- Usar o filtro para ordenar a vitrine.
- ou forçar diretamente na URL por www.{AccountName}.com.br/categoria?PS=12&O=OrderByReviewRateDESC.


## Workaround

Omitir essa opção de filtro da combo renderizada pelo controle `<vtex.cmc:searchResult/>` via JavaScript.

