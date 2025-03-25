---
title: 'El correo electrónico del operador del centro de llamadas se envía a orderForm cuando se añaden artículos al carrito desde el front-end de Store Framework.'
id: 3KwP4q7VZsu6e3c1DwWY5t
status: PUBLISHED
createdAt: 2024-07-16T20:06:11.748Z
updatedAt: 2024-07-16T20:06:12.844Z
publishedAt: 2024-07-16T20:06:12.844Z
firstPublishedAt: 2024-07-16T20:06:12.844Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: call-center-operators-email-is-sent-to-orderform-when-adding-items-to-cart-from-store-framework-frontend
locale: es
kiStatus: Backlog
internalReference: 1066571
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Cuando se utilizan componentes de Store Framework para añadir artículos a un carrito mientras se ha iniciado sesión como operador de un centro de llamadas y no se suplanta la identidad de ningún cliente, el correo electrónico del operador se rellena en el archivo adjunto clientProfileData del orderForm.


##

## Simulación



1. Accede a una tienda construida sobre Store Framework.
2. Autentícate como operador de un centro de llamadas.
3. Sin suplantar a ningún cliente, añade un artículo al carrito con un componente como add-to-cart-button.
4. 4. Compruebe que la cesta contiene la dirección de correo electrónico del operador del centro de llamadas.



## Workaround


N/A





