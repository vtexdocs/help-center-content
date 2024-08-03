---
title: 'Incoherencia de eventos'
id: 2YnhehJXuJcsy3f3Rezn6X
status: PUBLISHED
createdAt: 2022-06-20T23:00:31.430Z
updatedAt: 2024-05-23T12:45:46.343Z
publishedAt: 2024-05-23T12:45:46.343Z
firstPublishedAt: 2022-06-20T23:00:31.899Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: incoherencia-de-eventos
locale: es
kiStatus: Fixed
internalReference: 267299
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>



Cuando el usuario realiza un pedido en caja, se inicia un nuevo flujo de pedidos. A partir de este momento, se consulta la pasarela VTEX cuando se identifican los siguientes estados del pedido: "Pendiente de pago" y "Verificando factura". En el estado "Pendiente de pago", se espera que se envíe una notificación de pago al módulo Pedidos. Durante este periodo, pueden producirse algunos problemas con el procesamiento de eventos. Aunque no existe una única causa raíz directamente relacionada con el problema de procesamiento de eventos, cualquier otro problema interno o externo relacionado con el sistema de notificación puede provocar el bloqueo del flujo de pedidos en estado "pendiente de pago".

La cola de mensajes proporciona un protocolo de comunicación asíncrono, en el que los eventos se colocan en una cola para ser consumidos en un momento predeterminado en el futuro. Así pues, ya hemos trazado algunos escenarios en los que se produce una incoherencia en este flujo para clasificarlos y resolverlos uno por uno.


- Evento perdido/no generado;
- Evento atascado y no procesado;
- Errores de procesamiento que pueden causar inconsistencias en la base de datos.

Este KI se refiere explícitamente a los escenarios mencionados anteriormente y no pretende agotar todas las posibilidades de problemas de procesamiento de eventos que puedan ocurrir. Nuevas causas raíz o problemas relacionados, como malas respuestas del proveedor (algo que ocurre con regularidad), pueden dar lugar a situaciones en las que el pedido quede atascado. Cada caso debe investigarse individualmente para determinar la causa raíz del problema.


##

## Simulación



No hay forma de simular este comportamiento.



## Workaround


Póngase en contacto con nuestro equipo de soporte para volver a procesar manualmente el evento.





