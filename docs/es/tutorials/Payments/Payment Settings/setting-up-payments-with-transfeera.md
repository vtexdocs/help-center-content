---
title: 'Configurar pago con Transfeera'
id: 2bBAD7ba4yZlJ42avX0A2p
status: ARCHIVED
createdAt: 2023-03-27T13:50:31.575Z
updatedAt: 2023-05-24T20:01:51.946Z
publishedAt: 
firstPublishedAt: 2023-03-27T14:06:33.695Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slug: configurar-pago-con-transfeera
locale: es
legacySlug: configurar-pago-con-transfeera
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX es posible la integración con el proveedor de pagos Transfeera. Con este conector, su tienda puede realizar ventas a través de PIX.

Para configurar la afiliación Transfeera, siga los pasos a continuación:

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Configuración__, o escribe __Configuración__ en la barra de búsqueda en la parte superior de la página.
2. En la pestana __Afiliaciones de Gateway__, haga clic en el botón `+`.
3. Haga clic en el conector __Transfeera__.
4. Rellene los campos de registro __Application Token__ y __Application Token__ con los datos proporcionados por su cuenta Transfeera.
5. Si aparece un mensaje de alerta que indica la necesidad de instalar la aplicación, haga clic en el botón `Instalar aplicación` y siga las instrucciones de instalación.
6. Haga clic en `Guardar`.

## Configurar condición de pago
1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Configuración__, o escribe __Configuración__ en la barra de búsqueda en la parte superior de la página.
2. En la pestana __Condiciones de pago__, haga clic en el botón `+`.
3. En __Pago instantáneo__, seleccione la opción __Pix__.
4. En __Procesar con afiliación__, seleccione el conector __Transfeera__.
5. Active la condición en el campo __Status__.
6. Si desea, puede [configurar condiciones especiales de pago](https://help.vtex.com/es/tutorial/condiciones-especiales--tutorials_456?&utm_source=autocomplete#).
8. Haga clic en `Guardar`.

Después de seguir los pasos indicados, Transfeera puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.
