---
title: 'Links de categorías visibles en el filtro lateral incluso con vista deshabilitada'
id: 5NwWyNDLtmKu6kCu6KYgs6
status: PUBLISHED
createdAt: 2018-05-03T17:37:48.868Z
updatedAt: 2022-12-22T20:45:19.537Z
publishedAt: 2022-12-22T20:45:19.537Z
firstPublishedAt: 2018-05-03T17:46:45.530Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Portal (CMS)
slug: links-de-categorias-visibles-en-el-filtro-lateral-incluso-con-vista-deshabilitada
locale: es
kiStatus: Backlog
internalReference: 
---

## Sumario

Los links de categorías aparecen en el filtro lateral aunque se encuentren con las opciones "__Categoría aparece en el menú superior y en el menú lateral de la tienda__" y "__Categoría está con link activo en la tienda__" deshabilitadas.

## Simulación

1. Acceder al catálogo.
2. Acceder a __Categorías__.
3. Seleccionar una categoría.
4. Hacer clic en Acciones > __Alterar__.
5. Desmarcar las flags "__Categoría aparece en el menú superior y en el menú lateral de la tienda__" y" __Categoría está con link activo en la tienda__".
6. Acceder a la página de la categoría un nivel arriba a través de la tienda.

## Workaround

Para ocultar estas categorías no deseadas en el front-end, el workaround sería implementar un script que ocultara las tags H4 que no tienen una tag `A` como hija.

