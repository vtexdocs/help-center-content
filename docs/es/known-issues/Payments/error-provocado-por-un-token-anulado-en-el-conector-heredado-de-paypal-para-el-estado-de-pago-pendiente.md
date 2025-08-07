---
title: "Error provocado por un TOKEN anulado en el conector heredado de PayPal para el estado de pago pendiente"
id: 5GrnhD8fwte7qu50Az8r3Y
status: PUBLISHED
createdAt: 2023-06-13T22:35:16.397Z
updatedAt: 2024-07-01T18:47:54.680Z
publishedAt: 2024-07-01T18:47:54.680Z
firstPublishedAt: 2023-06-13T22:35:16.955Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: error-provocado-por-un-token-anulado-en-el-conector-heredado-de-paypal-para-el-estado-de-pago-pendiente
locale: es
kiStatus: No Fix
internalReference: 308214
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


En nuestro conector heredado de PayPal, nos hemos enfrentado a un problema relacionado con la sobrescritura del campo `TOKEN` para `PAYMENTINFO_0_TRANSACTIONID`. El problema surge cuando el proveedor envía un estado de pago como pendiente. En consecuencia, nuestra implementación del conector sobrescribe el TOKEN, lo que provoca un error que PayPal desencadena durante las solicitudes posteriores. Como resultado, la transacción se bloquea con un mensaje de "código inválido".



## Simulación


Este problema sólo se puede reproducir en casos asíncronos.



## Workaround


N/A





