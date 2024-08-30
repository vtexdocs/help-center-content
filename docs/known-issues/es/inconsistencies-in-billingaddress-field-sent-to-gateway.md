---
title: 'Inconsistencias en el campo billingAddress enviado al Gateway'
id: 2SNynMgq0w0t7WBoXGoZwR
status: PUBLISHED
createdAt: 2022-01-21T18:13:45.045Z
updatedAt: 2022-11-25T22:04:04.058Z
publishedAt: 2022-11-25T22:04:04.058Z
firstPublishedAt: 2022-01-21T18:59:43.332Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: inconsistencias-en-el-campo-billingaddress-enviado-al-gateway
locale: es
kiStatus: Scheduled
internalReference: 291688
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


La pasarela utiliza la dirección incorrecta en los escenarios de compras recurrentes cuando ya hay una tarjeta guardada en el perfil del usuario.

El error se produce porque la pasarela se basa en la casilla `isBillingAddressDifferent`, que aparece junto a los datos de la tarjeta en el checkout, para definir si utilizará la dirección de entrega o la de facturación en las afiliaciones y antifraude. El problema es que este checkbox en cuestión ni siquiera aparece en el checkout tras la primera compra con la tarjeta, sino que su valor es `false` por defecto. Esto significa que, al ser una compra con entrega o recogida, la dirección que utilizará la pasarela es la de entrega y no la de facturación, y esto traerá problemas en escenarios de recogida o incluso para generar los comprobantes bancarios.



## Simulación


Escena A:

1. Como nuevo usuario, ve a la caja de una tienda y realiza una compra de entrega para generar un perfil de compra
2. Al pagar este pedido, utiliza una dirección de tarjeta distinta a la de entrega
3. Realiza una nueva compra con el mismo correo electrónico y la misma tarjeta, pero comprando desde una opción de recogida
4. Observa los objetos `isBillingAddressDifferent` que serán falsos y la `address` del pago que será una dirección concreta

Escenario B:

1. Como nuevo usuario, acude a la caja de una tienda y realiza una compra a domicilio para generar un perfil de compra
2. Cuando pague este pedido, utilice la misma dirección como dirección de entrega
3. Realiza una nueva compra con el mismo correo electrónico y la misma tarjeta, pero comprando desde una opción de recogida
4. Observe los objetos `isBillingAddressDifferent` que serán falsos y la `dirección` del pago que no tendrá una dirección específica



## Workaround


N/A

