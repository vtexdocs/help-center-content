---
title: 'La función getCurrentProductWithVariations de VTEX.js trae los datos del SKU del componente y no del SKU del KIT.'
id: 1m1bMbNXZVpQo9bQG1iSjn
status: PUBLISHED
createdAt: 2022-03-16T16:35:51.214Z
updatedAt: 2024-02-16T20:24:03.691Z
publishedAt: 2024-02-16T20:24:03.691Z
firstPublishedAt: 2022-03-16T16:35:51.652Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slug: la-funcion-getcurrentproductwithvariations-de-vtexjs-trae-los-datos-del-sku-del-componente-y-no-del-sku-del-kit
locale: es
kiStatus: No Fix
internalReference: 324416
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


La función `getCurrentProductWithVariations` de VTEX.js trae los datos del SKU del componente en lugar del SKU del KIT.



## Simulación


- Acceder a un PDP desde un Producto KIT;
- Utilice la función getCurrentProductWithVariations para obtener datos del KIT;
- Compruebe que la respuesta es de los componentes del SKU, y no del KIT SKU.



## Workaround


Utilice la función `getProductWithVariations({productId})` como solución. En este caso, tenemos que utilizar el ID de producto de este KIT.

