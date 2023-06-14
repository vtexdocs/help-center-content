---
title: 'El campo del nombre del producto en el XML devuelve el nombre del producto + el nombre del sku cuando el producto sólo tiene un sku'
id: 7sNNzBe5pLn7oigDgoCKjv
status: PUBLISHED
createdAt: 2022-09-19T19:06:55.572Z
updatedAt: 2022-11-25T21:43:35.947Z
publishedAt: 2022-11-25T21:43:35.947Z
firstPublishedAt: 2022-09-19T19:06:56.137Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: el-campo-del-nombre-del-producto-en-el-xml-devuelve-el-nombre-del-producto-el-nombre-del-sku-cuando-el-producto-solo-tiene-un-sku
kiStatus: Backlog
internalReference: 661089
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>



En el XML tenemos los campos "Nombre del producto" y "Nombre del producto + Nombre del sku". Sin embargo, si el producto sólo tiene 1 sku, el campo "Nombre del producto" no se comporta como se espera, rellenándose como "Nombre del producto + Nombre del sku".

Por ejemplo, si el nombre del producto A tiene un solo SKU (Nombre B), el campo **Nombre del producto** utilizaría A+B, en lugar de sólo A.




## Simulación



1. Cree un XML;
2. Añadir un producto con sólo 1 sku;
3. Marque el campo Nombre del producto;
4. Verifique que el retorno será el nombre del producto añadido al nombre del sku.



## Workaround


No hay solución.

