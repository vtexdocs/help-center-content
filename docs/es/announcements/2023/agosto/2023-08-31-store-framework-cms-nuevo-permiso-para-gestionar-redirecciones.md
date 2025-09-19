---
title: 'Store Framework CMS: nuevo permiso necesario para gestionar redirecciones'
id: 1GcT48ML2w6TZQxQyGbD6W
status: PUBLISHED
createdAt: 2023-08-31T18:10:04.246Z
updatedAt: 2023-09-05T16:32:32.516Z
publishedAt: 2023-09-05T16:32:32.516Z
contentType: updates
productTeam: VTEX IO
author: 4ubliktPJIsvyl1hq91RdK
slugEN: 2023-08-31-new-permission-required-to-manage-redirects-in-store-framework-cms
locale: es
legacySlug: store-framework-cms-nuevo-permiso-necesario-para-gestionar-redirecciones
announcementImageID: 'undefined'
announcementSynopsisES: 'Para realizar redirecciones en Store Framework CMS es necesario tener un rol con el recurso "CMS Settings".'
---

**Redirecciones** es una funcionalidad de Store Framework CMS que hace que un usuario de la tienda, al entrar en una página específica, sea redirigido automáticamente a otra página, ya sea interna o externa a la tienda. Por razones de seguridad, estamos exigiendo que los usuarios del Admin tengan un permiso específico para realizar redirecciones.

## ¿Qué cambió?

Para que los usuarios del Admin puedan crear, editar y eliminar redirecciones en el CMS, ahora es necesario que tengan un rol de acceso con el [recurso del License Manager](/es/tutorial/recursos-del-license-manager--3q6ztrC8YynQf6rdc6euk3) **CMS Settings**.

## ¿Por qué realizamos este cambio?

Agregamos este requisito de permiso por motivos de seguridad. Así, solo los usuarios del Admin que hayan sido explícitamente autorizados tendrán acceso a la funcionalidad **Redirecciones**, impidiendo, de esta forma, que usuarios no autorizados puedan crear, editar y eliminar redirecciones.

## ¿Qué se necesita hacer?

Para que un usuario del Admin pueda gestionar redirecciones en Store Framework CMS, se le debe asignar un rol de acceso específico que incluya el recurso **CMS Settings**. Consulta las instrucciones para editar los roles de acceso de un usuario en el artículo [Gestionar usuarios](/es/tutorial/gestionar-usuarios--tutorials_512#editando-usuarios).

Si deseas utilizar un rol de acceso personalizado, puedes crear un nuevo rol de acceso o editar uno existente para incluir el recurso **CMS Settings**. Consulta las instrucciones para crear y editar roles de acceso en el artículo [Roles](/es/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creando-un-rol).

Para más información sobre redirecciones, consulta el artículo [Gestión de redirecciones de URL](/es/tutorial/gestion-de-redirecciones-de-url--3UJuFrU8imSVWg134mkvJV).
