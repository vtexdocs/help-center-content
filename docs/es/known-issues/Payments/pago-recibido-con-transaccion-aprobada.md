---
title: "Pago recibido con transacción aprobada"
id: 30A0Dtg7lncuMolcufknRJ
status: PUBLISHED
createdAt: 2025-02-17T18:23:25.656Z
updatedAt: 2025-02-17T18:23:26.189Z
publishedAt: 2025-02-17T18:23:26.189Z
firstPublishedAt: 2025-02-17T18:23:26.189Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: pago-recibido-con-transaccion-aprobada
locale: es
kiStatus: Backlog
internalReference: 1174379
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


En algunos casos, incluso si el conector (**pagelofacil**) devuelve la respuesta correcta, los pagos permanecen atascados como estado `recibido` después de que la transacción sea `aprobada`.

Para comprobar el estado del pago puede utilizar la API GET Payment details, que debería devolver `received` en este caso.

Además, es posible comprobar algunos registros que indican el cambio de estado de Recibido a Autorizando, sin embargo, no hay ningún efecto sobre el estado del pago.


##

## Simulación



## Workaround



