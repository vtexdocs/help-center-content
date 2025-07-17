---
title: "Transacción atascada en cancelación cuando una de las tarjetas es denegada"
id: RdKtB6LsKfaukjT9kiqZ4
status: PUBLISHED
createdAt: 2022-03-03T18:39:59.580Z
updatedAt: 2025-04-22T17:03:23.384Z
publishedAt: 2025-04-22T17:03:23.384Z
firstPublishedAt: 2022-03-03T18:39:59.922Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transaccion-atascada-en-cancelacion-cuando-una-de-las-tarjetas-es-denegada
locale: es
kiStatus: No Fix
internalReference: 429082
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cuando se realiza un pedido con dos tarjetas, donde una es aprobada y la otra es rechazada, ocurre que el pedido queda bloqueado con valor capturado y no se cancela automáticamente. La transacción bloqueada se cancela

##

##

## Simulación



1. Realiza una compra con dos tarjetas de crédito.
2. Una de las tarjetas es rechazada.



## Workaround


No hay solución para completar la cancelación, pero es posible devolver el importe capturado.


## **Notas Internas**
Al intentar anular la operación se produce el error:

    {"error": {"código": "1", "mensaje": "Object reference not set to an instance of an object.", "exception": null }}

Aunque se pasan el valor y los datos del carrito correctos.

