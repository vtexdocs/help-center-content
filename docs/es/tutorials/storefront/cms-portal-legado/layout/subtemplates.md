---
title: 'Cómo utilizar Subtemplates'
id: tutorials_577
status: PUBLISHED
createdAt: 2017-04-27T21:59:46.725Z
updatedAt: 2023-03-29T15:25:52.828Z
publishedAt: 2023-03-29T15:25:52.828Z
firstPublishedAt: 2017-04-27T23:03:40.959Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slugEN: subtemplates
legacySlug: subtemplates
locale: es
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

<div style="background-color:#FCF8F2; border-left: 2px solid #F0AD4E; border-top-left-radius: 2px; border-bottom-left-radius: 2px; padding: 15px; margin-bottom: 10px">
Tutorial válido solo para tiendas CMS Portal (Legado).
</div>

Los Subtemplates sirven para pequeñas estructuras que podrán ser reaprovechadas en más de un Template de Página. Subtemplates funcionam como _“includes”_. 

Usted crea un bloc de HTML que desea reaprovechar y después inserta una llamada dentro de un Template de Página. Para crear un subtemplate:

1. En el Admin VTEX, accede a **Storefront > Layout > CMS** y acceda la carpeta **Templates de Página > Subtemplates**.
2. Haga clic en la opción **Novo Subtemplate**.
3. Rellene el campo `Nome do Template`.
4. Pegue su código en el campo `XHTML do Template:`.
5. Por último, haga clic en el botón **salvar**.

Para referenciar un Subtemplate dentro de un Template de página, use la sintaxis abajo:

`<vtex:template id="nome-do-id" />`

En el atributo `id` rellene con el nombre dado al subtemplate.
