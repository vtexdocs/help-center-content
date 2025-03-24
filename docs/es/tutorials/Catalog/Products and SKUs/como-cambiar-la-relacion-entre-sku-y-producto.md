---
title: 'Cómo cambiar la relación entre SKU y Producto'
id: 6LEuMI1YYMYMeIwg606Wce
status: PUBLISHED
createdAt: 2017-07-04T17:56:33.013Z
updatedAt: 2023-03-29T17:49:24.459Z
publishedAt: 2023-03-29T17:49:24.459Z
firstPublishedAt: 2019-01-25T17:31:00.898Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 523NSmHfn2IKEoiy2Q44YS
slugEN: how-to-change-the-sku-and-product-relationship
locale: es
legacySlug: como-cambiar-la-relacion-sku-x-product, como-cambiar-la-relacion-entre-sku-y-producto
subcategoryId: pwxWmUu7T222QyuGogs68
---

Es posible cambiar la relación entre la SKU y el producto en la página de edición de la SKU. Para ello, realice los siguientes pasos.

1. En el Admin VTEX, accede a __Catálogo__, o escribe __Catálogo__ en la barra de búsqueda en la parte superior de la página.
2. Haga clic en **Todos los productos**.
3. En el producto deseado, haga clic en la flecha hacia abajo <i class="fas fa-angle-down"></i> y seleccione __SKU__.
4. En el SKU que desea eliminar del producto, haga clic en `Editar`.
5. En el campo **Nombre del producto** bajo **Selección actual**, haga clic en `Remover` para eliminar el producto actualmente listado.
6. Para relacionar la SKU con otro producto, introduzca el nombre del producto en el campo **Nombre del producto (Id)** y haga clic en el producto deseado. Si lo prefiere, puede hacer clic en `Búsqueda avanzada` para buscar por __Nombre__, __ID__ o __SKU__ el nuevo producto a relacionar. Buscar el producto por __ID__ o __SKU__ será más preciso para los casos en los que exista el mismo valor para __Nombre__ en diferentes productos.
7. Después de encontrar el producto deseado, haga clic en `Agregar`.
8. Haga clic en `Guardar`.

Si lo prefiere, puede realizar esta actualización a través de la API del Catálogo, con la llamada [Update SKU](https://developers.vtex.com/vtex-rest-api/reference/catalog-api-put-sku). No es posible cambiar la relación a través de la plantilla.
