---
title: 'El autocompletado de búsqueda proporciona una URL obsoleta después de navegar por las sugerencias.'
id: 168oT3vpuAcRdZbE7sahtF
status: PUBLISHED
createdAt: 2024-01-19T01:28:08.775Z
updatedAt: 2024-01-19T01:28:09.627Z
publishedAt: 2024-01-19T01:28:09.627Z
firstPublishedAt: 2024-01-19T01:28:09.627Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: search-autocomplete-providing-outdated-url-after-navigating-through-suggestions
locale: es
kiStatus: Backlog
internalReference: 968604
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


En el componente "search-bar" con "autocomplete-result-list.v2", al pasar el ratón por las sugerencias de búsqueda también cambiarán los productos sugeridos, así como el texto de "ver todos {n} los productos" para mencionar la búsqueda seleccionada, pero el hipervínculo de "ver todos" sigue el término de búsqueda original en lugar del seleccionado.


##

## Simulación



- buscar un término parcial
- pase el ratón por encima de los términos sugeridos
- haga clic en "ver todos los productos


##

## Workaround


N/A

