---
title: 'Configurar pago con Izipay'
id: 7bGGw6A9xidRfaOhOU1Ibd
status: PUBLISHED
createdAt: 2024-10-11T13:44:41.815Z
updatedAt: 2024-10-11T14:23:38.542Z
publishedAt: 2024-10-11T14:23:38.542Z
firstPublishedAt: 2024-10-11T14:23:38.542Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-izipay
locale: es
legacySlug: configurar-pago-con-izipay
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX es posible la integración con el proveedor de pagos Izipay. Con este proveedor, tu tienda puede realizar ventas a través de izipay.

Para configurar Izipay, siga los pasos a continuación:

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Proveedores__, o escribe __Proveedores__ en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre __izipay__ en la barra de búsqueda y haga clic en el nombre del proveedor.
4. En __Autorización del proveedor__, rellene los campos de registro __Clave de aplicación__ y __Token de aplicación__ con los datos proporcionados por Izipay.
5. Si desea modificar el nombre de identificación que se mostrará para el proveedor Izipay en la pantalla VTEX Admin, ingrese la información en el campo __Nombre__ en __Información general__.
6. En __Control de pago__, seleccione si desea activar el proveedor en un entorno de prueba haciendo clic en __Activar modo de prueba__.
7. Si desea utilizar [Split de pagos](https://help.vtex.com/es/tutorial/split-de-pagos--6k5JidhYRUxileNolY2VLx) en su tienda, seleccione la opción __Activar split de cobros y enviar destinatarios de pago__ e indique el __Responsable de cargos de procesamiento de pagos__ y el __Responsable de contracargos__ (marketplace, sellers o marketplace y sellers).
8. En __Campos do provedor__, ingrese la información __pay.method__, __url.notification__, __language__, __appearance.logo
__,  __appearance.customTheme.colors.backgroundColor__ e __appearance.customTheme.colors.textColor__ según la información de su cuenta Izipay.
9. Haga clic en `Guardar`.

## Configurar condición de pago

1. En el Admin de VTEX, acceda a __Configuración de la Tienda > Pago > Configuración__, o escriba __Configuración__ en la barra de búsqueda en la parte superior de la página.
2. En la pestaña __Condiciones de pago__, haga clic en el botón `+`.
3. Haga clic en __izipay__.
4. Active la condición en el campo __Status__.
5. Si desea utilizar un sistema antifraude, seleccione la opción __Utilizar antifraude__.
6. Si desea, puede [configurar condiciones especiales de pago](https://help.vtex.com/es/tutorial/condiciones-especiales--tutorials_456?&utm_source=autocomplete#).
7. Haga clic en `Guardar`.

Después de seguir los pasos indicados, Izipay puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.
