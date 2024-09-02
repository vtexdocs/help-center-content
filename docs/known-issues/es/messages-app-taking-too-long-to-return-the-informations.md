---
title: 'La aplicación Mensajes tarda demasiado en devolver la información.'
id: 5GnHyQaPlqCW0KNar1tlMC
status: PUBLISHED
createdAt: 2024-01-30T14:16:58.627Z
updatedAt: 2024-01-30T14:16:59.326Z
publishedAt: 2024-01-30T14:16:59.326Z
firstPublishedAt: 2024-01-30T14:16:59.326Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slug: la-aplicacion-mensajes-tarda-demasiado-en-devolver-la-informacion
locale: es
kiStatus: Backlog
internalReference: 567305
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


En el proceso de indexación, llamamos a la aplicación de mensajes para guardar la información traducida de los productos, el principal problema es que las peticiones están tardando demasiado en volver y con eso, algunas tiendas que tienen muchos idiomas no indexan completamente o tienen sus indexaciones atascadas.


##

## Simulación


Comprueba cualquier tienda que tenga una gran cantidad de idiomas, más de 10 y empezará a ralentizar la respuesta de los mensajes.
Puede reflejarse en otros sistemas que dependen de los mensajes para traducir información.



## Workaround


N/A

