---
title: 'Configurar pago con StripeV2'
id: 3XG7Vrb0GGhdN40ICNKQoN
status: PUBLISHED
createdAt: 2025-03-07T15:20:58.287Z
updatedAt: 2025-05-30T14:58:59.497Z
publishedAt: 2025-05-30T14:58:59.497Z
firstPublishedAt: 2025-03-07T15:34:55.639Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-stripev2
locale: es
legacySlug: configurar-pago-con-stripev2
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX puedes realizar la integración con el proveedor de pago StripeV2. A través de este proveedor, tu tienda puede ofrecer diversos medios de pago, como Visa, American Express, Diners, Elo, Hipercard, Mastercard, BankInvoice, Stripe, Google Pay, ApplePay, OXXO, Discover, Affirm, Klarna, ZIP, Blik, Ideal, SPEI, MultiBanco, Afterpay, Bancontact, EPS, FPX, giropay y P24.

## Opciones de operación

El proveedor StripeV2 puede procesar transacciones de pago en tiendas VTEX de dos maneras diferentes:

- __VTEX Checkout Experience__: puede usarse para tarjetas de crédito, tarjetas de débito y medios de pago desarrollados con [Payment Provider Framework (PPF)](https://developers.vtex.com/docs/guides/payments-integration-payment-provider-framework). Esta opción es recomendable si deseas configurar otros gateways de pago para diferentes redes de tarjeta o realizar transacciones utilizando el checkout nativo de VTEX.

- __VTEX with Stripe Payment Element Experience__: aplicación de pago basada en el [Stripe’s Optimized Checkout Suite (OCS)](https://support.stripe.com/questions/what-is-stripe-s-optimized-checkout-suite-(ocs)?locale=en-US). Esta opción se recomienda si deseas utilizar Stripe exclusivamente para procesar todas las redes de tarjetas o para acceder a [Stripe Link](https://stripe.com/payments/link), una solución que ofrece acceso rápido a varios medios de pago con un solo clic.

<div class="alert alert-info">
  <b>VTEX with Stripe Payment Element Experience</b> utiliza el <a href="https://docs.stripe.com/payments/elements">Stripe Payment Elements</a> Checkout, proporcionando acceso a los medios de pago actuales y futuros admitidos por Stripe. En esta opción, la configuración de los medios de pago se debe realizar directamente en <a href="https://dashboard.stripe.com/settings/payment_methods">Stripe Dashboard</a>.
</div>

<div class="alert alert-info">
Para información sobre la lista completa de medios de pago procesados por cada una de las opciones de operación de StripeV2, ponte en contacto con los equipos de soporte de <a href="stripe-support@vinneren.com.mx">Vinneren</a> o <a href="https://support.stripe.com/contact/login">Stripe</a>.
</div>

Después de determinar la opción con la que deseas operar en tu tienda, sigue las instrucciones del procedimiento correspondiente a continuación:

- [Configurar VTEX Checkout Experience](#configurar-vtex-checkout-experience)
- [Configurar VTEX con Stripe Payment Element Experience](#configurar-vtex-con-stripe-payment-element-experience) 

<div class="alert alert-warning">
La configuración realizada en un entorno externo a VTEX puede descontinuarse o modificarse sin previo aviso. Consulta tu cuenta en Stripe para información actualizada.
</div>

## Configurar VTEX Checkout Experience

Para utilizar __VTEX Checkout Experience__ en tu tienda, es necesario:

- [Instalar las aplicaciones de Stripe](#instalar-las-aplicaciones-de-stripe)
- [Configurar StripeV2 en VTEX](#configurar-stripev2-en-vtex)
- [Configurar condición de pago](#configurar-condicion-de-pago)

### Instalar las aplicaciones de Stripe

Para instalar las aplicaciones de Stripe en tu tienda, sigue los pasos a continuación:

<blockquote><ui>1. Accede al <a href="https://dashboard.stripe.com/login">dashboard de tu cuenta Stripe</a> e instala la aplicación <a href="https://marketplace.stripe.com/apps/VTEX-payments-plugin-v2">VTEX Payments Plugin V2</a> para obtener una clave tipo OAuth 2.0.</ui>

<blockquote><ui>2. Desinstala versiones anteriores de plug-ins de Stripe en tu tienda.</ui>

<blockquote><div class="alert alert-warning">
Antes de iniciar la instalación de la aplicación Payment Provider Framework, verifica con el equipo de soporte de <a href="stripe-support@vinneren.com.mx">Vinneren</a> o <a href="https://support.stripe.com/contact/login">Stripe</a> las versiones más actuales de la aplicación.
</div></blockquote>

<blockquote><ui>3. En <a href="https://developers.vtex.com/docs/guides/vtex-io-documentation-vtex-io-cli-install">VTEX IO CLI</a>, ejecuta los comandos a continuación para instalar las aplicaciones de Stripe:</ui>

  <blockquote><ui>- <b>Payment Provider Framework</b>: <code>vtex install stripe.stripe-payments-provide@{{current-app-version}}</code>. La información {{current-app-version}} debe sustituirse por la versión actual de la aplicación, por ejemplo: <code>vtex install stripe.stripe-payments-provide@0.0.49</code>.</ui></blockquote>
  <blockquote><ui>- <b>Payment App</b>: <code>vtex install stripe.stripe-payment-app</code>.</ui></blockquote>

### Configurar StripeV2 en VTEX

Para configurar la integración de StripeV2 en VTEX sigue los pasos a continuación:

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Proveedores__, o ingresa __Proveedores__ en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haz clic en el botón `Nuevo proveedor`.
3. Ingresa __StripeV2__ en la barra de búsqueda y haz clic en el nombre del proveedor.
4. En __Campos del proveedor__, en la opción __Mode__, selecciona __Float__.
5. En __Test Mode__, seleccione la opción __True__ o __False__.
6. Haz clic en `Guardar`.

### Configurar condición de pago

Para configurar una condición de pago para StripeV2 en VTEX sigue los pasos a continuación:

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Configuración__, o ingresa __Configuración__ en la barra de búsqueda en la parte superior de la página.
2. En la pestaña __Condiciones de pago__, haz clic en el botón `+`.
3. Haz clic sobre el nuevo medio de pago que desees utilizar.
4. En la pantalla de configuración, activa la condición haciendo clic en __Status__.
5. En __Procesar con el proveedor__, selecciona la opción __StripeV2__.
6. Si deseas utilizar un sistema antifraude, selecciona la opción __Utilizar antifraude__.
7. Si lo deseas, también puedes [configurar condiciones de pago especiales](/es/tutorial/condiciones-especiales--tutorials_456).
8. Haz clic en `Guardar`.

Para más información sobre los procedimientos de instalación de __VTEX Checkout Experience__, accede a la [documentación pública de Stripe en Vinneren](https://sites.google.com/vinneren.com.mx/documentacion-publica#h.nmryiar6zrqq).

## Configurar VTEX con Stripe Payment Element Experience

Para utilizar o VTEX with __Stripe Payment Element Experience__ em sua loja, é necessário:

- [Instalar las aplicaciones de Stripe](#instalar-las-aplicaciones-de-stripe)
- [Configurar StripeV2 en VTEX](#configurar-stripev2-en-vtex)
- [Configurar condiciones de pago](#configurar-condicion-de-pago)
- [Configurar un webhook en la cuenta Stripe](#configurar-un-webhook-en-la-cuenta-stripe)

### Instalar las aplicaciones de Stripe

Para instalar las aplicaciones de Stripe en tu tienda sigue los pasos a continuación:

<blockquote><ui>1. Accede al <a href="https://dashboard.stripe.com/login">dashboard de tu cuenta Stripe</a> e instala la aplicación <a href="https://marketplace.stripe.com/apps/vtex-elements-checkout">VTEX with Stripe Payment Element Experience</a> para obtener una clave RAK (Restricted API Key).</ui>

<blockquote><ui>2. Desinstala versiones anteriores de plug-ins de Stripe.</ui>

<blockquote><div class="alert alert-warning">
Antes de iniciar la instalación de la aplicación Payment Provider Framework, verifica con el equipo de soporte de <a href="stripe-support@vinneren.com.mx">Vinneren</a> o <a href="https://support.stripe.com/contact/login">Stripe</a> las versiones más actuales de la aplicación.
</div></blockquote>

<blockquote><ui>3. En <a href="https://developers.vtex.com/docs/guides/vtex-io-documentation-vtex-io-cli-install">VTEX IO CLI</a>, ejecuta los comandos a continuación para instalar las aplicaciones de Stripe:
</ui>

  <blockquote><ui>- <b>Payment Provider Framework</b>: <code>vtex install stripe.stripe-payments-provide@{{current-app-version}}</code>. La información {{current-app-version}} debe sustituirse por la última versión de la aplicación, por ejemplo: <code>vtex install stripe.stripe-payments-provide@0.0.49</code>.</ui></blockquote>
  <blockquote><ui>- <b>Payment App</b>: <code>vtex install stripe.stripe-payment-app</code>.</ui></blockquote>  

### Configurar StripeV2 en VTEX

Para configurar la integración de StripeV2 en VTEX sigue los pasos a continuación:

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Proveedores__, o ingresa __Proveedores__ en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haz clic en el botón `Nuevo proveedor`.
3. Ingresa __StripeV2__ en la barra de búsqueda y haz clic sobre el nombre del proveedor.
4. En __Clave de aplicación__, ingresa la clave publicable que obtuviste en la aplicación RAK (Clave publicable).
5. En __Token de aplicación__, ingresa la clave secreta que obtuviste en la aplicación RAK (clave secreta). 
6. En __Campos do provedor__, en la opción __Mode__, selecciona __Embedded__.
7. En __Test Mode__, seleccione la opción __True__ o __False__.
8. Haz clic en `Guardar`.

### Configurar condición de pago

Para configurar una condición de pago para StripeV2 en VTEX sigue los pasos a continuación:

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Configuración__, o ingresa __Configuración__ en la barra de búsqueda en la parte superior de la página.
2. En la pestaña __Condiciones de pago__, haz clic en el botón `+`.
3. Haz clic sobre el nuevo medio de pago que desees utilizar.
4. En la pantalla de configuración, activa la condición haciendo clic en __Status__.
5. En __Procesar con proveedor__, selecciona la opción __StripeV2__.
6. Si deseas utilizar un sistema antifraude, selecciona la opción __Utilizar antifraude__.
7. Si lo deseas, también puedes [configurar condiciones de pago especiales](/es/tutorial/condiciones-especiales--tutorials_456).
8. Haz clic en `Guardar`.

Para más información sobre los procedimientos de instalación de __VTEX with Stripe Payment Element Experience__, accede a la [documentación pública de Stripe en Vinneren](https://sites.google.com/vinneren.com.mx/documentacion-publica#h.nmryiar6zrqq).

### Configurar un webhook en la cuenta Stripe

Para realizar la configuración del webhook en tu cuenta Stripe, sigue los pasos a continuación:

1. Accede al [dashboard de tu cuenta Stripe](https://dashboard.stripe.com/).
2. Haz clic en el botón __Developers__.
3. Haz clic en la pestaña __Webhooks__.
4. Haz clic en el botón __Add a connection point__.
5. En el campo __Connection point URL__, ingresa la URL del endpoint de tu tienda VTEX en el siguiente formato: `https://{{account}}.myvtex.com/_v/stripe.payment-provider-connector/v0/webhook`. Sustituye {account} por el nombre de tu cuenta VTEX.
6. Haz clic en __+ Select events__.
7. Haz clic en las categorías y selecciona los siguientes eventos:
<blockquote> - <b>payment_intent.succeeded</b></blockquote>
<blockquote> - <b>payment_method.attached</b></blockquote>

8. Haz clic en __Add events__.
9. Haz clic en __Add Connection Point__.  

## Configurar pago con Google Pay en StripeV2 (opcional)  

Con el proveedor StripeV2 puedes procesar pagos con Google Pay en tu tienda. Para configurar Google Pay sigue los pasos a continuación:

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Configuración__, o ingresa __Configuración__ en la barra de búsqueda en la parte superior de la página.
2. En la pestaña __Condiciones de pago__, haz clic en el botón `+`.
3. Haz clic en la opción __Google Pay__.
4. En la pantalla de configuración, activa la condición haciendo clic en __Status__.
5. En __Procesar con proveedor__, selecciona la opción StripeV2
6. Haz clic en `Guardar`.

Cuando hayas realizado estos pasos, Google Pay figurará en el checkout de la tienda como uno de los medios de pago disponibles.

## Configurar pago con Apple Pay en StripeV2 (opcional)

Con el proveedor StripeV2 puedes procesar pagos con Apple Pay en tu tienda. Para configurar Apple Pay sigue los pasos a continuación:

1. Accede al [dashboard de sua conta na Stripe](https://dashboard.stripe.com/) en la sección de configuración de pagos.
2. En __Settings__, haz clic en __Payment Methods__.
3. Haz clic en __Apple Pay > Set Up__.
4. Haz clic en __Add to New Domain__.
5. Ingresa el dominio público del sitio web de tu tienda.
6. Haz clic en __Add__.
7. Ejecuta las acciones descritas en la [documentación de Stripe](https://docs.stripe.com/payments/payment-methods/pmd-registration?dashboard-or-api=dashboard#verify-domain-with-apple) y luego haz clic en __Download the domain association file__.
8. Tras obtener el archivo, guarda la información y accede a la siguiente URL `https://{{account}}.myvtex.com/_v/stripe.paid-provider/v0/registerApplePay`. Sustituye {{account}} por el nombre de tu cuenta VTEX.
9. Ingresa la información previamente guardada en el campo __Enter your Apple App Key__.
10. Haz clic en `Guardar`.
11. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Configuración__, o ingresa __Configuración__ en la barra de búsqueda en la parte superior de la página.
12. En la pestaña __Condiciones de pago__, haz clic en el botón `+`.
13. Haz clic en __Apple Pay__.
14. En la pantalla de configuración, activa la condición haciendo clic en __Status__.
15. En __Procesar con proveedor__, selecciona la opción __StripeV2__.
16. Si deseas utilizar un sistema antifraude, selecciona la opción __Utilizar antifraude__.
17. Indica si deseas procesar pagos en cuotas o al contado.
18. Si lo deseas, también puedes [configurar condiciones de pago especiales](/es/tutorial/condiciones-especiales--tutorials_456).
19. Haz clic en `Guardar`.

Cuando hayas realizado estos pasos, Apple Pay figurará en el checkout de la tienda como uno de los medios de pago disponibles.

## Configurar condición de pago en meses sin intereses (MSI) (opcional)

<div class="alert alert-warning">
  La condición de pago en cuotas sin intereses (<b>MSI - Meses Sin Intereses</b>) está disponible en Stripe únicamente para cuentas en México.
</div>  

__MSI__ se puede configurar tanto la opción de operación __VTEX Checkout experience__ como para __VTEX with Stripe Payment Element Experience__. A continuación se indican los pasos para configurarla en función de la opción de operación adoptada en tu tienda:

### Configurar MSI en la opción VTEX Checkout experience

1. Crea una cuenta [Stripe](https://stripe.com/) en México configurada con la moneda MXN.
2. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Configuración__, o ingresa __Configuración__ en la barra de búsqueda en la parte superior de la página.
3. Haz clic en uno de los medios de pago disponibles que procesan pagos con __MSI__ (tarjetas VISA, AMEX y Mastercard).
4. [Configura las condiciones MSI](/es/tutorial/condiciones-de-pago--tutorials_455#en-cuotas-sin-interes) de la forma deseada en la pantalla del medio de pago.
5. [Configura las condiciones MSI](https://support.stripe.com/questions/c%C3%B3mo-configurar-meses-sin-intereses-%28msi%29-en-tu-cuenta-stripe?locale=es-419) en tu dashboard de Stripe con la misma información utilizada en la configuración de VTEX (paso 4).

<div class="alert alert-warning">
  Si la información registrada en los pasos 4 y 5 es diferente, la condición de MSI podría no funcionar correctamente.
</div>  

### Configurar MSI en la opción VTEX con Stripe Payment Element Experience

1. Crea una cuenta [Stripe](https://stripe.com/) en México configurada con la moneda MXN.
2. [Configura las condiciones de MSI](https://support.stripe.com/questions/c%C3%B3mo-configurar-meses-sin-intereses-%28msi%29-en-tu-cuenta-stripe?locale=es-419) en tu dashboard de Stripe.
3. Ponte en contacto con tu representante de Stripe o con el equipo de [Ayuda y soporte de Stripe](https://stripe.com/mx/contact) para solicitar que esta condición de pago se active en tu tienda.

