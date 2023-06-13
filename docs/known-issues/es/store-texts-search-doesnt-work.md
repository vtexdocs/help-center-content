---
title: Búsqueda de "Textos de la tienda" no funciona
id: 6C6JUkssKcOoQqsaikucwy
status: PUBLISHED
createdAt: 2017-08-24T15:16:31.392Z
updatedAt: 2022-12-22T20:45:58.757Z
publishedAt: 2022-12-22T20:45:58.757Z
firstPublishedAt: 2017-08-24T15:29:57.884Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: busqueda-de-textos-de-la-tienda-no-funciona
kiStatus: Backlog
internalReference: 
---

## Sumario

Búsqueda de "Textos de la tienda” devuelve muchos valores que no tienen relación con el término buscado.


## Simulación

1. En el módulo "Catalog", pestaña "Configuraciones", ítem "Textos".
2. Digite una palabra que esté siendo generada por la plataforma en el campo de "búsqueda". Ej: "Comprar" -> del texto de botón de compra.
3. Haga clic en "Buscar"
4. Retorna múltiples valores que no tienen relación con la palabra buscada.


## Workaround

1. Dentro del módulo "catalog", pestaña "Sistema" existe el campo "Texto XML".
2. Seleccione todo el texto (ctrl+A) dentro de este campo y péguelo en un editor de texto.
3. Busque la palabra por la búsqueda del editor.
4. Buscar la variable de texto buscado en el Combobox de "Configuraciones" -> "Textos".


