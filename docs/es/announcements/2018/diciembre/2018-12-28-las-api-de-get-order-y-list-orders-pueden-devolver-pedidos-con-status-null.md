---
title: 'Las API de Get Order y List Orders pueden devolver pedidos con status null'
id: 6IO4rL1qIEWSMsu2WgmWI0
status: PUBLISHED
createdAt: 2018-12-28T18:46:34.551Z
updatedAt: 2020-05-12T15:37:47.782Z
publishedAt: 2020-05-12T15:37:47.782Z
contentType: updates
productTeam: Post-purchase
author: authors_41
slugEN: 2018-12-28-get-order-and-list-orders-apis-may-now-return-orders-with-the-null-status
locale: es
legacySlug: las-api-de-get-order-y-list-orders-pueden-devolver-pedidos-con-status-null
announcementImageID: 'undefined'
announcementSynopsisES: 'A partir de 30/01/19, las órdenes pueden venir con status null en las respuestas de las llamadas Get Order y List Order.'
---

A partir de __30 de enero de 2019__, los pedidos pueden aparecer con status `null` en las respuestas de las llamadas de las API [Get Order](https://developers.vtex.com/docs/api-reference/orders-api#get-/api/oms/pvt/orders/-orderId-) y [List Orders](https://developers.vtex.com/docs/api-reference/orders-api#get-/api/oms/pvt/orders). Antes, ese resultado no era una respuesta posible de las API.


## Principales ventajas
El nuevo status permite que las compras se cierren incluso en casos de inestabilidad del Workflow, sistema que gestiona el estado de los pedidos en VTEX. Antes, los problemas en el Workflow impactaban el checkout y, por consiguiente, el cierre de compras. Ahora, las compras se cierran normalmente y se quedan con status `null` hasta que la situación sea normalizada.

En otras palabras, __el nuevo status optimiza el Workflow y proporciona más estabilidad para el cierre de compra__.


## Lo que usted necesita hacer
Es fundamental revisar las integraciones que usan las API Get Order y List Orders (como las de ERP, por ejemplo). __Aquellas que no estén preparadas para recibir la nueva respuesta deben ser ajustadas antes del 30 de enero.__
