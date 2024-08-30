---
title: 'La doble solicitud de Adyen 3DS2 genera una denegación de autorización de pago'
id: 3yR8LzaUjclJ22PkAymvoe
status: PUBLISHED
createdAt: 2023-09-20T13:09:29.771Z
updatedAt: 2023-09-20T13:09:30.507Z
publishedAt: 2023-09-20T13:09:30.507Z
firstPublishedAt: 2023-09-20T13:09:30.507Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: la-doble-solicitud-de-adyen-3ds2-genera-una-denegacion-de-autorizacion-de-pago
locale: es
kiStatus: Backlog
internalReference: 884154
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Cuando la solicitud 3DS2 de Adyen se envía dos veces, obtiene un error en la respuesta y el pago se deniega automáticamente.

Respuesta de autorización:

`{"status":409, "errorCode": "704", "message": "solicitud ya procesada o en curso", "errorType": "validation"}`

Tras el mensaje:

`Respuesta no esperada [].`

Este es un problema cuando el pago está realmente autorizado por Adyen pero como no hay liquidación por nuestra parte no podemos enviar una solicitud de reembolso.


##

## Simulación


No hemos sido capaces de reproducir este escenario o encontrar un patrón hasta el momento.



## Workaround


NA




