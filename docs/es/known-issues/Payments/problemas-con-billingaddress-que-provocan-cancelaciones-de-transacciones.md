---
title: 'Problemas con BillingAddress que provocan cancelaciones de transacciones'
id: 14RT6S4Hm7H30L0FBzdDRY
status: PUBLISHED
createdAt: 2024-05-06T16:34:12.989Z
updatedAt: 2024-05-06T16:34:14.299Z
publishedAt: 2024-05-06T16:34:14.299Z
firstPublishedAt: 2024-05-06T16:34:14.299Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: issues-with-billingaddress-leading-to-transaction-cancellations
locale: es
kiStatus: Backlog
internalReference: 1027901
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.



Se están cancelando transacciones durante el análisis antifraude debido a que falta información esencial en la `billingAddress`.

La `billingAddress` se envía durante el proceso de pago y puede ser una copia de la `shippingAddress` si el usuario decide no diferenciarlas (marcando `isBillingAddressDifferent` como `false`) durante el pago. Alternativamente, puede ser una nueva dirección proporcionada por el usuario si la opción `isBillingAddressDifferent` está marcada como `true`. Esta dirección se utiliza en la solicitud de autorización antifraude, y la ausencia de información obligatoria puede dar lugar a cancelaciones de transacciones.

Hemos observado que este comportamiento se produce con pagos realizados con tarjetas nuevas, que no se han guardado previamente en la tienda, y cuando el usuario elige no diferenciar las direcciones (`isBillingAddressDifferent`: `false`). Es importante destacar que la `shippingAaddress` contiene todos los campos obligatorios correctamente rellenados, mientras que la `billingAddress`, que debería ser una copia de la `shippingAddress`, queda incompleta.


##

## Simulación


No hemos podido reproducir este problema



## Workaround


N/A





