---
title: "Un error con el sistema de eventos al final de una transacción provoca que un pedido quede incompleto"
id: 6FzlxrxSQgIE3G62ZCJurd
status: PUBLISHED
createdAt: 2025-02-11T16:43:10.540Z
updatedAt: 2025-02-11T16:43:11.122Z
publishedAt: 2025-02-11T16:43:11.122Z
firstPublishedAt: 2025-02-11T16:43:11.122Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: un-error-con-el-sistema-de-eventos-al-final-de-una-transaccion-provoca-que-un-pedido-quede-incompleto
locale: es
kiStatus: Backlog
internalReference: 421137
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cuando se produce un error con el sistema de eventos al final de una transacción, el pedido que el cliente estaba intentando comprar no se finaliza y queda incompleto. La acción "RaiseEvent" es una acción interna que se dispara en los últimos pasos de la creación del pedido, siempre después de haberse realizado la transacción/pago (no necesariamente aprobado o analizado; pueden tener sus propios flujos y timings), cuando se produce un error en este paso, ya sea al final de una compra, por ejemplo GatewayCallback, el usuario no puede completar su compra, cancelándose así la transacción debido al fallo de este evento.


##

## Simulación


No hay forma de simular, pero podemos ver los logs:

RaiseEventyAsync falló en los últimos 30 días contados por tipo de flujo de trabajo

RaiseEventAsync & RaiseEventAsyncV2 en el tipo de flujo de trabajo PlaceOrder & NewGatewayCallback


##

## Workaround


N/A





