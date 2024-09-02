---
title: 'Las promociones dan lugar a una clasificación/filtrado erróneo por precio o descuento'
id: 1qGJByINC3S7ibgiQccVcY
status: PUBLISHED
createdAt: 2023-08-28T17:51:44.627Z
updatedAt: 2023-11-10T18:19:30.796Z
publishedAt: 2023-11-10T18:19:30.796Z
firstPublishedAt: 2023-08-28T17:55:21.450Z
contentType: knownIssue
productTeam: Intelligent Search
author: authors_84
tag: Intelligent Search
slug: las-promociones-dan-lugar-a-una-clasificacion-filtrado-erroneo-por-precio-o
locale: es
kiStatus: Backlog
internalReference: 888304
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>

Las listas de productos y los resultados de búsqueda pueden estar mal ordenados/filtrados al utilizar la ordenación o el filtrado por precio o descuento si hay precios de artículos obsoletos a nivel de índice, incluso si el escaparate muestra el precio correcto.

La ordenación de los productos se basa siempre en la información indexada previamente (datos fríos), mientras que el escaparate suele recalcular toda la información en tiempo de ejecución (datos calientes), por lo que los precios presentados son siempre correctos en relación con el carrito.

Se espera que cada cambio de precio (e incluso otros cambios) haga que los artículos se vuelvan a indexar para que el índice esté actualizado con las nuevas condiciones. El problema es que el módulo de Promociones no soporta el envío de notificaciones al servicio de indexación cuando una promoción comienza o termina, lo que ocasionalmente resulta en precios de artículos desactualizados, donde el módulo de Búsqueda no es capaz de ordenar/filtrar los artículos correctamente en comparación con los precios en tiempo real.

Cualquier acción que reindexe las condiciones comerciales del artículo (como cambios de stock) también actualizará orgánicamente su precio teniendo en cuenta la promoción, enmascarando finalmente el problema para algunos artículos.

Las tiendas que utilicen `simulationBehavior=skip` no verán divergencias entre la clasificación de artículos y los filtros aplicados en el PLP, ya que este parámetro hace que se representen los "datos fríos" allí, pero aparecerán al comparar el mismo artículo en el PLP con su PDP, que funciona de forma fija como un `simulationBehavior=default`, recuperando información actualizada en tiempo de ejecución.

## Simulación

La forma más fácil de ver los efectos de este problema es tener una lista de productos ordenados por precio más bajo, crear una promoción para un producto en el medio de la lista, y ver que su ordenación no cambia después de activar la promoción, incluso cuando se vuelve más barato que otros productos.

## Workaround

N/A

