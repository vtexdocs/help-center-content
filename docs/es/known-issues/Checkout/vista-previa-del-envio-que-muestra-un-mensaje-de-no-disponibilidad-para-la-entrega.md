---
title: "Vista previa del envío que muestra un mensaje de no disponibilidad para la entrega"
id: 5rL396csjLiJhD8morzfeb
status: PUBLISHED
createdAt: 2025-01-29T14:24:05.390Z
updatedAt: 2025-01-29T14:24:06.123Z
publishedAt: 2025-01-29T14:24:06.123Z
firstPublishedAt: 2025-01-29T14:24:06.123Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: vista-previa-del-envio-que-muestra-un-mensaje-de-no-disponibilidad-para-la-entrega
locale: es
kiStatus: Backlog
internalReference: 1170877
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


La vista previa del envío en el carrito no tiene en cuenta el ANS seleccionado, a pesar de que la API de Checkout es correcta. Muestra el mensaje "Envío no disponible para su ubicación".

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/known-issues/Checkout/vista-previa-del-envio-que-muestra-un-mensaje-de-no-disponibilidad-para-la-entrega_1.png)

Este comportamiento fue notado en países particulares, como Argentina y Colombia, pero no se limita a esos 2.


##

## Simulación



- Añade un artículo al carrito;
- Escriba un código postal con el ANS disponible.



## Workaround


N/A - Al actualizar la página se mostrará el ANS.




