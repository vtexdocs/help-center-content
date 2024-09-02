---
title: 'Configurar pago con PSE'
id: 7dRChubn7TqdEyWrHQEQp6
status: PUBLISHED
createdAt: 2022-05-18T17:13:25.207Z
updatedAt: 2023-03-14T14:51:46.607Z
publishedAt: 2023-03-14T14:51:46.607Z
firstPublishedAt: 2023-03-14T14:51:46.607Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slug: configurar-pago-con-pse
locale: es
legacySlug: configurar-pago-con-pse
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

El sistema de débito en línea PSE es una de las opciones de VTEX para recibir pagos en Colombia.

Para habilitar PSE en su tienda, se requieren las siguientes acciones:
- [Instalar y configurar la aplicación Banks for PSE](#instalacion-de-la-aplicación-banks-for-pse).
- [Configuración la condición de pago PSE](#configuracion-la-condicion-de-pago-pse).

<div class="alert alert-warning">
Para configurar la aplicación PSE en su tienda, debe tener permiso para acceder al módulo de Pagos. Si aún no dispone de este acceso, solicítelo a través del <a href="https://help.vtex.com/support">VTEX Support</a>.</div>

## Instalación de la aplicación Banks for PSE

1. Acceda al **Admin VTEX**.
2. En la sección **Configuración de la cuenta**, acceda **Apps > App Store**.
3. En el campo **Todas las apps**, escribelo **Banks for PSE**.
4. Haga clic en `Instalar` en la aplicación Banks for PSE.
5. En la pantalla de VTEX APP Store, haga clic en `OBTENER APP`.
6. Escribe el nombre de tu tienda (en minúsculas y sin espacios).
7. Haga clic `Confirmar`.
8. Haga clic `Instalar`para terminar.

## Configuración de la aplicación Banks for PSE

1. Acceda al **Admin VTEX**.
2. En la sección **Configuración de la cuenta**, acceda **Apps > Mis Apps**.
3. En el campo **App Store**, escribelo **Banks for PSE**.
4. Haga clic en `Configuración` en la aplicación Banks for PSE.
5. En **Connector used to process the PSE payment**, seleccione lá opción deseada.
6. Si usa GlobalPay como conector, rellen los campos **Application Code** y **Application Key** con los datos facilitados por GlobalPay.
7. Haga clic en  `Guardar`.

## Configuración la condición de pago PSE

1. Acceda al **Admin VTEX**.
2. Haga clic en **Pagos**.
3. Después, haga clic en **Configuración**.
4. En la pestana **Condiciones de pago**, haga clic en el botón `+`. 
5. Haga clic en **PSE**.
6. Rellene el campo **Nombre de la regla** con un nombre de su elección para su identificación.
7. Active la condición en el campo **Status**.
8. En el campo **Procesar con afiliación**, elija el conector que procesará los pagos con PSE. Solo los conectores que admitan este método de pago estarán disponibles para su selección.
9. Si lo desea, también puede [configurar condiciones especiales de pago](https://help.vtex.com/es/tutorial/condiciones-especiales--tutorials_456#).
10. Haga clic en `Guardar`.
