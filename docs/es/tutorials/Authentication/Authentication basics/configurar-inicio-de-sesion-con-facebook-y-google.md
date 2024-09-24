---
title: 'Configurar inicio de sesión con Facebook y Google'
id: tutorials_513
status: PUBLISHED
createdAt: 2017-04-27T22:03:01.743Z
updatedAt: 2023-10-20T19:35:59.221Z
publishedAt: 2023-10-20T19:35:59.221Z
firstPublishedAt: 2017-04-27T23:03:27.844Z
contentType: tutorial
productTeam: Identity
author: authors_84
slugEN: configuring-login-with-facebook-and-google
locale: es
legacySlug: integracion-google-y-facebook-en-smartcheckout, configurar-login-con-facebook-y-google
subcategoryId: 14V5ezEX0cewOMg0o0cYM6
---

En VTEX, no es necesario crear una cuenta o iniciar sesión para realizar una compra. Sin embargo, si el cliente desea editar la información proporcionada en su primera compra, deberá verificar su email.

El comportamiento nativo de la plataforma es ofrecer opciones de inicio de sesión con email y contraseña y con código de acceso al email del cliente. También ofrecemos integraciones opcionales nativas con Google y Facebook que requieren configuración. Esta guía explica los pasos para configurar los proveedores de inicio de sesión:

1. [Obtener credenciales de los proveedores](#obtener-credenciales-de-los-proveedores)
2. [Configurar inicio de sesión con los proveedores](#configurar-inicio-de-sesion-con-los-proveedores)
3. [Validar la configuración](#validar-la-configuracion)

## Obtener credenciales de los proveedores

Antes de configurar nuestra integración de inicio de sesión con Google y Facebook, se deben crear credenciales de OAuth 2.0 (protocolo para la integración) en esos servicios. Para obtenerlas, sigue las instrucciones en los artículos a continuación:

- [Facebook](https://help.vtex.com/es/tutorial/cadastrar-client-id-e-client-secret-para-login-com-facebook)
- [Google](https://help.vtex.com/es/tutorial/cadastrar-client-id-e-client-secret-para-login-com-google)

## Configurar inicio de sesión con los proveedores

Después de realizar la configuración en Facebook y Google, debes configurar la opción de inicio de sesión mediante el proveedor deseado en el Admin VTEX. En ambos casos, debes tener listos el `Client ID` y el `Client Secret` proporcionados por los proveedores.

1. En la barra superior del Admin VTEX, haz clic en el **avatar de tu perfil** que tiene la inicial de tu email.
2. Haz clic en **Configuración de la cuenta > Autenticación**.

  Se te redirigirá a la pestaña **Tienda virtual** de la página **Autenticación**, que lista los métodos de inicio de sesión disponibles en tu tienda.

  ![Lista Autenticación](https://images.ctfassets.net/alneenqid6w5/3Bnb1ifcL7krcXEnAHzxu1/814b27712f00a7a00bcc3c717a3aee5f/autenticacao-es.png)
3. En la fila del proveedor de inicio de sesión deseado, haz clic en `Configurar`.
4. Rellena el formulario con el `Client ID` y el `Secreto del cliente` registrados en la [etapa anterior](#obtener-credenciales-de-los-proveedores) y haz clic en `Guardar`.

  ![Facebook OAuth ES](//images.ctfassets.net/alneenqid6w5/2mWEocn4zdG0BJVMaujzk8/e85e70614c1ff706937104c8f5ec917c/1-login-fb-es.PNG)
5. En la página **Autenticación**, activa el uso del proveedor haciendo clic en el botón de alternancia. 

  ![Lista Autenticación Switch On Highlight](//images.ctfassets.net/alneenqid6w5/4devCJpXnMWF3TV6xMDiUT/7567505995ce1af975d6b5c69159a323/switch_On_highlight_ES.png)

## Validar la configuración

Después de completar la configuración en el Admin VTEX, recomendamos probar el inicio de sesión con el proveedor a través de la URL final que tus usuarios utilizarán para acceder a la tienda. Al probar el inicio de sesión, se mostrarán las opciones de los proveedores activos.
