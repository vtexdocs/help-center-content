---
title: 'Actualización de la cantidad de ítems en stock'
id: 2MDwYV1COA6YuoiY22AyGo
status: PUBLISHED
createdAt: 2017-08-01T14:43:39.074Z
updatedAt: 2023-03-31T00:56:34.367Z
publishedAt: 2023-03-31T00:56:34.367Z
firstPublishedAt: 2017-08-01T15:02:40.977Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slugEN: updating-the-quantity-of-items-in-inventory
legacySlug: como-actualizar-inventario, actualizar-la-cantidad-de-skus-en-inventario
locale: es
subcategoryId: 3PQwnyOcNyYgawy06oe6gE
---

La actualización de los ítems en _[stock](/es/tutorial/almacen--6oIxvsVDTtGpO7y6zwhGpb)_ se produce cuando la tienda modifica, hacia arriba o hacia abajo, la cantidad de unidades de un SKU. Esta actualización se realiza a través del **_[stock](/es/tutorial/gestionar-items-en-inventario--tutorials_139)_** en la plataforma VTEX.

Existen tres formas de realizar la actualización de los ítems en _stock_:

* **A través de la API:** utilizando la [API Update inventory by SKU and warehouse](https://developers.vtex.com/docs/api-reference/logistics-api#put-/api/logistics/pvt/inventory/skus/-skuId-/warehouses/-warehouseId-).
* **En el Admin, mediante una plantilla:** utilizando la plantilla de _stock_ generada pela plataforma VTEX. Debes exportar la plantilla y luego importarla cuando esté completada. Esta opción permite actualizar los datos de forma masiva. Obtén más información en el artículo [Importar y exportar plantilla de stock](/es/tutorial/importando-y-exportando-plantilla-de-stock--tutorials_2034).
* **En el Admin, manualmente:** actualizando manualmente un SKU a la vez, según las instrucciones a continuación.

Es importante señalar que la actualización del _stock_ se produce si hay alguna diferencia en la nueva cantidad de ítems. Para que se actualice el _stock_, en el Admin o a través de la API, la cantidad de ítems después del cambio debe ser diferente de la cantidad de ítems disponibles en el momento. La plataforma también acepta la actualización cuando el _stock_ tiene una [reserva reconocida](/es/tutorial/como-se-maneja-la-reserva--tutorials_92#reserva-reconocida), incluso cuando la cantidad de ítems disponibles es la misma que la actualización.

Para actualizar los ítems del _stock_ en el Admin de forma manual, sigue los pasos a continuación.

1. En el Admin VTEX, accede a **Catálogo > Stock > Gestión del stock**, o escribe *Gestión del stock* en la barra de búsqueda en la parte superior de la página.  
2. Busca un producto en la barra de búsqueda o combina filtros para encontrar los ítems que deseas. Obtén más información sobre cómo utilizar los filtros en el artículo [Gestión del stock](/es/tutorial/gestionar-items-en-inventario--tutorials_139).  
3. Introduce la cantidad actualizada en el campo `Actualizar recuento`.   
4. Se mostrará una vista previa de la actualización. Comprueba el recuento. 
5. Haz clic en el botón `Guardar`.

Para que los SKU estén disponibles, incluye las unidades disponibles de cada SKU para cada stock correspondiente. Además, la actualización debe corresponder a la cantidad de ítems disponibles en tu _stock_. De esta manera, te aseguras de que los SKU disponibles en tu tienda están realmente disponibles para su envío. 

Un pedido puede tener una reserva de SKU activa. Si el producto no ha sido enviado, solo se considerará como un **ítem reservado**. Obtén más información sobre [pedidos facturados y reservas](/es/faq/por-que-meu-pedido-foi-faturado-e-o-produto-continua-reservado). Los pedidos con SKU reservados seguirán apareciendo como reservados y no estarán disponibles para la venta. Obtén más información sobre [como se maneja la reserva](/es/tutorial/como-se-maneja-la-reserva--tutorials_92).

## Stock negativo

Puede haber un número negativo de SKU en el _stock_. Si hay un número negativo en la columna **Disponible** de la página **Gestión del _stock_**, significa que el _stock_ del ítem es negativo, es decir, hay más ítems reservados que la cantidad total introducida en el inventario.

_Unidades disponibles = unidades de la última actualización - unidades reservadas_

El stock negativo suele producirse cuando se cancela el SKU de un pedido que ya tiene una reserva.  Para evitar esta situación, es importante que la actualización de la cantidad de SKU se realice en pedidos con _status_ posterior a `Preparando entrega`. De este modo, la [reserva ya habrá sido reconocida](/es/tutorial/como-se-maneja-la-reserva--tutorials_92#reserva-reconocida) y no habrá conflicto entre los ítems en stock y los ítems que realmente están disponibles para la venta.

![gerenciar inventarioES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/envío/inventario/actualization-de-la-cantidad-de-items-en-stock_1.gif)

## Artículos relacionados

* [Gestión del stock](#heading=h.8a4z5831hhcl)
* [Como se maneja la reserva](/es/tutorial/como-se-maneja-la-reserva--tutorials_92)
