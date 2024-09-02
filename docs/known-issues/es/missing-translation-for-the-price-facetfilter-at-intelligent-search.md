---
title: 'Falta la traducción de la faceta/filtro de precios en la Búsqueda Inteligente'
id: 6c6GnC1dKGViJ2h0ZoY5pm
status: PUBLISHED
createdAt: 2024-01-31T21:33:04.796Z
updatedAt: 2024-01-31T21:33:05.556Z
publishedAt: 2024-01-31T21:33:05.556Z
firstPublishedAt: 2024-01-31T21:33:05.556Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slug: falta-la-traduccion-de-la-facetafiltro-de-precios-en-la-busqueda-inteligente
locale: es
kiStatus: Backlog
internalReference: 974840
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


La Búsqueda Inteligente no aplica la traducción al nombre del filtro/facet "precio" para idiomas adicionales cuando se consulta a través de REST API.

El idioma principal sigue devolviendo la cadena esperada como configuración interna, pero cualquier otro idioma lo devolverá con "Precio" como valor fijo.


##

## Simulación


En una tienda con varios idiomas, configure las traducciones para el contexto de búsqueda inteligente a través del servicio de mensajes a los idiomas secundarios y consúltelo mediante la API de facetas. Los valores para "Precio" no se tendrán en cuenta, mientras que funciona para cualquier otra etiqueta, como las categorías y la marca.



## Workaround


N/A




