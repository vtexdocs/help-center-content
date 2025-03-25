---
title: 'El cambio de stock se completa incluso después de recibir el error 500'
id: 3dlP8iOBiL2tfPRvjm2kUZ
status: PUBLISHED
createdAt: 2022-06-20T12:40:08.834Z
updatedAt: 2024-07-03T18:12:47.665Z
publishedAt: 2024-07-03T18:12:47.665Z
firstPublishedAt: 2022-06-20T12:40:09.126Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: stock-change-is-completed-even-after-receiving-error-500
locale: es
kiStatus: No Fix
internalReference: 388176
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


El cliente está tratando de actualizar la cantidad de sku en el inventario y la solicitud recibió el error 500. A pesar del error, la cantidad en el inventario se cambia.


##

## Simulación


No ha sido posible reproducir el error.

Pero en la respuesta vemos el error 500, y el inventario vemos el mismo valor antes de actualizar.




## Workaround


No hay ninguna solución. Pero es importante comprobar esta actualización se produjo.

