---
title: 'Configurar adquirente Rede con ERedeRest'
id: 5TD6Ap9kiIUSiAMUsgYmcY
status: PUBLISHED
createdAt: 2018-04-12T15:47:44.783Z
updatedAt: 2023-03-29T01:11:21.243Z
publishedAt: 2023-03-29T01:11:21.243Z
firstPublishedAt: 2018-04-13T15:41:42.879Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: configurar-adquirente-rede-con-erederest
legacySlug: configurar-adquirente-rede-con-erederest
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX, usted puede hacer la integración con el [adquirente](/es/tutorial/que-es-un-adquirente) Rede usando el conector ERedeREST. Este conector trae una serie de mejoras, entre ellas el soporte a medios de pago con pre-autorización (__Visa__, __Mastercard__, __American Express__, __Diners__, __Hipercard__, __JCB__ y __Credz__).

<div class="alert alert-warning">
La bandera <strong>Elo</strong> todavía no es compatible con pre-autorización.
</div>

Otra característica importante del conector ERedeREST es que también se puede configurarlo para aceptar pagos con [__Apple Pay__](/es/tutorial/configurar-pagos-con-apple-pay), la cartera digital de Apple.

Para configurar el ERedeREST, siga estos pasos:

## Configurar la afiliación de gateway ERedeREST
1. En el Admin VTEX, accede a **Configuración de la tienda** > **Pago** > **Configuración**, o escribe **Configuración** en la barra de búsqueda en la parte superior de la página.
2. En la pestaña __Afiliaciones__, haga clic en el botón __+__.
3. Haga clic en el conector __ERedeRest__.
4. En el campo __PV__, introduzca el número de identificación de su tienda en el sistema de Rede.
5. En __Token__, informar el valor del Token creado por Rede. Para completar este campo, acceda a su cuenta en el sitio web de la Rede y en la sección Ajustes, busque __Generar Token__.
6. Los campos __Apple MerchantId__, __Apple Merchant Certificate (.p12)__ y __Apple Merchant Password__ deben cumplimentarse con los datos proporcionados por Apple. Esta configuración es necesaria para que su tienda pase a aceptar pagos con __Apple Pay__. Vea cómo obtener estos datos [en este artículo](/es/tutorial/configurar-merchant-id-en-apple-pay).
7. En __Captura de seguridad anticipada__, seleccione en cuánto tiempo desea que la captura se realice (después de la aprobación de la transacción y del análisis del antifraude). También es posible desactivar esta función.
8. Haga clic en __Guardar__.

## Configurar la condición de pago
Después de seguir los pasos indicados arriba, el adquirente Rede estará configurado en su tienda. Por lo tanto, cuando se registre una condición de pago, estará disponible en el campo __Procesar con la afiliación__ (siempre que el medio de pago forme parte de la red de adquirencia de Rede). Para saber cómo definir condiciones de pago, acceda a [este artículo del Help](/es/tutorial/condiciones-de-pago).

### Artículos relacionados
- [Configurar pagos con Apple Pay](/es/tutorial/configurar-pagos-con-apple-pay)
- [Cómo obtener la integración ERedeREST](/es/tutorial/nueva-integracion-con-erede-erederest)
- [Configurar Merchant ID en Apple Pay](/es/tutorial/configurar-merchant-id-en-apple-pay)
- [Configurar condiciones de pago](/es/tutorial/condiciones-de-pago)
- [¿Qué es un adquirente?](/es/tutorial/que-es-un-adquirente)
