---
title: 'Lista de regalos no se carga'
id: 3qIHpPzdGoyWMwmyoGugwq
status: PUBLISHED
createdAt: 2017-04-11T21:42:34.789Z
updatedAt: 2022-12-22T20:46:05.885Z
publishedAt: 2022-12-22T20:46:05.885Z
firstPublishedAt: 2017-04-11T21:49:20.648Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: gift-list-does-not-load
locale: es
kiStatus: Backlog
internalReference: 
---

## Sumario

La URL de una lista de regalo es el resultado de la concatenación de todos los SKUs seleccionados en la creación de la lista. Sin embargo, URLs con más de 7 mil caracteres dejan de ser indexadas por el Solr - el sistema de indexación utilizado por VTEX.

Esta limitación no tiene relación directa con la cantidad de elementos de una lista, sino con el tamaño de la URL. Es decir, es posible tener listas con más productos que no reciben timeout del indizador.

## Simulación

Seleccionar una cantidad grande de ítems para una lista de modo que la URL resultante tenga más de 7 mil caracteres.

## Workaround

Si es posible, editar la lista y disminuir la cantidad de elementos seleccionados. Normalmente la cantidad de 250 SKUs garantiza la visualización de la lista. Una cantidad mayor que ésta ya puede causar el escenario del incidente.

Si la lista es inaccesible, póngase en contacto con el soporte de VTEX para eliminar la lista.

