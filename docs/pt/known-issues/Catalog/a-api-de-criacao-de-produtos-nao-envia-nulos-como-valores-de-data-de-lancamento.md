---
title: 'A API de criação de produtos não envia nulos como valores de data de lançamento.'
id: 6IjwYVm9SdNEtW9aNYkSrj
status: PUBLISHED
createdAt: 2024-04-29T15:10:44.454Z
updatedAt: 2024-04-29T15:10:45.337Z
publishedAt: 2024-04-29T15:10:45.337Z
firstPublishedAt: 2024-04-29T15:10:45.337Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: create-product-api-doesnt-send-nulls-as-release-date-values
locale: pt
kiStatus: Backlog
internalReference: 1024207
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Ao usar as APIs de criação ou atualização de produtos no aplicativo de catálogo: https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/product e enviar o campo releaseDate como nulo, em seu valor, ele é criado com a data atual.

## Simulação


1 - Criar ou atualizar um novo produto, em sua loja, por meio da API mencionada, passando, no corpo da solicitação, o campo releaseDate como nulo.
2 - Acesse a UI de administração do catálogo ou use um GET no mesmo caminho da API para buscar os dados enviados
3 - O campo releaseDate exibirá o valor da data enviada em vez de um valor nulo

## Workaround


-





