---
title: 'Configurar pago con AlignetV2'
id: 1rZU7cexTYdzB4SHWjr3eJ
status: PUBLISHED
createdAt: 2024-03-07T16:37:07.030Z
updatedAt: 2024-03-07T16:56:11.973Z
publishedAt: 2024-03-07T16:56:11.973Z
firstPublishedAt: 2024-03-07T16:56:11.973Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-alignetv2
locale: es
legacySlug: configurar-pago-con-alignetv2
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX es posible la integración con el proveedor de pagos AlignetV2. Con este proveedor, su tienda puede realizar ventas a través de tarjetas de crédito.

Para configurar AlignetV2 siga los pasos a continuación:

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Proveedores__, o escribe __Proveedores__ en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre __AlignetV2__ en la barra de búsqueda y haga clic en el nombre del proveedor.
4. En __Autorización del proveedor__, rellene los campos de registro __Clave de aplicación__ y __Token de aplicación__ con los datos proporcionados por su cuenta AlignetV2.
5. Si desea modificar el nombre de identificación que se mostrará para el proveedor AlignetV2 en la pantalla VTEX Admin, ingrese la información en el campo __Nombre__ en __Información general__.
6. Haga clic en `Guardar`.

## Configurar condición de pago

1. En el Admin de VTEX, acceda a __Configuración de la Tienda > Pago > Configuración__, o escriba __Configuración__ en la barra de búsqueda en la parte superior de la página.
2. En la pestaña __Condiciones de pago__, haga clic en el botón `+`.
3. Haga clic en el nombre de la marca de tarjeta de crédito deseada.
4. Active la condición en el campo __Status__.
5. Si desea utilizar un sistema antifraude, seleccione la opción __Utilizar antifraude__.
6. Si desea, puede [configurar condiciones especiales de pago](https://help.vtex.com/es/tutorial/condiciones-especiales--tutorials_456?&utm_source=autocomplete#).
7. Haga clic en `Guardar`.

Después de seguir los pasos indicados, AlignetV2 puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.
