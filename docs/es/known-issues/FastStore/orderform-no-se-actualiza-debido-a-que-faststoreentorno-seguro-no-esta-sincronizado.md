---
title: 'OrderForm no se actualiza debido a que Faststore/entorno seguro no está sincronizado'
id: 4Xkk9LA95PRXbKxFYy189f
status: PUBLISHED
createdAt: 2024-06-27T15:22:19.922Z
updatedAt: 2024-10-30T16:04:56.063Z
publishedAt: 2024-10-30T16:04:56.063Z
firstPublishedAt: 2024-06-27T15:22:20.951Z
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slugEN: orderform-not-updating-due-to-faststoresecure-environment-out-of-sync
locale: es
kiStatus: Backlog
internalReference: 1056870
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Normalmente, después de realizar un pedido, el orderFormId no se actualiza, haciendo que los artículos permanezcan visibles en el carrito. Este problema afecta a las cuentas FastStore.
También puede ocurrir sin cerrar un pedido, simplemente al limpiar las cookies e intentar comprobar de nuevo el entorno seguro.
Este problema puede estar relacionado con el retraso en la actualización del orderFormId debido a cambios relacionados con la cookie de comprobación.

Después de la respuesta gatewayCallback, el escenario esperado sería una nueva cookie orderFormId para el usuario. Este escenario se rompe porque el dominio de la nueva cookie no coincide con el dominio de la cookie anterior del usuario (debido al dominio seguro).


##

## Simulación



- Completar un pedido en una cuenta Faststore
- Volver a la página de inicio
- Los artículos que acaba de comprar permanecerán en su cesta


##

## Workaround


N/A





