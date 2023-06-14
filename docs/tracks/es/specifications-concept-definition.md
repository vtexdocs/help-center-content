---
title: 'Especificaciones de producto e de SKU'
id: 2NQoBv8m4Yz3oQaLgDRagP
status: PUBLISHED
createdAt: 2019-06-11T12:52:45.235Z
updatedAt: 2022-07-06T17:40:57.274Z
publishedAt: 2022-07-06T17:40:57.274Z
firstPublishedAt: 2019-06-25T15:32:42.804Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slug: especificaciones-definicion-de-concepto
trackId: 5AF0XfnjfWeopIFBgs3LIQ
trackSlugES: catalogo-101
---

Las especificaciones son propiedades adicionales que se pueden registrar en los productos o SKUs de su tienda. En VTEX, estas especificaciones se registran en la pestaña **Categorías** y se denominan **Campo**.

<div class="alert alert-warning">
<p>En VTEX, las especificaciones siguen una lógica de "herencia", es decir, cuando se crea una especificación en un nivel de categoría superior, la especificación se presentará en todos los niveles de categoría inferiores. Por lo tanto, si es necesario crear una especificación de producto o SKU que se aplique a una sola categoría, debe crearse en ese nivel de categoría.</p>
</div>

## Especificación de Producto

La especificación de producto se utiliza generalmente para crear filtros de navegación en el sitio web o para exhibir información adicional en la pantalla del producto.  

En una tienda del sector moda, podría crear una especificación de producto para informar a su cliente cuál es el **tejido** de un ítem vendido en su tienda.

Esta información podría exhibirse como un filtro en una barra lateral o como un texto informativo dentro de la página del producto.

Las especificaciones de producto pueden recibir datos como strings y números, pudiendo ser consumidas por las APIs de VTEX para ser utilizadas en la personalización del front-end o en el envío de informaciones para integraciones externas.

Para entender el paso a paso completo para la creación de especificaciones de productos, consulte el artículo [Registrar especificaciones o campos de producto
](https://help.vtex.com/es/tutorial/registrar-especificaciones-o-campos-de-producto--tutorials_106).

## Especificación de SKU

La especificación de SKU se utiliza para crear filtros de navegación en el sitio web y para diferenciar los SKUs dentro de la página de producto.

En una tienda de camisas, podría crear una especificación de SKU para diferenciar sus productos por tamaño, por ejemplo.

Las especificaciones de SKU tendrían los valores **PP, P, M, G y GG**. Estas podrían utilizarse como filtro de navegación del sitio web. Además, las especificaciones funcionarían como selectores de SKU en la página del producto.

Para entender el paso a paso completo para la creación de especificaciones de productos, consulte el artículo [Registrar especificaciones o campos de SKU
](https://help.vtex.com/es/tutorial/registrar-especificaciones-o-campos-de-sku--tutorials_119).

<div class="alert alert-warning">
En VTEX, las especificaciones de SKU son campos obligatorios para concluir el registro de un SKU. Esto significa que, si se crea una nueva especificación dentro de una categoría, todos los SKUs dentro de esta categoría necesitan tener registrada esta nueva especificación. Así, todos estos SKUs estarán inactivos hasta que el registro de esta nueva especificación se haga en los SKUs de la categoría en cuestión.
</div>
