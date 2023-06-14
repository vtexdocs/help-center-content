---
title: 'Fallo en la cancelación (PPP) cuando cancellationId=null'
id: 4yNCRQ1xhA8lEp5AGRs5eu
status: PUBLISHED
createdAt: 2022-06-21T21:37:04.567Z
updatedAt: 2022-11-25T22:07:04.838Z
publishedAt: 2022-11-25T22:07:04.838Z
firstPublishedAt: 2022-06-21T21:37:05.374Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: fallo-en-la-cancelacion-ppp-cuando-cancellationidnull
kiStatus: Backlog
internalReference: 333897
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>





Cuando el proveedor responde con cancellationId=null debería ser el desencadenante para llamar a una cancelación manual, sin embargo, no está ocurriendo. El protocolo espera que al menos 3 solicitudes hayan fallado antes de iniciar la cancelación manual y cambiar el estado del pago y la transacción a "cancelado".

El problema se produce cuando el método de pago utiliza una app de pago y debido a este comportamiento, explicado anteriormente, la app en la caja nunca recibe una notificación de la cancelación y hace un bucle indefinido.



## Simulación





No se puede simular.



## Workaround





Es posible implementar un proceso manual de cancelación proactiva de las transacciones a través de la API o haciendo clic en el botón de cancelación en la página del pedido.

