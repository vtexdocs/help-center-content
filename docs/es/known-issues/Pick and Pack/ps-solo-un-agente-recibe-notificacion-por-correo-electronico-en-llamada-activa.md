---
title: "PS - Sólo un agente recibe notificación por correo electrónico en llamada activa"
id: 6yCJx946wLRzLt7zIFk18n
status: PUBLISHED
createdAt: 2025-04-30T13:10:26.340Z
updatedAt: 2025-04-30T13:10:27.044Z
publishedAt: 2025-04-30T13:10:27.044Z
firstPublishedAt: 2025-04-30T13:10:27.044Z
contentType: knownIssue
productTeam: Pick and Pack
author: 2mXZkbi0oi061KicTExNjo
tag: Pick and Pack
slugEN: ps-solo-un-agente-recibe-notificacion-por-correo-electronico-en-llamada-activa
locale: es
kiStatus: Backlog
internalReference: 1218130
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Durante las pruebas con Personal Shopper, se observó que sólo uno de los agentes asignados a una sesión activa recibía la notificación por correo electrónico, mientras que el otro no. Este comportamiento se produce cuando la **asignación manual de agentes** está activada y se ha reportado en **múltiples cuentas**, no sólo en una.


##

## Simulación



1. Habilitar la asignación manual de agentes en la cuenta.
2. Asignar dos agentes a una sesión de Personal Shopper activa.
3. Iniciar una llamada con un cliente desde el canal Admin.
4. Observe el siguiente comportamiento:
  - Sólo uno de los agentes recibe la notificación por correo electrónico.
  - El otro agente no recibe ninguna notificación.



## Workaround



1. Acceda a la cuenta Admin.
2. Identifique al usuario Comprador que no está recibiendo notificaciones por correo electrónico.
3. Eliminar el usuario de la configuración correspondiente.
4. Vuelva a crear el usuario utilizando la misma dirección de correo electrónico y la configuración original.
5. Guardar los cambios.
6. 6. Realice una nueva prueba para confirmar que las notificaciones por correo electrónico se envían correctamente.





