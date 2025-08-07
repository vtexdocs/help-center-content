---
title: 'La API PUT Brand no actualiza la propiedad "LinkID'
id: 7IK10cFmwCLVUdroqFNXYp
status: PUBLISHED
createdAt: 2025-05-07T16:06:45.066Z
updatedAt: 2025-05-07T16:06:45.722Z
publishedAt: 2025-05-07T16:06:45.722Z
firstPublishedAt: 2025-05-07T16:06:45.722Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: la-api-put-brand-no-actualiza-la-propiedad-linkid
locale: es
kiStatus: Backlog
internalReference: 1222015
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Actualmente, la API disponible para actualizar los datos de marca, no está recibiendo la información para actualizar correctamente la propiedad "LinkId".

Si se envían datos modificando esta información en el cuerpo de la petición, la respuesta de la API mostrará como si se hubiera actualizado, pero en realidad, no ha cambiado nada.


##

## Simulación


1 - Para una marca existente, actualizar sus datos linkId utilizando la API mencionada.

2 - Compruebe el cuerpo de la respuesta, mostrará falsamente que los datos se han actualizado.

3 - Utilice la API GET Marca y Contexto para obtener los datos y no se habrán actualizado https://developers.vtex.com/docs/api-reference/catalog-api#get-/api/catalog/pvt/brand/-brandId-



## Workaround


La única solución es crear una nueva marca con el linkId ya correcto





