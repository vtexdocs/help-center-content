---
title: 'Imposibilidad de realizar una cancelación parcial con MercadoPagoV1'
id: 59aimeqhjGVOVkP9f6A9ls
status: PUBLISHED
createdAt: 2022-06-28T16:44:19.059Z
updatedAt: 2022-11-25T22:06:36.432Z
publishedAt: 2022-11-25T22:06:36.432Z
firstPublishedAt: 2022-06-28T16:44:19.331Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: imposibilidad-de-realizar-una-cancelacion-parcial-con-mercadopagov1
locale: es
kiStatus: Backlog
internalReference: 286738
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cuando la cancelación parcial se realiza en un pago de débito, la pasarela no realizó una solicitud a Mercado Pago y en consecuencia no se realiza la solicitud de captura porque el estado nos hizo entender que el pago ya fue capturado, lo que significa que no se devuelve el dinero del cliente



## Simulación



1. Realiza una compra con tarjeta de débito utilizando el conector MercadoPagoV1.
2. Realiza una cancelación parcial



## Workaround


No lo hay, es una limitación del sistema.

