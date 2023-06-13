---
title: Configurar gateway Pagar.me
id: egFyDkXjfa80wkSkUWsmc
status: PUBLISHED
createdAt: 2018-04-10T17:54:18.410Z
updatedAt: 2023-03-26T21:05:35.943Z
publishedAt: 2023-03-26T21:05:35.943Z
firstPublishedAt: 2018-04-10T18:10:52.337Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: configurar-gateway-pagar-me
legacySlug: configurar-gateway-pagar-me
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

Pagar.me es un [gateway](/es/tutorial/que-es-un-gateway-de-pagos) que ofrece diversas soluciones para procesar pagos en su tienda.

Para configurar Pagar.me, siga estos pasos:

## Configurar la afiliación de gateway Pagar.me
1. En el Admin VTEX, accede a **Configuración de la tienda** > **Pago** > **Configuración**, o escribe **Configuración** en la barra de búsqueda en la parte superior de la página.
2. En la pestaña __Afiliaciones__, haga clic en el botón __+__.
3. Haga clic en el conector __PagarMe__.
4. En el campo __External Service Url__, configure la URL externa que va a estar asociada a `/pvt/payments?an={AccountName}`.
5. Rellene los campos de registro con los datos proporcionados por Pagar.me (campos __appKey__ y __appToken__).
6. En __Implements Installments Service__, usted debe elegir si desea utilizar servicios externos de parcelación o lo que está configurado en el portal. Si elige la opción _yes_, el sistema utilizará la URL configurada en el campo __Installments Service Url__.
7. En __External Cancellation Service__, defina el uso o no de un servicio de cancelación externo. Si elige la opción _yes_, el sistema utilizará la URL configurada en el campo __External Service Url__.
8. En el campo __Installments Service Url__, configure la URL externa que va a estar asociada a `/options`.
9. En __SoftDescriptor__, indique el texto que va a aparecer para identificar la transacción realizada en su tienda.
10. En el campo __Captura de seguridad anticipada__, escoja en cuánto tiempo desea que la captura sea realizada (después de la aprobación de la transacción y del análisis del antifraude). También es posible desactivar esta función.
11. En __Usa Antifraude__, informe si desea usar un antifraude.
12. Haga clic en __Guardar__.

## Configurar la condición de pago
Después de seguir los pasos indicados arriba, Pagar.me va a estar configurado en su tienda. Por lo tanto, cuando se registre una condición de pago, estará disponible en el campo __Procesar con la afiliación__ (siempre que el medio de pago sea compatible con Pagar.me).
Para saber cómo definir condiciones de pago, acceda a [este artículo del Help](/es/tutorial/condiciones-de-pago).
