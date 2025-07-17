---
title: "API de filtro (Facets) del catálogo con comportamiento inesperado cuando hay campos de especificación diferentes con el mismo nombre"
id: 5kEXFKmO3YAyICAa6Usa28
status: PUBLISHED
createdAt: 2017-08-16T19:59:34.640Z
updatedAt: 2022-12-22T20:46:15.197Z
publishedAt: 2022-12-22T20:46:15.197Z
firstPublishedAt: 2017-08-16T20:09:14.847Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: api-de-filtro-facets-del-catalogo-con-comportamiento-inesperado-cuando-hay-campos-de-especificacion-diferentes-con-el-mismo-nombre
locale: es
kiStatus: Backlog
internalReference: 
---

## Sumario

Al ejecutar la API de filtro (Facet), si el resultado contiene campos de especificación (producto o SKU) con el mismo nombre, se muestra el error 500 (An item with the same key has already been added).

API EndPoint: /api/catalog_system/pub/facets/search/{category}?map=c


## Simulación

Para simular el escenario:

1. Registre, en alguna categoría hija de la categoría que desee probar, un campo con el nombre "tamaño", por ejemplo. Defínalo como filtro.
2. Registre, en otra categoría hija de la categoría que desee probar, un campo con el mismo nombre del anterior. "Tamaño", por ejemplo. Defínalo como filtro.
2. Registre valores en estos campos;
2. Registre un producto en cada categoría hija y rellene el campo definido ("tamaño", por ejemplo)
4. Espere la indexación completa del producto (alrededor de 5 minutos)
5. Ejecute el endpoint /api/catalog_system/pub/facets/search/{category}?map=c


## Workaround

Para evitar este comportamiento, evite crear campos con el mismo nombre en categorías paralelas (hijas de la misma categoría).

Si la API está siendo utilizada para renderizar un menú lateral (filtro) podrá ser sustituida por el control searchNavigator nativo ([Haga clic aquí y lea más](http://help.vtex.com/es/tutorial/--tutorials_550)).


