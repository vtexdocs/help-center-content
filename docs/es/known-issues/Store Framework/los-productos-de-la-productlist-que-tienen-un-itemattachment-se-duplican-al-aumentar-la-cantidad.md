---
title: "Los productos de la 'product-list' que tienen un 'itemAttachment' se duplican al aumentar la cantidad"
id: 4QybxJRoj7wLNvN7NG2FLA
status: PUBLISHED
createdAt: 2022-01-24T21:19:51.135Z
updatedAt: 2024-10-31T14:10:47.569Z
publishedAt: 2024-10-31T14:10:47.569Z
firstPublishedAt: 2022-06-29T13:13:18.202Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: los-productos-de-la-productlist-que-tienen-un-itemattachment-se-duplican-al-aumentar-la-cantidad
locale: es
kiStatus: Fixed
internalReference: 337069
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Si una tienda utiliza el componente product-list de Store Framework, utilizado en el minicart, los artículos del carrito pueden duplicarse al aumentar la cantidad de un artículo que tiene un adjunto (itemAttachment).

Esto se debe a que el comportamiento por defecto noSplitItem de la petición API que actualiza los artículos del carrito es falso.


##

## Simulación



1. En tu tienda, añade al carrito un artículo que tenga opción de fijación;
2. Incluye un archivo adjunto al artículo añadido al carrito;
3. Aumente la cantidad de este artículo con la solicitud de actualización del artículo del carrito enviando el siguiente cuerpo:
`{ "orderItems": [{ "index": 0, "quantity": 2 }] }`
4. Observe que la API devuelve la lista de artículos con el producto duplicado, en lugar de aumentar la cantidad.



## Workaround


Actualmente, no existe ninguna solución.





