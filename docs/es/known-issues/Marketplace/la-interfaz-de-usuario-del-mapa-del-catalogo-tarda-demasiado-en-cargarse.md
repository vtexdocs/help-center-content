---
title: 'La interfaz de usuario del mapa del catálogo tarda demasiado en cargarse.'
id: 3k0hZEn51PUFUfw0fCs1VM
status: PUBLISHED
createdAt: 2023-05-10T16:40:05.978Z
updatedAt: 2023-05-10T16:40:06.656Z
publishedAt: 2023-05-10T16:40:06.656Z
firstPublishedAt: 2023-05-10T16:40:06.656Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slugEN: catalog-mapping-ui-taking-too-much-time-to-load
locale: es
kiStatus: Backlog
internalReference: 823218
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Cuando el marketplace tiene muchos vendedores y utiliza las hojas de cálculo de mapeo para la mayoría de ellos, la UI de mapeo de catálogos puede ser demasiado pesada y cada vez que el vendedor intenta acceder a ella, tarda mucho en cargarse.
Además, la usabilidad se ve perjudicada.


##

## Simulación



1. La cuenta debe tener una gran cantidad de vendedores;
2. Para cada vendedor, agréguelo al área de mapeo de la UI de Mapeo de Catálogos;
3. Compruebe que el tiempo de carga de esta página aumenta y que la usabilidad no es muy buena.



## Workaround


No hay solución para la asignación de categorías y marcas. Para mapear la especificación también es posible utilizando la API:
https://developers.vtex.com/docs/api-reference/marketplace-apis-suggestions#put-/suggestions/configuration





