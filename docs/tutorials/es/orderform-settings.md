---
title: 'Configuración de orderForm'
id: 7EAqNk48KP2QHnCxu856jT
status: DRAFT
createdAt: 2024-06-18T13:34:07.902Z
updatedAt: 2024-06-18T13:44:46.612Z
publishedAt: 
firstPublishedAt: 
contentType: tutorial
productTeam: Shopping
author: 1malnhMX0vPThsaJaZMYm2
slug: configuracion-de-orderform
locale: es
legacySlug: configuracion-de-orderform
subcategory: 
---

# Configuración de orderForm

En las secciones a continuación, describimos algunos ajustes de seguridad disponibles en Checkout que se pueden activar mediante el endpoint[ Update orderForm configuration](https://developers.vtex.com/docs/api-reference/checkout-api#post-/api/checkout/pvt/configuration/orderForm).

## Exigir inicio de sesión al completar una compra

Al declarar el campo `requiresLoginToPlaceOrder` como `true` se determina que solamente aquellos clientes que hayan pasado por el proceso de autenticación puedan realizar compras. El cliente debe tener una sesión iniciada con el email que proporcionó cuando agregó los productos al carrito.

Cuando activas este campo, [SmartCheckout](https://help.vtex.com/es/tutorial/smartcheckout-security--3SrJuuhrqwePUg1rp1exfB) será desactivado para todos los clientes de la tienda.

## Tiempo mínimo entre pedidos

Al definir un valor numérico para el campo `minimumPurchaseDowntimeSeconds`, puedes determinar el tiempo mínimo en segundos que un comprador debe esperar antes de realizar otra compra. Este ajuste evita que los clientes creen múltiples pedidos en un breve periodo de tiempo.

Recomendamos configurar el valor de este campo como 90 segundos y utilizar este ajuste junto con [Exigir inicio de sesión al completar una compra](#exigir-inicio-de-sesion-al-completar-una-compra).

## Tiempo mínimo de existencia de un carrito para permitir el uso de una nueva tarjeta de crédito

La definición de un valor numérico en el campo `cartAgeToUseNewCardSeconds` determina el tiempo en segundos que un nuevo carrito debe existir antes de que sea posible autorizar y aplicar una nueva tarjeta de crédito.

Esta configuración reduce la probabilidad de creación de varios carritos simultáneamente y evita que se agreguen nuevas tarjetas de crédito. La activación de este campo no afecta las compras realizadas con tarjetas ya guardadas en la cuenta del cliente.

Recomendamos configurar este campo con un valor de 30 segundos.
