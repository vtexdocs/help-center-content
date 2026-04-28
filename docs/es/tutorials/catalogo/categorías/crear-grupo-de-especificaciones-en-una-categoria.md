---
title: 'Crear grupo de especificaciones en una categoría'
id: tutorials_246
status: PUBLISHED
createdAt: 2017-04-27T22:12:25.134Z
updatedAt: 2022-07-21T19:58:43.545Z
publishedAt: 2022-07-21T19:58:43.545Z
firstPublishedAt: 2017-04-27T23:03:10.600Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_3
slugEN: creating-a-specification-group-in-a-category
legacySlug: criando-grupo-de-categoria
locale: es
subcategoryId: 1E7tziZCkY4w8i4EmUuwec
---

«Grupo» es el nombre que se le da a un conjunto de [especificaciones (campos)](/es/docs/tracks/especificaciones-definicion-de-concepto) relacionadas con los productos o SKU de determinada [categoría](/es/docs/tracks/categorias-definicion-de-concepto).

En VTEX, una especificación siempre forma parte de un grupo de especificaciones que está asociado a una categoría. Es precisamente por esto que, para crear una [especificación de producto](/es/docs/tutorials/registrar-especificaciones-o-campos-de-producto) o una [especificación de SKU](/es/docs/tutorials/registrar-especificaciones-o-campos-de-sku), debe existir, al menos, el registro de una categoría y de un grupo de especificaciones.

En este artículo, te explicamos cómo funciona la herencia de especificaciones y el registro de grupos de especificaciones en el Admin VTEX. Revisa las secciones a continuación:

* [Herencia de especificaciones](#herencia-de-especificaciones)
* [Paso a paso en el Admin VTEX](#paso-a-paso-en-el-admin-vtex)

> ℹ️ Para crear un grupo de especificaciones con la **API Catálogo**, sigue la guía para desarrolladores [How to create a specification](https://developers.vtex.com/vtex-developer-docs/docs/how-to-create-a-specification) (Cómo crear una especificación).

## Herencia de especificaciones

Cuando se crea un grupo dentro de un departamento o categoría, este se replicará en los demás niveles registrados por debajo de ese departamento o categoría, siguiendo la lógica de «herencia». Por lo tanto, si necesitas crear un grupo de especificaciones que se aplique solo a una categoría, debes crear el grupo en el nivel de esa categoría.

Ejemplo: imagina una tienda que opera en el segmento de la moda y que tiene la categoría **Ropa** con el grupo de especificaciones **Características**. Ese grupo puede tener, por ejemplo, un campo de producto llamado **Composición**, con **Algodón** o **Poliéster** como posibles valores y un campo de SKU llamado **Tamaño** con **P**, **M **o **G** como posibles valores.

En la misma tienda del ejemplo anterior, en la categoría **Ropa**, está la subcategoría **Vestidos**, que contiene otro grupo de especificaciones y el campo de producto **Ocasión**, cuyos valores pueden ser **Casual** o **Fiesta**. Los campos de los productos dentro de esa subcategoría y sus respectivos SKU deberán estar completos en el registro.

## Paso a paso en el Admin VTEX

Para crear un grupo de especificaciones, sigue las instrucciones a continuación:

1. En el Admin de VTEX, accede a **Catálogo **> **Categorías**.
2. Haz clic en la categoría en la que deseas crear el grupo.
3. Haz clic en el botón `Acciones` <i class="fas fa-angle-down"></i>.
4. Haz clic en <i class="fas fa-tags"></i> **Grupo**.
5. Haz clic en el botón `Nuevo grupo`.
6. Rellena la siguiente información:
    * **Nombre:** nombre del grupo, para uso interno.
    * **Categoría:** nombre de la categoría en la que estás creando el grupo. Este campo ya está rellenado. Solo debes confirmar el nombre de la categoría.
7. Haz clic en `Guardar`.

Puedes crear los campos que consideres necesarios dentro de un grupo. Los campos creados pueden definirse como filtros en todos los niveles de navegación de tu tienda.

## Más información

* [Categorías - Definición de concepto](/es/docs/tracks/categorias-definicion-de-concepto)
* [Especificaciones de producto y de SKU](/es/docs/tracks/especificaciones-definicion-de-concepto)
* [Registrar especificaciones o campos de producto](/es/docs/tutorials/registrar-especificaciones-o-campos-de-producto)
* [Registrar especificaciones o campos de SKU](/es/docs/tutorials/registrar-especificaciones-o-campos-de-sku)
