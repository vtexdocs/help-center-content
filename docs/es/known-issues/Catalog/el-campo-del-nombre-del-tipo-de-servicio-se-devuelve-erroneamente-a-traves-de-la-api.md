---
title: "El campo del nombre del tipo de servicio se devuelve erróneamente a través de la API"
id: 1FdozyiQb5DLe7TPICyCDR
status: PUBLISHED
createdAt: 2024-01-04T16:36:17.926Z
updatedAt: 2024-01-04T16:36:18.628Z
publishedAt: 2024-01-04T16:36:18.628Z
firstPublishedAt: 2024-01-04T16:36:18.628Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: el-campo-del-nombre-del-tipo-de-servicio-se-devuelve-erroneamente-a-traves-de-la-api
locale: es
kiStatus: Backlog
internalReference: 961278
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Actualmente las APIs del Catálogo SKU no están devolviendo correctamente el nombre de un tipo de servicio. En su lugar se está devolviendo el nombre del valor del servicio.


##

## Simulación



1. Hacer una petición GET SKU sobre un sku asociado a un servicio: https://developers.vtex.com/docs/api-reference/catalog-api#get-/api/catalog/pvt/stockkeepingunit/-skuId-
2. Observa que el objeto services devuelve un campo serviceTypeId y un Name, sin embargo el campo Name no muestra el nombre del tipo de servicio en sí.



## Workaround


N/A





