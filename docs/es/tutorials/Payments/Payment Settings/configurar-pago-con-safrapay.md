---
title: 'Configurar pago con SafraPay'
id: 70ov5R7wJjUYXE0AzlNy7Y
status: PUBLISHED
createdAt: 2024-09-26T18:36:57.313Z
updatedAt: 2024-09-26T18:55:35.999Z
publishedAt: 2024-09-26T18:55:35.999Z
firstPublishedAt: 2024-09-26T18:55:35.999Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-safrapay
locale: es
legacySlug: configurar-pago-con-safrapay
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX es posible la integración con el proveedor de pagos SafraPay. Con este proveedor, tu tienda puede realizar ventas a través de tarjetas de crédito, boletos bancarios y PIX.

Para configurar SafraPay, siga los pasos a continuación:

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Proveedores__, o escribe __Proveedores__ en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre __SafraPay__ en la barra de búsqueda y haga clic en el nombre del proveedor.
4. En __Autorización del proveedor__, rellene los campos de registro __Clave de aplicación__ y __Token de aplicación__ con los datos proporcionados por SafraPay.
5. Si desea modificar el nombre de identificación que se mostrará para el proveedor SafraPay en la pantalla VTEX Admin, ingrese la información en el campo __Nombre__ en __Información general__.
6. En __Control de pago__, seleccione si desea activar el proveedor en un entorno de prueba haciendo clic en __Activar modo de prueba__.
7. Si desea utilizar [Split de pagos](https://help.vtex.com/es/tutorial/split-de-pagos--6k5JidhYRUxileNolY2VLx) en su tienda, seleccione la opción __Activar split de cobros y enviar destinatarios de pago__ e indique el __Responsable de cargos de procesamiento de pagos__ y el __Responsable de contracargos__ (marketplace, sellers o marketplace y sellers).
8. Haga clic en `Guardar`.

Para configurar los métodos de pago a procesar por SafraPay, acceda al [Configurar Condiciones de Pago](https://help.vtex.com/es/tutorial/condiciones-de-pago--tutorials_455#).

Para establecer condiciones especiales en los métodos de pago, acceda al [Configurar condiciones especiales de Pago](https://help.vtex.com/es/tutorial/condiciones-especiales--tutorials_456#).

Después de seguir los pasos indicados, SafraPay puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.
