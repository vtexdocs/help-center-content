---
title: 'Identificar el ID de un SKU'
id: 4VQZsYeb3igGK2YowuEYWW
status: PUBLISHED
createdAt: 2018-02-07T13:04:01.334Z
updatedAt: 2025-06-25T19:23:02.945Z
publishedAt: 2025-06-25T19:23:02.945Z
firstPublishedAt: 2018-02-07T17:21:00.652Z
contentType: tutorial
productTeam: Management
author: authors_59
slugEN: finding-a-sku-id
legacySlug: descubrir-el-id-de-un-sku
locale: es
subcategoryId: pwxWmUu7T222QyuGogs68
---

En VTEX, un SKU (Stock Keeping Unit) corresponde a una unidad física de stock de un producto y al nivel más específico de sus variaciones. Por ejemplo, para un producto camisa, el SKU puede ser una camisa blanca tamaño P. Con el ID del SKU puedes [editar el SKU](https://help.vtex.com/es/tutorial/adicionar-ou-editar-sku--4ryZ6J45kwn3jDiQBxGiiN), entre otras acciones.

Para identificar el ID de un SKU sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Catálogo > Productos y SKUs** o ingresa [Productos y SKUs](https://help.vtex.com/es/tutorial/products-and-skus--2ig7TmROlirWirZjFWZ3By) en la barra de búsqueda en la parte superior de la página.
2. Para mostrar los [SKUs de un producto](https://help.vtex.com/es/tutorial/adicionar-ou-editar-sku--4ryZ6J45kwn3jDiQBxGiiN), haz clic en la flecha al lado del nombre del producto.
3. Busca la secuencia numérica que precede al nombre del SKU. Ese es el ID del SKU.

En el siguiente ejemplo, el producto “Corebiz camiseta” está asociado al SKU “corebiz camiseta negra” y el ID del SKU es `310119261`:

![finding_sku_id_ES](//images.ctfassets.net/alneenqid6w5/3MlMkBI75SP7R5Arj2n8ke/f79c11899c1f0a3ef783d8a67715dda1/finding_sku_id_ES.png)

## Identificar el ID del SKU por la URL

Cuando haces clic en un SKU y accedes a su [página de edición](https://help.vtex.com/es/tutorial/adicionar-ou-editar-sku--4ryZ6J45kwn3jDiQBxGiiN), la URL del navegador tiene el siguiente formato:

`https://{nombreDeCuenta}.myvtex.com/catalog-products/product/{IDproducto}/sku/{IDsku}`

La secuencia numérica que aparece al final de la URL corresponde al ID del SKU.

<div class = "alert alert-info">
  <p>Para obtener el ID de SKUs mediante la <b>Catalog API</b>, utiliza el endpoint <a href="https://developers.vtex.com/docs/api-reference/catalog-api#get-/api/catalog_system/pvt/sku/stockkeepingunitids">List all SKU IDs</a>.</p>
</div>

