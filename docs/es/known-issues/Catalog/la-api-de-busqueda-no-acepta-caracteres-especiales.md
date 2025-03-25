---
title: 'La API de búsqueda no acepta caracteres especiales'
id: 4wBStygR6YPA6g5lgvPGqa
status: PUBLISHED
createdAt: 2023-02-15T12:39:13.771Z
updatedAt: 2023-02-28T18:20:34.738Z
publishedAt: 2023-02-28T18:20:34.738Z
firstPublishedAt: 2023-02-15T12:39:14.210Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: search-api-does-not-accept-special-characters
locale: es
kiStatus: Backlog
internalReference: 754363
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


La API de búsqueda en catálogos, documentada aquí: https://developers.vtex.com/docs/api-reference/search-api#get-/api/catalog_system/pub/products/search/-search- , no acepta términos con caracteres especiales como el apóstrofo ' o las comillas ".

El error devuelto en este tipo de consultas es: `¡Solicitud incorrecta! ¡No se permiten scripts!


##

## Simulación



1. Intente utilizar la API de búsqueda con un término utilizando ' , por ejemplo GET https://{accountName}.{environment}.com.br/api/catalog_system/pub/products/search?ft=anyterm'
2. Compruebe que aparece el mensaje de error.



## Workaround


No hay solución.





