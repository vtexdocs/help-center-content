---
title: 'Transacción atascada en "Cancelando" porque AntiFraude rechazó después de que el pago está "Finalizado".'
id: 2dFaHTjrQZse6wNrRzw4Pt
status: PUBLISHED
createdAt: 2025-02-28T12:27:26.637Z
updatedAt: 2025-02-28T12:40:20.759Z
publishedAt: 2025-02-28T12:40:20.759Z
firstPublishedAt: 2025-02-28T12:27:27.436Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transaccion-atascada-en-cancelando-porque-antifraude-rechazo-despues-de-que-el-pago-esta-finalizado
locale: es
kiStatus: Backlog
internalReference: 1187516
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


El estado de la orden se atasca al cancelarse, y la transacción también se atascará en el estado de cancelación.

Siempre que un pago esté en estado "Finalizado", la transacción también debería estar en estado "Finalizado". Sin embargo, si el antifraude rechaza el riesgo antes de que la transacción cambie a "Finalizado", la transacción iniciará el flujo "Cancelando".



## Simulación


En los registros de la transacción se puede ver que el pago está liquidado y finalizado. Después de que el antifraude rechace el riesgo.



## Workaround


Cancele el pedido a través de la página Detalles del pedido. La transacción no podrá actualizarse y permanecerá en estado "Cancelando".




