---
title: 'ProductImpression no muestra todos los productos cuando el SKU se muestra individualmente'
id: 43HBv7fXndckoe9mCbMlwW
status: PUBLISHED
createdAt: 2022-12-16T12:23:06.408Z
updatedAt: 2022-12-21T18:15:49.063Z
publishedAt: 2022-12-21T18:15:49.063Z
firstPublishedAt: 2022-12-16T12:23:06.957Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slug: productimpression-no-muestra-todos-los-productos-cuando-el-sku-se-muestra-individualmente
locale: es
kiStatus: Backlog
internalReference: 717617
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cuando la tienda "separa" el SKU de un producto para mostrarlo individualmente en el escaparate, el ProductImpression del GTM sólo ve los productos por su productID, no por cada SKUId. Así que si el producto tiene 3 SKUs diferentes en la página de búsqueda, el ProductImpression sólo lo mostrará como un producto.


##

## Simulación


Ir a cualquier tienda que "separa" el SKU de un producto en productos individuales y tratar de ver el ProductImpression de la capa de datos en GTM.



## Workaround



N/A





