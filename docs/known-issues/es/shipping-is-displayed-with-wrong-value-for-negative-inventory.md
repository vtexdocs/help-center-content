---
title: El envío se muestra con valor incorrecto cuando hay stock negativo.
id: 3EwZH688kMiS8uyugOk4uw
status: PUBLISHED
createdAt: 2017-08-23T13:13:48.362Z
updatedAt: 2022-12-22T20:46:20.542Z
publishedAt: 2022-12-22T20:46:20.542Z
firstPublishedAt: 2017-08-23T18:05:42.039Z
contentType: knownIssue
productTeam: Post-purchase
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slug: el-envio-se-muestra-con-valor-incorrecto-cuando-hay-stock-negativo
kiStatus: Backlog
internalReference: 
---

## Sumario

Cuando hay sólo una unidad disponible de un producto, pero hay una cantidad negativa en otro stock de ese mismo producto, al seleccionar para comprar dos unidades en el carrito, el valor de la carga se muestra mal después del mensaje de * "La cantidad deseada para el elemento # ### no esta disponible"*

El problema sólo ocurre momentáneamente, y si finaliza la compra mientras se produce, el valor se cambia al valor correcto.

## Simulación

Colocar un SKU en dos inventarios pasando por el mismo muelle, en un inventario dejar sólo con * 1 * de cantidad, y otro con * -1 * de cantidad.
Colocar este producto en el carrito, agregar un código postal que la compañía atienda, y seleccionar para comprar dos unidades.

## Workaround

No hay Workaround.

