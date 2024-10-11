---
title: 'Feed de pedidos'
id: 5SzSKee2f666YCoWkm0eQC
status: ARCHIVED
createdAt: 2018-01-12T16:34:03.101Z
updatedAt: 2022-08-30T17:25:47.206Z
publishedAt: 
firstPublishedAt: 2018-01-16T14:52:21.286Z
contentType: tutorial
productTeam: Post-purchase
author: authors_24
slugEN: orders-feed
locale: es
legacySlug: como-funciona-el-feed-del-oms, como-funciona-el-feed-v3-del-modulo-de-gestion-de-pedidos
subcategoryId: 3Y8xzVGMXcuPTuzfFI0vUp
---

El feed puede pensarse como una fila de los cambios de status de los pedidos de su tienda. Esto significa que cada vez que un pedido cambie de status, ese cambio se registrará como un nuevo evento en su _feed_. Se puede ver la lista con los posibles status de pedido en el artículo [Flujo de pedido en Gestión de pedidos](https://help.vtex.com/es/tutorial/fluxo-de-pedido/#entiendo-los-estados).

Por lo tanto, el _feed_ no es una fila de pedidos, sino de eventos. Por ejemplo, si un pedido cambia al status `Aprobar pago` y luego al status `Autorizar despacho`, habrá dos eventos en el _feed_: uno para cada cambio de status, ambos referentes al mismo pedido.

Hook es una extensión de [Feed v3](https://help.vtex.com/es/tutorial/configurar-feed-v3-del-modulo-de-gestion-de-pedidos--5qDml3cQypWDRTgw69s4C1), orientada para operaciones robustas que requieren integraciones más complejas.

Para saber cómo configurar y usar Feed v3 y Hook, consulte la [guía Feed v3 para desarrolladores](https://developers.vtex.com/vtex-rest-api/docs/feed-v3-1).

