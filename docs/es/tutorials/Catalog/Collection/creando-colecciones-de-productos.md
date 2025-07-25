---
title: 'Crear colección de productos'
id: tutorials_244
status: PUBLISHED
createdAt: 2017-04-27T22:12:33.797Z
updatedAt: 2025-06-12T16:31:03.217Z
publishedAt: 2025-06-12T16:31:03.217Z
firstPublishedAt: 2017-04-27T23:03:10.343Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_3
slugEN: creating-a-product-collection
locale: es
legacySlug: creando-colecciones-de-productos
subcategoryId: 3aExYJkji3NIu9Ks8bxbWx
---

<div class = "alert alert-warning">
  <p>Existen dos formas de configurar colecciones, mediante el CMS o utilizando el módulo <a href="https://help.vtex.com/es/tutorial/registrar-colecciones-beta--yJBHqNMViOAnnnq4fyOye">Colecciones Beta</a>. Este artículo se refiere a <a href = "https://help.vtex.com/es/tutorial/registrar-una-coleccion-cms--2YBy6P6X0NFRpkD2ZBxF6L">la configuración de colecciones mediante el CMS</a>.</p>
</div>

Para crear una colección, siga las siguientes instrucciones:

1. En VTEX Admin, vaya a **Storefront**.
2. Haga clic en **Layout**.
3. Haga clic en **Product Clusters (Collections)**.
4. Haga clic en el botón `new collection`, como se muestra a continuación.
	![Layout 4](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Catalog/Collection/creando-colecciones-de-productos_1.png)
5. Rellene la información requerida:
	- **Product Cluster Id:** código identificador de la colección. Este campo no debe rellenarse ya que el sistema lo genera automáticamente al guardar.
	- **Nombre:** nombre de la colección.
	- **Highlight:** define si la colección se resaltará o no.
	- **Searchable:** define si la colección se puede buscar o no en la tienda.
	- **From __ To __:** define las fechas de caducidad de la colección.
6. Haga clic en el botón `Save Product Cluster`.

Hecho esto, su colección ha sido guardada. Ahora, necesitas añadir los productos que forman parte de ella añadiendo Grupos a la colección. 

## Incluir grupos en la colección

Puede crear grupos a partir de los siguientes filtros, que pueden combinarse para lograr el objetivo esperado:

- Departamento, Categoría o subcategoría
- Marca

Cada grupo puede ser de uno de los siguientes tipos: __Inclusión__ o __Exclusión__. Para cualquier colección, el primer Grupo creado debe ser necesariamente de tipo __Inclusion__.

### Crear Grupos por Departamento, Categoría o subcategoría

Para crear el Grupo, basta hacer clic en el botón _new group_ como en el ejemplo de la imagen abajo.

![Layout 5](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Catalog/Collection/creando-colecciones-de-productos_2.png)

Para agregar todos los productos de un determinado Departamento a un grupo, basta con seleccionar el Departamento en cuestión, como indica el ítem 1 de la figura a seguir. Lo mismo se aplica a los productos de una determinada Categoría (ítem 2) o subcategoría (ítem 3).

![Filtro_por_categoria](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Catalog/Collection/creando-colecciones-de-productos_3.jpg)

### Crear Grupo por Marca

Para crear un grupo con productos de una o más marcas, basta con seleccionar la marca deseada en la lista correspondiente. Las marcas se encuentran dispuestas en orden alfabética y al hacer clic en la letra correspondiente a la inicial de la marca, la lista se despliega y exhibe las marcas existentes.

![FIltro_por_marca](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Catalog/Collection/creando-colecciones-de-productos_4.jpg)

### Definir Grupo por productos en preventa o en periodo de lanzamiento

Para crear una colección de productos que aún no fueron lanzados, selecciones &#8220;Pré-venda&#8221; en &#8220;Outras Opções&#8221;. El sistema considerará todos los productos con fecha posterior a la actual, como definido en el campo “Data de lançamento no mercado” (registro de producto). O en cambio, puede configurar la colección para considerar productos lanzados recientemente. Para ello, seleccione la opción &#8220;Lançamento&#8221;. El sistema considerará todos los productos con la fecha definida en el campo “Data de lançamento no mercado” (registro de producto) dentro del intervalo de 30 días anteriores al actual. Vea en el ejemplo abajo que es posible seleccionar uno u otro campo. En caso que quiera que ambos escenarios sean contemplados, cree dos colecciones y configure cada una con la respectiva opción.

<div class="alert alert-warning">
Estas opcciones son un <em>complemento</ em> a la elección de los productos. Es importante resaltar que estas flags sólo funcionarán si usted ha elegido para la colección alguna categoría, marca o combinación de SKUs. Estas flags se utilizan junto con la selección de categorías, marcas o SKUs para la colección.
</div>

### Incluir SKUs específicos en un grupo

Al contrario de la versión anterior, en la que la inclusión de productos específicos se hacía a partir del ID del Producto, en el nuevo módulo, las inclusiones manuales se hacen usándose el SKU de un producto. En el campo correspondiente es posible digitar el ID de un SKU o de varios, separando los valores con una coma. Ej: `2000004,2000009,2000005`. Pese a la diferencia en la forma del registro, en la práctica, el efecto será el mismo, ya que al asociar un SKU a un grupo, el producto “padre” de este también será agregado a la colección. En caso que un producto tenga más de un SKU, basta con agregar uno de los SKUs al grupo, que todos los SKUs asociados se incluirán en él. El campo de inclusión de los IDs no permite la digitación de caracteres alfanuméricos, ni la utilización de la combinación de teclas `Control + C` y `Control + V`. Además, cuando el número de SKUs en el listado ultrapase los 10 ítems, un control de paginación se hará disponible. Para excluir un SKU de la lista, basta con hacer clic en el botón rojo al lado del SKU correspondiente.

![Inserir_sku_espec_fico](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Catalog/Collection/creando-colecciones-de-productos_5.gif)

### Importar un listado de SKUS para el grupo

Pese a que los filtros de grupos son muy prácticos para crear agrupamientos de productos en forma automática, es posible que ellos no atiendan sus necesidades en situaciones específicas. Para resolver eso, es posible importar un listado con los SKUs que formarán parte del grupo y consecuentemente, de la colección. El módulo de colecciones acepta archivos en los formatos planilla de Excel (.xls) o CSV (.csv). En el caso de archivos en formato Excel, todos los IDs de los SKUs deben estar dispuestos en la primera columna, sin encabezado, como ejemplifica la figura abajo:

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Catalog/Collection/creando-colecciones-de-productos_6.jpg)

Después que el sistema importa la planilla, los SKUs se presentan de la siguiente forma: ![Importar_lista_de_skus](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Catalog/Collection/creando-colecciones-de-productos_7.gif)

SKUs que estén inactivos no tendrán sus IDs importados, aunque estén incluidos en la planilla.

Recuerde que, cuando se selecciona más de un tipo de grupos, sólo los productos en la intersección de esos dos conjuntos estarán en la colección. Ej.: Si selecciona la categoría AA **y** marca BB, sólo los productos que sean de esa categoría **y** de esa marca estarán en la colección. Los productos que sean de la categoría AA y de otra marca, no estarán en la colección, así como los productos de la marca BB, que sean de otras categorías, no estarán en la colección.

## Excluir múltiplos SKUs de un grupo

Para evitar que un administrador tenga que excluir manualmente diversos SKUs, uno por uno, es posible usar también el recurso de importación de SKUs de la misma forma como en el ejemplo arriba. En este caso, después que el archivo se cargue, haga clic en la opción _excluir skus_ (ítem 1 de la imagen).

![Excluir_lista_de_skus](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Catalog/Collection/creando-colecciones-de-productos_8.gif)

Obtenga un modelo de archivo para importación tanto para inclusión como para exclusión de ítems en la colección [aquí](https://assets.contentful.com/alneenqid6w5/Lo7Y0tXh6eKyyUSs4MESQ/209e614248978f0e86a37e4ddff50162/Colecao.xls "aquí").

## Búsqueda de coleciones

Cuando la cantidad de colecciones creadas exceda el límite de exhibición, que es veinte ítems, las colecciones podrán ser encontradas a través del campo de búsqueda. La búsqueda debe hacerse con base en el nombre de la colección.

![Pesquisar_cole__o](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Catalog/Collection/creando-colecciones-de-productos_9.gif)
