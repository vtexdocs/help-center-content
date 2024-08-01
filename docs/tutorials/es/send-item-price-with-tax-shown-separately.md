---
title: 'Enviar al Gateway o al ERP el precio del item ya con el impuesto separado'
id: 77O1rBSLHqW8eWWsE6IEii
status: PUBLISHED
createdAt: 2017-08-14T15:30:39.027Z
updatedAt: 2024-04-17T14:38:57.929Z
publishedAt: 2024-04-17T14:38:57.929Z
firstPublishedAt: 2017-08-16T17:43:33.301Z
contentType: tutorial
productTeam: Others
author: 5V92cmF9jG8KG600EwUgEg
slug: como-destacar-el-impuesto-en-vtex
locale: es
legacySlug: como-destacar-el-impuesto-en-vtex
subcategory: 18Gsips3u48UYCu0Ku2sWm
---

Muchas veces es necesario enviar al Gateway o a tu ERP el precio del item ya con el impuesto desclosado, o sea, separado al precio del item.

Para eso usted puede utlizar la configuración de impuestos en el [__Pricing__](/es/tutorial/creando-la-tasaimpuesto).

En este artículo vamos a mostrar como el sistema funciona para estos casos.

**Escenario 1**: Mi ERP envía el precio ya con IVA a VTEX, entonces no necesito hacer el cálculo.

1. Página de Categoría![CATEGORIASINIVA](//images.ctfassets.net/alneenqid6w5/5yDcEKh4VGYUuIu0W82A4o/15b1c183819fb83926b1f4dd88d9aace/1_CAT_E.png)
2. Página de Producto![PRODUCTOSINIVA](//images.ctfassets.net/alneenqid6w5/68zLscaDssq4WiAqYGkusc/1e0ec4b93ad2c7ff959094c1fef534fe/2_PROD_E.png)
3. Carrito![CARRITOSINIVA](//images.ctfassets.net/alneenqid6w5/3khmyZuLjWycCs6eSgUmci/0f466b0981d5f982db6ee79ed9a1f2a0/3_CART_E.png)
4. Checkout![CHECKOUTSINIVA](//images.ctfassets.net/alneenqid6w5/6CAjPrEJG0Gm2oGwoekYW4/a5281e57a934b1845357a2af9725e48c/4_CHECK_E.png)

**Escenario 2**: Mi ERP envía el precio *sin* IVA a VTEX.

Para indicar en las vitrinas el precio sumando las tasas aplicadas, utilice el atributo `$product.BestPricePlusTax`.

O entonces para crear un JS y sumar el valor del impuesto en las vitrinas, también si puede utilizar el control `$product.Tax` ( El indica las tasas registradas para el producto).

[Vea la documentación sobre controles aquí](https://developers.vtex.com/docs/guides/shelf-template-controls)

__Atención__: En la pagina de producto es necesario poner un JavaScript para hacer la suma del valor.

1. Página de Categoría![CATEGORIASINIVA](//images.ctfassets.net/alneenqid6w5/5yDcEKh4VGYUuIu0W82A4o/15b1c183819fb83926b1f4dd88d9aace/1_CAT_E.png)
2. Página de Producto![PRODUCTOCONIVA](//images.ctfassets.net/alneenqid6w5/68zLscaDssq4WiAqYGkusc/1e0ec4b93ad2c7ff959094c1fef534fe/2_PROD_E.png)
3. Carrito![CARRITOCONIVA](//images.ctfassets.net/alneenqid6w5/2Vqy71JAUMEKKMi6agQA6G/182ba9783f0a47e07e0ce9c91c7dec50/3A_CART_E.png)
4. Checkout![CHECKOUTCONIVA](//images.ctfassets.net/alneenqid6w5/6rsFbUYg4Ee0sKIyai6Ooy/199adee53185253d4248d8a279fbbbf9/4A_CHECK_E.png)
