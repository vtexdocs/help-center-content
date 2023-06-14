---
title: 'Productos permanecen en la colección luego de su remoción'
id: hyuFn96MqOsyIoM6iUqWo
status: PUBLISHED
createdAt: 2017-06-16T20:47:54.231Z
updatedAt: 2019-12-31T15:17:58.380Z
publishedAt: 2019-12-31T15:17:58.380Z
firstPublishedAt: 2017-06-16T22:45:30.819Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: authors_4
tag: Portal (CMS)
slug: productos-permanecen-en-la-coleccion-luego-de-su-remocion
kiStatus: Fixed
internalReference: 
---

## Sumario

Al remover productos de una colección, estos no son reindexados. De esta forma, la colección continúe respondiendo con aquellos productos ya retirados, hasta que un evento de indexación ocurriera por otros medios a cualquiera de estos productos.

Afecta a cualqueir escenario que haga uso de colecciones para determinar el mix de productos, como promociones, políticas comerciales, landing pages, vitrinas, etc.

## Simulación

1. Tener una colección con uno o más productos.
2. Remover qualquier producto de esta colección.
3. Verificar que la colección aún responde con este producto en su grupo de productos.

## Workaround

Siempre que un producto sea removido de una colección, es necesario reindexarlo manualmente mediante otros métodos.

El artículo [Entendiendo el funcionamiento de la indexación](http://help.vtex.com/es/tutorial/entendiendo-el-funcionamento-de-la-indexacion) demuestra algunas acciones que disparan el evento de indexación.

