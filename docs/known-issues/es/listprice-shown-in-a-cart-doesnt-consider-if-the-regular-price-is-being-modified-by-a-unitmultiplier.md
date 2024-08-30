---
title: 'El ListPrice mostrado en un carrito no considera si el precio regular está siendo modificado por un unitMultiplier'
id: 13cdmEllp9RB30DSJ9Ttka
status: PUBLISHED
createdAt: 2022-05-13T16:53:11.761Z
updatedAt: 2022-11-25T21:51:31.513Z
publishedAt: 2022-11-25T21:51:31.513Z
firstPublishedAt: 2022-05-13T16:53:12.286Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: el-listprice-mostrado-en-un-carrito-no-considera-si-el-precio-regular-esta-siendo-modificado-por-un-unitmultiplier
locale: es
kiStatus: Backlog
internalReference: 578649
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


El ListPrice de un carrito interactúa con el precio expuesto para mostrar un precio antiguo frente al actual, en una cuestión de resaltar los descuentos.

El precio expuesto es el Precio de Venta, que además de las promociones, también se modifica automáticamente por un "multiplicador de unidades" si existe. Como si se tratara de un artículo de alimentación, que se vende en paquetes de 0,3 kg (siendo el multiplicador unitario), donde el precio normal (por ejemplo: 4 dólares) está siempre relacionado con cada kg. Para este ejemplo, el Precio de Venta será "PrecioOriginal*MultiplicadorUnitario", totalizando $1.2.

El Precio de Venta se muestra automáticamente cuando es diferente (y mayor) que el precio expuesto. Considerando el SellingPrice modificado por un UnitMultiplier, el frontend estará mostrando ListPrice=$4.00 y Price=$1.20, pero sin ser un descuento real (pero ya incluyendo uno si existe).



## Simulación


Para recrear el escenario, basta con crear un carrito con artículos que coincidan con el ejemplo anterior.



## Workaround


Recomendamos ocultar el ListPrice en el frontend para los artículos que tienen un UnitMultiplier.

