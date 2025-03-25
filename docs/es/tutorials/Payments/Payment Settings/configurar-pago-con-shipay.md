---
title: 'Configurar pago con Shipay'
id: 2GVBCDdxZPexI2TikFf9Au
status: PUBLISHED
createdAt: 2023-03-27T14:40:05.161Z
updatedAt: 2024-01-23T21:27:19.732Z
publishedAt: 2024-01-23T21:27:19.732Z
firstPublishedAt: 2023-03-27T14:44:22.502Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-shipay
locale: es
legacySlug: configurar-pago-con-shipay
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX es posible la integración con el proveedor de pagos Shipay. Con este proveedor, su tienda puede realizar ventas a través de PIX.

Para configurar Shipay, siga los pasos a continuación:

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Proveedores__, o escribe __Proveedores__ en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre __Shipay__ en la barra de búsqueda y haga clic en el nombre del proveedor.
4. Rellene los campos de registro __Application Token__ y __Application Token__ con los datos proporcionados por su cuenta Shipay.
5. Si aparece un mensaje de alerta que indica la necesidad de instalar la aplicación, haga clic en el botón `Instalar aplicación` y siga las instrucciones de instalación.
6. Haga clic en `Guardar`.

## Configurar condición de pago
1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Configuración__, o escribe __Configuración__ en la barra de búsqueda en la parte superior de la página.
2. En la pestana __Condiciones de pago__, haga clic en el botón `+`.
3. En __Pago instantáneo__, seleccione la opción __Pix__.
4. En __Procesar con afiliación__, seleccione el conector __Shipay__.
5. Active la condición en el campo __Status__.
6. Si desea, puede [configurar condiciones especiales de pago](https://help.vtex.com/es/tutorial/condiciones-especiales--tutorials_456?&utm_source=autocomplete#).
8. Haga clic en `Guardar`.

Después de seguir los pasos indicados, Shipay puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.
