---
title: "Las normas de comercialización cambian productos inesperados debido a identificaciones contradictorias"
id: 2pmPJ34MdEbr2xiGbPCuzv
status: PUBLISHED
createdAt: 2024-09-04T21:10:05.272Z
updatedAt: 2025-04-28T15:37:21.913Z
publishedAt: 2025-04-28T15:37:21.913Z
firstPublishedAt: 2024-09-04T21:10:06.016Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: las-normas-de-comercializacion-cambian-productos-inesperados-debido-a-identificaciones-contradictorias
locale: es
kiStatus: Backlog
internalReference: 1092750
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Las Reglas de merchandising procesan IDs, que se utilizan para registrar las reglas, sobre un campo más genérico. Incluye más que _ProductID_ pero también _ProductRefID_, _SKUID_, _SKURefID_, y _EAN_, según nuestra documentación.

Si el valor de un ID de producto también forma parte de un campo ID diferente en otro producto, la regla se aplicará a ambos.

En el caso del Editor Visual, aunque Merchandising Rules utiliza el productID para registrar las reglas, se procesará en un campo genérico.


##

## Simulación


Considere el producto A con "productId=444" y el producto B con "productId=555", donde el SKU del producto A es "skuId=555".

Una regla para fijar u ocultar el producto B (productId=555) también se aplicará al producto A (debido a skuId=555).



## Workaround


Es posible solucionar el problema utilizando valores de ID diferentes, como _SKURefID_ o _EAN_, que tienen más probabilidades de ser únicos.

