---
title: "Redondeo incorrecto del precio cuando el multiplicador unitario es distinto de uno"
id: 7EhT7xXL5TJpQrfoXs3kn7
status: PUBLISHED
createdAt: 2025-07-14T12:56:21.332Z
updatedAt: 2025-07-16T14:55:05.155Z
publishedAt: 2025-07-16T14:55:05.155Z
firstPublishedAt: 2025-07-14T14:50:39.819Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: redondeo-incorrecto-del-precio-cuando-el-multiplicador-unitario-es-distinto-de-uno
locale: es
kiStatus: Backlog
internalReference: 1258875
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


La Búsqueda Inteligente puede recuperar el precio de un producto con más de 2 decimales cuando el multiplicador de unidades es distinto de 1.

Por ejemplo, una unidad de un producto cuesta 69,26 $, cuando el multiplicador de unidades es 85.

Entonces, el cálculo que realiza la Búsqueda Inteligente, cuando el multiplicador unitario es diferente de 1, da como resultado un precio de $0,815.

Como el precio resulta ser un precio con tres decimales, cuando se redondea mediante el `vtex.format-currency`, el redondeo del precio diverge, resultando en $0,82 en lugar de $0,81, que es el precio que se muestra en la simulación de la caja.

Este precio redondeado se utiliza para calcular el precio del componente. Como se redondea antes del cálculo, el precio final es incorrecto.


##

## Simulación


En un contexto de búsqueda, cargue un producto que tenga un multiplicador unitario distinto de 1 y cuyo unitMultiplier*price dé como resultado un número con más de 2 decimales.



## Workaround


N/A




