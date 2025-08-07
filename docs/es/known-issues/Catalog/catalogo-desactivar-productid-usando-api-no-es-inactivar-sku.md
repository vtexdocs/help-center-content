---
title: "Catálogo Desactivar productid usando API no es inactivar SKU"
id: 4RLMpCxYNtCz4WkAiwL8ws
status: PUBLISHED
createdAt: 2025-01-03T17:38:07.670Z
updatedAt: 2025-07-24T17:43:05.083Z
publishedAt: 2025-07-24T17:43:05.083Z
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

 ![](https://vtexhelp.zendesk.com/attachments/token/FVMLGum8BwYRG5crfDPmb0Gef/?name=image.png)


##

## Workaround


Siempre que se desee inactivar todo el producto, incluidas sus SKU, el comerciante deberá inactivar las SKU




