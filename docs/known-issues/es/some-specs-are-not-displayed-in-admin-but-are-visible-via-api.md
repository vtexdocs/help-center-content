---
title: 'Algunas especificaciones no se muestran en Admin, pero son visibles a través de la API'
id: 4nZgiUms8dkC8Y1LrBUHQ3
status: PUBLISHED
createdAt: 2022-04-14T13:26:50.927Z
updatedAt: 2023-05-12T19:29:34.542Z
publishedAt: 2023-05-12T19:29:34.542Z
firstPublishedAt: 2022-04-14T13:26:51.328Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: algunas-especificaciones-no-se-muestran-en-admin-pero-son-visibles-a-traves-de-la-api
locale: es
kiStatus: Backlog
internalReference: 418348
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Algunas especificaciones no se muestran en Admin, pero son visibles a través de la API.


##

## Simulación


Ver las especificaciones de un producto en el admin y por API.



## Workaround


Eliminar las especificaciones de API defectuosas para cada SKU de producto

- Especificación de producto: https://developers.vtex.com/docs/api-reference/catalog-api#delete-/api/catalog/pvt/product/-productId-/specification/-specificationId-
- Especificación SKU: https://developers.vtex.com/docs/api-reference/catalog-api#delete-/api/catalog/pvt/stockkeepingunit/-skuId-/specification/-specificationId-




