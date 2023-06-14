---
title: 'Cambiar código postal no quita la dirección antigua'
id: 3kS6NurZhmokISg82eaMw2
status: PUBLISHED
createdAt: 2018-09-11T19:53:42.872Z
updatedAt: 2022-12-22T20:48:38.338Z
publishedAt: 2022-12-22T20:48:38.338Z
firstPublishedAt: 2018-09-11T20:10:52.209Z
contentType: knownIssue
productTeam: Shopping
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: cambiar-codigo-postal-no-quita-la-direccion-antigua
kiStatus: Backlog
internalReference: 
---

## Sumario

Al cambiar el código postal, la dirección anteriormente rellenada no se quita del formulario.

Este escenario ocurre sólo en la versión 6 de SmartCheckout y se limita a la experiencia del usuario, no habiendo mayores fallas vinculadas.

## Simulación

1. En un carrito cualquiera, insertar el código postal, número y complemento;
2. Cambiar el código postal;
3. Observar que los campos número y complemento mantienen los datos del primer paso, mientras que lo esperado era vaciarlos y requerir nueva entrada de datos.

## Workaround

No existe un workaround conocido para este escenario.

