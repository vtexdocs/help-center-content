---
title: 'La API de búsqueda no devuelve los SKUs showIfNotAvailable=true para las consultas &fq=specificationFilter.'
id: 7p26JmS8pyPA8H0b1QJHyU
status: PUBLISHED
createdAt: 2022-06-28T16:55:27.329Z
updatedAt: 2024-02-16T20:29:43.164Z
publishedAt: 2024-02-16T20:29:43.164Z
firstPublishedAt: 2022-06-28T16:55:28.384Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: search-api-not-returning-showifnotavailabletrue-skus-for-fqspecificationfilter-queries
locale: es
kiStatus: No Fix
internalReference: 336896
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.



Nuestras rutas de búsqueda deben mostrar información sobre los productos etiquetados como showIfNotAvailable=true.

Sin embargo, cuando se utilizan consultas de especificación de sku, como `&fq=specificationFilter_:` para una SKU determinada que tiene esta especificación, que no está disponible pero que aún se muestra en el escaparate, la respuesta en la API estará vacía, lo que difiere del comportamiento estándar del resto de las consultas de la API para el /search/



## Simulación


1) Crear un sku que tenga una especificación de sku.
2) Haz que no esté disponible pero que siga apareciendo en la tienda
3) Intente buscar utilizando la consulta `&fq=specificationFilter_:` en una API /search/.
4) No se devolverá nada (el SKU que acaba de configurar debería estarlo)



## Workaround


Utilizando las especificaciones como especificaciones del producto y/o utilizando otros parámetros de búsqueda para encontrar skus.

