---
title: 'Incluir una colección de productos en la vitrina de la tienda'
id: frequentlyAskedQuestions_589
status: PUBLISHED
createdAt: 2019-01-24T20:45:55.516Z
updatedAt: 2023-03-29T18:05:00.147Z
publishedAt: 2023-03-29T18:05:00.147Z
firstPublishedAt: 2019-01-24T22:12:59.506Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slugEN: how-to-include-a-collection-of-products-in-the-shop-window
locale: es
legacySlug: como-incluir-una-coleccion-de-productos-en-la-vitrina-de-la-tienda
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

>⚠️ **Atención:** existen dos formas de configurar colecciones, mediante el CMS o utilizando el módulo Colecciones Beta. Este artículo se refiere a <a href = "https://help.vtex.com/es/tutorial/registrar-una-coleccion-cms--2YBy6P6X0NFRpkD2ZBxF6L">la configuración de colecciones mediante el CMS</a>.

Las vitrinas se usan en el destaque de productos en diversas páginas. Se pueden usar también para recomendaciones, en la página del producto.

Primero, antes de definir una vitrina, se debe crear una colección (ver instrucciones [aquí](/es/tutorial/criando-colecao-de-produtos "aquí")) con los productos que se exhibirán en ella. Es necesario también que las páginas estén debidamente estructuradas, con los debidos controles insertados en sus templates.

Realizadas las debidas definiciones, se hace el vínculo de la colección con la vitrina en **Storefront > Layout**.

En el ejemplo abajo, vamos a definir la vitrina presentada en la Home. Por lo tanto, seleccione **Settings**, luego **add object**, como en la siguiente imagen.

![coleção2](https://images.ctfassets.net/alneenqid6w5/5JzAgUQ2NU4oIM88Kqm8AW/a4d8c175710d8542dc0099cd16c5168d/cole____o2.png)

Este comando abrirá **Visual Controls**, que corresponden al escaparate en el que desea mostrar la colección. Agregue una _Collection_, pero asegúrese de establecer un nombre para ella.

![coleção3](//images.ctfassets.net/alneenqid6w5/12pUvp3l5u0CcIISmG6g2A/cf86f9d87c6c9ee2e9f1db979d2b2836/cole____o3.png) 

![coleção4](//images.ctfassets.net/alneenqid6w5/6XdqMY2IAoy6ugIK4KcYEk/0491e41c7dda3da46334ab975fe7f2ee/cole____o4.png)

Acuérdese de grabar las configuraciones para que sea posible editar el control creado!

![coleção5](//images.ctfassets.net/alneenqid6w5/3edZaVppl6cuU64yqisaGm/4cb795f99bf6227597d044736a7e0184/cole____o5.png)

![coleção6](//images.ctfassets.net/alneenqid6w5/Zry4UUPxW8Eic6yWmok4C/a997c64b6c59a0f3a3551228a685ff58/cole____o6.png)

Al editar el control es necesario agregar sus contenidos, que representan cada conjunto de ítems que se exhibirán.
Son ellos:
_Layout_: seleccione la plantilla de estante utilizada en la muestra.
_Number of Columns, Number of Items, Show Unavailable_ y _Ramdom ad Paged_: Defina el diseño, la cantidad y los criterios para mostrar los elementos.

![coleção7](//images.ctfassets.net/alneenqid6w5/4A4DMctlIkaaa2OGeAMwSq/a8205c9b1715f46dc9b8feac175de132/cole____o7.png)

Recuerde guardar antes de buscar o cambiar páginas.
El siguiente paso es agregar el contenido seleccionando **Add Content**.
![coleção8](//images.ctfassets.net/alneenqid6w5/ytG3zPwgDY4SQwYWsa6am/27dc5ad87b2f0b25d33b991ab006c7df/cole____o8.png)

Es posible definir cada contenido usando colecciones o resultados de búsqueda, usando parámetros de búsqueda (más detalles [aquí](/es/tutorial/parametros-de-busqueda "aquí"))

Los contenidos que deben cumplimentarse **Content** son:
_Content_: nombre que identificará cada conjunto de elementos
_QueryString_: los parámetros ingresados en este campo definen el resultado de la búsqueda que se mostrará en este contenido.

En el campo **Product Cluster (Collection)**, debe seleccionar la colección que se mostrará completando el siguiente paso:

![coleção10](//images.ctfassets.net/alneenqid6w5/RHE3D2CrkG0qSguGsMS40/aa6db36e948f397ca2b1c0abc4a69be1/cole____o10.png)

Los contenidos a rellenar en la parte **Condición de visualización**:
_Partner, Campaign_ y _Source_: definen la visualización de este contenido si el visitante tiene un UTM correspondiente en su URL de origen.
_Keywords_: vincula la visualización del contenido a una búsqueda de términos específicos.
_Category_ y _Brand_: vincula la visualización del contenido en una página de Categoría y/o Marca(s) específica(s).
_Peridos_: define el período en el que el contenido estará activo.

Después de la configuración, marque **Active Content** y agregue a la lista de contenido, guardando todas las configuraciones más adelante.

En el ejemplo abajo tenemos una vitrina estándar, sin condiciones de exhibición y otra exclusiva para las visitas originadas de las audiencias de campañas patrocinadas de Google (utm_source=**google**/utm_medium=**cpc**):

![coleção9](//images.ctfassets.net/alneenqid6w5/5IoPfaWgUwUsGUuCAmYS6q/ded32f70db90ffb4f3fffd740b35381b/cole____o9.png)![](//images.contentful.com/alneenqid6w5/28YV17bwwUyca6YyMo2Ckk/6d3d464c50b000d4a88c4132881d6236/exemplo_cpc-560x269.png)

En el escenario arriba, si el cliente tiene origen en la audiencia de campaña patrocinada se exhibirán en la vitrina **Lançamentos**, ubicada en la Home, los productos que corresponden al resultado de una búsqueda por la Marca de ID 200000, en caso contrario, se exhibirán los productos de la colección de ID 8.

Siempre que se use más de un contenido activo en el mismo control, se deben ordenar (haciendo clic y arrastrando sus contenidos) de forma tal que el contenido sin condiciones de exhibición siempre quede en la última posición, como arriba.
