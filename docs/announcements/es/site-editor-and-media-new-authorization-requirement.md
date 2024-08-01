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
slug: site-editor-y-multimedia-nuevo-requisito-de-autorizacion
locale: es
legacySlug: site-editor-y-multimedia-nuevo-requisito-de-autorizacion
announcementImageID: ''
announcementSynopsisES: 'CMS GraphQL API es obligatorio para la gestión de contenido. Actualiza los roles según corresponda.'
---

A partir del lunes 18 de marzo de 2024, será obligatorio que todos los [usuarios](https://developers.vtex.com/docs/guides/api-authentication-using-user-tokens) y [claves de aplicación](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) que necesiten acceder a [Site Editor](https://help.vtex.com/en/tutorial/site-editor-overview--299Dbeb9mFczUTyNQ9xPe1) y [Multimedia](https://help.vtex.com/es/tutorial/media-overview--31fhjHTt4TBoo50AmGQ9b2) tengan el [recurso](https://help.vtex.com/es/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) de License Manager `CMS GraphQL API` agregado a sus [roles](https://help.vtex.com/es/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc).

## ¿Qué cambió?

Como se [anunció anteriormente para los usuarios de Headless CMS](https://help.vtex.com/es/announcements/headless-cms-new-authorization-requirement--7G056zzZmGFBztkRqhpUgj), es necesario que tanto los usuarios como las claves de aplicación tengan el recurso `CMS GraphQL API` asociado con su rol para gestionar el contenido.

Ahora, estamos extendiendo este requisito al Site Editor y Multimedia, lo que significa que el recurso 'CMS GraphQL API' es necesario para gestionar el contenido utilizando estas herramientas.

## ¿Por qué realizamos este cambio?
Este cambio tiene como objetivo mejorar la seguridad y simplificar el acceso del usuario a Site Editor y Multimedia, brindando un entorno más controlado y seguro para gestionar el contenido de la tienda. 

## ¿Qué se necesita hacer?
Asegúrate de que los usuarios de Site Editor y Multimedia tienen sus roles asociados al recurso `CMS GraphQL API`, ya sea [creando un nuevo rol](https://help.vtex.com/es/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc?&utm_source=autocomplete#creating-a-role) o editando uno existente.

<div class="alert alert-warning">
  <p>Para gestionar usuarios y roles, tu rol de usuario debe estar asociado al recurso <code>Save access profile</code> del producto <bold>License Manager</bold>. Por ejemplo, <a href="https://help.vtex.com/es/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy#user-administrator-restricted">User Administrator - RESTRICTED</a> es un rol predefinido que tiene asociado el recurso <code>Save access profile</code>.</p>
</div>

