---
title: 'Configurar gateway Conductor'
id: Q5Ezi95TSEyE2GCQSs8ak
status: ARCHIVED
createdAt: 2018-05-02T17:09:15.090Z
updatedAt: 2024-03-18T18:11:12.675Z
publishedAt: 
firstPublishedAt: 2018-05-02T18:38:56.879Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slugEN: setting-up-conductor-gateway
locale: es
legacySlug: configurar-gateway-conductor
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

>❗ Esta integración de pago ya no se puede configurar en la plataforma debido al [proceso de descontinuación de los proveedores legados](https://help.vtex.com/es/announcements/descontinuacion-de-conectores-de-pago-legados-en-2024--4R5YIjUu1IWkiOHzXtQU14) y el artículo pronto se eliminará del Help Center. Consulte con su proveedor para obtener más información sobre el desarrollo de la nueva integración de pago y los pasos necesarios para migrar la configuración en su tienda.

Conductor es un [gateway de pagos](/es/tutorial/que-es-un-gateway-de-pagos) con certificación [PCI](/es/faq/que-es-el-pci-ssc) que actúa desde hace más de 20 años con el procesamiento de pagos. En VTEX, se puede configurar para procesar pagos realizados con __tarjetas de crédito con bandera propia__.

Para habilitar al Conductor en su tienda, siga los pasos abajo:

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Proveedores__, o escribe __Proveedores__ en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre __Conductor__ en la barra de búsqueda y haga clic en el nombre del proveedor.
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
