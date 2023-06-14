---
title: 'El sistema no permite la cancelación múltiple con la Tarjeta de Regalo'
id: 2htvtVV2158piX4lTYhAvE
status: PUBLISHED
createdAt: 2022-03-27T12:54:40.811Z
updatedAt: 2022-11-25T22:05:17.362Z
publishedAt: 2022-11-25T22:05:17.362Z
firstPublishedAt: 2022-03-27T12:54:41.420Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: el-sistema-no-permite-la-cancelacion-multiple-con-la-tarjeta-de-regalo
locale: es
kiStatus: Backlog
internalReference: 309117
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


El sistema no envía la cancelación parcial de una transacción de Tarjeta de Regalo.

También encontramos un escenario en el que ocurre lo mismo, sin embargo la cancelación funciona. Esto deja el importe del reembolso más alto que el importe de la transacción porque el valor reembolsado es el primer reembolso parcial + el segundo reembolso con el importe completo.



## Simulación


Encuentre una transacción en la que se haya solicitado un reembolso/cancelación parcial utilizando la Tarjeta de Regalo.



## Workaround


No hay ninguna solución, sin embargo, el usuario puede añadir el crédito reembolsable a través de la interfaz de administración.

