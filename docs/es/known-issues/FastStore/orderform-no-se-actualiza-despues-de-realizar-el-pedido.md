---
title: 'OrderForm no se actualiza después de realizar el pedido'
id: 4Xkk9LA95PRXbKxFYy189f
status: PUBLISHED
createdAt: 2024-06-27T15:22:19.922Z
updatedAt: 2024-06-28T11:47:47.958Z
publishedAt: 2024-06-28T11:47:47.958Z
firstPublishedAt: 2024-06-27T15:22:20.951Z
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slugEN: orderform-not-updating-after-order-is-placed
locale: es
kiStatus: Backlog
internalReference: 1056870
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Después de realizar un pedido, el orderFormId no se actualiza, lo que provoca que los artículos permanezcan visibles en el carrito. Este problema afecta a las cuentas FastStore
Este problema puede estar relacionado con el retraso en la actualización del orderFormId debido a cambios relacionados con la cookie de pago.

Tras la respuesta gatewayCallback, lo esperado sería una nueva cookie orderFormId para el usuario. Este escenario se rompe porque el dominio de la nueva cookie no coincide con el dominio de la cookie anterior del usuario (debido al dominio seguro).


##

## Simulación



- Completar un pedido en una cuenta Faststore
- Volver a la página de inicio
- Los artículos que acaba de comprar permanecerán en su cesta


##

## Workaround


N/A





