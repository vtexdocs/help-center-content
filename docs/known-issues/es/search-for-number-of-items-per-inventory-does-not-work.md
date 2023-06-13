---
title: La búsqueda de número de artículos por inventario no funciona
id: 30XzfoV5qg8Aigo2ioqIyU
status: PUBLISHED
createdAt: 2017-08-29T17:10:42.318Z
updatedAt: 2022-12-22T20:45:59.697Z
publishedAt: 2022-12-22T20:45:59.697Z
firstPublishedAt: 2017-08-29T17:24:55.251Z
contentType: knownIssue
productTeam: Post-purchase
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slug: la-busqueda-de-numero-de-articulos-por-inventario-no-funciona
kiStatus: Backlog
internalReference: 
---

## Sumario

En el módulo __Inventario y envio__, en la pestaña Inventario -> * Administrar artículos en el inventario *, tiene la opción de buscar por artículos en el inventario. Sin embargo, al probar esta opción, aparece un mensaje que dice que no se encontraron resultados (incluso cuando los artículos están en inventario).

## Simulación

- En el módulo __Inventario y envio__, en la pestaña Inventario -> * Administrar artículos en el inventario *
- - Inserta un número que sabes que está en inventario
- Los resultados se cargan con el mensaje "No se encontraron resultados"

## Workaround

En este caso, la solución es controlar su inventario mediante una plantilla de cálculo:
- En el módulo __Inventario y envio__ acceder a la pestaña *Paneles*
- Descargue la plantilla de cálculo del inventario, como se explica en el artículo sobre cómo [importar y exportar la plantilla de cálculo del inventario](https://help.vtex.com/pt/tutorial/--tutorials_2034)
- En la plantilla de cálculo, filtre la cantidad de elementos que desea verificar

