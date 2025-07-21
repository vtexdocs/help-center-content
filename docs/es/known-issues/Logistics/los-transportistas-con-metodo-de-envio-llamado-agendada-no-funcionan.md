---
title: 'Los transportistas con método de envío llamado "Agendada" no funcionan'
id: 6tFzzGMkqU5lD06m2evOLm
status: PUBLISHED
createdAt: 2025-04-08T18:54:41.289Z
updatedAt: 2025-04-08T18:54:41.826Z
publishedAt: 2025-04-08T18:54:41.826Z
firstPublishedAt: 2025-04-08T18:54:41.826Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: los-transportistas-con-metodo-de-envio-llamado-agendada-no-funcionan
locale: es
kiStatus: Backlog
internalReference: 1207733
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>



**Este KI sólo ocurre a las tiendas que utilizan "lengua portuguesa". **

Si el "Método de Envío" del transportista se nombra con algo que tiene "Agendada", y este transportista no utiliza la función "Programar entrega", Logística entiende que este transportista debe tener ventanas disponibles, y si estas ventanas no se encuentran, el sistema no puede calcular el SLA, y el retorno de la simulación está vacía. Por lo tanto, ¡el transportista no funcionará!


##

## Simulación


Solo necesita nombrar el "Método de Envío" con algo que tenga "Agendada".



## Workaround


Simplemente elimine la palabra "Agendada", entonces funcionará correctamente.





