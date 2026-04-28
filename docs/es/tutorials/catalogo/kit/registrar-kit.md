---
title: 'Registrar kit'
id: tutorials_215
status: PUBLISHED
createdAt: 2017-04-27T22:13:50.843Z
updatedAt: 2025-09-16T19:15:39.706Z
publishedAt: 2025-09-16T19:15:39.706Z
firstPublishedAt: 2017-04-27T23:02:48.663Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_3
slugEN: bundle-registration
legacySlug: cadastrando-kit
locale: es
subcategoryId: 17Lkzo2rGBE1Bt7dXjE0tV
---

En VTEX, un kit es un tipo de SKU formado por uno o más SKUs, llamados componentes. Además del kit, existe un concepto similar: el kit de look.

## Diferencia entre kit y kit de look

La siguiente tabla presenta las características y contextos para el uso de kit o kit de look:

| **Tipo** | **Definición** | **Ejemplo** |
| :---: | :--- | :--- |
| [Kit](/es/docs/tutorials/que-es-un-kit) | <ul><li>Los componentes forman un conjunto que no se puede dividir, de modo que el cliente no puede comprar los ítems por separado.</li><li>La tienda puede decidir si ofrece los componentes para compra individual o no.</li></ul> | Una tienda de moda masculina ofrece el kit "Día del Padre", compuesto por un par de zapatos, medias y un llavero. Al cliente no le interesa el llavero, pero le gustaron los zapatos y las medias, por lo que acepta llevarse el kit completo, ya que no es posible comprar ítems individuales. |
| [Kit de look](/es/docs/tutorials/como-montar-un-kit-de-look) | <ul><li>Los componentes funcionan como una sugerencia de compra conjunta, y el cliente puede elegir los ítems del kit de look que desea adquirir.</li><li>La tienda ofrece todos los componentes para compra individual.</li></ul>| Una tienda de moda femenina ofrece la venta del kit de look "Verano", formado por un bikini, una salida de playa y unas sandalias. A la cliente no le gustaron las sandalias y compra solo el bikini y la salida de playa. |

## Crear kit

Sigue las instrucciones a continuación para crear un kit:

> ℹ️ También puedes consultar cómo [Crear un kit de look](/es/docs/tutorials/como-montar-un-kit-de-look).

1. En el Admin VTEX, accede a **Catálogo > Productos y SKUs** o ingresa **Productos y SKUs** en la barra de búsqueda en la parte superior de la página.
2. Accede a la página de edición del SKU que será uno de los componentes. Si aún no hay un SKU creado, consulta [Agregar o editar SKUs](/es/docs/tutorials/agregar-o-editar-skus).
3. En la pestaña **SKUs**, haz clic en la <i class="fas fa-ellipsis-v" aria-hidden="true"></i> fila del SKU deseado.

  ![bundle_registration_image_1_ES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/catalogo/kit/registrar-kit_1.png)

4. Haz clic en `Crear kit`.
5. Haz clic en `Convertir en kit`.

> ❗ Convertir un SKU en kit es una acción permanente y no se puede deshacer.

Al convertirlo, el ID de SKU mostrará la etiqueta `Kit`:

![bundle_registration_image_2_ES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/catalogo/kit/registrar-kit_2.png)

Si lo deseas, puedes duplicar el SKU o moverlo a otro producto. Estas acciones están disponibles en el mismo menú donde se encuentra la opción `Crear kit`, descrita en el paso 4.

## Peso del Kit

El peso del Kit estará conformado por la suma del peso de sus componentes.

## Stock

El [stock](/es/docs/tutorials/gestionar-items-en-inventario) del Kit siempre será el inventario de sus componentes. Es decir, no es posible ingresar stock apenas en el Kit, es necesario que se ingrese stock en cada uno de sus componentes independientes, a fin de actualizar el stock del Kit. Esa información es visualizada en tu Admin VTEX en **Catálogo > Stock > Gestión del stock**.

Como todos los SKUs componentes del Kit solo pueden venderse juntos, el stock será igual al SKU con menos ítems en stock. Esto porque no puede comprarse el Kit cuando uno de los componentes ya no tiene stock.  

> **Ejemplo:** el Kit tiene dos componentes. El componente 1 tiene 30 unidades en stock. El componente 2 tiene 3 unidades en stock. Solo podrán venderse 3 unidades del Kit.

Los componentes del Kit pueden estar en distintos stocks, siempre que se envíen desde el mismo muelle. Si no salen por el mismo muelle, todo el Kit deja de estar disponible. 

> ℹ️ Este escenario no ocurre con Kit Look, porque el Kit Look puede venderse con los componentes que quedan en stock, sin necesidad de tener todos los componentes del Kit con stock.

## Precio

El precio del kit se actualiza automáticamente después de cambiar el valor unitario de cualquiera de los componentes. El precio final será la suma de los valores de los componentes.

También podrá modificar únicamente el precio final del Kit directamente desde el sistema de precios sin actualizar los componentes. De este modo, el valor del componente se utilizará apenas para prorratear el valor de venta entre los componentes, determinando el precio de cada componente en ese pedido específico.

Pero tenga en cuenta que al cambiar cualquier componente se generará un nuevo precio final, actualizando lo que se había registrado anteriormente. Alterar solo el precio final no actualiza el precio de los componentes.
