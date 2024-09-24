---
title: 'Configurar pago con aCuotaz'
id: 12WBy5YWY2lmlUQ8YXm7qu
status: PUBLISHED
createdAt: 2024-09-16T20:33:16.861Z
updatedAt: 2024-09-16T20:47:32.178Z
publishedAt: 2024-09-16T20:47:32.178Z
firstPublishedAt: 2024-09-16T20:47:32.178Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slug: configurar-pago-con-acuotaz
locale: es
legacySlug: configurar-pago-con-acuotaz
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX es posible la integración con el proveedor de pagos aCuotaz. Con este proveedor, su tienda puede realizar ventas a través de aCuotaz.

Para configurar aCuotaz siga los pasos a continuación:

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Proveedores__, o escribe __Proveedores__ en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre __aCuotaz__ en la barra de búsqueda y haga clic en el nombre del proveedor.
4. Rellene los campos de registro __Clave de aplicación__ y __Token de aplicación__ con los datos proporcionados por su cuenta aCuotaz.
5. Si desea modificar el nombre de identificación que se mostrará para el proveedor aCuotaz en la pantalla VTEX Admin, ingrese la información en el campo __Nombre__ en __Información general__.
6. En __Control de pago__, seleccione si desea activar el proveedor en un entorno de prueba haciendo clic en __Activar modo de prueba__.
7. En __Campos del proveedor__, complete los campos __Client ID__ y __Secret Token__ con la información de su cuenta aCuotaz.
8. En __Currency__ seleccione la moneda que se utilizará en las transacciones de pago.
9. Haga clic en `Guardar`.

## Configurar condición de pago

1. En el Admin de VTEX, acceda a __Configuración de la Tienda > Pago > Configuración__, o escriba __Configuración__ en la barra de búsqueda en la parte superior de la página.
2. En la pestaña __Condiciones de pago__, haga clic en el botón `+`.
3. Haga clic en __aCuotaz__.
4. Active la condición en el campo __Status__.
5. Si desea, puede [configurar condiciones especiales de pago](https://help.vtex.com/es/tutorial/condiciones-especiales--tutorials_456?&utm_source=autocomplete#).
6. Haga clic en `Guardar`.

Después de seguir los pasos indicados, aCuotaz puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.
