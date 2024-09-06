---
title: 'Los ítems con Assembly options aparecen como no disponibles para la entrega'
id: uDN6ZTQgbLlZul7eLP5SQ
status: PUBLISHED
createdAt: 2021-09-27T20:09:20.031Z
updatedAt: 2022-12-22T20:41:04.858Z
publishedAt: 2022-12-22T20:41:04.858Z
firstPublishedAt: 2021-09-27T20:12:58.022Z
contentType: knownIssue
productTeam: Shopping
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: los-items-con-assembly-options-aparecen-como-no-disponibles-para-la-entrega
locale: es
kiStatus: Backlog
internalReference: 
---

## Sumario

Los ítems con Assembly options, cuando se añaden al carrito, aparecen para el cliente como no disponibles para la entrega mientras no se calcule el costo de envío.

Esto se debe a que al [orderForm](https://developers.vtex.com/vtex-rest-api/reference/checkout-api-overview) — la estructura de datos correspondiente al carrito — le falta información en el campo `logisticsInfo.deliveryChannel`.

Cuando se introduce una dirección y se calcula el costo de envío, los ítems ya no aparecen como no disponibles para la entrega.


## Simulación

Para realizar esta simulación, es necesario tener un ítem con posibilidad de Assembly options en el catálogo de tu tienda.

1. En la tienda, añade al carrito un ítem con la opción de Assembly options;
2. Añade la opción de assembly al ítem;
3. Observa que el ítem aparece como no disponible para entrega;
4. Introduce una dirección y calcula los costos de envío;
5. Observa que el ítem aparece como disponible para entrega.


## Workaround

Para evitar el problema, se puede ocultar el mensaje que se muestra mientras no se introduzca ninguna dirección. En principio, está disponible bajo el selector ".shp-alert-shipping-unavailable", pero debes verificar si el mensaje puede ser necesario en otros escenarios, como cuando el ítem realmente no tiene opción de entrega, solo de recogida.

