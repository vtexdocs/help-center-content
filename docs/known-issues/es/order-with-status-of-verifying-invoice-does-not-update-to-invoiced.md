---
title: 'El pedido con estado de verificación de factura no se actualiza a facturado.'
id: 2FRiGkhLT3JID4I5MvoGo6
status: PUBLISHED
createdAt: 2022-03-03T18:37:58.724Z
updatedAt: 2022-11-25T22:04:20.586Z
publishedAt: 2022-11-25T22:04:20.586Z
firstPublishedAt: 2022-03-03T18:37:59.222Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: el-pedido-con-estado-de-verificacion-de-factura-no-se-actualiza-a-facturado
kiStatus: Backlog
internalReference: 500245
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Debido a una incoherencia, existe una diferencia entre lo que realmente se capturó y lo que se solicitó capturar. Haciendo imposible la facturación del pedido.



## Simulación


No es posible simular este problema, pero podemos ver que existe comprobando con la API https://{account}.myvtex.com/api/payments/pvt/transactions/{transactionId}/settlements requests and actions.
Si hay una divergencia entre los valores totales, entonces podemos confirmar la inconsistencia




## Workaround


La forma en que actualmente resolvemos esto es insertando una entrada de liquidación con el valor directamente en la base de datos, de modo que cuando hacemos clic para facturar en OMS, quien llama a la pasarela entenderá que los valores coinciden, y ya no necesitamos llamar a ninguna liquidación, permitiendo que la orden se mueva

