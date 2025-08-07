---
title: "Pedidos atascados en estado cancelado en cumplimiento, pero con Mercado cancelado."
id: 1EKp8ML4uFCWO862mEELbo
status: PUBLISHED
createdAt: 2025-03-24T17:16:07.545Z
updatedAt: 2025-03-26T13:56:35.231Z
publishedAt: 2025-03-26T13:56:35.231Z
firstPublishedAt: 2025-03-24T17:16:08.182Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: pedidos-atascados-en-estado-cancelado-en-cumplimiento-pero-con-mercado-cancelado
locale: es
kiStatus: Backlog
internalReference: 1198719
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


En escenarios donde los pedidos de Fulfillment no pueden ser cancelados debido a alguna inconsistencia, pero el pedido de Marketplace puede pasar a estado cancelado, no podremos desbloquear, ya que el Vendedor intenta cancelar el pedido de Marketplace nuevamente y da error, ya que el pedido de Marketplace ya está cancelado, rompiendo la validación que hace fulfillment.


##

## Simulación


Actualmente no podemos simular este escenario, ya que se produce debido a algún tipo de inconsistencia o retraso en el endpoint o errores en otros módulos, como el catálogo.



## Workaround


No tenemos una solución para este problema, es decir, el pedido del vendedor estará en estado "cancelado".





