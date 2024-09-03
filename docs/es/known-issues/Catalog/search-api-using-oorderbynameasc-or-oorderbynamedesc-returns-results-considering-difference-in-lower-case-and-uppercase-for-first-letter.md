---
title: 'La Search API utilizando O=OrderByNameASC o O=OrderByNameDESC devuelve los resultados teniendo en cuenta la diferencia entre minúsculas y mayúsculas de la primera letra'
id: 1VqHI8kcnqRarzc1kxUGig
status: PUBLISHED
createdAt: 2022-04-07T14:04:16.705Z
updatedAt: 2022-11-25T21:46:20.647Z
publishedAt: 2022-11-25T21:46:20.647Z
firstPublishedAt: 2022-04-07T14:04:17.341Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: la-search-api-utilizando-oorderbynameasc-o-oorderbynamedesc-devuelve-los-resultados-teniendo-en-cuenta-la-diferencia-entre-minusculas-y-mayusculas-de-la-primera-letra
locale: es
kiStatus: Backlog
internalReference: 305247
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


La API de búsqueda utilizando O=OrderByNameASC o O=OrderByNameDESC devuelve los resultados teniendo en cuenta la diferencia entre minúsculas y mayúsculas de la primera letra



## Simulación


Realice cualquier búsqueda utilizando la consulta O=OrderByPriceASC con algún producto que tenga un nombre con minúscula y otro con mayúscula, que sea superior al primero, por ejemplo (`producto E` y `producto Z`).
En este caso, el `Producto Z` se mostrará primero, porque utiliza mayúsculas en la primera letra.



## Workaround


Corrija los nombres de los productos para todos ellos utilizando la misma norma: Todos con minúscula en la primera letra o Todos con mayúscula en la primera letra.

