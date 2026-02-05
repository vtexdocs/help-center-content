---
title: 'Configurar categoría similar'
id: tutorials_204
status: PUBLISHED
createdAt: 2017-04-27T22:16:03.892Z
updatedAt: 2025-05-23T23:04:07.864Z
publishedAt: 2025-05-23T23:04:07.864Z
firstPublishedAt: 2017-04-27T23:00:46.323Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_3
slugEN: setting-up-similar-categories
legacySlug: configurando-categoria-similar
locale: es
subcategoryId: 1E7tziZCkY4w8i4EmUuwec
---

En Admin VTEX, puede registrar categorías similares a nivel de producto o de categoría, como será visto a continuación.

> ℹ️ Para registrar la categoría similiar vía Catalog API, utilize el endpoint [Add similar category](https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/product/-productId-/similarcategory/-categoryId-).

## Configurar categoría similar en el producto

En el producto, el ajuste de categoría similar hace que el producto se muestre en la página de la categoría registrada como similar, además de en su categoría original.

Sólo la categoría de producto principal definirá los campos, especificaciones y filtros. Por ejemplo, supongamos que un producto se encuentra en la categoría principal __Cups__ y en la categoría similar __Jars__. Si accede a la categoría __Jars__, no verá el filtro __American Cups__ (que forma parte de la categoría principal __Cups__).

Del mismo modo, si filtra por __Frascos de vidrio__ en la categoría __Frascos__, no verá los vasos de vidrio, ya que es imposible rellenar un campo de categoría similar para un producto de la categoría principal.

Para configurar la categoría similar a nivel de producto, sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Catálogo > Productos y SKUs** o ingresa [Productos y SKUs](/es/docs/tutorials/productos-y-skus) en la barra de búsqueda en la parte superior de la página.
2. Haz clic en la línea de producto deseada, o Haz clic en el menú de tres puntos > `Editar producto`. Si está creando el producto, consulte el artículo [Añadir o editar producto](/es/docs/tutorials/agregar-o-editar-productos).
3. En la sección **Storefront**, rellena el campo **Categorías similares** con las categorías deseadas.
4. Haz clic en `Guardar`.

## Configurar categoría similar en otra categoría

> ⚠️ Esta configuración sólo es compatible con las tiendas que utilizan el [CMS - Portal Legado](/es/docs/tracks/cms-portal-legado).

Al editar una categoría, puede configurar su categoría similar. Cuando complete este tipo de configuración a nivel de categoría, el menú de navegación mostrará un enlace a la categoría similar en el nivel de categoría original.

Para configurar la categoría similar a nivel de categoría, sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Catálogo > Categorías** o ingresa **Categorías** en la barra de búsqueda en la parte superior de la página.
2. Haz clic en `Expandir tudo` para ver todas las opciones y, a continuación, en la categoría deseada.
3. Haz clic en `Acciones`.
4. En esta página, puede eliminar una categoría existente o crear una nueva. Para crear una nueva, haz clic en el botón `Nueva categoría similar`. Serás redirigido a una página y debe hacer clic en `Seleccionar categoría`.
5. Haz clic en `Expandir todas` para ver todas las opciones.
6. Haz clic en la categoría deseada.
7. La nueva ventana se cerrará automáticamente y el campo **Categoría similar** se rellenará con el que usted eligió.
8. Haz clic en `Guardar`.
