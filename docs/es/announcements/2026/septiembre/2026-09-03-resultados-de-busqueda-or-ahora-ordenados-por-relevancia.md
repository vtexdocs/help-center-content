---
title: 'Intelligent Search: resultados de búsqueda OR ahora ordenados por relevancia'
slug: '2026-09-03-resultados-de-busqueda-or-ahora-ordenados-por-relevancia'
hidden: false
createdAt: 2026-09-03T00:00:00.000Z
updatedAt: 2026-09-03T00:00:00.000Z
contentType: updates
productTeam: Intelligent Search
slugEN: '2026-09-03-or-search-results-now-ranked-by-relevance'
locale: es
announcementSynopsisES: 'Los resultados de búsqueda OR ahora se ordenan por relevancia a la búsqueda completa, en lugar de por la cantidad de palabras que coincidieron.'
tags:
  - Mejora
  - Intelligent Search
---

Cuando una búsqueda no encuentra un único producto con todos los términos buscados, [Intelligent Search](https://help.vtex.com/es/docs/tutorials/intelligent-search-vision-general) recurre a resultados que coinciden con cualquiera de las palabras, una "búsqueda OR". Mejoramos la forma en que se ordenan estos resultados de búsqueda OR.

## ¿Qué cambió?

Las búsquedas OR corresponden a cerca del 5% de todas las búsquedas, llegando al 15% en algunas tiendas. Antes, los resultados de búsqueda OR se ordenaban principalmente por la cantidad de palabras que coincidían individualmente, lo que podía colocar productos sin relación con la búsqueda por encima de los que el cliente realmente buscaba.

Ahora, los resultados de búsqueda OR se ordenan ponderando la frecuencia con la que aparece cada palabra encontrada en el producto y cuán rara es esa palabra en el catálogo, en lugar de solo contar cuántas palabras coincidieron. Las palabras más raras y distintivas, como el nombre de un producto, pesan más que las palabras comunes, como una unidad de medida, haciendo que los productos más relevantes aparezcan primero.

Por ejemplo, una búsqueda de "analgésico ibuprofeno 200 comprimidos" que cae a OR ahora prioriza productos con "ibuprofeno", en lugar de ítems sin relación como "organizador 200 comprimidos", que también coincide con "200" y "comprimidos".

## ¿Por qué hicimos este cambio?

Este cambio hace que los resultados de búsqueda OR sean más relevantes para lo que el cliente está buscando realmente, reduciendo la posibilidad de que un producto sin relación con la búsqueda aparezca por encima de uno que coincide mejor con la intención de búsqueda.

## ¿Qué se necesita hacer?

No es necesaria ninguna acción. Esta mejora de ordenación se aplica automáticamente a todas las tiendas que usan Intelligent Search.

Para más detalles, consulta:

* [Relevancia](https://help.vtex.com/es/docs/tutorials/intelligent-search-como-funciona-la-relevancia-de-los-resultados-de-busqueda#etapa-1-como-encuentra-intelligent-search-los-resultados)
* [Comportamiento de búsqueda](https://help.vtex.com/es/docs/tutorials/comportamiento-de-busqueda#resultado-minimo)
