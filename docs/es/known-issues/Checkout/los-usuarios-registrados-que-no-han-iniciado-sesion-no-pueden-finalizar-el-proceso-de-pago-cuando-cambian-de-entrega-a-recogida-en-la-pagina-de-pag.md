---
title: 'Los usuarios registrados (que no han iniciado sesión) no pueden finalizar el proceso de pago cuando cambian de entrega a recogida en la página de pago.'
id: hmQ2riW1Ptjxyhk6gcWxN
status: PUBLISHED
createdAt: 2023-07-28T19:49:16.993Z
updatedAt: 2024-04-17T15:46:57.958Z
publishedAt: 2024-04-17T15:46:57.958Z
firstPublishedAt: 2023-07-28T19:49:17.732Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: registered-users-not-logged-in-cannot-finish-checkout-when-changing-from-delivery-to-pickup-on-the-checkout-page
locale: es
kiStatus: Fixed
internalReference: 870845
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Cuando un usuario registrado (no logueado) inicia el checkout con Entrega como opción de envío, y posteriormente cambia a recolección, al intentar finalizar el checkout aparece el mensaje de error "El campo Número en el adjunto de envío no es válido" y no permite realizar el pedido.


##

## Simulación



1. Ir a la caja y añadir un nuevo artículo
2. Introduzca un código postal para calcular el envío y mantenga **Entrega** seleccionado
3. Cuando se le pida que introduzca una dirección de correo electrónico, utilice la de un usuario registrado.
4. En la caja aparecerá un mensaje emergente informando de que sus datos personales han sido recuperados de compras anteriores
5. 5. Cambie de Entrega a Recogida e intente completar el pedido (aparecerá el mensaje de error)



## Workaround


N/A




