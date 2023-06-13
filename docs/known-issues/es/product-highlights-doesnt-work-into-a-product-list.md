---
title: Los productos destacados no funcionan en una lista de productos
id: 7lh3YMj55vQvs3EEQFUas1
status: PUBLISHED
createdAt: 2022-03-21T17:34:16.526Z
updatedAt: 2022-11-25T21:58:31.156Z
publishedAt: 2022-11-25T21:58:31.156Z
firstPublishedAt: 2022-03-21T17:34:17.170Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slug: los-productos-destacados-no-funcionan-en-una-lista-de-productos
kiStatus: Backlog
internalReference: 546844
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cuando hay una promoción con el resaltado activado y el producto, que está incluido en esta promoción, está dentro de una lista, como una estantería, no se muestra la insignia que informa de la promoción.

Componente de resaltado del producto: https://developers.vtex.com/vtex-developer-docs/docs/vtex-product-highlights



## Simulación


Cree una promoción con características e inserte un producto, incluido en la promoción, en un contexto de lista dentro de una página.



## Workaround


Cree una colección con el nombre de la promoción y active la bandera Añadir etiqueta de colección;
Añade el Producto Destacado en el contexto de la lista con el tipo: colección;

Creación de colecciones: https://help.vtex.com/tutorial/creating-collections-beta--yJBHqNMViOAnnnq4fyOye

