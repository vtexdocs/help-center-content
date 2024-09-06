---
title: 'Configurar pago con WebpayOneClick'
id: 7jIwDOcBbF3cxIyHKaj4LF
status: PUBLISHED
createdAt: 2024-03-07T14:01:33.652Z
updatedAt: 2024-03-07T15:06:06.370Z
publishedAt: 2024-03-07T15:06:06.370Z
firstPublishedAt: 2024-03-07T15:06:06.370Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slug: configurar-pago-con-webpayoneclick
locale: es
legacySlug: configurar-pago-con-webpayoneclick
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX es posible la integración con el proveedor de pagos WebpayOneClick. Con este proveedor, su tienda puede realizar ventas a través de Transbank Oneclick.

Para configurar WebpayOneClick siga los pasos a continuación:

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Proveedores__, o escribe __Proveedores__ en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre __WebpayOneClick__ en la barra de búsqueda y haga clic en el nombre del proveedor.
4. En __Autorización del proveedor__, rellene los campos de registro __Clave de aplicación__ y __Token de aplicación__ con los datos proporcionados por su cuenta WebpayOneClick.
5. Si desea modificar el nombre de identificación que se mostrará para el proveedor WebpayOneClick en la pantalla VTEX Admin, ingrese la información en el campo __Nombre__ en __Información general__.
6. Haga clic en `Guardar`.

## Configurar condición de pago

1. En el Admin de VTEX, acceda a __Configuración de la Tienda > Pago > Configuración__, o escriba __Configuración__ en la barra de búsqueda en la parte superior de la página.
2. En la pestaña __Condiciones de pago__, haga clic en el botón `+`.
3. Haga clic en __Transbank Oneclick__.
4. Active la condición en el campo __Status__.
5. Si desea utilizar un sistema antifraude, seleccione la opción __Utilizar antifraude__.
6. Si desea, puede [configurar condiciones especiales de pago](https://help.vtex.com/es/tutorial/condiciones-especiales--tutorials_456?&utm_source=autocomplete#).
7. Haga clic en `Guardar`.

Después de seguir los pasos indicados, WebpayOneClick puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.
