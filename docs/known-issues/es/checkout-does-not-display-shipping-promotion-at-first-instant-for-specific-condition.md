---
title: 'El pago no muestra la promoción de envío en el primer instante para una condición específica'
id: 14rQaM53csQQeA1wu5lRj8
status: PUBLISHED
createdAt: 2022-05-20T17:46:10.644Z
updatedAt: 2022-11-25T21:53:02.607Z
publishedAt: 2022-11-25T21:53:02.607Z
firstPublishedAt: 2022-05-20T17:46:11.046Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: el-pago-no-muestra-la-promocion-de-envio-en-el-primer-instante-para-una-condicion-especifica
kiStatus: Backlog
internalReference: 280144
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


La caja (backend) tiene un comportamiento de preselección del mejor método de entrega para el usuario tan pronto como se informa de un código postal.

Las promociones que utilizan la restricción de "Aplicar el descuento sólo cuando uno de los transportistas anteriores es seleccionado por el cliente" de hecho sólo se aplican después de que el cliente elige el método de entrega específico.

Ocurre que, si la opción de entrega seleccionada automáticamente en el momento de la compra entra en alguna promoción con la restricción anterior, el descuento no se aplicará La opción mencionada es la que dice "Aplicar el descuento sólo cuando uno de los transportistas anteriores es seleccionado por el cliente").

Esto sólo ocurre en el primer momento, ya que el checkout no recalcula las promociones al hacer esta elección de entrega automática. Esto se debe a que, si recalcula las promociones, eventualmente la mejor opción de entrega puede ser diferente, y esto dejaría al sistema en un bucle, buscando siempre la mejor opción. En la futura actualización del orderForm, se recalcula todo su contexto, esta vez con la forma de entrega realmente seleccionada, y entonces se aplicará la promoción.

Además de este hecho, la simulación de envío del carrito (shipping-preview) realiza peticiones adicionales a la API, no sólo utilizando el contexto de orderForm. Esto hace que reciba la promoción, mientras que los totales del carrito están restringidos al contexto del orderForm, que aún no tiene la promoción, lo que da lugar a valores divergentes.



## Simulación



## Workaround



