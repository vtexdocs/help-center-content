---
title: 'En un escenario de pago dividido cuando el importe ya ha sido capturado, la pasarela ya no permite una solicitud de cancelación.'
id: 5qVUfltwPb3FacbECRsNa0
status: PUBLISHED
createdAt: 2023-01-27T20:13:21.397Z
updatedAt: 2023-01-27T20:13:22.038Z
publishedAt: 2023-01-27T20:13:22.038Z
firstPublishedAt: 2023-01-27T20:13:22.038Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: en-un-escenario-de-pago-dividido-cuando-el-importe-ya-ha-sido-capturado-la-pasarela-ya-no-permite-una-solicitud-de-cancelacion
locale: es
kiStatus: Backlog
internalReference: 742046
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Para un escenario de split, cuando el usuario realiza una orden de cambio o incluso una simple cancelación después de que el pago ya ha sido capturado, la pasarela ya no permite recibir un nuevo UpdateAdditionalData.
Por lo tanto, en este caso, la pasarela lanzará una excepción llamada PayoutSplitWasAlreadyDone.


##

## Simulación


Intente cancelar una transacción junto con un updateAdditionalData después de que la transacción haya capturado su pago.



## Workaround


Finalice la transacción capturando el importe restante y, a continuación, realice un reembolso total o parcial del importe de la transacción.





