---
title: Retornos de la API de inserción de SKUs en el módulo Suggestion
id: tutorials_4927
status: PUBLISHED
createdAt: 2017-04-27T21:49:35.443Z
updatedAt: 2020-12-18T12:34:45.310Z
publishedAt: 2020-12-18T12:34:45.310Z
firstPublishedAt: 2017-04-27T23:11:17.955Z
contentType: tutorial
productTeam: Channels
author: authors_41
slug: retornos-de-la-api-de-insercion-de-skus-en-el-modulo-suggestion
legacySlug: retornos-de-la-api-de-insercion-de-skus-en-el-modulo-suggestion
subcategory: 2P4LrAbvyEiCaekmaWaEOk
---

Algunas tiendas recurren a aliados para integración de los SKUs de los sellers, en integraciones VTEX-VTEX, utilizando APIs. El objetivo de este artículo es ayudarlo a lidiar con los errores que pueden ser retornados durante esa operación.

Las APIs utilizadas para la integración de los SKUs de los sellers están disponibles en la siguiente documentación: [https://developers.vtex.com/reference/marketplace-api-overview](https://developers.vtex.com/reference/marketplace-api-overview)

En el momento de la inserción de los SKUs vía API, ésta puede retornar algunos errores en sus llamadas, además de los retornos de éxito conocidos. Estos errores están relacionados en la tabla a continuación. Cada uno de ellos se identifica por un número de 0 a 23 (además de los errores 99 y 999, que son desconocidos). En la columna de la izquierda, están los nombres que describen cada uno de los errores.

Utilizando esa tabla, es posible entender a qué se refieren los errores retornados en la integración, de modo que las sugerencias SKUs puedan tratarse y aprobarse con éxito.

| Error   | Código   |
| ---------- | ---------- |
| NotSpecifiedError   | 0   |
| MatchCategoryIdIsEmpty    | 1    |
| MatchBrandIdIsEmpty    | 2    |
| ProductNameIsEmpty    | 3    |
| SkuNameIsRequired    | 4    |
| SkuHeightIsRequired    | 5    |
| SkuWeightIsRequired    | 6    |
| SkuLengthIsRequired    | 7    |
| SkuWidthIsRequired    | 8    |
| SkuImagesAreRequired    | 9    |
| EanOrRefIdAreRequired    | 10    |
| SkuImageUrlIsInvalid    | 11    |
| ProductOrSkuHasInvalidSpecificationLength    | 12    |
| MatcherIdRequired    | 13    |
| MatchSkuRefIsNotValid    | 14    |
| MatchScoreIsNotInRange    | 15    |
| SuggestionNotFound    | 16    |
| MatchOldVersion    | 17    |
| SuggestionIsNotPending    | 18    |
| MatchBrandIdIsInvalid    | 19    |
| MatchCategoryIdIsInvalid    | 20    |
| MatchProductRefIsInvalid    | 21    |
| SellerIdAndMarketplaceSkuIdAlreadyExists    | 22    |
| SellerIdAndSellerSkuIdAlreadyExists    | 23    |
| Unknown error (error de comunicación con el catálogo, estamos trabajando para que sea mejor descrito)    | 99    |
| Unknown error (error de comunicación con el catálogo, estamos trabajando para que sea mejor descrito)    | 999    |
