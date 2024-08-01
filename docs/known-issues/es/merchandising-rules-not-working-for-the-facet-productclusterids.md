---
title: 'Las reglas de comercialización no funcionan para la faceta "productClusterIds".'
id: 6sLODMgjuoyJD52uc0DBW1
status: PUBLISHED
createdAt: 2024-07-09T00:02:40.930Z
updatedAt: 2024-07-09T00:02:41.798Z
publishedAt: 2024-07-09T00:02:41.798Z
firstPublishedAt: 2024-07-09T00:02:41.798Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slug: las-reglas-de-comercializacion-no-funcionan-para-la-faceta-productclusterids
locale: es
kiStatus: Backlog
internalReference: 1062457
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Las reglas de merchandising no se aplican a la faceta "productClusterIds". Esto ocurre porque esta faceta tiene el comportamiento especial de ordenar los productos por el orden de colección en lugar de por relevancia y reglas de merchandising.

Esta faceta no debe considerarse válida para una regla de merchandising.



## Simulación



- crear una colección con algunos productos en un orden específico
- crear una regla comercial filtrada explícitamente por "productClusterIds" o "productClusterSearchableIds"
- establecer esta regla para ordenar los productos en un orden diferente
- comprobar en la tienda que los productos mantendrán la ordenación de la colección



## Workaround


La forma esperada de gestionar y ordenar los productos de una colección es hacerlo directamente en la colección añadiendo/eliminando productos o cambiando su posición.

También es posible aplicar la regla de ordenación a la faceta "productClusterNames" en su lugar. Esta faceta sigue las reglas de relevancia en lugar del orden de la colección y funciona con las reglas de merchandising.




