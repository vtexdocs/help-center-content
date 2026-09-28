---
title: 'Configurar pago con banQi'
id: 41rk9E7JUmCl683MJ9p52P
status: PUBLISHED
createdAt: 2023-03-30T12:31:49.459Z
updatedAt: 2024-01-23T18:25:15.982Z
publishedAt: 2024-01-23T18:25:15.982Z
firstPublishedAt: 2023-03-30T13:04:03.008Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-banqi
legacySlug: configurar-pago-con-banqi
locale: es
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX es posible la integración con el proveedor de pagos banQi. Con este proveedor, su tienda puede realizar ventas a través del libro de pago banQi.

Para configurar banQi, siga los pasos a continuación:

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Proveedores__, o escribe __Proveedores__ en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre __banQi__ en la barra de búsqueda y haga clic en el nombre del proveedor.
4. Rellene los campos de registro __Application Token__ y __Application Token__ con los datos proporcionados por su cuenta banQi.
5. Si aparece un mensaje de alerta que indica la necesidad de instalar la aplicación, haga clic en el botón `Instalar aplicación` y siga las instrucciones de instalación.
6. Haga clic en `Guardar`.

## Configurar condición de pago

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Configuración__, o escribe __Configuración__ en la barra de búsqueda en la parte superior de la página.
2. En la pestana __Condiciones de pago__, haga clic en el botón `+`.
3. Haga clic en __carnê banQi__.
4. Active la condición en el campo __Status__.
5. Si desea utilizar un sistema antifraude, seleccione la opción __Utilizar antifraude__.
6. Si desea, puede [configurar condiciones especiales de pago](/es/tutorial/condiciones-especiales--tutorials_456?&utm_source=autocomplete#).
7. Haga clic en `Guardar`.

Después de seguir los pasos indicados, banQi puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.
