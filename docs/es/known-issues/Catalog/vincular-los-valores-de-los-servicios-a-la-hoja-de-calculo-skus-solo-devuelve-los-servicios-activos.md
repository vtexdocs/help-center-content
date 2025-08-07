---
title: "Vincular los valores de los servicios a la hoja de cálculo SKUS sólo devuelve los servicios activos"
id: 1FqAokiJLWwWnsPodyTMKY
status: PUBLISHED
createdAt: 2023-08-23T17:51:58.839Z
updatedAt: 2023-08-23T17:51:59.677Z
publishedAt: 2023-08-23T17:51:59.677Z
firstPublishedAt: 2023-08-23T17:51:59.677Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: vincular-los-valores-de-los-servicios-a-la-hoja-de-calculo-skus-solo-devuelve-los-servicios-activos
locale: es
kiStatus: Backlog
internalReference: 886486
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Al exportar valores de servicios de una categoría específica en el admin el resultado solo trae los servicios activos. No permitiendo al comerciante activar servicios previamente inactivos por hoja de cálculo.


##

## Simulación



1. Crear un servicio y asociarlo a un sku;
2. Desactivar el servicio en el sku;
3. Exporte la hoja de cálculo ENLAZAR VALORES DE SERVICIO A SKU;
4. 4. Compruebe que no se devuelve el servicio anterior.



## Workaround


Utilice la API o ir directamente en el sku - servicios de administración con el fin de actualizar el servicio:
https://developers.vtex.com/docs/api-reference/catalog-api#put-/api/catalog/pvt/skuservice/-skuServiceId-





