---
title: 'Reembolso incorrecto de las compras con 3 métodos de pago (uno de ellos es GC)'
id: 5nWfRRuxOj7CN5mjXCLzzu
status: PUBLISHED
createdAt: 2022-03-03T18:38:19.216Z
updatedAt: 2022-11-25T22:08:35.058Z
publishedAt: 2022-11-25T22:08:35.058Z
firstPublishedAt: 2022-03-03T18:38:19.775Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: incorrect-refund-for-purchases-with-3-payment-methods-one-of-them-being-gc
locale: es
kiStatus: Backlog
internalReference: 464837
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Las transacciones con 3 métodos de pago que son una de sus tarjetas de regalo tienen importes de reembolso incorrectos. En algunos casos tenemos un reembolso negativo que hace que se cancele el pago.

Hilo con la discusión



## Simulación


El procedimiento parece ser aleatorio, nos dimos cuenta de que el importe de reembolso negativo es el importe total solicitado - los métodos de pago que se reembolsaron correctamente - el importe de la GC.
En el caso que arriba:
Pago 1(American express): 66,99 BRL
Pago 2(Diners): 67,00 BRL
**Pago 3(GC): 30,99 BRL**

Reembolso solicitado: 104,99 BRL

**Reembolso de la tarjeta regalo: 30,99 BRL**
Reembolso en American express: 66,99 BRL
Reembolso en Diners: -23,98 BRL

El valor negativo en el reembolso de Diners es (104,99 - 30,99 - 66,99 - **30,99**) = -23,98.
Lo que parece ser es que de alguna manera el valor de la GC se está descontando dos veces.



## Workaround


No hay ninguna solución para este error

