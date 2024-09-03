---
title: 'Inconsistencia en la cantidad de artículos con opciones de montaje en la cesta'
id: 5whwOflEwjIEpHIhv5sO2E
status: DRAFT
createdAt: 2024-08-02T11:03:16.194Z
updatedAt: 2024-08-02T11:03:16.194Z
publishedAt: 
firstPublishedAt: 
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: inconsistencia-en-la-cantidad-de-articulos-con-opciones-de-montaje-en-la-cesta
locale: es
kiStatus: Fixed
internalReference: 417098
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


En los productos con personalización de opciones de montaje, un artículo padre tiene componentes, que se denominan artículos hijo. Este es el caso, por ejemplo, de un frigorífico (artículo padre) con garantía ampliada (artículo hijo). Existe una incoherencia en la plataforma cuando se añade a la cesta la cantidad total disponible en stock del artículo padre y la misma cantidad de uno de sus artículos hijo. Supongamos que un cliente está comprando un producto que tiene opciones de montaje personalización. Cuando añade al carrito la cantidad total disponible en stock del artículo padre y la misma cantidad de un artículo hijo asociado a él, la cantidad final del artículo hijo será diferente de la cantidad final del artículo padre. El carrito tendrá una unidad más del artículo hijo con respecto al artículo padre.


##

## Simulación



- Acceda a la tienda;
- Añadir un producto que tiene un artículo hijo al carrito (seleccionar la cantidad total disponible en stock);
- Seleccionar el artículo hijo del producto, en la misma cantidad;
- Comprobar los artículos de la cesta.

Observe que la cesta contiene una unidad más del artículo hijo con respecto al artículo padre.


##

## Workaround


N/A




