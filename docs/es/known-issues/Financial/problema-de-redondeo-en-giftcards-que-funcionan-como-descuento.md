---
title: 'Problema de redondeo en giftcards que funcionan como descuento'
id: ecLMI2kGhqmEMUkESOSOK
status: PUBLISHED
createdAt: 2018-03-27T20:47:13.941Z
updatedAt: 2022-12-22T14:45:08.837Z
publishedAt: 2022-12-22T14:45:08.837Z
firstPublishedAt: 2018-03-27T20:53:30.783Z
contentType: knownIssue
productTeam: Financial
author: authors_84
tag: Checkout,Order Management
slugEN: rounding-problem-in-giftcards-that-work-as-discount
locale: es
kiStatus: Backlog
internalReference: 
---

## Sumario

Gift cards que funcionan como descuento están presentando un problema en el redondeo, ya que los ítems no se dividen.

Como esta priceTag no funciona como las priceTags que vienen de RnB, el ítem no ajusta el precio unitario, mostrando valores incorrectos.

## Simulación

Hacer un pedido con gift card siendo usado como descuento (y no como método de pago) y más de un ítem en el mismo pedido.

El valor de la suma de los ítems no va a coincidir con el total del pedido, pues va a ocurrir un redondeo, por no ocurrir la división de ítems para que el cálculo sea exacto.

## Workaround

Actualmente no hay workaround para este problema.


