---
title: "El pedido con el estado Verificando factura no se actualiza a Facturado."
id: 2FRiGkhLT3JID4I5MvoGo6
status: PUBLISHED
createdAt: 2022-03-03T18:37:58.724Z
updatedAt: 2025-02-24T15:20:26.097Z
publishedAt: 2025-02-24T15:20:26.097Z
firstPublishedAt: 2022-03-03T18:37:59.222Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: el-pedido-con-el-estado-verificando-factura-no-se-actualiza-a-facturado
locale: es
kiStatus: Backlog
internalReference: 500245
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


En ocasiones, el valor total de la transacción ya está capturado, pero su estado no se actualiza do "liquidado" o "finalizado". Esto puede ocurrir cuando hay una inconsistencia entre lo que fue **capturado realmente** por el proveedor externo y lo que fue registrado por el gateway como **solicitado para captura**. Imposibilitando el avance de la transacción y la facturación del pedido. El pedido quedará atascado en "verificando factura".


##

## Simulación


No es posible simular este problema, pero podemos ver que existe comprobando con la API `https://.myvtex.com/api/payments/pvt/transactions//settlements` la diferencia entre el array de peticiones y el array de acciones.
Si hay una divergencia entre esos 2 valores totales, entonces podemos confirmar la inconsistencia.



## Workaround


Abra un ticket a Soporte de Producto - Pagos, para proceder manualmente con el flujo de la transacción.




