---
title: 'Por qué un pedido fue cancelado?'
id: frequentlyAskedQuestions_493
status: PUBLISHED
createdAt: 2017-04-27T22:34:39.200Z
updatedAt: 2023-03-31T15:02:05.031Z
publishedAt: 2023-03-31T15:02:05.031Z
firstPublishedAt: 2017-04-27T23:02:22.347Z
contentType: frequentlyAskedQuestion
productTeam: Post-purchase
author: authors_84
slugEN: why-was-my-order-canceled
locale: es
legacySlug: por-que-un-pedido-fue-cancelado
---

Para identificar el motivo de la cancelación, es necesario verificar todas las comunicaciones realizadas entre las integraciones de pagos. Esto es necesario porque para que una compra llegue a ser facturada, pasa por diversos factores que pueden provocar su cancelación.

_Smart Checkout_ soporta la función "Pre-Auth" de algunos adquirentes. Es decir, aún en el ambiente del checkout, la plataforma hace la validación de datos de la tarjeta. En caso de que exista un problema, el usuario es notificado para que pueda cambiar de medio de pago y la tienda no pierda la venta.

Para no haber pérdida de tiempo, se crea una solicitud. En caso de denegación, esta transacción se cancela automáticamente.

Debajo, usted verás como identificar el motivo de las cancelaciónes.

## Verifique el pago

Todas las interacciones, tanto con el operador/gateway de pago como con el anti fraude, quedan registradas en el Admin VTEX, en **Pedidos > Transacciones**. Estos dos agentes son responsables por la mayoría de las cancelaciones.

Siempre que se realiza una cancelación, el agente responsable crea un log en los eventos de la transacción del pedido, un mensaje identificando el motivo de la acción. Sepa más en [verificar las transacciones](/es/tutorial/como-visualizar-detalhes-do-pedido/).

## Verifique las interacciones del pedido

En el módulo **Pedidos**, es posible analizar el origen de la cancelación del pedido. Esto significa que es posible verificar si la cancelación fue hecha por el marketplace o por la propia tienda.

Para ver las interaccinoes de un pedido, siga los pasos abajo:

1. En el Admin VTEX, accede a **Pedidos > Todos los pedidos**, o escribe **Todos los pedidos** en la barra de búsqueda en la parte superior de la página.
2. Haz clic en el pedido deseado, accedendo a la [página de detalles del pedido](/es/tutorial/pagina-de-detalhes-do-pedido--2Y75n54Cc9VizrlG1N6ZNl).
3. En la sección **Hitorial de pedidos**, haz click en `Ver interacciones`.

### Cancelación hecha por el marketplace

Es posible identificar por la clave que se utilizó en la solicitud de cancelación (`Cancel requested`) donde se muestra el origen de la llamada:

`vtexappkey-marketplacenombre-keydelmktp`

Cuando un pedido no es cancelado por el marketplace, o se mostrará el nombre del usuario que realizó el cancelamiento (`Cancel Requested`) o la clave de integración con VTEX (`Cancel requested by vtexappkey-appvtex`).

### Cancelación hecha por la tienda

En el módulo **Pedidos**, se puede realizar la cancelación manual por parte de los usuarios de la tienda y, en cualquier momento, el ERP puede enviar un pedido de cancelación. Además de esto, en el status `Tiempo para Cancelación`, el usuario puede solicitar la cancelación del pedido, y deberá ser aprobado por la tienda.

En estos casos, primero el pedido queda en el status `Cancelación Requerida` y des después de una aprobación, o nuevo pedido de cancelación por el usuario final, el status pasa a `Cancelado`.

Todos estos cambios en el pedido pueden ser visualizados en sus interacciones, en el módulo **Pedidos**, en la [página de detalles del pedido](/es/tutorial/pagina-de-detalhes-do-pedido--2Y75n54Cc9VizrlG1N6ZNl). 
