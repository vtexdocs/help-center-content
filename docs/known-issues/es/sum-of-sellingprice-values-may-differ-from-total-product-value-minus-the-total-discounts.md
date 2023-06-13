---
title: La suma de los valores SellingPrice puede diferir del valor total del producto restado por los descuentos totales
id: wo1qtfZnDfI8EylRbXiPF
status: PUBLISHED
createdAt: 2019-09-13T18:08:45.753Z
updatedAt: 2022-12-22T20:45:50.832Z
publishedAt: 2022-12-22T20:45:50.832Z
firstPublishedAt: 2019-09-14T03:33:18.921Z
contentType: knownIssue
productTeam: Shopping
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: la-suma-de-los-valores-sellingprice-puede-diferir-del-valor-total-del-producto-restado-por-los-descuentos-totales
kiStatus: Backlog
internalReference: 
---

## Sumario

La suma de los valores unitarios de los productos con el descuento aplicado (propiedad 'sellingPrice') puede diferir del valor total de los productos restados por los descuentos totales.

Esto se debe a que el cálculo del descuento por unidad es una distribución del descuento total entre todos los artículos y sus cantidades, lo que puede causar problemas de redondeo. Al sumar los valores que se han redondeado, se detecta la diferencia con el total original.

Por lo tanto, 'sellingPrice' debe usarse como referencia, manteniendo los totalizadores como el valor real.

La aparición se mejora en las tiendas que usan menos de 2 decimales, cuando el redondeo se usa más.

## Simulación

Ejemplo de ocurrencia:

- Carro con 2 unidades de un producto que cuesta $ 190;
- Productos totales a $ 380;
- 25% de descuento;
- Descuentos totales a $ 95;
- El valor unitario con descuento es de $ 142.5;
- Si la tienda no utiliza decimales, el valor unitario final será de $ 142.

En este escenario:

- Productos totales = $ 380;
- Descuentos totales = $ 95;
- Total del pedido = $ 285.

Pero la suma del precio de venta de los artículos, que ya tiene el descuento aplicado, es de $ 284.

## Workaround

Actualmente no hay un workaround disponible para este escenario.

