---
title: "Pagos duplicados con la misma información"
id: 6NYsfYOk6vOo8WjnlycjA
status: PUBLISHED
createdAt: 2025-02-17T18:22:28.796Z
updatedAt: 2025-05-08T13:09:28.425Z
publishedAt: 2025-05-08T13:09:28.425Z
firstPublishedAt: 2025-02-17T18:22:29.371Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: pagos-duplicados-con-la-misma-informacion
locale: es
kiStatus: Backlog
internalReference: 1154246
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Pagos duplicados con la misma información enviados a la pasarela, provocando la cancelación de la transacción.

Es posible confirmar el escenario comprobando alguna información, como:


- El registro de errores devuelto en la transacción

Ej:

**PaymentGateway**
El valor de la transacción (111503.00) no es igual a la suma de pagos (223006.00).



-

Utilizando la API https://{accountName}.vtexpayments.com.br/api/pvt/transactions/{transactionId}/payments, compruebe el número de objetos de la matriz transaction.payments. Si se encuentran dos objetos, este KI se ajusta al escenario.



##

## Simulación


No es posible simular



## Workaround


No hay ninguna solución disponible.





