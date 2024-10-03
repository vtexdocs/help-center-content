---
title: 'El portal no borra las cookies cuando el cliente cierra la sesión al finalizar la compra'
id: 5GPBW2TBOUzJkw5u47KC5z
status: PUBLISHED
createdAt: 2022-03-16T16:13:44.658Z
updatedAt: 2024-04-26T18:05:09.421Z
publishedAt: 2024-04-26T18:05:09.421Z
firstPublishedAt: 2022-03-16T16:13:45.038Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: portal-doesnt-delete-cookies-when-client-logout-at-checkout
locale: es
kiStatus: Backlog
internalReference: 417322
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


En la caja de una tienda, tenemos una opción para cerrar la sesión.

Desafortunadamente, la petición realizada a la aplicación del portal, no está borrando las cookies del usuario, permaneciendo en el OrderForm con el email ID de este cliente, por lo que el cliente no puede cerrar la sesión usando esta opción


##

## Simulación


1. Vaya a `.myvtex.com` e inicie sesión desde Mi Cuenta utilizando el correo electrónico y el código;

2. 2. Una vez que haya iniciado sesión, haga una cesta y vaya a la caja;

3. Completa el paso Perfil y ve a Envíos, luego intenta cerrar sesión desde el enlace "No soy yo, finalizar sesión".

Checkout realiza la petición normalmente, haciendo la petición junto con el `orderFormId`.

Sin embargo, Portal Application no está borrando la cookie de este usuario y por lo tanto devolviendo el mismo usuario, con esto el email se mantiene en el orderForm y en consecuencia, no se cierra la sesión.



## Workaround


Utilice un JS personalizado para forzar el cierre de sesión





