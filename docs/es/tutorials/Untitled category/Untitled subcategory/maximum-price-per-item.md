---
title: 'Crear promoción Precio máximo por artículo'
id: tutorials_3221
status: ARCHIVED
createdAt: 2017-04-27T21:52:05.359Z
updatedAt: 2019-12-31T15:21:04.382Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:11:14.883Z
contentType: tutorial
productTeam: Others
author: authors_24
slug: precio-maximo-por-articulo
locale: es
legacySlug: precio-maximo-por-articulo
subcategoryId: unknown-subcategory
---

La promoción __Precio máximo por Artículo__ se utiliza para definir un precio máximo para un producto o conjunto de productos.

Es posible crear hasta __10 promociones__ de este tipo, con un __límite de 100 SKUs__ en cada una de ellas, donde cada SKU tendrá su precio máximo individual y exclusivo.

Por tratarse de una promoción, los precios catastrados como máximos no podrán ser mayores que el precio del producto.

>⚠️ **Atención:** Para que la promoción Precio máximo por Artículo funcione es **obligatorio elegir un medio de pago**.

## Datos generales de la promoción

- __Nombre__: Nombre de la promoción.
- __Status__: Activa o inactiva la promoción.
- __Descripción__: Descripción interna de la promoción. El objetivo de este campo es que sea usado para comunicación interna en su tienda, a fin de dejar claro si la promoción es debido a alguna campaña, por ejemplo.
- __Validez__: Fecha y hora de inicio y de fin de la promoción. Se puede utilizar una fecha y/o horario futuros para que la promoción comience a aplicarse en el sitio. Si se configura de esta forma, la promoción tendrá el status programado hasta que se alcance la fecha y hora. Mientras la promoción es válida, tendrá el status activo. Al final de la fecha y hora definidas, el status se cambiará a inactivo automáticamente. Es importante resaltar que el sistema utiliza como referencia la fecha y hora del usuario que realizó la programación.
- __Especifique los días de la semana para la activación__: Esta opción es del tipo casilla de verificación. Cuando está marcada, se disponen siete otras casillas de selección, para que se seleccionen los días de la semana en que se aplicará la promoción. Si desea que la promoción se aplique en cualquier día de la semana, no seleccione esta opción.
- __Apareció en el producto:__: Inserta una flag con el nombre de la promoción. Utilizado en la vitrina y en la página de producto. Esta flag sólo se inserta si se utiliza el control `<vtex.cmc:discountHightLight/>` en el template. Este control muestra la flag de promoción en la página deseada.
- __Restringir este beneficio a los productos de estos Sellers__: En el lado derecho de la pantalla, llene el nombre de los sellers cuyos productos deben recibir el descuento. Esta opción permite condicionar un descuento diferente para cada seller.
- __Política Comercial__: Seleccione las políticas comerciales que ofrecerán el descuento. Usted puede ofrecer descuentos para las políticas comerciales donde [su tienda es el marketplace](/es/faq/que-es-un-marketplace) (*Proporcionado por mí (mi tienda)*) o el [seller](/es/faq/que-es-un-seller) (*Entregado por mí (Tiendas de otros)*).

## Precio máximo por artículo

- __Item:__ En este campo se debe insertar el nombre o el ID del SKU que desea incluir en la promoción.
- __Precio:__ En este campo se debe definir el precio máximo por el que se vendrá el producto. Sólo se puede definir el precio máximo de un artículo a la vez. Para añadir productos a la promoción, haga clic en el botón __+__.
- __Medio de pago__: Seleccione los medios de pago deseados para activar la promoción.

>ℹ️ Es posible importar una lista de SKUs, que debe guardarse en un archivo .xls, con cada ID en una línea diferente, seguido del precio máximo correspondiente. Para ver una plantilla, haga clic en el enlace **Descarga ejemplo de hoja de cálculo**.

## Condiciones para la promoción ser válida

- __Restricción de Promoción por BIN__: Rellene con el número del BIN deseado y haga clic en el botón __+__.
- __Afiliados__: La promoción se aplicará a los afiliados rellenados en este campo. Este filtro sólo funciona cuando la opción *Entregado por mí (Tiendas de otros)* está activa en la sección __Política Comercial__.
- __Cluster de clientes__: Rellene con el ID de un [clúster de clientes creado en el Master Data](/es/faq/como-crear-un-cluster-de-cliente).
- __Número máximo de cuotas__: Si lo desea, puede definir un número máximo de cuotas de pago como condición para que la promoción sea válida. Si desea que sea válida para cualquier número de parcelas, basta dejar marcada la casilla de verificación __ilimitado__.
- __Utm\_source__: El descuento se concederá si la navegación se realiza con una utm\_source con el valor registrado.
- __Utm\_campaign__: El descuento se concederá si la navegación se realiza con una utm\_campaign con el valor registrado.

## Restricciones y limitaciones de uso

- __Cuántas veces se aplicará esta promoción a su tienda__: Rellene con el valor máximo deseado o haga clic en *ilimitado*.
- __Cuántas veces se aplicará esta promoción a su tienda por cliente__: Rellene con el valor máximo deseado o haga clic en *ilimitado*.
- **Permite que se acumule con precios manuales:** Permite que la promoción se aplique a productos cuyos precios fueron introducidos manualmente por el televentas. Para la correcta usabilidad de esa *flag*, es necesaria una configuración previa para permitir la inserción de los precios manuales.
