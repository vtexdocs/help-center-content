---
title: 'Las notificaciones de inventario al indexador se almacenan en caché'
id: 2eFmUbO1PR7ahxAGiMkqZd
status: PUBLISHED
createdAt: 2023-10-05T12:48:05.930Z
updatedAt: 2024-05-14T11:26:36.897Z
publishedAt: 2024-05-14T11:26:36.897Z
firstPublishedAt: 2023-10-05T12:48:06.727Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: las-notificaciones-de-inventario-al-indexador-se-almacenan-en-cache
locale: es
kiStatus: Fixed
internalReference: 914545
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cuando una cuenta de franquicia o vendedor notifica a la cuenta principal (o marketplace) sobre cambios en el inventario, la cuenta envía el producto al indexador para tener la información más actualizada.

El sistema responsable de recibir las notificaciones y pasarlas al indexador es Broadcaster.

El problema es que el flujo de trabajo Disponibilidad -> Emisor -> Indexador funciona a un ritmo muy rápido y en algunos casos la información sigue almacenada en caché. De esta forma el Indexador se queda con la información antigua hasta una nueva indexación.


##

## Simulación


No hay una forma fácil de simular este escenario, ya que no ocurre en todas las ocasiones.
El proceso debería ser:

1. La cuenta de la franquicia actualiza un inventario;
2. El emisor envía el producto al indexador;
3. 3. El indexador actualiza el sku de la cuenta principal con la información antigua.



## Workaround


N/A





