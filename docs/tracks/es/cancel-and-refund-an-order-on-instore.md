---
title: 'Cancelar y reembolsar un pedido en VTEX Sales App'
id: UAahHrTwypk1HhoyyMd2W
status: PUBLISHED
createdAt: 2021-11-09T14:00:04.800Z
updatedAt: 2023-05-31T16:06:08.789Z
publishedAt: 2023-05-31T16:06:08.789Z
firstPublishedAt: 2021-11-09T14:09:59.855Z
contentType: trackArticle
productTeam: Shopping
slug: cancelar-y-reembolsar-un-pedido-en-instore
trackId: 4BYzQIwyOHvnmnCYQgLzdr
trackSlugES: instore-usando-el-app
---


Cuando un cliente solicita la cancelación de un pedido realizado por VTEX Sales App, el vendedor debe seguir los procedimientos descritos en este artículo.

## Situación 1: el cliente ya no está en la tienda

Si el pedido ha sido pagado por **Venta Directa - Débito o Crédito** y el cliente ya no está presente en la tienda física, es decir, no puede pasar la tarjeta en la máquina, es necesario realizar la cancelación en **Pedidos** > **Todos los pedidos**, en el Admin VTEX. Este procedimiento solo puede ser realizado por un usuario con el [perfil de acceso OMS - Full access](https://help.vtex.com/es/tutorial/perfiles-de-acceso--7HKK5Uau2H6wxE1rH5oRbc#oms-full-access), siguiendo las orientaciones del tutorial [Cancelar pedidos](https://help.vtex.com/es/tutorial/como-cancelar-pedido--tutorials_186).

En este caso, el pedido no se cancelará inmediatamente. La variación de tiempo la determina el adquirente y puede tardar de 30 minutos a 24 horas.

## Situación 2: el cliente está en la tienda 

En los casos en los que el cliente se encuentre en la tienda al solicitar la cancelación, es necesario seguir los pasos que se indican a continuación.

1. En el menú de VTEX Sales App, haz clic en <span id="svg-container"><svg alt="sprite-svg" xmlns="http://www.w3.org/2000/svg" style="width: 0px; height: 0px;"><symbol id="nc-bag-22" viewBox="0 0 16 16"><path fill="currentColor" d="M14 5.8c-.1-.5-.5-.8-1-.8h-1V4c0-2.2-1.8-4-4-4S4 1.8 4 4v1H3c-.5 0-.9.3-1 .8l-2 9c-.1.6.4 1.2 1 1.2h14c.6 0 1.1-.6 1-1.2l-2-9zM6 4c0-1.1.9-2 2-2s2 .9 2 2v1H6V4z"></path></symbol></svg><svg width="16" height="16" style="fill: rgb(125, 126, 128); color: rgb(125, 126, 128); vertical-align: middle;"><use xlink:href="#nc-bag-22"></use></svg></span> `Últimas ventas`.
2. En la lista de pedidos, haz clic en la fila del pedido que deseas cancelar.
3. Haz clic en `Cancelar venta total` para cancelar todo el pedido o `Cancelar la venta de este paquete` para cancelar solo los ítems de un paquete específico.
4. En el modal de confirmación, haz clic en `Cancelar venta total` o `Cancelar la venta de este paquete` para continuar, dependiendo de la opción seleccionada en el paso anterior.
5. A continuación, sigue las instrucciones específicas para reembolsar el pago, según el medio de pago elegido:

    * [Efectivo](#efectivo)
    * [Venta directa - Débito o Crédito](#venta-directa-debito-o-credito)

### Efectivo

Si el pedido cancelado se ha pagado en efectivo, el vendedor tiene que reembolsar el pedido manualmente, devolviendo el dinero al cliente.

Después de seguir los pasos descritos en [Situación 2](#situacion-2-el-cliente-esta-en-la-tienda), el vendedor verá una pantalla que indica que el pago en **Efectivo** ya ha sido reembolsado.

Para volver a la página de detalles del pedido cancelado, debes hacer clic en la flecha <i class="fa-arrow-left"></i> de la barra superior de VTEX Sales App.

### Venta directa - Débito o Crédito

Para los pedidos pagados por **Venta Directa - Débito o Crédito** en los que el cliente solicita la cancelación cuando está en la tienda física, el vendedor debe reembolsar el pago manualmente mediante la aplicación VTEX Sales App.

Después de seguir los pasos descritos en la [Situación 2](#situacion-2-el-cliente-esta-en-la-tienda) para cancelar el pedido, el vendedor verá una pantalla que contiene la lista de pagos realizados referentes al pedido.

Para reembolsar un pago realizado por **Venta Directa - Débito o Crédito:**

1. Haz clic en `Reembolsar` para ser redirigido a la aplicación VTEX Payment.
2. En VTEX Payment, espera a que aparezca el el siguiente mensaje: _Inserta o pasa la tarjeta._
3. A continuación, inserta la tarjeta utilizada en la compra en la misma máquina donde se realizó el pago.
4. Espera a que la máquina de tarjeta procese el reembolso. Cuando la máquina indique que el reembolso se ha realizado con éxito y que ya se puede retirar la tarjeta, retira la tarjeta de la máquina.
5. La aplicación VTEX Payment llevará al vendedor de vuelta a VTEX Sales App, donde aparecerá una pantalla de confirmación, ilustrada a continuación.
6. Haz clic en `Seleccionar pagos` para volver a la lista de pagos relacionados con el pedido.
7. Repite el procedimiento si hay otros pagos relacionados con el pedido. De lo contrario, para volver a la página de detalles del pedido cancelado, haz clic en la flecha <i class="fa-arrow-left"></i> de la barra superior de VTEX Sales App.
