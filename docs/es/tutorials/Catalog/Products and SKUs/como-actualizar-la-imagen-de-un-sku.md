---
title: '¿Cómo actualizar la imagen de un SKU?'
id: 5PMb54FnvUuWOq2qGyAosu
status: PUBLISHED
createdAt: 2018-01-24T17:56:32.670Z
updatedAt: 2023-03-24T13:55:22.775Z
publishedAt: 2023-03-24T13:55:22.775Z
firstPublishedAt: 2018-01-25T19:29:50.366Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_59
slugEN: how-to-update-the-image-of-an-sku
locale: es
legacySlug: como-actualizar-la-imagen-de-un-sku
subcategoryId: pwxWmUu7T222QyuGogs68
---

Usted puede actualizar una imagen de SKU de dos formas: en el Admin VTEX ou por la Catalog API.

<div class = "alert alert-danger">
Este es un procedimiento que se debe realizar con mucho cuidado. El procedimiento que se describe a continuación implica la exclusión de todas las imágenes de un SKU, lo que lo volverá <strong>INACTIVO</strong>. Manténgase atento a las recomendaciones de los siguientes pasos para que la actualización de las imágenes se realice con éxito.
</div>

Como este procedimiento implica la exclusión de todas las imágenes de un SKU y lo vuelve inactivo, recomendamos que el proceso de sustitución de imágenes se realice en pequeños lotes de SKUs.

## Por el Admin

### Borrar las imágenes

1. Acceda al módulo __Catálogo__.
2. Haga clic en __Productos y SKUs__.
3. Haga clic en el SKU deseado.
4. Haga clic en la pestaña __Imágenes__.
5. Seleccione las imágenes que desea borrar y haga clic en __Retirar__. Recuerde que al borrar todas las imágenes de un SKU este quedará inactivo.

<div class = "alert alert-danger">
Recomendamos que estas actualizaciones de imágenes se realicen en pequeños lotes. Recuerde que, al borrar todas las imágenes de un SKU, este quedará inactivo.
</div>

### Subir las nuevas imágenes

1. En la misma pantalla, haga clic en __Insertar__.
2. Seleccione la imagen deseada.
3. Complete los campos __Texto__ y __Label__.
4. Haga clic en __Enviar__.

### Activar SKU

1. En la pestaña __SKU__, marque la opción __Activar SKU si es posible__.
2. Haga clic en __Guardar__.

¡Listo! Ahora su producto entrará en la [fila de indexación](/es/tutorial/entendiendo-el-funcionamento-de-la-indexacion). Después de ser indexado, el SKU se mostrará con las nuevas imágenes.

## Por API

Utilice el endpoint [Update SKU File](https://developers.vtex.com/vtex-developer-docs/reference/catalog-api-sku-file#catalog-api-put-sku-file).

