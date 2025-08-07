---
title: "A lista de anexos na interface do usuário da SKU pode levar a tempos limite"
id: 4LGpbu237ZeEZxv5DEl8BR
status: PUBLISHED
createdAt: 2024-11-11T20:08:32.198Z
updatedAt: 2024-11-11T20:09:09.636Z
publishedAt: 2024-11-11T20:09:09.636Z
firstPublishedAt: 2024-11-11T20:08:33.019Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: a-lista-de-anexos-na-interface-do-usuario-da-sku-pode-levar-a-tempos-limite
locale: pt
kiStatus: Backlog
internalReference: 1133468
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Atualmente, se um usuário registrar muitos anexos na interface do usuário do SKU, por exemplo, mais de 5.000 anexos, isso pode levar a um tempo limite ao tentar salvar outros dados do SKU na interface do usuário do skuform.aspx.

## Simulação


1 - Criar uma enorme quantidade de anexos no catálogo de uma loja.

2 - tentar salvar esses dados

3 - A interface do usuário continuará carregando por cerca de 50 segundos e, por fim, falhará com uma resposta 500 - tempo limite

## Workaround


Salve esses dados por meio da atualização da API SKU https://developers.vtex.com/docs/api-reference/catalog-api#put-/api/catalog/pvt/stockkeepingunit/-skuId-?endpoint=put-/api/catalog/pvt/stockkeepingunit/-skuId-





