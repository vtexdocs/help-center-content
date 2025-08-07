---
title: "Faststore search api considerando fuzzy como auto por defecto"
id: 5cfq9MV5QrygIaqJXqbXwZ
status: PUBLISHED
createdAt: 2024-11-11T18:37:39.992Z
updatedAt: 2024-12-02T16:40:08.053Z
publishedAt: 2024-12-02T16:40:08.053Z
firstPublishedAt: 2024-11-11T20:20:29.842Z
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slugEN: faststore-search-api-considerando-fuzzy-como-auto-por-defecto
locale: es
kiStatus: Fixed
internalReference: 1133355
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


En el paquete @fatstore/api, para el Intelligent Search resolver, estamos considerando fuzzy como auto por defecto cuando deberia ser 0, esto esta causando que el comportamiento de fuzzy se aplique causando un "fake missmatch" en los resultados de busqueda cuando realmente tenemos una coincidencia exacta con el termino buscado, pero, mostramos mas resultados a pesar de que


##

## Simulación


Esto es fácil de replicar cuando se busca cualquier producto, sku, o ref ID, el resultado esperado es mostrar sólo los productos que coincide con el ID, pero, se mostrará más de uno



## Workaround


N/A





