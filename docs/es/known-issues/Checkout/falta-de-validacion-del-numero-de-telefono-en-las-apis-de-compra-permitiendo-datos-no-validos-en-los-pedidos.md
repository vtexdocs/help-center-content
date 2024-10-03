---
title: 'Falta de validación del número de teléfono en las APIs de compra permitiendo datos no válidos en los pedidos'
id: 141uMln6PSWcm2YSE5UpSI
status: PUBLISHED
createdAt: 2022-10-18T22:35:54.297Z
updatedAt: 2022-11-25T21:49:30.758Z
publishedAt: 2022-11-25T21:49:30.758Z
firstPublishedAt: 2022-10-18T22:35:54.732Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: lack-of-phone-number-validation-in-the-purchase-apis-allowing-invalid-data-in-the-orders
locale: es
kiStatus: Backlog
internalReference: 680500
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


La validación de un número de teléfono está restringida al formulario donde se inserta o edita a través de la interfaz en el paso de perfil de compra. Los valores insertados directamente a través de las APIs REST a un orderForm o a un pedido, o que provengan del perfil del cliente (que, a su manera, pueden ser insertados por diferentes vías) no son validados por la plataforma.

Debido a la naturaleza de estos flujos, los orígenes que insertan valores no válidos no pueden ser rastreados.



## Simulación



- crear un carrito
- avanzar hasta el paso de pago
- cambiar la propiedad "teléfono" de la sección "clientProfileData" de un orderForm a través de la API a un valor no válido
- finalizar la compra

El pedido se creará con el número de teléfono no válido sin más validaciones.



## Workaround


El número de teléfono debe ser validado en el lado del cliente, como en la interfaz de usuario, sus funciones personalizadas, o cualquier middleware o backend que haga estas peticiones a las APIs REST de orderForm y order o alimente el perfil del cliente en los servicios de Profile System/Master Data.

