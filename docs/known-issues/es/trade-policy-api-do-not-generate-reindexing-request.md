---
title: La API de política comercial no genera solicitudes de reindexación
id: 6xAm1zg05zDB3ff8rOloMR
createdAt: 2023-04-28T18:52:41.010Z
updatedAt: 2023-05-08T18:26:51.898Z
publishedAt: 2023-05-08T18:26:51.898Z
firstPublishedAt: 2023-04-28T18:52:41.427Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: la-api-de-politica-comercial-no-genera-solicitudes-de-reindexacion
status: Backlog
internalReference: 276511
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Usando la API https://developers.vtex.com/vtex-rest-api/reference/catalog-api-trade-policy para insertar/borrar una Política Comercial a un producto o la API no generan una petición de reindexación.


##

## Simulación


Insertar una política comercial a un producto utilizando la API, el producto no será reindexado.



## Workaround


Utilizar cualquier tipo de acción que guarde el producto (por API o interfaz) después de añadir/eliminar la Política Comercial al producto reindexará el producto y actualizará la información de la nueva política comercial.

