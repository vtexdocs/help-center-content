---
title: 'Configurar pago con PayPalCheckout'
id: 16hMsDk96fEeIH6n34NA9N
status: PUBLISHED
createdAt: 2025-02-04T18:12:01.558Z
updatedAt: 2025-04-09T18:10:22.507Z
publishedAt: 2025-04-09T18:10:22.507Z
firstPublishedAt: 2025-02-04T18:26:28.114Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-paypalcheckout
legacySlug: configurar-pago-con-paypalcheckout
locale: es
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX es posible la integración con el proveedor de pagos PayPalCheckout. Con este proveedor, su tienda puede realizar ventas a través de PayPalCheckout, PayPalRT, PayPalOXXO, PayPalBCDC, PayPalACDC e PaypalACDCV2.

Para configurar PayPalCheckout, siga los pasos a continuación:

1. En el Admin VTEX, accede a **Configuración de la tienda > Pago > Proveedores**, o escribe **Proveedores** en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre **PayPalCheckout** en la barra de búsqueda y haga clic en el nombre del proveedor.
4. En **Autorización del proveedor**, rellene los campos de registro **Clave de aplicación** y **Token de aplicación** con los datos proporcionados por su cuenta PayPalCheckout.
5. Si desea modificar el nombre de identificación que se mostrará para el proveedor PayPalCheckout en la pantalla VTEX Admin, ingrese la información en el campo **Nombre** en **Información general**.
6. En **Control de pago**, seleccione si desea activar el proveedor en un entorno de prueba haciendo clic en **Activar modo de prueba**.
7. En **Campos del Proveedor**, seleccione o complete los campos **FraudNet - Source Web Id**, **Enable STC**, **High Risk Transaction**, **STC Merchant Id**, **Vertical**, **Locale**, **Sandbox**, **Force login (ACDC)**, **Display Powered by PayPal Logo (ACDC)**, **Language**, **AutoClick (Checkout & BCDC)**, **Installments rules**, **T&C Checkbox identifier**, **Invoice ID**, **Account type**, y **Groceries or Subscriptions** según las instrucciones del proveedor.
8. Haga clic en `Guardar`.

Para configurar los métodos de pago a procesar por PayPalCheckout, acceda al [Configurar Condiciones de Pago](/es/tutorial/condiciones-de-pago--tutorials_455).

Para establecer condiciones especiales en los métodos de pago, acceda al [Configurar condiciones especiales de Pago](/es/tutorial/condiciones-especiales--tutorials_456).

Después de seguir los pasos indicados, PayPalCheckout puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.

