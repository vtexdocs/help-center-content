---
title: 'Los productos no se emparejan correctamente cuando el productName contiene números'
id: 7Kr0VtRScH54j04Rh2uuOj
status: PUBLISHED
createdAt: 2023-03-01T18:55:20.183Z
updatedAt: 2023-10-19T12:08:30.076Z
publishedAt: 2023-10-19T12:08:30.076Z
firstPublishedAt: 2023-03-01T18:55:20.910Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slug: los-productos-no-se-emparejan-correctamente-cuando-el-productname-contiene-numeros
locale: es
kiStatus: Fixed
internalReference: 762525
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Cuando el vendedor envía un sku al marketplace, el sistema Matcher se encarga de consultar el catálogo del marketplace y verificar si ya existe un producto similar al skus del vendedor.
Lo hace principalmente por el ProductName.

Sin embargo, esta búsqueda no siempre funciona cuando en este Nombre de producto hay caracteres numéricos.


##

## Simulación



1. El vendedor envía los skus al mercado con números en el Nombre del Producto;
2. Los skus se aprobarán por separado (en lugar de tener una coincidencia) en el catálogo del marketplace.



## Workaround


Envíe el producto sin números en su nombre.





