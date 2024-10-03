---
title: 'Posibilidad de proceder al pago con el código postal en blanco en la interfaz de usuario de pago.'
id: 32IVEgy5AgcFkCimUl87Rp
status: PUBLISHED
createdAt: 2023-01-18T21:46:19.613Z
updatedAt: 2023-01-18T21:47:44.853Z
publishedAt: 2023-01-18T21:47:44.853Z
firstPublishedAt: 2023-01-18T21:46:20.286Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: possibility-to-proceed-to-payment-with-blank-postal-code-in-the-checkout-ui
locale: es
kiStatus: Backlog
internalReference: 334310
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Cuando eres un usuario que tiene un login y va al checkout, donde los datos están enmascarados, y en el formulario de envío, eliges la opción de entregar en otras direcciones, existe la posibilidad de ir al pago sin necesidad de rellenar el código postal. Llegando así al proceso de pago con los datos de entrega vacíos en la UI.


##

## Simulación


Tienes que tener los datos enmascarados y un producto que sea tanto de entrega como de recogida.


1. Añade productos al carrito (sin iniciar sesión)
2. Ir a la caja y rellenar con su correo electrónico (usuario que han completado los datos, dirección y perfil)
3. Entra en el checkout con tus datos enmascarados
4. Ve al formulario de envío y elige "Entregar en otra dirección"
5. No rellenes el código postal y pulsa el botón "Ir al pago"
6. Ahora tienes una dirección de envío en blanco



## Workaround


NA



