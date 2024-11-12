---
title: 'Registrar Client Id y Client Secret para inicio de sesión con Google'
id: 1lBgDmetUM4goie6mYEOK6
status: PUBLISHED
createdAt: 2017-08-29T14:13:01.769Z
updatedAt: 2023-02-08T14:32:35.437Z
publishedAt: 2023-02-08T14:32:35.437Z
firstPublishedAt: 2017-08-29T15:11:54.862Z
contentType: tutorial
productTeam: Identity
author: authors_4
slugEN: adding-a-client-id-and-a-client-secret-to-log-in-with-google
locale: es
legacySlug: registrar-client-id-y-client-secret-para-login-con-google, registrar-client-id-y-client-secret-para-inicio-de-sesion-con-google
subcategoryId: 14V5ezEX0cewOMg0o0cYM6
---

Para habilitar el inicio de sesión por OAuth2 vía Google, usted necesita acceder al VTEX ID por su Admin y rellenar los campos `Client ID` y `Client Secret`, como se detalla en [este artículo](/pt/tutorial/integracao-google-e-facebook-para-login).

![Google OAuth](https://images.ctfassets.net/alneenqid6w5/67wXwVN1RaDZ5oOy6XrTSe/cc91e8a5001c41693ea671d5da3c690e/google_ES.png)

Estos valores se obtienen de un proyecto que debe ser creado en el servicio de APIs de la plataforma de Google Cloud Platform.

De manera simplificada, solo siga los pasos que se indican a continuación:

>⚠️ Los siguientes pasos describen procedimientos en una plataforma externa y pueden estar desactualizados. Se puede encontrar más información sobre estos procedimientos en los artículos [Setting up OAuth 2.0](https://support.google.com/cloud/answer/6158849) y [OpenID Connect](https://developers.google.com/identity/protocols/oauth2/openid-connect) de documentación de Google.

1. Entre en el enlace [`https://console.developers.google.com/`](https://console.developers.google.com/);
2. Haga clic en __Credenciales__, en la pestaña lateral;
3. Haga clic en __Crear Proyecto__;
    ![Criar Projeto Google ES](//images.ctfassets.net/alneenqid6w5/7d7axXgcKs8SKcG0YekU8m/7ae1980ea25092ef02e7f1952370fbd9/Criar_Projeto_Google_ES.png)
4. Defina el nombre del proyecto y haga clic en __Crear__;
    ![Novo Projeto Google ES](//images.ctfassets.net/alneenqid6w5/1PB6BTeU4I6YOqySuwcS4W/56b4d080ea4da99a5d626fc3c0329261/Novo_Projeto_Google_ES.png)
5. En la parte superior de la página, haga clic en el botón __Crear credenciales__;
    ![Criar Credenciais Google ES](//images.ctfassets.net/alneenqid6w5/5bGcIsahuvFskIQBn8X8bl/25ac7be759c40d281dc4bd2cb817ecc4/Criar_Credenciais_Google_ES.png)
6. Haga clic en la opción __ID de cliente de OAuth__;
    ![ID cliente OAuth Google ES](//images.ctfassets.net/alneenqid6w5/5CBmKjKYTYOMkkQImIMcI4/4a2d0e88620740449f9240d87e8dec7e/ID_cliente_OAuth_Google_ES.png)
7. Haga clic en el botón __Configurar página de consentimiento__;
    ![Configurar Tela Consentimento Google ES](//images.ctfassets.net/alneenqid6w5/3mprVJpYy6wdtJJEhhbi1s/9db551614331a844bf870661fac5d7bf/Configurar_Tela_Consentimento_Google_ES.png)
8. Elija el tipo de usuario que desea para su tienda (__Interno__ o __Externo__) y haga clic en el botón __Crear__;
    ![Tipo usuário Google ES](//images.ctfassets.net/alneenqid6w5/yxxE4AdTY0yuNClfZwXHL/f153fed0cf0864141b55c83932558d28/Tipo_usu__rio_ES.png)
9.  __Nombre de aplicación__: se mostrará a sus clientes al iniciar sesión;
10. __Correo electrónico de asistencia del usuario__: para que los usuarios se comuniquen contigo si tienen preguntas sobre su consentimiento;
11. __Logotipo de la app__: corresponde al logotipo de su tienda;
12. __Dominios autorizados__: se deben incluir los dominios que puedan interactuar con esta API, que deben ser al menos el dominio de su tienda y el dominio VTEX: 
    - `tienda.com`, como ejemplo, siempre sin "www" o su correspondiente
    - `vtex.com.br`, referente a nuestros servidores BackEnd.
13. __Información de contacto del desarrollador__: Google enviará notificaciones sobre cualquier cambio en tu proyecto a estas direcciones de correo electrónico;
14. Haga clic en el botón  __Guardar y continuar__;
    ![Configurações Tela Consentimento ES](//images.ctfassets.net/alneenqid6w5/2jKyTCl5FeeMsS2iAw0aKa/4db11d3ef54d615651a84aafe086df4c/Configura____es_Tela_Consentimento_ES.png)
13. Haga clic en __Credenciales__, en el menú lateral izquierdo;
14. Elija __Aplicación web__, en Tipo de aplicación;
    ![Credenciais Aplicativo Web Google ES](//images.ctfassets.net/alneenqid6w5/1sq6ByDBoYtGLeiU3Xsmgx/7253773b80efb5e1c5d1074dec6a578e/Credenciais_Aplicativo_Web_Google_ES.png)
15. __Nombre__: para identificación interna;
16. __Orígenes de JavaScript autorizados__: registrar las direcciones exactas que podrán usar este método de autenticación, lo que corresponde a su sitio web; por ejemplo, `https://www.tienda.com`. También se recomienda registrar la dirección `https://{{accountName}}.myvtex.com` de su cuenta, `{{accountName}}` es el nombre de la cuenta como se describe en el menú de administración de la tienda;
17. __URIs de redireccionamiento autorizados__: registrar la URL de servicio de VTEX:
    -`https://vtexid.vtex.com.br/VtexIdAuthSiteKnockout/ReceiveAuthorizationCode.ashx`
    ![Configurações Aplicativo Web Google ES](//images.ctfassets.net/alneenqid6w5/4HsRII0LeoGMYqWoioWi0o/56174b702c831b3154fac9e2dbc45e21/Configura____es_Aplicativo_Web_ES.png)

18. Después de completar este ajuste, se presentarán sus credenciales:
    ![Cliente OAuth criado Google ES](//images.ctfassets.net/alneenqid6w5/58KAqlnXhKoAqgq6Gcc80K/7d36d109c612b4efa19410bd65da54c1/Cliente_OAuth_criado_Google_ES.png)
    - Copie el __ID de cliente__ de Google y péguelo en el campo `Client Id` en el Admin de VTEX ID.
    - Copie su __clave secreta de cliente__ de Google y péguelo en el campo `Client Secret` en el Admin de VTEX ID.
    ![Google OAuth](//images.ctfassets.net/alneenqid6w5/67wXwVN1RaDZ5oOy6XrTSe/cc91e8a5001c41693ea671d5da3c690e/google_ES.png)
    Una vez que haya completado todos estos pasos, guarde los cambios. 
