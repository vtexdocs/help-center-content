---
title: 'Nuevos eventos de tarjeta de regalo en el módulo Audit'
id: 5jHm2DriEUU70ZOUT28bIj
status: PUBLISHED
createdAt: 2025-08-25T17:59:16.648Z
updatedAt: 2025-08-25T18:39:13.093Z
publishedAt: 2025-08-25T18:39:13.093Z
contentType: updates
productTeam: Master Data
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: 2025-08-25-new-gift-card-events-available-in-the-audit-module
locale: es
legacySlug: nuevos-eventos-de-tarjeta-de-regalo-en-el-modulo-audit
announcementImageID: 'undefined'
announcementSynopsisES: 'Agregamos eventos de tarjeta de regalo a los logs de Audit.'
---

[Audit](https://help.vtex.com/es/tutorial/audit--5RXf9WJ5YLFBcS8q8KcxTA) es el módulo que registra los eventos de acciones en tu tienda VTEX para propósitos de auditoría. VTEX ha optimizado Audit con tres nuevos eventos relacionados con operaciones de tarjetas de regalo.

## ¿Qué cambió?

Agregamos los siguientes eventos de tarjeta de regalo en las aplicaciones de **Catálogo (API)** y **Tarjeta de regalo**:

### Catálogo (API)
| Acción | Descripción | Detalles del evento |
|---|---|---|
| GiftCard Create | Creación de una [tarjeta de regalo nativa](https://help.vtex.com/es/tutorial/gift-card--tutorials_995) (GiftCard System). | ID de la tarjeta de regalo creada y del usuario que realizó la acción. |
| GiftCard List All Paged | Flujo interno para mostrar tarjetas de regalo disponibles. | ID de las tarjetas de regalo devueltas por la API y del usuario que realizó la acción. |

### Tarjeta de regalo
| Acción | Descripción | Detalles del evento |
|---|---|---|
| LIST_CARDS_FROM_API | Visualización de la [lista](https://developers.vtex.com/docs/api-reference/giftcard-api#post-/giftcards/_search) de tarjetas de regalo nativas (GiftCard System) | ID de las tarjetas de regalo disponibles para el carrito de compras. |

## ¿Qué se necesita hacer?

No se requiere ninguna acción. La optimización de [Audit](https://help.vtex.com/es/tutorial/audit--5RXf9WJ5YLFBcS8q8KcxTA) ya está disponible para todas las cuentas.

Más información en [Eventos disponíveis en Audit](https://help.vtex.com/es/tutorial/eventos-disponibles-en-audit--6r1Mzcu5NmkmmDLJlz9CCZ).
