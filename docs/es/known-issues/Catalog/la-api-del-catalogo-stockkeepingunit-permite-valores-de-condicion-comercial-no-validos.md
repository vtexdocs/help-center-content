---
title: "La API del catálogo stockkeepingunit permite valores de condición comercial no válidos"
id: 1ONAspL4Wj9fdu2tYcX4Ur
status: PUBLISHED
createdAt: 2023-03-10T20:44:01.459Z
updatedAt: 2024-07-01T18:48:57.278Z
publishedAt: 2024-07-01T18:48:57.278Z
firstPublishedAt: 2023-03-10T20:44:02.006Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: la-api-del-catalogo-stockkeepingunit-permite-valores-de-condicion-comercial-no-validos
locale: es
kiStatus: No Fix
internalReference: 769053
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Actualmente, la API de mantenimiento de existencias https://catalog.vtexcommercestable.com.br/api/catalog/pvt/stockkeepingunit/{skuid} no realiza ninguna comprobación para el campo "CommercialConditionId".

Esto permite que el usuario introduzca datos no válidos, como un Id que no existe en una tienda determinada y luego, al intentar acceder al formulario de este sku, se lance un error.



## Simulación


En la carga útil de la API de inserción de SKU https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/stockkeepingunit, utilice un Id de condición comercial que no esté presente en la tienda.

A continuación, acceda a la interfaz de usuario de este sku creado y debería enfrentarse a un mensaje de error.



## Workaround


n/a





