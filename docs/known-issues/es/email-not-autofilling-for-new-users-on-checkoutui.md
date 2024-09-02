---
title: 'El correo electrónico no se rellena automáticamente para los nuevos usuarios en el checkout-ui'
id: 6XBghXwc93RBF53dCHr35y
status: DRAFT
createdAt: 2023-08-25T15:29:58.242Z
updatedAt: 2023-08-25T16:47:25.505Z
publishedAt: 
firstPublishedAt: 
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: el-correo-electronico-no-se-rellena-automaticamente-para-los-nuevos-usuarios-en-el-checkoutui
locale: es
kiStatus: Backlog
internalReference: 887949
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cuando un nuevo usuario introduce un nuevo correo electrónico en el paso de correo electrónico y pasa a la página siguiente, en el componente de datos del cliente, el correo electrónico no se rellena automáticamente.
Esto se debe a que no hay ningún usuario registrado con ese email. Como resultado, el `orderForm` cargado también contiene un campo de email vacío, haciendo que permanezca en blanco y requiriendo que el cliente vuelva a introducir su email.


##

## Simulación



1. Navegue hasta la página de pago en la que los clientes introducen su correo electrónico.
2. Poner un email nunca usado antes en la tienda.
3. Vaya al componente de perfil del cliente.
4. La casilla de correo electrónico estará vacía, y entonces tendrás que escribirlo de nuevo.


## Workaround


N/A





que escribirlo de nuevo.


## Workaround


N/A





