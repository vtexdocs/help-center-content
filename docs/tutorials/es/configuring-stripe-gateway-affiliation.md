---
title: 'Configurar la afiliación Stripe'
id: fwF2wk2FQKrODrWWkvSLO
status: PUBLISHED
createdAt: 2021-10-25T16:01:40.789Z
updatedAt: 2023-03-22T19:17:05.286Z
publishedAt: 2023-03-22T19:17:05.286Z
firstPublishedAt: 2021-10-25T17:34:52.274Z
contentType: tutorial
productTeam: Financial
author: 4ubliktPJIsvyl1hq91RdK
slug: configurar-la-afiliacion-stripe
locale: es
legacySlug: configurar-la-afiliacion-stripe
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

[Stripe](https://stripe.com/es) es una plataforma de pago que ofrece un sistema integrado enfocado en la recepción de pagos, transferencias, donaciones y cualquier tipo de transacción financiera habitual en los ecommerce y otras páginas web.

<div class="alert alert-warning">
La integración de tu tienda con Stripe se realiza a través de <strong>Application Key</strong> y <strong>Application Token</strong>. Para obtener estos datos, primero debes <a href="https://dashboard.stripe.com/register" target="_blank">crear tu cuenta</a> en la plataforma y. Cuando hayas terminado, accede a <a href="https://stripe.com/docs/keys" target="_blank">esta documentación</a> de Stripe para obtener acceso a tu <strong>clave publicable</strong> y <strong>clave secreta</strong>. Estas claves son obligatorias para las configuraciones en la plataforma VTEX.
</div>

Stripe admite pagos en más de 40 países. Se puede acceder a la lista de países disponibles en el [sitio web de Stripe](https://stripe.com/es/enterprise).

Para procesar sus pagos con Stripe, necesita:

1. [Configurar Stripe](#configuracion-de-stripe)
2. [Configurar condiciones de pago](#configuracion-de-condicion-de-pago)

## Configuración de Stripe

Después de instalar el conector de Stripe, sigue los pasos a continuación para la configuración en la plataforma VTEX.

1. En el Admin VTEX, accede a **Configuración de la tienda** > **Pago** > **Configuración**, o escribe **Configuración** en la barra de búsqueda en la parte superior de la página.
2. En **Afiliaciones**, haga clic en el icono "**+**".
3. Busca el conector **StripeConnector** y haz clic en él.
4. En la siguiente página, rellena los campos con la siguiente información:
<ol><br/>
  <li><strong>Application Key:</strong> Clave publicable que has obtenido en el <a href="https://dashboard.stripe.com/">dashboard de tu cuenta de Stripe</a>.
  <li><strong>Application Token:</strong> Clave secreta que has obtenido en el <a href="https://dashboard.stripe.com/">dashboard de tu cuenta de Stripe</a>.
</ol>
5. Haz clic en **Guardar**.

Después de realizar la configuración en el ambiente VTEX, también debes configurar el *webhook* en tu cuenta de Stripe.

1. Accede al [dashboard de tu cuenta de Stripe](https://dashboard.stripe.com/).
2. Haz clic en el botón **Desarrolladores**.
3. Haz clic en la pestaña **Webhooks**.
4. Haz clic en el botón **Agregar un punto de conexión**.
5. En el campo **URL del punto de conexión**, introduce la URL del *endpoint* de tu tienda VTEX en el formato `https://{nombre-de-la-cuenta}.myvtex.com/_v/notifications` sustituyendo `{nombre de la cuenta}` por el nombre de tu cuenta VTEX.
6. Haz clic en **+ Seleccionar eventos**.
7. Añade los eventos que deben ser escuchados.
8. Haz clic en **Agregar punto de conexión**.

## Configuración de condición de pago

Cuando hayas completado los pasos indicados, Stripe estará configurado en tu tienda. Así que cuando registres una condición de pago, esta estará disponible en el campo **Proceso con la afiliación** (siempre y cuando el método de pago sea compatible con Stripe).

Para configurar condiciones de pago, accede al artículo [Configurar condiciones de pago](https://help.vtex.com/es/tutorial/condiciones-de-pago--tutorials_455).

## Configurar Google Pay

El conector Stripe te permite añadir Google Pay como método de pago en el checkout de tu tienda. Con el conector Stripe configurado, puedes añadir Google Pay siguiendo los pasos que se indican a continuación:

1. En el Admin VTEX, accede a **Configuración de la tienda** > **Pago** > **Configuración**, o escribe **Configuración** en la barra de búsqueda en la parte superior de la página.
2. En **Planes de pago**, haz clic en el botón verde "**+**".
3. Busca la condición **Google Pay** y haz clic en ella.
4. Haz clic en el botón Status para activar esta condición de pago.
5. Haz clic en Salva para guardar los cambios.

Cuando hayas realizado estos pasos, Google Pay figurará en el *checkout* de la tienda como uno de los métodos de pago disponibles.

## Configurar Apple Pay

El conector Stripe te permite añadir Apple Pay como método de pago en el checkout de tu tienda.

<div class="alert alert-warning">
Apple Pay actualmente solo funciona en los sistemas operativos MacOs e IOS, y el navegador Safari. Para más información acceda a <a href="https://support.apple.com/es-es/HT208531">Dispositivos compatibles con Apple Pay</a>.
</div>

Con el conector Stripe configurado, puedes añadir Apple Pay siguiendo los pasos que se indican a continuación:

1. Acceda al [dashboard de su cuenta de Stripe](https://dashboard.stripe.com/settings/payments) en la sección de configuración de pagos.
2. En **Configuración**, haga clic en **Métodos de pago**.
3. Haga clic en **Apple Pay > Configurar** y luego en **Agregar a nuevo dominio**.
4. Introduce el dominio público del sitio web de tu tienda.
5. Haga clic en **Descargar archivo de verificación** para guardarlo en su dispositivo.
6. Crear las credenciales [appkey e apptoken](https://help.vtex.com/es/tutorial/application-keys--2iffYzlvvz4BDMr6WGUtet#).
7. Realice una llamada al endpoint para enviar el archivo de verificación previamente descargado, agregando las credenciales creadas y su dirección de dominio público en el encabezado (https://{{dominioPublicodoSite}}/well-known/raw/apple-developer-merchantid-domain-association).
8. Haga clic en **Add**.
9. Acceda al **Admin** VTEX.
10. Haga clic en **Pagos**.
11. Después, haga clic en **Configuración**.
12. En la pestana **Condiciones de pago**, haga clic en el botón **+**.
13. Haga clic en **Apple Pay**.
14. Rellene el campo **Nombre de la regla** con un nombre de su elección para su identificación.
15. Active la condición en el campo **Status**.
16. En el campo **Procesar con afiliación**, selecciona la opción Stripe.
17. Si tiene un antifraude configurado en su tienda, puede habilitarlo para esa condicione de pago marcando la casilla **Utilizar antifraude**.
18. Elige si los pagos será con o sin cuotas.
19. Si desea, puede [configurar condiciones especiales de pago](https://help.vtex.com/es/tutorial/condicoes-especiais).
20. Haga clic en **Guardar**.

Cuando hayas realizado estos pasos, Apple Pay figurará en el checkout de la tienda como uno de los métodos de pago disponibles.

