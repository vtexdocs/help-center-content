---
title: 'Enviar los medios de pago del Seller White Label al Marketplace'
id: bfvtPzZyikacSqgkgeGW
status: PUBLISHED
createdAt: 2018-09-27T20:35:08.990Z
updatedAt: 2019-12-31T15:21:55.409Z
publishedAt: 2019-12-31T15:21:55.409Z
firstPublishedAt: 2018-09-27T20:42:48.820Z
contentType: tutorial
productTeam: Channels
author: authors_59
slugEN: send-the-seller-white-label-payment-methods-to-the-marketplace
legacySlug: untitled-entry-2018-09-27-at-08-35-08
locale: es
subcategoryId: 3wullenAJiAcWY0a6K4UOE
---

El objetivo de este tutorial es enseñar cómo enviar los medios de pago de un Seller White Label a un Marketplace 

Este feature permite que las compras realizadas en un e-commerce sean hechas con los medios de pago de una tienda física. Esto disminuye la complejidad de la operación, separando centros de costo, pues la factura y los pagos serán vinculados directamente al CNPJ de la tienda física, que actúa como Seller White Label de un Marketplace.

> ℹ️ Esta configuración substituye el uso del antiguo feature de **Cuentas Alternativas** para este escenario.

## Registrar medios de pago en el Seller White Label

1. En el menú del admin de la Cuenta Franquicia, que actúa como Seller White Label, haga clic en __Pagos__.
2. Haga clic en __Configuración__.
3. [Registre la afiliación de gateway](/es/tutorial/afiliaciones-de-gateway) que utilizará el Seller White Label para procesar los pagos.
4. [Configure los medios de pago](/es/tutorial/condiciones-de-pago) que se enviarán para el Marketplace.

## Registrar afiliado para enviar los medios de pago

Para enviar los medios de pago para el Marketplace, se necesita que el Seller White Label registre un __afiliado__. Para registrar un afiliado, siga los siguientes pasos:

1. En el menú del admin de su tienda, haga clic en __Gestión de Pedidos__
2. Haga clic en __Configuración__
3. Haga clic en la pestaña __Afiliados__
4. Haga clic en el botón verde **Nuevo afiliado**.
5. Rellene los campos, conforme listados abajo, y haga clic en __Guardar__

### Campos de registro

- __Nombre__ Ingrese el nombre del Marketplace adonde los medios de pago serán enviados.
- __ID__: Ingrese una sigla con tres letras para identificar el Marketplace.
- __Política Comercial__: Id de la política comercial del Seller White Label que enviará las informaciones para el Marketplace.
- __E-mail de FollowUp__: Rellene con un e-mail que va a recibir notificaciones sobre la integración.
- __Endpoint de Search__: Este campo no necesita ser rellenado. 
- __Search Endpoint Versión__: Seleccione la opción __1.x.x__
- __Utilizar mi método de pago__: Seleccione este checkbox para enviar sus medios de pago para el Marketplace. Al seleccionar esta opción, los medios de pago registrados en el Seller White Label serán enviados para el checkout del Marketplace.

