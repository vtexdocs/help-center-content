---
title: 'El campo "Url Logo" en la solicitud de actualización del vendedor no se actualiza'
id: 1WmNl3RgesWAUL8rjitJV1
status: PUBLISHED
createdAt: 2022-01-21T15:18:15.945Z
updatedAt: 2022-11-25T21:41:41.226Z
publishedAt: 2022-11-25T21:41:41.226Z
firstPublishedAt: 2022-06-06T18:41:25.659Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: el-campo-url-logo-en-la-solicitud-de-actualizacion-del-vendedor-no-se-actualiza
kiStatus: Fixed
internalReference: 271480
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Al intentar actualizar el campo "UrlLogo" en la ruta /api/catalog_system/pvt/seller no se reflejan los cambios.

Además, el valor en la API siempre se devuelve como null independientemente del valor establecido en el campo de la interfaz.



## Simulación



- Envíe una solicitud con un valor válido en el campo UrlLogo utilizando esta API: https://developers.vtex.com/vtex-rest-api/reference/catalog-api-seller#catalog-api-post-seller
- Espere a que la caché (algo así como 5 a 10 minutos) y compruebe que este campo UrlLogo volverá como vacío: https://developers.vtex.com/vtex-rest-api/reference/catalog-api-seller#catalog-api-get-seller

Observe que el campo UrlLogo no se actualiza, siempre devuelve un valor "nulo". (Incluso después de 1h+, no hay caché en absoluto)



## Workaround


n/a

