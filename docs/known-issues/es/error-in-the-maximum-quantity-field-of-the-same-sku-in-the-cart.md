---
title: 'Error en el campo de cantidad máxima de la misma SKU en la Cesta'
id: 5xW5unmFphzQCwsmEochaG
status: PUBLISHED
createdAt: 2022-07-05T17:39:46.732Z
updatedAt: 2022-11-25T21:49:06.186Z
publishedAt: 2022-11-25T21:49:06.186Z
firstPublishedAt: 2022-07-05T17:39:47.173Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: error-en-el-campo-de-cantidad-maxima-de-la-misma-sku-en-la-cesta
locale: es
kiStatus: Backlog
internalReference: 587394
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Cuando la tienda configura el campo "cantidad máxima de una misma SKU en el carrito" y se trata de un pedido procedente de un marketplace, si la cantidad de artículos del pedido es mayor que la configurada en el admin, está permitiendo que los pedidos se integren, no respetando la cantidad máxima de skus configurados.



## Simulación


Intentando insertar un pedido desde un marketplace certificado con la cantidad por encima del valor configurado en el campo de cantidad máxima de la misma SKU en el carrito del administrador.



## Workaround


N/A

