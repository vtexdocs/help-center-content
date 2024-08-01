---
title: 'AdyenV1 no envía correctamente el paymentMethod.type para Amex cuando se utiliza Apple Pay.'
id: UCCG0Lwe3U6dO7MHwFebO
status: PUBLISHED
createdAt: 2023-10-17T14:58:27.621Z
updatedAt: 2023-10-17T14:58:28.348Z
publishedAt: 2023-10-17T14:58:28.348Z
firstPublishedAt: 2023-10-17T14:58:28.348Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: adyenv1-no-envia-correctamente-el-paymentmethodtype-para-amex-cuando-se-utiliza-apple-pay
locale: es
kiStatus: Backlog
internalReference: 920563
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Aunque Apple Pay permite al usuario realizar un pedido utilizando una tarjeta Amex, nuestro conector heredado AdyenV1 no es compatible con esta marca.

En los registros de interacción, se observa que el campo` paymentMethod.type` se rellena con "scheme", lo que provoca un error de Adyen.


##

## Simulación


Intento de realizar un pedido utilizando Apple Pay con una tarjeta Amex. La transacción será denegada



## Workaround


N/A.





