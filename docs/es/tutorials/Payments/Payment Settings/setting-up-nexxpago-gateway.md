---
title: 'Configurar gateway Nexxpago'
id: 28Fgmof1WYEeAcM8MkOcWm
status: ARCHIVED
createdAt: 2018-04-18T15:46:11.611Z
updatedAt: 2024-03-18T18:58:03.614Z
publishedAt: 
firstPublishedAt: 2018-04-18T16:05:40.588Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: configurar-gateway-nexxpago
locale: es
legacySlug: configurar-gateway-nexxpago
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

>❗ Esta integración de pago ya no se puede configurar en la plataforma debido al [proceso de descontinuación de los proveedores legados](https://help.vtex.com/es/announcements/descontinuacion-de-conectores-de-pago-legados-en-2024--4R5YIjUu1IWkiOHzXtQU14) y el artículo pronto se eliminará del Help Center. Consulte con su proveedor para obtener más información sobre el desarrollo de la nueva integración de pago y los pasos necesarios para migrar la configuración en su tienda.

Nexxpago es una empresa con certificación [PCI](/es/faq/que-es-el-pci-ssc) que ofrece diversas soluciones de pago. La principal de ellas es un [gateway](/es/tutorial/que-es-un-gateway-de-pagos) que permite el procesamiento de pagos por medio de boletos bancarios y tarjetas de crédito.

Para configurar Nexxpago, siga estos pasos:

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Proveedores__, o escribe __Proveedores__ en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre __Nexxpago__ en la barra de búsqueda y haga clic en el nombre del proveedor.
4. En el campo __External Service Url__ ("URL de servicio externo"), configure la URL externa que va a estar asociada a `/pvt/payments?an={AccountName}`.
5. Rellene los campos de registro con los datos proporcionados por Nexxpago (campos _appKey_ y _appToken_).
6. En __Implements Installments Service__ ("Servicio de implementacion de cuotas"), usted debe elegir si desea utilizar servicios externos de parcelación o lo que está configurado en el portal. Si elige la opción _yes_, el sistema utilizará la URL configurada en el campo __Installments Service Url__ ("URL de servicio para cuotas").
7. En __External Cancellation Service__ ("Servicio de cancelacion de externo"), defina el uso o no de un servicio de cancelación externo. Si elige la opción _yes_, el sistema utilizará la URL configurada en el campo __External Service Url__ ("URL de servicio externo").
8. En el campo __Installments Service Url__ ("URL de servicio para cuotas"), configure la URL externa que va a estar asociada a `/options`.
9. En __SoftDescriptor__ ("Descripcion"), indique el texto que va a aparecer para identificar las transacciones realizadas en su tienda.
10. En el campo __Captura de seguridad anticipada__, escoja en cuánto tiempo desea que la captura sea realizada (después de la aprobación de la transacción y del análisis del antifraude). También es posible desactivar esta función.
11. En __Usa Antifraude__, informe si desea usar un antifraude.
12. Haga clic en `Guardar`.

Para configurar los métodos de pago a procesar por Nexxpago, acceda al [Configurar Condiciones de Pago](https://help.vtex.com/es/tutorial/condiciones-de-pago--tutorials_455#).

Para establecer condiciones especiales en los métodos de pago, acceda al [Configurar condiciones especiales de Pago](https://help.vtex.com/es/tutorial/condiciones-especiales--tutorials_456#).

Después de seguir los pasos indicados, Nexxpago puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.
