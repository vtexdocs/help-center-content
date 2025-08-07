---
title: "NPS - no aceptamos respuestas con más de 65536 caracteres"
id: 11XAxAg1dG2aKQc9lzRsfp
status: PUBLISHED
createdAt: 2022-03-03T18:45:54.398Z
updatedAt: 2022-11-25T22:05:24.116Z
publishedAt: 2022-11-25T22:05:24.116Z
firstPublishedAt: 2022-03-03T18:45:54.787Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: nps-no-aceptamos-respuestas-con-mas-de-65536-caracteres
locale: es
kiStatus: Backlog
internalReference: 317389
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


No aceptamos respuestas de NPS con más de 65536 caracteres



## Simulación


Realizar una compra con más de 223 artículos utilizando el conector NPS. La pasarela no admite orderList tan largos y muestra este mensaje:

Mensaje: Unknown Error on AutoSettleSe ha superado la cuota máxima de tamaño de mensajes entrantes (65536). Para aumentar la cuota, utilice la propiedad MaxReceivedMessageSize en el elemento de enlace correspondiente.



## Workaround


No hay ninguna solución.

