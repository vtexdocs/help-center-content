---
title: 'Cómo utilizar el control de título de página'
id: 6bOB5ZtqesCKCEkYUUsIC8
status: ARCHIVED
createdAt: 2019-01-24T20:45:38.000Z
updatedAt: 2022-09-08T16:44:16.603Z
publishedAt: 
firstPublishedAt: 2019-01-24T22:01:48.915Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_24
slugEN: how-to-use-the-page-title-control
locale: es
legacySlug: como-utilizar-el-control-de-titulo-de-pagina
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

El control `<vtex.cmc:searchTitle />` muestra el título de las páginas de:
- Departamento
- Categoría
- Búsqueda

Es decir, muestra la información introducida en la pantalla de registro de las páginas de categoría, en el campo __Nombre__.

El código HTML renderizado por el control Search Title tiene el siguiente patrón:

`<h2 class="titulo-sessao">Category</h2>`

Es decir, se renderiza un heading de nivel `<h2>`, con la clase `titulo-sessao`.

De forma predeterminada, las tiendas VTEX ya se crean con este control insertado en los templates de departamento y categoría.
