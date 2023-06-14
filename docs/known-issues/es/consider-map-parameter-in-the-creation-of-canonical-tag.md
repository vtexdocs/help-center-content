---
title: Considerar parámetro map en la creación de la tag canonical
id: ilHxRrPwliYiaGKaqQecE
status: PUBLISHED
createdAt: 2017-05-09T15:51:15.454Z
updatedAt: 2022-12-22T20:48:51.904Z
publishedAt: 2022-12-22T20:48:51.904Z
firstPublishedAt: 2017-05-17T15:23:15.611Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: considerar-parametro-map-en-la-creacion-de-la-tag-canonical
kiStatus: Backlog
internalReference: 
---

## Sumario

Al acceder a cualquier búsqueda con el parámetro `map` en la URL (por ejemplo, `www.yourstorename.com.br/department/category/filtername?PS=32&map=c,c,specificationFilter_7`), el mismo se quita para la renderización de la tag Canonical. Sin embargo, el parámetro map es esencial para definir el contenido cargado (en relación con los productos de la página con map) y, por lo tanto, al quitarlo, el resultado puede sufrir cambios.

## Simulación

Para simular basta una URL con map. Ejemplo:

`www.yourstorename.com.br/department/category/filtername?PS=32&map=c,c,specificationFilter_7`

Al comprobar la canonical de la página (usted puede encontrar la canonical haciendo clic con el botón derecho del ratón en "código fuente de la página"), es posible ver que ella sólo renderiza hasta la interrogación. En este caso:
`www.yourstorename.com.br/department/category/filtername`

Esto suele ocurrir con filtros, colecciones e hotsites.

## Workaround

Hoy no tenemos una solución paliativa para este escenario.

