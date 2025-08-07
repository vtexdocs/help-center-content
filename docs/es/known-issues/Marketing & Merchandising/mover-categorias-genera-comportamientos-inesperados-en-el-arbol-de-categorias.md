---
title: "Mover categorías genera comportamientos inesperados en el árbol de categorías"
id: 6JSa9nnYoAAUQO1zPtzfZD
status: PUBLISHED
createdAt: 2019-08-20T18:20:42.655Z
updatedAt: 2022-12-22T20:45:42.366Z
publishedAt: 2022-12-22T20:45:42.366Z
firstPublishedAt: 2019-08-20T18:32:09.522Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: mover-categorias-genera-comportamientos-inesperados-en-el-arbol-de-categorias
locale: es
kiStatus: Backlog
internalReference: 
---

## Sumario

Hoy, esta funcionalidad puede generar inconsistencias en la base de datos de su árbol de categorías, dependiendo del tipo de movimiento. No recomendamos usar esta funcionalidad hasta que se corrija.

Identificamos algunas inconsistencias generadas por este problema, que son:
  - Especificaciones de producto/SKU duplicados.
  - Categoría y subcategoría que no heredan especificaciones del departamento
  - Ordenamiento del Filtro Lateral en orden incorrecto

## Simulación



## Workaround

 1. Inactive la categoría actual que desea mover
 2. Cree una nueva categoría en el lugar deseado
 3. Mueva los productos a la categoría recién creada

