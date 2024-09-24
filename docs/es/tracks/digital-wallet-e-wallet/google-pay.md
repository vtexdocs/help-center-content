---
title: 'Google Pay'
id: 61JMBvM5Vanqj6RaJsP8CT
status: PUBLISHED
createdAt: 2023-06-27T21:28:37.755Z
updatedAt: 2024-08-02T13:49:01.227Z
publishedAt: 2024-08-02T13:49:01.227Z
firstPublishedAt: 2023-06-27T21:46:39.537Z
contentType: trackArticle
productTeam: Shopping
slug: google-pay
locale: es
trackId: 6X8YyZBoVJpz5R8oXciTyu
trackSlugES: cartera-digital-e-wallet
---

Google Pay™ es un servicio de pagos digitales que permite a los usuarios no compartir los datos reales de su tarjeta con la tienda, aportando más seguridad y agilizando la fase de checkout. Con Google Pay, el usuario puede realizar pagos utilizando tarjetas de crédito o débito, sin necesidad de rellenar ningún dato manualmente, y Google Pay también está disponible en muchas aplicaciones, sitios web y Catera Google. 

Los términos de la API de Google Pay se aplican siempre que el administrador de la tienda ofrezca Google Pay como medio de pago. Para leer los términos, accede a [Google Pay API Terms of Service](https://payments.developers.google.com/terms/sellertos).

>⚠️ Google Pay no está disponible para Checkout V5 o versiones anteriores de Checkout.h

## Activar Google Pay

Para activar Google Pay, sigue los pasos a continuación. 

1. En el Admin VTEX, accede a **Configuración de la tienda > Pago > Carteras** o ingresa. **Carteras** en la barra de búsqueda de la parte superior de la página.
2. Selecciona la opción **Activar** para modificar el checkout e incluir la extensión de Google Pay.

>ℹ️ Las redes admitidas en Google Pay son las mismas configuradas en las condiciones de pago.

Una vez hecho esto, Google Pay estará disponible en el checkout de tu tienda VTEX como nuevo medio de pago. La configuración puede demorarse alrededor de 10 minutos en aparecer en el checkout.

![google-pay-checkout-es](//images.ctfassets.net/alneenqid6w5/5EjOagjPXAeIAAN0Fpzkdq/b131b38fa81affd857db8c107278f3e9/Screenshot_2024-08-01_at_14.22.06.png)

>⚠️ Google Pay, por el momento, no admite suscripciones.

Para utilizar Google Pay deben cumplirse los siguientes requisitos:

* Tener al menos una [condición de pago](https://help.vtex.com/es/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG/6bzGxlz4inf8sKmvZ1c7i3) activa configurada para tarjetas de crédito o débito con un adquirente, definiendo qué [adquirente](https://help.vtex.com/es/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG/kdPbEIWf8Xq8tESQvViMB#adquirente) procesará el pago.
* Utilizar el [Checkout VTEX](https://help.vtex.com/es/tutorial/checkout-vtex-visao-geral--7wcprkM7yZUflOqbzAN5SI) en tu tienda.

>⚠️ En las tiendas que tengan el flujo de autenticación [3DS](https://help.vtex.com/es/tutorial/o-que-e-3d-secure--1eWPdop8mECuaEomQgkAIa) configurado y admitido por el adquirente, el pago con Google Pay seguirá el flujo nativo de la tarjeta y también utilizará 3DS. Para más información sobre este tema, accede a [Configurar flujo de autenticación 3DS 2](https://help.vtex.com/es/tutorial/configurar-fluxo-de-autenticacao-3ds-2--58XMn5LOA6fwrSkoDoAsg2).

>ℹ️ También puedes configurar Google Pay para que se procese con Adyen o Stripe. Para hacer esto, acceda a la pantalla **Condiciones de pago** en Admin, haga clic en **Google Pay** y seleccione la opción deseada.

## Consultar transacciones finalizadas con Google Pay

Para consultar y verificar las transacciones finalizadas con Google Pay, sigue los pasos indicados en el artículo [Ver detalles de la transacción](https://help.vtex.com/es/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG/3Nt40DMEWkvhlpaL5PlBy). En la barra de búsqueda de la página de transacciones, escriba **Google Pay** para filtrar las transacciones realizadas con este tipo de pago.

![Google Pay Transaction_1](//images.ctfassets.net/alneenqid6w5/3N6LkrdAmAEfmDDsuLaWz5/77ec267f3567f8d3988adf07c3a5d06a/Google_Pay_Transaction1_ES.png)

Después de acceder a la transacción deseada, haga clic en "+ Información" para verificar la información de **Google Pay** descrita en el campo `paymentOrigin`.

![Google Pay Transaction_2](//images.ctfassets.net/alneenqid6w5/6nLdqOG38LEUbmSKth5FRP/394481aab2e3d50703ab836080f1e1c9/Google_Pay_Transaction2_ES.png)

>⚠️ También es posible identificar las transacciones realizadas con Google Pay a través de la página **Todos los pedidos** en Admin. Sólo necesitas seleccionar el periodo de búsqueda deseado, [exportar los pedidos](https://help.vtex.com/es/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/6rVCf9KLn1jgTaxS0xuByu) en un informe en formato . csv y localizar la información de Google Pay en el campo "payment origin".

## Agregar información de Google Pay en la plantilla de compra

Para agregar en la plantilla de email que se le enviará al comprador la información de que el pedido se realizó con una tarjeta vinculada a Google Pay, sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Configuración de la tienda > Plantillas de email > Plantillas** o ingresa el término **Plantillas** en la barra de búsqueda de la parte superior de la página.
2. Accede a las plantillas de finalización de compra y aprobación del pago.
3. Después de todas las menciones donde figura a `{{#if lastDigits}}` last digits `{{lastDigits}}`, agrega la siguiente línea:
`{{/if}} {{#if paymentOrigin}} ({{paymentOrigin}}` 

Así, siempre que haya cualquier mención de los últimos cuatro dígitos de la tarjeta en estas plantillas de email, se añadirá la información «(Google Pay)» si el pago se realizó con cartera digital.

>ℹ️ Para tiendas aprovisionadas a partir de marzo de 2023, las plantillas ya estarán actualizadas con la información del pago del pedido realizado con Google Pay.

## Preguntas frecuentes

### Problemas de activación

* No ha sido posible habilitar la cartera, ya que el botón de alternancia está desactivado

Ante el mensaje «Tu tienda todavía no tiene redes habilitadas para Google Pay.», accede a las condiciones de pago y comprueba que haya reglas asociadas para realizar transacciones con tarjeta con adquirentes.

* El botón de alternancia está activado, pero no es posible finalizar el proceso

Si al activar el botón de alternancia no aparece el mensaje «Google Pay activado con éxito», significa que puede haber ocurrido algún tipo de inestabilidad en el sistema. Si el problema persiste, el usuario recibirá un aviso para ponerse en contacto con [el soporte de VTEX](https://help.vtex.com/es/support).

### Problemas que pueden ocurrir durante la compra

* El dispositivo utilizado para finalizar la compra no es compatible con Google Pay

Ante el mensaje "Forma de pago no disponible en tu navegador", el usuario debe intentar concluir la compra en otro navegador o dispositivo.

* En la tienda no hay reglas configuradas para pago con tarjeta 

Si el administrador de la tienda no ha configurado reglas de pago con tarjeta, el usuario verá un error al seleccionar Google Pay, señalando que este medio de pago no está disponible.

### Más información 

* [DPAN y FPAN: comprender la seguridad en el flujo de pagos tokenizados online](https://help.vtex.com/es/tutorial/dpan-e-fpan-entendendo-a-seguranca-no-fluxo-de-pagamentos-tokenizados-online--3RM7RvhKZ057wja5xVEOqb)

