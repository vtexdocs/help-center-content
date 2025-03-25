---
title: 'Las normas de comercialización visual cambian productos inesperados debido a identificaciones contradictorias.'
id: 2pmPJ34MdEbr2xiGbPCuzv
status: PUBLISHED
createdAt: 2024-09-04T21:10:05.272Z
updatedAt: 2024-09-04T21:10:06.016Z
publishedAt: 2024-09-04T21:10:06.016Z
firstPublishedAt: 2024-09-04T21:10:06.016Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: visual-merchandising-rules-changing-unexpected-products-due-to-conflicting-ids
locale: es
kiStatus: Backlog
internalReference: 1092750
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


El editor visual de reglas de merchandising utiliza el ID de producto para registrar las reglas, pero se procesan sobre un campo más genérico, que incluye no sólo el _ProductID_ sino también el _ProductRefID_, _SKUID_, _SKURefID_, y _EAN_, según nuestra documentación.

Si el valor de un ID de producto también forma parte de un campo ID diferente en otro producto, la regla se aplicará a ambos.


El mismo problema ocurre con las reglas de merchandising creadas con el editor manual al crear reglas por el atributo ID si el valor existe en más de un producto, pero en este caso, es posible solucionar el problema utilizando valores de ID diferentes como _SKURefID_ o _EAN_, que es más probable que sean únicos.



## Simulación


Consideremos el producto A con "productId=444" y el producto B con "productId=555", donde el SKU del producto A es "skuId=555".

Una regla para fijar u ocultar el producto B (productId=555) también se aplicará al producto A (debido a skuId=555).



## Workaround


N/A





