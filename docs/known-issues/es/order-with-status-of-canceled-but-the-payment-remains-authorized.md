---
title: 'Pedido con estado cancelado pero el pago sigue autorizado'
id: 19WmIjIbAQmJ19AOC4q56N
status: PUBLISHED
createdAt: 2022-05-11T12:49:23.081Z
updatedAt: 2024-06-28T17:45:57.362Z
publishedAt: 2024-06-28T17:45:57.362Z
firstPublishedAt: 2022-05-11T12:49:23.599Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: pedido-con-estado-cancelado-pero-el-pago-sigue-autorizado
locale: es
kiStatus: Fixed
internalReference: 420019
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


En algunos casos en los que el pedido queda incompleto o anulado al producirse algún fallo de comunicación con la Pasarela, el pago queda autorizado y/o aprobado, no entrando en el flujo de anulación y no devolviéndose automáticamente el importe pagado. Además, se pueden enviar accidentalmente correos electrónicos transaccionales, que también permiten el pago de recibos bancarios, ya que la URL irá con él.


##

## Simulación


No hay manera de simular. Pero tenemos algunos casos que esto sucedió antes.



## Workaround


N/A

