---
title: 'Las transacciones realizadas con PayU no cambian de estado de cancelación'
id: 5pyv7cj5LHOuPAiCXv7MO0
status: PUBLISHED
createdAt: 2022-03-03T18:45:17.651Z
updatedAt: 2022-11-25T22:06:50.141Z
publishedAt: 2022-11-25T22:06:50.141Z
firstPublishedAt: 2022-03-03T18:45:17.994Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transactions-made-with-payu-do-not-change-from-cancelling-status
locale: es
kiStatus: Backlog
internalReference: 338124
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Cuando la transacción entra en un estado de **cancelación** no es posible reconocerla por lo que no cambia a **cancelada**.
El conector PayU envía el siguiente error: Código de respuesta: PENDING_TRANSACTION_REVIEW - AcquirerMessage : PENDING_REVIEW



## Simulación


Este error no ocurre en todas las cuentas, pero es posible encontrar filtrando la transacción con estado de cancelación.




## Workaround


La solución es llamar manualmente a la API: https://developers.vtex.com/vtex-developer-docs/reference/transaction-flow#cancelthetransaction

