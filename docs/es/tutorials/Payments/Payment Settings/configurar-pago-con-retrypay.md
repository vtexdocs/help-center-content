---
title: 'Configurar pago con Retrypay'
id: 3QGioVKVI1Qnk3JbbJlJVY
status: ARCHIVED
createdAt: 2023-03-30T19:35:06.661Z
updatedAt: 2024-10-03T16:10:27.675Z
publishedAt: 
firstPublishedAt: 2023-03-30T20:01:51.283Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-retrypay
locale: es
legacySlug: configurar-pago-con-retrypay
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX es posible la integración con el proveedor de pagos Retrypay. Con este proveedor, tu tienda puede realizar ventas a través de pagarés y Retrypay.

Para configurar Retrypay, siga los pasos a continuación:

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Proveedores__, o escribe __Proveedores__ en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre __RetryPay__ en la barra de búsqueda y haga clic en el nombre del proveedor.
4. Rellene los campos de registro __Application Key__, __Application Token__, __Tenant__, __Retripay Merchant API Key__ y __Retripay Hook Token__ con los datos proporcionados por Retrypay. 
5. En __Payment Method__, elija una de dos opciones: __Redirect__ o __Payment App__.
6. En __Environment__, elija una de dos opciones: __Demo__ o __Production__.
7. Haga clic en `Guardar`.

## Configurar la condición de pago Pagaré

Si quieres utilizar Retrypay con pagaré y no has configurado el pagaré como método de pago en otros proveedores de tu tienda, accede a [Configurar pagos con Pagaré](https://help.vtex.com/es/tutorial/configurar-pagos-con-pagare).

Luego siga los pasos a continuación:

1. En el Admin VTEX, accede a **Configuración de la tienda** > **Pago** > **Configuración**, o escribe **Configuración** en la barra de búsqueda en la parte superior de la página.
2. En la pestana __Condiciones de pago__, haga clic en el botón `+`.
3. En __Pago personalizado__, haga clic en el botón correspondiente al nombre utilizado para el método de pago del pagaré (configurado en la sección anterior).
4. Active la condición en el campo __Status__.
5. En __Procesar con afiliación__, seleccione __retrypaypartnermx-payment-provider-v1__.
6. Si lo desea, también puede configurar [condiciones especiales de pago](https://help.vtex.com/es/tutorial/condiciones-especiales--tutorials_456).
7. Haga clic en `Guardar`.

## Configurar la condición de pago Retrypay

1. En el Admin VTEX, accede a **Configuración de la tienda** > **Pago** > **Configuración**, o escribe **Configuración** en la barra de búsqueda en la parte superior de la página.
2. En la pestana __Condiciones de pago__, haga clic en el botón `+`.
3. Haga clic en __RetryPay__.
4. Active la condición en el campo __Status__.
5. Si desea utilizar un sistema antifraude, seleccione la opción __Utilizar antifraude__.
6. Si lo desea, también puede configurar [condiciones especiales de pago](https://help.vtex.com/es/tutorial/condiciones-especiales--tutorials_456).
7. Haga clic en `Guardar`.

Después de seguir los pasos indicados, Retrypay puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.
