---
title: 'Configurar pago con EgetnetV2'
id: 6jfBE8ocN5T0xQo8BTGH31
status: PUBLISHED
createdAt: 2023-02-13T13:55:05.519Z
updatedAt: 2024-03-14T18:21:39.711Z
publishedAt: 2024-03-14T18:21:39.711Z
firstPublishedAt: 2023-02-13T14:12:54.200Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slug: configurar-pago-con-egetnetv2
locale: es
legacySlug: configurar-pago-con-egetnetv2
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX es posible la integración con el proveedor de pagos EgetnetV2. Con este proveedor, tu tienda puede realizar ventas a través de tarjetas de crédito, boletos bancarios y PIX.

Para configurar EgetnetV2, siga los pasos a continuación:

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Proveedores__, o escribe __Proveedores__ en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre __EgetnetV2__ en la barra de búsqueda y haga clic en el nombre del proveedor.
4. En __Autorización del proveedor__, rellene los campos de registro __Clave de aplicación__ y __Token de aplicación__ con los datos proporcionados por EgetnetV2.
5. Si desea modificar el nombre de identificación que se mostrará para el proveedor EgetnetV2 en la pantalla VTEX Admin, ingrese la información en el campo __Nombre__ en __Información general__.
6. En __Control de pago__, seleccione si desea activar el proveedor en un entorno de prueba haciendo clic en __Activar modo de prueba__.
7. Si desea utilizar [Split de pagos](https://help.vtex.com/es/tutorial/split-de-pagos--6k5JidhYRUxileNolY2VLx) en su tienda, seleccione la opción __Activar split de cobros y enviar destinatarios de pago__ e indique el __Responsable de cargos de procesamiento de pagos__ y el __Responsable de contracargos__ (marketplace, sellers o marketplace y sellers).
8. Haga clic en `Guardar`.

Para configurar los métodos de pago a procesar por EgetnetV2, acceda al [Configurar Condiciones de Pago](https://help.vtex.com/es/tutorial/condiciones-de-pago--tutorials_455#).

Para establecer condiciones especiales en los métodos de pago, acceda al [Configurar condiciones especiales de Pago](https://help.vtex.com/es/tutorial/condiciones-especiales--tutorials_456#).

Después de seguir los pasos indicados, EgetnetV2 puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.
