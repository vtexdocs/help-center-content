---
title: 'Configurar el gateway PayMee'
id: 3fsilRdrBS6GOAy622soWy
status: PUBLISHED
createdAt: 2018-02-28T21:29:08.666Z
updatedAt: 2025-06-06T20:08:31.587Z
publishedAt: 2025-06-06T20:08:31.587Z
firstPublishedAt: 2018-03-01T21:53:29.140Z
contentType: tutorial
productTeam: Financial
author: authors_59
slugEN: setting-up-the-paymee-gateway
legacySlug: configurar-el-gateway-paymee
locale: es
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX es posible la integración con el proveedor de pagos PayMee. Con este proveedor, su tienda puede realizar ventas a través PayMee y PIX.

Para configurar PayMee, siga los pasos a continuación:

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Proveedores__, o escribe __Proveedores__ en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre __PayMee__ en la barra de búsqueda y haga clic en el nombre del proveedor.
4. En __Autorización del proveedor__, rellene los campos de registro __Clave de aplicación__ y __Token de aplicación__ con los datos proporcionados por su cuenta PayMee.
5. Si desea modificar el nombre de identificación que se mostrará para el proveedor PayMee en la pantalla VTEX Admin, ingrese la información en el campo __Nombre__ en __Información general__.
6. Si desea utilizar [Split de pagos](/es/docs/tutorials/split-de-pagos) en su tienda, seleccione la opción __Activar split de cobros y enviar destinatarios de pago__ e indique el __Responsable de cargos de procesamiento de pagos__ y el __Responsable de contracargos__ (marketplace, sellers o marketplace y sellers).
7. Haga clic en `Guardar`.

Para configurar los métodos de pago a procesar por PayMee, acceda al [Configurar Condiciones de Pago](/es/tutorial/condiciones-de-pago--tutorials_455#).

Para establecer condiciones especiales en los métodos de pago, acceda al [Configurar condiciones especiales de Pago](/es/tutorial/condiciones-especiales--tutorials_456#).

Después de seguir los pasos indicados, PayMee puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.
