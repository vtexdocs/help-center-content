---
title: 'Configurar inicio de sesión con Facebook y Google'
id: tutorials_513
status: PUBLISHED
createdAt: 2017-04-27T22:03:01.743Z
updatedAt: 2025-02-28T15:23:10.253Z
publishedAt: 2025-02-28T15:23:10.253Z
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

- [Facebook](/es/tutorial/cadastrar-client-id-e-client-secret-para-login-com-facebook)
- [Google](/es/tutorial/cadastrar-client-id-e-client-secret-para-login-com-google)

## Configurar inicio de sesión con los proveedores

Después de realizar la configuración en Facebook y Google, debes configurar la opción de inicio de sesión mediante el proveedor deseado en el Admin VTEX. En ambos casos, debes tener listos el `Client ID` y el `Client Secret` proporcionados por los proveedores.

1. En la barra superior del Admin VTEX, haz clic en el **avatar de tu perfil** que tiene la inicial de tu email.
2. Haz clic en **Configuración de la cuenta > Autenticación**.

  Se te redirigirá a la pestaña **Tienda virtual** de la página **Autenticación**, que lista los métodos de inicio de sesión disponibles en tu tienda.

  ![Lista Autenticación](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Authentication/Authentication%20basics/configurar-inicio-de-sesion-con-facebook-y-google_1.png)
3. En la fila del proveedor de inicio de sesión deseado, haz clic en `Configurar`.
4. Rellena el formulario con el `Client ID` y el `Secreto del cliente` registrados en la [etapa anterior](#obtener-credenciales-de-los-proveedores) y haz clic en `Guardar`.

  ![Facebook OAuth ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Authentication/Authentication%20basics/configurar-inicio-de-sesion-con-facebook-y-google_2.PNG)
5. En la página **Autenticación**, activa el uso del proveedor haciendo clic en el botón de alternancia. 

  ![Lista Autenticación Switch On Highlight](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Authentication/Authentication%20basics/configurar-inicio-de-sesion-con-facebook-y-google_3.png)

## Validar la configuración

Después de completar la configuración en el Admin VTEX, recomendamos probar el inicio de sesión con el proveedor a través de la URL final que tus usuarios utilizarán para acceder a la tienda. Al probar el inicio de sesión, se mostrarán las opciones de los proveedores activos.
