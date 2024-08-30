---
title: 'Lanzamos nuestras nuevas API de Cross-selling y Up-selling'
id: 37Lc6sI2owMCiUamocgAcc
status: PUBLISHED
createdAt: 2017-12-04T18:54:28.850Z
updatedAt: 2024-01-04T15:05:24.804Z
publishedAt: 2024-01-04T15:05:24.804Z
contentType: updates
productTeam: Marketing & Merchandising
author: 245tA425AIeioKAk2eaiwS
slug: lanzamos-nuestras-nuevas-api-de-cross-selling-y-up-selling
locale: es
legacySlug: lanzamos-nuestras-nuevas-api-de-cross-selling-y-up-selling
announcementImageID: ''
announcementSynopsisES: 'Hacemos disponibles para todos nuestros clientes y parceros nuestras API de Cross-selling y Up-selling.'
---

Hemos hecho disponibles para todos nuestros clientes y parceros nuestras API de Cross-selling y Up-selling. Utilizando estas técnicas de venta, usted podrá mostrar en su vitrina varias ofertas con algunas simples llamadas de API.

## Las nuevas APIs

Ahora, usted puede realizar las llamadas de Cross-selling e Up-selling en APIs REST. Estas llamadas funcionan de la misma manera que todas las demás APIs VTEX.

A continuación, sigue la lista de las nuevas llamadas disponibles:

### Quien Vió Vió También: 

__GET__

`http://{{AccountName}}.{{environment}}.com.br/api/catalog_system/pub/products/crossselling/whosawalsosaw/{{productId}}`

Esta API devolverá los productos que fueron __vistos__ por clientes que también __viran__ un determinado producto.

### Quien Vió Compró También:

__GET__

`http://{{AccountName}}.{{environment}}.com.br/api/catalog_system/pub/products/crossselling/whosawalsobought/{{productId}}`

Esta API devolverá los productos que fueron __comprados__ por clientes que __viran__ un determinado producto.

### Quien compró Compró Tambíen: 

__GET__

`http://{{AccountName}}.{{environment}}.com.br/api/catalog_system/pub/products/crossselling/whoboughtalsobought/{{productId}}`

Esta API devolverá los productos que también fueron __comprados__ por clientes que __compraran__ un determinado producto.

### Accesorios: 

__GET__ 

`http://{{AccountName}}.{{environment}}.com.br/api/catalog_system/pub/products/crossselling/accessories/{{productId}}`

Esta API devolverá los productos que han sido registrados como __accesorios__ o __complementos__de un determinado producto.

### Productos Similares: 

__GET__

`http://{{AccountName}}.{{environment}}.com.br/api/catalog_system/pub/products/crossselling/similars/{{productId}}`

Esta API devolverá los productos que también se registraron como __productos similares__ en un determinado producto.

### Sugerencias: 

__GET__ 

`http://{{AccountName}}.{{environment}}.com.br/api/catalog_system/pub/products/crossselling/suggestions/{{productId}}`

Esta API devolverá los productos que también se han registrado como __sugerencias__ de Up-selling. Es importante resaltar que este producto sólo será mostrado si el valor de la sugerencia es mayor que el del producto donde la sugerencia fue registrada.

## Saber más

Para obtener más información sobre las llamadas, acceda a nuestra [documentación de APIs](https://developers.vtex.com/docs/api-reference/search-api#get-/api/catalog_system/pub/products/crossselling/whosawalsosaw/-productId-?endpoint=get-/api/catalog_system/pub/products/crossselling/whosawalsosaw/-productId-).

Para más informaciones sobre las modalidades de Cross-selling y Up-Selling descritas arriba, acceda al [artículo del VTEX Help](/es/tutorial/configurando-produto-similar-sugestoes-acessorios-e-genericos)
