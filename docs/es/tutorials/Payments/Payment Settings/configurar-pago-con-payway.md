---
title: 'Configurar pago con Payway'
id: wHkvX7olfPPsAdeFq7obp
status: PUBLISHED
createdAt: 2024-03-07T17:04:59.563Z
updatedAt: 2025-01-09T20:38:09.107Z
publishedAt: 2025-01-09T20:38:09.107Z
firstPublishedAt: 2024-03-07T19:10:55.092Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-payway
locale: es
legacySlug: configurar-pago-con-payway
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX es posible la integración con el proveedor de pagos Payway. Con este proveedor, su tienda puede realizar ventas a través de PayWay, tarjetas (crédito, débito, tienda cobranded, tienda red propia), pagarés y boletos.

Para configurar Payway siga los pasos a continuación:

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Proveedores__, o escribe __Proveedores__ en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre __Payway__ en la barra de búsqueda y haga clic en el nombre del proveedor.
4. En __Autorización del proveedor__, rellene los campos de registro __Clave de aplicación__ y __Token de aplicación__ con los datos proporcionados por su cuenta Payway.
5. Si desea modificar el nombre de identificación que se mostrará para el proveedor Payway en la pantalla VTEX Admin, ingrese la información en el campo __Nombre__ en __Información general__.
6. En __Control de pago__, seleccione si desea activar el proveedor en un entorno de prueba haciendo clic en __Activar modo de prueba__.
7. En __Campos del proveedor__, seleccione o complete los campos __Site ID__, __Api Key Public__, __Api Key Private__, __Payment type__, __Do you use Cybersource?__, __Plan Gobierno__, __Plan Z__, __Límite Superior de Captura Permitido (%)__ y __Límite Inferior de Captura Permitido (%)__ según las instrucciones del proveedor.
8. Haga clic en `Guardar`.

Para configurar los métodos de pago a procesar por Payway, acceda al [Configurar Condiciones de Pago](/es/tutorial/condiciones-de-pago--tutorials_455#).

Para establecer condiciones especiales en los métodos de pago, acceda al [Configurar condiciones especiales de Pago](/es/tutorial/condiciones-especiales--tutorials_456#).

Después de seguir los pasos indicados, Payway puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.
