---
title: A API de política comercial não gera solicitação de reindexação
id: 6xAm1zg05zDB3ff8rOloMR
createdAt: 2023-04-28T18:52:41.010Z
updatedAt: 2023-05-08T18:26:51.898Z
publishedAt: 2023-05-08T18:26:51.898Z
firstPublishedAt: 2023-04-28T18:52:41.427Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: a-api-de-politica-comercial-nao-gera-solicitacao-de-reindexacao
status: Backlog
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

