---
title: "Las hojas de trabajo Pick and Pack permanecen abiertas y no pueden completarse"
id: 6ziWFnEwm3BV9vswfyfE3I
status: PUBLISHED
createdAt: 2025-01-14T15:10:24.044Z
updatedAt: 2025-02-19T17:47:31.449Z
publishedAt: 2025-02-19T17:47:31.449Z
firstPublishedAt: 2025-01-14T15:10:25.061Z
contentType: knownIssue
productTeam: Pick and Pack
author: 2mXZkbi0oi061KicTExNjo
tag: Pick and Pack
slugEN: las-hojas-de-trabajo-pick-and-pack-permanecen-abiertas-y-no-pueden-completarse
locale: es
kiStatus: Backlog
internalReference: 1160144
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Los estados de las hojas de trabajo incluyen **pendiente**, **para empaquetar**, **completado** y **cancelado**.

Al cerrar una hoja de trabajo, debe alcanzar el estado **completado** o **cancelado**. Un posible problema es que no se alcancen estos dos estados finales, lo que impediría completar el proceso.

Esto podría ocurrir si los elementos asociados a la hoja de trabajo no han sido revisados por el selector o están bloqueados por procesos pendientes, como transferencias o aprobaciones.

Como resultado, la hoja de trabajo queda bloqueada en un estado que no permite que el flujo continúe.



## Simulación



- El selector accede a la hoja de trabajo.
- El selector procede a recoger cada elemento.
- Una vez finalizado el picking, todos los elementos de la hoja de trabajo se marcan como "**Picking**".
- La hoja de trabajo pasa automáticamente al estado "**Completado**", pero este comportamiento no se produce.



## Workaround


No hay solución





