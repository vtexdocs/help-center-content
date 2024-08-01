---
title: 'Pedido bloqueado en estado Pendiente de pago por falta de notificación de pago aprobado'
id: 1yM3alrrYhrpdZhBPLslZC
status: PUBLISHED
createdAt: 2024-05-24T15:04:47.795Z
updatedAt: 2024-05-24T15:04:48.820Z
publishedAt: 2024-05-24T15:04:48.820Z
firstPublishedAt: 2024-05-24T15:04:48.820Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: pedido-bloqueado-en-estado-pendiente-de-pago-por-falta-de-notificacion-de-pago-aprobado
locale: es
kiStatus: Backlog
internalReference: 1031035
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>



En el estado "Pago pendiente", se espera que se envíe una notificación de pago al módulo Pedidos. Durante este periodo, pueden producirse algunos problemas con el procesamiento de eventos.
La cola de mensajes proporciona un protocolo de comunicación asíncrono, en el que los eventos se colocan en una cola para ser consumidos en un momento predeterminado en el futuro.
Este KI se refiere explícitamente a los escenarios con conectores PPP y no pretende agotar todas las posibilidades de problemas de procesamiento de eventos que puedan ocurrir.


##

## Simulación



No hay forma de simular este comportamiento.



## Workaround



Póngase en contacto con nuestro equipo de soporte para volver a procesar manualmente el evento.





