---
title: 'Configurar el adquirente Rede'
id: 4FEVcvYWC4uS4yoYS2WAIw
status: ARCHIVED
createdAt: 2018-02-22T20:21:54.730Z
updatedAt: 2022-12-23T20:20:11.414Z
publishedAt: 
firstPublishedAt: 2018-02-22T23:18:26.819Z
contentType: tutorial
productTeam: Financial
author: authors_59
slugEN: configuring-the-rede-acquirer
locale: es
legacySlug: configurar-el-adquirente-rede
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX, es posible realizar la integración con el adquirente Rede. Configurando el conector __ERedev2__, su tienda podrá aceptar pagos con tarjetas de las principales redes.

>ℹ️ **Atención**: actualmente, Rede cuenta con una versión más actualizada de su conector. Para saber más detalles de cómo configurar este adquirente, consulte el artículo sobre [ERedeREST](https://help.vtex.com/es/tutorial/configurar-adquirente-rede-con-erederest?locale=es "ERedeREST").

Para configurar Rede, realice los siguientes pasos:

## Configurar afiliación de gateway ERedeV2

1. Acceda al módulo __Pagos__.
2. Haga clic en __Configuración__.
2. En la pestaña __Afiliaciones de Gateways__, haga clic en el botón __+__.
3. Haga clic en el conector __ERedeV2__.
4. Rellene los campos de registro con los datos proporcionados por Rede (Campos *Código de afiliación, Contraseña*).
5. En el campo __Soft Descriptor__, usted puede ingresar una string personalizada que se imprimirá en la factura del cliente.
6. En __Captura de seguridad anticipada__, usted debe elegir en cuánto tiempo la captura debe ocurrir después de la aprobación del pago.
7. Haga clic en __Guardar__.

## Configurar la condición de pago

En VTEX, el conector de ERedeV2 procesa principalmente __tarjetas de crédito__. Para configurar los medios de pago que serán procesados por Rede, [acceda a nuestro tutorial](/es/tutorial/condiciones-de-pago).
