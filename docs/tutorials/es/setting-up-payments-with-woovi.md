---
title: 'Configurar pago con Woovi'
id: a61xxlOLJTQRrPx2MrVfs
status: PUBLISHED
createdAt: 2023-09-08T17:29:33.321Z
updatedAt: 2024-01-23T21:54:32.467Z
publishedAt: 2024-01-23T21:54:32.467Z
firstPublishedAt: 2023-09-08T17:49:01.961Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slug: configurar-pago-con-woovi
locale: es
legacySlug: configurar-pago-con-woovi
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX es posible la integración con el proveedor de pagos Woovi. Con este proveedor, su tienda puede realizar ventas a través de Woovi y Woovi Parcelado.

Para configurar Woovi, siga los pasos a continuación:

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Proveedores__, o escribe __Proveedores__ en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre __WooviConnector__ en la barra de búsqueda y haga clic en el nombre del proveedor.
4. Rellene los campos de registro __Application Token__, __Application Token__ y __App ID__ con los datos proporcionados por su cuenta Woovi.
5. En __Method__, seleccione __Pix__ o __Woovi Parcelado__.
6. Si aparece un mensaje de alerta que indica la necesidad de instalar la aplicación, haga clic en el botón `Instalar aplicación` y siga las instrucciones de instalación.
7. Haga clic en `Guardar`.

## Configurar condición de pago
1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Configuración__, o escribe __Configuración__ en la barra de búsqueda en la parte superior de la página.
2. En la pestana __Condiciones de pago__, haga clic en el botón `+`.
3. Haga clic en __Woovi__ o __Woovi Parcelado__.
4. Active la condición en el campo __Status__.
5. Si desea utilizar un sistema antifraude, seleccione la opción __Utilizar antifraude__.
6. Si desea, puede [configurar condiciones especiales de pago](https://help.vtex.com/es/tutorial/condiciones-especiales--tutorials_456?&utm_source=autocomplete#).
7. Haga clic en `Guardar`.

Después de seguir los pasos indicados, Woovi puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.
