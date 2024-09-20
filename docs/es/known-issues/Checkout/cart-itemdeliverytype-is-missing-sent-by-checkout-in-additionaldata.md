---
title: 'falta item.deliveryType enviado por checkout en AdditionalData'
id: lV8VxXUPOzO9cSMgNV4fj
status: PUBLISHED
createdAt: 2024-03-19T12:59:17.599Z
updatedAt: 2024-09-10T18:34:54.909Z
publishedAt: 2024-09-10T18:34:54.909Z
firstPublishedAt: 2024-03-19T12:59:18.450Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: falta-itemdeliverytype-enviado-por-checkout-en-additionaldata
locale: es
kiStatus: Backlog
internalReference: 1002115
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Cuando hay una cantidad dividida en el `priceDefinition` debido al redondeo para el multiplicador de unidades, la pasarela no puede recibir ningún valor para `deliveryType` en el objeto del carrito. Por lo tanto, esto podría causar que el proveedor de pago denegar el pago si utilizan este campo..


##

## Simulación



- Realiza un pedido con un carrito con una cantidad dividida en el campo `priceDefinition` del orderForm;
- Comprueba el "miniCart.Items", puede que no tenga ``deliveryType``.



## Workaround


N/A



