---
title: 'Configurar el gateway Openpay'
id: 5vGj3UIFCU4GFFqVBlYKW2
status: PUBLISHED
createdAt: 2021-07-06T17:31:51.598Z
updatedAt: 2025-08-29T16:15:16.962Z
publishedAt: 2025-08-29T16:15:16.962Z
firstPublishedAt: 2021-07-06T17:54:12.638Z
contentType: tutorial
productTeam: Financial
author: 13Ue4MX9WNiX9f3SVCUZZW
slugEN: configuring-openpay-payment-gateway
legacySlug: configurar-el-gateway-openpay
locale: es
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

[Openpay](https://www.openpay.mx/) es un procesador de pagos en línea que permite recibir pagos realizados con tarjetas de crédito, efectivo y transferencias bancarias.

> ⚠️ Antes de realizar la configuración, debe haber creado y verificado una cuenta de Openpay. Si aún no se ha registrado, [haga clic aquí](https://sandbox-dashboard.openpay.mx/login/register?isCandidateForNewStyles=false) y cree su cuenta.

Para configurar Openpay, necesitará:

1. [Configurar Google Tag Manager](#configurar-google-tag-manager)
2. [Configurar Openpay](#configurar-openpay)
3. [Configurar condiciones de pago](#configurar-condiciones-de-pago)

## Configurar Google Tag Manager

Para configurar Google Tag Manager, siga todas las instrucciones del paso 2 detalladas en [esta documentación](https://documents.openpay.mx/docs/vtex.html) de Openpay.

Al terminar, continúe con el siguiente paso de configuración de Openpay en el entorno VTEX.

## Configurar Openpay 

Después de crear y activar el tag en Google Tag Manager, debe instalar el proveedor de Openpay en su tienda. Siga los pasos a continuación:

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Proveedores__, o escribe __Proveedores__ en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre __Openpay__ en la barra de búsqueda y haga clic en el nombre del proveedor.
4. En __Nombre de la afiliación__, ingrese __Openpay__.
5.  Rellene los campos __Application Key__ y __Application Token__. [Haga clic aquí](https://documents.openpay.mx/docs/vtex.html) para acceder a la documentación de Openpay y ver las instrucciones que explican cómo obtener esta información.
6.  Haga clic en `Salvar`.

## Configurar condiciones de pago

Para configurar los métodos de pago a procesar por Openpay, acceda al [Configurar Condiciones de Pago](https://help.vtex.com/es/tutorial/condiciones-de-pago--tutorials_455#).

Para establecer condiciones especiales en los métodos de pago, acceda al [Configurar condiciones especiales de Pago](https://help.vtex.com/es/tutorial/condiciones-especiales--tutorials_456#).

Después de seguir los pasos indicados, Openpay puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.

