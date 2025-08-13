---
title: '¿Cómo saber qué página del sistema se está representando en el sitio?'
id: 1GXswbUMu0CUG2uqCOGcgI
status: PUBLISHED
createdAt: 2019-01-24T20:45:44.215Z
updatedAt: 2023-03-29T00:29:39.010Z
publishedAt: 2023-03-29T00:29:39.010Z
firstPublishedAt: 2019-01-24T22:10:37.513Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_24
slugEN: como-saber-qual-pagina-do-sistema-esta-sendo-renderizada-no-site
legacySlug: como-saber-qual-pagina-do-sistema-esta-sendo-renderizada-no-site
locale: es
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

<div style="background-color:#FCF8F2; border-left: 2px solid #F0AD4E; border-top-left-radius: 2px; border-bottom-left-radius: 2px; padding: 15px; margin-bottom: 10px">
Tutorial válido solo para tiendas CMS Portal Legado.
</div>

Cuando una página del sitio se renderiza, el código fuente siempre trae un comentario que indica la carpeta de CMS a que el layout de la página está relacionado.

Digamos, por ejemplo, que usted está en una página de departamento. En este caso, si la carpeta de la página de departamento se llama `@departamento@`, el código siguiente estará en el código fuente:

`<!-- CommerceContext.Current.VirtualFolder.Name: @departamento@ -->`

Para encontrar esta línea de código, acceda al front-end de su tienda, entre en las herramientas de desarrollador del navegador (F12 en Windows o Cmd + Option + I en Mac, si utiliza Google Chrome) y realize una búsqueda por `CommerceContext` (Ctrl + Shift + F en Windows o Cmd + Shift + F en Mac).

A continuación se muestra la relación entre la carpeta en el CMS y el código fuente de la tienda.

![CommerceContext](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Storefront/Layout/como-saber-qual-pagina-do-sistema-esta-sendo-renderizada-no-site_1.png)

> ℹ️ Esta línea de código está siempre comentada. Por lo tanto, tiene función sólo informativa. Es decir, no realiza ninguna acción.

Esta información es útil, por ejemplo, para saber qué carpeta la búsqueda por cierto término está retornando en su tienda.
