---
title: 'La devolución de llamada con estado aprobado no se tiene en cuenta para continuar con la transacción'
id: 1IU3macRFOPM5nI2ekXHHD
status: PUBLISHED
createdAt: 2024-11-04T19:56:28.031Z
updatedAt: 2024-11-04T19:56:29.230Z
publishedAt: 2024-11-04T19:56:29.230Z
firstPublishedAt: 2024-11-04T19:56:29.230Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: callback-with-approved-status-not-being-considered-to-proceed-with-the-transaction
locale: es
kiStatus: Backlog
internalReference: 1129281
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Aunque la pasarela recibe correctamente el callback indicando que el estado del pago es aprobado, la transacción no progresa a `authorized` y luego a `approved`. Se envía una solicitud de autorización posterior, y como el retorno es `undefined`, la transacción permanece en el estado `authorizing` hasta que se agota el número de reintentos.


##

## Simulación


Para que se produzca este problema, la pasarela debe reintentar en el mismo momento en que recibió la llamada de retorno. No es sencillo reproducir este comportamiento, ya que acertar exactamente con la misma marca de tiempo es bastante difícil.




## Workaround


Hay dos acciones que el socio puede tomar:

1. 1. Si se aprueba el pago, responder a las llamadas posteriores de solicitud de autorización de la pasarela con este estado en lugar de indefinido.
2. 2. Aumentar el número de reintentos (`delayToCancel`) para que la pasarela realice más intentos.





