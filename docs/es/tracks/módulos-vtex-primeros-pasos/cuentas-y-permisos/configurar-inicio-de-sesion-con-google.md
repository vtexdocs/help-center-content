---
title: 'Configurar inicio de sesión con Google'
id: 4XGFNDYBugBuEmazd0fJ3
status: PUBLISHED
createdAt: 2019-11-25T20:57:56.093Z
updatedAt: 2021-10-28T18:41:34.218Z
publishedAt: 2021-10-28T18:41:34.218Z
firstPublishedAt: 2020-01-13T14:32:39.158Z
contentType: trackArticle
productTeam: Identity
slugEN: configuring-login-with-google
locale: es
trackId: 5PxyAgZrtiYlaYZBTlhJ2A
trackSlugEN: cuentas-y-permisos
order: 10
---

Como lo explicamos en el artículo anterior, en VTEX, el cliente es identificado en el sistema a través de su correo electrónico. Si este desea realizar algún cambio en los datos informados durante la primera compra, es necesario que confirme la **propiedad del correo electrónico** en cuestión.

De la misma forma en que el cliente puede acceder a través de Facebook, también lo puede hacer a través de **Google**.

## Registrar Client Id y Client Secret para iniciar sesión con Google

Antes de realizar la configuración en VTEX, usted necesita configurar el registro en Google. Para esto, siga las instrucciones del [artículo sobre registro de Client Id y Client Secret para iniciar sesión en Google](/es/tutorial/registrar-client-id-y-client-secret-para-login-con-google).

## Configurar inicio de sesión en VTEX

Después de hacer la configuración en Google, puede configurar el inicio de sesión en VTEX.

1. En el módulo **Configuración de la cuenta**, acceda a la pestaña **Autenticación**.  
2. Haga clic en el botón **Editar** correspondiente a Google.
3. Complete los campos ingresando el _Client Id_ y _Client Secret_ registrados en **Google**.
    ![Google OAuth](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/módulos-vtex-primeros-pasos/cuentas-y-permisos/configurar-inicio-de-sesion-con-google_1.png)
5. Haga clic en el botón **Salvar**. 
6. Para validar si el inicio de sesión se hizo correctamente, acceda al front-end de su tienda y haga clic en **Login**.
7. Las opciones de inicio de sesión aparecerán configuradas. Haga clic en la opción **Google** y verifique si se muestra el nombre de su tienda.    

