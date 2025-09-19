---
title: 'Incluir una colección de productos en la vitrina de la tienda'
id: frequentlyAskedQuestions_589
status: PUBLISHED
createdAt: 2019-01-24T20:45:55.516Z
updatedAt: 2025-02-01T00:12:59.875Z
publishedAt: 2025-02-01T00:12:59.875Z
firstPublishedAt: 2019-01-24T22:12:59.506Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slugEN: how-to-include-a-collection-of-products-in-the-shop-window
legacySlug: como-incluir-una-coleccion-de-productos-en-la-vitrina-de-la-tienda
locale: es
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

> ⚠️ **Atención:** existen dos formas de configurar colecciones, mediante el CMS o utilizando el módulo Colecciones Beta. Este artículo se refiere a <a href = "https://help.vtex.com/es/tutorial/registrar-una-coleccion-cms--2YBy6P6X0NFRpkD2ZBxF6L">la configuración de colecciones mediante el CMS</a>.

Las vitrinas se usan en el destaque de productos en diversas páginas. Se pueden usar también para recomendaciones, en la página del producto.

Primero, antes de definir una vitrina, se debe crear una colección (ver instrucciones [aquí](/es/tutorial/criando-colecao-de-produtos "aquí")) con los productos que se exhibirán en ella. Es necesario también que las páginas estén debidamente estructuradas, con los debidos controles insertados en sus templates.

Realizadas las debidas definiciones, se hace el vínculo de la colección con la vitrina en **Storefront > Layout**.

En el ejemplo abajo, vamos a definir la vitrina presentada en la Home. Por lo tanto, seleccione **Settings**, luego **add object**, como en la siguiente imagen.

![coleção2](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/storefront/layout/como-incluir-una-coleccion-de-productos-en-la-vitrina-de-la-tienda_1.png)

Este comando abrirá **Visual Controls**, que corresponden al escaparate en el que desea mostrar la colección. Agregue una _Collection_, pero asegúrese de establecer un nombre para ella.

![coleção3](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/storefront/layout/como-incluir-una-coleccion-de-productos-en-la-vitrina-de-la-tienda_2.png) 

![coleção4](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/storefront/layout/como-incluir-una-coleccion-de-productos-en-la-vitrina-de-la-tienda_3.png)

Acuérdese de grabar las configuraciones para que sea posible editar el control creado!

![coleção5](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/storefront/layout/como-incluir-una-coleccion-de-productos-en-la-vitrina-de-la-tienda_4.png)

![coleção6](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/storefront/layout/como-incluir-una-coleccion-de-productos-en-la-vitrina-de-la-tienda_5.png)

Al editar el control es necesario agregar sus contenidos, que representan cada conjunto de ítems que se exhibirán.
Son ellos:
_Layout_: seleccione la plantilla de estante utilizada en la muestra.
_Number of Columns, Number of Items, Show Unavailable_ y _Ramdom ad Paged_: Defina el diseño, la cantidad y los criterios para mostrar los elementos.

![coleção7](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/storefront/layout/como-incluir-una-coleccion-de-productos-en-la-vitrina-de-la-tienda_6.png)

Recuerde guardar antes de buscar o cambiar páginas.
El siguiente paso es agregar el contenido seleccionando **Add Content**.
![coleção8](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/storefront/layout/como-incluir-una-coleccion-de-productos-en-la-vitrina-de-la-tienda_7.png)

Es posible definir cada contenido usando colecciones o resultados de búsqueda, usando parámetros de búsqueda (más detalles [aquí](/es/tutorial/como-funciona-a-busca-da-vtex--tutorials_542)).

Los contenidos que deben cumplimentarse **Content** son:
_Content_: nombre que identificará cada conjunto de elementos
_QueryString_: los parámetros ingresados en este campo definen el resultado de la búsqueda que se mostrará en este contenido.

En el campo **Product Cluster (Collection)**, debe seleccionar la colección que se mostrará completando el siguiente paso:

![coleção10](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/storefront/layout/como-incluir-una-coleccion-de-productos-en-la-vitrina-de-la-tienda_8.png)

Los contenidos a rellenar en la parte **Condición de visualización**:
_Partner, Campaign_ y _Source_: definen la visualización de este contenido si el visitante tiene un UTM correspondiente en su URL de origen.
_Keywords_: vincula la visualización del contenido a una búsqueda de términos específicos.
_Category_ y _Brand_: vincula la visualización del contenido en una página de Categoría y/o Marca(s) específica(s).
_Peridos_: define el período en el que el contenido estará activo.

Después de la configuración, marque **Active Content** y agregue a la lista de contenido, guardando todas las configuraciones más adelante.

En el ejemplo abajo tenemos una vitrina estándar, sin condiciones de exhibición y otra exclusiva para las visitas originadas de las audiencias de campañas patrocinadas de Google (utm_source=**google**/utm_medium=**cpc**):

![coleção9](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/storefront/layout/como-incluir-una-coleccion-de-productos-en-la-vitrina-de-la-tienda_9.png)![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/storefront/layout/como-incluir-una-coleccion-de-productos-en-la-vitrina-de-la-tienda_10.png)

En el escenario arriba, si el cliente tiene origen en la audiencia de campaña patrocinada se exhibirán en la vitrina **Lançamentos**, ubicada en la Home, los productos que corresponden al resultado de una búsqueda por la Marca de ID 200000, en caso contrario, se exhibirán los productos de la colección de ID 8.

Siempre que se use más de un contenido activo en el mismo control, se deben ordenar (haciendo clic y arrastrando sus contenidos) de forma tal que el contenido sin condiciones de exhibición siempre quede en la última posición, como arriba.
