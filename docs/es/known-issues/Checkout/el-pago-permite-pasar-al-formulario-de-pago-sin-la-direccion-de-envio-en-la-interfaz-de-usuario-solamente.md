---
title: 'El pago permite pasar al formulario de pago sin la dirección de envío en la interfaz de usuario solamente'
id: 3k9zxMq6Pl9WBnIz5Hy6Xf
status: PUBLISHED
createdAt: 2022-11-18T18:42:08.326Z
updatedAt: 2024-02-16T20:27:39.990Z
publishedAt: 2024-02-16T20:27:39.990Z
firstPublishedAt: 2022-11-18T18:42:08.914Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: checkout-allows-proceeding-to-payment-form-without-shipping-address-on-the-ui-only
locale: es
kiStatus: No Fix
internalReference: 699317
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


En un carro con SLA sólo para la entrega y el usuario introduce un código postal correcto, el checkout permite al usuario continuar, sin embargo, si el usuario vuelve a la página del carro de nuevo y cambia a la opción de recogida y luego hace clic para continuar a la parte de pago, luego vuelve al carro de nuevo, cambia de nuevo a la opción de entrega y continúa de nuevo, esta vez, el usuario va al formulario de pago. Además, hay un mensaje en la parte de la dirección de envío que dice que el componente está "esperando a que se rellenen los datos".



## Simulación


1- Añade productos al carrito y asegúrate de que el único ANS disponible es el de entrega;
2- Ir a la caja y rellenar su correo electrónico (usuario que tiene datos completados, dirección y perfil);
3- Ir al formulario de envío e introducir un código postal válido;
4- Vuelve al carrito;
5- Ahora elige la opción PUP;
6- Pasa al siguiente paso;
7- Vuelve de nuevo al carrito y cambia de nuevo a la entrega (ten en cuenta que el código postal ya está guardado) y luego haz clic para continuar;
8- Ahora tienes una página sin datos de envío;



## Workaround


N/A

