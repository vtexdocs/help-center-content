---
title: 'Asociar un template con un layout'
id: 7CkgOHRj7DVbsRxyR8YQrK
status: PUBLISHED
createdAt: 2022-01-10T22:05:16.978Z
updatedAt: 2023-03-28T12:47:10.787Z
publishedAt: 2023-03-28T12:47:10.787Z
firstPublishedAt: 2022-01-10T22:10:43.500Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 1DedyaVUPp5wLAvjY7wKKv
slugEN: associating-a-template-with-a-layout
legacySlug: asociar-un-template-con-un-layout
locale: es
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

Su tienda escribe el código de las páginas en los **templates** del CMS. Tan pronto como la tienda tenga acceso al Admin, por ejemplo, el template `Home` es el que contiene el código del *homepage* del sitio web.

Pero digamos que crea una nuevo template `Home2` y quiere mostrarlo en el homepage. ¿Cómo sabe la plataforma que es el template `Home2` el que debe mostrarse en el homepage, y no el template `Home`?

Para indicar esto, debe asociar el template deseado con el **layout**, que se encuentra en la estructura de carpetas del sitio web, dentro de Sites and Channels.

Esta asociación se realiza en la configuración de las propiedades del layout. Para llegar allí, siga estos pasos:

1. En el Admin VTEX, accede a **Storefron > Layout > CMS**. Haga clic en **Sites and channels**.
2. Haga clic en el sitio web deseado, referente a la tienda que está editando.
3. Haga clic en la carpeta raíz (`/`).
4. Busque el layout que desea editar. 
5. Haga clic en el menú desplegable **Template**. Ahí se listarán los templates configurados en HTML Templates.
6. Seleccione el template que desea asociar a este layout.
7. Digite `yes` para confirmar el cambio (este paso es necesario porque se trata de un cambio crítico para el sitio web, ya que el front-end de la página será reemplazado). 
![CMS 4 1](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/storefront/layout/asociar-un-template-con-un-layout_1.png)
