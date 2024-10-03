---
title: 'Gane más agilidad en la gestión de los eventos de sus pedidos con el Feed v3'
id: 49FssyfGcJfvGfrb3JQjVr
status: PUBLISHED
createdAt: 2019-02-18T19:55:07.210Z
updatedAt: 2024-01-03T18:00:45.130Z
publishedAt: 2024-01-03T18:00:45.130Z
contentType: updates
productTeam: Post-purchase
author: 6AcGyun1hSWewU8YcaQiO
slugEN: 2019-02-18-get-more-agility-managing-your-orders-events-with-feed-v3
locale: es
legacySlug: gane-mas-agilidad-en-la-gestion-de-los-eventos-de-sus-pedidos-con-el-feed
announcementImageID: ''
announcementSynopsisES: 'A través de sus nuevas funcionalidades, el Feed v3 permite una gestión más eficaz de los registros de su feed. '
---

En respuesta a las solicitudes de la última versión, las nuevas funcionalidades del Feed v3 garantizan un mejor performance en la operación de su tienda. Presentando filtros en las llamadas y configuración de un tiempo de espera para exhibición de un evento en el feed, la nueva versión posibilita velocidad y facilidad para el consumo de registros del feed.

## Ventajas del Feed v3

- Exhibición integral de los registros siempre que haya eventos a consumir en la fila.
- Posibilidad de filtrar eventos, reduciendo la cantidad de requests para el consumo y requests de commit.
- Configuración de un tiempo de espera para la exhibición de un evento en el feed después de él ser consultado y no _commitado_.
- Response vacío solamente cuando no haya registros en la fila para el consumo.
- Hook para informar nuevos eventos en tiempo real, sin la necesidad de requests programados.

## Que Cambia

Por seren soluciones independientes y no tratarse de una migración, es posible activar el Feed v3 y utilizar simultáneamente la última versión de feed integrada a su tienda. El lanzamiento del Feed v3 no generará impacto en la consistencia de los eventos de su fila de pedidos.

## Que usted necesita hacer

Leya el paso a paso de la configuración en [Feed v3](https://developers.vtex.com/docs/guides/orders-feed).
