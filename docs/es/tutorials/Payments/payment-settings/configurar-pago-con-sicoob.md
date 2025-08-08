---
title: 'Configurar pago con Sicoob'
id: 42kZoRHMW7vSG7pu9xucnu
status: PUBLISHED
createdAt: 2025-07-02T14:36:43.444Z
updatedAt: 2025-07-02T18:00:29.221Z
publishedAt: 2025-07-02T18:00:29.221Z
firstPublishedAt: 2025-07-02T14:49:13.633Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-sicoob
legacySlug: configurar-pago-con-sicoob
locale: es
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX es posible la integración con el proveedor de pagos Sicoob. Con este proveedor, su tienda puede realizar ventas a través de tarjetas de crédito, débito y PIX.

Para configurar Sicoob, siga los pasos a continuación:

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Proveedores__, o escribe __Proveedores__ en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre __ProviderSicoob__ en la barra de búsqueda y haga clic en el nombre del proveedor.
4. En __Autorización del proveedor__, rellene los campos de registro __Clave de aplicación__ y __Token de aplicación__ con los datos proporcionados por Sicoob.
5. Si desea modificar el nombre de identificación que se mostrará para el proveedor Sicoob en la pantalla VTEX Admin, ingrese la información en el campo __Nombre__ en __Información general__.
6. En __Control de pago__, seleccione si desea activar el proveedor en un entorno de prueba haciendo clic en __Activar modo de prueba__.
7. En __Campos de proveedor__, complete el campo __Chave Pix__.
8. Haga clic en `Guardar`.

Para configurar los métodos de pago a procesar por Sicoob, acceda al [Configurar Condiciones de Pago](https://help.vtex.com/es/tutorial/condiciones-de-pago--tutorials_455#).

Para establecer condiciones especiales en los métodos de pago, acceda al [Configurar condiciones especiales de Pago](https://help.vtex.com/es/tutorial/condiciones-especiales--tutorials_456#).

Después de seguir los pasos indicados, Sicoob puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.
