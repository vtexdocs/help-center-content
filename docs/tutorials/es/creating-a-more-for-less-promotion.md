---
title: 'Crear promoción Más por Menos'
id: tutorials_325
status: PUBLISHED
createdAt: 2017-04-27T22:08:17.186Z
updatedAt: 2023-03-31T19:57:42.646Z
publishedAt: 2023-03-31T19:57:42.646Z
firstPublishedAt: 2017-04-27T23:03:15.551Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slug: mas-por-menos
legacySlug: mas-por-menos
subcategory: 1yTYB5p4b6iwMsUg8uieyq
---

La promoción Más por Menos se utiliza para conceder un descuento cuando el cliente añade varias unidades del mismo producto al carrito. Un ejemplo clásico de este tipo de promoción sería «Lleve 3, pague 2».

En este artículo, detallamos los campos que debe rellenar durante los pasos de configuración de una promoción **Más por Menos**, según se describen a continuación.

1. [¿Cuáles son los datos generales de la promoción?](#1-cuales-son-los-datos-generales-de-la-promocion)
    - [Restringir esta promoción a los productos de los sellers](#restringir-esta-promocion-a-los-productos-de-los-sellers)
    - [Política comercial](#politica-comercial)
2. [Más por menos](#2-mas-por-menos)
3. [¿Cuáles son las condiciones para que la promoción sea válida?](#3-cuales-son-las-condiciones-para-que-la-promocion-sea-valida)
4. [Restricciones y limitaciones de uso](#4-restricciones-y-limitaciones-de-uso)

Para entender cómo funciona la implementación de las promociones, lea nuestro artículo [Ejemplos de promociones](https://help.vtex.com/es/tutorial/ejemplos-de-promociones--5A8UTc7knvAscxo7e7rMFD).

## Crear la promoción

1. En el Admin VTEX, accede a *Promociones > Promociones*, o escribe *Promociones* en la barra de búsqueda en la parte superior de la página.
2. Haga clic en el botón `Crear promoción`.
3. Seleccione la opción **Más por Menos**.
4. Rellene los campos de la promoción.
5. Haga clic en `Guardar`.

## 1. ¿Cuáles son los datos generales de la promoción?

- **Nombre:** es el nombre de la promoción. Campo obligatorio.
- **Status:** define si la promoción está activa o inactiva. Campo obligatorio.
- **Descripción:** es la descripción interna de la promoción. Este campo se utiliza para la comunicación interna de su tienda, para que quede claro si la promoción se debe a alguna campaña o liquidación de stock.
- **Validez:** es la fecha y hora de inicio y fin de la promoción. Se puede utilizar una fecha y hora futuras para que la promoción comience a aplicarse en el sitio web. Si se configura de este modo, la promoción tendrá el status de programada hasta la fecha y hora establecidas. Mientras esté en vigor, la promoción tendrá el status de activa, y al final de la fecha y hora establecidas el status cambiará a inactiva automáticamente. Campo obligatorio.
- **Utilizar la configuración de recurrencia:** al seleccionar esta casilla, se mostrarán otros campos para configurar los días de la semana y las horas del día en que se aplicará la promoción. Si desea que la promoción se aplique en cualquier día de la semana, no seleccione esta opción.
- **Destaque en los productos:** inserta una bandera con el nombre de la promoción, utilizada en la vitrina y en la página del producto. Esta bandera solo se insertará si se utiliza el control de visualización de promociones correcto en la plantilla: `<vtex.cmc:discountHightLight/>`. Campo obligatorio.

### Restringir esta promoción a los productos de los sellers

En esta sección puede definir en qué _sellers_ se aplicará la promoción. Puede determinar qué _sellers_ se incluirán o excluirán del descuento. 

- **Es igual a:** seleccione los nombres de los _sellers_ deseados para incluirlos.
- **Diferente de:** seleccione los nombres de los _sellers_ deseados para excluirlos.

Para que la promoción sea válida para todos los _sellers_, deje la selección sin marcar.

<div class = "alert alert-warning">
  <p>No es posible seleccionar directamente un <i>seller white label</i>. Para incluir a un <i>seller white label</i> en la promoción, tiene dos opciones:</p><ol>1. Restringir los <i>sellers</i> a la tienda principal. Esta restricción agrega todos los <i>sellers white label</i> de su tienda a la promoción.</ol><ol>2. Dejar la selección sin marcar para incluir a todos los <i>sellers</i>. Aquí, todos los tipos de <i>sellers, white label</i> o no, se agregarán a la promoción.</ol>
</div>

### Política comercial

Esta sección establece las políticas comerciales válidas para la promoción. Puede incluir o excluir las políticas comerciales del descuento.

- **Es igual a:** seleccione las políticas comerciales deseadas para incluirlas.
- **Diferente de:** seleccione las políticas comerciales deseadas para excluirlas.
- **Proporcionado por mí (Mi tienda):** selección de las políticas comerciales para productos de su tienda. Puede seleccionar más de una política comercial.
- **Entregado por mí (Tienda de otros):** selección de las políticas comerciales para sus productos que están en las tiendas de otros. Puede seleccionar más de una política comercial.

Para que la promoción sea válida para todas las políticas comerciales, deje la selección sin marcar.

## 2. Más por Menos

En esta sección se definen los productos, la cantidad y el descuento que se verán afectados por la promoción.

- **El cliente compra** `cantidad` **de los siguientes productos:** cantidad de unidades del mismo producto que se deben introducir en el carrito para que se aplique la promoción. Campo obligatorio.
- - **SKU:** los nombres o ID de los SKU a los que se aplicará el descuento. Puede importar una lista de SKU haciendo clic en el botón `Seleccione un archivo .txt`. El archivo de texto (.txt) debe tener cada ID de SKU en una línea diferente. También puede descargar la lista de SKU añadida al campo haciendo clic en el botón `Descargar lista de SKU`.
- **Colecciones:** selección de las colecciones que se incluirán en la promoción. La promoción solo se aplicará a los productos que figuren en las colecciones registradas en este campo. Para ello, introduzca el nombre de la colección de productos para la que desea ofrecer este tipo de descuento. Es posible seleccionar más de una colección.

<div class = "alert alert-info">
  <p>Si no se especifican los productos por colección o SKU, la plataforma no permitirá la creación de la promoción.</p>
</div>

- **Y lleva** `cantidad` **de estos productos:** la cantidad de unidades del producto que recibirá el descuento configurado. Campo obligatorio.
   - **Con un descuento de:** el cliente se llevará la cantidad seleccionada de productos con un descuento porcentual definido en el campo. 
   - **Con un precio máximo por ítem de:** el cliente se llevará la cantidad seleccionada de productos con un precio máximo por ítem definido en el campo. 

|![Leve mais por menos 1 - ES](//images.contentful.com/alneenqid6w5/4JHVAhStNu1aNdMqkS2Ca/7c11d9dbf29b90cf4071b8c741f99a1c/image.png)|
|:--:|
| _Ejemplo de promoción «Lleve 3, pague 2»_|

### Configuración avanzada
En esta sección puede especificar la aplicación del descuento.

#### El descuento debe aplicarse

- **Considerando:** 
  - **Cualquier producto:** el descuento se aplicará a los productos de la colección o de la lista de SKU, sin que el carrito tenga necesariamente la cantidad previamente registrada. Así, se considera la suma de las unidades de estos productos.
  - **Solo productos iguales:** el descuento solo se aplicará al SKU. Para que la aplicación sea válida, es necesario tener la cantidad mínima previamente registrada. 

- **A los productos de:**
  - **Precio más bajo:** el descuento se aplicará a los ítems más baratos de la promoción.
  - **Precio más alto:** el descuento se aplicará a los ítems más caros de la promoción.

![Leve mais por menos 2 - ES](//images.contentful.com/alneenqid6w5/71NtRCWE7NxOCxxkUSS1i5/84c1592933571b53f52c84317fa54fa9/image.png)

#### ¿Cómo debe distribuirse el descuento?

- **Solo entre los** `Cantidad`** productos que reciben el descuento:** el descuento se aplicará en su totalidad a la cantidad de productos seleccionada.
- **Proporcionalmente entre los** `Cantidad` **productos:** el descuento se distribuirá por igual entre la cantidad de productos seleccionada.

## 3. ¿Cuáles son las condiciones para que la promoción sea válida?

- **Valor mínimo y máximo del pedido:** la promoción se aplicará teniendo en cuenta el valor bruto del carrito, sin considerar otras promociones o costos de envío.
- **Los precios «de» y «por» son iguales o diferentes**: Solo se puede seleccionar una opción. Se refiere a los precios de registro del producto.
- **Restricción de la promoción por BIN:** el descuento se concederá a los usuarios que paguen con tarjetas cuyo BIN esté entre los números introducidos en este campo.
- **Clúster de clientes:** el descuento se concederá si el cliente está registrado en el clúster seleccionado. El nombre del clúster debe coincidir exactamente con el registrado en el Master Data. Cualquier error ortográfico impedirá que la configuración funcione correctamente.
- **Utm_source:** el descuento se concederá si la navegación utiliza un parámetro utm_source correspondiente a cualquiera de los valores registrados. El cliente solo puede introducir un utm_source en el _checkout_.
- **Utm_campaign:** el descuento se concederá si la navegación utiliza un parámetro utm_campaign con el valor registrado.
- **Crear cupón a partir de las UTM arriba:** crea un cupón a partir de las UTM registradas para que el cliente tenga acceso a esta promoción solo con el código del cupón.
- **Medio de pago:** el descuento se concederá si el medio de pago seleccionado por el cliente es el mismo que el registrado en la promoción. Este descuento sólo se aplicará al finalizar la compra, cuando el cliente seleccione el mismo medio de pago que el registrado.

  <div class = "alert alert-info">
  <p> Por defecto, puede registrar hasta 20 medios de pago por promoción. Además, existe la posibilidad de personalización para incluir hasta 100 medios de pago. Si necesita utilizar más de 20, póngase en contacto con <a href="https://support.vtex.com/hc/es-419/requests">nuestro equipo de soporte</a>.</p>
 </div>

## 4. Restricciones y limitaciones de uso

- **Cuántas veces se aplicará esta promoción en su tienda:** limita la cantidad de veces que se aplicará la promoción. Al deseleccionar la opción **ilimitado**, se habilita un campo para registrar la cantidad de veces que se puede aplicar la promoción. Si la promoción ya ha sido creada, esta condición sólo se aplicará a partir del día en que la configure, sin afectar a los pedidos realizados anteriormente.
- **Cuántas veces por cliente se aplicará esta promoción en su tienda:** determina el número máximo de veces que cada cliente puede utilizar la promoción. Si el campo anterior también está seleccionado, tendrá una prioridad de aplicación mayor que éste.
- **Definir la cantidad máxima de ítems afectados por carrito**\: define cuántos ítems del carrito serán afectados por la promoción. Lea [este artículo](https://help.vtex.com/es/tracks/promociones--6asfF1vFYiZgTQtOzwJchR/jOu9b69mKbrTDfSJYAawy#limite-de-items-con-promocion-en-el-carrito) para saber cómo configurar el campo.
- **Permitir la acumulación de promociones:** permite que más de una promoción se aplique al mismo tiempo, independientemente del tipo de descuento. Sepa más sobre [cómo compiten las promociones](https://help.vtex.com/es/tutorial/entendiendo-la-competencia-de-las-promociones-2--tutorials_2270).
- **Permitir acumular con precios manuales:** permite aplicar la promoción a los productos cuyos precios fueron introducidos manualmente por el agente de televentas. Para habilitar la funcionalidad de precios manuales, utilice el endpoint [Update orderForm configuration](https://developers.vtex.com/reference/configuration#updateorderformconfiguration).
