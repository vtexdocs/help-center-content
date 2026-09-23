---
title: 'Configurar pago con Cybersource LAC'
id: Hp80vaO9BWAu6hBs4kqfg
status: PUBLISHED
createdAt: 2025-04-10T13:59:59.763Z
updatedAt: 2025-05-27T18:54:09.965Z
publishedAt: 2025-05-27T18:54:09.965Z
firstPublishedAt: 2025-04-10T14:17:24.584Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-cybersource-lac
legacySlug: configurar-pago-con-cybersource-lac
locale: es
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX es posible la integración con el proveedor de pagos Cybersource LAC. Con este proveedor, su tienda puede realizar ventas a través de tarjetas de crédito y débito, Pix, pagarés y Visa Click To Pay.

Para configurar Cybersource LAC siga los pasos a continuación:

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Proveedores__, o escribe __Proveedores__ en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre __Cybersource LAC__ en la barra de búsqueda y haga clic en el nombre del proveedor.
4. En __Autorización del proveedor__, rellene los campos de registro __Clave de aplicación__ y __Token de aplicación__ con los datos proporcionados por su cuenta Cybersource LAC.
5. Si desea modificar el nombre de identificación que se mostrará para el proveedor Cybersource LAC en la pantalla VTEX Admin, ingrese la información en el campo __Nombre__ en __Información general__.
6. En __Control de pago__, seleccione si desea activar el proveedor en un entorno de prueba haciendo clic en __Activar modo de prueba__.
7. En __Campos del proveedor__, seleccione o complete los campos __Merchant ID__, __Secret Key__, __Shared Secret Key__, __SOAP Key__, __Domain (URL)__, __Merchant Category Code (MCC)__, __Company Name__, __Company Tax Id__, __Capture Setting__, __Acquiring Banks (Mexico)__, __Plan Type__, __Payer Authentication__, __Service Authentication__, __Auth Card Brands__, __Bank Slip Expiration Days (BR)__, __Has Network Token?__ y __Sandbox Mode__ según las instrucciones del proveedor.
8. Haga clic en `Guardar`.

Para configurar los métodos de pago a procesar por Cybersource LAC, acceda al [Configurar Condiciones de Pago](/es/tutorial/condiciones-de-pago--tutorials_455#).

Para establecer condiciones especiales en los métodos de pago, acceda al [Configurar condiciones especiales de Pago](/es/tutorial/condiciones-especiales--tutorials_456#).

Después de seguir los pasos indicados, Cybersource LAC puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.
