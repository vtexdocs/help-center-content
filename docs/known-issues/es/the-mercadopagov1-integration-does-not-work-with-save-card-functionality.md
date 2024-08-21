---
title: 'La integración de MercadoPagoV1 no funciona con la función de guardar la tarjeta'
id: 2V8kdA60OTl7VQoUUNgBci
status: PUBLISHED
createdAt: 2022-05-03T15:45:09.856Z
updatedAt: 2022-11-25T22:06:14.442Z
publishedAt: 2022-11-25T22:06:14.442Z
firstPublishedAt: 2022-05-03T15:45:10.554Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: la-integracion-de-mercadopagov1-no-funciona-con-la-funcion-de-guardar-la-tarjeta
locale: es
kiStatus: No Fix
internalReference: 283727
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


La integración de MercadoPagoV1 no funciona con la funcionalidad de guardar la tarjeta en la sección Mi cuenta.

Este error se produce porque Mis tarjetas esperan una respuesta sincrónica de los adquirentes de tarjetas de crédito y MercadoPagoV1 no devuelve una respuesta inmediata.



## Simulación



1. Vaya a la sección VTEX **Admin.**
2. Configurar el adquirente MercadoPagoV1.
3. Configurar un método de pago con tarjeta de crédito -como Mastercard, Visa, American Express, etc.- para ser procesado por la entidad adquirente.
4. Ve a la página de inicio de tu tienda.
5. Inicie sesión introduciendo su dirección de correo electrónico y su contraseña.
6. Haz clic en **Mi cuenta**.
7. Vaya a la sección **Tarjetas de crédito**.
8. Pulse en **Añadir nueva tarjeta**.
9. Rellena todos los campos y pulsa en **Guardar nueva tarjeta**.
10. Este proceso devolverá _se ha producido un error al intentar registrar la tarjeta_.



## Workaround


N/A

