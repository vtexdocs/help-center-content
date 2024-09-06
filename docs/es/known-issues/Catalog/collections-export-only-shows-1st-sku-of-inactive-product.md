---
title: 'La exportación de colecciones sólo muestra el primer SKU del producto inactivo'
id: 7FegROKSwxpadN5NYVFR8M
status: PUBLISHED
createdAt: 2024-05-28T19:56:23.549Z
updatedAt: 2024-05-28T19:56:24.303Z
publishedAt: 2024-05-28T19:56:24.303Z
firstPublishedAt: 2024-05-28T19:56:24.303Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: la-exportacion-de-colecciones-solo-muestra-el-primer-sku-del-producto-inactivo
locale: es
kiStatus: Backlog
internalReference: 1040753
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Cuando se utiliza el módulo de colecciones y se intenta exportar registros, si el producto listado en una colección dada tiene todos sus skus configurados como inactivos, la hoja exportada sólo listará 1 de los skus del producto, en lugar de todos.


##

## Simulación


1 - Obtenga un producto que tenga varios skus y configure todos ellos como inactivos.
2 - Insértelos en una colección de catálogo /admin/collections
3 - utilizar la función de exportación
4 - sólo el SKU superior del producto aparecerá en la hoja, en lugar de todos



## Workaround


-





