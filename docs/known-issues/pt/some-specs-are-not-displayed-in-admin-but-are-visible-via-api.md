---
title: 'Algumas especificações não são exibidas no Admin, mas são visíveis via API'
id: 4nZgiUms8dkC8Y1LrBUHQ3
status: PUBLISHED
createdAt: 2022-04-14T13:26:50.927Z
updatedAt: 2023-05-12T19:29:34.542Z
publishedAt: 2023-05-12T19:29:34.542Z
firstPublishedAt: 2022-04-14T13:26:51.328Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: algumas-especificacoes-nao-sao-exibidas-no-admin-mas-sao-visiveis-via-api
locale: pt
kiStatus: Backlog
internalReference: 418348
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Algumas especificações não são exibidas no Admin, mas são visíveis via API.

## Simulação


Exibir as especificações de um produto no administrador e por API.



## Workaround


Exclua as especificações de API com defeito para cada SKU de produto

- Especificação do produto: https://developers.vtex.com/docs/api-reference/catalog-api#delete-/api/catalog/pvt/product/-productId-/specification/-specificationId-
- Especificação de SKU: https://developers.vtex.com/docs/api-reference/catalog-api#delete-/api/catalog/pvt/stockkeepingunit/-skuId-/specification/-specificationId-




