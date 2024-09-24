---
title: 'Alteração no campo availableQuantity da API de busca'
id: 3pjyk2GnJcjikgZ7hAhm76
status: PUBLISHED
createdAt: 2024-09-18T19:12:14.358Z
updatedAt: 2024-09-19T01:19:33.218Z
publishedAt: 2024-09-19T01:19:33.218Z
contentType: updates
productTeam: Marketing & Merchandising
author: 2Gy429C47ie3tL9XUEjeFL
slugEN: change-to-the-availablequantity-field-in-the-search-api
locale: pt
legacySlug: alteracao-no-campo-availablequantity-da-api-de-busca
announcementImageID: ''
announcementSynopsisPT: 'A VTEX alterou o funcionamento do campo `availableQuantity`, retornado pelas rotas da API de busca legada.'
---

A VTEX alterou o funcionamento do campo `availableQuantity`, retornado pelas rotas da API de busca legada. Esta alteração pode impactar no funcionamento de integrações existentes.

>ℹ️ Lojas que utilizam o VTEX Intelligent Search não serão afetadas.

## O que mudou?

O campo `availableQuantity` não corresponde mais à quantidade exata de itens disponíveis no inventário da sua loja. Agora, este campo retorna uma aproximação por ordem de grandeza. Confira abaixo os valores possíveis para o campo `availableQuantity`:

- `0`: 0 unidades no inventário.
- `1`: 1 unidade no inventário.
- `10`: entre 2 e 10 unidades no inventário.
- `100`: entre 11 e 100 unidades no inventário.
- `99999`: mais de 100 unidades no inventário.

Esta mudança afeta todas as rotas que retornam este campo:

- [Search for products](https://developers.vtex.com/docs/api-reference/search-api#get-/api/catalog_system/pub/products/search/-search-?endpoint=get-/api/catalog_system/pub/products/search/-search-) 
- [Search for products with Filter, Order and Pagination](https://developers.vtex.com/docs/api-reference/search-api#get-/api/catalog_system/pub/products/search?endpoint=get-/api/catalog_system/pub/products/search) 
- [Search product by product URL](https://developers.vtex.com/docs/api-reference/search-api#get-/api/catalog_system/pub/products/search/-product-text-link-/p?endpoint=get-/api/catalog_system/pub/products/search/-product-text-link-/p) 
- [Search product offers](https://developers.vtex.com/docs/api-reference/search-api#get-/api/catalog_system/pub/products/offers/-productId-?endpoint=get-/api/catalog_system/pub/products/offers/-productId-) 
- [Search SKU offers](https://developers.vtex.com/docs/api-reference/search-api#get-/api/catalog_system/pub/products/offers/-productId-/sku/-skuId-?endpoint=get-/api/catalog_system/pub/products/offers/-productId-/sku/-skuId-) 
- [Get product search of who saw also saw (deprecated)](https://developers.vtex.com/docs/api-reference/search-api#get-/api/catalog_system/pub/products/crossselling/whosawalsosaw/-productId-?endpoint=get-/api/catalog_system/pub/products/crossselling/whosawalsosaw/-productId-) 
- [Get product search of who saw also bought (deprecated)](https://developers.vtex.com/docs/api-reference/search-api#get-/api/catalog_system/pub/products/crossselling/whosawalsobought/-productId-?endpoint=get-/api/catalog_system/pub/products/crossselling/whosawalsobought/-productId-) 
- [Get product search of who bought also bought (deprecated)](https://developers.vtex.com/docs/api-reference/search-api#get-/api/catalog_system/pub/products/crossselling/whoboughtalsobought/-productId-?endpoint=get-/api/catalog_system/pub/products/crossselling/whoboughtalsobought/-productId-) 
- [Get product search of show together](https://developers.vtex.com/docs/api-reference/search-api#get-/api/catalog_system/pub/products/crossselling/showtogether/-productId-?endpoint=get-/api/catalog_system/pub/products/crossselling/showtogether/-productId-) 
- [Get product search of accessories](https://developers.vtex.com/docs/api-reference/search-api#get-/api/catalog_system/pub/products/crossselling/accessories/-productId-?endpoint=get-/api/catalog_system/pub/products/crossselling/accessories/-productId-) 
- [Get product search of similars](https://developers.vtex.com/docs/api-reference/search-api#get-/api/catalog_system/pub/products/crossselling/similars/-productId-?endpoint=get-/api/catalog_system/pub/products/crossselling/similars/-productId-) 
- [Get product search of suggestions](https://developers.vtex.com/docs/api-reference/search-api#get-/api/catalog_system/pub/products/crossselling/suggestions/-productId-?endpoint=get-/api/catalog_system/pub/products/crossselling/suggestions/-productId-) 

## Por que fizemos esta mudança?

Antes, era possível ver a quantidade do produto em estoque de uma loja a partir da API da busca legada. Porém, como o inventário é um dado sensível e a API é pública, decidimos ocultar essa informação.

## O que precisa ser feito?

Se a sua loja possui alguma integração que use o campo `availableQuantity` retornado por uma das rotas citadas acima, reavalie a funcionalidade considerando o novo comportamento do campo.

