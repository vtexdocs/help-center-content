---
title: 'License Manager: nuevos recursos para gestionar usuarios administrativos'
id: 6rRaLNUe7mtKW5jGx84Vd4
status: PUBLISHED
createdAt: 2025-08-07T21:36:15.196Z
updatedAt: 2025-08-07T21:50:35.459Z
publishedAt: 2025-08-07T21:50:35.459Z
contentType: updates
productTeam: Identity
author: 1malnhMX0vPThsaJaZMYm2
slugEN: 2025-08-07-license-manager-new-resources-for-managing-admin-users
locale: es
legacySlug: license-manager-nuevos-recursos-para-gestionar-usuarios-administrativos
announcementImageID: 'undefined'
announcementSynopsisES: 'Simplificamos la gestión de usuarios con nuevos recursos en License Manager.'
---

Creamos dos nuevos [recursos de License Manager](/es/docs/tutorials/recursos-del-license-manager) para simplificar y estandarizar el control de acceso y agrupar acciones relacionadas con la gestión de usuarios administrativos en el Admin VTEX de forma más intuitiva.

## ¿Qué cambió?

Consolidamos los recursos heredados de lectura y escritura de información de [usuarios](/es/docs/tutorials/gestionar-usuarios-administrativos) y los [roles](/es/docs/tutorials/roles) en dos nuevos recursos del producto License Manager:

| Nombre del nuevo recurso | Clave del nuevo recurso (`resource_key`) | Descripción |
| ----- | ----- | ----- |
| Edit Admin Users | `EditAdminUsers` | Permite crear, editar y remover usuarios administrativos. |
| View Admin Users | `ViewAdminUsers` | Permite ver información de usuarios y roles. |

Estos nuevos recursos reemplazan los siguientes recursos heredados para [gestionar usuarios](/es/docs/tutorials/gestionar-usuarios-administrativos) en el Admin VTEX:

| Nombre del recurso heredado | Clave del recurso legado (`resource_key`) | Descripción del recurso heredado | Nombre del nuevo recurso | Clave del nuevo recurso (`resource_key`) |
| ----- | ----- | ----- | ----- | ----- |
| Get paged users | `Get_Users_Paged` | Permite listar los usuarios administrativos de la cuenta. | View Admin Users | `ViewAdminUsers` |
| Find user by email | `Get_User_By_Identifier` | Permite buscar usuarios administrativos por email. | View Admin Users | `ViewAdminUsers` |
| Get paged roles | `Get_Roles_Paged` | Permite listar los roles de la cuenta. | View Admin Users | `ViewAdminUsers` |
| Save user | `Save_User` | Permite crear o editar usuarios administrativos. | Edit Admin Users | `EditAdminUsers` |
| Remove user | `Remove_User` | Permite revocar el acceso de usuarios administrativos. | Edit Admin Users | `EditAdminUsers` |

## ¿Por qué realizamos este cambio?

Agrupar recursos con funciones similares optimiza el monitoreo de las acciones, reduce la redundancia y facilita la gestión de permisos basados en roles. El cambio simplifica las acciones administrativas que cada rol puede realizar y permite controlarlas con mayor facilidad.

## ¿Qué se necesita hacer?

No es necesaria ninguna acción. Analizamos los roles existentes y actualizamos automáticamente los permisos:

* Si un rol ya tenía uno o más de los recursos heredados, se añadió el nuevo recurso equivalente.  
* No se eliminó ningun permiso anterior.  
* Los recursos heredados no se han descontinuado.

Recomendamos revisar los roles existentes en la cuenta para saber cómo se aplicaron los nuevos recursos. En caso de dudas, consulta la [documentación de License Manager](/es/docs/tutorials/recursos-del-license-manager).
