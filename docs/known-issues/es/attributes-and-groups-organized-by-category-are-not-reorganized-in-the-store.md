---
title: 'Al ordenar atributos y grupos por categoría, no se reordenan en la tienda'
id: 1oWkNKBfrWMmKSWOeeGikO
status: PUBLISHED
createdAt: 2017-12-18T17:08:46.708Z
updatedAt: 2022-12-22T20:45:03.406Z
publishedAt: 2022-12-22T20:45:03.406Z
firstPublishedAt: 2017-12-19T13:06:06.107Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: al-ordenar-atributos-y-grupos-por-categoria-no-se-reordenan-en-la-tienda
locale: es
kiStatus: Backlog
internalReference: 
---

## Sumario

Al intentar ordenar los atributos en cada categoria, cambiandole el numero de orden a cada atributo y hacer clic en "ordenar", el sistema no respeta el orden configurado.

Incluso, en algunos casos donde se reordenan los atributos, luego de guardar el orden se divide el mismo grupo en varios grupos con el mismo nombre.

## Simulación

1. Acceder al menú __Catalog > Categorías__.
2. Buscar la categoría e ingresar en __Campos de Producto__.
2. Cambiar el numero de orden de los atributos.
3. Hacer click en __Ordenar__.
4. Se visualiza que el orden no es respetado y en ocaciones se divide el grupo en varios grupos iguales.

## Workaround

Es posible extender la funcionalidad nativa que provisiona el sidebar con los filtros, creando un componente custom de filtrado. De este modo, utilizando la API Search para crear una nueva estructura a medida, se logra reorganizar cualquiera de los filtros con independencia. 

Cualquiera de nuestros partners certificados y cualquier cliente tiene acceso a las herramientas nombradas, accediendo a las documentaciones para desarrollador de VTEX.

