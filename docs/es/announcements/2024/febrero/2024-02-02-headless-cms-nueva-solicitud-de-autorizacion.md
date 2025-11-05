---
title: 'Headless CMS: nueva solicitud de autorización'
id: 7G056zzZmGFBztkRqhpUgj
status: PUBLISHED
createdAt: 2024-02-02T12:34:37.766Z
updatedAt: 2025-07-24T19:23:33.225Z
publishedAt: 2025-07-24T19:23:33.225Z
contentType: updates
productTeam: VTEX IO
author: 4oTZzwYoyhy1tDBwLuemdG
slugEN: 2024-02-02-headless-cms-new-authorization-requirement
locale: es
legacySlug: headless-cms-nueva-solicitud-de-autorizacion
announcementImageID: 'undefined'
announcementSynopsisES: 'CMS GraphQL API es obligatorio para la gestión de contenido. Actualiza los roles según corresponda.'
---

A partir del 15 de febrero, será obligatorio que todos los [usuarios](https://developers.vtex.com/docs/guides/api-authentication-using-user-tokens) y [claves de aplicación](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) que necesiten acceder a Headless CMS tengan los [recursos](/es/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) de License Manager `See CMS menu on the top-bar` y `Settings` agregados a sus [roles](/es/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc). Para la gestión de contenido en el Headless CMS, también es necesario contar con el [recurso](/es/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) `CMS GraphQL API`. Este requisito se aplica a la API de Headless CMS y al Admin VTEX.

## ¿Qué cambió?
Anteriormente, los usuarios y las claves de aplicación podían gestionar el contenido de la tienda en Headless CMS
 sin tener un recurso específico de License Manager asociado a su rol.

Ahora, cualquier request vía API de Headless CMS o Admin VTEX autenticará al usuario y verificará si tiene los recursos obligatorios asociados a su rol.  
Los recursos `See CMS menu on the top-bar` y `Settings` dan acceso a Headless CMS. Para la gestión de contenido, los usuarios también necesitan disponer del recurso `CMS GraphQL API`. Sin este recurso, los usuarios no podrán gestionar contenido en Headless CMS.

## ¿Por qué realizamos este cambio?
Este cambio tiene como objetivo mejorar la seguridad y simplificar el acceso del usuario a Headless CMS, brindando un entorno más controlado y seguro para gestionar el contenido de la tienda. 

## ¿Qué se necesita hacer?
Asegúrate de que los usuarios de Headless CMS tienen sus roles asociados a los recursos `CMS GraphQL API`, `See CMS menu on the top-bar` y `Settings`, ya sea [creando un nuevo rol](#crear-un-nuevo-rol) o [editando uno existente](#editar-rol).

<div style="background-color:#FFF3CD; border-left: 2px solid #F0AD4E; border-top-left-radius: 2px; border-bottom-left-radius: 2px; padding: 15px; margin-bottom: 35px">
  Para gestionar usuarios y roles, tu rol de usuario debe estar asociado al recurso `Save access profile` del producto **License Manager** Por ejemplo, [User Administrator - RESTRICTED](/es/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy#user-administrator-restricted) es un rol predefinido que tiene asociado el recurso `Save access profile`.

</div>

### Crear un rol

Si aún no has creado un rol específico para los usuarios de Headless CMS y deseas hacerlo, consulta la guía [Crear un rol](/es/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc?&utm_source=autocomplete#creating-a-role). Asegúrate de asociar el rol a los recursos `CMS GraphQL API`, `See CMS menu on the top-bar` y `Settings` en la sección **Productos y recursos**.

### Editar rol

Para editar un rol existente para usuarios de Headless CMS, sigue las instrucciones a continuación:

1. Accede al Admin VTEX.
2. En la barra superior, haz clic en el avatar de tu perfil (marcado por la inicial de tu email) y después en **Configuración de la cuenta > Roles de usuario**.
3. Haz clic en el **nombre del rol** que los usuarios de Headless CMS tienen asignado.

<div style="background-color:#cfe2ff; border-left: 2px solid #084298; border-top-left-radius: 2px; border-bottom-left-radius: 2px; margin-bottom: 10px; padding: 15px">
  Ya que los roles se pueden personalizar, los nombres pueden diferir en función de la configuración de la tienda, y cada tienda puede definir un rol específico para los usuarios de Headless CMS.
</div>

4. En la página **Editar rol**, ve a la sección **Productos y recursos**.
5. Selecciona el producto **CMS**.
6. Después, selecciona los recursos `CMS GraphQL API`, `See CMS menu on the top-bar` y `Settings`.
7. Haz clic en `Guardar`.

