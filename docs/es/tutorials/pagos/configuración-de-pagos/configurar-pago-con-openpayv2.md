---
title: 'Configurar pago con OpenpayV2'
id:
status: PUBLISHED
createdAt: 2026-06-16T00:00:00.000Z
updatedAt: 026-06-16T00:00:00.000Z
publishedAt: 026-06-16T00:00:00.000Z
firstPublishedAt: 026-06-16T00:00:00.000Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-openpayv2
legacySlug: configurar-pago-con-openpayv2
locale: es
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX es posible la integración con el proveedor de pagos OpenpayV2. Con este proveedor, su tienda puede realizar ventas a través de American Express, Cobranded, Diners, Maestro, Mastercard, Mastercard Debit, Privatelabels, Promissories, SPEI, Visa e Visa Electron.

Para configurar OpenpayV2, siga los pasos a continuación:

1. En el Admin VTEX, accede a **Configuración de la tienda > Pago > Proveedores**, o escribe **Proveedores** en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre **OpenpayV2** en la barra de búsqueda y haga clic en el nombre del proveedor.
4. En **Autorización del proveedor**, rellene los campos de registro **Clave de aplicación** y **Token de aplicación** con los datos proporcionados por su cuenta OpenpayV2.
5. Si desea modificar el nombre de identificación que se mostrará para el proveedor OpenpayV2 en la pantalla VTEX Admin, ingrese la información en el campo **Nombre** en **Información general**.
6. En **Control de pago**, seleccione si desea activar el proveedor en un entorno de prueba haciendo clic en **Activar modo de prueba**.
7. En **Campos del proveedor**, seleccione o complete los campos **PayPal Client ID (opcional)**, **Merchant Account Id (opcional)**, **Change Order Single Charge**, **PayPal Wallett Installments**, **PayPal Merchant ID (opcional)**, **Merchant Id (Braintree)**, **PayPal Payer ID (opcional)**, y **PayPal Secret (opcional)** con la información de su cuenta OpenpayV2.
8. Haga clic en `Guardar`.

Para configurar los métodos de pago a procesar por OpenpayV2, acceda al [Configurar Condiciones de Pago](https://help.vtex.com/es/docs/tutorials/condiciones-de-pago).

Para establecer condiciones especiales en los métodos de pago, acceda al [Configurar condiciones especiales de Pago](https://help.vtex.com/es/docs/tutorials/condiciones-especiales).

Después de seguir los pasos indicados, OpenpayV2 puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.
