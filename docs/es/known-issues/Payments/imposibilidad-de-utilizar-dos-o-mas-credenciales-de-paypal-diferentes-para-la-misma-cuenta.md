---
title: "Imposibilidad de utilizar dos o más credenciales de PayPal diferentes para la misma cuenta."
id: 3cVh2SbvToH8yGOOYcWgDB
status: PUBLISHED
createdAt: 2022-03-03T18:39:24.442Z
updatedAt: 2024-02-16T20:25:01.876Z
publishedAt: 2024-02-16T20:25:01.876Z
firstPublishedAt: 2022-03-03T18:39:25.004Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: imposibilidad-de-utilizar-dos-o-mas-credenciales-de-paypal-diferentes-para-la-misma-cuenta
locale: es
kiStatus: No Fix
internalReference: 459704
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cuando el usuario registra dos afiliaciones diferentes en la misma cuenta utilizando PayPalPlus, la plataforma no actualiza la caché para cuando se produce un cambio en una regla de pago, es decir, sólo es posible utilizar una credencial por cuenta.


##

## Simulación


Registre dos afiliaciones diferentes con credenciales diferentes y cree reglas teniendo en cuenta estas dos afiliaciones.
Cierra dos compras, cada una con una de las reglas, y en el payload de la transacción puedes ver que a pesar de introducir las reglas correctas, el merchant_id (identificación de la cuenta en la que caerá el dinero) es el mismo.



## Workaround


N/A





