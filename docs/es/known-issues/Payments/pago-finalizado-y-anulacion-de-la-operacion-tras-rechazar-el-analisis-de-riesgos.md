---
title: "Pago finalizado y anulación de la operación tras rechazar el análisis de riesgos"
id: 2ysbvix1xPcsuTKiBHZvZz
status: PUBLISHED
createdAt: 2025-02-17T18:23:46.040Z
updatedAt: 2025-02-17T18:23:46.534Z
publishedAt: 2025-02-17T18:23:46.534Z
firstPublishedAt: 2025-02-17T18:23:46.534Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: pago-finalizado-y-anulacion-de-la-operacion-tras-rechazar-el-analisis-de-riesgos
locale: es
kiStatus: Backlog
internalReference: 1163213
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


El pago ha finalizado y la operación permanece bloqueada en estado de cancelación tras el rechazo del análisis de riesgos.




## Simulación


Cuando el proceso de autoliquidación se produce antes de que finalice el análisis de riesgo, el estado del pago se actualiza a "finalizado", mientras que la operación permanece en estado "analizando riesgo".

Si el análisis de riesgo da como resultado "riesgo rechazado", se activa el proceso de anulación. Sin embargo, una vez que se ha liquidado una operación, no puede cancelarse, sólo reembolsarse.

Como resultado, las transacciones se quedan atascadas en el estado "cancelando", incluso después de un reembolso con éxito, mientras que el estado de pago sigue siendo "finalizado".



## Workaround



Cancele el pedido manualmente en OMS para evitar problemas con la gestión del inventario.





