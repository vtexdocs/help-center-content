---
title: 'Ahora usted puede integrar pedidos de marketplace con divergencia de precio'
id: 2hbmlBKFeU0OsECukOcw4w
status: PUBLISHED
createdAt: 2018-11-12T17:52:20.888Z
updatedAt: 2020-09-04T21:12:19.603Z
publishedAt: 2020-09-04T21:12:19.603Z
contentType: updates
productTeam: Channels
author: 245tA425AIeioKAk2eaiwS
slugEN: boost-your-marketplace-sales
locale: es
legacySlug: aumente-sus-ventas-en-marketplace
announcementImageID: ''
announcementSynopsisES: 'Nueva feature facilita la identificación de pedidos con divergencia en el precio y permite que su tienda recupere ventas'
---

<div class ="alert alert-warning">
Desde que este anuncio fue publicado, ya no es necesario contactar el soporte de VTEX para integrar pedidos con divergencia de precio. Usted ya <strong>no</strong> necesita abrir un ticket para utilizar esa feature. Puede accesarla por su Admin, en <b>Gestión de pedidos</b> > <b>Autorización de pedidos</b>.

Ahora, usted tiene la opción de integrar aquellos pedidos que vienen del marketplace con alguna divergencia en el precio. Para ello, introducimos el nuevo status `waiting-for-manual-authorization` en el flujo de pedido que permite la integración manual en esos casos.

Los cambios de precio pueden tardar cierto tiempo para reflejarse en el mercado. Antes, cuando una compra se realizaba en ese tiempo, el pedido se perdía en el flujo. La nueva funcionalidad facilita la identificación de pedidos que se calsifican en estos casos, lo que le permite integrarlos. Así, __su tienda puede recuperar ventas y facturar aún más en períodos como el Black Friday__, en qué cambios se hacen con más frecuencia y en breves espacios de tiempo.

## ¿Que ha cambiado?
La nueva feature es opcional y depende de algunas configuraciones simples, descritas a continuación. Si no realiza estas configuraciones, __nada se cambiará en el flujo de pedido actual__.

## Lo que usted necesita hacer para utilizar
Si su tienda tiene __integración externa con marketplaces__ (y desea utilizar la nueva feature), siga los siguientes pasos:

1. El integrador del marketplace (_responsabilidad del marketplace_) necesitará pasar la flag `isCreatedAsync` en el PlaceOrder (dentro del body).
2. [Abra un ticket](https://support.vtex.com/hc/es-419/requests) con nuestro equipo de soporte, informando: el __Account__, la __lista de e-mails con autorización para integrar pedidos con divergencia__ y el __percentual que puede ser aprobado__.
3. Después de realizar los pasos anteriores, basta con usar el filtro del módulo de __Gestión de pedidos__ (antigua OMS) para identificar los que están en el nuevo status (`waiting-for-manual-authorization`). Los usuarios autorizados podrán aprobar o negar las solicitudes, de acuerdo con los criterios de su tienda.

Si su tienda tiene __integración con marketplaces certificados__ (usando el bridge), la flag se activará automáticamente. Sólo necesitará cumplir los pasos descritos en los ítems `2` y `3`.

>ℹ️ Recuerde que las integraciones de pedido se deben realizar utilizando las siguientes API [Get Order](https://developers.vtex.com/reference/orders#getorder) y [Get Feed Order Status](https://developers.vtex.com/reference/feed-v2-deprecated#getfeedorderstatus).

