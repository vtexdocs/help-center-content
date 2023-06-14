---
title: Configurar gateway PagHiper
id: I3KXAIIJG0oyyg4A4MykE
status: PUBLISHED
createdAt: 2018-04-09T22:06:11.621Z
updatedAt: 2023-03-29T01:13:11.291Z
publishedAt: 2023-03-29T01:13:11.291Z
firstPublishedAt: 2018-04-09T22:43:35.309Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: configurar-gateway-paghiper
legacySlug: configurar-gateway-paghiper
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

PagHiper es un [gateway](/es/tutorial/que-es-un-gateway-de-pagos) que se dedica al procesamiento de compras realizadas por boletos bancarios.

Para configurar PagHiper, siga los pasos abajo:

## Configurar la afiliación de gateway Paghiper
1. En el Admin VTEX, accede a **Configuración de la tienda** > **Pago** > **Configuración**, o escribe **Configuración** en la barra de búsqueda en la parte superior de la página.
2. En la pestaña __Afiliaciones__, haga clic en el botón __+__.
3. Haga clic en el conector __PagHiper__.
4. En el campo __External Service Url__, usted debe configurar la URL externa que va a estar asociada a `/pvt/payments?an={AccountName}`.
5. Rellene los campos de registro con los datos proporcionados por PagHiper (campos _appKey_ y _appToken_).
6. En __Implements Installments Service__, usted debe elegir si desea utilizar servicios externos de parcelación o el que está configurado en el portal. Si elige la opción _yes_, el sistema utilizará la URL configurada en el campo __Installments Service Url__.
7. En __External Cancellation Service__, defina el uso o no de un servicio de cancelación externo. Si elige la opción _yes_, el sistema utilizará la URL configurada en el campo __External Service Url__.
8. En el campo __Installments Service Url__, usted debe configurar la URL externa que va a estar asociada a `/options`.
9. En __SoftDescriptor__, indique el texto que va a aparecer para identificar la transacción realizada en su tienda.
10. En el campo __email__, introduzca el e-mail registrado en PagHiper.
11. En __Captura de seguridad anticipada__, escoja en cuánto tiempo desea que la captura se realice después de la aprobación de la transacción y del análisis del antifraude. También es posible desactivar esta función.
12. En __Usa Antifraude__, informe si desea usar un antifraude.
13. Haga clic en __Guardar__.

## Configurar la condición de pago
Después de seguir los pasos indicados arriba, Paghiper estará configurado en su tienda. Por lo tanto, cuando se registre un boleto como condición de pago, estará disponible en el campo __Procesar con la afiliación__. 
Para saber cómo habilitar el boleto bancario como opción de pago para sus clientes, vea [este artículo del Help](/es/tutorial/como-configurar-boleto-bancario).
