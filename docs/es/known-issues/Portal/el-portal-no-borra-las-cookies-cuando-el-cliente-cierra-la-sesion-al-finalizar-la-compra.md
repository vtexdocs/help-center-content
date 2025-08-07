---
title: "El portal no borra las cookies cuando el cliente cierra la sesión al finalizar la compra"
id: 5GPBW2TBOUzJkw5u47KC5z
status: PUBLISHED
createdAt: 2022-03-16T16:13:44.658Z
updatedAt: 2025-05-16T20:07:25.310Z
publishedAt: 2025-05-16T20:07:25.310Z
firstPublishedAt: 2022-03-16T16:13:45.038Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: el-portal-no-borra-las-cookies-cuando-el-cliente-cierra-la-sesion-al-finalizar-la-compra
locale: es
kiStatus: No Fix
internalReference: 417322
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


En la caja de una tienda, tenemos una opción para cerrar la sesión.

Desafortunadamente, la petición realizada a la aplicación del portal no borra las cookies del usuario, que permanecen en el OrderForm con el email del cliente, por lo que el cliente no puede cerrar la sesión utilizando esta opción. Este comportamiento ocurre en tiendas con una solución de escaparate distinta a "Legacy CMS Portal".


##

## Simulación


1. Vaya al sitio web de la tienda (`www.store.com`) e inicie sesión desde Mi Cuenta utilizando el correo electrónico y el código;
2. Una vez logueado, hacer un carrito y pasar por caja;
3. 3. Completa el paso Perfil y ve a Envíos, luego intenta cerrar sesión desde el enlace "No soy yo, finalizar sesión".

Checkout realiza la petición normalmente, haciendo la petición junto con el `orderFormId`.

Sin embargo, la Aplicación Portal no borra la cookie de este usuario y por lo tanto devuelve el mismo usuario. El correo electrónico se mantiene en el formulario de pedido y, en consecuencia, no se cierra la sesión.



## Workaround


Abra un ticket con VTEX solicitando habilitar el cierre de sesión con VTEX ID.




