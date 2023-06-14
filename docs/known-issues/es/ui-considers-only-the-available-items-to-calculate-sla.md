---
title: 'La interfaz de usuario sólo tiene en cuenta los elementos disponibles para calcular el SLA'
id: 11gXg1N1Sul7EJUZACuQNW
status: PUBLISHED
createdAt: 2023-04-25T21:55:37.785Z
updatedAt: 2023-05-08T18:06:01.904Z
publishedAt: 2023-05-08T18:06:01.904Z
firstPublishedAt: 2023-04-25T21:55:38.201Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: la-interfaz-de-usuario-solo-tiene-en-cuenta-los-elementos-disponibles-para-calcular-el-sla
kiStatus: Backlog
internalReference: 797028
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Se pueden seleccionar diferentes marcas blancas de vendedor para cumplir con los productos cuando se utilizan diferentes direcciones para la entrega y la recogida. Cuando se selecciona la opción de recogida y al cambiar a entrega, la interfaz de usuario sólo tiene en cuenta los artículos disponibles para calcular el nuevo ANS de entrega, aunque los productos estén disponibles. El precio de entrega sólo tendrá en cuenta los artículos seleccionados disponibles para la recogida.


##

## Simulación



- Configure dos etiquetas blancas de vendedor para diferentes direcciones;
- Añadir productos disponibles para ambos vendedores;
- Añadir una dirección de entrega en el carrito;
- Cambiar a recogida y añadir una dirección diferente;
- Ir a la entrega y ver que el precio tendrá en cuenta sólo los artículos disponibles para la recogida.



## Workaround


N/A




