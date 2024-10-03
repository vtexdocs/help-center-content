---
title: 'Divergencia de inventario - La logística maneja el cero a la izquierda como otra SKU'
id: 3FKaDXw5pWVyUfwgKo6pfV
status: PUBLISHED
createdAt: 2022-05-18T15:19:00.037Z
updatedAt: 2022-11-25T21:58:49.907Z
publishedAt: 2022-11-25T21:58:49.907Z
firstPublishedAt: 2022-05-18T15:19:00.350Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: inventory-divergence-logistics-handle-zero-on-left-as-another-sku
locale: es
kiStatus: Fixed
internalReference: 427610
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.



Los ID de SKU con y sin el cero a la izquierda están causando confusión en el inventario, e inconsistencia en la administración. La SKU 0XXX tiene cantidades diferentes en la lista de artículos que cuando se aplica el filtro de ID de SKU con el mismo valor (o XXX).

El módulo de logística maneja el cero izquierdo como otro SKU. Así que en ese caso la SKU 0XXX no es la XXX. Y como otro SKU tiene su propio valor en stock.




## Simulación


No hay manera de simular.
Pero usted puede ver el sku con la izquierda cero en la lista y los valores diferentes de la acción cuando el filtro que sku en el inventario.



## Workaround


No hay ninguna solución para esta divergencia.

