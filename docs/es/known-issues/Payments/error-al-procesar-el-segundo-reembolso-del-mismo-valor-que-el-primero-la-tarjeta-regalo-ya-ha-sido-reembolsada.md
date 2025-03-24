---
title: 'Error al procesar el segundo reembolso del mismo valor que el primero: La tarjeta regalo ya ha sido reembolsada'
id: 17uP0QDzEPHmKvLMiyDYxc
status: PUBLISHED
createdAt: 2024-10-16T20:27:34.223Z
updatedAt: 2024-10-16T20:27:35.166Z
publishedAt: 2024-10-16T20:27:35.166Z
firstPublishedAt: 2024-10-16T20:27:35.166Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: error-when-processing-the-second-refund-of-the-same-value-as-the-first-gift-card-has-been-already-refunded
locale: es
kiStatus: Scheduled
internalReference: 1118560
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Al solicitar un segundo reembolso parcial del mismo valor que el primero, la pasarela devuelve el siguiente mensaje:

    Mensaje: La tarjeta regalo ya ha sido reembolsada.


Aunque esto se registra en la interacción, el segundo reembolso no se procesa realmente.
Este escenario es mucho más común para el segundo reembolso del mismo valor, pero también puede ocurrir en reembolsos posteriores, siempre que el importe solicitado sea igual a la suma de los reembolsos ya procesados.


##

## Simulación



1. Realiza una compra exclusivamente con una tarjeta regalo (CG);
2. 2. Finalice la transacción;
3. Emitir un reembolso parcial por un importe inferior a la mitad del pago total;
4. 4. Solicitar otro reembolso por el mismo importe que el primero.



## Workaround


Se ha creado un indicador de función en el que las cuentas añadidas ignoran la parte que introduce este error.
https://github.com/vtex/configs/blob/main/src/configs/payment-gateway/flags/gch-refund-condition.jsonnet




