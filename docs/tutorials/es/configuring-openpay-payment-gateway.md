---
title: 'Configurar el gateway Openpay'
id: 5vGj3UIFCU4GFFqVBlYKW2
status: PUBLISHED
createdAt: 2021-07-06T17:31:51.598Z
updatedAt: 2021-07-06T18:01:16.234Z
publishedAt: 2021-07-06T18:01:16.234Z
firstPublishedAt: 2021-07-06T17:54:12.638Z
contentType: tutorial
productTeam: Financial
author: 13Ue4MX9WNiX9f3SVCUZZW
slug: configurar-el-gateway-openpay
legacySlug: configurar-el-gateway-openpay
subcategory: 
---

[Openpay](https://www.openpay.mx/) es un procesador de pagos en línea que permite recibir pagos realizados con tarjetas de crédito, efectivo y transferencias bancarias.

<div class="alert alert-warning">
  Antes de realizar la configuración, debe haber creado y verificado una cuenta de Openpay. Si aún no se ha registrado, <a href="https://sandbox-dashboard.openpay.mx/login/register?isCandidateForNewStyles=false">haga clic aquí</a> y cree su cuenta.
  </div>

Para configurar Openpay, necesitará:

1. [Configurar Google Tag Manager](#configurar-google-tag-manager)
2. [Configurar Openpay](#configurar-openpay)
3. [Asociar una condición de pago a Openpay](#asociar-una-condicion-de-pago)

## Configurar Google Tag Manager

Para configurar Google Tag Manager, siga todas las instrucciones del paso 2 detalladas en [esta documentación](https://www.openpay.mx/en/docs/vtex.html) de Openpay.

Al terminar, continúe con el siguiente paso de configuración de Openpay en el entorno VTEX.

## Configurar Openpay 

Después de crear y activar el tag en Google Tag Manager, debe instalar el conector de Openpay en su tienda. Siga los pasos a continuación:

1. Acceda al __Admin__ de VTEX.
2. En el módulo __Pagos__, haga clic en __Configuración__.
3. En __Afiliaciones__, haga clic en el botón verde «__+__».
4. Busque y haga clic en __Openpay__.
5. En __Nombre de la afiliación__, ingrese __Openpay__.
6. Rellene los campos __Application Key__ y __Application Token__. [Haga clic aquí](https://www.openpay.mx/en/docs/vtex.html) para acceder a la documentación de Openpay y ver las instrucciones que explican cómo obtener esta información.
7. Haga clic en __Salvar__ para guardar los cambios.

## Asociar una condición de pago

Después de completar todos los pasos, la configuración de Openpay estará lista.

Si desea asociarlo a una condición de pago compatible con Openpay, siga el artículo [Configurar condiciones de pago](https://help.vtex.com/es/tutorial/condicoes-de-pagamento).

