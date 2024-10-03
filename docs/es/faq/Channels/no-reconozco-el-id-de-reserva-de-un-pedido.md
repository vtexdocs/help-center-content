---
title: 'No reconozco el ID de reserva de un pedido. ¿Qué puede haber ocurrido?'
id: tja793G4XAWI2K8uIC4uW
status: PUBLISHED
createdAt: 2018-03-05T21:07:36.301Z
updatedAt: 2024-02-05T18:01:17.750Z
publishedAt: 2024-02-05T18:01:17.750Z
firstPublishedAt: 2018-03-05T22:28:55.349Z
contentType: frequentlyAskedQuestion
productTeam: Channels
author: 7FpKZ0rc6k4WqeymES80cw
slugEN: i-dont-recognize-the-reservation-id-of-an-order
locale: es
legacySlug: no-reconozco-el-id-de-reserva-de-un-pedido
---

Esto debe estar sucediendo porque los pedidos que usted está viendo todavía no entraron en la herramienta de Integraciones, la herramienta que monitorea y registra logs de las interacciones con los marketplaces. Por lo tanto, los números de identificación que usted ve por el Admin de su tienda todavía son los utilizados por el marktplace, y no aquellos representados en el estándar de VTEX y reconocidos por usted en su pedido.

En este caso, puede ponerse en contacto con su marketplace o esperar un poco más para comprobar si la información del pedido se actualiza, ya que para no haber entrado en la herramienta de Integraciones, puede haber sido cancelado o incluso no se ha creado.

Si lo prefiere, usted puede comprobar la información relativa a la reserva de su pedido a través de Logistics API, a traves del endpoint [List reservation by ID](https://developers.vtex.com/docs/api-reference/logistics-api?endpoint=get-/api/logistics/pvt/inventory/reservations/-reservationId-).
