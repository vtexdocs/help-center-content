---
title: 'Inconsistencias en el campo billingAddress enviado a Gateway'
id: 2SNynMgq0w0t7WBoXGoZwR
status: PUBLISHED
createdAt: 2022-01-21T18:13:45.045Z
updatedAt: 2024-08-14T13:26:01.437Z
publishedAt: 2024-08-14T13:26:01.437Z
firstPublishedAt: 2022-01-21T18:59:43.332Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: inconsistencias-en-el-campo-billingaddress-enviado-a-gateway
locale: es
kiStatus: Scheduled
internalReference: 291688
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


La pasarela utiliza la dirección incorrecta en escenarios de compras recurrentes cuando ya hay una tarjeta guardada en el perfil del usuario.

El error se produce porque la pasarela se basa en el checkbox `isBillingAddressDifferent`, que aparece junto a los datos de la tarjeta en el checkout, para definir si utilizará la dirección de entrega o la de facturación en afiliaciones y antifraude. El problema es que este checkbox en cuestión ni siquiera aparece en el checkout tras la primera compra con la tarjeta, sino que su valor es `false` por defecto. Esto significa que, al tratarse de una compra con entrega o recogida, la dirección que utilizará la pasarela será la de entrega y no la de facturación, y esto traerá problemas en escenarios de recogida o incluso para generar Albaranes Bancarios.


##

## Simulación


Escenario A:

1. Como nuevo usuario, acude a la caja de una tienda y realiza una compra a domicilio para generar un perfil de compra
2. Al pagar este pedido, utiliza una dirección de tarjeta distinta de la dirección de entrega
3. Realiza una nueva compra con el mismo correo electrónico y la misma tarjeta, pero comprando desde una opción de recogida
4. Observa los objetos `isBillingAddressDifferent` que será falso y la `address` del pago que será una dirección concreta

Escenario B:

1. Como nuevo usuario, ve a la caja de una tienda y realiza una compra a domicilio para generar un perfil de compra
2. Al pagar este pedido, utilice la misma dirección que la de entrega
3. Realiza una nueva compra con el mismo correo electrónico y la misma tarjeta, pero comprando desde una opción de recogida
4. Observe los objetos `isBillingAddressDifferent` que serán falsos y la `address` del pago que no tendrá una dirección concreta


##

## Workaround


N/A






