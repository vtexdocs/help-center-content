---
title: 'Configurar gateway Place2Pay'
id: 2NmmnLpUPY0A8aMi0oyiQq
status: ARCHIVED
createdAt: 2018-03-07T21:45:23.671Z
updatedAt: 2024-03-18T19:53:38.738Z
publishedAt: 
firstPublishedAt: 2018-03-07T22:13:43.326Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slugEN: setting-up-place2pay-gateway
locale: es
legacySlug: configurar-gateway-place2pay
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

>❗ Esta integración de pago ya no se puede configurar en la plataforma debido al [proceso de descontinuación de los proveedores legados](https://help.vtex.com/es/announcements/descontinuacion-de-conectores-de-pago-legados-en-2024--4R5YIjUu1IWkiOHzXtQU14) y el artículo pronto se eliminará del Help Center. Consulte con su proveedor para obtener más información sobre el desarrollo de la nueva integración de pago y los pasos necesarios para migrar la configuración en su tienda.

Place2Pay es la versión con redirect del gateway PlaceToPay, que ofrece soluciones para grandes y pequeñas tiendas.

Para configurar Place2Pay, siga los pasos abajo:

## Configurar la afiliación de gateway Place2Pay
1. En el Admin VTEX, accede a **Configuración de la tienda** > **Pago** > **Configuración**, o escribe **Configuración** en la barra de búsqueda en la parte superior de la página.
2. En la pestaña __Afiliaciones__, haga clic en el botón __+__.
3. Haga clic en el conector __Place2Pay__.
4. En el campo __External Service Url__, inserte la URL externa que estará asociada a `/pvt/payments?an={AccountName}`.
5. Rellene los campos de registro con los datos proporcionados por PlaceToPay (campos _appKey_ y _appToken_).
6. En __Implements Installments Service__, usted debe elegir si desea utilizar servicios externos de parcelación o el que está configurado en el portal. Si elige la opción _yes_, el sistema utilizará la URL configurada en el campo __Installments Service Url__.
7. En __External Cancellation Service__, defina el uso o no de un servicio de cancelación externo. Si elige la opción _yes_, el sistema utilizará la URL configurada en el campo __External Service Url__.
8. En el campo __Installments Service Url__, usted debe configurar la URL externa que va a estar asociada a `/options`.
9. En __SoftDescriptor__, indique lo que va a aparecer para identificar la transacción realizada en su tienda.
10. En el campo __Captura de seguridad anticipada__ , escoja en cuánto tiempo desea que la captura sea realizada después de la aprobación de la transacción y del análisis del antifraude. Usted también puede desactivar la función.
11. En __¿Tiene un antifraude contratado con esa afiliación?__, informe si desea usar un servicio de antifraude.
12. Haga clic en __Guardar__.

## Configurar la condición de pago
Después de seguir los pasos indicados arriba, Place2Pay estará configurado en su tienda. Así, cuando se registre una condición de pago, estará disponible en el campo __Procesar con afiliación__ (siempre que el medio de pago sea compatible con Place2Pay). Para saber cómo definir condiciones de pago, acceda a [este artículo del Help](/es/tutorial/condiciones-de-pago).
