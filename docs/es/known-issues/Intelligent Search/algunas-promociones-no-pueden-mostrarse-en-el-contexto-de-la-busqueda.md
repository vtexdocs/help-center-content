---
title: 'Algunas promociones no pueden mostrarse en el contexto de la búsqueda'
id: 48NdMjFOswJ5w7Nypc2Txd
status: PUBLISHED
createdAt: 2022-03-17T20:42:39.545Z
updatedAt: 2022-11-25T21:58:24.664Z
publishedAt: 2022-11-25T21:58:24.664Z
firstPublishedAt: 2022-03-17T20:42:39.998Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: some-promotions-cant-be-displayed-in-search-context
locale: es
kiStatus: Backlog
internalReference: 475289
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Algunos tipos de promociones no se recuperan en el contexto de ProductSummaryProvider, y por lo tanto sus insignias no son renderizadas por el componente vtex.product-highlights.



## Simulación


Estos son los tipos de ajustes de promoción que se sabe que reproducen este problema:


- Promoción regular con el tipo de descuento configurado como regalo;
- Promoción regular que está configurada para ser aplicada a una marca específica y a una colección juntas;



## Workaround


Incluya los productos promocionales en una colección específica y configure el componente product-highlights como `"type": "colección"`, para que muestre el distintivo de la colección.

