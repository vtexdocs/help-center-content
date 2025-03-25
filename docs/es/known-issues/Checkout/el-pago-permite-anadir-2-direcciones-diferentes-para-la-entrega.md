---
title: 'El pago permite añadir 2 direcciones diferentes para la entrega'
id: 2z7iq68qdHXAfY8RLDHXDg
status: PUBLISHED
createdAt: 2023-11-06T22:03:24.983Z
updatedAt: 2023-11-07T21:28:43.164Z
publishedAt: 2023-11-07T21:28:43.164Z
firstPublishedAt: 2023-11-06T22:03:25.472Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: checkout-allows-to-add-2-different-addresses-for-delivery
locale: es
kiStatus: Backlog
internalReference: 931225
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Checkout permite añadir dos direcciones diferentes para la entrega en el orderForm, por ejemplo, una "comercial" y una "residencial" (definidas por el campo 'addressType'), cuando una de ellas es desechable.

Cuando se seleccionan ambas direcciones, aparece el mensaje de error "Imposible comunicarse con el vendedor", y el comprador no puede continuar con los siguientes pasos.


##

## Simulación



- Enviar una nueva dirección a través de API Añadir dirección de envío y seleccionar opción de entrega;
- Añadir un cliente que ya tiene un perfil completo a través de API Añadir perfil de cliente.



## Workaround

 provisional
N/A




