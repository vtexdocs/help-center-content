---
title: 'La validez del pagaré no anula la transacción'
id: 3mm3tWIDKOAE9b0Yq0Wy70
status: PUBLISHED
createdAt: 2022-03-28T02:33:39.185Z
updatedAt: 2022-11-25T22:06:39.672Z
publishedAt: 2022-11-25T22:06:39.672Z
firstPublishedAt: 2022-03-28T02:33:39.971Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: the-validity-of-the-promissory-doesnt-cancel-the-transaction
locale: es
kiStatus: Fixed
internalReference: 325491
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Si un cliente realiza un pedido con el método de pago de pagarés y el pago no se realiza, la transacción no es cancelada por la pasarela después de la fecha de vencimiento del pago. En consecuencia, como la OMS no puede identificar el evento de cancelación, el pedido no se cancela



## Simulación



1. En la Administración, vaya a la configuración de la afiliación de los pagarés.
2. En el campo **fecha de caducidad**, introduzca 1 y haga clic en **Guardar**.
3. Realiza un pedido con la forma de pago de los pagarés.
4. Tenga en cuenta que la transacción no se cancela automáticamente después de que el pagaré expire.



## Workaround


N/A

