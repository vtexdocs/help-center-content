---
title: 'Configurar pago con Wompi-Nequi'
id: 3rX87mTmjYXbeZZ0CqSC44
status: PUBLISHED
createdAt: 2023-04-20T16:43:45.032Z
updatedAt: 2023-04-20T17:21:31.981Z
publishedAt: 2023-04-20T17:21:31.981Z
firstPublishedAt: 2023-04-20T17:15:10.408Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-wompi-nequi
legacySlug: configurar-pago-con-wompi-nequi
locale: es
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX es posible la integración con el proveedor de pagos Wompi-Nequi. Con este conector, tu tienda puede realizar ventas a través de Nequi (sistemas de pago colombiano).

Para configurar la afiliación Wompi-Nequi, siga los pasos a continuación:

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Configuración__, o escribe __Configuración__ en la barra de búsqueda en la parte superior de la página.
2. En la pestana __Afiliaciones de Gateway__, haga clic en el botón `+`.
3. Haga clic en el conector __Wompi-Nequi__.
4. Rellene los campos de registro __Application Key__, __Application Token__, __Llave publica (produccion) - Wompi__, __Llave privada (produccion) - Wompi__, __Llave publica (prueba) - Wompi__ y __Llave publica (prueba) - Wompi__  con los datos proporcionados por Wompi-Nequi. 
5. Si aparece un mensaje de alerta que indica la necesidad de instalar la aplicación, haga clic en el botón __Instalar aplicación__ y siga las instrucciones de instalación.
6. Haga clic en `Guardar`.

## Configurar la condición de pago

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Configuración__, o escribe __Configuración__ en la barra de búsqueda en la parte superior de la página.
2. En la pestana __Condiciones de pago__, haga clic en el botón `+`.
3. Haga clic en el método de pago __Wompi-Nequi__.
4. Active la condición en el campo __Status__.
5. Si desea utilizar un sistema antifraude, seleccione la opción __Utilizar antifraude__.
6. Si lo desea, también puede configurar [condiciones especiales de pago](/es/tutorial/condiciones-especiales--tutorials_456).
7. Haga clic en `Guardar`.

Después de seguir los pasos indicados, Wompi-Nequi puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.
