---
title: 'Las normas de merchandising visual se extienden erróneamente a contextos más amplios'
id: 2wXWYnsHwYrXByNRu3HdBK
status: PUBLISHED
createdAt: 2024-09-13T22:19:38.122Z
updatedAt: 2024-11-11T16:45:01.734Z
publishedAt: 2024-11-11T16:45:01.734Z
firstPublishedAt: 2024-09-13T22:19:39.138Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: visual-merchandising-rules-wrongly-extendeded-to-broader-contexts
locale: es
kiStatus: Scheduled
internalReference: 1098688
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Las reglas de merchandising visual se establecen para contextos específicos definiendo filtros por atributos o términos de búsqueda, pero los filtros no se están limitando a su contexto exclusivo, generando resultados de búsqueda inesperados y entrando en conflicto con reglas de merchandising diferentes para otras páginas.

Por contexto, los productos anclados y ocultos realizan la misma acción que las acciones promover y eliminar por ID de una regla de merchandising manual.

El ejemplo más sencillo es que al establecerlo en una categoría también se aplicarán modificadores a sus subcategorías.



## Simulación



- Considere el árbol de categorías "ropa > niños > camiseta".
- Cree una regla de comercio visual para clasificar manualmente (fijar) algunos artículos tanto en la categoría "niños" como en la subcategoría "camisetas".
- La subcategoría "camiseta" no aplicará correctamente la ordenación esperada, porque estará bajo la influencia de la regla de comercio para la categoría "niños".



## Workaround


Es posible crear el mismo tipo de regla a través del editor manual, donde se puede establecer la opción "activador exclusivo", evitando completamente el solapamiento entre diferentes reglas.




