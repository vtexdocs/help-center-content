---
title: 'Calculadora de flete inconsistente en el carrito'
id: 2U3U4r7DAAuIegW0geKG8U
status: PUBLISHED
createdAt: 2018-12-10T16:09:32.683Z
updatedAt: 2019-12-31T17:00:43.523Z
publishedAt: 2019-12-31T17:00:43.523Z
firstPublishedAt: 2018-12-10T16:30:03.673Z
contentType: knownIssue
productTeam: Shopping
author: authors_4
tag: Checkout
slug: calculadora-de-flete-inconsistente-en-el-carrito
kiStatus: Closed
internalReference: 
---

## Sumario

Cuando un carrito tiene más de 20 ítems, su exhibición se corta parcialmente, dando lugar al botón "mostrar más ítems".
 
En estos casos, el calculador de flete tiene comportamiento inconsistente, mostrando dos selectores y valores divergentes entre sí.
 
Esto ocurre solo en la versión 5 del checkout.


## Simulación

- utilizar una tienda con el checkout v5
- tener un carrito con más de 20 ítems
- calcular flete en el carrito para observar su comportamiento


## Workaround

Este escenario ya no ocurre más en la versión 6 del checkout, que utiliza el componente "Shipping Preview" para el cálculo del flete en el carrito.


