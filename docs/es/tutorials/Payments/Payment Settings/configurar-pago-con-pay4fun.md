---
title: 'Configurar pago con Pay4Fun'
id: 7xCpO35RMDRcp1UCvOGZX3
status: PUBLISHED
createdAt: 2024-02-05T14:53:57.694Z
updatedAt: 2024-03-13T15:15:38.399Z
publishedAt: 2024-03-13T15:15:38.399Z
firstPublishedAt: 2024-02-05T15:29:05.357Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-pay4fun
locale: es
legacySlug: configurar-pago-con-pay4fun
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX es posible la integración con el proveedor de pagos Pay4Fun. Con este proveedor, su tienda puede realizar ventas a través de PIX.

Para configurar Pay4Fun siga los pasos a continuación:

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Proveedores__, o escribe __Proveedores__ en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre __Pay4Fun__ en la barra de búsqueda y haga clic en el nombre del proveedor.
4. Rellene los campos de registro __Clave de aplicación__ y __Token de aplicación__ con los datos proporcionados por su cuenta Pay4Fun.
5. Si desea modificar el nombre de identificación que se mostrará para el proveedor Pay4Fun en la pantalla VTEX Admin, ingrese la información en el campo __Nombre__ en __Información general__.
6. En __Control de pago__, seleccione si desea activar el proveedor en un entorno de prueba haciendo clic en __Activar modo de prueba__.
7. Haga clic en `Guardar`.

## Configurar condición de pago

1. En el Admin de VTEX, acceda a __Configuración de la Tienda > Pago > Configuración__, o escriba __Configuración__ en la barra de búsqueda en la parte superior de la página.
2. En la pestaña __Condiciones de pago__, haga clic en el botón `+`.
3. Haga clic en __PIX__.
4. Active la condición en el campo __Status__.
5. En __Procesar con afiliación__, seleccione la opción __p4fpartnerbr-pay4fun-v0__.
6. Si desea, puede [configurar condiciones especiales de pago](https://help.vtex.com/es/tutorial/condiciones-especiales--tutorials_456?&utm_source=autocomplete#).
7. Haga clic en `Guardar`.

Después de seguir los pasos indicados, Pay4Fun puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.
