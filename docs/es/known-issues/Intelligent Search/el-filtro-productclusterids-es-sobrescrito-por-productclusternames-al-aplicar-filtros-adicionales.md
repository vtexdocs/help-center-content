---
title: 'El filtro "productClusterIds" es sobrescrito por "productClusterNames" al aplicar filtros adicionales'
id: 3d4BIZQBZgeK3eKwT8B1PZ
status: PUBLISHED
createdAt: 2023-09-13T22:42:57.138Z
updatedAt: 2023-09-21T18:04:57.946Z
publishedAt: 2023-09-21T18:04:57.946Z
firstPublishedAt: 2023-09-13T22:42:57.682Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: el-filtro-productclusterids-es-sobrescrito-por-productclusternames-al-aplicar-filtros-adicionales
locale: es
kiStatus: Backlog
internalReference: 899508
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cuando se inicia una búsqueda desde el filtro "productClusterIds", al aplicar cualquier filtro adicional se convertirá en "productClusterNames", perdiendo la característica de presentar los ítems con la ordenación definida manualmente en la colección de productos.


##

## Simulación


El escenario se puede ver en cualquier página, como `"store.com/111?map=productClusterIds"`, y aplicando cualquier filtro adicional, como una categoría, especificación, etc.

El usuario será dirigido a `"store.com/clothing/special-sale?initialMap=productClusterIds&initialQuery=111&map=category,productclusternames"`.



## Workaround


No hay ninguna solución para el problema específico si necesita la clasificación especial, pero asegúrese de utilizar "productClusterIds" sólo en los casos necesarios. De lo contrario, utilice el filtro como "productClusterNames".




