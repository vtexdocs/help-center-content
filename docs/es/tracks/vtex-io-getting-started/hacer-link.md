---
title: 'Hacer link'
id: 1dEVfBkRxoO62i0Ge6mYoG
status: ARCHIVED
createdAt: 2018-06-14T16:08:28.920Z
updatedAt: 2020-03-13T21:24:44.380Z
publishedAt: 
firstPublishedAt: 2018-06-14T16:13:34.130Z
contentType: trackArticle
productTeam: VTEX IO
slugEN: link
locale: es
trackId: 2qYWraccosS2ayg2kusaUo
trackSlugES: vtex-io-getting-started
---

Para hacer el link de su aplicación y empezar a ver los cambios en su código en tiempo real, escriba el siguiente comando en el terminal:

`vtex link` o `vtex link --verbose`

Con eso, el IO pone su aplicación a disposición (deploy) y realiza varias tareas hasta que usted vea los mensajes "Available routes" o "App running" en su terminal.

Para confirmar que todo está bien, usted puede hacer clic en una de las rutas disponibles. Usted accede a la dirección URL siguiente en su browser:

`https://{Workspace}--{AccountName}.myvtex.com/*`

El asterisco (`*`) debe ser reemplazado por cualquier path conocido (declarado) por la aplicación.

Si su aplicación utiliza __GraphQL__, habrá un mensaje con un enlace al __GraphiQL__, una IDE dentro del navegador para probar sus __Queries__ y __Mutaciones__.

Ahora entre en el archivo `index.js` de su proyecto local y cambie algo. ¡Guarde y vea los cambios en el browser!
