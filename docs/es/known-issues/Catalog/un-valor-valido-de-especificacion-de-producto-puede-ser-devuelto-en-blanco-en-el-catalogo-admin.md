---
title: 'Un valor válido de especificación de producto puede ser devuelto en blanco en el catálogo admin'
id: 46IZtoT2nSKE71g2Tj0m8y
status: PUBLISHED
createdAt: 2024-01-16T00:28:14.900Z
updatedAt: 2024-01-16T00:28:15.482Z
publishedAt: 2024-01-16T00:28:15.482Z
firstPublishedAt: 2024-01-16T00:28:15.482Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: a-valid-product-specification-value-can-be-returned-blank-in-the-catalog-admin
locale: es
kiStatus: Backlog
internalReference: 966499
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Se espera que el administrador de especificaciones de producto siempre muestre los valores correctos para las especificaciones de un producto. Sin embargo, puede que no siempre sea así.
El valor de la especificación puede ser devuelto en blanco en el admin como si no tuviera ningún valor asociado.
Además del problema de visualización, si el usuario guarda el producto utilizando el administrador de productos, el valor de especificación en blanco sobrescribirá el valor original.



## Simulación


Abra un formulario de especificación de producto y compare el valor mostrado en el admin con el valor devuelto por la API.




## Workaround


Gestionar las especificaciones del producto a través de la API





