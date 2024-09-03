---
title: 'Configurar gateway Ingenico ePayments (NPS)'
id: 4DtjieyNQIQeI2O2kymEgq
status: ARCHIVED
createdAt: 2018-04-18T13:22:00.721Z
updatedAt: 2024-03-18T19:00:20.612Z
publishedAt: 
firstPublishedAt: 2018-04-18T15:09:45.694Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: configurar-gateway-nps
locale: es
legacySlug: configurar-gateway-nps
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

>❗ Esta integración de pago ya no se puede configurar en la plataforma debido al [proceso de descontinuación de los proveedores legados](https://help.vtex.com/es/announcements/descontinuacion-de-conectores-de-pago-legados-en-2024--4R5YIjUu1IWkiOHzXtQU14) y el artículo pronto se eliminará del Help Center. Consulte con su proveedor para obtener más información sobre el desarrollo de la nueva integración de pago y los pasos necesarios para migrar la configuración en su tienda.

Ingenico ePayments (NPS) es un [gateway](/es/tutorial/que-es-un-gateway-de-pagos) con fuerte actuación en América Latina y que permite que su tienda acepte diversas condiciones de pago.

Para configurar NPS, siga estos pasos:

## Configurar la afiliación de gateway Ingenico ePayments (NPS)

1. En el Admin VTEX, accede a **Configuración de la tienda** > **Pago** > **Configuración**, o escribe **Configuración** en la barra de búsqueda en la parte superior de la página.
2. En la pestaña __Afiliaciones__, haga clic en el botón __+__.
3. Haga clic en el conector __NPS__.
4. Rellene el campo __Id de la Tienda__ con el dato proporcionado por NPS.
5. En __Pais__, elija el país en que su tienda actúa.
6. En el campo __Moneda de transaccion__, defina cuál será la moneda que va a ser usada en las transacciones de su tienda.
7. En __Llave secreta__, introduzca su contraseña registrada en NPS.
8. En el campo __Método__, elija el tipo de integración que se utilizará.
9. En __Tipo de Comercio__, indique en cuál categoría su negocio más se encaja.
10. En el campo __Dias para la captura de seguridad después de Autorizado__, informe en cuánto tiempo desea que la captura de seguridad se realice después de la autorización.
11. En __Change Margin__ ("Cambio de margen"), defina el margen porcentual en el que se permitirá cambiar el valor del pago.
12. En el campo __Captura de seguridad anticipada__, escoja en cuánto tiempo desea que la captura se realice después de la aprobación de la transacción y del análisis del antifraude. También es posible desactivar esta función.
13. Haga clic en __Guardar__.

## Configurar la condición de pago
Después de seguir los pasos indicados arriba, Ingenico ePayments (NPS) va a estar configurado en su tienda. Así, cuando se registre una condición de pago, estará disponible en el campo __Procesar con la afiliación__ (siempre que el medio de pago sea compatible con NPS). Para saber cómo definir condiciones de pago, acceda a [este artículo del Help](/es/tutorial/condiciones-de-pago).
