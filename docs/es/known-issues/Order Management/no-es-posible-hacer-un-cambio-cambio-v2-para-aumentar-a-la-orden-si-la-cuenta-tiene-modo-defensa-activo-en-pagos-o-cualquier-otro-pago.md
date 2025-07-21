---
title: "¡No es posible hacer un cambio (cambio v2) para aumentar a la orden si la cuenta tiene Modo Defensa activo en pagos o cualquier otro pago!"
id: 2sKCyLWlSU4LDc1Q3ToB4C
status: PUBLISHED
createdAt: 2024-12-26T18:18:49.821Z
updatedAt: 2025-05-09T13:13:44.448Z
publishedAt: 2025-05-09T13:13:44.448Z
firstPublishedAt: 2024-12-26T18:18:50.932Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: no-es-posible-hacer-un-cambio-cambio-v2-para-aumentar-a-la-orden-si-la-cuenta-tiene-modo-defensa-activo-en-pagos-o-cualquier-otro-pago
locale: es
kiStatus: Backlog
internalReference: 1155646
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cuando la cuenta tiene activado el DM (Modo Defensa) en el módulo de pagos, e intenta realizar un cambio v2 para incrementar el valor, no será posible proceder con la operación, ya que la pasarela entra en modo reintento, aumentando el tiempo de respuesta para el SOS (SalesOrdemSystem), entonces el SOS cancela la operación y vuelve a intentarlo, ¡hay 5 intentos hasta que la operación de cambio se cancela completamente!.

Este mismo escenario ocurre cuando cualquier método de pago requiere autorización manual de un usuario y aumenta y causa un retraso en la comunicación entre la pasarela y el SOS.


##

## Simulación


¡Para simular, la pasarela debe tener activado el modo defensa e intentar realizar un cambio v2 además de la solicitud!



## Workaround


No hay solución para este escenario, ¡es necesario desactivar DM para que el cambio v2 siga!





