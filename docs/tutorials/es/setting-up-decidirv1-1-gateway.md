---
title: 'Configurar gateway DecidirV1.1'
id: 4faOPP5b28Im2QOqiIma84
status: DRAFT
createdAt: 2018-06-27T14:11:28.047Z
updatedAt: 2022-12-23T20:17:30.385Z
publishedAt: 
firstPublishedAt: 2018-06-27T17:18:18.115Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: configurar-gateway-decidirv1-1
legacySlug: configurar-gateway-decidirv1-1
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

El conector __DecidirV1.1__ es la nueva versión de la integración del [gateway](/es/tutorial/que-es-un-gateway-de-pagos) argentino Decidir con la plataforma VTEX.

Para configurar __DecidirV1.1__, siga los pasos abajo:

## Configurar la afiliación de gateway DecidirV1.1
1. Acceda al módulo __Pagos__.
2. Haga clic en __Ajustes__.
3. En la pestaña __Afiliaciones__, haga clic en el botón __+__.
4. Haga clic en el conector __DecidirV1.1__.
5. En el campo __Id de la Tienda__, introduzca el código que identifica su tienda.
6. En __Llave secreta__, llene la contraseña registrada en el sistema de Decidir.
7. En el campo __Moneda__, elija la moneda que se utilizará en las transacciones de su tienda. Actualmente, sólo está disponible la opción _Pesos_.
8. En __País__, defina el país de actuación de su tienda. Actualmente, Decidir está disponible sólo en Argentina.
9. En el campo __Captura de seguridad__, elija en cuánto tiempo desea que se realice la captura.
10. En __Antifraude__, informe si su tienda tiene un antifraude configurado.
11. En el campo __Ahora 12__, seleccione si su tienda utiliza el programa de fomento al consumo Ahora 12.
12. En __Plan Gobierno__, la opción _Si_ debe seleccionarse si su tienda utiliza el Ahora 12.
13. En el campo __Change Margin__, defina el margen porcentual en el que se permitirá cambiar el valor del pago.
14. Haga clic en __Guardar__.

## Configurar la condición de pago
Después de seguir los pasos indicados, DecidirV1.1 va a estar configurado en su tienda. Por lo tanto, cuando se registre una condición de pago, estará disponible en el campo __Procesar con la afiliación__ (siempre que el medio de pago sea compatible con DecidirV1.1). Para saber cómo definir condiciones de pago, acceda a [este artículo del Help](/es/tutorial/condiciones-de-pago).
