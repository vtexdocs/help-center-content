---
title: 'La API del catálogo Crear archivo SKU sólo funciona con una URL'
id: 2rbU28Rw8AESiAvzuc6cWf
status: PUBLISHED
createdAt: 2022-10-26T13:30:57.669Z
updatedAt: 2022-11-25T21:41:36.443Z
publishedAt: 2022-11-25T21:41:36.443Z
firstPublishedAt: 2022-10-26T13:30:58.226Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: la-api-del-catalogo-crear-archivo-sku-solo-funciona-con-una-url
kiStatus: Fixed
internalReference: 503153
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


La API del catálogo Crear archivo SKU sólo funciona con la opción 1 ( enviar una imagen a través de la URL)
`https://{nombre de cuenta}.{entorno}.``com.br/api/catalog/pvt/stockkeepingunit/skuId/file``



## Simulación



- Vaya a https://developers.vtex.com/vtex-rest-api/reference/catalog-api-sku-file#catalog-api-post-sku-file
- En `BODY PARAMS` selecciona `Opción 2` y sube una imagen
- Copia el cURL y envía el POST
- Obtenga el mensaje de respuesta:

    { "Mensaje": "Field Url is required"}


## Workaround


No hay ninguna solución

