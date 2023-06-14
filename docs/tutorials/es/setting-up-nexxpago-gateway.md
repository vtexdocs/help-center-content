---
title: 'Configurar gateway Nexxpago'
id: 28Fgmof1WYEeAcM8MkOcWm
status: PUBLISHED
createdAt: 2018-04-18T15:46:11.611Z
updatedAt: 2023-03-29T01:08:32.601Z
publishedAt: 2023-03-29T01:08:32.601Z
firstPublishedAt: 2018-04-18T16:05:40.588Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: configurar-gateway-nexxpago
locale: es
legacySlug: configurar-gateway-nexxpago
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

Nexxpago es una empresa con certificación [PCI](/es/faq/que-es-el-pci-ssc) que ofrece diversas soluciones de pago. La principal de ellas es un [gateway](/es/tutorial/que-es-un-gateway-de-pagos) que permite el procesamiento de pagos por medio de boletos bancarios y tarjetas de crédito.

Para configurar Nexxpago, siga estos pasos:

## Configurar la afiliación de gateway Nexxpago
1. En el Admin VTEX, accede a **Configuración de la tienda** > **Pago** > **Configuración**, o escribe **Configuración** en la barra de búsqueda en la parte superior de la página.
2. En la pestaña __Afiliaciones__, haga clic en el botón __+__.
3. Haga clic en el conector __Nexxpago__.
4. En el campo __External Service Url__ ("URL de servicio externo"), configure la URL externa que va a estar asociada a `/pvt/payments?an={AccountName}`.
5. Rellene los campos de registro con los datos proporcionados por Nexxpago (campos _appKey_ y _appToken_).
6. En __Implements Installments Service__ ("Servicio de implementacion de cuotas"), usted debe elegir si desea utilizar servicios externos de parcelación o lo que está configurado en el portal. Si elige la opción _yes_, el sistema utilizará la URL configurada en el campo __Installments Service Url__ ("URL de servicio para cuotas").
7. En __External Cancellation Service__ ("Servicio de cancelacion de externo"), defina el uso o no de un servicio de cancelación externo. Si elige la opción _yes_, el sistema utilizará la URL configurada en el campo __External Service Url__ ("URL de servicio externo").
8. En el campo __Installments Service Url__ ("URL de servicio para cuotas"), configure la URL externa que va a estar asociada a `/options`.
9. En __SoftDescriptor__ ("Descripcion"), indique el texto que va a aparecer para identificar las transacciones realizadas en su tienda.
10. En el campo __Captura de seguridad anticipada__, escoja en cuánto tiempo desea que la captura sea realizada (después de la aprobación de la transacción y del análisis del antifraude). También es posible desactivar esta función.
11. En __Usa Antifraude__, informe si desea usar un antifraude.
12. Haga clic en __Guardar__.

## Configurar la condición de pago
Después de seguir los pasos indicados, Nexxpago estará configurado en su tienda. Por lo tanto, cuando se registre una condición de pago, estará disponible en el campo __Procesar con la afiliación__ (siempre que el medio de pago sea compatible con Nexxpago). Para saber cómo definir condiciones de pago, acceda a [este artículo del Help](/es/tutorial/condiciones-de-pago).
