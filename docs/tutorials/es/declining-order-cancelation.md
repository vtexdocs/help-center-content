---
title: 'Denegar solicitud de cancelación del pedido'
id: F2n0h1TeQ5td540Gjyff4
status: PUBLISHED
createdAt: 2023-09-21T02:29:56.663Z
updatedAt: 2024-04-01T15:47:27.833Z
publishedAt: 2024-04-01T15:47:27.833Z
firstPublishedAt: 2023-09-21T16:08:07.567Z
contentType: tutorial
productTeam: Post-purchase
author: 5l9ZQjiivHzkEVjafL4O6v
slug: denegar-solicitud-de-cancelacion-del-pedido
locale: es
legacySlug: negacion-de-cancelacion-de-pedido
subcategory: 2t00bBkcAwIkgSCGKsMOwY
---

Hay diversas situaciones en las que es necesario cancelar un pedido, ya sea por parte del seller, del marketplace o del cliente. Sin embargo, en algunos casos la cancelación de un pedido le acarrea al seller importantes pérdidas económicas, por lo que este tiene la posibilidad de denegar una solicitud de cancelación del pedido.

En el flujo de pedidos hay un [periodo de cancelación](https://help.vtex.com/es/tutorial/order-flow-and-status--tutorials_196) (o periodo de gracia) en el que el cliente puede cancelar un pedido automáticamente. Excepto durante ese periodo, el seller puede denegar una solicitud de cancelación del pedido, independientemente de si ha sido realizada por el cliente o por el marketplace.

> **Ejemplo:** un seller vende productos personalizables en un marketplace. Después de comprar un ítem, y una vez finalizado el periodo de cancelación, el cliente decide cancelar el pedido, para lo que se pone en contacto con el marketplace. Si el marketplace cancela el pedido, el seller tiene una pérdida financiera, ya que un producto personalizable difícilmente puede venderse a otro cliente, por lo que el seller opta por denegar la solicitud de cancelación.

Para contenido para desarrolladores, consulte [Order canceling improvements](https://developers.vtex.com/docs/guides/order-canceling-improvements).

<div class = "alert alert-info">
En este artículo, los términos marketplace y seller se refieren a <a href="https://help.vtex.com/es/tutorial/marketplace-strategies-at-vtex--tutorials_402#being-a-vtex-marketplace">marketplace VTEX</a> y <a href="https://help.vtex.com/es/tutorial/marketplace-strategies-at-vtex--tutorials_402#being-a-vtex-seller">seller VTEX</a>. La funcionalidad de denegar solicitudes de cancelación de pedidos no está disponible para sellers o marketplaces externos.
</div>

<div class = "alert alert-warning">
No es posible <a href="https://help.vtex.com/es/tutorial/como-cancelar-pedido--tutorials_186">cancelar</a> pedidos <a href="https://help.vtex.com/es/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe">parcialmente facturados</a>. Si el cliente desea sustituir o remover ítems del pedido, es posible <a href="https://help.vtex.com/es/tutorial/alteracao-de-itens-de-um-pedido-finalizado--tutorials_190">modificar el pedido</a>.
</div>

## Diagrama de denegación de cancelación de pedidos

En la siguiente imagen puedes consultar cómo se desarrolla la denegación de las solicitudes de cancelación del pedido, una vez finalizado el periodo de cancelación:

![cancel_api_improvements_help_center_ES_v2](https://images.ctfassets.net/alneenqid6w5/68eCO8cFvRz9NsvLaalNMe/716a0f4775bc8418b72578fd1e384130/cancel_api_improvements_help_center_ES_v2.png)

La descripción de cada paso es la siguiente:

1. El cliente se pone en contacto con el marketplace para cancelar un pedido o lo hace a través de [Mi cuenta](https://help.vtex.com/es/tutorial/how-my-account-works--2BQ3GiqhqGJTXsWVuio3Xh).
2. El marketplace envía una solicitud de cancelación al seller. En este punto, el [status del pedido](https://help.vtex.com/es/tutorial/order-flow-and-status--tutorials_196) para el marketplace es `esperando decisión del seller`.
3. Si el pedido se encuentra dentro del periodo de cancelación, se cancelará automáticamente, siendo este el comportamiento predeterminado de la plataforma. Los próximos pasos reflejan lo que ocurre cuando el periodo de cancelación ha terminado.
4. El seller recibe la **Solicitud de cancelación** del pedido y decide si la acepta o no. Los próximos pasos informan lo que ocurre cuando el seller decide no cancelar el pedido.

  <div class="alert alert-danger">
Para denegar una solicitud de cancelación, el status del pedido para marketplace y seller deben ser los siguientes:
<ul>
<li><b>Status del marketplace:</b> esperando decisión del seller.</li>
<li><b>Status del seller:</b> cancelación solicitada.</li>
</ul>
</div>

5. El seller deniega la solicitud de cancelación del pedido y se lo notifica al marketplace.
6. Una vez que el marketplace recibe la respuesta del seller, el pedido continúa su progresión en el flujo de pedidos.

## Denegar solicitud de cancelación del pedido

La solicitud de cancelación de un pedido puede realizarse por el marketplace o el propio cliente a través de **Mi cuenta.** Cuando se realiza directamente a través de [Mi cuenta](https://help.vtex.com/es/tutorial/how-my-account-works--2BQ3GiqhqGJTXsWVuio3Xh), el cliente recibe un mensaje de confirmación de que la solicitud se ha enviado correctamente.

Después, el [status del pedido](https://help.vtex.com/es/tutorial/order-flow-and-status--tutorials_196) se mostrará de la siguiente manera: `cancelación solicitada` para el marketplace y `esperando decisión del seller` para el seller, hasta que este tome una decisión, ya sea para aceptar o denegar la solicitud.

<div class="alert alert-warning">
Si en el plazo de 30 días el seller no toma ninguna acción respecto a la solicitud de cancelación del pedido, el pedido será cancelado automáticamente por la plataforma VTEX.
</div>

Para denegar una solicitud de cancelación del pedido a través del Admin VTEX, sigue los pasos que se indican a continuación:

1. En el Admin VTEX, ve a **Pedidos > Todos los pedidos,** o ingresa [Todos los pedidos](https://help.vtex.com/es/tutorial/all-orders--2QTduKHAJMFIZ3BAsi6Pi) en la barra de búsqueda de la parte superior de la página.
2. Selecciona el pedido deseado para acceder a la [página de información del pedido](https://help.vtex.com/es/tutorial/order-details-page-interface--2Y75n54Cc9VizrlG1N6ZNl).
3. En la parte superior de la página, haz clic en `Denegar`.

  ![deny cancel request](https://images.ctfassets.net/alneenqid6w5/53kKd5oNkEjeziq9XR4yvO/19f9b7716df1f0e011b11850d3866e13/deny_cancel_request_ES.png)

4. Ingresa en el campo Solicitud de cancelación el motivo por el que se deniega la solicitud de cancelación del pedido.

  ![deny cancel request reason](https://images.ctfassets.net/alneenqid6w5/1okkX2L4JdZ57qcdZ758O4/fae33faa395d0aa0c51b2cd645bbf2f8/deny_cancel_request_reason_ES.png)

  <div class="alert alert-warning">
Atención: el cliente puede recibir el mensaje que ingreses en este campo a través de <a href="https://help.vtex.com/es/tutorial/how-my-account-works--2BQ3GiqhqGJTXsWVuio3Xh">Mi cuenta</a> o a través del marketplace.
</div>

5. Haz clic en `Denegar`.

Tras esta acción, se rechaza la solicitud de cancelación del pedido, y este continúa su progresión en el flujo de pedidos actualizándose al siguiente status:
- **Para el marketplace:** `pago aprobado`.
- **Para el seller:** `listo para preparación` o `preparando envío`, dependiendo de su status anterior a la solicitud de cancelación.

