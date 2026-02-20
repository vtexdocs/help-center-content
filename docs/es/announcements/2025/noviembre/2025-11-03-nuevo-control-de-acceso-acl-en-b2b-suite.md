---
title: 'Nuevo control de acceso (ACL) en B2B Suite'
id: 2X2FQV6w21L2EkmGEgGGh9
status: PUBLISHED
createdAt: 2025-11-03T17:30:37.645Z
updatedAt: 2025-11-04T12:34:24.479Z
publishedAt: 2025-11-04T12:34:24.479Z
contentType: updates
productTeam: Others
author: 2AhArvGNSPKwUAd8GOz0iU
slugEN: 2025-11-03-new-access-control-acl-in-b2b-suite
locale: es
legacySlug: nuevo-control-de-acceso-acl-en-b2b-suite
announcementImageID: 'undefined'
announcementSynopsisES: 'Implementación de control de acceso (ACL) en B2B Suite incluye nuevos permisos para gestionar usuarios y organizaciones.'
---

A partir de 4 de noviembre de 2025, **B2B Suite** contará con un nuevo control de acceso basado en permisos (ACL o Access Control List). Esta actualización optimiza la seguridad y la gestión de usuarios y organizaciones compradoras y garantiza que solo los [roles](/es/docs/tutorials/roles) autorizados puedan ver o editar información de la tienda.

Con el nuevo modelo, el acceso a **organizaciones compradoras**, **centros de costo** y **usuarios** en el Admin VTEX depende de permisos específicos. 

## ¿Qué cambió?
Antes, cualquier usuario con acceso al Admin VTEX podía ver y editar datos de organizaciones compradoras.

Con la nueva **lista de control de acceso**, solo los usuarios con los permisos correspondientes en [License Manager](/es/docs/tutorials/recursos-del-license-manager) pueden ejecutar esas acciones.

Los permisos disponibles son:

- **buyer_organization_view**: permite ver organizaciones, centros de costo y usuarios.
- **buyer_organization_edit**: permite crear, editar y eliminar organizaciones, centros de costo y usuarios.

Estos permisos se pueden configurar en **Buyer Organizations > Management** al editar los **Roles de usuarios** en el Admin VTEX.

## ¿Qué se necesita hacer?
Para activar el nuevo control de acceso, actualiza las **aplicaciones de B2B Suite** a una versión compatible.  

Para más información, consulta la documentación [Activar control de acceso (ACL) en B2B Suite](https://developers.vtex.com/docs/guides/enabling-an-access-control-list-acl-in-b2b-suite).

