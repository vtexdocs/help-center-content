---
title: 'Checkout login flow allows changing email but flow is not supported'
id: 2wP6MBxvyd3kFDmlgYx4Tk
status: PUBLISHED
createdAt: 2023-05-03T18:09:50.683Z
updatedAt: 2023-05-08T18:31:29.802Z
publishedAt: 2023-05-08T18:31:29.802Z
firstPublishedAt: 2023-05-03T18:09:51.237Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: checkout-login-flow-allows-changing-email-but-flow-is-not-supported
locale: es
kiStatus: Backlog
internalReference: 258447
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cuando en el checkout con un email informado y datos enmascarados, será necesario iniciar sesión si el comprador quiere cambiar alguna información. En el cuadro de inicio de sesión que se abrirá, el correo electrónico ya se rellenará con el contexto del carrito, pero la interfaz permite modificar el correo electrónico "sugerido".

El correo electrónico sugerido no debe modificarse. Si el cliente introduce otro correo electrónico, el flujo de inicio de sesión no funcionará: en la solicitud de la API se producirá un error silencioso y la interfaz de usuario se quedará bloqueada en un estado de "carga".


##

## Simulación



- En el checkout, informa un email con un perfil completo para que los datos sean autocompletados y enmascarados;
- Intente cambiar algunos datos, como la dirección (será necesario iniciar sesión);
- En la casilla de inicio de sesión, el correo electrónico del carrito ya estará rellenado;
- Cambie el correo electrónico en el cuadro de inicio de sesión;
- Intente seguir adelante; no será posible.



## Workaround


La tienda puede hacer que este campo sea de sólo lectura para el flujo de inicio de sesión en la caja.



