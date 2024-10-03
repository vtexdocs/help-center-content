---
title: 'Configurar adquirente Getnet'
id: 5jKTzassnCkOcU4AIGc6W6
status: ARCHIVED
createdAt: 2018-03-05T19:25:46.439Z
updatedAt: 2020-04-24T15:04:58.459Z
publishedAt: 
firstPublishedAt: 2018-03-05T20:43:53.372Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slugEN: setting-up-getnet-acquirer
locale: es
legacySlug: configurar-adquirente-getnet
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Getnet es uno de los mayores [adquirentes](/es/tutorial/que-es-un-adquirente) de Brasil y cuenta con las principales banderas de tarjetas en su red de adquisición, incluso algunas que actúan regionalmente.

Para configurar Getnet, siga estos pasos:

## Configurar la afiliación de gateway Getnet

1. Acceda al módulo __Pagos__.
2. Haga clic en __Ajustes__.
3. En la pestaña __Afiliaciones__, haga clic en el botón __+__.
4. Haga clic en el conector __Getnet__.
5. En el campo __External Service Url__, configure la URL externa que va a estar asociada a `/pvt/payments?an={AccountName}`.
6. Rellene los campos de registro con los datos proporcionados por Getnet (campos _appKey_ y _appToken_).
7. En __Implements Installments Service__, usted debe elegir si desea utilizar servicios externos de parcelación o el servicio que está configurado en el portal. Si elige la opción _yes_, el sistema utilizará la URL configurada en el campo __Installments Service Url__.
8. En __External Cancellation Service__, usted debe definir el uso o no de un servicio de cancelación externo. Si elige la opción _yes_, el sistema utilizará la URL configurada en el campo __External Service Url__.
9. En el campo __Installments Service Url__, configure la URL externa que va a estar asociada a `/options`.
10. En __SoftDescriptor__, indique el texto que va a aparecer para identificar la transacción realizada en su tienda.
11. En el campo __Captura de segurança antecipada__ ("Captura de seguridad anticipada"), escoja en cuánto tiempo desea que la captura sea realizada después de aprobada la transacción y del análisis del antifraude). También es posible desactivar esta función.
12. En __Usa Antifraude__, informe si desea usar un servicio de antifraude.
13. Haga clic en __Guardar__.

## Configurar la condición de pago

Después de seguir los pasos indicados arriba, Getnet estará configurada en su tienda. Por lo tanto, cuando se registre una condición de pago, estará disponible en el campo __Procesar con afiliación__ (siempre que el medio de pago sea compatible con Getnet). Para saber cómo definir condiciones de pago, acceda a [este artículo](/es/tutorial/condiciones-de-pago).
