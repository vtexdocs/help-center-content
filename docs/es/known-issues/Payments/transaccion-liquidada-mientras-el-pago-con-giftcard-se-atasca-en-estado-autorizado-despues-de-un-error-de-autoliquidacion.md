---
title: "Transacción liquidada mientras el pago con Giftcard se atasca en estado autorizado después de un error de autoliquidación"
id: 3IMj58gMkwdWb6ZcRWdYQ
status: PUBLISHED
createdAt: 2025-03-28T15:40:05.734Z
updatedAt: 2025-07-24T17:49:53.748Z
publishedAt: 2025-07-24T17:49:53.748Z
firstPublishedAt: 2025-03-28T15:40:06.313Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transaccion-liquidada-mientras-el-pago-con-giftcard-se-atasca-en-estado-autorizado-despues-de-un-error-de-autoliquidacion
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

El mensaje en las interacciones de transacción es:


    Mensaje: Unknown Error on AutoSettleA chamada a 'https://janus-payments-link.vtex.com.br//giftcardproviders//giftcards//transactions//settlements' retornou o status HTTP '()'.


Esto no depende del estado HTTP devuelto.


##

## Simulación


N/A



## Workaround


Abra un ticket solicitando la actualización del estado.





