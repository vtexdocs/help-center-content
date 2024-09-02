---
title: 'Priorización innecesaria de los resultados de búsqueda por diacríticos en portugués'
id: 3lbgwHFc9RLusAnZnvnE1H
status: PUBLISHED
createdAt: 2024-05-07T15:24:18.404Z
updatedAt: 2024-05-07T16:55:01.818Z
publishedAt: 2024-05-07T16:55:01.818Z
firstPublishedAt: 2024-05-07T15:24:19.224Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slug: priorizacion-innecesaria-de-los-resultados-de-busqueda-por-diacriticos-en-portugues
locale: es
kiStatus: Backlog
internalReference: 1028763
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


La Búsqueda Inteligente prioriza los resultados que tienen una coincidencia exacta, teniendo en cuenta los diacríticos del término buscado y los productos.

En algunos idiomas, pueden generar palabras completamente diferentes, pero para otros, esto no es lo suficientemente importante o puede estar relacionado con errores tipográficos frecuentes.

En portugués, diacríticos como el acento agudo, el acento circunflejo y la tilde entran en este supuesto. Un producto o un término de búsqueda al que le falte el diacrítico dará prioridad a unos productos sobre otros en función de cómo estén registrados. Para esta lengua, se espera la normalización.


##

## Simulación


En una tienda portuguesa, la búsqueda de "tenis" presentará primero los productos con "tenis" (coincidencia exacta con diacríticos) y sólo después los resultados con "tênis" (coincidencia exacta ignorando los diacríticos).



## Workaround


Se recomienda que el catálogo de productos mantenga siempre la misma escritura para sus productos. Si no es el caso, un sinónimo puede ayudar a mantener los términos equivalentes.

