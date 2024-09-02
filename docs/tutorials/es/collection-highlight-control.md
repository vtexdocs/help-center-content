---
title: 'Control de destaque de colección'
id: 1tGdb2ndjqy6yWsk2YwKMu
status: PUBLISHED
createdAt: 2018-02-21T19:12:49.216Z
updatedAt: 2023-06-22T17:42:41.479Z
publishedAt: 2023-06-22T17:42:41.479Z
firstPublishedAt: 2018-02-21T20:51:49.939Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_24
slug: control-de-destaque-de-coleccion
locale: es
legacySlug: control-de-destaque-de-coleccion
subcategory: 2g6LxtasS4iSeGEqeYUuGW
---

>⚠️ **Atención:** existen dos formas de configurar colecciones, mediante el CMS o utilizando el módulo Colecciones Beta. Este artículo se refiere a <a href = "https://help.vtex.com/es/tutorial/registrar-una-coleccion-cms--2YBy6P6X0NFRpkD2ZBxF6L">la configuración de colecciones mediante el Portal CMS Legado</a>.

El control `<vtex.cmc:HightLight/>` (para páginas de producto) o `$product.HightLight` (para estantes) renderiza un elemento HTML con una clase específica en el contexto de los productos que forman parte de una colección marcada con la flag __Highlight__.

En primer lugar, vamos a ver dónde se encuentra la flag Highlight:

1. En el Admin VTEX, accede a __Storefront__ > __Layout__.
2. Haga clic en la carpeta __CMS__ y luego en la carpeta __Product Clusters (Collections)__.
3. Haga clic en una colección.
4. Marque la flag __Highlight__, que se encuentra en la pantalla de la colección, y haga clic en __Save Product Cluster__.

![CollectionHighlightFlag](https://images.contentful.com/alneenqid6w5/4ced6Gcbeg662KewckyQka/77aaef77fc87cf8112f759c867a6bd4b/CollectionHighlightFlag.png)

Al marcar la flag, usted informa al sistema que siempre que el control de destaque se utilice en el template de una página, los productos mostrados en esa página que formen parte de la colección deben aparecer con el elemento HTML abajo, donde en lugar de `{nombreDeLaColeccion}` aparece el nombre de la colección registrada en el CMS:

`<p class="flag {nombreDeLaColeccion}">{nombreDeLaColeccion}</p>`

Usted puede, entonces, personalizar el CSS para definir de qué manera la clase `flag {nombreDeLaColeccion}` afectará la visualización de los productos.

Esta feature se puede utilizar, por ejemplo, para hacer que los productos de una colección llamada "Lanzamiento" aparezcan siempre con una flag que señala que son novedad en la tienda. Al agregar el control en el template de la página de categoría, por ejemplo, todos los productos de la colección Lanzamiento que aparecen en una página de categoría se mostrarán con este destaque.

>⚠️ Recuerde que si la página es de producto, el control que se debe utilizar es el `&lt;vtex.cmc:HightLight/&gt;`. Si es una página de vitrina, usted debe utilizar el `$product.HightLight`.
