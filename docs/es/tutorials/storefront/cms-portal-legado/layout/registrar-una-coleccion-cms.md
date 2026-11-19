---
title: 'Registro de colecciones CMS'
id: 2YBy6P6X0NFRpkD2ZBxF6L
status: PUBLISHED
createdAt: 2020-11-25T22:05:53.169Z
updatedAt: 2026-10-20T15:45:00.000Z
publishedAt: 2023-04-19T18:38:40.730Z
firstPublishedAt: 2020-11-25T22:10:10.072Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 2o8pvz6z9hvxvhSoKAiZzg
slugEN: adding-collections-cms
legacySlug: registrar-una-coleccion
locale: es
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

> ⚠️ Existen dos formas de configurar colecciones: mediante el CMS Portal (Legado) o utilizando el módulo [Colecciones Beta](/es/docs/tutorials/registrar-colecciones-beta). Este artículo trata sobre la configuración de colecciones en el CMS Portal (Legado).

Para registrar una nueva colección sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Storefront > Layout**.
2. Dentro de la carpeta CMS, haz clic en **Product Clusters (Collections)**.
3. Haz clic en `New Collection`.
4. Llena los campos del formulario de colección. Para entender mejor el significado de cada campo consulta nuestro artículo sobre [cómo llenar los campos de registro de colección](/es/docs/tutorials/rellenar-campos-de-registro-de-coleccion).
5. Haz clic en `Save Product Cluster`.

> ⚠️ Cuando la cantidad de colecciones creadas supera el límite de veinte, las colecciones excedentes pueden encontrarse en la interfaz a través del campo de búsqueda. La búsqueda en este campo debe realizarse con base en el nombre de la colección deseada.

La elección de los productos que conformarán una colección se realiza mediante la creación de un **grupo**. Para crear un grupo haz clic en `New Group` dentro de la colección deseada.

![Botón para crear un nuevo grupo dentro de la colección.](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/storefront/cms-portal-legado/layout/registrar-una-coleccion-cms_1.png)

Antes de elegir los productos que formarán parte del grupo, debes asignar un nombre y especificar el tipo de grupo creado.

## Tipos de grupo

Solo existen dos valores posibles para el tipo de un grupo: `Inclusive` y `Exclusive`. Un grupo tipo `Inclusive` tiene como objetivo incluir todos los productos en la colección a la que está vinculado. En ese mismo sentido, un grupo de tipo `Exclusive` excluye de la colección los productos que contiene.

Por ejemplo, la colección Celulares tiene dos grupos: uno de tipo `Inclusive` llamado `A` y otro de tipo `Exclusive` llamado `B`. Los productos que forman parte de esta colección serán el resultado de los productos del grupo A _menos_ los productos del grupo B.

Esta lógica se aplica para cualquier cantidad de grupos creados dentro de una misma colección. Los productos de los grupos tipo `Exclusive` siempre se restan de los productos que forman parte de los grupos de tipo `Inclusive`. Esto quiere decir que:

`Productos que componen la colección = (A+B) - (C+D)`

Los tipos son:

- A y B grupos de tipo `Inclusive`
- C y D grupos de tipo `Exclusive`

Por eso, el primer grupo creado para cualquier colección debe ser obligatoriamente de tipo `Inclusive`.

> ⚠️ Presta atención al tipo de grupo definido en el registro. Si incluyes productos en un grupo de tipo `Exclusive`, por ejemplo, **no** se incluirán en la colección debido a la naturaleza de su grupo.

## Selección de productos

Dentro de un grupo, la selección de los productos puede realizarse con base en:

- Departamento, categoría o subcategoría
- Marca
- SKU
- Fecha de lanzamiento en el mercado

Entre las opciones anteriores, puedes seleccionar más de una para alcanzar un escenario específico deseado. En estos casos, **solo los productos que cumplen las condiciones de las opciones seleccionadas serán incluidos en el grupo**.

Por ejemplo: al seleccionar la categoría `A` y la marca `B`, solo los productos que pertenezcan a esa categoría y marca al mismo tiempo se incluirán en el grupo. Los productos de la categoría `A` de marcas diferentes de `B`, por ejemplo, no estarán en la colección, así como los productos de la marca `B` de otras categorías.

## Productos por departamento, categoría o subcategoría

Para agregar todos los productos de un departamento determinado a un grupo, selecciona el departamento deseado y también las categorías y subcategorías vinculadas a él, ya que la selección del departamento **no** marca las demás automáticamente. Luego haz clic en `Save Group`, como se muestra en la siguiente imagen.

![Selección de departamento, categorías y subcategorías en una colección del CMS.](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/storefront/cms-portal-legado/layout/registrar-una-coleccion-cms_2.png)

Cada nivel se selecciona de forma independiente. Para incluir los productos de una determinada categoría, selecciona también las subcategorías vinculadas a ella. Si deseas incluir solo los productos de una subcategoría específica, selecciona únicamente esa subcategoría.

![Selección de categoría y subcategoría en una colección del CMS.](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/storefront/cms-portal-legado/layout/registrar-una-coleccion-cms_3.png)

## Productos por marca

Para crear un grupo con productos de una o más marcas selecciona la marca deseada en la lista correspondiente.

![Selección de marcas en una colección del CMS.](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/storefront/cms-portal-legado/layout/registrar-una-coleccion-cms_4.png)

Las marcas están ordenadas alfabéticamente. Al hacer clic en la letra correspondiente a la inicial de la marca deseada, la lista se expande y muestra las marcas existentes.

## Productos por SKU

### Manualmente

Al agregar un SKU a un grupo, el producto al que está vinculado también se agregará. En un escenario en que un producto tenga más de un SKU asignado, agregar un único SKU hará que todos los demás también se agreguen al grupo.

![Inclusión manual de SKUs en un grupo de la colección.](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/storefront/cms-portal-legado/layout/registrar-una-coleccion-cms_5.png)

En el campo **Find SKUs** puedes ingresar el ID de tantos SKUs como desees, separados por comas. Ejemplo: `2000004,2000009,2000005`.

Para remover un SKU de la lista haz clic en el botón rojo que aparece a su lado.

> ℹ️ Cuando el número de SKUs en la lista supere los 10 elementos, se activará un control de paginación.

### Por plantilla

> ℹ️ Descarga la [plantilla](https://cdn.statically.io/gh/vtexdocs/help-center-content/files-migration-script/docs/es/tutorials/storefront/cms-portal-legado/layout/Colecao.xls) para incluir y excluir SKUs de la colección.

#### Inclusión en masa

En el campo **Bulk Insert SKUs** puedes cargar una lista de SKUs que formarán parte del grupo mediante una plantilla (formato `.xls`).

![Campo Bulk Insert SKUs para importar una plantilla de SKUs.](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/storefront/cms-portal-legado/layout/registrar-una-coleccion-cms_6.png)

En la plantilla, todos los IDs de los SKUs deben estar en la primera columna, incluyendo el encabezado, como se muestra en la siguiente imagen:

![Ejemplo de plantilla con IDs de SKUs en la primera columna.](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/storefront/cms-portal-legado/layout/registrar-una-coleccion-cms_7.png)

Después de seleccionar la plantilla deseada, haz clic en `Import skus` para enviar la información.

![Botón para importar la plantilla de SKUs.](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/storefront/cms-portal-legado/layout/registrar-una-coleccion-cms_8.png)

#### Exclusión en masa

También puedes usar la importación de plantilla para excluir SKUs en masa y evitar removerlos uno por uno.

![Exclusión de SKUs de un grupo mediante plantilla.](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/storefront/cms-portal-legado/layout/registrar-una-coleccion-cms_9.png)

En este caso, los SKUs listados en la plantilla importada se removerán del grupo. Para esto haz clic en `remove skus` después de que se cargue el archivo.

> ⚠️ No se considerarán los IDs de los SKUs inactivos para inclusión o exclusión aunque estén listados en la plantilla.

## Productos por fecha de lanzamiento en el mercado

> ⚠️ En la sección **Other options**, las opciones **Pre-sales** y **Launches** son adicionales a la selección de productos por categorías, marcas o SKUs. Esto significa que esas flags solo funcionan si ya has seleccionado categorías, marcas o SKUs en el mismo grupo.

Solo es posible seleccionar una de las dos opciones. Si deseas contemplar ambos escenarios crea dos grupos y configura cada uno con la opción correspondiente.

![Selección de las opciones Pre-sales y Launches en Other options.](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/storefront/cms-portal-legado/layout/registrar-una-coleccion-cms_10.png)

### Pre-sales

Para crear una colección de productos que aún no han sido lanzados en tu tienda, selecciona la opción **Pre-sales**. El sistema considerará todos los productos con la fecha de lanzamiento posterior a la fecha actual, según lo definido en el campo **Fecha de lanzamiento en el mercado** en el registro del producto.

### Launches

La opción **Launches** permite crear una colección de productos lanzados recientemente. Al seleccionar esta opción, el sistema considerará todos los productos lanzados dentro del rango de los 30 días anteriores a la fecha actual. La fecha de lanzamiento considerada es también la definida en el campo **Fecha de lanzamiento en el mercado** en el registro del producto.

> ℹ️ Para saber cómo eliminar una colección de productos, consulta el artículo [Cómo eliminar una colección](/es/docs/tutorials/como-eliminar-una-coleccion).
