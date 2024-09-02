---
title: 'No es posible añadir un artículo con accesorio a la cesta si ya hay otra unidad de este artículo sin accesorio en la cesta'
id: 3l41VmdtPCxUjYChuO7o9O
status: PUBLISHED
createdAt: 2021-09-15T15:24:52.309Z
updatedAt: 2024-02-02T15:01:32.297Z
publishedAt: 2024-02-02T15:01:32.297Z
firstPublishedAt: 2021-09-15T15:30:26.487Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: no-es-posible-anadir-un-articulo-con-accesorio-a-la-cesta-si-ya-hay-otra-unidad-de-este-articulo-sin-accesorio-en-la-cesta
locale: es
kiStatus: No Fix
internalReference: 412041
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Durante el proceso de compra, si el cliente añade un artículo que ya ha sido incluido en el carrito anteriormente y la nueva inclusión tiene opciones de montaje, el segundo artículo no se añade al carrito.

Por ejemplo, si durante el proceso de compra, el cliente añade un SKU al carrito y, a continuación, otra unidad del mismo SKU pero con garantía ampliada (mediante assemblyOptions), el último artículo añadido (el artículo con garantía ampliada) no estará disponible en el carrito.


##

## Simulación


Para realizar la simulación, asegúrese de que hay artículos con opciones de montaje en su tienda.


1. Acceda al almacén;
2. Añadir un producto al carrito;
3. Añadir de nuevo el producto e incluir una opción de montaje al artículo (una personalización o una ampliación de garantía, por ejemplo);
4. 4. Compruebe la cesta y verifique que no se ha añadido el artículo con la opción de montaje.



## Workaround


No hay ninguna solución disponible.





