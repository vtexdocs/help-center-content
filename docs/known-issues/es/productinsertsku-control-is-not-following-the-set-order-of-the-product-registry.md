---
title: El control $product.InsertSku no está considerando la ordenación definida en el registro del producto
id: laM7GlhASOuGisu2e8KGO
status: PUBLISHED
createdAt: 2018-01-11T20:32:44.037Z
updatedAt: 2022-12-22T20:46:04.880Z
publishedAt: 2022-12-22T20:46:04.880Z
firstPublishedAt: 2018-01-11T20:42:41.646Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog,Portal (CMS)
slug: el-control-productinsertsku-no-esta-considerando-la-ordenacion-definida-en-el-registro-del-producto
kiStatus: Backlog
internalReference: 
---

## Sumario

El control $product.InsertSku de plantilla de estante, está representando las variaciones (SKU) ordenadas por el ID y no por la posición configurada en el administrador.

## Simulación

Para reproducir este comportamiento:
1. Configure un producto con variación de SKU
2. En la pantalla de gestión de SKU, ordene las SKU de forma que el SKU de ID más bajo se posicione después de un SKU de ID más alto
3. Configure una plantilla de estante con el control $product.InsertSku
4. Utilice esta plantilla de estante en algún estante o vitrina
5. Acceda a ese estante o vitrina, por la visión del cliente

Usted observará que los SKU se ordenan por el ID y no por el posicionamiento definido.

## Workaround

La solución de contorno para este comportamiento es garantizar que el ID de las SKU sea equivalente a su posición dentro del producto.

Por ejemplo: Un producto tiene los SKU "P, M y G". El SKU "P" necesita tener el ID menor seguido de la SKU "M" y luego "G", con mayor ID.

