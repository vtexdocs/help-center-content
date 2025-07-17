---
title: "Pago con Giftcard atascado en estado autorizado tras error de autosettle en solicitud Giftcardhub"
id: 3IMj58gMkwdWb6ZcRWdYQ
status: PUBLISHED
createdAt: 2025-03-28T15:40:05.734Z
updatedAt: 2025-03-28T15:40:06.313Z
publishedAt: 2025-03-28T15:40:06.313Z
firstPublishedAt: 2025-03-28T15:40:06.313Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: pago-con-giftcard-atascado-en-estado-autorizado-tras-error-de-autosettle-en-solicitud-giftcardhub
locale: es
kiStatus: Backlog
internalReference: 1201336
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Los pagos con Giftcard se atascan en el estado `authorized` después de cualquier error de liquidación automática en la solicitud de GiftcardHub.
Incluso después de un reintento y una liquidación exitosa, el estado del pago no cambia.

Esto no depende del estado HTTP devuelto.



## Simulación


N/A



## Workaround


Abra un ticket solicitando la actualización del estado.





