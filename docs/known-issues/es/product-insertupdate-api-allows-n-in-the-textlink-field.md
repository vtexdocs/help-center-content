---
title: "La API de inserción/actualización de productos permite '\n' en el campo textLink."
id: 5TfUw5tTxBEu9HkL3ypBKw
status: PUBLISHED
createdAt: 2022-06-28T16:55:53.325Z
updatedAt: 2024-02-16T20:28:55.474Z
publishedAt: 2024-02-16T20:28:55.474Z
firstPublishedAt: 2022-06-28T16:55:54.138Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: la-api-de-insercionactualizacion-de-productos-permite-n-en-el-campo-textlink
locale: es
kiStatus: No Fix
internalReference: 486459
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Actualmente, las APIs para la inserción o actualización de productos del catálogo permiten el carácter "\n" en el textLink





## Simulación


1) Utilice la API GET producto para obtener datos de un producto https://developers.vtex.com/vtex-rest-api/reference/catalog-api-product#catalog-api-get-product

2) Actualizar los datos del producto a través de la API insertando un carácter "\n" en el campo textLink: https://developers.vtex.com/vtex-rest-api/reference/catalog-api-product#catalog-api-put-product

3) Abra la URL del producto dado, recibirá una respuesta 404.





## Workaround


Al guardar estos datos a través de la interfaz de usuario (Produto.aspx) se guardan los datos correctamente, lo que permite que la página del producto se muestre correctamente.

