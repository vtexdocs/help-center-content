---
title: 'Filtrar datos en el Master Data'
id: tutorials_778
status: PUBLISHED
createdAt: 2017-04-27T21:58:11.041Z
updatedAt: 2024-06-27T00:07:07.554Z
publishedAt: 2024-06-27T00:07:07.554Z
firstPublishedAt: 2017-04-27T23:03:42.905Z
contentType: tutorial
productTeam: Master Data
author: authors_3
slug: filtrar-datos-en-el-master-data
locale: es
legacySlug: filtrar-datos-en-el-master-data
subcategory: WpbGhubuRZaNZilJSXnqu
---

En Master Data puedes crear filtros tanto para el acceso vía API como para la vista en los formularios. La creación de filtros facilita la búsqueda y consulta de datos, proporcionando un mayor control sobre los mismos.

La creación de filtros debe configurarse primero en la entidad de datos y después en el formulario deseado, según los pasos descritos en las secciones a continuación.

## Requisitos para filtros

Sigue las recomendaciones a continuación para definir campos de filtros:

- No utilices campos de tipo **CEP**, **Text** y **File** como filtros.
- Agrega como filtro un campo que contenga pocas opciones disponibles para rellenar, como "Categoría", por ejemplo.

## Configurar filtro en la entidad de datos

Sigue los pasos a continuación para definir un campo existente como filtro en la entidad de datos:

1. En el Admin VTEX, accede a **Configuración de la tienda** > **Storefront** > **Master Data**.
2. En Master Data, haz clic en el engranaje situado <i class="fas fa-cog"></i> junto al nombre de una aplicación.
3. Haz clic en **Estructura de datos**.
4. Accede a la pestaña **Entidades de datos**.
5. Haz clic en el botón de editar <i class="fas fa-edit"></i> sobre la entidad en la que deseas configurar el filtro.

   Serás redirigido a la lista de campos de la entidad.
6. Haz clic en el botón con el símbolo de engranaje <i class="fas fa-cog"></i> en el campo que deseas configurar como filtro.
7. Marca la casilla **¿Es filtrable?**.
8. Haz clic en el botón `Guardar`.
9. En la lista de entidades, haz clic en el botón de publicar <i class="fas fa-save"></i> para publicar la entidad.
10. Haz clic en el botón de reindexar <i class="fas fa-expand-arrows-alt"></i> para indexar la entidad.

## Configurar filtros en el formulario

Sigue los pasos a continuación para configurar filtros en el formulario:

1. En el Admin VTEX, accede a **Configuración de la tienda** > **Storefront** > **Master Data**.
2. En la aplicación donde se encuentra el formulario en el que deseas crear el filtro, haz clic en el símbolo del engranaje <i class="fas fa-cog"></i>.

   Serás redirigido a la lista de formularios de la aplicación.
3. Haz clic en el botón de editar <i class="fas fa-edit"></i> en la fila del formulario que deseas editar.
4. Rellena el campo **Filtros** con el nombre interno del campo marcado como filtro. El nombre interno corresponde al valor del primer campo al crear y editar la entidad de datos, y no se puede modificar. Para ingresar más de un valor solo hay que separarlos con una coma, sin espacio.
5. Haz clic en el botón `Guardar`.

## Filtrar registros del formulario

Una vez creado el filtro ya puede utilizarse en el formulario. Para hacerlo, sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Configuración de la tienda** > **Storefront** > **Master Data**.
2. En la aplicación deseada, identifica el formulario que deseas ver y haz clic en el ícono de lista <i class="fas fa-bars"></i>.

   Serás redirigido a la lista de registros del formulario. En lado izquierdo verás los filtros configurados. 
3. Para filtrar, selecciona el nombre del filtro y su valor, y haz clic en `Filtrar`.

   Puedes filtrar por varios campos a la vez y por varios valores en el mismo campo. Para eliminar un filtro, basta con hacer clic en la `X` situada junto al valor.

