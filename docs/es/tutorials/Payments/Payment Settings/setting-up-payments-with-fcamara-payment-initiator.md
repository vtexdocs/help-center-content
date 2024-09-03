---
title: 'Configurar pago con FCamara (Iniciador de pagos)'
id: 4p5E3jc9J5xHkOI6AbnhTV
status: PUBLISHED
createdAt: 2023-04-03T15:12:23.123Z
updatedAt: 2024-01-23T18:01:44.039Z
publishedAt: 2024-01-23T18:01:44.039Z
firstPublishedAt: 2023-04-03T16:42:01.758Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slug: configurar-pago-con-fcamara-iniciador-de-pagos
locale: es
legacySlug: configurar-pago-con-fcamara-iniciador-de-pagos
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX es posible la integración con el iniciador de pagos FCamara. A traves de, su tienda puede realizar ventas a través de PIX.

Para configurar FCamara, siga los pasos a continuación:

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Proveedores__, o escribe __Proveedores__ en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre __iniciadorfcamara__ en la barra de búsqueda y haga clic en el nombre del proveedor.
4. Rellene los campos de registro __Application Token__ y __Application Token__ con los datos proporcionados por su cuenta FCamara.
5. Si aparece un mensaje de alerta que indica la necesidad de instalar la aplicación, haga clic en el botón `Instalar aplicación` y siga las instrucciones de instalación.
6. Haga clic en `Guardar`.

## Configurar condición de pago

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Configuración__, o escribe __Configuración__ en la barra de búsqueda en la parte superior de la página.
2. En la pestana __Condiciones de pago__, haga clic en el botón `+`.
3. Seleccione el conector __FCamara - Iniciador de pagamentos__.
4. Active la condición en el campo __Status__.
5. Si desea utilizar un sistema antifraude, seleccione la opción __Utilizar antifraude__.
6. Si desea, puede [configurar condiciones especiales de pago](https://help.vtex.com/es/tutorial/condiciones-especiales--tutorials_456?&utm_source=autocomplete#).
7. Haga clic en `Guardar`.

Después de seguir los pasos indicados, FCamara puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.
