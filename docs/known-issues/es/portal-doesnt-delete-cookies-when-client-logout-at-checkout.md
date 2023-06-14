---
title: 'El portal no borra las cookies cuando el cliente cierra la sesión al finalizar la compra'
id: 5GPBW2TBOUzJkw5u47KC5z
status: PUBLISHED
createdAt: 2022-03-16T16:13:44.658Z
updatedAt: 2022-11-25T22:10:31.240Z
publishedAt: 2022-11-25T22:10:31.240Z
firstPublishedAt: 2022-03-16T16:13:45.038Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slug: el-portal-no-borra-las-cookies-cuando-el-cliente-cierra-la-sesion-al-finalizar-la-compra
locale: es
kiStatus: Backlog
internalReference: 417322
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


En la caja de una tienda, tenemos una opción para cerrar la sesión.

Desgraciadamente, la petición realizada a la aplicación del portal, no está borrando las cookies del usuario, permaneciendo en el OrderForm con el email ID de este cliente, por lo que el cliente no puede cerrar la sesión utilizando esta opción



## Simulación


1. Vaya a `.myvtex.com` e inicie sesión desde Mi Cuenta utilizando el correo electrónico y el código;

2. 2. Una vez que hayas entrado, haz una cesta y ve a la caja;

3. Completa el paso de Perfil y ve a Envío, luego intenta cerrar la sesión desde el enlace "No soy yo, termina la sesión".

El checkout realiza la petición normalmente, haciendo la petición junto con el `orderFormId`.

Sin embargo, la aplicación del portal no está borrando la cookie de este usuario y por lo tanto devuelve el mismo usuario, con esto el correo electrónico se mantiene en el orderForm y en consecuencia, no se cierra la sesión.



## Workaround


Cerrar la sesión a través de la página de inicio.

