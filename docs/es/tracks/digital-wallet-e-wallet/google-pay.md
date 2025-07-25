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
slugEN: google-pay
locale: es
trackId: 6X8YyZBoVJpz5R8oXciTyu
trackSlugES: cartera-digital-e-wallet
---

Google Pay™ es un servicio de pagos digitales que permite a los usuarios no compartir los datos reales de su tarjeta con la tienda, aportando más seguridad y agilizando la fase de checkout. Con Google Pay, el usuario puede realizar pagos utilizando tarjetas de crédito o débito, sin necesidad de rellenar ningún dato manualmente, y Google Pay también está disponible en muchas aplicaciones, sitios web y Catera Google. 

Los términos de la API de Google Pay se aplican siempre que el administrador de la tienda ofrezca Google Pay como medio de pago. Para leer los términos, accede a [Google Pay API Terms of Service](https://payments.developers.google.com/terms/sellertos).

<div class="alert alert-warning">
<p>Google Pay no está disponible para Checkout V5 o versiones anteriores de Checkout.h</p>
</div>

## Activar Google Pay

Para activar Google Pay, sigue los pasos a continuación. 

1. En el Admin VTEX, accede a **Configuración de la tienda > Pago > Carteras** o ingresa. **Carteras** en la barra de búsqueda de la parte superior de la página.
2. Selecciona la opción **Activar** para modificar el checkout e incluir la extensión de Google Pay.

<div class = "alert alert-info">
<p>Las redes admitidas en Google Pay son las mismas configuradas en las condiciones de pago.</p>
</div>

Una vez hecho esto, Google Pay estará disponible en el checkout de tu tienda VTEX como nuevo medio de pago. La configuración puede demorarse alrededor de 10 minutos en aparecer en el checkout.

![google-pay-checkout-es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/digital-wallet-e-wallet/google-pay_1.png)

<div class = "alert alert-warning">
<p>Google Pay, por el momento, no admite suscripciones.</p>
</div>

Para utilizar Google Pay deben cumplirse los siguientes requisitos:

* Tener al menos una [condición de pago](/es/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG/6bzGxlz4inf8sKmvZ1c7i3) activa configurada para tarjetas de crédito o débito con un adquirente, definiendo qué [adquirente](/es/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG/kdPbEIWf8Xq8tESQvViMB#adquirente) procesará el pago.
* Utilizar el [Checkout VTEX](/es/tutorial/checkout-vtex-visao-geral--7wcprkM7yZUflOqbzAN5SI) en tu tienda.

<div class = "alert alert-warning">
  <p>En las tiendas que tengan el flujo de autenticación <a href="https://help.vtex.com/es/tutorial/o-que-e-3d-secure--1eWPdop8mECuaEomQgkAIa">3DS</a> configurado y admitido por el adquirente, el pago con Google Pay seguirá el flujo nativo de la tarjeta y también utilizará 3DS. Para más información sobre este tema, accede a <a href="https://help.vtex.com/es/tutorial/configurar-fluxo-de-autenticacao-3ds-2--58XMn5LOA6fwrSkoDoAsg2">Configurar flujo de autenticación 3DS 2</a>.</p>
</div>

<div class="alert alert-info">
<p>También puedes configurar Google Pay para que se procese con Adyen o Stripe. Para hacer esto, acceda a la pantalla <b>Condiciones de pago</b> en Admin, haga clic en <b>Google Pay</b> y seleccione la opción deseada.</p>
</div>

## Consultar transacciones finalizadas con Google Pay

Para consultar y verificar las transacciones finalizadas con Google Pay, sigue los pasos indicados en el artículo [Ver detalles de la transacción](/es/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG/3Nt40DMEWkvhlpaL5PlBy). En la barra de búsqueda de la página de transacciones, escriba **Google Pay** para filtrar las transacciones realizadas con este tipo de pago.

![Google Pay Transaction_1](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/digital-wallet-e-wallet/google-pay_2.png)

Después de acceder a la transacción deseada, haga clic en "+ Información" para verificar la información de **Google Pay** descrita en el campo `paymentOrigin`.

![Google Pay Transaction_2](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/digital-wallet-e-wallet/google-pay_3.png)

<div class="alert alert-warning">
  <p>También es posible identificar las transacciones realizadas con Google Pay a través de la página <b>Todos los pedidos</b> en Admin. Sólo necesitas seleccionar el periodo de búsqueda deseado, <a href="https://help.vtex.com/es/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/6rVCf9KLn1jgTaxS0xuByu">exportar los pedidos</a> en un informe en formato . csv y localizar la información de Google Pay en el campo "payment origin".</p>
</div>

## Agregar información de Google Pay en la plantilla de compra

Para agregar en la plantilla de email que se le enviará al comprador la información de que el pedido se realizó con una tarjeta vinculada a Google Pay, sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Configuración de la tienda > Plantillas de email > Plantillas** o ingresa el término **Plantillas** en la barra de búsqueda de la parte superior de la página.
2. Accede a las plantillas de finalización de compra y aprobación del pago.
3. Después de todas las menciones donde figura a `{{#if lastDigits}}` last digits `{{lastDigits}}`, agrega la siguiente línea:
`{{/if}} {{#if paymentOrigin}} ({{paymentOrigin}}` 

Así, siempre que haya cualquier mención de los últimos cuatro dígitos de la tarjeta en estas plantillas de email, se añadirá la información «(Google Pay)» si el pago se realizó con cartera digital.

<div class = "alert alert-info">
  <p>Para tiendas aprovisionadas a partir de marzo de 2023, las plantillas ya estarán actualizadas con la información del pago del pedido realizado con Google Pay.</p>
</div>

## Preguntas frecuentes

### Problemas de activación

* No ha sido posible habilitar la cartera, ya que el botón de alternancia está desactivado

Ante el mensaje «Tu tienda todavía no tiene redes habilitadas para Google Pay.», accede a las condiciones de pago y comprueba que haya reglas asociadas para realizar transacciones con tarjeta con adquirentes.

* El botón de alternancia está activado, pero no es posible finalizar el proceso

Si al activar el botón de alternancia no aparece el mensaje «Google Pay activado con éxito», significa que puede haber ocurrido algún tipo de inestabilidad en el sistema. Si el problema persiste, el usuario recibirá un aviso para ponerse en contacto con [el soporte de VTEX](/es/support).

### Problemas que pueden ocurrir durante la compra

* El dispositivo utilizado para finalizar la compra no es compatible con Google Pay

Ante el mensaje "Forma de pago no disponible en tu navegador", el usuario debe intentar concluir la compra en otro navegador o dispositivo.

* En la tienda no hay reglas configuradas para pago con tarjeta 

Si el administrador de la tienda no ha configurado reglas de pago con tarjeta, el usuario verá un error al seleccionar Google Pay, señalando que este medio de pago no está disponible.

### Más información 

* [DPAN y FPAN: comprender la seguridad en el flujo de pagos tokenizados online](/es/tutorial/dpan-e-fpan-entendendo-a-seguranca-no-fluxo-de-pagamentos-tokenizados-online--3RM7RvhKZ057wja5xVEOqb)

