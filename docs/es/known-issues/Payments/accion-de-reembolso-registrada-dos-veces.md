---
title: "Acción de reembolso registrada dos veces"
id: sentkBZJsQ9X954iNEyXh
status: PUBLISHED
createdAt: 2024-09-16T20:29:22.928Z
updatedAt: 2024-09-16T20:29:23.892Z
publishedAt: 2024-09-16T20:29:23.892Z
firstPublishedAt: 2024-09-16T20:29:23.892Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: accion-de-reembolso-registrada-dos-veces
locale: es
kiStatus: Backlog
internalReference: 1099618
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


En algunos casos pueden ocurrir dos acciones de reembolso en la transacción pero ninguna de ellas se envía a la entidad adquirente.

Cuando falla una solicitud de reembolso, no hay reintento, una `CreateTaskAsyncRequest` envía una notificación por correo electrónico al vendedor sobre el error y se debe solicitar un reembolso manual a la entidad adquirente. En este caso, el reembolso se registra con `type` = `email-notification`, un reembolso correcto sería `online`, ambos no deberían producirse nunca en un escenario normal.


    https://.vtexpayments.com.br/api/pvt/transactions//refunds



##

## Simulación


No hemos podido simular.



## Workaround


No disponible, debe realizarse un reembolso manual (comerciante + entidad adquirente).




