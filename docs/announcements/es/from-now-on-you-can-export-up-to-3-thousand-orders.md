---
title: A partir de ahora, usted podrá exportar hasta 3.000 pedidos
id: vo2h9LyDReC6iSkSOKucG
status: PUBLISHED
createdAt: 2018-10-24T21:41:38.655Z
updatedAt: 2020-05-12T15:39:59.845Z
publishedAt: 2020-05-12T15:39:59.845Z
contentType: updates
productTeam: Post-purchase
author: 245tA425AIeioKAk2eaiwS
slug: a-partir-de-ahora-usted-podra-exportar-hasta-3-000-pedidos
legacySlug: a-partir-de-ahora-usted-podra-exportar-hasta-3-000-pedidos
announcementImageID: 
announcementSynopsisES: Este límite pretende garantizar el rendimiento de la plataforma sin perder la consistencia de los informes generados.
---

A partir de __24 de octubre__, el módulo de gestión de pedidos permitirá la exportación de un máximo de __3.000 pedidos__. Este cambio es fundamental para garantizar el rendimiento de la plataforma sin perder la consistencia de los informes generados.

## Que ha cambiado
Para que el proceso fuera lo más ágil posible, ya veníamos recomendando el límite de 3.000 pedidos desde junio de este año (de acuerdo con el anuncio publicado en el artículo [Exportar pedidos en OMS](/es/tutorial/exportacion-de-pedidos-en-oms)). La única diferencia es que, ahora, el __botón sólo está disponible si se respeta el límite__.

## Cómo exportar más de 3.000 pedidos
Usted todavía puede exportar más de 3.000 pedidos. Para ello, utilice las APIs de gestión de pedidos (anteriormente conocido como OMS): [Get Order](https://developers.vtex.com/reference/orders#getorder) y [Get Feed Order Status](https://developers.vtex.com/reference/feed-v3#getfeedorderstatus1).

<div class="alert alert-warning">
<strong>Pero recuerde:</strong> para funcionar, es necesario que usted <strong>cree un range de fecha/hora que incluya un máximo de 3.000 pedidos</strong>. Con el range definido y el límite respetado, usted podrá llamar al API tantas veces como sea necesario.
</div>
