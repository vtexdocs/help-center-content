---
title: 'Nuevos eventos disponibles en Audit'
createdAt: 2026-06-10T00:00:00.000Z
updatedAt: 2026-06-10T00:00:00.000Z
contentType: updates
productTeam: Storage
slugEN: 2026-06-10-new-events-available-in-audit
locale: es
announcementSynopsisES: 'Ampliamos la lista de eventos de Audit con nuevos registros para las aplicaciones VTEX ID, Master Data, Pedidos y Tarjeta de regalo, ofreciendo más visibilidad sobre operaciones sensibles en tu tienda.'
tags:
  - Mejora
  - Audit
---

Ampliamos la lista de eventos registrados por [Audit](/es/docs/tutorials/audit), módulo del Admin VTEX que almacena el historial de acciones realizadas en diferentes aplicaciones. Las novedades abarcan las aplicaciones **VTEX ID**, **Master Data**, **Pedidos** y **Tarjeta de regalo**.

## ¿Qué cambió?

La lista de [eventos disponibles en Audit](/es/docs/tutorials/eventos-disponibles-en-audit) pasa a incluir los siguientes registros:

### VTEX ID

| Acción | Descripción del evento | Detalles del evento |
|---|---|---|
| UserLogin | Inicio de sesión del usuario en el Admin VTEX. | ID de usuario. |
| UserLogout | Cierre de sesión del usuario en el Admin VTEX. | ID de usuario. |

### Master Data

| Acción | Descripción del evento | Detalles del evento |
|---|---|---|
| ReadPersonalInformation | Lectura de información personal. Aplicable solo a interacciones con las entidades CL y AD en la interfaz del CRM. | ID del documento. |
| CreatePersonalInformation | Creación de información personal. Aplicable solo a interacciones con las entidades CL y AD en la interfaz del CRM. | ID del documento. |
| UpdatePersonalInformation | Actualización de información personal. Aplicable solo a interacciones con las entidades CL y AD en la interfaz del CRM. | ID del documento. |
| DeletePersonalInformation | Eliminación de información personal. | ID del documento. |
| SearchPersonalInformation | Búsqueda de información personal. Aplicable solo a interacciones con las entidades CL y AD en la interfaz del CRM. | Detalles de la búsqueda. |

### Pedidos

| Acción | Descripción del evento | Detalles del evento |
|---|---|---|
| GetUnmaskedPersonalInformation | Lectura de información personal sin enmascarar en un pedido. | ID del pedido. |
| UpdatePersonalInformation | Actualización de información personal en un pedido. | ID del pedido. |

### Tarjeta de regalo

| Acción | Descripción del evento | Detalles del evento |
|---|---|---|
| LIST_GIFT_CARD_TRANSACTIONS | Ver las transacciones de las tarjetas de regalo. | ID de la tarjeta de regalo. |
| VIEW_GIFT_CARD_CONDITIONS | Ver las condiciones de las tarjetas de regalo. | ID de la tarjeta de regalo. |
| CREATE_GIFT_CARD_CONDITIONS | Crear condiciones de las tarjetas de regalo. | ID de la tarjeta de regalo. |
| EDIT_GIFT_CARD_CONDITIONS | Editar las condiciones de las tarjetas de regalo. | ID de la tarjeta de regalo. |
| EDIT_GIFT_CARD_CONFIGURATION | Editar la configuración de las tarjetas de regalo. | ID de la tarjeta de regalo. |
| CREATE_GIFT_CARD_CANCELLATION | Registrar la cancelación de las tarjetas de regalo. | ID de la tarjeta de regalo. |
| CREATE_GIFT_CARD_SETTLEMENT | Registrar la liquidación de las tarjeta de regalo. | ID de la tarjeta de regalo. |
| INSERT_GIFT_CARD_CREDITS | Insertar créditos en tarjeta de regalo. | ID de la tarjeta de regalo. |

> ℹ️ Consulta la lista completa en [Eventos disponibles en Audit](/es/docs/tutorials/eventos-disponibles-en-audit).

## ¿Qué se necesita hacer?

No se requiere ninguna acción. Los nuevos eventos ya están disponibles para todas las cuentas de VTEX y se pueden filtrar en [Audit](/es/docs/tutorials/audit) por los nombres de acción listados arriba.
