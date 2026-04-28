---
title: 'Eventos de Headless CMS disponibles en Audit'
id: 2WQz4dwteRahTD71hIHNNc
status: PUBLISHED
createdAt: 2023-12-08T14:36:53.841Z
updatedAt: 2023-12-08T14:57:21.295Z
publishedAt: 2023-12-08T14:57:21.295Z
contentType: updates
productTeam: Master Data
author: 1malnhMX0vPThsaJaZMYm2
slugEN: 2023-12-08-headless-cms-events-available-in-audit
locale: es
legacySlug: eventos-de-headless-cms-disponibles-en-audit
announcementImageID: 'undefined'
announcementSynopsisES: 'Agregamos los eventos de Headless CMS a los logs de Audit.'
---

[Audit](/es/docs/tutorials/audit), el módulo que registra los eventos que ocurren en tu tienda para auditorías futuras, ahora procesa eventos de [Headless CMS](/es/docs/tutorials/gestion-de-paginas): la solución VTEX para gestionar contenido web y que ofrece autonomía para crear, editar y publicar contenido a través del Admin VTEX.

## ¿Qué cambió?

Agregamos los eventos de Headless CMS que figuran en la siguiente tabla a los logs de Audit:

| Acción | Descripción | Detalles del evento |
|---|---|---|
| TRY_PUBLISHING | Intento de publicar una página. | ID del evento. |
| TRY_PUBLISH_IN_RELEASE | Intento de publicar un release. | ID del evento. |
| TRY_UNPUBLISHING | Intento de despublicar una página. | ID del evento. |
| RESTORE_CONTENT | Restauración de contenido. | ID del evento. |
| TRY_UPDATING_DRAFT | Intento de actualizar un borrador. | ID del evento. |
| TRY_UNPUBLISHING_AND_OVERWRITING | Intento de despublicar y sobrescribir una página. | ID del evento. |
| done.invoke.deleteContent | Eliminación de contenido. | ID del evento. |
| done.invoke.deleteContentVariant | Eliminación de una versión del contenido. | ID del evento. |

En la columna **Acción**, todos los eventos de Headless CMS también muestran la siguiente información:

* **CONTENT_ID:** código identificador único de contenido.
* **VARIANT_ID:** código identificador único de la versión del contenido.
* **WORKSPACE**: workspace en el que se realizó el cambio.

> ℹ️ Consulta la[ lista completa de eventos disponibles en Audit](/es/docs/tutorials/eventos-disponibles-en-audit).

## ¿Qué se necesita hacer?

No se requiere ninguna acción. El cambio en Audit ya está activo para todas las cuentas y ya registran la [lista de eventos](#que-cambio) antes mencionados.
