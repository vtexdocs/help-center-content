---
title: 'Registrar client ID y secreto del cliente para inicio de sesión con Google'
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
legacySlug: registrar-client-id-y-client-secret-para-login-con-google, registrar-client-id-y-client-secret-para-inicio-de-sesion-con-google
locale: es
subcategoryId: 14V5ezEX0cewOMg0o0cYM6
---

Para activar el inicio de sesión por OAuth2 vía Google, accede en el Admin a tu ID VTEX y llena los campos `Client ID` y `Secreto del cliente`, [como se describe en el artículo Configurar inicio de sesión con Facebook y Google] (https://help.vtex.com/es/docs/tutorials/configurar-inicio-de-sesion-con-facebook-y-google).

![Google OAuth](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/autenticación/conceptos-básicos-de-autenticación/registrar-client-id-y-secreto-del-cliente-para-inicio-de-sesion-con-google_1.png)

Estos valores se obtienen a partir de un proyecto creado en el servicio de APIs de Google Cloud Platform.

Sigue los pasos a continuación:

> ⚠️ Los siguientes pasos describen procedimientos en una plataforma externa y pueden estar desactualizados. Para más información consulta los artículos [Setting up OAuth 2.0](https://support.google.com/cloud/answer/6158849) y [OpenID Connect](https://developers.google.com/identity/protocols/oauth2/openid-connect) de documentación de Google.

1. Accede a  [Google Cloud Console](https://console.developers.google.com/);
2. Haz clic en __Credenciales__, en la pestaña lateral;
3. Haz clic en __Crear Proyecto__;
    ![Crear proyecto Google ES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/autenticación/conceptos-básicos-de-autenticación/registrar-client-id-y-secreto-del-cliente-para-inicio-de-sesion-con-google_2.png)
4. Define el nombre del proyecto y haz clic en __Crear__;
    ![Nuevo proyecto Google ES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/autenticación/conceptos-básicos-de-autenticación/registrar-client-id-y-secreto-del-cliente-para-inicio-de-sesion-con-google_3.png)
5. En la parte superior de la página, haz clic en el botón __Crear credenciales__;
    ![Crear credenciais Google ES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/autenticación/conceptos-básicos-de-autenticación/registrar-client-id-y-secreto-del-cliente-para-inicio-de-sesion-con-google_4.png)
6. Haz clic en la opción __ID de cliente de OAuth__;
    ![ID cliente OAuth Google ES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/autenticación/conceptos-básicos-de-autenticación/registrar-client-id-y-secreto-del-cliente-para-inicio-de-sesion-con-google_5.png)
7. Haz clic en el botón __Configurar página de consentimiento__;
    ![Configurar página de consentimento Google ES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/autenticación/conceptos-básicos-de-autenticación/registrar-client-id-y-secreto-del-cliente-para-inicio-de-sesion-con-google_6.png)
8. Selecciona el tipo de usuario que deseas para tu tienda (__Interno__ o __Externo__) y haz clic en el botón __Crear__;
    ![Tipo usuário Google ES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/autenticación/conceptos-básicos-de-autenticación/registrar-client-id-y-secreto-del-cliente-para-inicio-de-sesion-con-google_7.png)
9.  __Nombre de aplicación__: se mostrará a tus clientes al iniciar sesión;
10. __Email de asistencia del usuario__: para que los usuarios se comuniquen contigo si tienen preguntas sobre consentimiento;
11. __Logotipo de la app__: corresponde al logotipo de tu tienda;
12. __Dominios autorizados__: se deben incluir los dominios que puedan interactuar con esta API, que deben ser al menos el dominio de tu tienda y el dominio VTEX: 
    - `tienda.com`, como ejemplo, siempre sin "www" o su correspondiente
    - `vtex.com.br`, referente a nuestros servidores backend.
13. __Información de contacto del desarrollador__: Google enviará notificaciones sobre cualquier cambio en tu proyecto a estas direcciones de email;
14. Haz clic en el botón  __Guardar y continuar__;
    ![Configuración página de consentimiento ES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/autenticación/conceptos-básicos-de-autenticación/registrar-client-id-y-secreto-del-cliente-para-inicio-de-sesion-con-google_8.png)
13. Haz clic en __Credenciales__, en el menú lateral izquierdo;
14. Selecciona__Aplicación web__, en Tipo de aplicación;
    ![Credencial aplicación Web Google ES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/autenticación/conceptos-básicos-de-autenticación/registrar-client-id-y-secreto-del-cliente-para-inicio-de-sesion-con-google_9.png)
15. __Nombre__: para identificación interna;
16. __Orígenes de JavaScript autorizados__: registrar las direcciones exactas que podrán usar este método de autenticación, lo que corresponde a tu sitio web; por ejemplo, `https://www.tienda.com`. También se recomienda registrar la dirección `https://{{accountName}}.myvtex.com` de tu cuenta, `{{accountName}}` es el nombre de la cuenta como se describe en el menú de administración de la tienda;
17. __URIs de redireccionamiento autorizados__: registrar la URL de servicio de VTEX:
    -`https://vtexid.vtex.com.br/VtexIdAuthSiteKnockout/ReceiveAuthorizationCode.ashx`
    ![Configuraciones aplicación Web Google ES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/autenticación/conceptos-básicos-de-autenticación/registrar-client-id-y-secreto-del-cliente-para-inicio-de-sesion-con-google_10.png)

18. Después de completar este ajuste obtendrás tus credenciales:
    ![Cliente OAuth creado Google ES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/autenticación/conceptos-básicos-de-autenticación/registrar-client-id-y-secreto-del-cliente-para-inicio-de-sesion-con-google_11.png)
    - Copia el __Client ID__ de Google y pégalo en el campo `Client Id` en el Admin de VTEX ID.
    - Copia tu __clave secreta de cliente__ de Google y pégala en el campo `Secreto del cliente` como se muestra en la imagen a continuación.
    ![Google OAuth](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/autenticación/conceptos-básicos-de-autenticación/registrar-client-id-y-secreto-del-cliente-para-inicio-de-sesion-con-google_12.png)
    Una vez completados estos pasos, guarda los cambios.
