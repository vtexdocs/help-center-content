---
title: 'Eliminar el EAN a través de la API no es desactivar las SKU sin RefID'
id: 2DIKKs93S41F38c3PrekSO
status: PUBLISHED
createdAt: 2022-08-01T11:37:52.731Z
updatedAt: 2024-07-01T18:48:35.030Z
publishedAt: 2024-07-01T18:48:35.030Z
firstPublishedAt: 2022-08-01T11:37:53.288Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: eliminar-el-ean-a-traves-de-la-api-no-es-desactivar-las-sku-sin-refid
locale: es
kiStatus: No Fix
internalReference: 626031
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>



Las referencias deben tener un EAN o un RefId para estar activas.

Actualmente, si se eliminan todos los EAN de una SKU a través de la API, esta seguirá activa, aunque no tenga refId (no debería).





## Simulación



1. Obtenga cualquier SKU que tenga un EAN y no tenga un RefId.
2. Ejecute la API de eliminación de todos los EAN https://developers.vtex.com/vtex-rest-api/reference/catalog-api-delete-all-ean






## Workaround


n/a

