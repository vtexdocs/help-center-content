---
title: 'Configurar pago con Netopia Marketplace'
id: 7GFXyr1JjK6YRdBknHK4jV
status: PUBLISHED
createdAt: 2025-10-17T17:55:57.674Z
updatedAt: 2025-10-17T17:57:25.749Z
publishedAt: 2025-10-17T17:57:25.749Z
firstPublishedAt: 2025-10-17T17:57:03.141Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-netopia-marketplace
legacySlug: configurar-pago-con-netopia-marketplace
locale: es
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX es posible la integración con el proveedor de pagos Netopia Marketplace. Con este proveedor, tu tienda puede realizar ventas a través de tarjetas de crédito y débito, boletos bancarios y carteras digitales.

Para configurar Netopia Marketplace, siga los pasos a continuación:

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Proveedores__, o escribe __Proveedores__ en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre __NetopiaMarketplace__ en la barra de búsqueda y haga clic en el nombre del proveedor.
4. En __Autorización del proveedor__, rellene los campos de registro __Clave de aplicación__ y __Token de aplicación__ con los datos proporcionados por Netopia Marketplace.
5. Si desea modificar el nombre de identificación que se mostrará para el proveedor Netopia Marketplace en la pantalla VTEX Admin, ingrese la información en el campo __Nombre__ en __Información general__.
6. En __Control de pago__, seleccione si desea activar el proveedor en un entorno de prueba haciendo clic en __Activar modo de prueba__.
7. Si desea utilizar [Split de pagos](/es/docs/tutorials/split-de-pagos) en su tienda, seleccione la opción __Activar split de cobros y enviar destinatarios de pago__ e indique el __Responsable de cargos de procesamiento de pagos__ y el __Responsable de contracargos__ (marketplace, sellers o marketplace y sellers).
8. En __Campos del Proveedor__, seleccione o complete los campos __POS ID__, __Environment__, __Delay to auto cancel (hours)__, y __Delay to auto capture (minutes)__ según las instrucciones del proveedor.
9. Haga clic en `Guardar`.

Para configurar los métodos de pago a procesar por Netopia Marketplace, acceda al [Configurar Condiciones de Pago](/es/tutorial/condiciones-de-pago--tutorials_455#).

Para establecer condiciones especiales en los métodos de pago, acceda al [Configurar condiciones especiales de Pago](/es/tutorial/condiciones-especiales--tutorials_456#).

Después de seguir los pasos indicados, Netopia Marketplace puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.
