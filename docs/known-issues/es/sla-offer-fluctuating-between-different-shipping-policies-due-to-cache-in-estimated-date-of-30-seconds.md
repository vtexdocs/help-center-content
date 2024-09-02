---
title: 'La oferta de SLA fluctúa entre diferentes políticas de envío debido al caché en la fecha estimada de 30 segundos'
id: 2uN3bVrxHhj6Xs6TeQTJDr
status: PUBLISHED
createdAt: 2024-05-21T19:34:50.437Z
updatedAt: 2024-05-21T19:38:10.682Z
publishedAt: 2024-05-21T19:38:10.682Z
firstPublishedAt: 2024-05-21T19:34:53.918Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slug: la-oferta-de-sla-fluctua-entre-diferentes-politicas-de-envio-debido-al-cache-en-la-fecha-estimada-de-30-segundos
locale: es
kiStatus: Backlog
internalReference: 1036916
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


La simulación logística puede oscilar entre ofrecer SLAs si el cliente tiene políticas de envío con el mismo precio, tiempo de entrega, SlaType, coste de muelle y configuración de almacén, pero diferente prioridad de muelle.
Tenemos una caché que almacena el tiempo de entrega durante 30 segundos, por lo que cuando se hace una nueva simulación, otra política de envío con las mismas configuraciones que tiene un tiempo de muelle más largo puede ser ofrecida cuando no debería serlo.



##

## Simulación


Políticas de envío A y B con el mismo tiempo total de entrega (1 día por ejemplo), precio, coste de muelle y almacén, pero con diferentes prioridades de muelle.
Realizar un presupuesto a las 16:00:00 donde se ofrecerá la política de envío A con menor prioridad de muelle, entonces el resultado de la estimación sería para el día siguiente a las 16:01:00, estos datos se almacenan en caché durante 30 segundos;
Al realizar un nuevo presupuesto a las 16:00:10 por ejemplo, se ofrecerá la política de envío B con mayor prioridad de muelle, ya que en el primer presupuesto la hora de entrega sería por ejemplo a las 16:01:00 almacenada en caché durante 30 segundos, mientras que el segundo presupuesto B se elige porque también tiene la estimación para el día siguiente pero a las 16:00:00.




## Workaround


No existe ninguna solución para un escenario con la misma configuración que la descrita anteriormente.





