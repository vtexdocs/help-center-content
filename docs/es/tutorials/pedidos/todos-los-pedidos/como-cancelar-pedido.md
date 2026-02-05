---
title: 'Cómo cancelar pedido'
id: tutorials_186
status: PUBLISHED
createdAt: 2017-04-27T22:15:47.296Z
updatedAt: 2024-04-01T17:34:46.564Z
publishedAt: 2024-04-01T17:34:46.564Z
firstPublishedAt: 2017-04-27T23:00:46.851Z
contentType: tutorial
productTeam: Post-purchase
author: authors_84
slugEN: canceling-orders
legacySlug: como-cancelar-pedido
locale: es
subcategoryId: 2t00bBkcAwIkgSCGKsMOwY
---

Tiene lugar la cancelación de Pedido en VTEX en prácticamente cualquier status de su evolución. Corresponde destacar que, una vez cancelado el pedido, no se revierte el status del pedido.

> ⚠️ No es posible cancelar pedidos [parcialmente facturados](/es/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe). Si el cliente desea sustituir o remover ítems del pedido, es posible [modificar el pedido](/es/docs/tutorials/cambiar-items-de-un-pedido-finalizado).

Hay dos formas de hacer esta acción, por el Admin VTEX o API.

## Cancelación en el módulo Pedidos

1. En el Admin VTEX, accede a **Pedidos > Todos los pedidos**, o escribe *Todos los pedidos* en la barra de búsqueda en la parte superior de la página.  
2. En **Todos los pedidos**, acceda al pedido deseado.
3. En el topo de la página, haga clic en `Cancelar pedido`.
4. Rellena los campos presentados.
5. Haga clic en `Confirmar`.

Cuando el pedido está en estado **Listo para manejo** o **A preparar la entrega**, es necesario que la cancelación se haga dos veces. Esto, porque la primera vez el status se cambia a **Cancelación solicitada**.
Cuando la solicitud ya se encuentra en el status **Cancelación solicitada**, basta hacer clic en **Confirmar cancelación** que el pedido se cambiará a **Cancelado**. Si desea continuar con este pedido, simplemente introduzca la nota fiscal.

No se puede cambiar un pedido cuando el mismo ya está en el estado `Facturado`.

## Cancelación en el ERP

Esa acción por medio del ERP puede tener lugar por nuestra API REST, según nuestro [guía de integración de ERPs](https://developers.vtex.com/docs/erp-integration-set-up-order-processing), utilizando la llamada [Cancel order](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/oms/pvt/orders/-orderId-/cancel).

## Cancelación solicitada por el cliente

Cuando es el cliente quien solicita la cancelación del pedido, el flujo es diferente. Lea [este artículo](/es/docs/tutorials/cancelacion-de-pedido-solicitada-por-el-cliente) para entender como funciona la cancelación en este caso.
