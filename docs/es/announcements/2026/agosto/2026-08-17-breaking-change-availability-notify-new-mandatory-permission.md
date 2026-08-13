---
title: 'Breaking change: Nuevo permiso obligatorio para la aplicación Availability Notify'
slug: '2026-08-17-breaking-change-availability-notify-nuevo-permiso-obligatorio'
hidden: false
createdAt: 2026-08-17T00:00:00.000Z
updatedAt: 2026-08-17T00:00:00.000Z
contentType: updates
productTeam: Apps
slugEN: 2026-08-17-breaking-change-availability-notify-new-mandatory-permission
locale: es
announcementSynopsisES: 'A partir del 21 de septiembre de 2026, el permiso Download Notification Requests será obligatorio para descargar, procesar o eliminar solicitudes de notificación de la aplicación Availability Notify'
tags:
  - Breaking change
  - Apps
  - Identity
---

A partir del **21 de septiembre de 2026**, las operaciones administrativas de la aplicación [Availability Notify](https://developers.vtex.com/docs/apps/vtex.availability-notify) requerirán el [recurso de License Manager](https://help.vtex.com/es/docs/tutorials/recursos-del-license-manager) **Download Notification Requests**. Los usuarios y las [claves de API](https://help.vtex.com/es/docs/tutorials/claves-de-api) que no cuenten con este recurso recibirán errores de permiso o de autorización.

## ¿Qué cambió?

Las siguientes operaciones administrativas de Availability Notify requerirán el recurso **Download Notification Requests**, además de una sesión administrativa autenticada:

| Operación | Ruta/GraphQL | Acción en el Admin |
| :- | :- | :- |
| `listRequests` | `/_v/availability-notify/list-requests` | Solicitudes de descarga |
| `processUnsentRequests` | `/_v/availability-notify/process-unsent` | Procesar no enviados |
| `deleteRequest` | Mutación GraphQL | - |

Este cambio no afecta el flujo de suscripción de **Avísame** en la página de producto. Solo las operaciones administrativas y de back-office se ven afectadas.

> ℹ️ Los usuarios con el rol **Owner (Admin Super)** ya cuentan con este recurso y no necesitan realizar ninguna acción.

## ¿Por qué realizamos este cambio?

Para mejorar la granularidad de acceso y aplicar buenas prácticas de seguridad, requeriremos un recurso explícito en License Manager que limite quién puede descargar, procesar o eliminar datos de solicitudes de notificación.

## ¿Qué se necesita hacer?

Antes del **21 de septiembre de 2026** toda cuenta que utilice las operaciones **Download Requests**, **Process Unsent** o **Delete Request** debe otorgar el recurso **Download Notification Requests** a los usuarios y claves de API correspondientes:

1. En el Admin VTEX, ve a **Configuración de la cuenta > Usuarios > Roles**.
2. [Crea un rol personalizado](https://help.vtex.com/es/docs/tutorials/crear-nuevo-rol#rol-personalizado) o [edita un rol existente](https://help.vtex.com/es/docs/tutorials/roles) y agrega el recurso **Download Notification Requests** (producto **Availability Notify**).
3. Asigna ese perfil a todos los [usuarios administrativos](https://help.vtex.com/es/docs/tutorials/gestionar-usuarios-administradores#editar-usuarios) que necesiten descargar o procesar solicitudes de notificación.
4. Asigna este perfil a todas las [claves de API](https://help.vtex.com/es/docs/tutorials/claves-generadas#editar-clave-generada) utilizadas por integraciones que llaman a estas rutas.

A partir del **21 de septiembre de 2026**, se bloquearán los usuarios y las claves de API que no cuenten con el recurso. Los usuarios que intenten realizar alguna de las operaciones recibirán una alerta en el Admin por no contar con permiso. Las integraciones que llamen a esas rutas recibirán una respuesta HTTP 403 Forbidden.

Para más información sobre Availability Notify, consulta la [documentación de la aplicación](https://developers.vtex.com/docs/apps/vtex.availability-notify).
