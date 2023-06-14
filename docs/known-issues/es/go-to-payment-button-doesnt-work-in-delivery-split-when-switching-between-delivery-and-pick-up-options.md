---
title: 'El botón "Ir al pago" no funciona en la división de entrega cuando se cambia entre las opciones de Entrega y Recogida.'
id: 4VDxpsWl6N0SjriaqUtXG9
status: PUBLISHED
createdAt: 2023-02-17T18:03:49.526Z
updatedAt: 2023-02-17T18:03:49.948Z
publishedAt: 2023-02-17T18:03:49.948Z
firstPublishedAt: 2023-02-17T18:03:49.948Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: el-boton-ir-al-pago-no-funciona-en-la-division-de-entrega-cuando-se-cambia-entre-las-opciones-de-entrega-y-recogida
kiStatus: Backlog
internalReference: 756587
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


En un carrito con al menos 2 productos en el que hay una división de entrega en la que uno de los artículos está disponible para recogida y el otro sólo para entrega programada, la interfaz de usuario no permitirá ir al paso de pago cuando cambie entre las opciones de recogida y entrega si el primer artículo del carrito es el que tiene entrega programada.



## Simulación



- Tenga al menos 2 artículos en el carrito donde uno de ellos sea entrega programada y el otro, recogida;
- Asegúrese de que el artículo de entrega programada es el primero de la cesta.
- Seleccione la fecha de entrega programada para cada artículo;
- Vaya a la opción de recogida;
- Vuelva a la opción de entrega (la fecha ya estará rellenada);
- Intente hacer clic en el botón "Ir al pago", no podrá.



## Workaround


Seleccione de nuevo las fechas previstas para los artículos.




