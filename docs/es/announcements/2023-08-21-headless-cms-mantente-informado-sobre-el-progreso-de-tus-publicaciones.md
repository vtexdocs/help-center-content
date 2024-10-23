---
title: 'Headless CMS: mantente informado sobre el progreso de tus publicaciones'
id: 3ajb4FgE6nmqjblpSEg3SP
status: CHANGED
createdAt: 2023-08-21T12:33:36.149Z
updatedAt: 2023-10-04T13:35:38.902Z
publishedAt: 2023-08-21T15:36:01.683Z
contentType: updates
productTeam: VTEX IO
author: 4oTZzwYoyhy1tDBwLuemdG
slugEN: 2023-08-21-headless-cms-stay-informed-on-your-publication-progress
locale: es
legacySlug: headless-cms-mantente-informado-sobre-el-progreso-de-tus-publicaciones
announcementImageID: ''
announcementSynopsisES: 'Mantente informado sobre las etapas de publicación de Headless CMS e identifica rápidamente errores de publicación.'
---

Headless CMS ofrece ahora una funcionalidad de notificaciones que te mantiene informado durante cada etapa del proceso de publicación. Las nuevas notificaciones proporcionan actualizaciones sobre cada etapa de las publicaciones en el VTEX Headless CMS, manteniendo a los usuarios informados acerca de las fases de compilación (build) de las publicaciones en Releases, VTEX Headless CMS y FastStore. 

![Headless CMS - Notificaciones](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/announcements/2023-08-21-headless-cms-mantente-informado-sobre-el-progreso-de-tus-publicaciones_1.gif)

Esta funcionalidad también te ayuda a identificar y notificar errores durante el deploy, indicando la etapa exacta en la que se produjo el error. También ofrece la opción de reintentar los deploys si es necesario.

## ¿Qué cambió?
Antes, cuando una publicación no se producía, era difícil determinar el origen del problema, lo que dificultaba hacer debug y notificarlo, además de retrasar el lanzamiento de las campañas.

Con la funcionalidad de notificaciones, ahora puedes mantenerte informado sobre el status de cada fase del deploy:

| Status                                  | Descripción                                           |
| --------------------------------------- | ----------------------------------------------------- |
| **Publicación iniciada**                | El CMS comenzó a publicar el release.                 |
| **Compilar**                            | El proceso de implementar los cambios del release en producción. |
| **Actualizar status de los documentos** | Actualiza todas las páginas incluidas en el release. |
| **Cerrar release**      | Actualiza el status del release.   |

Si se produce un error durante el deploy, el mensaje de la notificación indicará en qué etapa ocurrió. Puedes hacer clic en `Reintentar` para repetir el deploy.

![Headless CMS - Novo deploy](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/announcements/2023-08-21-headless-cms-mantente-informado-sobre-el-progreso-de-tus-publicaciones_2.gif)

## ¿Por qué realizamos este cambio?
La funcionalidad de notificaciones te da más autonomía para comprender y abordar los problemas relacionados con las publicaciones de tu tienda, permitiendo identificar e informar con precisión los problemas y reintentar el proceso de publicación.

## ¿Qué se necesita hacer?
Esta funcionalidad ya se encuentra implementada en Headless CMS, y no se requiere ninguna acción por tu parte.

