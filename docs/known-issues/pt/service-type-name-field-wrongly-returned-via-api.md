---
title: 'Campo de nome do tipo de serviço retornado incorretamente via API'
id: 1FdozyiQb5DLe7TPICyCDR
status: PUBLISHED
createdAt: 2024-01-04T16:36:17.926Z
updatedAt: 2024-01-04T16:36:18.628Z
publishedAt: 2024-01-04T16:36:18.628Z
firstPublishedAt: 2024-01-04T16:36:18.628Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: campo-de-nome-do-tipo-de-servico-retornado-incorretamente-via-api
locale: pt
kiStatus: Backlog
internalReference: 961278
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Atualmente, as APIs do Catálogo de SKU não estão retornando corretamente o nome de um tipo de serviço. Em vez disso, está sendo retornado o nome do valor do serviço.

## Simulação



1. Faça uma solicitação GET SKU em um sku associado a um serviço: https://developers.vtex.com/docs/api-reference/catalog-api#get-/api/catalog/pvt/stockkeepingunit/-skuId-
2. Observe que o objeto services retorna um campo serviceTypeId e um Name, mas o campo Name não está mostrando o nome do tipo de serviço em si.



## Workaround


N/A





