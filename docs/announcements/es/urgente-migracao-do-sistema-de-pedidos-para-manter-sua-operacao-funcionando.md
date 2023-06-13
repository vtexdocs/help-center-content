---
title: URGENTE - Migración del sistema de pedidos: para mantener su operación en funcionamiento, asegúrese de que su integración esté actualizada
id: 34eloUZ70DPYIcJkAevq32
status: PUBLISHED
createdAt: 2019-07-30T16:56:23.667Z
updatedAt: 2020-04-16T00:19:33.201Z
publishedAt: 2020-04-16T00:19:33.201Z
contentType: updates
productTeam: Post-purchase
author: authors_31
slug: urgente-migracao-do-sistema-de-pedidos-para-manter-sua-operacao-funcionando
legacySlug: urgente-migracao-do-sistema-de-pedidos-para-manter-sua-operacao-funcionando
announcementImageID: 
announcementSynopsisES: Para mantener su operación en funcionamiento, asegúrese de que su integración esté actualizada
---

El día 13/06/19, [anunciamos la descontinuación de las APIs de Feed V1 y V2](/announcements/descontinuacion-del-feed-v1-y-v2-del-modulo-de-gestion-de-pedidos--4zoxe3FihrNs0yQ1g1JyG4) y la obligatoriedad de migración a V3 de este servicio. Esta API es responsable por el proceso de integración de pedidos entre VTEX y sistemas externos, como ERPs.

__Cambiamos la fecha final de migración y las tiendas que aún no se adaptaron a la nueva versión tienen hasta el día 12/08 para adecuar su integración__. Después de esta fecha, no será más posible consumir datos de pedidos utilizando las versiones anteriores de esta API, impactando su proceso de entrega de pedidos.

<div class="alert alert-info">
Las tiendas que ya estén usando la V3 de la API de Feed no necesitan realizar ninguna acción.
</div>

Es muy importante que esta migración se realice lo antes posible para que su operación no esté en riesgo. Siga las instrucciones a continuación y solicite al responsable por su integración que ejecute los cambios necesarios.

## ¿Qué necesita hacer?

Primeramente, es necesario configurar Feed v3 para consumir los datos de la fila de pedidos. Acceda a nuestro artículo para [realizar la configuración de feed](/tutorial/feed-v3-de-gestion-de-pedidos--5qDml3cQypWDRTgw69s4C1).

Para entender más sobre cómo funciona el feed, acceda a nuestro artículo sobre [cómo funciona el feed del módulo de gestión de pedidos](/tutorial/como-funciona-el-feed-v3-del-modulo-de-gestion-de-pedidos--5SzSKee2f666YCoWkm0eQC).
