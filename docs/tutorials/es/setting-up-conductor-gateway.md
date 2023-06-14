---
title: 'Configurar gateway Conductor'
id: Q5Ezi95TSEyE2GCQSs8ak
status: PUBLISHED
createdAt: 2018-05-02T17:09:15.090Z
updatedAt: 2023-03-29T00:55:20.862Z
publishedAt: 2023-03-29T00:55:20.862Z
firstPublishedAt: 2018-05-02T18:38:56.879Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: configurar-gateway-conductor
locale: es
legacySlug: configurar-gateway-conductor
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

Conductor es un [gateway de pagos](/es/tutorial/que-es-un-gateway-de-pagos) con certificación [PCI](/es/faq/que-es-el-pci-ssc) que actúa desde hace más de 20 años con el procesamiento de pagos. En VTEX, se puede configurar para procesar pagos realizados con __tarjetas de crédito con bandera propia__.

Para habilitar al Conductor en su tienda, siga los pasos abajo:

## Configurar la afiliación de gateway Conductor
1. En el Admin VTEX, accede a **Configuración de la tienda** > **Pago** > **Configuración**, o escribe **Configuración** en la barra de búsqueda en la parte superior de la página.
2. En la pestaña __Afiliaciones__, haga clic en el botón __+__.
3. Haga clic en el conector __Conductor__.
4. En el campo __External Service Url__, configure la URL externa que va a estar asociada a `/pvt/payments?an={AccoutName}`.
5. Rellene los campos de registro con los datos proporcionados por Conductor (campos _appKey_ y _appToken_).
6. En __Implements Installments Service__, elija si desea utilizar servicios externos de parcelación o el que está configurado en el portal. Si elige la opción _yes_, el sistema utilizará la URL configurada en el campo __Installments Service Url__.
7. En __External cancellation Service__, defina el uso o no de un servicio de cancelación externo. Si elige la opción _yes_, el sistema utilizará la URL configurada en el campo __External Service Url__.
8. En el campo __Installments Service Url__, configure la URL externa que va a estar asociada a `/options`.
9. En __SoftDescriptor__, indique el texto que va a aparecer para identificar laz transacciones realizadas en su tienda.
10. En el campo __Captura de seguridad anticipada__, escoja en cuánto tiempo desea que la captura se realice (después de la aprobación de la transacción y del análisis del antifraude). Usted también puede desactivar esta función.
11. En __¿Tiene un antifraude contratado con esa afiliación?  __, informe si tiene o no antifraude configurado en Conductor.
12. Haga clic en __Salva__.

## Configurar pagos personalizados
Después de seguir los pasos indicados, Conductor estará configurado en su tienda. Por lo tanto, cuando se registre un __Tarjeta de la tienda (Bandera propia)__, estará disponible en el campo __Procesar con la afiliación__. Para saber cómo registrar pagos personalizados, acceda a [este artículo](/es/tutorial/como-configurar-pagamento-personalizado).
