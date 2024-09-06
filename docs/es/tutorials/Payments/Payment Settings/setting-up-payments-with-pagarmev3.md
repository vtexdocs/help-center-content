---
title: 'Configurar pago con PagarMeV3'
id: 5PMavdamrVijwIrHas9ndE
status: PUBLISHED
createdAt: 2022-06-22T17:05:12.930Z
updatedAt: 2024-03-11T14:27:05.534Z
publishedAt: 2024-03-11T14:27:05.534Z
firstPublishedAt: 2022-06-22T17:51:37.670Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slug: configurar-pago-con-pagarmev3
locale: es
legacySlug: configurar-pago-con-pagarmev3
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX es posible la integración con el proveedor de pagos PagarMeV3. Con este proveedor, tu tienda puede realizar ventas a través de tarjetas de crédito y débito, boletos bancarios y PIX.

Para configurar PagarMeV3, siga los pasos a continuación:

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Proveedores__, o escribe __Proveedores__ en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre __PagarMeV3__ en la barra de búsqueda y haga clic en el nombre del proveedor.
4. En __Autorización del proveedor__, rellene los campos de registro __Clave de aplicación__ y __Token de aplicación__ con los datos proporcionados por PagarMeV3.
5. Si desea modificar el nombre de identificación que se mostrará para el proveedor PagarMeV3 en la pantalla VTEX Admin, ingrese la información en el campo __Nombre__ en __Información general__.
6. En __Control de pago__, seleccione si desea activar el proveedor en un entorno de prueba haciendo clic en __Activar modo de prueba__.
7. Si desea utilizar [Split de pagos](https://help.vtex.com/es/tutorial/split-de-pagos--6k5JidhYRUxileNolY2VLx) en su tienda, seleccione la opción __Activar split de cobros y enviar destinatarios de pago__ e indique el __Responsable de cargos de procesamiento de pagos__ y el __Responsable de contracargos__ (marketplace, sellers o marketplace y sellers).
8. Haga clic en `Guardar`.

Para configurar los métodos de pago a procesar por PagarMeV3, acceda al [Configurar Condiciones de Pago](https://help.vtex.com/es/tutorial/condiciones-de-pago--tutorials_455#).

Para establecer condiciones especiales en los métodos de pago, acceda al [Configurar condiciones especiales de Pago](https://help.vtex.com/es/tutorial/condiciones-especiales--tutorials_456#).

Después de seguir los pasos indicados, PagarMeV3 puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.
