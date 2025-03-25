---
title: 'Configurar pago con Fiserv MX'
id: 3vcYUO1y0Zp9DWVI1AcvfK
status: PUBLISHED
createdAt: 2024-10-07T20:39:42.430Z
updatedAt: 2024-10-07T20:47:15.111Z
publishedAt: 2024-10-07T20:47:15.111Z
firstPublishedAt: 2024-10-07T20:47:15.111Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-fiserv-mx
locale: es
legacySlug: configurar-pago-con-fiserv-mx
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX es posible la integración con el proveedor de pagos Fiserv MX. Con este proveedor, su tienda puede realizar ventas a través de tarjetas de crédito, débito, privatelabels, pagarés y Fiserv.

Para configurar Fiserv MX, siga los pasos a continuación:

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Proveedores__, o escribe __Proveedores__ en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre __FiservMX__ en la barra de búsqueda y haga clic en el nombre del proveedor.
4. En __Autorización del proveedor__, rellene los campos de registro __Clave de aplicación__ y __Token de aplicación__ con los datos proporcionados por Fiserv.
5. Si desea modificar el nombre de identificación que se mostrará para el proveedor Fiserv en la pantalla VTEX Admin, ingrese la información en el campo __Nombre__ en __Información general__.
6. En __Control de pago__, seleccione si desea activar el proveedor en un entorno de prueba haciendo clic en __Activar modo de prueba__.
7. En __Campos del proveedor__, complete los campos __Ingrese su Api Key Pública__, __Ingrese su Api Key Privada__ y __Ingrese su Store Id__ con la información de su cuenta Fiserv.
8. En __Activar protocolo 3D-Secure__ y __Habilitar autorización y captura en 2 pasos__ seleccione las opciones deseadas.
9. Haga clic en `Guardar`.

Para configurar los métodos de pago a procesar por Fiserv MX, acceda al [Configurar Condiciones de Pago](https://help.vtex.com/es/tutorial/condiciones-de-pago--tutorials_455#).

Para establecer condiciones especiales en los métodos de pago, acceda al [Configurar condiciones especiales de Pago](https://help.vtex.com/es/tutorial/condiciones-especiales--tutorials_456#).

Después de seguir los pasos indicados, Fiserv MX puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.
