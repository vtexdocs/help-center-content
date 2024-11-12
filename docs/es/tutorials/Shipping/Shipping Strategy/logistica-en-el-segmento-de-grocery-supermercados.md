---
title: 'Logística en el segmento de grocery (supermercados)'
id: tutorials_142
status: PUBLISHED
createdAt: 2017-04-27T22:16:54.342Z
updatedAt: 2019-12-31T15:20:20.356Z
publishedAt: 2019-12-31T15:20:20.356Z
firstPublishedAt: 2017-04-27T23:00:45.231Z
contentType: tutorial
productTeam: Post-purchase
author: authors_84
slugEN: logistics-in-the-grocery-segment-supermarkets
locale: es
legacySlug: logistica-en-el-segmento-de-grocery-supermercados
subcategoryId: 7fTH6bP0C4IaM8qWi0kkQC
---

Uno de los grandes desafíos de las operaciones de eCommerce en el nicho de Grocery es el fulfillment, por su diferencia de almacenaje de los eCommerces comunes.

El fulfillment nada más es que el proceso del análisis de los pedidos, separación (picking), embalar (packing) hasta el despacho de las mercancías. En este artículo no abordaremos el flujo del pedido, ni tampoco parametrizaciones del módulo logístico, sólo conceptos de operación:

**Picking**: Proceso de separación de productos en el almacenaje, también conocido por order picking.

**Packing**: Proceso de embalaje final de los productos por pedido, también conocido por order packing.

## Ausencia del almacén

En la mayoría de las operaciones convencionales de eCommerce, tenemos un almacén que representa el inventario. Ya en la mayoría de las operaciones de grocery, ese almacén no es practicado debido a su capacidad de perecer, rápido detrimento de las mercancías (validez) y la gran variedad del mix de productos.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.jpg)

En este contexto, para la existencia de un almacén que represente el inventario es prácticamente necesario el doble del espacio físico y un gran flujo de pedidos para desagüe antes del detrimento de los productos.

Para evitar esta costosa y compleja operación, los grocerys en lo general utilizan los propios pdvs como fuente de inventario, o sea, los productos que están en las góndolas son los productos que alimentan el inventario de la tienda virtual. Sin embargo, hay dos puntos fundamentales en este modelo:

1: La separación de los productos se lleva a cabo en medio a los clientes de la tienda física, así, es necesario determinar horarios de corte estratégicos, para que el producto no sea disputado entre los canales.

La mejor práctica es realizar el picking en horarios nocturnos, donde el flujo de clientes es infinitamente menor en establecimientos 24 horas, y nulo en establecimientos convencionales.

2: Existe la posibilidad de que se venda el producto en la tienda virtual, sin embargo, de no estar más disponible en la góndola para el picking, o sea, el cliente de la tienda física compró el producto entre los intervalos de separación.

La mejor práctica es posibilitar que el cliente opte por productos similares ya en el momento de la compra. O sea, comprando un jabón en polvo de la marca x acepta recibir un jabón en polvo de la marca y. 

Hay diversas posibilidades de manejarlo en la tienda virtual, las más practicadas son a través de “ítems attachment”, donde posibilitamos explicitar en el carrito de compras la aceptación del similar, o hasta mismo antes del carrito, cuando haga clic en comprar el producto, abrir las posibilidades de cuáles productos el cliente aceptaría en similitud al elegido. Es posible catastrar ese listado de productos en escaparates convencionales del catastro del sku, como “similares”, “sugerencias” o “accesorios” y asociada a los ítems attachments.

[Vea más informaciones sobre attachments.](lab.vtex.com/docs/vtex.js/lib/latest/checkout/index.html#addItemAttachment)

Caso el cliente revoque la aceptación de similitud, basta [realizar un change en el pedido](http://lab.vtex.com/docs/oms/api/latest/orders/index.html#registrar-mudanas) y crear un vale compras, que a su vez puede ser automatizado a través del [sistema de gift-cards](http://lab.vtex.com/docs/gcs/api/latest/giftcard/index.html#listar-gift-cards).

## Picking _por ola_

A partir de volúmenes medianos (superior a 30 pedidos diarios), el método de picking más recomendado al nicho de grocery es el denominado “por ola”. Este método es realizado en dos pasos:
1. Se agrupan todos los productos, sin embargo, sin distinción de pedidos. Reduciendo, así, los movimientos de entre las direcciones de las mercancías.
2. Después de la separación de los productos, envíelos a un área donde se montan los pedidos. Es posible realizar esas olas por transportadora, rutas, muelles o lote.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_2.jpg)

## Picking _por ola lote_ favorece el Packing

Debido a los distintos tipos de mercancías vendibles en el grocery, podemos atribuir el "picking por ola lote” como el más recomendado a este nicho. Este método nada más es que realizar las ondas separadamente por lotes, más comunes: congelados, refrigerados, frescos, perecederos, no perecederos, enlatados y frágiles; confrontando los productos de los respectivos pedidos después de la separación. Así, es posible determinar prioridades de corte en la separación para no detrimento de los productos. Se recomienda el respectivo orden cronológico de priorización:

1. Enlatados
2. No perecederos
3. Perecederos
4. Frescos
5. Refrigerados
6. Frágiles
7. Congelados

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_3.jpg)

Además de que es imprescindible para la separación, el lote es muy importante en el packing, una vez que los tipos de lotes tienen necesidades características y particulares:

__1 y 2. Enlatados y No Perecederos:__ Deben ser transportados en cajas de cartón, sin la necesidad de ningún auxilio de aparato.

Ejemplos: Bebidas, utensilios domésticos, limpieza, higiene personal, belleza personal, etc.

__3. Perecederos:__ Deben ser transportados en bolsas plásticas, preferentemente separados en sacos plásticos, comúnmente usados en productos que pueden ser pesados.

Ejemplos: Farináceos, granos, galletas, temperos, vegetales, condimentos, etc.

__4 y 5. Refrigerados y Frescos:__ Deben ser transportados en bolsas térmicas, en hasta 6 horas son conservados sin la necesidad de ningún auxilio de aparato.

Ejemplos: Masas frescas, carnes, aves, pescados, lacticinios, fiambres, etc.

__6. Frágiles:__ Deben ser transportados en cajas de cartón recubiertas de saco burbuja, son conservados en hasta 6 horas. Es necesario lo máximo de cuidado en este lote.

Ejemplos: Huevos, Frutas, bombonera, patatas, etc.

__7. Congelados:__ Deben ser transportados en cajas térmicas, en hasta 6 horas son conservados con el auxilio de bloques de hielos, estos hielos deben estar preferencialmente en recipientes plásticos cerrados para evitar el envolvimiento con agua y reaprovechamiento del insumo.

Ejemplos: Helados, postres, empanados, platos listos, hamburguesas, tapas, etc.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_4.jpg)

## Despacho, transporte y entrega

Al final de la “ola por lote” se realiza el packing y el despacho ocurre en los respectivos embalajes para transporte.

Debido a los distintos embalajes que conforman el pedido, la distribución en transportistas comunes es prácticamente imposibilitada, por lo que los grocerys necesitan transportistas dedicados o propios.

En el momento de la entrega final, los productos son retirados de sus respectivos embalajes y entregados en bolsas plásticas, con excepción de las cajas de cartón y bolsas plásticas, que pueden ser entregadas al cliente final.

**Todos los descriptivos arriba son buenas prácticas, la asertividad de cada operación siempre es dictada por la seguridad con rapidez.
