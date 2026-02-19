---
title: 'Site Editor y Multimedia: nuevo requisito de autorización'
id: 7tO32uRxIUK8lOp8AvWs2L
status: PUBLISHED
createdAt: 2024-02-26T12:35:10.352Z
updatedAt: 2024-02-26T18:06:13.754Z
publishedAt: 2024-02-26T18:06:13.754Z
contentType: updates
productTeam: VTEX IO
author: 4oTZzwYoyhy1tDBwLuemdG
slugEN: 2024-02-26-site-editor-and-media-new-authorization-requirement
locale: es
legacySlug: site-editor-y-multimedia-nuevo-requisito-de-autorizacion
announcementImageID: 'undefined'
announcementSynopsisES: 'CMS GraphQL API es obligatorio para la gestión de contenido. Actualiza los roles según corresponda.'
---

A partir del lunes 18 de marzo de 2024, será obligatorio que todos los [usuarios](https://developers.vtex.com/docs/guides/api-authentication-using-user-tokens) y [claves de aplicación](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) que necesiten acceder a [Site Editor](/es/docs/tutorials/site-editor-vision-general) y [Multimedia](/es/docs/tutorials/multimedia-vision-general) tengan el [recurso](/es/docs/tutorials/recursos-del-license-manager) de License Manager `CMS GraphQL API` agregado a sus [roles](/es/docs/tutorials/roles).

## ¿Qué cambió?

Como se [anunció anteriormente para los usuarios de Headless CMS](/es/announcements/2024-02-02-headless-cms-nueva-solicitud-de-autorizacion), es necesario que tanto los usuarios como las claves de aplicación tengan el recurso `CMS GraphQL API` asociado con su rol para gestionar el contenido.

Ahora, estamos extendiendo este requisito al Site Editor y Multimedia, lo que significa que el recurso 'CMS GraphQL API' es necesario para gestionar el contenido utilizando estas herramientas.

## ¿Por qué realizamos este cambio?
Este cambio tiene como objetivo mejorar la seguridad y simplificar el acceso del usuario a Site Editor y Multimedia, brindando un entorno más controlado y seguro para gestionar el contenido de la tienda. 

## ¿Qué se necesita hacer?
Asegúrate de que los usuarios de Site Editor y Multimedia tienen sus roles asociados al recurso `CMS GraphQL API`, ya sea [creando un nuevo rol](/es/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc?&utm_source=autocomplete#creating-a-role) o editando uno existente.

> ⚠️ Para gestionar usuarios y roles, tu rol de usuario debe estar asociado al recurso `Save access profile` del producto <bold>License Manager</bold>. Por ejemplo, [User Administrator - RESTRICTED](/es/docs/tutorials/roles-de-usuario-predefinidos#user-administrator-restricted) es un rol predefinido que tiene asociado el recurso `Save access profile`.

