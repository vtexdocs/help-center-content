---
title: Incoherencia al buscar facetas que contienen resultados con valores de especificación grandes.
id: 4taz7hmgvjn3hqWyyjxiKz
status: PUBLISHED
createdAt: 2023-05-11T17:42:06.008Z
updatedAt: 2023-05-11T17:42:06.506Z
publishedAt: 2023-05-11T17:42:06.506Z
firstPublishedAt: 2023-05-11T17:42:06.506Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: incoherencia-al-buscar-facetas-que-contienen-resultados-con-valores-de-especificacion-grandes
kiStatus: Backlog
internalReference: 824198
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


La API de facetas tiene un campo specificationFilters y este campo puede romper el retorno de la API cuando los valores registrados en cualquier especificación de esa categoría son demasiado grandes


##

## Simulación



- En una categoría, cree un campo Texto grande
- Añade en el producto un valor grande
- Guarda el producto y espera a que se indexe
- Llama a la API de Facets y comprueba que no devuelve ningún resultado



## Workaround


Ajuste el tamaño de los valores




