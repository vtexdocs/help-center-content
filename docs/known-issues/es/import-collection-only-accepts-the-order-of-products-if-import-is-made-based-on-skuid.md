---
title: 'La colección de importación sólo acepta el orden de los productos si la importación se realiza basándose en "skuId"'
id: 7vXi2bDVyGHSMLluQi2ZWZ
status: PUBLISHED
createdAt: 2023-12-15T16:35:11.545Z
updatedAt: 2023-12-21T18:55:17.090Z
publishedAt: 2023-12-21T18:55:17.090Z
firstPublishedAt: 2023-12-15T16:35:12.450Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: la-coleccion-de-importacion-solo-acepta-el-orden-de-los-productos-si-la-importacion-se-realiza-basandose-en-skuid
locale: es
kiStatus: Fixed
internalReference: 953862
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Al importar una hoja de cálculo de productos a una colección, el usuario puede elegir seleccionar los productos por "skuId", "productId", "skuRefId" o "productRefId".

Sin embargo, el orden de los productos en la colección sólo se respeta cuando la hoja de cálculo utiliza "skuId".


##

## Simulación



1. Crear una nueva colección;
2. Utilizar hoja de cálculo de importación para añadir productos;
3. Elija un campo distinto de "skuId" para rellenar la hoja de cálculo;
4. 4. Compruebe que el orden de los productos en las colecciones es diferente del orden en la hoja de cálculo.



## Workaround


Utiliza la columna "skuId" para rellenar la hoja de cálculo.





