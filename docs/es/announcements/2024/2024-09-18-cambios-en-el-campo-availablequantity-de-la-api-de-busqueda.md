---
title: 'Cambios en el campo availableQuantity de la API de búsqueda'
id: 3pjyk2GnJcjikgZ7hAhm76
status: PUBLISHED
createdAt: 2024-09-18T19:12:14.358Z
updatedAt: 2024-09-19T01:19:33.218Z
publishedAt: 2024-09-19T01:19:33.218Z
contentType: updates
productTeam: Marketing & Merchandising
author: 2Gy429C47ie3tL9XUEjeFL
slugEN: 2024-09-18-change-to-the-availablequantity-field-in-the-search-api
locale: es
legacySlug: cambios-en-el-campo-availablequantity-de-la-api-de-busqueda
announcementImageID: 'undefined'
announcementSynopsisES: 'VTEX cambió el funcionamiento del campo `availableQuantity`, devuelto por las rutas de la API de búsqueda legada.'
---

VTEX cambió el funcionamiento del campo `availableQuantity`, devuelto por las rutas de la API de búsqueda legada. Este cambio puede impactar el funcionamiento de las integraciones existentes.

> ℹ️ Este cambio no afectará a tiendas que usan VTEX Intelligent Search.

## ¿Qué cambió?

El campo `availableQuantity` ya no corresponde a la cantidad exacta de ítems disponibles en el stock de tu tienda. Ahora, este campo devuelve una aproximación por orden de magnitud. Consulta a continuación los posibles valores para el campo `availableQuantity`:

- `0`: 0 unidades en stock.
- `1`: 1 unidade en stock.
- `10`: entre 2 y 10 unidades en stock.
- `100`: entre 11 y 100 unidades en stock.
- `99999`: más de 100 unidades en stock.

Este cambio impacta todas las rutas que devuelven este campo:

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

## ¿Por qué realizamos este cambio?

Anteriormente, era posible ver la cantidad de un producto en stock en una tienda utilizando la API de búsqueda legada. Sin embargo, como el stock es un dato sensible y la API es pública, decidimos ocultar esta información.

## ¿Qué se necesita hacer?

Si tu tienda tiene alguna integración que utiliza el campo `availableQuantity` devuelto por una de las rutas mencionadas anteriormente, verifica la funcionalidad considerando el nuevo comportamiento.

