---
title: "La interfaz de usuario no muestra la selección de ventanas para los puntos de recogida cuando un artículo de un vendedor está entre artículos para recoger de otro vendedor."
id: 7uDtst6o01FV405luUQ3Ok
status: PUBLISHED
createdAt: 2024-08-07T18:26:30.702Z
updatedAt: 2024-08-07T18:26:31.693Z
publishedAt: 2024-08-07T18:26:31.693Z
firstPublishedAt: 2024-08-07T18:26:31.693Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: la-interfaz-de-usuario-no-muestra-la-seleccion-de-ventanas-para-los-puntos-de-recogida-cuando-un-articulo-de-un-vendedor-esta-entre-articulos-para-recoger-de-otro-vendedor
locale: es
kiStatus: Backlog
internalReference: 1077568
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


En un carro con al menos tres productos, donde los pedidos de artículos son: El 1º es para recogida 1, el 2º para recogida 2 (vendedor diferente), y el 3º es para recogida 1, la IU no permitirá una selección de ANS para el 2º artículo.

Es posible ir al paso de pago pero debido a la falta de un ANS seleccionado para el 2º artículo no es posible finalizar la compra.



## Simulación



- Añadir un artículo a la cesta para recoger del vendedor A;
- Añadir un artículo a la cesta para recoger del vendedor B;
- Añadir otro artículo a la cesta para recoger del vendedor A;
- En el paso de envío, no se mostrará la segunda ventana de selección de ANS.



## Workaround


Añadiendo primero el artículo del vendedor B en la cesta y luego añadiendo los itens del vendedor B se consigue que la selección de ANS sea posible al igual que la compra.





