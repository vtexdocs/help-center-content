---
title: 'Registrar kit'
id: tutorials_215
status: PUBLISHED
createdAt: 2017-04-27T22:13:50.843Z
updatedAt: 2023-03-29T14:48:43.077Z
publishedAt: 2023-03-29T14:48:43.077Z
firstPublishedAt: 2017-04-27T23:02:48.663Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_3
slug: cadastrando-kit
legacySlug: cadastrando-kit
subcategory: pwxWmUu7T222QyuGogs68
---

Un kit es un conjunto de productos que se venden juntos; es decir, es un producto compuesto de otros productos.

Un kit puede permitir o no que sus componentes se vendan por separado, entienda las diferencias:

- **Kit**: En un kit, en la página del producto, los componentes solo pueden venderse en el kit; es decir, no pueden venderse por separado. Si los componentes están configurados para mostrarse en el sitio, estos aparecerán con normalidad en las páginas de categorías, marcas y en los resultados de búsqueda, así como en cualquier estante.
- **Kit Look**: En un kit look, todos los productos componentes pueden encontrarse en el sitio y pueden venderse fuera del kit; es decir, incluso en la página de producto del kit look pueden comprarse los ítems por separado, o todos juntos. Vea [Montar un Kit Look](http://help.vtex.com/es/tutorial/como-montar-um-kit-look) para más información.

## Crear productos

Para configurar el Kit es necesario que los productos que harán parte de este – sus componentes – ya estén creados. Como en el siguiente ejemplo:

![01-Componentes ES](//images.ctfassets.net/alneenqid6w5/1cgf40SaniUaYUIg4wuKyo/0f124e3ab1d1f881f5d0fe225b64d746/01-components_ES.png)

Luego de crear los productos componentes, podemos continuar con la configuración del Kit.

1. Cree el producto que se convertirá en el Kit. Vea [Registrar Producto
](https://help.vtex.com/es/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/1ROhz3Y7mfSMmCO1I1GxEL) para más información.
2. Inicie las configuraciones del SKU que se convertirá en el Kit. Vea [Registrar SKU](https://help.vtex.com/es/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/17PxekVPmVYI4c3OCQ0ddJ) para más información.
3. Haga clic en la pestaña __Configuraciones Avanzadas__.
4. Haga clic en la opción `Activar Kit`.
5. Si quiere un Kit Look, haga clic en la opción __Kit con ítems vendidos por separado__.
6. Haga clic en `Guardar`.

![02-kit ES](//images.ctfassets.net/alneenqid6w5/6PUdHiV1UAuMC6A80QYOQI/e14209f28e53d84e8f1af4ecb6261bac/02-kit_ES.png)

## Asociar componentes

Después de crear el producto que se convertirá en el Kit, deben asociarse los componentes siguiendo los siguientes pasos:

1. Después de crear el SKU, usted será redireccionado a la pantalla de visualización del SKU. Si ha salido, acceda a la página de producto &gt; SKU.
2. Haga clic en la flechita en `Editar`.
3. Haga clic en la opción __Kit__.
4. Haga clic en el botón `Nuevo Componente`.
5. Rellene el ID del SKU que desea asociar como componente del Kit.
6. Rellene la cantidad de aquel SKU por Kit; es decir, la cantidad de un SKU dado en cada Kit.
7. Rellene el precio unitario del SKU dentro del Kit.
6. Haga clic en `Guardar`.

![03-agregar componente al Kit ES](//images.ctfassets.net/alneenqid6w5/2ghV5EOOAQ4kQOIomsmusE/5f7f3a94ffb0df4b4cdb74f71373445a/03-add_component_to_kit_ES.gif)

![04-Kit en el carrito  TODO](//images.ctfassets.net/alneenqid6w5/4yJVbkTnDyIC2c682UskYw/8cad5dc5512f49e73a10abb31184ba8e/04-kit_in_cart_ALL.png)

## Peso del Kit

El peso del Kit estará conformado por la suma del peso de sus componentes. Editar el peso directamente en la página del Kit no surtirá efectos en la plataforma. La simulación de coste de envío sigue la misma regla.

## Inventario

El inventario del Kit siempre será el inventario de sus componentes. Es decir, no es posible ingresar inventario apenas en el Kit, es necesario que se ingrese inventario en cada uno de sus componentes independientes, a fin de actualizar el inventario del Kit.

Esa información es visualizada en __Inventario y envío > Inventario__:

![05-Administrar inventario por Kit ES](//images.ctfassets.net/alneenqid6w5/4qlUYLkF1YyaAkQqyQkEKO/25614dccff3abf9ed8c52e06890d2fb9/05-manage_inventory_by_kit_ES.gif)

Como todos los SKUs componentes del Kit solo pueden venderse juntos, el inventario será igual al SKU con menos ítems en inventario. Esto porque no puede comprarse el Kit cuando uno de los componentes ya no tiene inventario.  

Ejemplo: El Kit tiene dos componentes. El componente 1 tiene 30 unidades en inventario. El componente 2 tiene 3 unidades en inventario. Solo podrán venderse 3 unidades del Kit.

Los componentes del Kit pueden estar en distintos inventarios, siempre que se envíen desde el mismo muelle. Si no salen por el mismo muelle, todo el Kit deja de estar disponible. 

<div class="alert alert-info">
<p>Este escenario no ocurre con Kit Look, porque el Kit Look puede venderse con los componentes que quedan en inventario, sin necesidad de tener todos los componentes del Kit con inventario.</p>
</div>

## Precio

El precio del kit se actualiza automáticamente después de cambiar el valor unitario de cualquiera de los componentes en la página de registro de los componentes SKU del kit en el __Catálogo__. El precio final será la suma de los valores de los componentes.

También podrá modificar únicamente el precio final del Kit directamente desde el sistema de precios sin actualizar los componentes. De este modo, el valor del componente se utilizará apenas para prorratear el valor de venta entre los componentes, determinando el precio de cada componente en ese pedido específico.

Pero tenga en cuenta que al cambiar cualquier componente se generará un nuevo precio final, actualizando lo que se había registrado anteriormente.
Alterar solo el precio final no actualiza el precio de los componentes.

![06-Lista de precios ES](//images.ctfassets.net/alneenqid6w5/4lM2ecWDE40Ooa44scKIq6/6fa14fb364430e3bfc2fa3fff64c8e96/06-price_list_ES.png)

### Más información

- [Ordenar los productos del kit look](https://help.vtex.com/es/tutorial/como-ordenar-los-productos-del-kitlook--frequentlyAskedQuestions_621)
