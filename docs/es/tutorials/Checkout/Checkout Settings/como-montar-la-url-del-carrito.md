---
title: 'Cómo montar la URL del carrito'
id: u3Tj5wagnukYwG84IQU06
status: PUBLISHED
createdAt: 2017-10-02T17:14:38.584Z
updatedAt: 2019-12-31T15:19:22.357Z
publishedAt: 2019-12-31T15:19:22.357Z
firstPublishedAt: 2017-10-02T17:39:15.192Z
contentType: tutorial
productTeam: Shopping
author: 1nsS1IgG3WWQ4cA8e2qsw6
slugEN: how-to-assemble-the-cart-url
locale: es
legacySlug: como-montar-la-url-del-carrito
subcategoryId: 6XAvmMxp7yyY06ewYMuggs
---

En algunas situaciones, los clientes solicitan a la tienda el link con el carrito de la compra ya montado con todos los productos. Para montar la URL del carrito es necesario usar __/checkout/cart/add?__ al final de la URL predeterminada del sitio, seguida de estos parámetros:

- __Política Comercial:__ `sc={ID de la Política Comercial}`
- __SKU:__ `sku={ID del SKU}`
- __Cantidad:__ `qty={Cantidad del producto}`
- __Seller__: `seller={ID del Seller}`

Es importante destacar que sólo es necesario utilizar la política comercial una vez en la URL. Los otros tres parámetros (SKU, Cantidad y Seller) se deben repetir cada vez que se añade un producto en el carrito.

Al juntar cada uno de ellos en la URL, se deben separar por "&". Al final, la URL queda así:

`https://www.susitio.com.br/checkout/cart/add?sc={ID de la Política Comercial}&sku={ID del SKU}&qty={Cantidad}&seller={Id del Seller}`
 
Siguen dos ejemplos abajo:
- Con 1 producto en el carrito: `https://www.susitio.com.br/checkout/cart/add?sc=1&sku=22&qty=1&seller=1`
- Con 2 productos en el carrito: `https://www.susitio.com.br/checkout/cart/add?sc=1&sku=22&qty=1&seller=1&sku=73&qty=3&seller=1`
