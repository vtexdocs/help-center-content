---
title: 'Configurar la afiliación Stripe'
id: fwF2wk2FQKrODrWWkvSLO
status: PUBLISHED
createdAt: 2021-10-25T16:01:40.789Z
updatedAt: 2024-04-25T12:58:35.923Z
publishedAt: 2024-04-25T12:58:35.923Z
firstPublishedAt: 2021-10-25T17:34:52.274Z
contentType: tutorial
productTeam: Financial
author: 4ubliktPJIsvyl1hq91RdK
slugEN: configuring-stripe-gateway-affiliation
legacySlug: configurar-la-afiliacion-stripe
locale: es
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

[Stripe](https://stripe.com/es) es una plataforma de pago que ofrece un sistema integrado enfocado en la recepción de pagos, transferencias, donaciones y cualquier tipo de transacción financiera habitual en los ecommerce y otras páginas web.

> ⚠️ La integración de tu tienda con Stripe se realiza a través de **Application Key** y **Application Token**. Para obtener estos datos, primero debes [crear tu cuenta](https://dashboard.stripe.com/register) en la plataforma y. Cuando hayas terminado, accede a [esta documentación](https://stripe.com/docs/keys) de Stripe para obtener acceso a tu **clave publicable** y **clave secreta**. Estas claves son obligatorias para las configuraciones en la plataforma VTEX.

Stripe admite pagos en más de 40 países. Se puede acceder a la lista de países disponibles en el [sitio web de Stripe](https://stripe.com/es/enterprise).

Para procesar sus pagos con Stripe, necesita:

1. [Configurar Stripe](#configuracion-de-stripe)
2. [Configurar condiciones de pago](#configuracion-de-condicion-de-pago)

## Configuración de Stripe

Después de instalar el conector de Stripe, sigue los pasos a continuación para la configuración en la plataforma VTEX.

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Proveedores__, o escribe __Proveedores__ en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre __StripeConnector__ en la barra de búsqueda y haga clic en el nombre del proveedor.
4. Rellena los campos con la siguiente información:
<br>
<ul>
<br>
    	<li>**Clave de aplicación**: Clave publicable que has obtenido en el [dashboard de tu cuenta de Stripe](https://dashboard.stripe.com).</li>
    	<li>**Token de aplicación**: Clave secreta que has obtenido en el [dashboard de tu cuenta de Stripe](https://dashboard.stripe.com).</li>
</ul>
5. Haga clic en __Guardar__.

Después de realizar la configuración en el ambiente VTEX, también debes configurar el *webhook* en tu cuenta de Stripe.

1. Accede al [dashboard de tu cuenta de Stripe](https://dashboard.stripe.com/).
2. Haga clic en el botón __Desarrolladores__.
3. Haga clic en la pestaña __Webhooks__.
4. Haga clic enn el botón __Añadir un punto de conexión__.
5. En el campo __URL del punto de conexión__, introduce la URL del *endpoint* de tu tienda VTEX en el formato `https://{nombre-de-la-cuenta}.myvtex.com/_v/notifications` sustituyendo `{nombre de la cuenta}` por el nombre de tu cuenta VTEX.
6. Haga clic en __+ Seleccionar eventos__.
7. Haga clic en las categorías y seleccione los eventos deseados. Si no está seguro de qué eventos agregar, comuníquese con el soporte de Stripe y ellos podrán ayudarlo con este tipo de configuración.
8. Haga clic en __Añadir eventos__.
9. Haga clic en __Añadir punto de conexión__.

> ℹ️ Si deseas realizar transacciones con tarjeta de crédito en Stripe, debes abrir un ticket en Stripe de la siguiente manera: - Solicitar la liberación de la función "raw card data", indicando que VTEX y Stripe son socios de pago. - Enviar como archivo adjunto el VTEX AOC (Attestation of Compliance for Onsite Assessments – Service Providers). Para consultar la última versión de AOC VTEX acceda a la página de [certificaciones VTEX](https://vtex.com/es-es/compliance/certifications) y descargue el archivo disponible en la sección PCI. Las acciones anteriores evitarán que ocurran errores relacionados con la transmisión de datos sensibles en la integración entre Stripe y VTEX.

## Configuración de condición de pago

Cuando hayas completado los pasos indicados, Stripe estará configurado en tu tienda. Así que cuando registres una condición de pago, esta estará disponible en el campo __Proceso con la afiliación__ (siempre y cuando el método de pago sea compatible con Stripe).

Para configurar condiciones de pago, accede al artículo [Configurar condiciones de pago](/es/tutorial/condiciones-de-pago--tutorials_455).

## Configurar Google Pay

El conector Stripe te permite añadir Google Pay como método de pago en el checkout de tu tienda. Con el conector Stripe configurado, puedes añadir Google Pay siguiendo los pasos que se indican a continuación:

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Configuración__, o escribe __Configuración__ en la barra de búsqueda en la parte superior de la página.
2. En __Condiciones de pago__, haz clic en el botón verde `+`.
3. Haga clic en la opción __Google Pay__.
4. Active la condición en el campo __Status__.
5. En __Procesar con afiliación__, seleccione la opción __StripeConnector__.
6. Haga clic en __Guardar__.

Cuando hayas realizado estos pasos, Google Pay figurará en el *checkout* de la tienda como uno de los métodos de pago disponibles.

## Configurar Apple Pay

El conector Stripe te permite añadir Apple Pay como método de pago en el checkout de tu tienda.

> ⚠️ Apple Pay actualmente solo funciona en los sistemas operativos MacOs e IOS, y el navegador Safari. Para más información acceda a [Dispositivos compatibles con Apple Pay](https://support.apple.com/es-es/HT208531).

Con el conector Stripe configurado, puedes añadir Apple Pay siguiendo los pasos que se indican a continuación:

1. Acceda al [dashboard de su cuenta de Stripe](https://dashboard.stripe.com/settings/payments) en la sección de configuración de pagos.
2. En __Configuración__, haga clic en __Métodos de pago__.
3. Haga clic en __Apple Pay > Configurar__ y luego en __Agregar a nuevo dominio__.
4. Introduce el dominio público del sitio web de tu tienda.
5. Haga clic en __Descargar archivo de verificación__ para guardarlo en su dispositivo.
6. Crear las credenciales [appkey e apptoken](/es/tutorial/application-keys--2iffYzlvvz4BDMr6WGUtet#).
7. Realice una llamada al endpoint para enviar el archivo de verificación previamente descargado, agregando las credenciales creadas y su dirección de dominio público en el encabezado (https://{{dominioPublicodoSite}}/well-known/raw/apple-developer-merchantid-domain-association).
8. Haga clic en __Add__.
9. Acceda al __Admin VTEX__.
10. Haga clic en __Pagos__.
11. Después, haga clic en __Configuración__.
12. En la pestana __Condiciones de pago__, haga clic en el botón `+`.
13. Haga clic en __Apple Pay__.
14. Rellene el campo __Nombre de la regla__ con un nombre de su elección para su identificación.
15. Active la condición en el campo __Status__.
16. En el campo __Procesar con afiliación__, selecciona la opción Stripe.
17. Si tiene un antifraude configurado en su tienda, puede habilitarlo para esa condicione de pago marcando la casilla __Utilizar antifraude__.
18. Elige si los pagos será con o sin cuotas.
19. Si desea, puede [configurar condiciones especiales de pago](/es/tutorial/condicoes-especiais).
20. Haga clic en __Guardar__.

Cuando hayas realizado estos pasos, Apple Pay figurará en el checkout de la tienda como uno de los métodos de pago disponibles.

