---
title: 'Descontinuación del status del pedido de Marketplace waiting-for-seller-confirmation y order-completed'
id: 7jnFwL3cIqwdTu7yb4LXwj
status: CHANGED
createdAt: 2019-06-28T13:57:39.046Z
updatedAt: 2020-11-27T19:40:14.278Z
publishedAt: 2020-04-02T16:47:32.151Z
contentType: updates
productTeam: Channels
author: 5DnIDwto7E6PRpdH1Kpdyu
slug: descontinuacion-del-status-del-pedido-de-marketplace-waiting-for-seller
locale: es
legacySlug: descontinuacion-del-status-del-pedido-de-marketplace-waiting-for-seller
announcementImageID: ''
announcementSynopsisES: 'Los status de los pedidos de Marketplace  `waiting-for-seller-confirmation` y `order-completed` serán descontinuados'
---

A partir del 15 de julio de 2019, los status de los pedidos de Marketplace  `waiting-for-seller-confirmation` y `order-completed` serán descontinuados.

Los pedidos de origen Marketplace son aquellos relacionados con las etapas de cierre de pedido dentro del ambiente de una tienda. Podemos asociar los pedidos que tienen este origen al proceso de checkout, donde el cliente final incluye los datos de pago para realizar una compra.

## ¿Por qué VTEX está tomando esta acción?

Los workflows de los pedidos, es decir, el progreso de las etapas de entrega de los pedidos, ya no se generarán en el proceso de cierre de compra. Se crearán en un procesamiento posterior, después de que los pedidos tengan todos los datos para que se consideren completos.

Con este cambio, el sistema de workflow saldrá del camino crítico del cierre de compras. Como resultado, el sistema se vuelve más resiliente, mitigando riesgos al retirar un proceso no obligatorio del camino del cierre de compra. Esto hará que el cierre de compras sea más rápido. De esta manera, apenas los pedidos completos tendrán un procesamiento posterior de sus respectivos workflows.

## ¿Qué necesita hacer?

En general, la descontinuación de estos status no debería impactar a ninguna integración. Estos status fueron creados para ser utilizados por el propio sistema de VTEX en las etapas de preprocesamiento de compras y posibles reintentos. Como no son status relacionados con alguna etapa de negocio, no necesitan ser consumidos por integraciones externas.

Sin embargo, recomendamos que revise su integración para confirmar que estos status no se están utilizando realmente.

>ℹ️ La acción de sacar el workflow del camino crítico del cierre de compra para pedidos de origen Fulfillment ya se realizó. Acceda a nuestro artículo para saber más sobre esta [ retirada del workflow en los pedidos de origen Fulfillment.](https://help.vtex.com/es/announcements/descontinuacao-dos-status-dos-pedidos-de-fulfillment-order-completed-order--4AJyu9fJNSKNpL4g4dfgcp)
