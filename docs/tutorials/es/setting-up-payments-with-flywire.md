---
title: Configurar pago con Flywire
id: 12nQ0teCWM1UUtd2Fo6lzO
status: PUBLISHED
createdAt: 2023-04-03T13:05:10.955Z
updatedAt: 2023-04-03T13:32:26.361Z
publishedAt: 2023-04-03T13:32:26.361Z
firstPublishedAt: 2023-04-03T13:32:26.361Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slug: configurar-pago-con-flywire
legacySlug: configurar-pago-con-flywire
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX es posible la integración con el proveedor de pagos Flywire. Con este conector, tu tienda puede realizar ventas a través de pagarés y Flywire.

Para configurar la afiliación Flywire, siga los pasos a continuación:

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Configuración__, o escribe __Configuración__ en la barra de búsqueda en la parte superior de la página.
2. En la pestana __Afiliaciones de Gateway__, haga clic en el botón `+`.
3. Haga clic en el conector __Flywire__.
4. Rellene los campos de registro __Application Key__, __Application Token__, __Recipient__, __Locale__, __Provider__ y __Callback version__ con los datos proporcionados por Flywire. 
5. En __Environment__, elija una de dos opciones: __Demo__ o __Production__.
6. En __Display Payer Information__, elija una de dos opciones: __True_ o __False__.
7. Haga clic en `Guardar`.

## Configurar la condición de pago Pagaré

Si quieres utilizar Flywire con pagaré y no has configurado el pagaré como método de pago en otros conectores de tu tienda, accede a [Configurar pagos con Pagaré](https://help.vtex.com/es/tutorial/configurar-pagos-con-pagare--5pW7avTwtyQcMu4uiW8quQ).

Luego siga los pasos a continuación:

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Configuración__, o escribe __Configuración__ en la barra de búsqueda en la parte superior de la página.
2. En la pestana __Condiciones de pago__, haga clic en el botón `+`.
3. En __Pago personalizado__, haga clic en el botón correspondiente al nombre utilizado para el método de pago del pagaré (configurado en la sección anterior).
4. Active la condición en el campo __Status__.
5. En __Procesar con afiliación__, seleccione __flywirepartnermx-payment-provider-config-v0__.
6. Si lo desea, también puede configurar [condiciones especiales de pago](https://help.vtex.com/es/tutorial/condiciones-especiales--tutorials_456).
7. Haga clic en `Guardar`.

## Configurar la condición de pago Flywire

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Configuración__, o escribe __Configuración__ en la barra de búsqueda en la parte superior de la página.
2. En la pestana __Condiciones de pago__, haga clic en el botón `+`.
3. Haga clic en __Flywire__.
4. Active la condición en el campo __Status__.
5. Si desea utilizar un sistema antifraude, seleccione la opción __Utilizar antifraude__.
6. Si lo desea, también puede configurar [condiciones especiales de pago](https://help.vtex.com/es/tutorial/condiciones-especiales--tutorials_456).
7. Haga clic en `Guardar`.

Después de seguir los pasos indicados, Flywire puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.
