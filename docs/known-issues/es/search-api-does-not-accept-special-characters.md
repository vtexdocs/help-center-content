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
slug: la-api-de-busqueda-no-acepta-caracteres-especiales
locale: es
kiStatus: Backlog
internalReference: 754363
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


La API de búsqueda en catálogos, documentada aquí: https://developers.vtex.com/docs/api-reference/search-api#get-/api/catalog_system/pub/products/search/-search- , no acepta términos con caracteres especiales como el apóstrofo ' o las comillas ".

El error devuelto en este tipo de consultas es: `¡Solicitud incorrecta! ¡No se permiten scripts!


##

## Simulación



1. Intente utilizar la API de búsqueda con un término utilizando ' , por ejemplo GET https://{accountName}.{environment}.com.br/api/catalog_system/pub/products/search?ft=anyterm'
2. Compruebe que aparece el mensaje de error.



## Workaround


No hay solución.





