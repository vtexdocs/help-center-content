---
title: 'Faststore search api considerando fuzzy como auto por defecto'
id: 2zedXBMhlD8pu4gZMXsrSp
status: PUBLISHED
createdAt: 2023-08-28T23:35:04.009Z
updatedAt: 2024-03-27T14:10:53.090Z
publishedAt: 2024-03-27T14:10:53.090Z
firstPublishedAt: 2023-08-28T23:35:04.608Z
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slugEN: faststore-search-api-considering-fuzzy-as-auto-as-default
locale: es
kiStatus: Fixed
internalReference: 889321
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


En el paquete @fatstore/api, para el Intelligent Search resolver, estamos considerando fuzzy como auto por defecto cuando deberia ser 0, esto esta causando que el comportamiento de fuzzy se aplique causando un "fake missmatch" en los resultados de busqueda cuando realmente tenemos una coincidencia exacta con el termino buscado, pero, mostramos mas resultados a pesar de que


##

## Simulación


Esto es fácil de replicar cuando se busca cualquier producto, sku, o ref ID, el resultado esperado es mostrar sólo los productos que coincide con el ID, pero, se mostrará más de uno



## Workaround


N/A





