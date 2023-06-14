---
title: 'Al mover las categorías se producen comportamientos inesperados en el árbol de categorías'
id: 2HKIvNomXHcDyYiuQYQvqI
status: PUBLISHED
createdAt: 2022-06-20T19:34:47.422Z
updatedAt: 2022-11-25T21:43:19.042Z
publishedAt: 2022-11-25T21:43:19.042Z
firstPublishedAt: 2022-06-20T19:34:48.671Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: al-mover-las-categorias-se-producen-comportamientos-inesperados-en-el-arbol-de-categorias
locale: es
kiStatus: Backlog
internalReference: 367136
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Actualmente, esta funcionalidad puede provocar incoherencias en el banco de datos de su árbol de categorías, según el tipo de movimiento. Por lo tanto, no se recomienda esta funcionalidad hasta que se pueda remediar.
Las siguientes inconsistencias fueron identificadas como resultado de este problema:

- Especificaciones de producto/SKUs duplicados
- La categoría y la subcategoría no están heredando las especificaciones del departamento
- La ordenación de los filtros laterales es incorrecta




## Simulación


No hay ninguna simulación.



## Workaround



1. Desactive la categoría actual que desea mover
2. Cree una nueva categoría en la ubicación deseada
3. Mueva los productos a la categoría recién creada

