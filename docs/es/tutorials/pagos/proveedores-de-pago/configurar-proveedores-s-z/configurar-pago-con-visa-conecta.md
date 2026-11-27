---
title: 'Configurar pago con Visa Conecta'
id:
status: PUBLISHED
createdAt: 2025-12-11T00:00:00.000Z
updatedAt: 2025-12-11T00:00:00.000Z
publishedAt: 2025-12-11T00:00:00.000Z
firstPublishedAt: 2025-12-11T00:00:00.000Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-visa-conecta
legacySlug: configurar-pago-con-visa-conecta
locale: es
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX es posible la integración con el proveedor de pagos Visa Conecta. Con este conector, tu tienda puede realizar ventas a través de Visa Conecta.

Para configurar Visa Conecta, siga los pasos a continuación:

1. En el Admin VTEX, accede a **Configuración de la tienda > Pago > Proveedores**, o escribe **Proveedores** en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre **Visa Conecta** en la barra de búsqueda y haga clic en el nombre del proveedor.
4. Rellene los campos de registro __Clave de aplicación__ y __Token de aplicación__ con los datos proporcionados por Visa Conecta.
5. Si desea modificar el nombre de identificación que se mostrará para el proveedor Visa Conecta en la pantalla VTEX Admin, ingrese la información en el campo **Nombre** en **Información general**.
6. En **Control de pago**, seleccione si desea activar el proveedor en un entorno de prueba haciendo clic en **Activar modo de prueba**.
7. En **Campos del Proveedor**, complete los campos **Merchant ID**, **Secret Key** y **Shared Secret Key** según las instrucciones del proveedor.
8. Haga clic en `Guardar`.

## Configurar condición de pago

1. En el Admin de VTEX, acceda a **Configuración de la Tienda > Pago > Configuración**, o escriba **Configuración** en la barra de búsqueda en la parte superior de la página.
2. En la pestaña **Condiciones de pago**, haga clic en el botón `+`.
3. Haga clic en **Visa Conecta**.
4. Active la condición en el campo **Status**.
5. Si desea utilizar un sistema antifraude, seleccione la opción __Utilizar antifraude__.
6. Si desea, puede [configurar condiciones especiales de pago](/es/tutorial/condiciones-especiales--tutorials_456?&utm_source=autocomplete#).
7. Haga clic en `Guardar`.

Después de seguir los pasos indicados, Creditop puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.
