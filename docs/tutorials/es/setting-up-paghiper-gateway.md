---
title: 'Configurar gateway PagHiper'
id: I3KXAIIJG0oyyg4A4MykE
status: DRAFT
createdAt: 2018-04-09T22:06:11.621Z
updatedAt: 2024-03-18T19:04:40.079Z
publishedAt: 
firstPublishedAt: 2018-04-09T22:43:35.309Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: configurar-gateway-paghiper
locale: es
legacySlug: configurar-gateway-paghiper
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

>❗ Esta integración de pago ya no se puede configurar en la plataforma debido al [proceso de descontinuación de los proveedores legados](https://help.vtex.com/es/announcements/descontinuacion-de-conectores-de-pago-legados-en-2024--4R5YIjUu1IWkiOHzXtQU14) y el artículo pronto se eliminará del Help Center. Consulte con su proveedor para obtener más información sobre el desarrollo de la nueva integración de pago y los pasos necesarios para migrar la configuración en su tienda.

PagHiper es un [gateway](/es/tutorial/que-es-un-gateway-de-pagos) que se dedica al procesamiento de compras realizadas por boletos bancarios.

Para configurar PagHiper, siga los pasos abajo:

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Proveedores__, o escribe __Proveedores__ en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre __PagHiper__ en la barra de búsqueda y haga clic en el nombre del proveedor.
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
