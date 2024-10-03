---
title: 'Callback URL signature: bloqueo de autorizaciones de pago asíncrono que no utilicen token de autenticación'
id: 3at5YtI2L6QqBym6Af56tV
status: PUBLISHED
createdAt: 2024-05-03T18:12:04.996Z
updatedAt: 2024-05-03T18:33:19.277Z
publishedAt: 2024-05-03T18:33:19.277Z
contentType: updates
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: 2024-05-03-callback-url-signature-authentication-token
locale: es
legacySlug: callback-url-signature-token-de-autenticacion
announcementImageID: ''
announcementSynopsisES: 'Token de autenticación para autorizaciones de pago asíncrono'
---

Con el objetivo de optimizar las operaciones de pago realizadas en la plataforma, VTEX está implementando el uso del token de autenticación `X-VTEX-signature`. Este token deben utilizarlo partners y proveedores de servicios de pago al retornar el status de una transacción de pago asíncrona a través de [callback URL](https://help.vtex.com/es/tutorial/payment-provider-protocol--RdsT2spdq80MMwwOeEq0m#callback-url).

A partir del 27 de mayo de 2024, el gateway de VTEX enviará en cada transacción de pago la información de callback URL y el respectivo token de autenticación.

Ejemplo de callback URL que contiene el token de autenticación:

`https://gatewayqa.vtexpaids.com.br/api/pvt/paid-provider/transactions/8FB0F111111122222333344449984ACB/paids/A2A9A25B11111111222222333327883C/callback?accountName=teampaidsintegrations&X-VTEX-signa ture=R123456789aBcDeFGHij1234567890tk`

## ¿Qué se necesita hacer?

A partir del 26 de junio de 2024, todos los partners y proveedores de servicios de pago deben informar el status de una transacción de pago asíncrona únicamente a través de callback URL y token de autenticación.

Después de esta fecha, cualquier información que se envíe únicamente a callback URL (sin el token de autenticación) será bloqueada y se cancelarán las respectivas transacciones de pago.

Para más información sobre callback URL, consulta [Payment Provider Protocol](https://help.vtex.com/es/tutorial/payment-provider-protocol--RdsT2spdq80MMwwOeEq0m#callback-url) y [Create Payment endpoint](https://developers.vtex.com/docs/api-reference/payment-provider-protocol#post-/payments).
