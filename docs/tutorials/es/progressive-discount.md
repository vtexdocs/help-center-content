---
title: Cómo el descuento progresivo funciona
id: tutorials_324
status: PUBLISHED
createdAt: 2017-04-27T22:08:26.447Z
updatedAt: 2019-12-31T15:22:29.353Z
publishedAt: 2019-12-31T15:22:29.353Z
firstPublishedAt: 2017-04-27T23:03:15.195Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slug: descuento-progresivo
legacySlug: descuento-progresivo
subcategory: 1yTYB5p4b6iwMsUg8uieyq
---

Este tipo de promoción se utiliza para brindar un descuento a una cierta cantidad de productos añadidos al carrito. Por ejemplo, "Compre 5 kg  y obtenga un 5% de descuento, añada otros 5 kg y reciba un 10% más".

## Campos

### ¿Cuáles son los datos generales de esta promoción?

- **Nombre:** Nombre de la promoción
- **Status:** Activa o desactiva la promoción
- **Descripción:** Descripción interna de la promoción. Este campo se utiliza para la comunicación interna en su tienda, a fin de aclarar si la promoción proviene de alguna campaña, liquidación de existencias, etc.
- **Vigencia:** Fecha y hora de inicio y fin de la promoción. Se puede utilizar una fecha y / o hora futura para iniciar la promoción en el sitio web. Si se configura de esta manera, la promoción tendrá un estado programado hasta que llegue la fecha y hora establecidas. Siempre que la promoción sea válida, tendrá el estado habilitado y, al final de la fecha y hora establecidas, el estado cambiará automáticamente a deshabilitado.
- **Especifique días de la semana para la habilitación:** Esta opción se muestra como una casilla de verificación. Cuando se selecciona, proporciona otras siete casillas de verificación, que representan los días de la semana en que se puede ofrecer la promoción. Si desea que la promoción se ofrezca todos los días de la semana, no seleccione esta opción.
- **Descuento destacado:** Inserta una etiqueta con el nombre de la promoción. Se utiliza en la ventana y la página del producto. Este indicador sólo se insertará si utiliza el control de visualización correcto de la promoción en la plantilla. `<vtex.cmc:discountHightLight/>`
- **Seller:** Selecciona el seller que ofrecerá el descuento. Si tiene un multi-almacén, aparecerán todos los sellers registrados en su cuenta. Esta opción le permite asignar un descuento diferente para cada seller.

### Política Comercial

Selecciona las Políticas Comerciales que ofrecerán el descuento. Todas las políticas registradas en la sección de Políticas comerciales aparecerán en la lista. Esta opción le permite ofrecer diferentes descuentos para cada póliza.

### Descuento Progresivo

- **Colecciones:** Introduzca el nombre de las colecciones de productos que desea relacionar con este tipo de descuento. Es posible introducir más de uno. La promoción solo se aplicará a los productos que se encuentren en las colecciones registradas en este campo.
- **SKUs:** Introduzca el nombre o ID de los SKU´s a los que desea aplicar el descuento. Puede importar una lista de SKUs, que deben guardarse como un archivo de texto (.txt), con cada ID en una línea diferente. Obs.: Si los productos no son limitados por colección o SKU, la plataforma no permitirá la creación de la promoción.
- **Cantidad:** Cantidad de unidades para que la promoción sea aplicada. Este campo es obligatorio. Teniendo en cuenta el ejemplo al principio del artículo, aquí es donde debe registrar el número 5 (por 5 kg).
- **Descuento:** Descuento a ser aplicado si la cantidad requerida arriba es agregada al carrito.
- **Incluir botón "+":** Se utiliza para añadir más líneas a la progresión del descuento, pudiendo incluir un máximo de 10 líneas, con diferentes importes y descuentos. Teniendo en cuenta el ejemplo al principio del artículo, sería necesario incluir una línea más e introducir 10 (5kg +% kg) en el campo de cantidad y 15 (5% + 10%) en el campo de descuento.

### ¿Cuáles son las condiciones para que la promoción sea válida?

- **Utm_source:** El descuento se concederá si la navegación se realiza a través del utm_source que contiene el valor registrado.
- **Utm_campaign:** El descuento se concederá si la navegación se realiza con utm_campaign que contiene el valor registrado.

### Restricciones y limitaciones de uso

- **Sólo para los mismos artículos:** El descuento solo se aplicará por SKU, una vez que cada uno tenga una cantidad mínima registrada. Si no se marca esta opción, el descuento se aplicará a los productos de la colección o de la lista de SKU, sin necesidad de alcanzar el importe mínimo en el carrito registrado para cada uno de ellos, siendo considerado únicamente la suma de unidades de estos productos.
- **Permite que se acumule con precios manuales:** Permite que la promoción se aplique a productos cuyos precios fueron introducidos manualmente por el televentas. Para la correcta usabilidad de esa *flag*, es necesaria una configuración previa para permitir la inserción de los precios manuales.
