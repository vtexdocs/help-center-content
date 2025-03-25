---
title: 'La búsqueda por marca con apóstrofe no devuelve datos en el Admin'
id: 2Z3k2leNVmCoBIPmIPDrz2
status: PUBLISHED
createdAt: 2020-05-05T15:36:13.219Z
updatedAt: 2022-12-22T20:43:15.385Z
publishedAt: 2022-12-22T20:43:15.385Z
firstPublishedAt: 2020-05-18T14:24:59.715Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: searches-for-brands-that-have-an-apostrophe-do-not-return-data-in-the-admin
locale: es
kiStatus: Backlog
internalReference: 
---

## Sumario

En la sección __Marcas__ del Admin (`https://{nombredelatienda}.myvtex.com/admin/Site/Marca.aspx`), si busca una marca que tenga un apóstrofe (') en el nombre, no se encontrará en el resultado de búsqueda. Esto sucede incluso si la marca existe en la lista. Sin embargo, los demás caracteres especiales funcionan correctamente.

## Simulación

1. Cree una marca en la que el nombre contenga apóstrofe.
2. Utilice la búsqueda del Admin para buscar la marca recién creada.

## Workaround

Se recomienda el uso de GET por [API de Marca](https://developers.vtex.com/reference/category-and-brand#brand), utilizando el ID de Marca para la búsqueda.

