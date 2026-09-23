---
title: 'Configurar pago con Geru'
id: 2XmYp4Uh1Yulv3a9puRgwm
status: PUBLISHED
createdAt: 2024-02-05T11:49:37.163Z
updatedAt: 2024-03-13T14:10:42.303Z
publishedAt: 2024-03-13T14:10:42.303Z
firstPublishedAt: 2024-02-05T13:45:07.728Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-geru
legacySlug: configurar-pago-con-geru
locale: es
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX es posible la integración con el proveedor de pagos Geru. Con este proveedor, su tienda puede realizar ventas a través de Geru y BNPL.

Para configurar Geru siga los pasos a continuación:

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Proveedores__, o escribe __Proveedores__ en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre __Geru__ en la barra de búsqueda y haga clic en el nombre del proveedor.
4. Rellene los campos de registro __Clave de aplicación__ y __Token de aplicación__ con los datos proporcionados por su cuenta Geru.
5. Si desea modificar el nombre de identificación que se mostrará para el proveedor Geru en la pantalla VTEX Admin, ingrese la información en el campo __Nombre__ en __Información general__.
6. En __Control de pago__, seleccione si desea activar el proveedor en un entorno de prueba haciendo clic en __Activar modo de prueba__.
7. Haga clic en `Guardar`.

## Configurar condición de pago

1. En el Admin de VTEX, acceda a __Configuración de la Tienda > Pago > Configuración__, o escriba __Configuración__ en la barra de búsqueda en la parte superior de la página.
2. En la pestaña __Condiciones de pago__, haga clic en el botón `+`.
3. Haga clic en __Geru__ o __BNPL__.
4. Active la condición en el campo __Status__. Para utilizar __BNPL__, en __Proceso con afiliación__, seleccione la opción __boletoflex-geru-v0__.
5. Si desea utilizar un sistema antifraude, seleccione la opción __Utilizar antifraude__.
6. Si desea, puede [configurar condiciones especiales de pago](/es/tutorial/condiciones-especiales--tutorials_456?&utm_source=autocomplete#).
7. Haga clic en `Guardar`.

Después de seguir los pasos indicados, Geru puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.
