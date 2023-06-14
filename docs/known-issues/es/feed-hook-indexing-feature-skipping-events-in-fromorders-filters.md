---
title: 'La función Feed Hook Indexing omite eventos en los filtros FromOrders'
id: 6wpHloVS4KnH1TN5S5ySN2
status: PUBLISHED
createdAt: 2023-05-25T20:23:18.818Z
updatedAt: 2023-05-25T20:23:19.709Z
publishedAt: 2023-05-25T20:23:19.709Z
firstPublishedAt: 2023-05-25T20:23:19.709Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: la-funcion-feed-hook-indexing-omite-eventos-en-los-filtros-fromorders
kiStatus: Backlog
internalReference: 832400
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Al configurar el filtro Feed/Hook, se define qué actualizaciones de pedidos deben mostrarse en el feed. Se pueden utilizar dos tipos de filtros en el feed: FromWorkflow y FromOrders.

Utilizando la configuración FromWorkflow, sólo puede filtrar las actualizaciones de pedidos por estado.
Y FromOrders permite filtrar las actualizaciones en el feed por cualquier propiedad del documento JSON del pedido.

Pero en la expresión FromOrders cuando hay una propiedad dinámica en el filtro, como el estado por ejemplo, esto hace que la indexación de Pedidos se salte algunas versiones de pedidos.
Y puede resultar en notificaciones para el feed/hook cuando debería ocurrir.


##

## Simulación


Establecer una expresión de FromOrders con el estado del pedido, y muchas posibilidades como canal de ventas, número de secuencia y otras condiciones.

Puede no ser notificado debido a la información dinámica como el estado del pedido.



## Workaround


La recomendación para casos como este, es eliminar esa parte dinámica del filtro y manejar esto externamente.
Si la información dinámica es el punto principal como estado de la orden, deben utilizar la opción FromWorkflow.





