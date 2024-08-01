---
title: 'Nuevas opciones de configuración en el Checkout para protección contra ataques de bots'
id: 3kA92hues6c2XgRe1uf2Or
status: DRAFT
createdAt: 2023-09-11T17:23:20.383Z
updatedAt: 2024-06-28T18:38:49.327Z
publishedAt: 
contentType: updates
productTeam: Shopping
author: 2AhArvGNSPKwUAd8GOz0iU
slug: nuevas-opciones-de-configuracion-en-el-checkout-para-proteccion-contra
locale: es
legacySlug: nuevas-opciones-de-configuracion-en-el-checkout-para-proteccion-contra
announcementImageID: ''
announcementSynopsisES: 'Creamos nuevas configuraciones en el Checkout para evitar fraudes y pedidos no autorizados, reforzando la seguridad.'
---


Con el fin de mejorar la seguridad de la información de tu tienda, VTEX ha implementado una nueva configuración en el Checkout, optimizando las defensas contra posibles ataques de software que simulan el comportamiento humano (bots).

## ¿Qué cambió?

Las siguientes opciones de configuración ya se encuentran disponibles:

- [Exigir inicio de sesión al completar una compra](#exigir-inicio-de-sesión-al-completar-una-compra)
- [Tiempo mínimo entre pedidos](#tiempo-mínimo-entre-pedidos)
- [Tiempo mínimo de existencia de un carrito para permitir el uso de una nueva tarjeta de crédito](#tiempo-mínimo-de-existencia-de-un-carrito-para-permitir-el-uso-de-una-nueva-tarjeta-de-crédito)

### Exigir inicio de sesión al completar una compra

A través del campo `requiresLoginToPlaceOrder`, permitimos que solamente aquellos clientes que hayan pasado por el proceso de autenticación puedan realizar compras.
Se exige la autenticación del usuario con el email que proporcionó cuando agregó los productos al carrito.
Cuando activas este campo, la opción de pagar sin iniciar sesión, denominada [SmartCheckout](https://help.vtex.com/es/tutorial/smartcheckout-security--3SrJuuhrqwePUg1rp1exfB) permanece desactivada para todos los clientes de la tienda.

### Tiempo mínimo entre pedidos

Utilizando el campo `minimumPurchaseDowntimeSeconds`, puedes establecer el tiempo mínimo que debe esperar un comprador antes de realizar otra compra.
Esta configuración reduce la probabilidad de que se creen otras cuentas para realizar una compra.

### Tiempo mínimo de existencia de un carrito para permitir el uso de una nueva tarjeta de crédito

A través del campo `cartAgeToUseNewCardSeconds`, se establece un intervalo de tiempo mínimo en el que un carrito de compra debe permanecer activo antes de que se pueda autorizar el uso de una nueva tarjeta de crédito en el mismo.
Esta configuración reduce la probabilidad de creación de varios carritos simultáneamente y evita que se agreguen nuevas tarjetas de crédito.
La activación de este campo no afecta a las compras realizadas con tarjetas ya guardadas en la cuenta del cliente.

## ¿Por qué realizamos este cambio?
Hemos creado las configuraciones con el objetivo de mejorar el nivel de seguridad y evitar tentativas de fraude y pedidos no autorizados, reforzando la seguridad de los administradores de tiendas y aumentando la protección de las cuentas de los clientes.

## ¿Qué se necesita hacer?
Las nuevas opciones de configuración están disponibles en el endpoint [Update an account's orderForm configuration](https://developers.vtex.com/docs/guides/update-an-account-orderform-configuration). Para obtener más información sobre cómo activar los campos de cada configuración, accede a [New checkout settings for bot attack protection](https://developers.vtex.com/updates/release-notes/2023-09-12-new-checkout-settings-for-bot-attack-protection).
