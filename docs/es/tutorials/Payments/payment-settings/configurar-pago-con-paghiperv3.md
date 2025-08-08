---
title: 'Configurar pago con PagHiperV3'
id: 1dYVbSK0yHNY5vp0gJj4fC
status: PUBLISHED
createdAt: 2024-03-14T12:27:03.520Z
updatedAt: 2024-03-14T12:39:32.791Z
publishedAt: 2024-03-14T12:39:32.791Z
firstPublishedAt: 2024-03-14T12:39:32.791Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-paghiperv3
legacySlug: configurar-pago-con-paghiperv3
locale: es
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX es posible la integración con el proveedor de pagos PagHiperV3. Con este proveedor, su tienda puede realizar ventas a través de boletos y PIX.

Para configurar PagHiperV3, siga los pasos a continuación:

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Proveedores__, o escribe __Proveedores__ en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre __PagHiperV3__ en la barra de búsqueda y haga clic en el nombre del proveedor.
4. En __Autorización del proveedor__, rellene los campos de registro __Clave de aplicación__ y __Token de aplicación__ con los datos proporcionados por PagHiperV3.
5. Si desea modificar el nombre de identificación que se mostrará para el proveedor PagHiperV3 en la pantalla VTEX Admin, ingrese la información en el campo __Nombre__ en __Información general__.
6. En __Control de pago__, seleccione si desea activar el proveedor en un entorno de prueba haciendo clic en __Activar modo de prueba__.
7. En __Limite Vencimento__, ingrese cuántos días permanecerá abierta el boleto después de su fecha de vencimiento.
8. En __Dias corridos até o vencimento__, ingrese la fecha máxima de vencimiento de los boletos. Para los pagos PIX, no es posible cambiar el período de vencimiento, el período predeterminado es de 15 minutos.
9. En __Exibir Frase fixa__, seleccione si desea incluir una frase para que se muestre en las facturas emitidas.
10. En __Frase variável do vendedor__, si lo desea, configure la frase que se mostrará para cada boleto específico.
11. Haga clic en `Guardar`.

Para configurar los métodos de pago a procesar por PagHiperV3, acceda al [Configurar Condiciones de Pago](https://help.vtex.com/es/tutorial/condiciones-de-pago--tutorials_455#).

Para establecer condiciones especiales en los métodos de pago, acceda al [Configurar condiciones especiales de Pago](https://help.vtex.com/es/tutorial/condiciones-especiales--tutorials_456#).

Después de seguir los pasos indicados, PagHiperV3 puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.
