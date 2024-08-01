---
title: 'La actualización de archivos SKU no actualiza las etiquetas de versión ?v'
id: 5Uw2VIBtTNDY3Ha5WDzGXJ
status: PUBLISHED
createdAt: 2023-06-29T14:37:56.437Z
updatedAt: 2024-07-01T18:49:06.220Z
publishedAt: 2024-07-01T18:49:06.220Z
firstPublishedAt: 2023-06-29T14:37:57.352Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: la-actualizacion-de-archivos-sku-no-actualiza-las-etiquetas-de-version-v
locale: es
kiStatus: No Fix
internalReference: 852869
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Actualmente, cuando un archivo de imagen SKU se actualiza a través de la API para estar en la misma posición que uno anterior, su etiqueta de versión (?v=) en la página del producto no se actualiza correctamente.


##

## Simulación




- Para un sku que ya tiene archivos en él, intente actualizar una imagen a una nueva.
- Para que el usuario y/o los sistemas interpreten correctamente el archivo que se está cambiando, la etiqueta de versión (?v=) bajo la imagen href en el HTML de la página del producto debería actualizarse.
- Sin embargo, esto no ocurre cuando se utiliza esta API para realizar dichas actualizaciones.





## Workaround


Borrar todos los archivos SKU y reinsertarlos desde cero obliga a actualizarlo.

O

Un borrado del indexador fuerza la actualización.

