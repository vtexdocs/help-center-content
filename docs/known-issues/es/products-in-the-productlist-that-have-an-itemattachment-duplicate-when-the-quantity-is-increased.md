---
title: 'Los productos de la "lista de productos" que tienen un "itemAttachment" se duplican cuando se aumenta la cantidad'
id: 4QybxJRoj7wLNvN7NG2FLA
status: PUBLISHED
createdAt: 2022-01-24T21:19:51.135Z
updatedAt: 2022-11-25T22:13:41.772Z
publishedAt: 2022-11-25T22:13:41.772Z
firstPublishedAt: 2022-06-29T13:13:18.202Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slug: los-productos-de-la-lista-de-productos-que-tienen-un-itemattachment-se-duplican-cuando-se-aumenta-la-cantidad
locale: es
kiStatus: Backlog
internalReference: 337069
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Si una tienda utiliza el componente de lista de productos de Store Framework, utilizado en el minicart, los artículos del carrito pueden duplicarse al aumentar la cantidad de un artículo que tiene un adjunto (itemAttachment).

Esto se debe a que el comportamiento predeterminado noSplitItem de la solicitud de la API que actualiza los artículos del carrito es falso.



## Simulación



1. En su tienda, añada al carrito un artículo que tenga la opción de adjuntarlo;
2. Incluya un archivo adjunto al artículo añadido al carrito;
3. Aumente la cantidad de este artículo con la solicitud de actualización del artículo del carrito enviando el siguiente cuerpo:

    { "orderItems": [{ "índice": 0, "cantidad": 2 }]}

4. Observe que la API devuelve la lista de artículos con el producto duplicado, en lugar de aumentar la cantidad.



## Workaround


Actualmente, no hay ninguna solución.

