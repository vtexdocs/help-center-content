---
title: 'Facetas do Faststore considerando não remover facetas definidas como ne hidden'
id: 4EElvOEvMzcu52fhNOVJGM
status: PUBLISHED
createdAt: 2024-05-08T18:35:17.015Z
updatedAt: 2024-05-08T18:36:15.922Z
publishedAt: 2024-05-08T18:36:15.922Z
firstPublishedAt: 2024-05-08T18:35:18.742Z
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slug: facetas-do-faststore-considerando-nao-remover-facetas-definidas-como-ne-hidden
locale: pt
kiStatus: Backlog
internalReference: 1029837
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>



O comportamento esperado na API de facetas do IS é não trazer facetas com true oculto, mas há algumas exceções para isso, por exemplo, quando a faceta é selecionada na consulta, a API traz a faceta nos resultados com a propriedade oculta como true, e não estamos considerando essa informação

## Simulação



Filtro para uma consulta com a faceta oculta, como, por exemplo:

https://storeframework.vtex.app/new-collection?productclusternames=new-collection&fuzzy=0&operator=and&facets=productclusternames%2Cfuzzy%2Coperator&sort=score_desc&page=0

Nesse caso, productClusterNames é definido como oculto, mas, como está sendo filtrado, é exibido no navegador de filtro

## Workaround


N/A




