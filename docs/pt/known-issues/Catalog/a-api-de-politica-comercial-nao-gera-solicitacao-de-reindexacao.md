---
title: "A API de política comercial não gera solicitação de reindexação"
id: 6xAm1zg05zDB3ff8rOloMR
status: PUBLISHED
createdAt: 2023-04-28T18:52:41.010Z
updatedAt: 2023-06-01T13:41:06.525Z
publishedAt: 2023-06-01T13:41:06.525Z
firstPublishedAt: 2023-04-28T18:52:41.427Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: a-api-de-politica-comercial-nao-gera-solicitacao-de-reindexacao
locale: pt
kiStatus: Backlog
internalReference: 276511
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Usar a API https://developers.vtex.com/vtex-rest-api/reference/catalog-api-trade-policy para inserir/excluir uma política comercial em um produto ou a API não gera uma solicitação de reindexação.

## Simulação


Inserir uma política comercial em um produto usando a API, o produto não será reindexado.

## Workaround


Usar qualquer tipo de ação que salve o produto (por API ou interface) depois de adicionar/excluir a política comercial ao produto reindexará o produto e atualizará as informações da nova política comercial.

