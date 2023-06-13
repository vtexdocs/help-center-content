---
title: La búsqueda por lista de regalo no devuelve resultado cuando se aplica con 3 o menos caracteres
id: 3CcMnzSpUQcUaG4wkm2ay2
status: PUBLISHED
createdAt: 2018-02-08T17:25:13.152Z
updatedAt: 2022-12-22T20:45:36.781Z
publishedAt: 2022-12-22T20:45:36.781Z
firstPublishedAt: 2018-02-08T17:33:02.101Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Portal (CMS)
slug: la-busqueda-por-lista-de-regalo-no-devuelve-resultado-cuando-se-aplica-con-3-o-menos-caracteres
kiStatus: Backlog
internalReference: 
---

## Sumario

Al aplicar una búsqueda de lista de regalo (Control GiftListSearchV2) con una palabra o término con 3 o menos caracteres, no se devuelve ningún resultado.

## Simulación

1. Acceder a la página donde está instalado el control <vtex.cmc: GiftListSearchV2 />
2. Realizar una búsqueda con 3 o menos caracteres

No se devuelve ningún resultado, incluso si hay listas disponibles con el término buscado.

## Workaround

Incluir un mensaje y un tratamiento en el campo, imposibilitando que el cliente realice la búsqueda con 3 o menos caracteres.

