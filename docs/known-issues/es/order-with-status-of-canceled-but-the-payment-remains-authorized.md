---
title: 'Pedido con estado de anulado pero el pago sigue autorizado'
id: 19WmIjIbAQmJ19AOC4q56N
status: PUBLISHED
createdAt: 2022-05-11T12:49:23.081Z
updatedAt: 2022-11-25T21:51:23.997Z
publishedAt: 2022-11-25T21:51:23.997Z
firstPublishedAt: 2022-05-11T12:49:23.599Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: pedido-con-estado-de-anulado-pero-el-pago-sigue-autorizado
kiStatus: Backlog
internalReference: 420019
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


En algunos casos en los que el pedido está incompleto o se cancela cuando hay algún fallo de comunicación con la Pasarela, el pago permanece autorizado y/o aprobado, no entrando en el flujo de cancelación y no se devuelve automáticamente el importe pagado. Además, los correos electrónicos transaccionales pueden ser enviados accidentalmente, lo que también permite el pago de recibos bancarios, ya que la URL irá con él.



## Simulación


No hay forma de simularlo. Pero tenemos algunos casos en los que esto ha ocurrido antes.



## Workaround


N/A

