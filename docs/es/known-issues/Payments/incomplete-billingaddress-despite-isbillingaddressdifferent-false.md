---
title: "Incomplete billingAddress despite isBillingAddressDifferent: false"
id: 2CeCL5GPjrf04jXrTmTRMW
status: PUBLISHED
createdAt: 2025-07-01T13:41:53.688Z
updatedAt: 2025-07-01T14:03:58.548Z
publishedAt: 2025-07-01T14:03:58.548Z
firstPublishedAt: 2025-07-01T13:41:54.340Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: incomplete-billingaddress-despite-isbillingaddressdifferent-false
locale: es
kiStatus: Backlog
internalReference: 1252301
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


El campo `billingAddress` está incompleto, faltan campos como `street`, `number`, `neighborhood` y `postalCode`. En algunos casos poco claros, incluso cuando el campo `isBillingAddressDifferent` está a `false` (indicando que la `billingAddress` debe ser la misma que la `shippingAddress`), la `billingAddress` acaba siendo diferente, y a menudo una versión incompleta de la `shippingAddress`.


##

## Simulación


Este problema no se puede reproducir de forma fiable.




## Workaround


No se conoce ninguna solución.





