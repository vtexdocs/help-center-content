---
title: 'Crear colección de productos'
id: tutorials_244
status: PUBLISHED
createdAt: 2017-04-27T22:12:33.797Z
updatedAt: 2026-07-13T00:00:00.000Z
publishedAt: 2025-06-12T16:31:03.217Z
firstPublishedAt: 2017-04-27T23:03:10.343Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_3
slugEN: creating-a-product-collection
legacySlug: creando-colecciones-de-productos
locale: es
subcategoryId: 3aExYJkji3NIu9Ks8bxbWx
---
>⚠️ Existen dos formas de configurar colecciones: mediante el CMS Portal (Legado) o utilizando el módulo [Colecciones (beta)](https://help.vtex.com/es/docs/tutorials/registrar-colecciones-beta). Este artículo trata sobre la configuración de colecciones en el CMS Portal (Legado).

Una colección de productos permite agrupar ítems del catálogo con base en criterios como departamento, categoría, marca, periodo de lanzamiento o SKUs específicos, formando vitrinas temáticas para campañas, fechas conmemorativas o curadurías específicas de la tienda. Esta agrupación facilita la organización y visualización de productos relacionados, mejorando la navegación y la experiencia de compra de los clientes.

En este tutorial aprenderás a:

- Crear una colección de productos.
- Configurar una URL descriptiva para acceder a la colección.
- Incluir grupos de productos por departamento, categoría, marca, periodo de lanzamiento o por SKUs específicos.

## Antes de comenzar

Para crear y editar colecciones en el CMS Portal (Legado), el usuario debe tener el rol Owner (Admin Super) o crear otro rol con acceso a los siguientes recursos:

- **Read Collections**, en la sección Collection de los recursos de Catalog.
- **Write Collections**, en la sección Collection de los recursos de Catalog.
- **CMS Management**, en la sección Configuration de los recursos de Catalog.

Para crear un rol, consulta la sección **Crear roles** del tutorial [Roles](https://help.vtex.com/es/docs/tutorials/roles#crear-roles). Si no tienes acceso a esta área, pide al administrador de la tienda que active este permiso en tu rol en [License Manager](https://help.vtex.com/es/docs/tutorials/recursos-del-license-manager).

## Instrucciones

### Crear una colección

Para agregar una condición sigue las instrucciones a continuación:

1. En el Admin VTEX, accede a **Storefront > Layout**.
2. Haz clic en **CMS**.
3. Haz clic en **Product Clusters (Collections)**.
4. Haz clic en `new collection`.
   ![Layout 4](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/catálogo/coleções/criando-colecao-de-produtos_1.png)
5. Completa la información necesaria:
   - **Product Cluster Id:** código de identificación de la colección. Este campo no debe completarse, ya que se genera automáticamente en el sistema al momento de guardar.
   - **Name:** nombre de la colección.
   - **Highlight?:** define si la colección se resaltará o no.
   - **Searchable?:** define si la colección se puede buscar o no en la tienda.
   - **From/To:** define las fechas de vigencia de la colección.
6. Haz clic en `Save Product Cluster` para guardar la colección.

### Crear una URL descriptiva para la colección

De forma predeterminada, el link de acceso a una colección sigue el formato `https://{tienda}.com.mx/busca?fq=H:{ID-de-la-colección}`. Para usar una URL más amigable (por ejemplo, `https://{tienda}.com.mx/todos-los-productos`), marca la colección como buscable y asóciala a una carpeta del CMS con el Contexto de búsqueda configurado:

1. Haz que la colección sea encontrable en la búsqueda marcando la flag **Searchable** en el registro de la colección. Más información en [Hacer que una colección de productos pueda buscarse](https://help.vtex.com/es/docs/tutorials/hacer-que-la-coleccion-de-productos-pueda-buscarse).
2. Crea una carpeta con una URL personalizada. Consulta las instrucciones en el tutorial [Cómo crear landing pages con URLs personalizadas](https://help.vtex.com/es/docs/tutorials/como-crear-landing-pages-con-urls-personalizadas).

### Incluir grupos en la colección

La composición de los productos de una colección está definida por los **grupos**. Para incluir grupos en una colección sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Storefront > Layout > CMS > Product Clusters (Collections)**.

2. Haz clic en la colección deseada. Si tu tienda tiene más de 20 colecciones registradas, usa el campo de búsqueda de la carpeta para buscar la colección por nombre.

   ![Pesquisar_cole__o](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/catalogo/colecciones/creando-colecciones-de-productos_9.gif)

3. Haz clic en `new group`.

   ![Layout 5](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/catálogo/coleções/criando-colecao-de-produtos_2.png)

4. En el campo **Group Name**, asigna un nombre al grupo.

5. En el campo **Group Type**, define el tipo de grupo, es decir, si es `Inclusive` (Inclusión) o `Exclusive` (Exclusión):

   - `Inclusive` (inclusión): agrega los productos del grupo a la colección.
   - `Exclusive` (exclusión): remueve los productos del grupo de la colección.

   El primer grupo creado en cualquier colección debe ser obligatoriamente del tipo **Inclusive**. Cuando una colección tiene múltiples grupos, el resultado final se calcula de la siguiente manera:

   `Productos de la colección = (suma de los grupos de inclusión) - (suma de los grupos de exclusión)`

   > ⚠️ Presta siempre atención al tipo de grupo seleccionado en el registro. Los productos agregados a un grupo del tipo `Exclusive` (exclusión) **no** se incluyen en la colección. Si también pertenecen a un grupo de inclusión, se remueven de la colección. Este es uno de los errores más frecuentes al configurar colecciones con múltiples grupos.

6. Define qué productos formarán parte del grupo. Puedes definir la composición del grupo con base en los siguientes criterios, que pueden combinarse para lograr el resultado esperado:

   - Departamento, categoría o subcategoría
   - Marca
   - Periodo de lanzamiento (preventa o lanzamiento reciente)
   - SKUs específicos (manualmente o por importación de plantilla)

   > ⚠️ Al combinar más de un criterio en un mismo grupo, solo los productos que cumplan con **todos los criterios** seleccionados (intersección) formarán parte de él. Por ejemplo, si seleccionas la categoría AA y la marca BB, solo los productos de esa categoría **y** de esa marca se incluirán en el grupo. Los productos de la categoría AA de otras marcas o de la marca BB de otras categorías quedarán fuera.

7. Haz clic en `Save Group` para guardar la configuración del grupo.

#### Departamento, categoría o subcategoría

Para agregar todos los productos de un **departamento, categoría o subcategoría** a un grupo, selecciona el departamento, categoría o subcategoría en la columna **Categories**

![Filtro_por_categoria](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/catálogo/coleções/criando-colecao-de-produtos_3.jpg)

#### Marca

Para agregar los productos de **una o más marcas** a un grupo, selecciónalas en la columna **Brands**. Las marcas están ordenadas alfabéticamente. Al hacer clic en la letra correspondiente a la inicial de la marca, la lista se expande y muestra las marcas existentes.

![FIltro_por_marca](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/catálogo/coleções/criando-colecao-de-produtos_4.jpg)

#### Periodo de lanzamiento (preventa o lanzamiento)

En **Other options**, selecciona una de las opciones a continuación. No es posible seleccionar las dos opciones en el mismo grupo. Si deseas contemplar ambos escenarios, crea dos grupos independientes.

- **Pre-sales:** incluye productos cuya **Fecha de lanzamiento al mercado**, configurada en el registro del producto, sea posterior a la fecha actual.
- **Launches:** incluye productos cuya **Fecha de lanzamiento al mercado** corresponda a los últimos 30 días.

>⚠️ Las opciones **Pre-sales** (preventas) y **Launches** (lanzamientos) solo funcionan como complemento de una selección de categoría, marca o SKU ya realizada en el mismo grupo. Por sí solas, no devuelven productos.

#### Incluir SKUs específicos en un grupo

Puedes agregar SKUs específicos a un grupo manualmente, usando el campo **Find SKUs**, o en masa mediante una plantilla.

Para agregar manualmente SKUs específicos a un grupo, en el campo **Find SKUs**, ingresa los IDs de uno o más SKUs, separándolos por comas (por ejemplo, `2000004,2000009,2000005`).

>ℹ️ El campo de inclusión de ID no permite ingresar caracteres alfanuméricos ni usar las combinaciones de teclas `Control + C` y `Control + V`.

![Inclusão manual de SKUs específicos em um grupo.](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/catálogo/coleções/criando-colecao-de-produtos_5.gif)

Para agregar SKUs específicos de forma masiva a un grupo, puedes importar una lista de SKUs utilizando una plantilla de Excel (`.xls`). Todos los IDs de los SKUs que desees incluir en el grupo deben estar en la primera columna de la plantilla, con el encabezado `SKU`.

1. Haz clic en el botón `Buscar` debajo de **Bulk insert SKUs** para seleccionar la plantilla en tu computadora.
2. Haz clic en `import skus` para importar los SKUs.

   ![2017-03-08_170117](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/catálogo/coleções/criando-colecao-de-produtos_6.jpg)

Una vez importada, la plantilla se muestra de la siguiente forma:

![Importar_lista_de_skus](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/catálogo/coleções/criando-colecao-de-produtos_7.gif)

Los SKUs inactivos no tendrán sus IDs importados, aunque estén incluidos en la hoja de cálculo.

Al asociar un SKU a un grupo, ya sea de forma manual o en masa, el producto correspondiente también se agrega a la colección. Si este producto tiene más de un SKU, todos los demás SKUs asociados se incluyen automáticamente. Cuando la lista supera los 10 SKU, se activa un control de paginación. Para eliminar un SKU de la lista haz clic en el botón rojo que aparece a su lado.

>ℹ️ Descarga el [modelo plantilla de hoja](https://cdn.statically.io/gh/vtexdocs/help-center-content/files-migration-script/docs/pt/tutorials/catálogo/coleções/Colecao.xls) para la inclusión de SKUs en masa.

#### Eliminar múltiples SKUs de un grupo

Para evitar la exclusión manual de SKUs uno por uno, puedes usar el mismo recurso de importación de plantilla que se usa para [crear grupos con SKUs específicos](#skus-especificos).

1. Haz clic en el botón `Buscar` debajo de **Bulk exclude SKUs** para seleccionar la plantilla en tu computadora.
2. Haz clic en `remove skus` para excluir los SKUs.

![Exclusión de una lista de SKUs de un grupo por medio de plantilla.](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/catálogo/coleções/criando-colecao-de-produtos_8.gif)

>ℹ️ Puedes utilizar el mismo [modelo de plantilla](https://cdn.statically.io/gh/vtexdocs/help-center-content/files-migration-script/docs/pt/tutorials/catálogo/coleções/Colecao.xls) usada para la inclusión de SKUs en masa.
