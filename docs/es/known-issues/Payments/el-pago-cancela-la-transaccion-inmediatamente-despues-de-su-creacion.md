---
title: "El pago cancela la transacción inmediatamente después de su creación"
id: 1fmpSt3LhdfGgdZd6dRItb
status: PUBLISHED
createdAt: 2025-01-03T15:20:54.917Z
updatedAt: 2025-01-03T15:20:55.766Z
publishedAt: 2025-01-03T15:20:55.766Z
firstPublishedAt: 2025-01-03T15:20:55.766Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: el-pago-cancela-la-transaccion-inmediatamente-despues-de-su-creacion
locale: es
kiStatus: Backlog
internalReference: 1157809
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>



Una transacción ya aprobada (y en algunos casos capturada) recibe una solicitud de cancelación directamente desde la caja:

    Una solicitud externa llamada para cancelar esta transacción Id = con Valor RequestId = . Prioridad: por defecto. Autor: vtex-service::checkout::stable.


Esta solicitud de cancelación se produce debido a un tiempo de espera cuando la caja llama a la ruta de pagos GET desde la pasarela, y el servicio tarda más de 10 segundos en responder.


##

## Simulación


La simulación no es posible.



## Workaround


No hay solución disponible.





