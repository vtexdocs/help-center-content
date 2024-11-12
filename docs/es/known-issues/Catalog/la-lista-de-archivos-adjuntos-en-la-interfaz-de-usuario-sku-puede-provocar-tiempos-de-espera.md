---
title: 'La lista de archivos adjuntos en la interfaz de usuario SKU puede provocar tiempos de espera.'
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
slugEN: attachment-list-on-sku-ui-can-lead-to-timeouts
locale: es
kiStatus: Backlog
internalReference: 1133468
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Actualmente, si un usuario registra muchos archivos adjuntos en la interfaz de usuario SKU, por ejemplo, más de 5000 archivos adjuntos, esto puede provocar que se agote el tiempo de espera al intentar guardar otros datos SKU en la interfaz de usuario skuform.aspx.



## Simulación


1 - crear una enorme cantidad de archivos adjuntos en el catálogo de una tienda.

2 - intentar guardar estos datos

3 - La interfaz de usuario seguirá cargando durante unos 50 segundos y finalmente fallará con una respuesta 500 - tiempo de espera.



## Workaround


Guarde estos datos a través de actualizar SKU API https://developers.vtex.com/docs/api-reference/catalog-api#put-/api/catalog/pvt/stockkeepingunit/-skuId-?endpoint=put-/api/catalog/pvt/stockkeepingunit/-skuId-





