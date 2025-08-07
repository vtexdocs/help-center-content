---
title: "Pedido del vendedor facturado con problema en la captura del pago"
id: 59M66kN7D6qy8ErLnbdT9r
status: PUBLISHED
createdAt: 2024-01-29T16:51:46.993Z
updatedAt: 2024-01-29T16:51:47.674Z
publishedAt: 2024-01-29T16:51:47.674Z
firstPublishedAt: 2024-01-29T16:51:47.674Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: pedido-del-vendedor-facturado-con-problema-en-la-captura-del-pago
locale: es
kiStatus: Backlog
internalReference: 376646
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Ahora mismo, tal y como está construida nuestra arquitectura, tanto el Vendedor como el Marketplace son dos entidades totalmente diferentes. Marketplace se encarga de recibir el dinero del cliente y el vendedor es responsable de toda la logística hasta el momento en que entrega los productos al cliente.

La parte de "recibir dinero" se divide en Autorización y Captura. Ambas son acciones separadas en el Gateway y se ejecutan en dos momentos distintos. El primero es cuando el cliente realiza la compra y el segundo es cuando se inserta una factura en el sistema. Tras el proceso de Autorización, el Marketplace "indica" al Vendedor que puede proceder a preparar y enviar al cliente su mercancía. Como hay un espacio de tiempo entre la Autorización y la Captura y como son acciones separadas, no hay garantía de que la acción de Captura se ejecute correctamente.

Esto nos deja con el problema de que el Vendedor recibió una notificación para enviar la mercancía, insertó una notificación de factura en el sistema, y el Marketplace tuvo un problema al intentar realizar la acción de Captura.

En estos casos de notificación de Autorización y Captura, el Gateway siempre notifica inicialmente al Marketplace que a su vez notifica al Vendedor.

El problema es que el flujo del Vendedor no se detiene por los problemas que pueda tener en la Captura de pago, sino que se refleja en el flujo del Mercado.


##

## Simulación


No tenemos un paso a paso para replicar, sin embargo, es posible validar una orden de ejemplo.

Podemos ver que la orden de Mercado reportó un problema en la captura y no pudo completar el flujo, mostrando el error: "La operación de liquidación ha vuelto Fallida"

En el flujo, el estado del pedido en el Marketplace será "Verificando factura" y en las interacciones el mensaje: "La operación de liquidación ha vuelto Fallida".

En los eventos de transacción, aparecerá el mensaje: "Error: La respuesta fue Entidad_Rechazada".

Mientras el pedido del Vendedor llegó a Facturado, porque, para el Vendedor en la arquitectura actual, la captura del pago no es su responsabilidad aún siendo el dueño del pago.




## Workaround


En este momento no contamos con una solución para completar el flujo del Mercado, ya que esto depende de que la captura se realice correctamente. Sin la confirmación del Gateway, el pedido no podrá avanzar. Desafortunadamente, la salida a este tipo de inconsistencia es cancelar la orden MKT e intentar hacer una nueva manualmente.

Es importante validar siempre que se ha completado la captura del pago antes de entregar los productos






