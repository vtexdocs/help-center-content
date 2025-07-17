---
title: 'Configurar pago con Conekta'
id: 7kiAD3SlnABF75xLSL3eSA
status: PUBLISHED
createdAt: 2022-08-11T12:41:42.110Z
updatedAt: 2024-09-13T16:42:16.752Z
publishedAt: 2024-09-13T16:42:16.752Z
firstPublishedAt: 2022-08-11T12:54:43.579Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-conekta
locale: es
legacySlug: configurar-pago-con-conekta
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX es posible la integración con el proveedor de pagos Conekta. Con este proveedor, tu tienda puede realizar ventas a través de tarjetas de crédito,  débito, transferencia bancaria y efectivo. 

Para configurar Conekta, siga los pasos a continuación:

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Proveedores__, o escribe __Proveedores__ en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre __ConektaMX__ en la barra de búsqueda y haga clic en el nombre del proveedor.
4. En __Autorización del proveedor__, rellene los campos de registro __Clave de aplicación__ y __Token de aplicación__ con los datos proporcionados por su cuenta Conekta.
5. Si desea modificar el nombre de identificación que se mostrará para el proveedor Conekta en la pantalla VTEX Admin, ingrese la información en el campo __Nombre__ en __Información general__.
6. En __Control de pago__, seleccione si desea activar el proveedor en un entorno de prueba haciendo clic en __Activar modo de prueba__.
7. En __Habilitar meses sin intereses (MSI)__, seleccione si desea activar la opción para permitir a los clientes dividir las compras en pagos mensuales (sin intereses).
8. En __Indicar número de MSI (3, 6, 9, 12)__, ingrese la cantidad de meses en los que los clientes pueden dividir el pago (sin intereses).
9. En __Indicar la duración del checkout en días (1 - 30)__, ingrese el número máximo de días para que caduque el pedido (aplicable para pagos vía Efectivo). 
10. En __Tarjetas__, __Transferencia Bancaria__ y __Efectivo__, selecciona si deseas utilizar estos métodos de pago en tu tienda.
11. Haga clic en `Guardar`.

Para configurar los métodos de pago a procesar por Conekta, acceda al [Configurar Condiciones de Pago](/es/tutorial/condiciones-de-pago--tutorials_455#).

Para establecer condiciones especiales en los métodos de pago, acceda al [Configurar condiciones especiales de Pago](/es/tutorial/condiciones-especiales--tutorials_456#).

Después de seguir los pasos indicados, Conekta puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.
