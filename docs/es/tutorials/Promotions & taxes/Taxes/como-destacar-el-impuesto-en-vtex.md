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
slugEN: send-item-price-with-tax-shown-separately
locale: es
legacySlug: como-destacar-el-impuesto-en-vtex
subcategoryId: 18Gsips3u48UYCu0Ku2sWm
---

Muchas veces es necesario enviar al Gateway o a tu ERP el precio del item ya con el impuesto desclosado, o sea, separado al precio del item.

Para eso usted puede utlizar la configuración de impuestos en el [__Pricing__](/es/tutorial/creando-la-tasaimpuesto).

En este artículo vamos a mostrar como el sistema funciona para estos casos.

**Escenario 1**: Mi ERP envía el precio ya con IVA a VTEX, entonces no necesito hacer el cálculo.

1. Página de Categoría![CATEGORIASINIVA](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)
2. Página de Producto![PRODUCTOSINIVA](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_2.png)
3. Carrito![CARRITOSINIVA](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_3.png)
4. Checkout![CHECKOUTSINIVA](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_4.png)

**Escenario 2**: Mi ERP envía el precio *sin* IVA a VTEX.

Para indicar en las vitrinas el precio sumando las tasas aplicadas, utilice el atributo `$product.BestPricePlusTax`.

O entonces para crear un JS y sumar el valor del impuesto en las vitrinas, también si puede utilizar el control `$product.Tax` ( El indica las tasas registradas para el producto).

[Vea la documentación sobre controles aquí](https://developers.vtex.com/docs/guides/shelf-template-controls)

__Atención__: En la pagina de producto es necesario poner un JavaScript para hacer la suma del valor.

1. Página de Categoría![CATEGORIASINIVA](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_5.png)
2. Página de Producto![PRODUCTOCONIVA](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_6.png)
3. Carrito![CARRITOCONIVA](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_7.png)
4. Checkout![CHECKOUTCONIVA](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_8.png)
