---
title: "Catálogo Desactivar productid usando API no es inactivar SKU"
id: 4RLMpCxYNtCz4WkAiwL8ws
status: PUBLISHED
createdAt: 2025-01-03T17:38:07.670Z
updatedAt: 2025-07-17T19:33:18.513Z
publishedAt: 2025-07-17T19:33:18.513Z
firstPublishedAt: 2025-01-03T17:38:08.681Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: catalogo-desactivar-productid-usando-api-no-es-inactivar-sku
locale: es
kiStatus: Backlog
internalReference: 1157944
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Desactivar productid usando API no es inactivar SKU
El producto sigue disponible en PDP


##

## Simulación



✅️ Producto inactivo
❌️ SKU activo UI
❌️ Sku disponible en PDP

PUT - https://VTEX.vtexcommercestable.com.br/api/catalog/pvt/product/

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/known-issues/Catalog/catalogo-desactivar-productid-usando-api-no-es-inactivar-sku_1.png)


##

## Workaround


Siempre que se desee inactivar todo el producto, incluidas sus SKU, el comerciante deberá inactivar las SKU




