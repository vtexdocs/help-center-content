---
title: 'Configurar pago con Guatapay'
id: 57ilA6k1VKZjy0dgwSs7pu
status: PUBLISHED
createdAt: 2023-09-18T15:35:35.188Z
updatedAt: 2024-01-25T17:04:24.009Z
publishedAt: 2024-01-25T17:04:24.009Z
firstPublishedAt: 2023-09-18T16:33:40.921Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-guatapay
locale: es
legacySlug: configurar-pago-con-guatapay
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX es posible la integración con el proveedor de pagos Guatapay. Con este proveedor, su tienda puede realizar ventas a través de Guatapay.

Para configurar Guatapay, siga los pasos a continuación:

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Proveedores__, o escribe __Proveedores__ en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre __Guatapay__ en la barra de búsqueda y haga clic en el nombre del proveedor.
4. Rellene los campos de registro __Application Key__, __Application Token__, __Client ID - Guatapay__ y __Client Secret - Guatapay__ con los datos proporcionados por su cuenta Guatapay.
5. Si aparece un mensaje de alerta que indica la necesidad de instalar la aplicación, haga clic en el botón `Instalar aplicación` y siga las instrucciones de instalación.
6. Haga clic en `Guardar`.

## Configurar condición de pago
1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Configuración__, o escribe __Configuración__ en la barra de búsqueda en la parte superior de la página.
2. En la pestana __Condiciones de pago__, haga clic en el botón `+`.
3. Haga clic en __Guatapay.
4. Active la condición en el campo __Status__.
5. Si desea utilizar un sistema antifraude, seleccione la opción __Utilizar antifraude__.
6. Si desea, puede [configurar condiciones especiales de pago](https://help.vtex.com/es/tutorial/condiciones-especiales--tutorials_456?&utm_source=autocomplete#).
7. Haga clic en `Guardar`.

Después de seguir los pasos indicados, Guatapay puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.
