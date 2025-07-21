---
title: "Pedido bloqueado en pendiente de pago debido a un estado de transacción inesperado"
id: NiojkaM32e07VzydweKqx
status: PUBLISHED
createdAt: 2025-03-17T20:50:16.017Z
updatedAt: 2025-03-17T20:50:16.558Z
publishedAt: 2025-03-17T20:50:16.558Z
firstPublishedAt: 2025-03-17T20:50:16.558Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: pedido-bloqueado-en-pendiente-de-pago-debido-a-un-estado-de-transaccion-inesperado
locale: es
kiStatus: Backlog
internalReference: 1195265
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


A veces, cuando la OMS comprueba en la pasarela el estado de la transacción antes de cambiar el pedido a Pago Aprobado, el estado es anterior al esperado, que debería ser **Aprobado.** Haciendo que el pedido se quede atascado en estado Pendiente de Pago.


##

## Simulación


El error es intermitente y no se puede simular.



## Workaround


Abra un ticket con VTEX solicitando que la notificación de pago aprobado sea reenviada a OMS.





