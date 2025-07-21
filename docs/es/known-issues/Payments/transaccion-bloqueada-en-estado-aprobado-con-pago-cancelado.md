---
title: "Transacción bloqueada en estado aprobado con pago cancelado"
id: 5SwwnGi26tagIXuTmvToc
status: PUBLISHED
createdAt: 2024-06-07T14:21:22.809Z
updatedAt: 2024-06-12T17:33:43.967Z
publishedAt: 2024-06-12T17:33:43.967Z
firstPublishedAt: 2024-06-07T14:21:23.608Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transaccion-bloqueada-en-estado-aprobado-con-pago-cancelado
locale: es
kiStatus: Backlog
internalReference: 1046365
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


La transacción estaba atascada en estado aprobado, a pesar de que el pago fue cancelado.

Al intentar liquidarla manualmente, la pasarela devuelve el siguiente error:

    "error": {"code": "1506", "mensaje": "El pago con ID = xxxxx no se ha liquidado porque el valor de liquidación era -x.xx.", "exception": null}.



##

## Simulación


No hay forma de simular este comportamiento.



## Workaround


No hay ninguna solución en este caso.





