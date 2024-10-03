---
title: 'El servicio fiscal utiliza los datos del documento en lugar del correo electrónico del cliente'
id: IOu1ZV40Q5yHjgbcS9C15
status: PUBLISHED
createdAt: 2022-03-23T17:50:15.754Z
updatedAt: 2024-02-16T20:28:42.991Z
publishedAt: 2024-02-16T20:28:42.991Z
firstPublishedAt: 2022-03-23T17:50:16.302Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: tax-service-uses-document-data-instead-of-customer-email
locale: es
kiStatus: No Fix
internalReference: 548671
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.



El checkout, al ensamblar la carga útil para el servicio fiscal, utiliza los datos del documento (ya sea corporativo o no) en lugar del correo electrónico. De esta manera, la variable `clientEmail` conserva la definición del documento que se recibió y no el correo electrónico en sí.



## Simulación


Hacer una simulación para el FFM pasando correctamente los datos del cliente en el `clientProfileData` y notar usando el modo de depuración la petición que se hace al servicio de impuestos la variable `clientEmail` usando la información que se pasó en el `corporateDocument` o `document` (dependiendo del tipo de documento)



## Workaround


No tome en cuenta el `clientEmail`, sino el correo electrónico que está dentro del `clientData`. Ahí los datos son correctos.

