---
title: 'Nueva funcionalidad: opt-in de sellers en promociones'
id: 1qatANjT2sZnpaYqSdHzVl
status: PUBLISHED
createdAt: 2025-09-22T11:32:44.398Z
updatedAt: 2025-09-22T19:38:42.292Z
publishedAt: 2025-09-22T19:38:42.292Z
contentType: updates
productTeam: Others
author: 2AhArvGNSPKwUAd8GOz0iU
slugEN: 2025-09-22-new-feature-seller-opt-in-for-promotions
locale: es
legacySlug: nueva-funcionalidad-opt-in-de-sellers-en-promociones
announcementImageID: 'undefined'
announcementSynopsisES: 'Nueva funcionalidad vía API para gestionar el opt-in y opt-out de sellers en promociones.'
---

VTEX presenta la nueva funcionalidad opt-in de sellers en promociones, que permite a los sellers elegir si desean participar en promociones en el marketplace. Con este cambio, los sellers tienen mayor autonomía para gestionar su participación, obteniendo más control sobre las campañas promocionales.

## ¿Por qué realizamos este cambio?
Antes, solo los retailers podían asignar promociones a los sellers en el Admin VTEX, lo que limitaba la capacidad de los sellers para decidir en qué promociones participar. Ahora, con la funcionalidad opt-in de sellers, pueden gestionar su propia participación vía API, utilizando el endpoint `Seller opt-in or opt-out`.

Consulta a continuación los cambios que introduce la nueva funcionalidad:

- Ahora, la inclusión o remoción de sellers en promociones debe hacerse exclusivamente vía API, a través del endpoint [Seller opt-in or opt-out](https://developers.vtex.com/docs/api-reference/promotions-and-taxes-api#post-/api/rnb/pvt/calculatorconfiguration/-promotionId-/seller-opt).
- Aunque en el Admin se pueden crear y visualizar promociones, la edición de la lista de sellers participantes debe realizarse únicamente vía API.
- Si se envían IDs de sellers no válidos, la promoción se creará pero no tendrá efecto, ya que estará asociada a sellers inexistentes.

## ¿Qué se necesita hacer?
No es necesaria ninguna acción. La funcionalidad estará disponible automáticamente en todas las cuentas VTEX a partir del 22 de septiembre de 2025.

Para más información, consulta el artículo [opt-in de sellers](https://developers.vtex.com/docs/guides/seller-opt-in-promotions).

