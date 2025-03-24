---
title: "La condición especial del banco emisor está causando para algunos BINs el error en la página de pago 'El banco emisor para este banco no es aceptado'"
id: 7HgNpwcvqQDwSfJfv9KpY8
status: PUBLISHED
createdAt: 2022-03-25T19:04:12.310Z
updatedAt: 2022-11-25T22:04:57.905Z
publishedAt: 2022-11-25T22:04:57.905Z
firstPublishedAt: 2022-03-25T19:04:13.255Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: the-issuing-bank-special-condition-is-causing-for-some-bins-the-error-on-checkout-page-issuer-bank-for-this-bank-is-not-accepted
locale: es
kiStatus: Backlog
internalReference: 391549
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


El uso de las condiciones especiales en el método de pago para filtrar el emisor está causando que la caja muestre un error "El banco emisor no es aceptado". El problema es intermitente y se notó por primera vez al utilizar la tarjeta de marca compartida de pago personalizado, pero también ocurrió en el método de pago con tarjeta de crédito.



## Simulación


N/A



## Workaround


Eliminar la condición especial del banco emisor de la condición de pago.

