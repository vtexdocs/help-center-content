---
title: "Priorización por 'palabra clave' del producto sin tener en cuenta las 'stopwords"
id: 55S7nFg61dAyCeGQCIw6aK
status: PUBLISHED
createdAt: 2024-05-30T22:05:25.328Z
updatedAt: 2024-05-30T22:05:26.335Z
publishedAt: 2024-05-30T22:05:26.335Z
firstPublishedAt: 2024-05-30T22:05:26.335Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slug: priorizacion-por-palabra-clave-del-producto-sin-tener-en-cuenta-las-stopwords
locale: es
kiStatus: Backlog
internalReference: 1041743
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Los productos pueden ser priorizados en los resultados de búsqueda por su "palabra clave", una palabra del nombre del producto establecida como relevante por un algoritmo. Las palabras clave son términos de búsqueda filtrados de los términos originales porque no son significativos para la búsqueda.

Si la palabra clave de un producto es una "stopword", este producto puede perder prioridad en los resultados de búsqueda.


##

## Simulación



- Un producto con el nombre "La vida en el océano" tendrá "la" como palabra clave.
- Considerando una tienda en español, una búsqueda de este nombre de producto se hará efectivamente como "vida el oceano" después de eliminar las stopwords.
- Los productos con "vida" como palabra clave tendrán prioridad sobre el producto buscado.


##

## Workaround


N/A

