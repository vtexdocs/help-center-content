---
title: Configurar el adquirente Worldpay 
id: 7GCtigwhNYMi604UM0KeO6
status: PUBLISHED
createdAt: 2018-02-28T22:09:45.321Z
updatedAt: 2023-03-29T00:47:52.166Z
publishedAt: 2023-03-29T00:47:52.166Z
firstPublishedAt: 2018-02-28T22:38:14.737Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: configurar-el-adquirente-worldpay
legacySlug: configurar-el-adquirente-worldpay
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

Worldpay es un [adquirente](/es/tutorial/que-es-un-adquirente) de actuación global, capaz de procesar pagos en los más diversos tipos de monedas y tarjetas.

Para configurar Worldpay, siga estos pasos:

## Configurar la afiliación de gateway Worldpay

1. En el Admin VTEX, accede a **Configuración de la tienda** > **Pago** > **Configuración**, o escribe **Configuración** en la barra de búsqueda en la parte superior de la página.
2. En la pestaña __Afiliaciones__, haga clic en el botón __+__.
3. Haga clic en el conector __Worldpay__.
4. Rellene los campos de registro con la información de su cuenta en Worldpay (campos _UserName_, _Password_, _Version_, _MerchantCode_).
5. En el campo __Currency__, elija la moneda de las transacciones.
6. En el campo __Captura de segurança antecipada__, escoja en cuánto tiempo desea que la captura se realice después de la aprobación de la transacción y del análisis del antifraude. Usted también puede desactivar esta función.
7. Haga clic en __Guardar__.

## Configurar la condición de pago

Después de seguir estos pasos, Worldpay estará configurada en su tienda. Por lo tanto, cuando se registre una condición de pago, ella estará disponible en el campo __Procesar con afiliación__ (siempre que el medio de pago forme parte de la red de adquisición de Worldpay). Para saber cómo definir condiciones de pago, acceda a [este artículo del Help](/es/tutorial/condiciones-de-pago).
