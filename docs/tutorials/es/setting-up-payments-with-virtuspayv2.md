---
title: 'Configurar pago con VirtusPayV2'
id: 1tbcLRNIB5Bz0oWl8LnayB
status: PUBLISHED
createdAt: 2023-03-27T12:14:53.392Z
updatedAt: 2023-03-27T12:56:49.578Z
publishedAt: 2023-03-27T12:56:49.578Z
firstPublishedAt: 2023-03-27T12:56:49.578Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slug: configurar-pago-con-virtuspayv2
legacySlug: configurar-pago-con-virtuspayv2
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX es posible la integración con el proveedor de pagos VirtusPayV2. Con este conector, su tienda puede realizar ventas a través de VirtusPay y VirtusPay Transparente.

Para configurar la afiliación VirtusPayV2, siga los pasos a continuación:

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Configuración__, o escribe __Configuración__ en la barra de búsqueda en la parte superior de la página.
2. En la pestana __Afiliaciones de Gateway__, haga clic en el botón `+`.
3. Haga clic en el conector __VirtusPayV2__.
4. Rellene los campos de registro __Application Token__ y __Application Token__ con los datos proporcionados por su cuenta VirtusPay.
5. Si aparece un mensaje de alerta que indica la necesidad de instalar la aplicación, haga clic en el botón `Instalar aplicación` y siga las instrucciones de instalación.
6. Haga clic en `Guardar`.

## Configurar condición de pago
1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Configuración__, o escribe __Configuración__ en la barra de búsqueda en la parte superior de la página.
2. En la pestana __Condiciones de pago__, haga clic en el botón __+__.
3. Haga clic en una de las dos condiciones de pago: __VirtusPay__ o __VirtusPay Transparente__.
4. Active la condición en el campo __Status__.
5. Si desea utilizar un sistema antifraude, seleccione la opción __Utilizar antifraude__.
6. Si desea, puede [configurar condiciones especiales de pago](https://help.vtex.com/es/tutorial/condiciones-especiales--tutorials_456?&utm_source=autocomplete#).
7. Haga clic en `Guardar_`.

Después de seguir los pasos indicados, VirtusPayV2 puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.
