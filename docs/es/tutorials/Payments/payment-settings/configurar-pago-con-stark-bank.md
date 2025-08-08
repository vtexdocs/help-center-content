---
title: 'Configurar pago con Stark Bank'
id: 19pwHHVuEGN743WOGXcbUM
status: PUBLISHED
createdAt: 2023-09-08T15:29:02.297Z
updatedAt: 2025-03-17T13:07:31.346Z
publishedAt: 2025-03-17T13:07:31.346Z
firstPublishedAt: 2023-09-08T15:45:11.373Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-stark-bank
legacySlug: configurar-pago-con-stark-bank
locale: es
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX es posible la integración con el proveedor de pagos Stark Bank. Con este proveedor, su tienda puede realizar ventas a través de boletos bancarios y PIX.

Para configurar Stark Bank, siga los pasos a continuación:

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Proveedores__, o escribe __Proveedores__ en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre __StarkBank__ en la barra de búsqueda y haga clic en el nombre del proveedor.
4. Haga clic en __Autorizar__. Usted será redirigido al entorno de Stark Bank.
5. En el entorno de Stark Bank, ingrese el nombre de usuario y ça contraseña de su cuenta de Stark Bank. Siga las instrucciones indicadas para completar la vinculación de la cuenta Stark Bank con VTEX.
6. Al regresar a Admin VTEX, si desea modificar el nombre de identificación que se mostrará para el proveedor Stark Bank en la pantalla VTEX Admin, ingrese la información en el campo __Nombre__ en __Información general__.
7. En __Control de pago__, seleccione si desea activar el proveedor en un entorno de prueba haciendo clic en __Activar modo de prueba__.
8. Si desea utilizar [Split de pagos](https://help.vtex.com/es/tutorial/split-de-pagos--6k5JidhYRUxileNolY2VLx) en su tienda, seleccione la opción __Activar split de cobros y enviar destinatarios de pago__ e indique el __Responsable de cargos de procesamiento de pagos__ y el __Responsable de contracargos__ (marketplace, sellers o marketplace y sellers).
9. En **Campos del Proveedor**, seleccione la opción deseada en __Habilitar consulta de boleto 1 hora após a emissão?__.
10. Si es necesario, rellene el último campo del formulario con las etiquetas identificativas de las operaciones de recibo.
11. Haga clic en `Guardar`.

Para configurar los métodos de pago a procesar por Stark Bank, acceda al [Configurar Condiciones de Pago](https://help.vtex.com/es/tutorial/condiciones-de-pago--tutorials_455#).

Para establecer condiciones especiales en los métodos de pago, acceda al [Configurar condiciones especiales de Pago](https://help.vtex.com/es/tutorial/condiciones-especiales--tutorials_456#).

Después de seguir los pasos indicados, Stark Bank puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.
