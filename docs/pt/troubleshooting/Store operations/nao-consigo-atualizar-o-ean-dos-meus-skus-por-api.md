---
title: 'Não consigo atualizar o EAN dos meus SKUs por API'
id: 1gHfGo3TpSTHqb5ZNzwq3m
status: PUBLISHED
createdAt: 2024-06-18T16:50:42.770Z
updatedAt: 2024-11-08T18:51:55.033Z
publishedAt: 2024-11-08T18:51:55.033Z
firstPublishedAt: 2024-06-18T17:28:22.909Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 2o8pvz6z9hvxvhSoKAiZzg
slugEN: i-cant-update-the-ean-of-my-skus-via-api
locale: pt
legacySlug: nao-consigo-atualizar-o-ean-dos-meus-skus-por-api
subcategoryId: 2Q0IQjRcOqSgJTh6wRHVMB
tags:  Catálogo, SKU, Produto, EAN
---

Ao tentar atualizar o EAN (número de artigo europeu), que contém as informações do código de barras de um SKU, no Admin VTEX e na API, você pode encontrar problemas de sincronização do catálogo da loja, afetando o gerenciamento de estoque e a experiência do cliente.

## Solução

Para resolver esse problema, considere [deletar EAN do SKU](#deletar-ean-do-sku) para depois [adicionar um novo EAN](#etapa-1-adicionar-novo-ean-ao-sku).

### Deletar EAN do SKU

Para atualizar o atual EAN do SKU, é necessário primeiramente deletar todos os EANs associados ao SKU. 

- [Delete SKU EAN](https://developers.vtex.com/docs/api-reference/catalog-api#delete-/api/catalog/pvt/stockkeepingunit/-skuId-/ean/-ean-): use o endpoint para deletar um EAN específico.
- [Delete all SKU EAN values](https://developers.vtex.com/docs/api-reference/catalog-api#delete-/api/catalog/pvt/stockkeepingunit/-skuId-/ean): use o endpoint para deletar todos os EANs associados ao SKU.

#### Etapa 1 - Adicionar novo EAN ao SKU

Somente após deletar os EANs de um SKU, será possível adicionar um EAN novo. Para isso, use o endpoint [Create SKU EAN](https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/stockkeepingunit/-skuId-/ean/-ean-) para criar o novo valor do EAN.

#### Etapa 2 - Consultar atualização de EAN do SKU

Uma vez adicionado o novo valor do EAN, utilize o endpoint [Get SKU by EAN](https://developers.vtex.com/docs/api-reference/catalog-api#get-/api/catalog_system/pvt/sku/stockkeepingunitbyean/-ean-) para checar se a atualização. Os novos valores dos EANs serão exibidos no array `AlternateIdValues`.

```json
"AlternateIdValues":
[
"8781",
"878181"
]
```