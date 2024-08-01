---
title: 'Rutas atascadas no encontradas en la plataforma'
id: iAGlRJtK1KMBGxH2tAsrX
status: PUBLISHED
createdAt: 2023-04-19T15:54:48.241Z
updatedAt: 2023-06-28T15:56:47.493Z
publishedAt: 2023-06-28T15:56:47.493Z
firstPublishedAt: 2023-04-19T15:54:48.788Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slug: rutas-atascadas-no-encontradas-en-la-plataforma
locale: es
kiStatus: Backlog
internalReference: 793457
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Debido a la falta de notificaciones y problemas de caché, algunas rutas son cacheadas en no encontradas en vbase y en rewriter por store-indexer impactando en la experiencia cuando estas rutas vuelven a estar disponibles, siendo necesario enviar una nueva indexación y nuevas notificaciones o esperar a que el tiempo de store-indexer vuelva a activar la nueva indexación.


##

## Simulación


Este es un problema intermitente, por lo que, básicamente, no es fácil de simular, pero una vez que se almacenan rutas en vbase y/o rewriter como no encontradas, existe la posibilidad de no recibir una notificación en poco tiempo para actualizar eso




## Workaround


Para los productos,

- Intenta no almacenar rutas dentro del rewriter, a menos que sea estrictamente necesario
- Restablecer o eliminar rutas en vbase entrando en la aplicación rewriter - admin/apps/vtex.rewriter@x.x.x/setup/ - y actualizando su versión de rutas a una nueva
- Reindexar las rutas usando store-indexer
- Guardar el producto para notificar al emisor que el producto ha cambiado y que debe enviar nuevas notificaciones
Para otras rutas

- Compruebe si la ruta se almacena en rewriter como no encontrada si se actualiza para nuevos valores
- Comprueba si la API de tipo de página está atascada en un no encontrado y notifica al equipo de catálogo: `https://.vtexcommercestable.com.br/api/catalog_system/pub/portal/pagetype/`





