---
title: El campo "referencia" siempre se establece como null
id: 6Tq4zip0lfUm7vVJdwfZWx
createdAt: 2023-04-26T22:31:38.892Z
updatedAt: 2023-05-08T18:19:35.696Z
publishedAt: 2023-05-08T18:19:35.696Z
firstPublishedAt: 2023-04-26T22:31:39.458Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: el-campo-referencia-siempre-se-establece-como-null
status: Backlog
internalReference: 797989
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


El campo `reference` de la dirección del punto de recogida siempre se establece como nulo aunque esté registrado en la API del punto de recogida.


##

## Simulación



- Registre un punto de recogida a través de la API, incluido el campo "dirección.referencia";
- Añade un artículo al carrito;
- Realizar un Pedido Get y comprobar el campo `pickupPoints.reference`, es nulo.



## Workaround


N/A




