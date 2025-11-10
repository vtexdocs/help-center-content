---
title: 'Store Framework CMS: nuevo permiso necesario para gestionar páginas'
id: cmXeUFIT80GmIW6mRuFRu
status: PUBLISHED
createdAt: 2024-12-16T22:39:00.938Z
updatedAt: 2024-12-17T14:49:26.018Z
publishedAt: 2024-12-17T14:49:26.018Z
contentType: updates
productTeam: VTEX IO
author: 4oTZzwYoyhy1tDBwLuemdG
slugEN: 2024-12-16-store-framework-cms-new-permission-required-to-manage-pages
locale: es
legacySlug: store-framework-cms-nuevo-permiso-necesario-para-gestionar-paginas
announcementImageID: 'undefined'
announcementSynopsisES: 'Para gestionar páginas en Store Framework CMS es necesario tener un rol con el recurso "CMS Settings"'
---

[Páginas](/es/tutorial/paginas-vision-general--5iBUUJbK5NqG6OxlDrGNzc) es una funcionalidad del Store Framework CMS para gestionar todas las rutas de URL y las correspondientes plantillas de página del sitio web de tu tienda, como las páginas de inicio, de productos y de inicio de sesión. Por razones de seguridad, estamos exigiendo que los usuarios del Admin tengan un permiso específico para gestionar rutas y plantillas de página.

> ⚠️ Como se [anunció anteriormente](/es/announcements/store-framework-cms-nuevo-permiso-para-gestionar-redirecciones--1GcT48ML2w6TZQxQyGbD6W), el rol `CMS Settings` ya era necesario para administrar redirecciones con Store Framework CMS.

## ¿Qué cambió?

Para que los usuarios del Admin puedan crear, editar y eliminar rutas de URL y las correspondientes plantillas de páginas, ahora es necesario que tengan un rol de acceso con el [recurso del License Manager](/es/tutorial/recursos-del-license-manager--3q6ztrC8YynQf6rdc6euk3) **CMS Settings**.

## ¿Por qué realizamos este cambio?

Agregamos este requisito de permiso por motivos de seguridad. Así, solo los usuarios del Admin que hayan sido explícitamente autorizados tendrán acceso a la funcionalidad **Páginas**, impidiendo, de esta forma, que usuarios no autorizados puedan crear, editar y eliminar redirecciones.

## ¿Qué se necesita hacer?

Para que un usuario del Admin pueda gestionar rutas de URL y las correspondientes plantillas de páginas en Store Framework CMS, se le debe asignar un rol de acceso específico que incluya el recurso **CMS Settings**. Consulta las instrucciones para editar los roles de acceso de un usuario en el artículo [Gestionar usuarios](/es/docs/tutorials/gestionar-usuarios-administrativos#editando-usuarios).

Si deseas utilizar un rol de acceso personalizado, puedes crear un nuevo rol de acceso o editar uno existente para incluir el recurso **CMS Settings**. Consulta las instrucciones para crear y editar roles de acceso en el artículo [Roles](/es/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creando-un-rol).

