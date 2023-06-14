---
title: 'A remoção do EAN via API não está inativando SKUs sem RefIDs'
id: 2DIKKs93S41F38c3PrekSO
status: PUBLISHED
createdAt: 2022-08-01T11:37:52.731Z
updatedAt: 2022-11-25T21:44:12.277Z
publishedAt: 2022-11-25T21:44:12.277Z
firstPublishedAt: 2022-08-01T11:37:53.288Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: a-remocao-do-ean-via-api-nao-esta-inativando-skus-sem-refids
locale: pt
kiStatus: Backlog
internalReference: 626031
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>



As SKUs precisam ter um EAN ou um RefId para serem ativas.

Atualmente, se você remover todos os EANs de um SKU via API, ele permanecerá ativo, mesmo que não tenha refID (não deve).





## Simulação



1. Adquira qualquer SKU que tenha um EAN e não tenha um RefId.
2. Execute a exclusão de todos os EAN API https://developers.vtex.com/vtex-rest-api/reference/catalog-api-delete-all-ean






## Workaround


n/d

