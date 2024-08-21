---
title: 'Cancelar pedido'
id: 4ts2ItvjYo8wm5gg76miS3
status: PUBLISHED
createdAt: 2019-11-18T11:50:32.691Z
updatedAt: 2024-04-01T18:04:36.603Z
publishedAt: 2024-04-01T18:04:36.603Z
firstPublishedAt: 2019-11-18T12:20:50.741Z
contentType: trackArticle
productTeam: Post-purchase
slug: cancelar-pedido
locale: es
trackId: 2xkTisx4SXOWXQel8Jg8sa
trackSlugES: pedidos
---

Usted puede cancelar un pedido con VTEX de tres maneras diferentes:
- Por el módulo **Pedidos** en el Admin VTEX.
- Por API.
- A petición del cliente.

>⚠️ Una vez cancelado el pedido, no se puede cambiar su status. Es posible cancelar el pedido hasta antes de **Facturado**, después el pedido no puede ser modificado.

<div class = "alert alert-info">
No es posible <a href="https://help.vtex.com/es/tutorial/como-cancelar-pedido--tutorials_186">cancelar</a> pedidos <a href="https://help.vtex.com/es/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe">parcialmente facturados</a>. Si el cliente desea sustituir o remover ítems del pedido, es posible <a href="https://help.vtex.com/es/tutorial/alteracao-de-itens-de-um-pedido-finalizado--tutorials_190">modificar el pedido</a>.
</div>

## Cancelación por el módulo Pedidos

1. En el Admin VTEX, accede a **Pedidos > Todos los pedidos**, o escribe **Todos los pedidos** en la barra de búsqueda en la parte superior de la página.
2. Haz clic en el pedido deseado.
3. En el topo de la página, haz clic en `Cancelar pedido`.
4. Haz click en `Confirmar`.

- Cuando el pedido está en el status `Listo para manejar` o `Preparando entrega`, la cancelación debe hacerse dos veces. Cuando se hace clic por primera vez en "Cancelar", el status cambia a `Cancelación solicitada`.
- Cuando el pedido ya esté en el status `Cancelar pedido`, simplemente haga clic en **Cancelar** nuevamente para cambiar el pedido a `Cancelado`.
- Para continuar con este pedido, simplemente ingrese la factura.

## Cancelación por API

Usted puede cancelar a través de su ERP utilizando la API [Cancel order](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/oms/pvt/orders/-orderId-/cancel).

Consulte nuestra [Guía de integración de ERPs](https://developers.vtex.com/docs/erp-integration-set-up-order-processing) para el tutorial completo.

## Cancelación solicitada por el cliente

El cliente puede solicitar la cancelación del pedido a través de la pantalla de **Mis pedidos**.

Si el cliente solicita la cancelación dentro del período de gracia del pedido, que es [configurable en la tienda](https://help.vtex.com/es/tutorial/configurar-el-tiempo-de-espera-para-cancelar-el-pedido), el comerciante no necesita aprobar la cancelación. Se considera que el flujo de picking, packing y entrega aún no ha comenzado, por lo que la cancelación no traería ninguna carga a la tienda.

Después del período de gracia, se entiende que la tienda ya está trabajando por el pedido. En este caso, el comerciante debe confirmar la solicitud de cancelación.

Consulte nuestro artículo del flujo de [cancelación solicitada por el cliente](https://help.vtex.com/es/tutorial/como-funciona-la-cancelacion-de-pedido-solicitada-por-el-cliente).
