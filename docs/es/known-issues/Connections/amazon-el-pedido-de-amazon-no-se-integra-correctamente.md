---
title: "[Amazon] El pedido de Amazon no se integra correctamente"
id: 76AsvaidpYs285YXs3GkyJ
status: PUBLISHED
createdAt: 2024-10-02T13:52:36.821Z
updatedAt: 2025-03-12T19:20:30.278Z
publishedAt: 2025-03-12T19:20:30.278Z
firstPublishedAt: 2024-10-02T13:52:37.755Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: amazon-el-pedido-de-amazon-no-se-integra-correctamente
locale: es
kiStatus: Fixed
internalReference: 1109828
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


El pedido de Amazon no se envía a OMS correctamente o no sigue todo el flujo de trabajo correctamente atascándose en alguna fase.



##

## Simulación


Para realizar la reserva de los pedidos de Amazon, la integración no configura la información del deliveryChannel.

La mayoría de las veces la falta de esta información no tiene ningún impacto en el pedido, pero en algunos escenarios de error (como el tiempo de espera para confirmar la reserva) el sistema logístico necesita esta información para reprocesar el pedido.



## Workaround


N/A





