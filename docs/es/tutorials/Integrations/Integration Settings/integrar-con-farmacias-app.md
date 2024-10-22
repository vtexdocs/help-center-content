---
title: 'Integrar con Farmácias App'
id: tutorials_6271
status: PUBLISHED
createdAt: 2017-04-27T21:49:03.087Z
updatedAt: 2023-03-29T16:32:52.066Z
publishedAt: 2023-03-29T16:32:52.066Z
firstPublishedAt: 2017-04-27T23:11:18.364Z
contentType: tutorial
productTeam: Channels
author: authors_24
slugEN: integrating-with-farmacias-app
locale: es
legacySlug: integrar-con-farmacias-app
subcategoryId: 4uqMnZjwBO04uWgCom8QiA
---

Farmácias App es un marketplace mobile certificado por VTEX. Está disponible para iOS y Android.

## Permisión de acceso

Para iniciar la integración, es necesario en primer lugar otorgar permiso a la clave de integración de Farmacias App. Ella permite que el marketplace reciba y envíe las actualizaciones necesarias para el flujo de ventas &#8211; relativas, por ejemplo, a recepción de catálogo, cálculo de flete y envío de pedidos.

Para configurar la clave, siga los pasos a continuación:

1. Acceda al módulo **Gestión de la cuenta**;
2. Haga clic en la pestaña **Usuarios**;
3. Haga clic en el botón **Nuevo usuario**;
4. Rellene los campos **Email** y **Nombre completo** de la siguiente manera:

**Email**: `vtexappkey-farmaciasapp-ISBSVR`
**Nombre**: `farmaciasapp`

_**Atención**: hay que llenar estos campos exactamente según lo descrito arriba._

El **perfil de acceso** será: IntegrationProfile-Fulfillment_Oms, IntegrationProfile-Fulfillment_Gateway

![Farmacias1](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Integrations/Integration Settings/integrar-con-farmacias-app_1.png)

Finalmente, haga clic en el botón **Guardar**.

Después, será necesario:

1. [Crear colección](http://help.vtex.com/es/tutorial/criando-colecao-de-produtos/) (sólo si su tienda todavía no posee una colección que desee atribuir al marketplace);
2. Crear grupo por departamento, categoría o sub-categoría;
3. Crear grupo por marca;
4. [Configurar la política comercial](http://help.vtex.com/es/tutorial/politica-comercial-para-marketplace/).

## Configurando afiliado

Finalmente, debe realizarse el registro del afiliado, que sirve como identificación única del marketplace en su tienda. Para hacerlo, siga los pasos a continuación:

1. Acceda al módulo **Gestión de Pedidos**;
2. Haga clic en el botón **Configuración**;![Farmacias2](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Integrations/Integration Settings/integrar-con-farmacias-app_2.png)
3. Haga clic en la pestaña **Afiliados**;
4. Haga clic en el botón **Nuevo afiliado**;
5. Llene los campos de la siguiente forma:

**Nombre**: Farmácias APP;
**ID**: FPP;
**Política comercial**: _rellene con el ID de la política comercial_.
**Email de follow up**: _email de la persona responsable de la integración_;
**Endpoint de Search**: https://integrador.farmaciasapp.com.br/Vtex/api/notification

![Farmacias3](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Integrations/Integration Settings/integrar-con-farmacias-app_3.png)

_Cuando se procesen los pagos a través del Farmácias App, la opción **Usar mi medio de pago** debe estar desmarcada. Marque esa opción sólo para pagos procesados en ambientes diferentes, como pagos procesados en la plataforma VTEX._

Tras realizar estos pasos, usted debe enviar los siguientes datos al Farmácias App:

- Store Id Sales;
- Channel;
- Afiliate Id;
- Email del responsable de la integración;
- Teléfono del responsable de la integración.

Para pagos procesados en ambientes externos al Farmácias App, también es necesario enviar los siguientes datos:

- Banco;
- Código del banco;
- Agencia de la cuenta del recibidor;
- Dígito de la agencia;
- Número de la cuenta bancaria del recibidor;
- Dígito verificador de la cuenta del recibidor;
- CPF o CNPJ del recibidor.

Después de esto, Farmácias App realizará las configuraciones y las pruebas necesarias, publicando algunos productos en su catálogo para efectuar pedidos y probar el fluxo de extremo a extremo.
