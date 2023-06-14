---
title: 'El cambio de stock se completa incluso después de recibir el error 500'
id: 3dlP8iOBiL2tfPRvjm2kUZ
status: PUBLISHED
createdAt: 2022-06-20T12:40:08.834Z
updatedAt: 2022-11-25T21:59:29.796Z
publishedAt: 2022-11-25T21:59:29.796Z
firstPublishedAt: 2022-06-20T12:40:09.126Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slug: el-cambio-de-stock-se-completa-incluso-despues-de-recibir-el-error-500
locale: es
kiStatus: Backlog
internalReference: 388176
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


El cliente está tratando de actualizar la cantidad de sku en el inventario y la solicitud recibió el error 500. A pesar del error, la cantidad en el inventario se cambia.



## Simulación


No ha sido posible reproducir el error.

Pero en la respuesta vemos el error 500, y en el inventario vemos el mismo valor antes de la actualización.




## Workaround


No hay ninguna solución. Pero es importante comprobar esta actualización ocurrió.

