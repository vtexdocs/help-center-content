---
title: "El campo 'disponibilidad' es incorrecto en la Simulación de Cumplimiento para productos sin stock o precio"
id: 1k2zcLEN5vG6mnksLwEXxp
status: PUBLISHED
createdAt: 2023-10-04T14:22:53.519Z
updatedAt: 2023-10-04T14:22:54.219Z
publishedAt: 2023-10-04T14:22:54.219Z
firstPublishedAt: 2023-10-04T14:22:54.219Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: el-campo-disponibilidad-es-incorrecto-en-la-simulacion-de-cumplimiento-para-productos-sin-stock-o-precio
locale: es
kiStatus: Backlog
internalReference: 773537
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cuando un producto está agotado o no tiene precio, la simulación de cumplimiento informa incorrectamente del campo "disponibilidad" como "disponible".
Este comportamiento también se aplica al contexto de la selección de regalos, donde el campo `selectableGifts` también se ve afectado por este problema.


1. Si el artículo tiene un precio, pero no hay existencias, la simulación de cumplimiento devolverá `"disponibilidad": "nullPrice"` cuando no haya dirección;
2. 2. Si el artículo tiene precio, pero no hay existencias, la simulación de cumplimiento devolverá `"disponibilidad": "disponible"` cuando haya una dirección.


##

## Simulación



- Tener un producto sin stock ni precio en un vendedor
- Hacer una Simulación de Cumplimiento


##

## Workaround


N/A




