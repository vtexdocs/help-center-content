---
title: 'Configurar pago con Fpay'
id: 6BaLIO2R7tOh6E1MmNoDXj
status: PUBLISHED
createdAt: 2022-10-18T19:13:32.326Z
updatedAt: 2023-03-21T20:52:34.889Z
publishedAt: 2023-03-21T20:52:34.889Z
firstPublishedAt: 2022-10-18T19:42:03.523Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slug: configurar-pago-con-fpay
legacySlug: configurar-pago-con-fpay
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX es posible la integración con el proveedor de pagos Fpay. Con este conector, tu tienda puede realizar ventas a través de pagarés.

Para configurar la afiliación Fpay, siga los pasos a continuación:

1. En el Admin VTEX, accede a **Configuración de la tienda** > **Pago** > **Configuración**, o escribe **Configuración** en la barra de búsqueda en la parte superior de la página.
2. En la pestana __Afiliaciones de Gateway__, haga clic en el botón `+`.
3. Haga clic en el conector __Fpay__.
4. Rellene los campos de registro __Application Key__ y __Application Token__ con los datos proporcionados por Fpay. 
5. Haga clic en `Guardar`.

## Configurar Pagaré

Si aún no has configurado el pagaré como método de pago en otros conectores de tu tienda, accede a [Configurar pagos con Pagaré](https://help.vtex.com/es/tutorial/configurar-pagos-con-pagare--5pW7avTwtyQcMu4uiW8quQ).

## Configurar la condición de pago

1. En el Admin VTEX, accede a **Configuración de la tienda** > **Pago** > **Configuración**, o escribe **Configuración** en la barra de búsqueda en la parte superior de la página.
2. En la pestana __Condiciones de pago__, haga clic en el botón `+`.
3. En __Pago personalizado__, haga clic en el botón correspondiente al nombre utilizado para el método de pago del pagaré (configurado en la sección anterior).
4. Active la condición en el campo __Status__.
5. En __Procesar con afiliación__, seleccione __fpaypartnercl-fpay-v0__.
6. Si lo desea, también puede configurar [condiciones especiales de pago](https://help.vtex.com/es/tutorial/condiciones-especiales--tutorials_456).
7. Haga clic en `Guardar`.

Después de seguir los pasos indicados, Fpay puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.
