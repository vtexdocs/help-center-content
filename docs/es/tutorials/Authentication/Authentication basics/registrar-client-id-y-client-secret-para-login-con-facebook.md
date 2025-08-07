---
title: 'Registrar Client ID y Secreto del cliente para Inicio de sesión con Facebook'
id: 3R7rzXWG1GswWOIkYyy8SO
status: PUBLISHED
createdAt: 2017-08-29T17:46:04.080Z
updatedAt: 2023-10-20T21:29:11.632Z
publishedAt: 2023-10-20T21:29:11.632Z
firstPublishedAt: 2017-08-29T17:51:41.650Z
contentType: tutorial
productTeam: Identity
author: authors_84
slugEN: adding-a-client-id-and-a-client-secret-to-log-in-with-facebook
locale: es
legacySlug: registrar-client-id-y-client-secret-para-login-con-facebook
subcategoryId: 14V5ezEX0cewOMg0o0cYM6
---

Para activar el inicio de sesión por OAuth2 a través de Facebook, accede al Admin VTEX > **Configuración de cuenta > Autenticación** y completa los campos **Client ID** y **Secreto del cliente**, tal como se describe en el artículo [Configurar inicio de sesión con Facebook y Google](/es/tutorial/configurar-inicio-de-sesion-con-facebook-y-google--tutorials_513).

![Facebook OAuth ES](https://images.ctfassets.net/alneenqid6w5/2mWEocn4zdG0BJVMaujzk8/e85e70614c1ff706937104c8f5ec917c/1-login-fb-es.PNG)

Para obtener las credenciales, sigue las instrucciones en las secciones a continuación:

1. [Crear aplicación](#1-crear-aplicacion)
2. [Configurar Inicio de sesión con Facebook en la aplicación](#2-configurar-inicio-de-sesion-con-facebook-en-la-aplicacion)
3. [Realizar la configuración básica de la aplicación](#3-realizar-la-configuracion-basica-de-la-aplicacion)

## 1. Crear aplicación

Para empezar, debes registrar una aplicación en Facebook siguiendo los pasos a continuación:

1. Accede a la página web [Meta for Developers](https://developers.facebook.com/).
2. Crea una cuenta de Meta for Developers.
3. En la barra superior, haz clic en **Mis apps**.
4. Haz clic en `Crear app`.
5. Haz clic en **Permitir que las personas inicien sesión con su cuenta de Facebook** entre las opciones que se ilustran a continuación.

   ![2-login-fb-es](https://images.ctfassets.net/alneenqid6w5/3zv1li5neUPsSK8VhPaRy0/077ab05e546169ba636a59aca0281498/2-login-fb-es.png)

6. Haz clic en `Siguiente`.
7. Añade el nombre de la aplicación y el correo electrónico de contacto de la persona responsable de la aplicación en los campos que se ilustran a continuación.

   ![3-login-fb-es](https://images.ctfassets.net/alneenqid6w5/1Yg8Du8HKxU7rW15ZsL6vD/d2dc7a5cb5d859f25a892ad3e93575fe/3-login-fb-es.png)

8. Haz clic en `Crear app`.

## 2. Configurar el Inicio de sesión con Facebook en la aplicación

El siguiente paso es configurar el producto Inicio de sesión con Facebook en la aplicación que creaste. Para hacerlo, sigue las instrucciones a continuación:

1. Haz clic en **Productos** en el menú lateral o en el **panel **de Meta for Developers, resaltado en la imagen siguiente.

   ![4-login-fb-es](https://images.ctfassets.net/alneenqid6w5/2wNKd6gswgFQAghpNdvEVq/967682b6e1942ed15ab2c40d75f8a4f0/4-login-fb-es.png)

2. Haz clic en `Configurar` y después selecciona `Configurar` en el menú desplegable.

   ![5-login-fb-es](https://images.ctfassets.net/alneenqid6w5/vMQDtOfYgSZfo7EOYuNel/3c181d675c97d893402af45974d65e95/5-login-fb-es.png)

3. Define los estados como se detalla a continuación:

   ![Configuração URI OAuth Facebook ES](https://images.ctfassets.net/alneenqid6w5/5Y82HZJjF3ZDIVE5WD4Lvt/1e318e6f8fb6c7465445f7c25fddf883/configuracoes_Oauth_ES.png)

   Inserta las URL siguientes en **URI de redireccionamieno de OAuth válidos**, sustituyendo `{{HOST_URL}}`  por la URL base de tu tienda y `{{accountName}}` por el nombre de tu cuenta tal y como se describe en el menú de administración de la tienda:   

      * `https://vtexid.vtex.com.br/VtexIdAuthSiteKnockout/ReceiveAuthorizationCode.ashx`
      * `https://{{HOST_URL}}/api/vtexid/pub/authentication/oauth/authorizationcode`
      * `https://{{accountName}}.myvtex.com/api/vtexid/pub/authentication/oauth/authorizationcode`

4. En la parte inferior de la página, haz clic en el botón `Guardar cambios`.

## 3. Realizar la configuración básica de la aplicación

Por último, debes rellenar algunos datos sobre la aplicación para completar el proceso de registro. En este paso obtendrás el **Client ID** y el **Secreto del cliente** que se utilizarán en la configuración de inicio de sesión con Facebook realizada en el Admin VTEX. Sigue los pasos a continuación:

1. En el menú lateral de Meta for Developers, haz clic en **Configuración de la aplicación** y después en **Básica:**

   ![7-login-fb-es](https://images.ctfassets.net/alneenqid6w5/4rhVhY9V6N117s3XwZ59No/f84756573e40f40e8f94c062e68da397/7-login-fb-es.png)

2. Copia el valor del campo **Identificador de la aplicación**. Debes ingresar este valor en el campo **Client ID** al [configurar el Inicio de sesión con Facebook en el Admin VTEX](/es/tutorial/configurar-inicio-de-sesion-con-facebook-y-google--tutorials_513).
3. En **Clave secreta de aplicación**, haz clic en el botón **Mostrar** y, a continuación, copia el valor del campo. Debes ingresar este valor en el campo **Secreto del cliente** al [configurar el inicio de sesión con Facebook en el Admin VTEX](/es/tutorial/configurar-inicio-de-sesion-con-facebook-y-google--tutorials_513).
4. En el campo **URL de la política de privacidad**, ingresa el link a la política de privacidad de tu tienda.
5. En **Icono de la aplicación (1024 x 1024)**, inserta un ícono de exactamente 1024x1024 píxeles y fondo transparente.
6. Selecciona una **Categoría**. Para tiendas, te sugerimos seleccionar **Compras**.
7. Después, ingresa la **información de contacto del delegado de protección de datos** con los datos de la empresa responsable de la tienda.
8. Haz clic en `Guardar cambios` en la parte inferior de la página.

Después de completar todas estas etapas ya puedes utilizar el **Client ID** y el **Secreto del cliente** obtenidos para configurar el Inicio de sesión con Facebook en tu tienda, tal como se describe en el artículo [Configurar inicio de sesión con Facebook y Google](/es/tutorial/configurar-inicio-de-sesion-con-facebook-y-google--tutorials_513).
