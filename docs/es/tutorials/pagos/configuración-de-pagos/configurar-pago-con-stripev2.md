---
title: 'Configurar pago con StripeV2'
id: 3XG7Vrb0GGhdN40ICNKQoN
status: PUBLISHED
createdAt: 2025-03-07T15:20:58.287Z
updatedAt: 2025-09-19T19:45:07.908Z
publishedAt: 2025-09-19T19:45:07.908Z
firstPublishedAt: 2025-03-07T15:34:55.639Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-stripev2
legacySlug: configurar-pago-con-stripev2
locale: es
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX puedes realizar la integración con el proveedor de pago StripeV2. A través de este proveedor, tu tienda puede ofrecer diversos medios de pago, como Visa, American Express, Diners, Elo, Hipercard, Mastercard, BankInvoice, Stripe, Google Pay, ApplePay, OXXO, Discover, Affirm, Klarna, ZIP, Blik, Ideal, SPEI, MultiBanco, Afterpay, Bancontact, EPS, FPX, giropay y P24.

Para más información sobre la integración de VTEX con Stripe, también puede acceder a la [documentación de Vinneren](https://sites.google.com/vinneren.com.mx/documentacion-publica/documentacion-publica).

## Opciones de operación

El proveedor StripeV2 puede procesar transacciones de pago en tiendas VTEX de dos maneras diferentes:

- __VTEX Native Checkout Experience__: puede usarse para tarjetas de crédito, tarjetas de débito y medios de pago desarrollados con [Payment Provider Framework (PPF)](https://developers.vtex.com/docs/guides/payments-integration-payment-provider-framework). Esta opción es recomendable si deseas configurar otros gateways de pago para diferentes redes de tarjeta o realizar transacciones utilizando el checkout nativo de VTEX.

- __VTEX with Stripe Payment Element Experience__: aplicación de pago basada en el [Stripe’s Optimized Checkout Suite (OCS)](https://support.stripe.com/questions/what-is-stripe-s-optimized-checkout-suite-(ocs)?locale=en-US). Esta opción se recomienda si deseas utilizar Stripe exclusivamente para procesar todas las redes de tarjetas o para acceder a [Stripe Link](https://stripe.com/payments/link), una solución que ofrece acceso rápido a varios medios de pago con un solo clic.

> ℹ️ **VTEX with Stripe Payment Element Experience** utiliza el [Stripe Payment Elements Checkout](https://docs.stripe.com/payments/elements), proporcionando acceso a los medios de pago actuales y futuros admitidos por Stripe. En esta opción, la configuración de los medios de pago se debe realizar directamente en [Stripe Dashboard](https://dashboard.stripe.com/settings/payment_methods).

> ℹ️ Para información sobre la lista completa de medios de pago procesados por cada una de las opciones de operación de StripeV2, ponte en contacto con los equipos de soporte de [Vinneren](stripe-support@vinneren.com.mx) o [Stripe](https://support.stripe.com/contact/login).

Después de determinar la opción con la que deseas operar en tu tienda, sigue las instrucciones del procedimiento correspondiente a continuación:

- [Configurar VTEX Native Checkout Experience](#configurar-vtex-native-checkout-experience)
- [Configurar VTEX con Stripe Payment Element Experience](#configurar-vtex-con-stripe-payment-element-experience) 

> ⚠️ La configuración realizada en un entorno externo a VTEX puede descontinuarse o modificarse sin previo aviso. Consulta tu cuenta en Stripe para información actualizada.

## Configurar VTEX Native Checkout Experience

> ⚠️ El equipo de Stripe debe habilitar los pagos de RawPan en su cuenta. Comuníquese con su [Stripe advisor](https://support.stripe.com/?locale=es-419). Si esta opción no está habilitada en su cuenta, no podrá realizar transacciones exitosas.

Requisitos previos:
- Usuario VTEX con permisos de administrador
- Cuenta activa de Stripe

Para utilizar __VTEX Native Checkout Experience__ en tu tienda, es necesario:

- [Instalar las aplicaciones de Stripe](#instalar-las-aplicaciones-de-stripe)
- [Configurar StripeV2 en VTEX](#configurar-stripev2-en-vtex)
- [Configurar condición de pago](#configurar-condicion-de-pago)

### Instalar las aplicaciones de Stripe

Para instalar las aplicaciones de Stripe en tu tienda, sigue los pasos a continuación:

1. Instale el [VTEX Native Checkout (aplicación Stripe)](https://marketplace.stripe.com/apps/vtex-native-checkout).Durante la configuración, asegúrese de ingresar el nombre de su cuenta VTEX usando solo letras minúsculas. Por ejemplo, si el nombre de su cuenta es "MyStore", ingréselo como "mystore".
2. Acceda al [Stripe Dashboard](https://dashboard.stripe.com/login?redirect=%2Fapikeys), copie y guarde las claves publicable y secreta. Es importante que copie y guarde las claves del modo (prueba o en vivo) en el que instaló la aplicación VTEX Native Checkout App en Stripe.

> ⚠️ Antes de iniciar la instalación de la aplicación Payment Provider Framework, verifica con el equipo de soporte de [Vinneren](stripe-support@vinneren.com.mx) o [Stripe](https://support.stripe.com/contact/login) las versiones más actuales de la aplicación.

3. En [VTEX IO CLI](https://developers.vtex.com/docs/guides/vtex-io-documentation-vtex-io-cli-install), ejecuta los comandos a continuación para instalar las aplicaciones de Stripe:

- **Payment Provider Framework**: `vtex install stripe.stripe-payments-provider`.
- **Payment App**: `vtex install stripe.stripe-payment-app`.

### Configurar StripeV2 en VTEX

Para configurar la integración de StripeV2 en VTEX sigue los pasos a continuación:

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Proveedores__, o ingresa __Proveedores__ en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haz clic en el botón `Nuevo proveedor`.
3. Ingresa __StripeV2__ en la barra de búsqueda y haz clic en el nombre del proveedor.
4. En __Clave de aplicación__, ingrese la clave publicable que obtuvo en los pasos anteriores.
5. En __Token de aplicación__, ingrese la clave secreta que obtuvo en los pasos anteriores.
6. En __Información general__, en la opción __Nombre__, ingrese __StripeV2NativeCheckout__ para identificar el tipo de integración.  
7. En __Campos del proveedor__, en la opción __Mode__, selecciona __Float__.
8. En __Test Mode__, seleccione __Falso__ si el modo es __Live__ o __True__ si el modo es __Test__.
9. Haz clic en `Guardar`.

### Configurar script antifraude

Para configurar el script antifraude para StripeV2 en VTEX, siga los pasos a continuación:

1. Copia el script disponible en la sección "[Integrate script into your VTEX store](https://sites.google.com/vinneren.com.mx/documentacion-publica/native-checkout/english)".
2. En el Admin de VTEX, acceda a __Configuración de la tienda > Storefront > Checkout > Código__.
3. Haga clic en el botón __Nuevo__ e ingrese un nombre descriptivo.
4. Pegue el contenido del script que copió anteriormente.
5. Reemplace la información "pk_test" con su clave pública de Stripe copiada en los pasos anteriores.
6. Haga clic en `Guardar`.

### Configurar condición de pago

Para configurar una condición de pago para StripeV2 en VTEX sigue los pasos a continuación:

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Configuración__, o ingresa __Configuración__ en la barra de búsqueda en la parte superior de la página.
2. En la pestaña __Condiciones de pago__, haz clic en el botón `+`.
3. Haz clic sobre el nuevo medio de pago que desees utilizar.
4. En la pantalla de configuración, activa la condición haciendo clic en __Status__.
5. En __Procesar con el proveedor__, selecciona la opción __StripeV2NativeCheckout__.
6. Si deseas utilizar un sistema antifraude, selecciona la opción __Utilizar antifraude__.
7. Si lo deseas, también puedes [configurar condiciones de pago especiales](/es/docs/tutorials/condiciones-especiales).
8. Haz clic en `Guardar`.

Para más información sobre los procedimientos de instalación de __VTEX Native Checkout Experience__, accede a la [documentación pública de Stripe en Vinneren](https://sites.google.com/vinneren.com.mx/documentacion-publica#h.nmryiar6zrqq).

## Configurar VTEX con Stripe Payment Element Experience

Requisitos previos:
- Usuario VTEX con permisos de administrador
- Cuenta activa de Stripe  

Para utilizar o __VTEX with Stripe Payment Element Experience__ em sua loja, é necessário:

- [Instalar las aplicaciones de Stripe](#instalar-las-aplicaciones-de-stripe-element-experience)
- [Configurar StripeV2 en VTEX](#configurar-stripev2-en-vtex-element-experience)
- [Configurar condiciones de pago](#configurar-condicion-de-pago-element-experience)
- [Configurar un webhook en la cuenta Stripe](#configurar-un-webhook-en-la-cuenta-stripe-element-experience)

### Instalar las aplicaciones de Stripe (Element Experience)

Para instalar las aplicaciones de Stripe en tu tienda sigue los pasos a continuación:

1. Instale el [VTEX Elements Checkout (Stripe App)](https://marketplace.stripe.com/apps/vtex-with-stripe-payment-element) para obtener las claves de Stripe necesarias.
2. Una vez que se complete la instalación, se mostrarán las claves pública (pk) y restringida (rk). Cópielos y guárdelos, ya que los utilizará más adelante.

> ⚠️ Antes de iniciar la instalación de la aplicación Payment Provider Framework, verifica con el equipo de soporte de [Vinneren](stripe-support@vinneren.com.mx) o [Stripe](https://support.stripe.com/contact/login) las versiones más actuales de la aplicación.

3. En [VTEX IO CLI](https://developers.vtex.com/docs/guides/vtex-io-documentation-vtex-io-cli-install), ejecuta los comandos a continuación para instalar las aplicaciones de Stripe:

- **Payment Provider Framework**: `vtex install stripe.stripe-payments-provider`.
- **Payment App**: `vtex install stripe.stripe-payment-app`.

### Configurar StripeV2 en VTEX (Element Experience)

Para configurar la integración de StripeV2 en VTEX sigue los pasos a continuación:

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Proveedores__, o ingresa __Proveedores__ en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haz clic en el botón `Nuevo proveedor`.
3. Ingresa __StripeV2__ en la barra de búsqueda y haz clic sobre el nombre del proveedor.
4. En __Clave de aplicación__, ingresa la clave publicable que obtuviste en el __VTEX Elements Checkout (Stripe App)__.
5. En __Token de aplicación__, ingresa la clave secreta que obtuviste en el __VTEX Elements Checkout (Stripe App)__ (restricted API key).
6. En __Información general__, en la opción __Nombre__, ingrese __StripeV2Elements__ para identificar el tipo de integración.  
7. En __Campos del proveedor__, en la opción __Mode__, selecciona __Embedded__.
8. En __Test Mode__, seleccione __Falso__ si el modo es __Live__ o __True__ si el modo es __Test__.
9. Haz clic en `Guardar`.
10. Agregue claves Stripe en la configuración de la aplicación del proveedor, de la siguiente manera:
a. Vaya a **Applications > My applications > Stripe Payment Provider**.
b. Haga clic en **Settings**.
c. En **Clave publicable**, ingrese su clave comenzando con **pk_**.
d. En **Clave secreta**, ingrese su clave comenzando con **rk_**.
e. Haga clic en **Guardar**.

### Configurar condición de pago (Element Experience)

Para configurar una condición de pago para StripeV2 en VTEX sigue los pasos a continuación:

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Configuración__, o ingresa __Configuración__ en la barra de búsqueda en la parte superior de la página.
2. En la pestaña __Condiciones de pago__, haz clic en el botón `+`.
3. Haz clic sobre el nuevo medio de pago que desees utilizar.
4. En la pantalla de configuración, activa la condición haciendo clic en __Status__.
5. En __Procesar con proveedor__, selecciona la opción __StripeV2Elements__.
6. Si deseas utilizar un sistema antifraude, selecciona la opción __Utilizar antifraude__.
7. Si lo deseas, también puedes [configurar condiciones de pago especiales](/es/docs/tutorials/condiciones-especiales).
8. Haz clic en `Guardar`.

Para más información sobre los procedimientos de instalación de __VTEX with Stripe Payment Element Experience__, accede a la [documentación pública de Stripe en Vinneren](https://sites.google.com/vinneren.com.mx/documentacion-publica#h.nmryiar6zrqq).

### Configurar un webhook en la cuenta Stripe (Element Experience)

Para realizar la configuración del webhook en tu cuenta Stripe, sigue los pasos a continuación:

1. Accede al [dashboard de tu cuenta Stripe](https://dashboard.stripe.com/).
2. Haz clic en el botón __Developers__.
3. Haz clic en la pestaña __Webhooks__.
4. Haz clic en el botón __Add a connection point__.
5. En el campo __Connection point URL__, ingresa la URL del endpoint de tu tienda VTEX en el siguiente formato: `https://{{account}}.myvtex.com/_v/stripe.payment-provider-connector/v0/webhook`. Sustituye {account} por el nombre de tu cuenta VTEX.
6. Haz clic en __+ Select events__.
7. Haz clic en las categorías y selecciona los siguientes eventos:
- **payment_intent.payment_failed**
- **payment_method.canceled**
- **payment_intent.succeeded**
- **payment_method.attached**

8. Haz clic en __Add events__.
9. Haz clic en __Add Connection Point__.

## Configurar pago con Google Pay en StripeV2 (opcional)

Con el proveedor StripeV2 puedes procesar pagos con Google Pay en tu tienda. Para configurar Google Pay sigue los pasos a continuación:

1. Si ya completó los pasos de instalación de [VTEX Elements](#configurar-vtex-con-stripe-payment-element-experience), continúe con el Paso 13.
2. Instale el [VTEX Elements Checkout (Stripe App)](https://marketplace.stripe.com/apps/vtex-with-stripe-payment-element) para obtener las claves de Stripe necesarias.
3. Una vez que se complete la instalación, se mostrarán las claves pública (pk) y restringida (rk). Cópielos y guárdelos, ya que los utilizará más adelante.
4. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Proveedores__, o ingresa __Proveedores__ en la barra de búsqueda en la parte superior de la página.
5. En la pantalla de proveedores, haz clic en el botón `Nuevo proveedor`.
6. Ingresa __StripeV2__ en la barra de búsqueda y haz clic sobre el nombre del proveedor.
7. En __Clave de aplicación__, ingresa la clave publicable que obtuviste en el __VTEX Elements Checkout (Stripe App)__.
8. En __Token de aplicación__, ingresa la clave secreta que obtuviste en el __VTEX Elements Checkout (Stripe App)__ (restricted API key).
9. En __Información general__, en la opción __Nombre__, ingrese __StripeV2Elements__ para identificar el tipo de integración.  
10. En __Campos del proveedor__, en la opción __Mode__, selecciona __Embedded__.
11. En __Test Mode__, seleccione __Falso__ si el modo es __Live__ o __True__ si el modo es __Test__.
12. Haz clic en `Guardar`.
13. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Configuración__, o ingresa __Configuración__ en la barra de búsqueda en la parte superior de la página.
14. En la pestaña __Condiciones de pago__, haz clic en el botón `+`.
15. Haz clic en la opción __Google Pay__.
16. En la pantalla de configuración, activa la condición haciendo clic en __Status__.
17. En __Procesar con proveedor__, selecciona la opción __StripeV2Elements__.
18. Haz clic en `Guardar`.

Cuando hayas realizado estos pasos, Google Pay figurará en el checkout de la tienda como uno de los medios de pago disponibles.

## Configurar pago con Apple Pay en StripeV2 (opcional)

Con el proveedor StripeV2 puedes procesar pagos con Apple Pay en tu tienda. Para configurar Apple Pay sigue los pasos a continuación:

1. Si ya completó los pasos de instalación de [VTEX Elements](#configurar-vtex-con-stripe-payment-element-experience), continúe con el Paso 13.
2. Instale el [VTEX Elements Checkout (Stripe App)](https://marketplace.stripe.com/apps/vtex-with-stripe-payment-element) para obtener las claves de Stripe necesarias.
3. Una vez que se complete la instalación, se mostrarán las claves pública (pk) y restringida (rk). Cópielos y guárdelos, ya que los utilizará más adelante.
4. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Proveedores__, o ingresa __Proveedores__ en la barra de búsqueda en la parte superior de la página.
5. En la pantalla de proveedores, haz clic en el botón `Nuevo proveedor`.
6. Ingresa __StripeV2__ en la barra de búsqueda y haz clic sobre el nombre del proveedor.
7. En __Clave de aplicación__, ingresa la clave publicable que obtuviste en el __VTEX Elements Checkout (Stripe App)__.
8. En __Token de aplicación__, ingresa la clave secreta que obtuviste en el __VTEX Elements Checkout (Stripe App)__ (restricted API key).
9. En __Información general__, en la opción __Nombre__, ingrese __StripeV2Elements__ para identificar el tipo de integración.
10. En __Campos del proveedor__, en la opción __Mode__, selecciona __Embedded__.
11. En __Test Mode__, seleccione __Falso__ si el modo es __Live__ o __True__ si el modo es __Test__.
12. Haz clic en `Guardar`.
13. Accede al [dashboard de sua conta na Stripe](https://dashboard.stripe.com/) en la sección de configuración de pagos.
14. En __Settings__, haz clic en __Payment Methods__.
15. Haz clic en __Apple Pay > Set Up__.
16. Haz clic en __Add to New Domain__.
17. Ingresa el dominio público del sitio web de tu tienda.
18. Haz clic en __Add__.
19. Ejecuta las acciones descritas en la [documentación de Stripe](https://docs.stripe.com/payments/payment-methods/pmd-registration?dashboard-or-api=dashboard#verify-domain-with-apple) y luego haz clic en __Download the domain association file__.
20. Tras obtener el archivo, guarda la información y accede a la siguiente URL `https://{{account}}.myvtex.com/_v/stripe.paid-provider/v0/registerApplePay`. Sustituye {{account}} por el nombre de tu cuenta VTEX.
21. Ingresa la información previamente guardada en el campo __Enter your Apple App Key__.
22. Haz clic en `Guardar`.
23. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Configuración__, o ingresa __Configuración__ en la barra de búsqueda en la parte superior de la página.
24. En la pestaña __Condiciones de pago__, haz clic en el botón `+`.
25. Haz clic en __Apple Pay__.
26. En la pantalla de configuración, activa la condición haciendo clic en __Status__.
27. En __Procesar con proveedor__, selecciona la opción __StripeV2__.
28. Si deseas utilizar un sistema antifraude, selecciona la opción __Utilizar antifraude__.
29. Indique si desea procesar pagos con o sin cuotas.
30. Si lo deseas, también puedes [configurar condiciones de pago especiales](/es/docs/tutorials/condiciones-especiales).
31. Haz clic en `Guardar`.

Cuando hayas realizado estos pasos, Apple Pay figurará en el checkout de la tienda como uno de los medios de pago disponibles.

## Configurar condición de pago en meses sin intereses (MSI) (opcional)

> ⚠️ La condición de pago en cuotas sin intereses (**MSI - Meses Sin Intereses**) está disponible en Stripe únicamente para cuentas en México.

__MSI__ se puede configurar tanto la opción de operación __VTEX Native Checkout experience__ como para __VTEX with Stripe Payment Element Experience__. A continuación se indican los pasos para configurarla en función de la opción de operación adoptada en tu tienda:

### Configurar MSI en la opción VTEX Native Checkout experience

1. Crea una cuenta [Stripe](https://stripe.com/) en México configurada con la moneda MXN.
2. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Configuración__, o ingresa __Configuración__ en la barra de búsqueda en la parte superior de la página.
3. Haz clic en uno de los medios de pago disponibles que procesan pagos con __MSI__ (tarjetas VISA, AMEX y Mastercard).
4. [Configura las condiciones MSI](/es/tutorial/condiciones-de-pago--tutorials_455#en-cuotas-sin-interes) de la forma deseada en la pantalla del medio de pago.
5. [Configura las condiciones MSI](https://support.stripe.com/questions/c%C3%B3mo-configurar-meses-sin-intereses-%28msi%29-en-tu-cuenta-stripe?locale=es-419) en tu dashboard de Stripe con la misma información utilizada en la configuración de VTEX (paso 4).

> ⚠️ Si la información registrada en los pasos 4 y 5 es diferente, la condición de MSI podría no funcionar correctamente.

### Configurar MSI en la opción VTEX with Stripe Payment Element Experience

1. Crea una cuenta [Stripe](https://stripe.com/) en México configurada con la moneda MXN.
2. [Configura las condiciones de MSI](https://support.stripe.com/questions/c%C3%B3mo-configurar-meses-sin-intereses-%28msi%29-en-tu-cuenta-stripe?locale=es-419) en tu dashboard de Stripe.
3. Ponte en contacto con tu representante de Stripe o con el equipo de [Ayuda y soporte de Stripe](https://stripe.com/mx/contact) para solicitar que esta condición de pago se active en tu tienda.

