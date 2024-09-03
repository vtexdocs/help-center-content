---
title: 'Cómo funciona la promoción Compre y gane'
id: tutorials_322
status: PUBLISHED
createdAt: 2017-04-27T22:08:41.148Z
updatedAt: 2024-02-19T11:48:37.254Z
publishedAt: 2024-02-19T11:48:37.254Z
firstPublishedAt: 2017-04-27T23:03:14.992Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slug: como-funciona-la-promocion-compre-y-gane
locale: es
legacySlug: como-funciona-la-promocion-compre-y-gane
subcategoryId: 1yTYB5p4b6iwMsUg8uieyq
---

La promoción Compra uno y lleva uno gratis se utiliza para ofrecer envío gratuito o un regalo si se compra un determinado producto. Por ejemplo, “compra un televisor y no pagues gastos de envío”, o “compra un videojuego y llévate un juego totalmente gratis”.

En este artículo detallaremos los pasos necesarios para configurar la promoción Compra uno y lleva uno gratis:

1. [Resumen de la promoción](#1-resumen-de-la-promocion)
    - [Restringir la promoción a los productos de los sellers](#restringir-la-promocion-a-los-productos-de-los-sellers)
    - [Política comercial](#politica-comercial)
2. [Compra uno y lleva uno gratis](#2-compra-uno-y-lleva-uno-gratis)
3. [Condiciones de la promoción](#3-condiciones-de-la-promocion)
4. [Restricciones y limitaciones de uso](#4-restricciones-y-limitaciones-de-uso)

# Crear la promoción

En el Admin VTEX, accede a Promociones > Promociones o ingresa Promociones en la barra de búsqueda en la parte superior de la página.

1. Haz clic en el botón `Crear promoción`.
2. Selecciona la opción **Compra uno y lleva uno gratis**.
3. Rellena los campos de la promoción.
4. Haz clic en `Guardar`.

# 1. Resumen de la promoción

En esta sección se proporciona información detallada sobre los datos generales de la promoción.

- **Nombre:** nombre de la promoción. Campo obligatorio.
- **Status:** botón que activa o desactiva la promoción.
- **Descripción:** este campo se utiliza para la comunicación interna de tu tienda, para dejar claro si la promoción se debe a alguna campaña o liquidación de stock, por ejemplo.
- **Fecha de vencimiento:** fecha y hora de inicio y fin de la promoción. Se puede seleccionar una fecha y hora futuras para que la promoción comience a aplicarse en el sitio web. Si se configura de esta forma, el status de la promoción se mostrará de las siguientes maneras:
    - Programada: antes de la fecha y hora de inicio seleccionadas.
    - Activa: durante el periodo programado de la promoción.
    - Completada: después de la fecha y hora de fin seleccionadas.
- **Utilizar configuración de recurrencia:**  seleccionando esta opción, puedes realizar ajustes de recurrencia, por ejemplo, día de la semana y horario.
- **Tipo y valor del descuento:** permite seleccionar una de las opciones siguientes.
1. **Precio máximo por ítem:** define el precio máximo para cada ítem de la compra.
2. **Envío gratis:** es el descuento total sobre el valor del envío.
3. **Regalo:** es el descuento total sobre el valor del producto definido como regalo. Seleccionando esta opción podrás indicar el SKU (por nombre o ID) que se considerará como regalo, elegir si debe activarse el [multiplicador de regalo](https://help.vtex.com/es/tutorial/o-que-significa-ativar-o-multiplicador-de-brinde-em-uma-promocao--1gydgkmjEWcoo2CskUwuYK) y la cantidad máxima de productos que se pueden utilizar como regalos en la promoción. Para más información sobre este tipo de descuento, consulta [Configurar una promoción Compra uno y lleva uno gratis para un SKU específico](https://help.vtex.com/es/tutorial/configurar-promocao-compre-e-ganhe-para-um-sku-especifico).
- **Información adicional (opcional):** permite incluir en la promoción información adicional que incluye un nombre y un valor.
- **Promoción resaltada:** al elegir esta opción, se crea una tag que destaca el nombre de la promoción. Se implementa en la vitrina y en la página de producto, siempre y cuando se utilice el control de visualización de promociones correcto en la plantilla. `<vtex.cmc:discountHightLight>`.

![Resumen de la promoción](https://images.ctfassets.net/alneenqid6w5/4s7Zxlvv0aIThx2WW2JMO3/e10d90b18e8ce27fda6345f72b86a802/Resumen_de_la_promocion.png)

## Restringir esta promoción a los productos de los sellers

En esta sección se pueden definir los sellers a los que se aplicará la promoción. Es decir, tienes la opción de decidir qué sellers se incluirán o excluirán del descuento.

- Igual a: selecciona los nombres de los sellers que deseas incluir.
- Diferentes de: selecciona los nombres de los sellers que deseas excluir.

Para que la promoción sea válida para todos los sellers, deja la selección sin marcar.

>⚠️ No es posible seleccionar directamente un <i>seller white label</i>. Para incluir a un <i>seller white label</i> en la promoción, tiene dos opciones:1. Restringir los <i>sellers</i> a la tienda principal. Esta restricción agrega todos los <i>sellers white label</i> de su tienda a la promoción.2. Dejar la selección sin marcar para incluir a todos los <i>sellers</i>. Aquí, todos los tipos de <i>sellers, white label</i> o no, se agregarán a la promoción.

![Restringir esta promoción a los productos de los sellers](https://images.ctfassets.net/alneenqid6w5/3Up0CJMzHHY9rZO0LLRXuw/2b00df355cb9670e4a5b799e5c9482e7/Restringir_esta_promoci_n_a_los_productos_de_los_sellers.png)

## Política comercial
Esta sección establece las políticas comerciales válidas para la promoción. Puedes incluir o excluir políticas comerciales del descuento.

- **Igual a:** selecciona las políticas comerciales que deseas incluir.
- **Diferentes de:** selecciona las políticas comerciales que deseas excluir.
- **Proporcionado por mí (Mi tienda):** selección de las políticas comerciales para productos de tu tienda. Puedes seleccionar más de una política comercial.
- **Entregado por mí (Otras tiendas):** selección de las políticas comerciales bajo las cuales tus productos aparecen en tiendas de terceros. Puedes seleccionar más de una política comercial.

Para que la promoción sea válida para todas las políticas comerciales, deja la selección sin marcar.

![Política comercial-ES](https://images.ctfassets.net/alneenqid6w5/1EUrXEMs0tyZ6J1ulXco9i/3580c9712e545dbd89b07b473e7409fb/Politica_comercial-ES.png)

# 2. Compra uno y lleva uno gratis

En esta sección se definen las colecciones, SKU y cantidad mínima que deben rellenarse.

- **Colecciones:**  escribe el nombre de una o varias colecciones de productos en las que deseas aplicar este tipo de descuento. La promoción solo se aplicará a los productos que figuren en las colecciones registradas en este campo.
- **SKUs:** permite seleccionar el nombre o ID de los SKU sobre los que deseas aplicar el descuento. También puedes importar una lista de SKU, que debe guardarse en un archivo de texto (**.txt**) con cada ID descrito en una fila diferente.
- **Cantidad mínima:** permite definir la cantidad mínima de productos que deben agregarse al carrito para que se conceda el descuento. Es un campo obligatorio.

>⚠️ <p>La promoción no se creará si no se rellenan los campos Colecciones o SKUs.<p>

>⚠️ <p>Se puede crear una promoción Compra uno y lleva uno gratis con un máximo de 100 SKU diferentes al mismo tiempo.<p>

![Compra uno y lleva uno gratis](https://images.ctfassets.net/alneenqid6w5/27rGDqH0dMTcgA8m7cWs27/c37f45ddde8ac8ddab99cae1500a951d/Compra_uno_y_lleva_uno_gratis.png)

# 3. Condiciones de la promoción

En esta sección se proporciona información detallada sobre las condiciones que se deben cumplir para que una promoción sea válida.

- **Usar BIN de restricción:** permite activar o desactivar la restricción del BIN, limitando las tarjetas de crédito que se pueden utilizar en la promoción creada. También puedes importar una lista de BIN, que debe guardarse en un archivo de texto (.txt) con cada BIN descrito en una fila diferente.
- **Clúster de clientes:** permite activar o desactivar el uso del clúster de clientes. Al activarse, se puede elegir un clúster de clientes creado vía Master Data.
- **Método de envío:** permite elegir si la promoción se aplicará a uno o varios métodos de envío seleccionados.  Cuando se activa, debes seleccionar un método de envío; cuando no se activa, tendrás la opción de elegir aplicar el descuento al envío más barato.
- **Medio de pago:** permite elegir si la promoción se aplicará a uno o varios de los medios de pago seleccionados.
- **Utm_source:** el descuento se concederá si la navegación utiliza un parámetro utm_source con el valor registrado.
- **Utm_campaign:** el descuento se concederá si la navegación utiliza un parámetro utm_campaign con el valor registrado.

![Cuáles son las condiciones para que la promoción sea válida?](https://images.ctfassets.net/alneenqid6w5/4zOT1bHe70Z1wbN2wQjCXD/feb16501d81f3fc85591b837bf06b42d/Cu_les_son_las_condiciones_para_que_la_promoci_n_sea_v_lida.png)

# 4. Restricciones y limitaciones de uso

En esta sección se proporciona información importante sobre las condiciones y restricciones aplicables a la promoción.

- **Cuántas veces se aplicará esta promoción en tu tienda:** te permite restringir la aplicación de la promoción en tu tienda para un número determinado de veces o utilizarla de forma ilimitada.
- **Cuántas veces por cliente se aplicará esta promoción:** permite restringir la cantidad de veces que cada cliente puede aplicar la promoción o si se puede utilizar de manera ilimitada.
- **Solo para los mismos ítems:** si se activa esta opción, la promoción solo se aplica si se alcanza la cantidad mínima de ítems (previamente registrados) con el mismo SKU en el carrito. Si la opción está desactivada, la promoción se aplicará incluso cuando se agregue la cantidad mínima de ítems en el carrito, independientemente de si los SKU son diferentes o iguales.
- **Aplicar con otras promociones:** permite aplicar esta promoción en el carrito simultáneamente con otras promociones que ofrezcan el mismo tipo de descuento.

![Restricciones y limitaciones de uso](https://images.ctfassets.net/alneenqid6w5/71kLc3PWSLecGA49Iytuyd/9f8d369b64e79bc40aad64c2464112c8/Restricciones_y_limitaciones_de_uso.png)
