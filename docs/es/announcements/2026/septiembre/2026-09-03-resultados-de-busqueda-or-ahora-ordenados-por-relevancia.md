---
title: 'Intelligent Search: los resultados de búsquedas OR ahora se ordenan por relevancia'
slug: '2026-09-03-resultados-de-busqueda-or-ahora-ordenados-por-relevancia'
hidden: false
createdAt: 2026-09-03T00:00:00.000Z
updatedAt: 2026-09-03T00:00:00.000Z
contentType: updates
productTeam: Intelligent Search
slugEN: '2026-09-03-or-search-results-now-ranked-by-relevance'
locale: es
announcementSynopsisES: 'Los resultados de búsquedas OR ahora se ordenan por relevancia para la búsqueda completa, en vez de por el número de palabras coincidentes.'
tags:
  - Optimización
  - Intelligent Search
---

Cuando una búsqueda no encuentra ningún producto que coincida con todos los términos buscados, [Intelligent Search](https://help.vtex.com/es/docs/tutorials/intelligent-search-vision-general) muestra resultados que coinciden con cualquiera de ellos. Este tipo de búsqueda se conoce como búsqueda OR. Ahora, mejoramos la forma en que se ordenan estos resultados.

## ¿Qué cambió?

Las búsquedas OR representan aproximadamente el 5% de todas las búsquedas, alcanzando el 15% en algunas tiendas. Antes, los resultados de las búsquedas OR se ordenaban principalmente según cuántas palabras de la búsqueda coincidían con cada producto, lo que podía hacer que los productos poco relacionados con la búsqueda aparecieran antes que los que el cliente realmente buscaba.

Ahora, los resultados de las búsquedas OR se ordenan ponderando cuántas veces aparece cada palabra encontrada en el producto y si esa palabra es más o menos habitual en el catálogo, en lugar de limitarse a contar cuántas palabras coinciden. Las palabras más raras y distintivas, como el nombre de un producto, pesan más que las palabras comunes, como una unidad de medida, haciendo que los productos más relevantes se muestren primero.

Por ejemplo, si la búsqueda “analgésico paracetamol 50 pastillas” pasa a una búsqueda OR, ahora se priorizan los productos que contienen “paracetamol” frente a otros no relacionados, como “pastillero para 50 comprimidos”, que también coincide con “50” y “comprimidos”.

## ¿Por qué realizamos este cambio?

Este cambio hace que los resultados de las búsquedas OR sean más relevantes para lo que el cliente busca, reduciendo la posibilidad de que aparezcan productos poco relacionados antes que otros que se ajustan mejor a la intención de búsqueda.

## ¿Qué se necesita hacer?

No se requiere ninguna acción. Esta optimización en el orden de los resultados se aplica automáticamente a todas las tiendas que utilizan Intelligent Search.

Para más detalles, consulta:

- [Relevancia](https://help.vtex.com/es/docs/tutorials/intelligent-search-como-funciona-la-relevancia-de-los-resultados-de-busqueda#paso-2-como-intelligent-search-ordena-los-resultados)
- [Comportamiento de búsqueda](https://help.vtex.com/es/docs/tutorials/comportamiento-de-busqueda#resultado-minimo)
