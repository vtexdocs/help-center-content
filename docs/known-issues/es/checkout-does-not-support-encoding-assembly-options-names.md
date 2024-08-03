---
title: 'Checkout no admite la codificación de nombres de opciones de montaje'
id: 29YnOA15HDzJSRwiOLLNfR
status: PUBLISHED
createdAt: 2024-05-06T19:01:35.962Z
updatedAt: 2024-05-06T19:01:36.828Z
publishedAt: 2024-05-06T19:01:36.828Z
firstPublishedAt: 2024-05-06T19:01:36.828Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: checkout-no-admite-la-codificacion-de-nombres-de-opciones-de-montaje
locale: es
kiStatus: Backlog
internalReference: 378842
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Los nombres de las opciones de ensamblaje se utilizan en la ruta API. Por ello, es necesario soportar la codificación de estos nombres para no crear problemas en la URL con caracteres especiales, como "/". Al añadir una opción de montaje con "/" en el carrito, simplemente no se añade y tampoco se notifica al usuario.


##

## Simulación



- Añada una "/" en el nombre de la opción de montaje;
- Intente añadir un producto con la opción de montaje;
- El artículo se añadirá al carrito sin la opción de montaje.



## Workaround


Elimine "/" del nombre de la opción de montaje.



