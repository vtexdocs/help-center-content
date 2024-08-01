---
title: 'La API de creación de productos no envía valores nulos como fecha de lanzamiento.'
id: 6IjwYVm9SdNEtW9aNYkSrj
status: PUBLISHED
createdAt: 2024-04-29T15:10:44.454Z
updatedAt: 2024-04-29T15:10:45.337Z
publishedAt: 2024-04-29T15:10:45.337Z
firstPublishedAt: 2024-04-29T15:10:45.337Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: la-api-de-creacion-de-productos-no-envia-valores-nulos-como-fecha-de-lanzamiento
locale: es
kiStatus: Backlog
internalReference: 1024207
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Al utilizar las API de creación o actualización de productos en la aplicación de catálogo: https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/product y enviar el campo releaseDate como null, en su valor, se crea con la fecha actual en su lugar.


##

## Simulación


1 - Crea o actualiza un nuevo producto, en tu tienda, a través de la API mencionada, pasando, en su cuerpo de petición, el campo releaseDate como null.
2 - Acceda a la interfaz de administración del catálogo o utilice un GET en la misma ruta de la API para obtener los datos enviados.
3 - El campo releaseDate mostrará el valor de la fecha enviada en lugar de un null.



## Workaround


-





