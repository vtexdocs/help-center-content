---
title: "Recogidas no permite más de 1000 SKU por carga"
id: 4XC2ZLCsBkQhexRB4YrNMn
status: PUBLISHED
createdAt: 2023-04-19T13:53:02.339Z
updatedAt: 2023-10-10T13:31:27.610Z
publishedAt: 2023-10-10T13:31:27.610Z
firstPublishedAt: 2023-04-19T13:53:02.926Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: recogidas-no-permite-mas-de-1000-sku-por-carga
locale: es
kiStatus: Backlog
internalReference: 793274
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Actualmente, no es posible subir artículos al nuevo módulo de colecciones con una lista que tenga más de 1000 SKUs, ya que el proceso se agotará.




##

## Simulación



1. Ir al módulo de nuevas colecciones

2. Seleccione la pestaña "Importar".

3. Utilice una hoja que tenga más de 1000 SKUs (es decir, 300 productos con 50 skus, cada uno)

4. La importación generará un tiempo de espera.




## Workaround


Cargue gradualmente utilizando hojas más pequeñas, las colecciones CMS heredadas y/o la API de inserción de SKU a subcolección https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/subcollection/-subCollectionId-/stockkeepingunit





