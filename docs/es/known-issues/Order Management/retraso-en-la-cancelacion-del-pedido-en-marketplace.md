---
title: "Retraso en la cancelación del pedido en Marketplace"
id: 6I4B9cHxgnoeDMft09HrHg
status: PUBLISHED
createdAt: 2025-06-11T13:04:25.568Z
updatedAt: 2025-06-18T12:17:35.990Z
publishedAt: 2025-06-18T12:17:35.990Z
firstPublishedAt: 2025-06-11T13:05:06.866Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: retraso-en-la-cancelacion-del-pedido-en-marketplace
locale: es
kiStatus: Backlog
internalReference: 1242813
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Este KI describe el escenario en el que el Marketplace o Fulfillment solicita la cancelación de un pedido. Esta cancelación es aceptada en fulfillment; sin embargo, puede tardar unos minutos o incluso más en algunos casos para que el estado se actualice en el Marketplace. Este retraso se produce porque hay múltiples escrituras del pedido en S3 (base de datos) durante el flujo de cancelación, cambiando el estado de "cancelado" a "cancelado" y actualizando otra información de la cancelación. Dada la implementación actual del flujo de cancelación, que opera de forma asíncrona sin bloqueo, este comportamiento puede ocurrir, y podrían surgir incoherencias en las interacciones del flujo de trabajo. Por ejemplo, el estado puede pasar a "cancelado" pero luego volver a "cancelar" debido a la falta de bloqueo en las operaciones. En consecuencia, esto podría afectar al feed/hook ya que habría dos notificaciones del estado cancelado.

Sin embargo, este escenario es poco frecuente y no tiene un impacto significativo porque hay reintentos en el flujo de trabajo que garantizan un cierto nivel de coherencia; no obstante, la información puede tardar un poco en actualizarse.



## Simulación


No es posible simular esta situación, ya que no siempre se produce.



## Workaround


No disponemos de una solución para este caso, por lo que es necesario reintentar el flujo de trabajo para corregir el estado.






