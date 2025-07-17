---
title: "Transacción bloqueada en estado autorizado después de haber sido aprobada"
id: 60oG2yj6wb1MomGh7Bbh9C
status: PUBLISHED
createdAt: 2024-05-22T17:58:05.800Z
updatedAt: 2025-04-01T21:52:53.517Z
publishedAt: 2025-04-01T21:52:53.517Z
firstPublishedAt: 2024-05-22T17:58:06.594Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transaccion-bloqueada-en-estado-autorizado-despues-de-haber-sido-aprobada
locale: es
kiStatus: Backlog
internalReference: 1037765
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


En un flujo de transacción estándar, una vez que todos los pagos se han autorizado correctamente, se espera que la transacción cambie su estado a **Aprobado**.
Aquí está la documentación oficial que explica los diferentes estados de transacción con más detalle: Flujo de Transacciones en Pagos.

Sin embargo, en las transacciones afectadas por este problema, observamos un comportamiento inesperado: después de que se hayan aprobado (autorizado) todos los pagos y la transacción ya haya pasado al estado **Aprobado**, se activa un nuevo evento de estado de transición, **TransactionWorkFlowChangeStatus**. Este evento actualiza incorrectamente el estado a **Autorizado**.
Aunque se produce otro evento **TransactionWorkFlowChangeStatus - Approved** después de esta transición errónea, la actualización final del estado no se registra correctamente en la transacción.
Como resultado, la transacción permanece atascada en el estado **Authorized**, impidiendo que la orden o transacción progrese como se esperaba.

Este problema puede ser fácilmente evidenciado por la duplicación inesperada de los registros **TransactionWorkFlowChangeStatus**, donde ambos eventos **Aproved** y **Authorized** aparecen consecutivamente, llevando a un estado de transacción inconsistente.



## Simulación



## Workaround



