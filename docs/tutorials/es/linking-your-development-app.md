---
title: 'Linkar su app en desarrollo'
id: bKXgZWMLrUkimeUwWSy0u
status: DRAFT
createdAt: 2018-02-21T23:05:11.367Z
updatedAt: 2020-03-13T21:25:02.421Z
publishedAt: 
firstPublishedAt: 2018-02-21T23:06:21.883Z
contentType: tutorial
productTeam: VTEX IO
author: authors_24
slug: linkar-su-app-en-desarrollo
locale: es
legacySlug: linkar-su-app-en-desarrollo
subcategory: Z46a6rHVAaAucoiW0skQQ
---

Para hacer el link de su aplicación y empezar a ver los cambios en su código en tiempo real, escriba el siguiente comando en el terminal:

`vtex link`

Con ello, el IO realiza una serie de tareas por cuenta propia hasta que, si todo ocurre sin problemas, el siguiente mensaje se muestra en el terminal:

__Build finished successfully__

Para confirmar que todo está bien, entra en el navegador y acceda a la siguiente URL:

`https://{Workspace}--{AccountName}.myvtex.com/*`

- `{Workspace}` debe ser reemplazado por el nombre de su workspace de desarrollo
- `{AccountName}` debe ser reemplazado por el nombre de su tienda
- Asterisco `*` debe ser reemplazado por cualquier ruta conocida por la aplicación

Entre en el archivo `Index.js` y cambie algo. ¡Guarde y vea el cambio en el browser!
