---
title: 'Precio intercambiado si el mismo artículo está dos veces en la cesta y uno es de Opciones de montaje'
id: 6ASEyEYPt9wjj4eSzMqdc0
status: PUBLISHED
createdAt: 2024-07-24T14:51:12.922Z
updatedAt: 2024-07-24T14:51:13.713Z
publishedAt: 2024-07-24T14:51:13.713Z
firstPublishedAt: 2024-07-24T14:51:13.713Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: precio-intercambiado-si-el-mismo-articulo-esta-dos-veces-en-la-cesta-y-uno-es-de-opciones-de-montaje
locale: es
kiStatus: Backlog
internalReference: 1070336
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Si un artículo se añade al carrito como opción (también conocido como hijo) desde Opciones de montaje, y el mismo artículo se añade al carrito como artículo normal; los precios se mezclan, y cada uno se aplica al incorrecto.

Por ejemplo:

- Artículo como opción con un precio de 0;
- Artículo como normal con un precio de 100.
En el pedido, el artículo como opción tendrá el precio de 100 y el normal con el precio de 0.


##

## Simulación



- Añade un artículo con una opción de montaje al carrito, y asegúrate de que una de las opciones tiene una lista de precios diferente en la configuración;
- Añade el mismo artículo como opción.



## Workaround


N/A



