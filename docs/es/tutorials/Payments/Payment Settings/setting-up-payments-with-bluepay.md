---
title: 'Configurar pago con BluePay'
id: 26gzpfmEiwgpE8yhkaFS16
status: PUBLISHED
createdAt: 2023-04-03T14:55:51.576Z
updatedAt: 2024-07-24T13:29:26.700Z
publishedAt: 2024-07-24T13:29:26.700Z
firstPublishedAt: 2023-04-03T15:04:37.336Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slug: configurar-pago-con-bluepay
locale: es
legacySlug: configurar-pago-con-bluepay
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX es posible la integración con el proveedor de pagos BluePay. Con este proveedor, su tienda puede realizar ventas a través de PIX.

Para configurar BluePay, siga los pasos a continuación:

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Proveedores__, o escribe __Proveedores__ en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre __BluePay__ en la barra de búsqueda y haga clic en el nombre del proveedor.
4. Rellene los campos de registro __Application Token__ y __Application Token__ con los datos proporcionados por su cuenta BluePay.
5. Si aparece un mensaje de alerta que indica la necesidad de instalar la aplicación, haga clic en el botón `Instalar aplicación` y siga las instrucciones de instalación.
6. Haga clic en `Guardar`.

## Configurar condición de pago
1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Configuración__, o escribe __Configuración__ en la barra de búsqueda en la parte superior de la página.
2. En la pestana __Condiciones de pago__, haga clic en el botón `+`.
3. En __Pago instantáneo__, seleccione la opción __Pix__.
4. En __Procesar con afiliación__, seleccione el conector __bluepaypartnerbr-bluepay-v0__.
5. Active la condición en el campo __Status__.
6. Si desea, puede [configurar condiciones especiales de pago](https://help.vtex.com/es/tutorial/condiciones-especiales--tutorials_456?&utm_source=autocomplete#).
7. Haga clic en `Guardar`.

Después de seguir los pasos indicados, BluePay puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.
