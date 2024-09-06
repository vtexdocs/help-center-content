---
title: 'Cálculo incorrecto de entrega cuando uno de los SLAs no tiene todos los ítems'
id: 57rd31npt6iWcOQm0gIAMA
status: PUBLISHED
createdAt: 2018-08-06T18:50:44.391Z
updatedAt: 2022-12-22T20:43:12.816Z
publishedAt: 2022-12-22T20:43:12.816Z
firstPublishedAt: 2018-08-06T19:53:28.422Z
contentType: knownIssue
productTeam: Shopping
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: calculo-incorrecto-de-entrega-cuando-uno-de-los-slas-no-tiene-todos-los-items
locale: es
kiStatus: Backlog
internalReference: 
---

## Sumario

Este escenario ocurre sólo para los cálculos de envío en el carrito en que no todas las formas de entrega poseen todos los ítems disponibles. 

Esto hace que el valor se calcule sobre la cantidad en común entre todas las formas de entrega. En otras palabras, el valor del envío se define en base a la cantidad máxima de ítems que todas las formas de entrega pueden atender.

## Simulación

1. Considere que la tienda tiene 2 formas de entrega: Expresa y Normal, por ejemplo.
2. En la forma de entrega Expresa, el `item x` tiene la cantidad disponible de sólo 10 unidades.
3. Ya en la forma de entrega Normal, considere que hay 200 unidades del mismo `item x` como cantidad disponible.
4. En el carrito, el cliente selecciona 14 unidades del `item x`.
5. Dado que la forma de entrega Expresa tiene sólo 10 unidades, el checkout no hará el cálculo para las 14 unidades del carrito, sino para sólo 10 en ambas formas de entrega.
6. Como resultado, el valor mostrado en la simulación será menor si la entrega elegida es Normal; si la elección del cliente es por la Expressa, el valor mostrado será referente a una cantidad menor de ítems que la previamente seleccionada.

## Workaround

Actualmente no hay solución para este problema.

