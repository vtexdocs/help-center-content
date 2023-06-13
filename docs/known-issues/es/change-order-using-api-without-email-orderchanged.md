---
title: Modificación de la orden a través de la API sin correo electrónico order-changed
id: 1KMglga4xM1s7EvNO1mmua
status: PUBLISHED
createdAt: 2022-05-18T18:40:48.935Z
updatedAt: 2022-11-25T22:02:43.384Z
publishedAt: 2022-11-25T22:02:43.384Z
firstPublishedAt: 2022-05-18T18:40:49.234Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: modificacion-de-la-orden-a-traves-de-la-api-sin-correo-electronico-orderchanged
kiStatus: Backlog
internalReference: 380509
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cuando el administrador de una cuenta cambia el pedido aplicando descuentos sobre el valor y no sobre los artículos utilizando la API, el correo electrónico de la orden de cambio no se envía al cliente final.



## Simulación



Para simular este escenario es necesario cambiar el valor de la orden utilizando la API.
https://developers.vtex.com/vtex-rest-api/reference/orders#registerchange



## Workaround


No hay ninguna solución para este caso.

