---
title: '¿Cómo funciona el campo Score?'
id: 1BUZC0mBYEEIUgeQYAKcae
status: PUBLISHED
createdAt: 2018-02-16T16:17:51.610Z
updatedAt: 2023-03-27T13:32:27.264Z
publishedAt: 2023-03-27T13:32:27.264Z
firstPublishedAt: 2018-02-16T18:09:11.291Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 7FpKZ0rc6k4WqeymES80cw
slug: como-funciona-el-campo-score
locale: es
legacySlug: como-funciona-el-campo-score
subcategory: 2g6LxtasS4iSeGEqeYUuGW
---

El campo __Score__, disponible en los registros de Producto, Categoría y Marca, es el valor que se utiliza para asegurar la ordenación de los productos en tu tienda y también como criterio de desempate para otras ordenaciones, como el precio más bajo, el mejor descuento, etc. Rellenando este campo, puedes definir la prioridad de unos productos respecto a otros, tanto en la vitrina como en la página de resultados de la búsqueda.

El criterio de enumeración del campo sigue una ordenación sencilla (1, 2, 3, 4...) y solo hay que seguirlo para mostrar la secuencia en la vitrina de la tienda o en la página de resultados de la búsqueda. 

Sin embargo, cuando se trata del Score del producto, es importante saber que consiste en la suma de su propio score con los de la categoría y la marca. Es decir: `Score del producto + Score de la categoría + Score de la marca`.

Puedes utilizar los siguientes parámetros para implementar la ordenación:

- __Orden ascendente:__ `?O=OrderByScoreASC`
- __Orden descendente:__ `?O=OrderByScoreDESC`

Lo más apropiado es que ingreses el score del producto uno a uno, ya que probablemente tu vitrina cambie con frecuencia.

Un buen ejemplo para el uso del Score es en eventos puntuales, cuando tu tienda necesita colocar determinados productos delante de otros para garantizar su visualización.

Para añadir o cambiar un score relacionado con un producto, sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Catalog > Productos y Skus**.
2. Haz clic en `Agregar producto` para crear un nuevo producto o en `Cambiar` en el producto que deseas editar.
3. Introduce el valor del score deseado en el campo **Score (utilizado para la ordenación de la búsqueda)**.

