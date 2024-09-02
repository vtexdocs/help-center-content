---
title: 'Configurar Categoría Similar'
id: tutorials_204
status: PUBLISHED
createdAt: 2017-04-27T22:16:03.892Z
updatedAt: 2024-08-08T19:19:13.231Z
publishedAt: 2024-08-08T19:19:13.231Z
firstPublishedAt: 2017-04-27T23:00:46.323Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_3
slug: configurando-categoria-similar
locale: es
legacySlug: configurando-categoria-similar
subcategory: 1E7tziZCkY4w8i4EmUuwec
---

En VTEX Admin, puede registrar Categorías Similares a nivel de [producto](#categoría-similar-en-el-producto) o a nivel de [categoría](#categoría-similar-en-otra-categoría). También es posible realizar el registro utilizando la [API de Catálogo](https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/product/-productId-/similarcategory/-categoryId-).

## Categoría Similar en el Producto

>⚠️ Esta configuración sólo es compatible con las tiendas que utilizan el [CMS - Portal Legado](https://help.vtex.com/es/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/1oN446gRGcR2s70RvBCAmj).

En el Producto, el ajuste de categoría similar hace que el producto se muestre en la página de la categoría registrada como similar, además de en su categoría original.

La configuración paso a paso es la siguiente:

1. En VTEX Admin, acceda al __Catálogo__.
2. Haga clic en __Productos y SKUs__. Usted será redirigido a la página con el listado de productos.
3. En el producto que desea incluir en una categoría similar, haga clic en la flecha situada junto al botón `Cambiar`. Aparecerá un menú.
4. Haga clic en la opción __Categoría Similar__. Se abrirá una página con el listado de las categorías similares a aquel producto. En esta página, puede eliminar una categoría existente o crear una nueva.
5. Para crear una nueva categoría, haga clic en `Nueva Categoría Similar`.
6. Haga clic en el botón `Seleccionar Categoría`. Al hacerlo, una nueva ventana se abrirá con la lista de todas las categorías.
7. Haga clic en `Expandir Todas` para ver todas las opciones y, a continuación, haga clic en la categoría deseada.
   La nueva ventana se cerrará automáticamente y el campo __Categoría Similar__ se llenará con el que usted eligió.
9. Haga clic en `Guardar`.

Sólo la categoría de producto principal definirá los campos, especificaciones y filtros. Por ejemplo, supongamos que un producto se encuentra en la categoría principal __Cups__ y en la categoría similar __Jars__. Si accede a la categoría __Jars__, no verá el filtro __American Cups__ (que forma parte de la categoría principal __Cups__).

Del mismo modo, si filtra por __Frascos de vidrio__ en la categoría __Frascos__, no verá los vasos de vidrio, ya que es imposible rellenar un campo de categoría similar para un producto de la categoría principal.

## Categoría Similar en otra categoría

Al editar una categoría, puede configurar su categoría similar. Cuando complete este tipo de configuración a nivel de categoría, el menú de navegación mostrará un enlace a la categoría similar en el nivel de categoría original.

1. En el VTEX Admin, acceda al módulo __Catálogo__.
2. Haga clic en __Categorías__.
3. Haga clic en `Expandir tudo` para ver todas las opciones y, a continuación, en la categoría deseada.
4. Haga clic en el botón `Acciones`.
5. En esta página, puede eliminar una categoría existente o crear una nueva. Para crear una nueva, haga clic en el botón __Nueva Categoría Similar__.
6. Usted será redirigido a una página y debe hacer clic en el botón __Seleccionar Categoría__.
7. Al hacer esto, una nueva ventana se abrirá con la lista de todas las categorías. Haga clic en __Expandir Todas__ para ver todas las opciones. Luego, haga clic en la categoría deseada.
8. La nueva ventana se cerrará automáticamente y el campo __Categoría Similar__ se rellenará con el que usted eligió.
9. Haga clic en el botón __Guardar__.

Pero __atención__: solo la categoría principal del producto dará las definiciones de campos, especificaciones y filtros.

Digamos, por ejemplo, que un producto está en la categoría principal __Vasos__ y en la categoría similar __Jarras__. Si accede a la categoría __Jarras__, no verá el filtro __Vasos americanos__ (que forma parte de la categoría principal __Vasos__).

Del mismo modo, si se filtra por __Jarras de vidrio__ en la categoría __Jarras__, no se verán los vasos de vidrio, ya que es imposible rellenar un campo de la categoría similar para un producto de la categoría principal.

## Categoría Similar en Categoría

En la configuración de la categoría es posible configurar su categoría similar. Esa configuración permite exhibir en el menú de navegación, un __enlace__ para esta Categoría Similar. Es decir, en este tipo de configuración, apenas aparecerá un enlace de la categoría similar en la categoría principal (la categoría configurada).

El procedimiento para configurar es el siguiente:

1. Acceda al módulo __Catálogo__.
2. Haga clic en __Categorías__.
3. Haga clic en `Expandir Todas` para ver todas las opciones. Luego, haga clic en la categoría deseada.
4. Haga clic en el botón `Acciones`.
5. Haga clic en la opción `Incluir Similar`. Se abrirá una lista de categorías similares a aquella categoría.
6. Haga clic en el botón `Nueva Categoría Similar`.
7. Haga clic en el botón `Seleccionar Categoría`.  Al hacerlo, se abrirá una nueva ventana con la lista de todas las categorías.
8. Haga clic en `Expandir Todas` para ver todas las opciones y, a continuación, haga clic en la categoría deseada.
9. Haga clic en el botón `Guardar`.

## API

Para añadir una Categoría Similar por API, utilice el endpoint [Create Similar Product Category](https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/product/-productId-/similarcategory/-categoryId-).
