---
title: 'La interfaz de usuario muestra puntos de recogida duplicados cuando un artículo para entrega se encuentra entre artículos para recogida.'
id: lIP6kRDsi23lNQd7RzNfY
status: PUBLISHED
createdAt: 2023-09-25T13:50:27.481Z
updatedAt: 2023-10-18T14:36:11.434Z
publishedAt: 2023-10-18T14:36:11.434Z
firstPublishedAt: 2023-09-25T13:50:28.066Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: la-interfaz-de-usuario-muestra-puntos-de-recogida-duplicados-cuando-un-articulo-para-entrega-se-encuentra-entre-articulos-para-recogida
locale: es
kiStatus: Backlog
internalReference: 906549
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


En un carro con al menos tres productos, donde los pedidos de artículos son: 1º es para recogida, 2º es para entrega y 3º es para recogida, la IU mostrará el punto de recogida duplicado. Esto sucede porque la API agrupará el 1er artículo y el 3er artículo ya que es el mismo SLA.

Es posible ir al paso de pago y finalizar la compra.


##

## Simulación



- Añadir un artículo al carrito para su recogida;
- Añadir un artículo a la cesta para su entrega;
- Añadir otro artículo al carro para su recogida;
- En el paso de envío, la recogida se duplicará



## Workaround


N/A




