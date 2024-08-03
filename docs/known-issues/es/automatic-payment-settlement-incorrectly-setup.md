---
title: 'Liquidación automática de pagos configurada incorrectamente'
id: 6KOQwBKNgOPNL7TM80Bqjf
status: PUBLISHED
createdAt: 2024-06-19T22:12:10.705Z
updatedAt: 2024-06-19T22:12:11.484Z
publishedAt: 2024-06-19T22:12:11.484Z
firstPublishedAt: 2024-06-19T22:12:11.484Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: liquidacion-automatica-de-pagos-configurada-incorrectamente
locale: es
kiStatus: Backlog
internalReference: 1053010
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


El problema es que la pasarela ignoraba el valor `delayToAutoSettleAfterAntifraud`.

Estos campos son obligatorios en la respuesta de autorización, pero la pasarela acepta su ausencia. Nuestra documentación relacionada con esto.

        "delayToAutoSettle": 1200, "delayToAutoSettleAfterAntifraud": 1200

En el escenario perfecto, la pasarela no debería aceptar la respuesta sin ellos.

Cuando el campo `delayToAutoSettleAfterAntifraud` no está en la carga útil de la respuesta de autorización. La pasarela no puede definir el valor correcto, por lo que el valor por defecto de la liquidación automática del pago será de 4 días (por defecto).


##

## Simulación



1. Cree un pago.
2. Configurar el conector para que responda sin que este requerido el campo delayToAutoSettle, pero enviando el delayToAutoSettleAfterAntifraud.
3. Comprueba la respuesta de Autorización, y sólo tendrá el valor al que respondió el conector
4. Compruebe la tarjeta morada para ver qué valor ha establecido. La liquidación automática del pago se programará para cuatro días después de la aprobación del pago.




## Workaround



Establecer el **delayAutoSettle** como el mismo valor que **delayAutoSettleAfterAntifraud.**





