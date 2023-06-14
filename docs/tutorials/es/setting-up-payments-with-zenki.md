---
title: 'Configurar pago con Zenki'
id: 6LK7wMg0OB39UQKoZILoNL
status: PUBLISHED
createdAt: 2023-03-30T17:34:01.758Z
updatedAt: 2023-03-30T18:04:59.870Z
publishedAt: 2023-03-30T18:04:59.870Z
firstPublishedAt: 2023-03-30T18:02:25.796Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slug: configurar-pago-con-zenki
locale: es
legacySlug: configurar-pago-con-zenki
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX es posible la integración con el proveedor de pagos Zenki. Con este conector, su tienda puede realizar ventas a través de bitcoins.

Para configurar la afiliación Zenki, siga los pasos a continuación:

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Configuración__, o escribe __Configuración__ en la barra de búsqueda en la parte superior de la página.
2. En la pestana __Afiliaciones de Gateway__, haga clic en el botón `+`.
3. Haga clic en el conector __Zenki__.
4. Rellene los campos de registro __Application Key__, __Application Token__, __API key__, __Secret Key__ y __Webhook signing secret__ con los datos proporcionados por su cuenta Zenki.
5. Si aparece un mensaje de alerta que indica la necesidad de instalar la aplicación, haga clic en el botón `Instalar aplicación` y siga las instrucciones de instalación.
6. Haga clic en `Guardar`.

## Configurar condición de pago
1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Configuración__, o escribe __Configuración__ en la barra de búsqueda en la parte superior de la página.
2. En la pestana __Condiciones de pago__, haga clic en el botón __+__.
3. Haga clic en __Bitcoin__.
4. En __Procesar con afiliación__, seleccione la opción __zenkipartnermx-zenki-v0__.
5. Active la condición en el campo __Status__.
6. Si desea utilizar un sistema antifraude, seleccione la opción __Utilizar antifraude__.
7. Si desea, puede [configurar condiciones especiales de pago](https://help.vtex.com/es/tutorial/condiciones-especiales--tutorials_456?&utm_source=autocomplete#).
8. Haga clic en `Guardar`.

Después de seguir los pasos indicados, Zenki puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.
