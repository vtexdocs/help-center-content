---
title: 'Configurar pago con PagHiperV2'
id: 131E6zBcTTkzZtL82cZh1x
status: PUBLISHED
createdAt: 2024-03-14T12:01:07.521Z
updatedAt: 2024-03-14T12:18:12.256Z
publishedAt: 2024-03-14T12:18:12.256Z
firstPublishedAt: 2024-03-14T12:18:12.256Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-paghiperv2
legacySlug: configurar-pago-con-paghiperv2
locale: es
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX es posible la integración con el proveedor de pagos PagHiperV2. Con este proveedor, su tienda puede realizar ventas a través de boletos y PIX.

Para configurar PagHiperV2, siga los pasos a continuación:

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Proveedores__, o escribe __Proveedores__ en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre __PagHiperV2__ en la barra de búsqueda y haga clic en el nombre del proveedor.
4. En __Autorización del proveedor__, rellene los campos de registro __Clave de aplicación__ y __Token de aplicación__ con los datos proporcionados por PagHiperV2.
5. Si desea modificar el nombre de identificación que se mostrará para el proveedor PagHiperV2 en la pantalla VTEX Admin, ingrese la información en el campo __Nombre__ en __Información general__.
6. En __Limite Vencimento__, ingrese cuántos días permanecerá abierta el boleto después de su fecha de vencimiento.
7. En __Exibir Frase fixa__, seleccione si desea incluir una frase para que se muestre en las facturas emitidas.
8. En __Frase variável do vendedor__, si lo desea, configure la frase que se mostrará para cada boleto específico.
9. Haga clic en `Guardar`.

Para configurar los métodos de pago a procesar por PagHiperV2, acceda al [Configurar Condiciones de Pago](https://help.vtex.com/es/tutorial/condiciones-de-pago--tutorials_455#).

Para establecer condiciones especiales en los métodos de pago, acceda al [Configurar condiciones especiales de Pago](https://help.vtex.com/es/tutorial/condiciones-especiales--tutorials_456#).

Después de seguir los pasos indicados, PagHiperV2 puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.
