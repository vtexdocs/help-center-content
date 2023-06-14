---
title: 'AdyenV2(PPP) requiere pspReference para cancelar la transacción.'
id: 3rKIFtngLmBTHSIr2AYql1
status: PUBLISHED
createdAt: 2022-03-03T22:08:18.628Z
updatedAt: 2023-05-24T20:01:22.862Z
publishedAt: 2023-05-24T20:01:22.862Z
firstPublishedAt: 2022-03-03T22:08:19.111Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: adyenv2ppp-requiere-pspreference-para-cancelar-la-transaccion
kiStatus: Backlog
internalReference: 486752
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cuando la transacción es reconocida por el proveedor y el estado nunca cambia de indefinido, AdyenV2 está requiriendo una pspReference para cancelar la transacción. Este no es un comportamiento esperado porque este campo no existe en la APP, por lo que el cliente se queda atascado en el modal PIX en la interfaz de pago.



## Simulación


Inicie una nueva transacción con PIX usando AdyenV2 y no finalice el pago en la aplicación. Entonces, la transacción se atascará en este estado.



## Workaround


No hay ninguna solución.

