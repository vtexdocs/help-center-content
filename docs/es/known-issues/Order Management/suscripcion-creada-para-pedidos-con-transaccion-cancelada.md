---
title: "Suscripción creada para pedidos con transacción cancelada"
id: 3kDIxoThA1INR2JugY0NpO
status: PUBLISHED
createdAt: 2024-11-25T13:48:05.316Z
updatedAt: 2024-11-25T13:49:09.625Z
publishedAt: 2024-11-25T13:49:09.625Z
firstPublishedAt: 2024-11-25T13:48:06.281Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: suscripcion-creada-para-pedidos-con-transaccion-cancelada
locale: es
kiStatus: Backlog
internalReference: 1139745
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cuando cerramos una orden que contiene un artículo para abono, el sistema que genera el abono se dispara para crear la firma siempre que la orden recibe el aviso de que se ha realizado el pago, pero aún puede ocurrir que la transacción de esta orden se cancele posteriormente por análisis del sistema antifraude, pero incluso antes de que se cree la transacción, la firma ya se ha creado y está activada, lo que significa que se ejecutará en el siguiente ciclo aunque la orden que la originó no haya avanzado.


##

## Simulación


Para simular este escenario, es necesario

Crear un pedido cuyo artículo tenga una suscripción adjunta

Cerrar la compra con una tarjeta, pero en este punto necesita asegurarse de que la transacción es autorizada y luego enviada al sistema antifraude;

En el sistema antifraude, debe denegar la autorización de esta transacción.

Mire los detalles del pedido en OMS y verá que la suscripción se ha creado y está activa, aunque la transacción y el pedido se hayan cancelado.



## Workaround


N/A





