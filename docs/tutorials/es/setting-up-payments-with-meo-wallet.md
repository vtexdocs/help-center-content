---
title: Configurar pagos con MEO Wallet
id: RTxEjuC7eMSeamQKAKs0W
status: DRAFT
createdAt: 2018-04-20T15:36:37.820Z
updatedAt: 2022-12-23T20:27:15.676Z
publishedAt: 
firstPublishedAt: 2018-04-20T16:19:00.365Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: configurar-pagos-con-meo-wallet
legacySlug: configurar-pagos-con-meo-wallet
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

Usted puede recibir pagos en su tienda usando el MEO Wallet. En esta modalidad, su cliente elige el __medio de pago__ MEO Wallet para efectuar la compra.

Para realizar las configuraciones necesarias, siga los pasos abajo:

## Configurar la afiliación de gateway MEO Wallet
1. Acceda al módulo __Pagos__.
2. Haga clic en __Configuración__.
3. En la pestaña __Afiliaciones de Gateway__, haga clic en el botón __+__.
4. Haga clic en el conector __MEO Wallet__.
5. Rellene el campo __API Key__ con los datos proporcionados por MEO Wallet.
6. En __Currency__, elija la moneda que se utilizará en las transacciones de su tienda. Actualmente, sólo el __Euro__ está disponible.
7. En el campo __Tme To Expire (in days)__, defina la cantidad de días para que el pago caduque.
8. En __CallbackURL in MeoWallet__, usted debe registrar la URL de callback `https://{{accountName}}.vtexpayments.com.br/meowallet/{{affiliationId}}/callback` en el panel del MEO Wallet. Sólo hay que sustituir `{{accountName}}}` por la cuenta principal de su tienda y `{{affiliationId}}` por el identificador de afiliación (generado después de la configuración).
9. Haga clic en __Guardar__.

## Configurar la condición de pago MEO Wallet
1. Dentro de __Configuración__  en el módulo Pagos, haga clic en la pestaña __Planes de pago__.
2. Haga clic en el botón __+__.
3. Seleccione el medio de pago __MeoWallet__.
4. Haga clic en el botón __Status__ para activar esta condición de pago.
5. En __Procesar con la afiliación__, la opción _MEO Wallet_ ya va a estar seleccionada (ya que es la única disponible).
6. Si hay un antifraude configurado en su tienda, usted puede activarlo para esta condición de pago marcando la casilla __Usar Antifraude__.
7. Usted puede configurar [condiciones especiales de pago](/es/tutorial/condiciones-especiales).
8. Haga clic en __Guardar__.

Después de seguir los pasos indicados, MEO Wallet aparecerá en el checkout de su tienda como una opción de pago para sus clientes.
