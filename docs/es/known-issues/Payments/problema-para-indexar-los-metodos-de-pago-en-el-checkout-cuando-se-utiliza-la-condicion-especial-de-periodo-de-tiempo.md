---
title: 'Problema para indexar los métodos de pago en el checkout cuando se utiliza la condición especial de periodo de tiempo'
id: 1sM1ZtZw0GZ9TFuULg3Igd
status: PUBLISHED
createdAt: 2022-04-15T18:34:49.426Z
updatedAt: 2022-11-25T22:07:14.687Z
publishedAt: 2022-11-25T22:07:14.687Z
firstPublishedAt: 2022-04-15T18:34:50.048Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: problem-to-index-payment-methods-on-checkout-when-using-period-of-time-special-condition
locale: es
kiStatus: Backlog
internalReference: 402857
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Tenemos un problema para indexar los métodos de pago en el checkout. Ocurre con las condiciones de pago que están configuradas con un periodo de tiempo especial.

Si un método de pago tiene una sola regla, y esa regla fue indexada fuera de su período de tiempo válido, entonces el método de pago no aparecerá en el índice. Tampoco aparecerá en el formulario de la interfaz de usuario de la caja. Permanecerá ausente hasta que se active una nueva indexación dentro de su periodo válido.

Si un pago tiene una única regla y esa regla se indexó dentro de su período de validez, el método de pago aparecerá en el índice y, por extensión, en el formulario de la interfaz de pago. Incluso si la regla expira más tarde, pero no se activa una nueva indexación, el índice no se altera y el método de pago seguirá apareciendo en el formulario de la interfaz de pago.

Peor aún, si se trata de una tarjeta de crédito, entonces bien la API de pago solicita las opciones de pago a plazos, la pasarela se dará cuenta de que la regla está fuera de su período de validez y devolverá una matriz vacía de opciones, lo que provocará un error en la interfaz de usuario de pago. Permanecerá en "calculando cuotas" aunque las solicitudes ya hayan sido devueltas.



## Simulación


El escenario se puede reproducir añadiendo una nueva condición de pago con una condición especial de periodo de tiempo para un método de pago que aún no tiene configurada ninguna otra condición de pago. En el periodo válido de la programación, el método de pago no aparecerá en la caja.

Después, puede configurar otra condición de pago (como activa) para el mismo método de pago sin programación y la primera condición de pago aparecerá en la caja. Después, puede desactivar esta condición de pago secundaria y la primera seguirá apareciendo en la caja.

Pero este método de pago no desaparecerá de la caja sin otra ayuda de indexación, incluso cuando esté fuera del periodo establecido en la programación.



## Workaround


Para una condición de pago con un periodo de tiempo especial que no aparezca en la caja, el cliente puede establecer otra condición de pago utilizando el mismo método de pago y aparecerá en la caja. Pero esto no resuelve todos los problemas, porque si la programación se establece para un período de tiempo diario, el cliente tendría que forzar la indexación cada vez que el método de pago tiene que aparecer y desaparecer en la caja.

