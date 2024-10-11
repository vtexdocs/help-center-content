---
title: 'La fecha de caducidad de la tarjeta regalo no coincide con la fecha elegida al crearla'
id: 57GeuSubkdDkQNwzL3nmup
status: PUBLISHED
createdAt: 2022-03-27T14:08:35.577Z
updatedAt: 2024-07-01T18:48:00.399Z
publishedAt: 2024-07-01T18:48:00.399Z
firstPublishedAt: 2022-03-27T14:08:36.056Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: gift-card-expiration-date-does-not-match-with-the-date-chosen-when-it-was-created
locale: es
kiStatus: No Fix
internalReference: 378436
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Los clientes están recibiendo un error al intentar pagar con tarjetas regalo cuando la fecha de la compra coincide con la fecha de caducidad.



## Simulación


1. Crea una tarjeta regalo que caduque al día siguiente de crearla.
2. Espera a que el UTC marque las 0:00h. Por ejemplo, en Chile, sería a las 20:00 (UTC-4).



## Workaround


El cliente tiene que crear la tarjeta de regalo utilizando la API https://developers.vtex.com/vtex-rest-api/reference/gift-card#creategiftcard-1 y luego elige manualmente la fecha y la hora.

