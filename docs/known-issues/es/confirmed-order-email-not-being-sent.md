---
title: 'No se envía el correo electrónico de confirmación del pedido'
id: 4RelMFApLldLtf0GxhYzdt
status: PUBLISHED
createdAt: 2023-03-10T22:07:59.908Z
updatedAt: 2023-08-28T14:53:51.322Z
publishedAt: 2023-08-28T14:53:51.322Z
firstPublishedAt: 2023-03-10T22:08:01.026Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: no-se-envia-el-correo-electronico-de-confirmacion-del-pedido
locale: es
kiStatus: Fixed
internalReference: 423628
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Checkout no mapea todos los flujos donde el "GatewayCallback" debe disparar el evento "Raised OrderPlaced", por lo que los flujos no mapeados son aptos para no disparar este evento como se espera, afectando directamente al email de confirmación de pedido a enviar.


##

## Simulación


No hay forma de simular el escenario.



## Workaround


N/A



