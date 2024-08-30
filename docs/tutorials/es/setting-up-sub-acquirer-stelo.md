---
title: 'Configurar subadquirente Stelo'
id: 3gHWiaK9wQg08wOsoysciQ
status: DRAFT
createdAt: 2018-03-02T17:43:45.957Z
updatedAt: 2024-03-18T20:16:43.458Z
publishedAt: 
firstPublishedAt: 2018-03-02T20:17:14.474Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: configurar-subadquirente-stelo
locale: es
legacySlug: configurar-subadquirente-stelo
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

>❗ Esta integración de pago ya no se puede configurar en la plataforma debido al [proceso de descontinuación de los proveedores legados](https://help.vtex.com/es/announcements/descontinuacion-de-conectores-de-pago-legados-en-2024--4R5YIjUu1IWkiOHzXtQU14) y el artículo pronto se eliminará del Help Center. Consulte con su proveedor para obtener más información sobre el desarrollo de la nueva integración de pago y los pasos necesarios para migrar la configuración en su tienda.

Stelo es un [subadquirente](/es/tutorial/que-es-un-subadquirente) que facilita la integración de medios de pago a su tienda.

Para configurarlo, siga estos pasos:

## Configurar la afiliación de gateway Stelo
1. En el Admin VTEX, accede a **Configuración de la tienda** > **Pago** > **Configuración**, o escribe **Configuración** en la barra de búsqueda en la parte superior de la página.
2. En la pestaña __Afiliaciones__, haga clic en el botón __+__.
3. Haga clic en el conector __Stelo__.
4. En el campo __External Service Url__, usted debe configurar la URL externa que va a estar asociada a `/pvt/payments?an={{AccountName}}`.
5. Rellene los campos de registro con los datos proporcionados por Stelo (campos _appKey_ y _appToken_).
6. En __Implements Installments Service__, elija si desea utilizar servicios externos de parcelación o lo que está configurado en el portal. Si elige la opción _yes_, el sistema utilizará la URL configurada en el campo __Installments Service Url__.
7. En __External Cancellation Service__, usted debe definir el uso o no de un servicio de cancelación externo. Si elige la opción _yes_, el sistema utilizará la URL configurada en el campo __External Service Url__.
8. En el campo __Installments Service Url__, configure la URL externa que va a estar asociada a `/options`.
9. En __SoftDescriptor__, indique lo que va a aparecer para identificar la transacción realizada en su tienda.
10. En el campo __Captura de segurança antecipada__ ("Captura de seguridad anticipada"), defina en cuánto tiempo desea que la captura se realice después de la aprobación de la transacción y del análisis del antifraude. También es posible desactivar esta función.
11. En __Usa Antifraude__, informe si su tienda tiene el antifraude de Stelo.
12. Haga clic en __Guardar__.

## Configurar la condición de pago

Después de seguir los pasos indicados arriba, Stelo estará configurada en su tienda. Por lo tanto, cuando se registre una condición de pago, estará disponible en el campo __Procesar con afiliación__ (siempre que el medio de pago sea compatible con Stelo). Para saber cómo definir condiciones de pago, acceda a [este artículo](/es/tutorial/condiciones-de-pago).
