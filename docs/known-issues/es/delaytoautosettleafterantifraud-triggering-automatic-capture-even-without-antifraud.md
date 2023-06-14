---
title: 'delayToAutoSettleAfterAntifraud activación de la captura automática incluso sin antifraude'
id: 4HjKZsCbSTJSYE49xij9C8
status: PUBLISHED
createdAt: 2023-05-08T19:59:07.523Z
updatedAt: 2023-05-08T19:59:08.684Z
publishedAt: 2023-05-08T19:59:08.684Z
firstPublishedAt: 2023-05-08T19:59:08.684Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: delaytoautosettleafterantifraud-activacion-de-la-captura-automatica-incluso-sin-antifraude
kiStatus: Backlog
internalReference: 369633
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cuando la transacción **NO** tiene antifraude, se toma el valor más corto entre `delayToAutoSettle` y `delayToAutoSettleAfterAntifraud`. En este caso, el responsable de la captura es el `EarlySettlementWorker`, que es el trabajador de captura anticipada. Técnicamente, es el trabajador que se llama después de que el antifraude se realice, pero cuando no hay uno, comienza su cuenta atrás después de la autorización del pago.

Por otro lado, en el escenario en el que el antifraude **EXISTE**, se comporta como se espera: se llama al que actúe primero. La captura automática inicia la cuenta atrás tras la autorización del pago. La captura anticipada inicia la cuenta atrás tras la autorización antifraude.

Por ejemplo, si `delayToAutoSettle` es igual a 1 minuto y `delayToAutoSettleAfterAntifraud` es igual a 1 segundo, y el antifraude es llamado y aprobado antes de 1 minuto después de la autorización del pago, entonces el `EarlySettlementWorker` será llamado.



## Simulación


Para simular, es necesario que el conector en cuestión esté enviando diferentes periodos para delayto[...]. Teniendo en cuenta que esto está configurado, es necesario crear una condición de pago sin antifraude asociado. Proceder a realizar una orden y verificar el tiempo que tarda en llamarse a la liquidación (que será la referencia para `delayToAutoSettleAfterAntifraud` y no `delayToAutoSettle`).



## Workaround


N/A





