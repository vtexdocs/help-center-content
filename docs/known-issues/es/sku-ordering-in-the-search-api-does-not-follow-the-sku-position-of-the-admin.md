---
title: 'La ordenación de las SKU en la API de búsqueda no sigue la posición de las SKU del administrador'
id: 6onugQyL4odM0jExTsMqnZ
status: PUBLISHED
createdAt: 2022-02-01T15:33:37.326Z
updatedAt: 2022-11-25T21:48:56.005Z
publishedAt: 2022-11-25T21:48:56.005Z
firstPublishedAt: 2022-02-01T15:33:37.776Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: la-ordenacion-de-las-sku-en-la-api-de-busqueda-no-sigue-la-posicion-de-las-sku-del-administrador
locale: es
kiStatus: Backlog
internalReference: 515042
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Actualmente, la respuesta de la API de búsqueda no respeta el posicionamiento de las SKU dentro del producto en Admin. En la respuesta, las SKU se ordenan en orden ascendente de SkuId.



## Simulación


- Utilice la API de búsqueda `/api/catalog_system/pub/products/search/?fq=productId:`
- Tenga en cuenta que las SKU se ordenan por el Id. de SKU, en orden ascendente



## Workaround


N/A

