---
title: 'El sistema no permite la cancelación múltiple con Giftcard'
id: 2htvtVV2158piX4lTYhAvE
status: PUBLISHED
createdAt: 2022-03-27T12:54:40.811Z
updatedAt: 2024-06-25T13:51:28.086Z
publishedAt: 2024-06-25T13:51:28.086Z
firstPublishedAt: 2022-03-27T12:54:41.420Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: el-sistema-no-permite-la-cancelacion-multiple-con-giftcard
locale: es
kiStatus: Backlog
internalReference: 309117
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


El sistema no está enviando la cancelación parcial de una transacción de Giftcard.
También hemos encontrado un escenario en el que ocurre lo mismo, sin embargo la cancelación funciona. Esto deja el importe del reembolso más alto que el importe de la transacción porque el valor reembolsado es el primer reembolso parcial + el segundo reembolso con el importe completo.



## Simulación


Busque una transacción en la que se haya solicitado un reembolso parcial/cancelación utilizando Giftcard.



## Workaround


No hay solución, pero el usuario puede añadir el crédito reembolsable a través de la interfaz de administración.





