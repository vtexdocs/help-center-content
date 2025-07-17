---
title: 'Configurar inicio de sesión con Facebook'
id: 3i8Cj8bC2tILvGRsdjlHly
status: PUBLISHED
createdAt: 2019-11-25T20:49:43.757Z
updatedAt: 2021-10-28T18:37:43.166Z
publishedAt: 2021-10-28T18:37:43.166Z
firstPublishedAt: 2020-01-13T14:33:41.637Z
contentType: trackArticle
productTeam: Identity
slugEN: configuring-login-with-facebook
locale: es
trackId: 5PxyAgZrtiYlaYZBTlhJ2A
trackSlugES: contas-e-permissoes
---

En VTEX, lo que identifica al cliente en el sistema es su correo electrónico. Sin embargo, si desea realizar algún cambio en los datos informados durante la primera compra, deberá confirmar la **propiedad del correo electrónico** en cuestión.
Para esto, se ofrecen algunas alternativas, entre estas **Facebook**. 

## Registrar Client Id y Client Secret para iniciar sesión con Facebook  

Antes de la configuración en VTEX, es necesario configurar el registro en Facebook. Para esto, siga nuestras instrucciones en el [artículo sobre registro de client id y client secret para iniciar sesión en Facebook](/es/tutorial/registrar-client-id-y-client-secret-para-login-con-facebook?locale=es). 

## Configurar inicio de sesión en VTEX

Después de la configuración en Facebook, es necesario configurar esta opción de inicio de sesión en VTEX.

1.  En el módulo de **Configuración de la cuenta**, acceda a la pestaña de **Autenticación**.
2.  Haga clic en el botón **Editar** correspondiente a Facebook.
3.  Rellene los campos con el _Client Id_ y _Client Secret_ registrados en **Facebook**.
    ![Facebook OAuth ES](https://images.ctfassets.net/alneenqid6w5/2mWEocn4zdG0BJVMaujzk8/ffc13a1eb81a285feea15e78a72342b9/facebook_ES.png)
4.  Haga clic en el botón **Salvar**. 
5.  Para validar si el inicio de sesión se hizo correctamente, acceda al  front-end de su tienda y haga clic en **Login**.
6. Aparecerán las opciones de inicio de sesión configuradas. Haga clic en la opción **Facebook** y compruebe si se muestra el nombre de su tienda.

