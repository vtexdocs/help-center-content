---
title: "Discrepancia en la visualización de reservas en la Gestión de Inventarios"
id: 4UNZLS4HVABw4LYatRB6O
status: PUBLISHED
createdAt: 2025-05-05T22:11:26.083Z
updatedAt: 2025-07-08T19:35:20.576Z
publishedAt: 2025-07-08T19:35:20.576Z
firstPublishedAt: 2025-05-05T22:11:26.627Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: discrepancia-en-la-visualizacion-de-reservas-en-la-gestion-de-inventarios
locale: es
kiStatus: Backlog
internalReference: 1220722
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>



La pantalla de gestión de inventario presenta un comportamiento inesperado en el que la cantidad de artículos reservados mostrada en la pantalla de inicio es mayor que la cantidad mostrada en el modal de artículos reservados. Este comportamiento se produce para las reservas en estado "Canceled_AbortedCommitted", y estas reservas no se filtran correctamente en la pantalla de inicio.


##

## Simulación



No hay una manera fácil de reproducir este escenario, pero hay una alta probabilidad de que ocurra con reservas con el estado "Canceled_AbortedCommitted".



## Workaround



Al volver a cancelar la reserva, la cancelación funciona y la reserva ya no aparece en la interfaz de usuario.

https://developers.vtex.com/docs/api-reference/logistics-api#post-/api/logistics/pvt/inventory/reservations/-reservationId-/cancel?endpoint=post-/api/logistics/pvt/inventory/reservations/-reservationId-/cancel



