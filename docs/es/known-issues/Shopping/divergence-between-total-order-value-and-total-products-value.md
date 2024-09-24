---
title: 'Divergencia entre el valor total del pedido y valor total de los productos'
id: 20XszEUpq8MKweAyqMyIkM
status: PUBLISHED
createdAt: 2018-08-22T19:31:56.591Z
updatedAt: 2022-12-22T20:45:08.319Z
publishedAt: 2022-12-22T20:45:08.319Z
firstPublishedAt: 2018-08-22T20:33:38.843Z
contentType: knownIssue
productTeam: Shopping
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: divergencia-entre-el-valor-total-del-pedido-y-valor-total-de-los-productos
locale: es
kiStatus: Backlog
internalReference: 
---

## Sumario

En algunos casos, el valor total del pedido difiere de la suma de los valores de los productos (sumando también el valor de envío y posibles descuentos, cuando hay). La causa conocida se refiere a la existencia de productos con unidad multiplicadora distinta de `1` en el pedido.

El pedido se cierra y se transacciona normalmente en VTEX. Pero dependiendo de los flujos externos de la integración, pueden ocurrir problemas por la divergencia creada.

## Simulación

Ejemplo de ocurrencia:

![image](//images.ctfassets.net/alneenqid6w5/4sJOKvC97OggkWYoCQaa6G/c6b38b60fc500436bb36a5ae6409094e/image.png)

En ese caso, el valor total del pedido cobrado del cliente quedó en `R$ 7,98`. Sin embargo, al sumar los valores de venta registrados en cada producto, el total sería de `R$ 7,95`.

## Workaround

Si ocurren problemas externos a VTEX, es necesario rodearlos directamente en la integración. La sugerencia es ratear la sobra manualmente entre algunos de los ítems del pedido directamente en el sistema de destino (ERP, emisor de NFe etc.)


