---
title: "Problemas con 'precio de' en el control 'ButtonBuyModal'"
id: 2DdTK2AQNysEqM8AyMwSMQ
status: PUBLISHED
createdAt: 2018-10-05T17:06:27.321Z
updatedAt: 2022-12-22T20:48:37.370Z
publishedAt: 2022-12-22T20:48:37.370Z
firstPublishedAt: 2018-10-05T17:21:10.821Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Portal (CMS)
slug: problemas-con-precio-de-en-el-control-buttonbuymodal
locale: es
kiStatus: Backlog
internalReference: 
---

## Sumario

El control `$product.ButtonBuyModal(true,true)` se utiliza en los estantes para añadir el producto al carrito. Si hay más de un SKU posible, se muestra un modal para elegir la variación deseada.

En los casos que el producto tiene solamente "precio por" (`bestPrice`), el "precio de" (`listPrice`) es siempre `$0,00`, pero que a su vez no debería ser exhibido en el layout.

## Simulación

Para simular el escenario es necesario implementar esa viewpart en el estante para observar su comportamiento con productos que tengan múltiples SKUs.

## Workaround

Es posible evitar este comportamiento ocultando el elemento relativo al "precio de" con Javascript siempre que su contenido sea "0,00", o bien reconstruir esa funcionalidad (que se limita al frontend de la tienda) basandose en las APIs de VTEX (como "[vtexjs.catalog](https://github.com/vtex/vtex.js/tree/master/docs/catalog)").

