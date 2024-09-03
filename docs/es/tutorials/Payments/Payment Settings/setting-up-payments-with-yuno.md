---
title: 'Configurar pago con Yuno'
id: h7PS0vDJJokqI9axZPNzE
status: PUBLISHED
createdAt: 2023-04-14T12:42:43.736Z
updatedAt: 2024-01-23T21:56:16.050Z
publishedAt: 2024-01-23T21:56:16.050Z
firstPublishedAt: 2023-04-14T13:21:45.782Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slug: configurar-pago-con-yuno
locale: es
legacySlug: configurar-pago-con-yuno
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX es posible la integración con el proveedor de pagos Yuno. Con este proveedor, su tienda puede realizar ventas a través de tarjetas de crédito, boletos bancarios y pagarés.

Para configurar Yuno, siga los pasos a continuación:

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Proveedores__, o escribe __Proveedores__ en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre __Yuno__ en la barra de búsqueda y haga clic en el nombre del proveedor.
4. Rellene los campos de registro __Application Token__, __Application Token__ y __Account ID__ con los datos proporcionados por su cuenta Yuno.
5. En __Auto Capture__, seleccione si la captura del pago será automática después de la autorización.
6. En __Delay To Capture (in days) Default 1 day, max 7 days__, indique el período (en días) que debe esperar para que se realice la captura del pago. El valor predeterminado es 1 día y el máximo es 7 días.
7. En __Delay To Cancel (in hours) Default 6 hours__, indique el período (en horas) en el que la transacción puede cancelarse después de la autorización. El valor predeterminado es 6 horas.
8. Si aparece un mensaje de alerta que indica la necesidad de instalar la aplicación, haga clic en el botón `Instalar aplicación` y siga las instrucciones de instalación.
9. Haga clic en `Guardar`.

Para configurar los métodos de pago a procesar por Yuno, acceda al [Configurar Condiciones de Pago](https://help.vtex.com/es/tutorial/condiciones-de-pago--tutorials_455#).

Para establecer condiciones especiales en los métodos de pago, acceda al [Configurar condiciones especiales de Pago](https://help.vtex.com/es/tutorial/condiciones-especiales--tutorials_456#).

Después de seguir los pasos indicados, Yuno puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.
