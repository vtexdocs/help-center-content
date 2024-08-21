---
title: 'Llenar campos de registro de producto'
id: 4dYXWIK3zyS8IceKkQseke
status: PUBLISHED
createdAt: 2017-09-21T14:48:54.657Z
updatedAt: 2023-02-24T20:32:34.623Z
publishedAt: 2023-02-24T20:32:34.623Z
firstPublishedAt: 2017-09-21T15:09:23.192Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 7FpKZ0rc6k4WqeymES80cw
slug: campos-de-registro-de-producto
locale: es
legacySlug: campos-de-registro-de-producto
subcategory: pwxWmUu7T222QyuGogs68
---

Para comprender cómo completar el formulario de registro de un nuevo producto, vea a continuación la descripción completa de los campos en esta página, dividida en dos pestañas: __Producto__ y __Especificaciones__.

## Producto

__Nombre:__ relacionado al producto que se está registrando. Utilice palabras sencillas y evite otros idiomas o escritura compleja. Este campo es importante para SEO y debe respetar el límite de 150 caracteres. Campo obligatorio.

__Palabras Sustitutas:__ sinónimos de términos relacionados al nombre dado para su departamento o categoría. "Televisión", por ejemplo, puede tener como palabra sustituta "TV".  Este campo es importante para hacer sus búsquedas más amplias y debe respetar el límite de 8000 caracteres.

__TextLink:__ utilizado para crear la URL del producto. Campo obligatorio. Para más información, consulte el artículo [¿Cómo es montada la URL de producto?](https://help.vtex.com/es/tutorial/como-es-montada-la-url-de-producto--frequentlyAskedQuestions_368).

>❗ Al rellenar el **textLink** del producto, evita utilizar las siguientes palabras reservadas, ya que esto puede perjudicar el rendimiento de tu tienda e interferir con el funcionamiento de las páginas del Admin VTEX.  Consulta la lista de palabras reservadas a continuación.
>
> *`a`
>
> *`meta`
>
> *`api`
>
> *`admin`
> 

__Título de la página (Metatag Title):__ texto que queda en la pestaña del navegador y corresponde al título de la página del producto. Este campo es importante para SEO.

__Descripción del producto:__ descripción de las principales informaciones relacionadas con el producto. Un resumen sencillo y de fácil comprensión para el cliente. Para incluir saltos de línea y otras características de formato en la descripción de su producto, debe utilizar HTML.

__Descripción (Metatag Description):__ breve descripción de la categoría. Es recomendable no sobrepasar 150 caracteres para que los motores de búsqueda puedan mostrarlo correctamente en las páginas de resultados.

__Marca:__ escribir o buscar el nombre de la marca después de agregarla al registro. Para que esto sea posible, es obligatorio que la marca ya haya sido registrada y esté activada en el Admin. Campo obligatorio.

__Categoría:__ seleccionar la categoría a que el producto pertenece. Para que esto sea posible, es obligatorio que la categoría en cuestión ya haya sido registrada y esté activada en el Admin. Campo obligatorio.

__Categoría Global VTEX:__ es un árbol de categorías único, ya definido por el sistema, que se utilizará en la integración de los productos con Google Shopping, Buscapé y marketplaces. Una buena asignación hace que los productos de su tienda también se encuentren en los parceros de forma más eficaz.

__Tiendas:__ en un ambiente multidominio, ya aparecen listadas todas las tiendas existentes. Usted debe marcar la tienda o las tiendas a que el producto se destina. Si no marca ninguna opción, el producto, si está activo, aparecerá en todas las tiendas.

__Fecha de lanzamiento:__ campo utilizado para auxiliar en la ordenación del resultado de búsqueda del sitio. Por medio de la querystring `O=OrderByReleaseDateDESC` es posible traer ese valor y mostrar el orden de visualización por fecha de contabilización. Además, puede ser una forma de crear colección automática.

__Mostrar en la tienda:__ activa o inactiva la visibilidad de un producto en su tienda.

__Mostrar producto agotado:__ esta función hace que un producto, incluso cuando se haya agotado, aparezca en su tienda, en el formato de un campo en el que el cliente informa su e-mail para ser avisado cuando el producto esté nuevamente disponible.

__Código de referencia de producto:__ combinación única de letras, números o ambos para identificación interna del producto en la tienda.

__Breve descripción:__ descripción corta del producto. Esta información se mostra mediante el control `$product.DescriptionShort` y se puede ver tanto en la página del producto como en el estante.

__Código fiscal:__ número de identificación del producto.

__Proveedor:__ escribir o buscar el nombre de la marca para agregarla al registro.

__Score (usado para el orden de la búsqueda):__ valor utilizado para definir la prioridad en la página de resultados de búsqueda. Para más detalles sobre este campo, lea [¿Cómo funciona el campo Score?](https://help.vtex.com/es/tutorial/como-funciona-el-campo-score--1BUZC0mBYEEIUgeQYAKcae).

## Especificaciones

Dependiendo de la categoría del producto creado, pueden aparecer campos para que usted complete la pestaña __Especificaciones__. Estos campos son propiedades que puede agregar a sus SKU para asignar características específicas a los productos de su tienda.

Vea cómo crear las [especificaciones de sus productos](https://help.vtex.com/es/tutorial/criando-um-campo-de-produto?locale=es).

Si ha creado algún campo de producto obligatorio, el producto sólo podrá activarse después de haber rellenado esta especificación.

>ℹ️ Si su producto no aparece en el sitio web de su tienda después del registro, consulte el artículo [¿Por qué el producto no aparece en el sitio?](https://help.vtex.com/es/faq/por-que-el-producto-no-aparece-en-el-sitio--frequentlyAskedQuestions_382) para entender cómo resolver este problema.

### Más información
- [Productos - Definición de concepto](https://help.vtex.com/es/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/1wmX3QvQVxbKVmalhIE5Ru)
- [Registrar productos](https://help.vtex.com/es/tutorial/registrar-productos--tutorials_2567)
- [Rellenar campos de registro de SKU](https://help.vtex.com/es/tutorial/campos-de-registro-de-sku--21DDItuEQc6mseiW8EakcY)
- [Rellenar campos de la planilla de importación de productos y SKUs](https://help.vtex.com/es/tutorial/rellenar-campos-de-la-planilla-de-importacion--4nYhx63Q5yokQWaMguaIgI)
