---
title: 'Configurar pago con Bancolombia BNPL'
id: 16iFxjwsOPwmBwmjhb17WN
status: PUBLISHED
createdAt: 2023-03-30T16:25:46.370Z
updatedAt: 2024-01-24T21:15:43.651Z
publishedAt: 2024-01-24T21:15:43.651Z
firstPublishedAt: 2023-03-30T17:24:01.279Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slug: configurar-pago-con-bancolombia-bnpl
locale: es
legacySlug: configurar-pago-con-bancolombia-bnpl
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX es posible la integración con el proveedor de pagos Bancolombia BNPL. Con este proveedor, su tienda puede realizar ventas a través de Bancolombia BNPL (Buy Now Pay Later).

Para configurar Bancolombia BNPL, siga los pasos a continuación:

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Proveedores__, o escribe __Proveedores__ en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre __BancolombiaBNPL__ en la barra de búsqueda y haga clic en el nombre del proveedor.
4. Rellene los campos de registro __Application Token__ y __Application Token__ con los datos proporcionados por su cuenta Bancolombia.
5. Si aparece un mensaje de alerta que indica la necesidad de instalar la aplicación, haga clic en el botón `Instalar aplicación` y siga las instrucciones de instalación.
6. Haga clic en `Guardar`.

## Configurar condición de pago
1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Configuración__, o escribe __Configuración__ en la barra de búsqueda en la parte superior de la página.
2. En la pestana __Condiciones de pago__, haga clic en el botón __+__.
3. Haga clic en el conector __bancolombia-bnpl__.
4. Active la condición en el campo __Status__.
5. Si desea utilizar un sistema antifraude, seleccione la opción __Utilizar antifraude__.
6. Si desea, puede [configurar condiciones especiales de pago](https://help.vtex.com/es/tutorial/condiciones-especiales--tutorials_456?&utm_source=autocomplete#).
7. Haga clic en `Guardar_`.

Después de seguir los pasos indicados, Bancolombia BNPL puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.
