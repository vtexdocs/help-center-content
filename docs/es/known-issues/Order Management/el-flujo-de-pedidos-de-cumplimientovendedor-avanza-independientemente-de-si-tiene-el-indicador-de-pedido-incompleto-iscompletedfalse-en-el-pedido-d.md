---
title: "El flujo de pedidos de Cumplimiento/Vendedor avanza independientemente de si tiene el indicador de pedido incompleto (isCompleted=false) en el pedido de Marketplace"
id: 1wy7o9sS7qKnvVlaJd9Pq9
status: PUBLISHED
createdAt: 2024-11-21T18:39:13.496Z
updatedAt: 2024-11-21T19:56:54.571Z
publishedAt: 2024-11-21T19:56:54.571Z
firstPublishedAt: 2024-11-21T18:39:14.505Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: el-flujo-de-pedidos-de-cumplimientovendedor-avanza-independientemente-de-si-tiene-el-indicador-de-pedido-incompleto-iscompletedfalse-en-el-pedido-de-marketplace
locale: es
kiStatus: Backlog
internalReference: 345526
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>



En los escenarios de gestión de pedidos de VTEX, siempre tendremos dos pedidos y, en cierto modo, flujos de trabajo independientes, estos son el pedido de Marketplace y el de Fulfillment.

En este caso, el problema se produce cuando, por algún motivo, el pedido **Marketplace** se marca como incompleto (`"isCompleted": false`), sin embargo, el pedido **Fulfillment** se crea con éxito y queda en estado "**Waiting for fulfillment authorization**", y Fulfillment sólo sale de este estado en dos situaciones, una automática, que es la correcta, cuando el Marketplace recibe la notificación de pago y el propio marketplace notifica al fulfillment, permitiéndole continuar el flujo, o la propia cuenta puede hacerlo deliberadamente, pudiendo no recibir el pago del pedido que será entregado. Mientras que el comportamiento esperado es cancelar ambos pedidos.

Acciones dentro del **pedido de Cumplimiento** como "Empezar a tramitar", o enviar la notificación de factura sin antes consultar el estado del **pedido de Marketplace** (si está completo o no), pueden hacer que el **flujo de trabajo de Cumplimiento** continúe independientemente de tener el **pedido de Marketplace** incompleto.

El problema principal es realizar el cumplimiento del pedido sin un pedido (principal) de Marketplace completo, y seguramente sin un proceso de pago correcto.


##

## Simulación



No es un escenario que se pueda replicar, sin embargo, es posible validar la propiedad en el JSON del **pedido de Marketplace** `"isCompleted:"` si actualmente está con el valor `false`, y el **pedido de Fulfillment (Vendedor)** `"isCompleted:"` con valor `true` y su flujo de trabajo permitiendo avanzar el pedido.

Ejemplo de **Pedido de mercado** propiedad `"isCompleted": false`:
 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/known-issues/Order%20Management/el-flujo-de-pedidos-de-cumplimientovendedor-avanza-independientemente-de-si-tiene-el-indicador-de-pedido-incompleto-iscompletedfalse-en-el-pedido-d_1.png)


##

## Workaround


La idea es poder evitar que el flujo de pedidos avance si el pedido de Marketplace está incompleto. La idea es bloquear cualquier acción para continuar con el pedido de Cumplimiento, y asegurar que se cancela, junto con el pago, si ambos están activos o no se han cancelado ya.

Por otro lado, la idea es que el cliente evite realizar cualquier acción sobre el pedido si el pedido del Marketplace fue marcado como incompleto.


