---
title: 'El indicador "Nombre del producto" de XML no funciona correctamente'
id: 6YDbpRns3LCN02bVKM8aaf
status: PUBLISHED
createdAt: 2023-10-26T11:35:14.500Z
updatedAt: 2023-10-26T11:35:15.285Z
publishedAt: 2023-10-26T11:35:15.285Z
firstPublishedAt: 2023-10-26T11:35:15.285Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: el-indicador-nombre-del-producto-de-xml-no-funciona-correctamente
locale: es
kiStatus: Backlog
internalReference: 925965
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Al crear un XML, tenemos dos opciones diferentes para establecer el nombre del producto, en las banderas "Nombre del producto" y "Nombre del producto + Nombre SKU". Sin embargo, la bandera "Nombre del producto" no se tiene en cuenta, y el nombre del producto en el archivo sigue la regla:
- Si el producto tiene más de un SKU o el nombre del SKU es igual al nombre del producto = se mostrará sólo el Nombre del producto.
- Si el producto sólo tiene una SKU y el nombre de la SKU no es igual al nombre del producto = se concatenarán los nombres del producto y de la SKU.



## Simulación



1. Compruebe si tiene en el catálogo productos que coincidan con la descripción anterior
2. Crea un XML seleccionando la bandera "Nombre del producto"
3. Ver que para los productos con un solo SKU, el nombre del producto será concatenado con el nombre SKU



## Workaround


N/A




