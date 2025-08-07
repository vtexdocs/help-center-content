---
title: "Actualización de especificación por API o webservice no envía producto para indización"
id: d0xRClv0lM6q6EmcSCG0Q
status: PUBLISHED
createdAt: 2018-04-03T14:31:21.538Z
updatedAt: 2022-06-06T15:03:48.588Z
publishedAt: 2022-06-06T15:03:48.588Z
firstPublishedAt: 2018-04-03T14:40:11.127Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: authors_31
tag: Catalog
slugEN: actualizacion-de-especificacion-por-api-o-webservice-no-envia-producto-para-indizacion
locale: es
kiStatus: Backlog
internalReference: 0
---

## Sumario

La actualización de especificación de producto por API o webservice debería enviar el ítem a la cola de indización, para que se actualice en el sitio y en las APIs de búsqueda. Sin embargo, esto no se produce como esperado. Es decir, el producto no se envía para indización.


## Simulación

1. Actualizar el valor de un campo de producto (especificación) por API o webservice. Consulte la [documentación de la API](https://developers.vtex.com/vtex-rest-api/reference/updateproductspecificacatalog-api-post-update-product-specificationtion)
2. Con el retorno `200 (OK)`, observar, en el panel administrativo, que el valor, de hecho, ha cambiado.
3. Observar, sin embargo, que en los instantes siguientes el producto no entrará en la cola de indización.

## Workaround

Como este caso puede afectar las integraciones de catálogo, sugerimos que, mientras no corregimos este comportamiento, después de la actualización de una especificación, el algoritmo del middleware realice una actualización en el producto, con el objetivo de colocarlo en la cola de indización.

