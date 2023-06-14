---
title: 'Crear promoción Comprar Juntos'
id: tutorials_323
status: PUBLISHED
createdAt: 2017-04-27T22:08:34.791Z
updatedAt: 2019-12-31T15:24:16.500Z
publishedAt: 2019-12-31T15:24:16.500Z
firstPublishedAt: 2017-04-27T23:03:15.238Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slug: comprar-juntos-registro-de-promocion
legacySlug: comprar-juntos-registro-de-promocion
subcategory: 1yTYB5p4b6iwMsUg8uieyq
---

__Comprar Juntos__ es una promoción utilizada para conceder descuento para un conjunto de dos productos cuando se colocan al mismo tiempo en el carrito.

El descuento se puede aplicar en ambos productos. Hay también la opción de que el descuento se aplique sólo si se inserta en el carrito una determinada cantidad de uno de los productos.

Un ejemplo para ese tipo de promoción sería *"comprar un pantalón y ganar 10% en la compra de un cinturón"*. Otro ejemplo posible sería la promoción *"comprar un par de tenis + un par de calcetines y ganar un 15% de descuento"*.

## Datos generales de la promoción

- __Nombre__: Nombre de la promoción.
- __Status__: Activa o inactiva la promoción.
- __Descripción__: Descripción interna de la promoción. El objetivo de este campo es que sea usado para comunicación interna en su tienda, a fin de dejar claro si la promoción es debido a alguna campaña, por ejemplo.
- __Validez__: Fecha y hora de inicio y de fin de la promoción. Se puede utilizar una fecha y/o horario futuros para que la promoción comience a aplicarse en el sitio. Si se configura de esta forma, la promoción tendrá el status programado hasta que se alcance la fecha y hora. Mientras la promoción es válida, tendrá el status activo. Al final de la fecha y hora definidas, el status se cambiará a inactivo automáticamente. Es importante resaltar que el sistema utiliza como referencia la fecha y hora del usuario que realizó la programación.
- __Especifique los días de la semana para la activación__: Esta opción es del tipo casilla de verificación. Cuando está marcada, se disponen siete otras casillas de selección, para que se seleccionen los días de la semana en que se aplicará la promoción. Si desea que la promoción se aplique en cualquier día de la semana, no seleccione esta opción.
- __Apareció en el producto:__: Inserta una flag con el nombre de la promoción. Utilizado en la vitrina y en la página de producto. Esta flag sólo se inserta si se utiliza el control `<vtex.cmc:discountHightLight/>` en el template. Este control muestra la flag de promoción en la página deseada.
- __Restringir este beneficio a los productos de estos Sellers__: En el lado derecho de la pantalla, llene el nombre de los sellers cuyos productos deben recibir el descuento. Esta opción permite condicionar un descuento diferente para cada seller.
- __Política Comercial__: Seleccione las políticas comerciales que ofrecerán el descuento. Usted puede ofrecer descuentos para las políticas comerciales donde [su tienda es el marketplace](/es/faq/que-es-un-marketplace) (*Proporcionado por mí (mi tienda)*) o el [seller](/es/faq/que-es-un-seller) (*Entregado por mí (Tiendas de otros)*).

## Listas de artículos que desea combinar y sus descuentos

**Lista 1 de 2**

- __SKUs__: Introduzca aquí el nombre o ID de los SKUs que se incluirán en la primera lista. Considerando el ejemplo del inicio del artículo, en este se debería registrar el pantalón o el tenis. Otro ejemplo sería ofrecer una promoción con un producto de dos tamaños diferentes. Para ello, sería necesario insertar en la lista 1 el SKU de tamaño P y en la lista 2 el de tamaño G, por ejemplo. También es posible insertar manualmente cada SKU o importar una lista de SKUs. Una plantilla de ejemplo se puede exportar mediante el link __Download de la lista de SKUs__. Este campo es de relleno obligatorio.
- __Descuento__: Introduzca el descuento que se aplicará a los SKUs de la primera lista. Considerando el ejemplo del inicio del artículo, en este campo se debe registrar el valor del 15% de descuento a ser concedido al tenis. Este campo es de relleno obligatorio. Si su objetivo es aplicar el descuento solamente para la segunda lista, llene este campo con __0__.
- __Cantidad mínima de productos en el pedido__: Cantidad necesaria de SKUs que se incluirán en el carrito para que se aplique el descuento. Este campo es de relleno obligatorio, siendo necesario, como mínimo, una unidad.

**Lista 2 de 2**

- __SKUs__: Introduzca aquí el nombre o ID de los SKUs que se incluirán en la segunda lista. Considerando el ejemplo del inicio del artículo, en este campo se debería registrar el cinturón o los calcetines. Usted también puede insertar manualmente cada SKU o importar una lista de SKUs. La plantilla de ejemplo se puede exportar mediante el enlace __Download de la lista de SKUs__. Este campo es de relleno obligatorio. En la lista 1, como en la lista 2, el número máximo de SKUs aceptado es **100**._
- __Descuento__: el descuento que se aplicará a los SKUs de la segunda lista. Considerando el ejemplo del inicio del artículo, en este campo se debe registrar el valor del 10% de descuento a ser concedido al cinturón o el 15% de descuento para los calcetines. Si su objetivo es aplicar el descuento solamente para la primera lista, llene este campo con __0__.

## Condiciones para la promoción ser válida

- __Valor mínimo del pedido__: Seleccione un valor mínimo del pedido para que la promoción se active. Usted también puede especificar el total a considerar: *Artículos que son parte de la promoción*, * Artículos que no son parte de la promoción* o *Todos los artículos*.
- __Valor máximo del pedido__: Seleccione un valor máximo del pedido para que la promoción se active. Usted también puede especificar el total a considerar: *Artículos que son parte de la promoción*, * Artículos que no son parte de la promoción* o *Todos los artículos*.
- __Restricción de Promoción por BIN__: Rellene con el número del BIN deseado y haga clic en el botón __+__.
- __Cluster de clientes__: Rellene con el ID de un [clúster de clientes creado en el Master Data](/es/faq/como-crear-un-cluster-de-cliente).
- __Utm\_source:__ El descuento se concederá si la navegación se realiza con una utm\_source con el valor registrado aquí.
- __Utm\_campaign__: El descuento se concederá si la navegación se realiza con una utm\_campaign con el valor registrado aquí.

## Restricciones y limitaciones de uso

- __Cuántas veces se aplicará esta promoción a su tienda__: Rellene con el valor máximo deseado o haga clic en *ilimitado*.
- __Cuántas veces se aplicará esta promoción a su tienda por cliente__: Rellene con el valor máximo deseado o haga clic en *ilimitado*.
- __Permite que las promociones se acumulan__: Permite que más de una promoción con el mismo tipo sea concedida al mismo tiempo.
- **Permite que se acumule con precios manuales:** Permite que la promoción se aplique a productos cuyos precios fueron introducidos manualmente por el televentas. Para la correcta usabilidad de esa *flag*, es necesaria una configuración previa para permitir la inserción de los precios manuales.

## Sobre el funcionamiento de la promoción

- La promoción se aplicará a __todos__ los artículos de las listas si se cumple la condición de cantidad mínima de productos. Si el campo __cantidad mínima__ tiene valor igual a __1__, basta que __al menos un SKU de cada lista__ esté en el carrito para que la promoción sea aplicada.
- Si el cliente pone 2 unidades del mismo SKU, el descuento se aplicará sólo en 1 unidad si la cantidad mínima es __1__.
- Si el cliente pone 2 SKUs que están en la lista 2, el descuento se aplicará en sólo 1 SKU, siempre sobre el más barato (por ejemplo, si la cantidad mínima es 1).
- 3 artículos en la lista 1 y la cantidad mínima igual a 1: en este escenario, basta con que 1 producto de la lista se coloque en el carrito para validar el contexto de la promoción y aplicar el descuento en los artículos de la lista 2 (y/o de la lista 1, si hay descuento).
