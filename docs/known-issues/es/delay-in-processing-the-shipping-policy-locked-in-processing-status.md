---
title: 'Retraso en la tramitación de la póliza de envío (bloqueada en estado de "tramitación")'
id: 5wl2TdIbyQeCF8eoo5oYKl
status: PUBLISHED
createdAt: 2022-05-17T17:26:58.778Z
updatedAt: 2022-11-25T21:59:43.903Z
publishedAt: 2022-11-25T21:59:43.903Z
firstPublishedAt: 2022-05-17T17:26:59.689Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slug: retraso-en-la-tramitacion-de-la-poliza-de-envio-bloqueada-en-estado-de-tramitacion
locale: es
kiStatus: Backlog
internalReference: 396914
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Al cargar una hoja de cálculo y luego hacer clic en "guardar cambios" en las configuraciones de la política de envío, la hoja de cálculo debe ser procesada por nuestro módulo de logística. El tiempo de procesamiento puede variar en función del tamaño del archivo, pero suele tardar unos minutos. En algunos casos, el tiempo de procesamiento puede durar hasta un par de horas o incluso días, y el estado permanece bloqueado en "procesamiento".
Un punto importante es que este proceso no afecta a la disponibilidad de la política de envíos mientras se está procesando. La configuración se mantendrá hasta que se finalice la nueva.



## Simulación


Lamentablemente, no hay forma de simular este escenario.



## Workaround


Una posible solución es cargar de nuevo la hoja de cálculo. Si el estado sigue siendo "procesando" durante más de una hora después de la recarga, por favor, abra un ticket al soporte de VTEX.

