---
title: 'No se restablece el uso del cupón en los pedidos incompletos'
id: 1iJr9GTJ8gG852YDVWTttl
status: PUBLISHED
createdAt: 2022-08-16T20:44:43.329Z
updatedAt: 2022-11-25T22:12:03.121Z
publishedAt: 2022-11-25T22:12:03.121Z
firstPublishedAt: 2022-08-16T20:44:43.833Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slug: no-se-restablece-el-uso-del-cupon-en-los-pedidos-incompletos
kiStatus: Backlog
internalReference: 639418
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>



Actualmente, en VTEX tenemos lo que se conoce como Orden Incompleta, para referencia pruebe https://help.vtex.com/en/tutorial/entendendo-os-pedidos-incompletos--tutorials_294 y https://support.vtex.com/hc/en-us/articles/360060106912-How-to-investigate-incomplete-orders>

Si se ha utilizado un cupón y el pedido ha recibido el estado de incompleto, se cuenta el uso del cupón, aunque el pedido no siga adelante.
Este comportamiento se pone de manifiesto en los casos de pedidos realizados con un cupón de un solo uso, cuando el uso del cupón de un solo uso se contabiliza en un pedido incompleto, el comprador no puede realizar un nuevo pedido con el mismo código de cupón porque se registró un uso en él.



## Simulación


No aplicable para este KI.



## Workaround



Para los cupones de un solo uso, la solución que sugerimos es volver a crear el cupón para los usuarios afectados.

