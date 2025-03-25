---
title: 'Renderizar el contenido de la app en el Admin'
id: 7dMDCQlF84iAy2QKkCoW6A
status: ARCHIVED
createdAt: 2018-06-06T19:08:57.429Z
updatedAt: 2020-08-17T14:20:55.283Z
publishedAt: 
firstPublishedAt: 2018-06-07T13:45:22.125Z
contentType: tutorial
productTeam: VTEX IO
author: TnXcuQydAAOuwWACo864E
slugEN: bringing-app-content-into-the-admin-panel
locale: es
legacySlug: renderizar-el-contenido-de-la-app-en-el-admin
subcategoryId: Z46a6rHVAaAucoiW0skQQ
---

## Corregir la URL

Después de crear una aplicación React, ella todavía no está integrada en el panel de Admin.

Para arreglar esto, necesitamos apuntar la aplicación a la URL correcta.

Navegue hasta el proyecto y abra el archivo `pages.json`.

Añadimos el `"admin/"` al nombre de la página, así como a la ruta. Es importante también añadir `"admin/"` al principio del nombre de todas las extensiones que se utilizarán. Su `pages.json` debe quedar así:

![2 pages](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/VTEX%20IO/VTEX%20IO%20setup/renderizar-el-contenido-de-la-app-en-el-admin_1.png)

## Actualizar las dependencias para usar vtex.admin

Ahora necesitamos actualizar el archivo manifest.json para listar el `vtex.admin` como dependencia. Recuerde que en VTEX IO siempre especificamos la versión que se utilizará. El manifest.json debe quedar así:

![3 manifest](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/VTEX%20IO/VTEX%20IO%20setup/renderizar-el-contenido-de-la-app-en-el-admin_2.png)

## Los toques finales

Cuando revisamos la página, notamos que, a pesar de que nuestra aplicación está renderizando correctamente dentro del panel del Admin, la barra de loading parece no terminar de cargar.

Esta es una buena oportunidad para aprender acerca de cómo su aplicación React puede comunicarse de forma más sofisticada con el panel del Admin.

Utilizaremos el `componentDidMount()` para comprobar que la string se ha renderizado correctamente y comunicar al panel para apagar el loading.

Sólo hay que navegar a `index.js` y añadir el `componentDidMount()` por encima de nuestro render. Se va a quedar así:

![4 final touches](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/VTEX%20IO/VTEX%20IO%20setup/renderizar-el-contenido-de-la-app-en-el-admin_3.png) 
![5 completo](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/VTEX%20IO/VTEX%20IO%20setup/renderizar-el-contenido-de-la-app-en-el-admin_4.png)
