---
title: '12 dígitos cardNumber siendo aceptados en la caja y causando transacciones atascadas'
id: 2vLsFwO5Dt2gUL9kUTZ8s3
status: PUBLISHED
createdAt: 2022-03-03T18:39:42.814Z
updatedAt: 2022-11-25T22:05:12.000Z
publishedAt: 2022-11-25T22:05:12.000Z
firstPublishedAt: 2022-03-03T18:39:43.280Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: 12-digits-cardnumber-being-accepted-in-checkout-and-causing-stuck-transactions
locale: es
kiStatus: Backlog
internalReference: 452392
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Cuando un cliente introduce un cardNumber de 12 dígitos, a pesar de que este número de dígitos no es válido, lo enviamos varias veces a la entidad adquirente aún sabiendo que no lo aprobará ya que el cardNumber no está en el patrón: [0-9]{13,19}. El resultado es un pedido atascado durante varios días hasta ser cancelado.



## Simulación



1. Ir a la caja de una tienda de Argentina
2. Rellenar un número de tarjeta Mastercard de 12 dígitos al azar
3. Haga clic en "SÍ, EL NÚMERO DE LA TARJETA DE CRÉDITO ES CORRECTO".



## Workaround


N/A

