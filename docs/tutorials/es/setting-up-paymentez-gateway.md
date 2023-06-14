---
title: Configurar gateway Paymentez
id: 7zmH2WCtVuAoUUQWyU2qgO
status: PUBLISHED
createdAt: 2018-03-28T17:47:41.909Z
updatedAt: 2023-03-26T22:08:53.622Z
publishedAt: 2023-03-26T22:08:53.622Z
firstPublishedAt: 2018-03-28T18:18:57.206Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: configurar-gateway-paymentez
legacySlug: configurar-gateway-paymentez
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

Paymentez es un [gateway de pago](/es/tutorial/que-es-un-gateway-de-pagos) con [certificación PCI](/es/faq/que-es-el-pci-ssc) nivel 2 y tiene su actuación concentrada en América Latina.

Para configurar Paymentez, siga estos pasos:

## Configurar la afiliación de gateway Paymentez
1. En el Admin VTEX, accede a **Configuración de la tienda** > **Pago** > **Configuración**, o escribe **Configuración** en la barra de búsqueda en la parte superior de la página.
2. En la pestaña __Afiliaciones__, haga clic en el botón __+__.
3. Haga clic en el conector __Paymentez__.
4. En el campo __External Service Url__, configure la URL externa que va a estar asociada a `/pvt/payments?an={AccountName}`.
5. Rellene los campos de registro con los datos proporcionados por Paymentez (campos _appKey_ y _appToken_).
6. En __Implements Installments Service__, usted debe elegir si desea utilizar servicios externos de parcelación o el que está configurado en el portal. Si elige la opción _yes_, el sistema utilizará la URL configurada en el campo __Installments Service Url__.
7. En __External Cancellation Service__, defina el uso o no de un servicio de cancelación externo. Si elige la opción _yes_, el sistema utilizará la URL configurada en el campo __External Service Url__.
8. En el campo __Installments Service Url__, configure la URL externa que va a estar asociada a `/options`.
9. En __SoftDescriptor__, indique el texto que va a aparecer para identificar las transacciones realizadas en su tienda.
10. En el campo __Captura de seguridad anticipada__, escoja en cuánto tiempo desea que la captura sea realizada después de la aprobación de la transacción y del análisis del antifraude. También es posible desactivar esta función.
11. En __¿Tiene un antifraude contratado con esa afiliación?__, informe si desea usar un antifraude.
12. Haga clic en __Guardar__.

## Configurar la condición de pago
Después de seguir los pasos indicados arriba, Paymentez estará configurada en su tienda. Por lo tanto, cuando se registre una condición de pago, ella estará disponible en el campo __Procesar con la afiliación__ (siempre que el medio de pago sea compatible con Paymentez). Para saber cómo definir condiciones de pago, acceda a [este artículo del Help](/es/tutorial/condiciones-de-pago).
