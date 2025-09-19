---
title: '¿Cómo funciona el campo Puntuación?'
id: 1BUZC0mBYEEIUgeQYAKcae
status: PUBLISHED
createdAt: 2018-02-16T16:17:51.610Z
updatedAt: 2024-01-05T20:42:03.525Z
publishedAt: 2024-01-05T20:42:03.525Z
firstPublishedAt: 2018-02-16T18:09:11.291Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 1malnhMX0vPThsaJaZMYm2
slugEN: how-does-the-score-field-work
legacySlug: como-funciona-el-campo-score
locale: es
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

El campo **Puntuación**, disponible en los formularios de registro de **Producto**, **Categoría** y **Marca**, es un valor utilizado para ordenar productos en la tienda, que sirve como criterio de desempate al aplicar otros órdenes comunes, tales como menor precio, mejor descuento, entre otros. Al rellenar el campo **Puntuación**, puedes definir la prioridad de unos productos sobre otros, tanto en la vitrina como en la página de resultados de búsqueda.

El criterio para enumerar el campo sigue una ordenación numérica para mostrar la secuencia en la vitrina de la tienda o en la página de resultados de la búsqueda. De manera predeterminada, los productos sin puntuación registrada se comportan como si tuvieran una puntuación de 0.

La puntuación total de un producto se obtiene al sumar su propia puntuación, más las puntuaciones definidas para la categoría y la marca: `puntuación total del producto = puntuación del producto + puntuación de la categoría + puntuación de la marca`.

Recomendamos definir la puntuación a nivel de producto, ya que lo más habitual es que la vitrina cambie constantemente.

La importancia de utilizar la puntuación se evidencia claramente en eventos específicos, cuando es necesario destacar ciertos productos sobre otros para asegurar su visibilidad en la tienda.

## Puntuación en el buscador de VTEX

Si la tienda utiliza el [buscador de VTEX](/es/tutorial/como-funciona-a-busca-da-vtex--tutorials_542), pueden utilizarse los siguientes parámetros para implementar la ordenación por puntuación:

* **Orden ascendente** (productos con puntuación más baja aparecen en primer lugar): `?O=OrderByScoreASC`
* **Orden descendente** (productos con puntuación más alta aparecen en primer lugar): `?O=OrderByScoreDESC`

## Puntuación en VTEX Intelligent Search

Los parámetros `OrderByScoreASC` y `OrderByScoreDESC` no son compatibles con [VTEX Intelligent Search](/es/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb), sino únicamente con el [buscador VTEX](/es/tutorial/como-funciona-a-busca-da-vtex--tutorials_542).

La ordenación directa de productos por la puntuación definida en el campo **Puntuación** no es posible en [VTEX Intelligent Search](/es/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb). Al utilizar uno de los parámetros antes referidos en VTEX Intelligent Search, se genera una ordenación predeterminada, que es por [relevancia](/es/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/1qlObWIib6KqgrfX1FCOXS).

Por otro lado, la puntuación del Catálogo consigue componer la [relevancia](/es/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/1qlObWIib6KqgrfX1FCOXS) en Intelligent Search frente a otros criterios, brindando la posibilidad de asignarle mayor peso e incluso prioridad. A efectos de componer la relevancia, a mayor puntuación, mayor peso; es decir, el comportamiento es decreciente: se priorizan los productos con una puntuación más alta.

Sin tener en cuenta la influencia de otros criterios, o incluso considerando el uso de la ordenación prioritaria, en VTEX Intelligent Search los productos sin ninguna puntuación registrada aparecen después de los productos con puntuación registrada en los resultados de la búsqueda.

Es necesario ponderar si esta práctica sería adecuada para tu caso de uso en relación con otros criterios calculados automáticamente por el sistema, como popularidad y ventas. Al priorizar un criterio, este prevalece sobre todos los demás, incluso alcanzando el mismo objetivo que `OrderByScore`, desestimando los demás ajustes de relevancia.

Para ordenar manualmente los ítems de forma aislada, se recomienda utilizar [Reglas de merchandising](/es/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/5tBSYXb9EIdePa0MWTnFd0), evitando efectos no deseados y respetando la configuración de relevancia.

## Editar la puntuación de un producto

Para agregar o modificar la puntuación de un producto, sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Catálogo > Productos y SKUs**.
2. Haz clic en Agregar producto para crear un nuevo producto o bien en Editar producto, en las opciones del producto que deseas editar.
3. Introduce el valor deseado en el campo **Puntuación (utilizado para ordenar la búsqueda)**.
