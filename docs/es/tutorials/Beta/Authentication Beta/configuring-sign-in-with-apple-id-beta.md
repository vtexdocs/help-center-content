---
title: 'Configurar inicio de sesión con Apple ID (Beta)'
id: 5qprgEmHYfPTghnYwm0KrV
status: PUBLISHED
createdAt: 2023-09-05T17:38:23.553Z
updatedAt: 2023-09-05T18:22:20.252Z
publishedAt: 2023-09-05T18:22:20.252Z
firstPublishedAt: 2023-09-05T18:22:20.252Z
contentType: tutorial
productTeam: Identity
author: 1malnhMX0vPThsaJaZMYm2
slug: configurar-inicio-de-sesion-con-apple-id-beta
locale: es
legacySlug: configurar-inicio-de-sesion-con-apple-id-beta
subcategoryId: 5uXA9a0laSLMkfbv6jQRDS
---

>ℹ️ Esta funcionalidad se encuentra en fase beta cerrada, lo que significa que por el momento solo tienen acceso a ella algunos clientes seleccionados. Si estás interesado en implementarla en el futuro, ponte en contacto con [nuestro Soporte](https://help.vtex.com/es/support).

En VTEX, no es necesario crear una cuenta o iniciar sesión para realizar una compra. Sin embargo, si el cliente desea editar los datos informados durante la primera compra, debe comprobar que el email en cuestión le pertenece.

La funcionalidad nativa de la plataforma ofrece opciones de inicio de sesión con email y contraseña y con código de acceso enviado por email al cliente. También ofrecemos integraciones opcionales nativas con Apple ID, [Google y Facebook](https://help.vtex.com/es/tutorial/integracion-google-y-facebook-en-smartcheckout--tutorials_513) que se pueden utilizar después de configurarlas. Esta guía explica la configuración necesaria para activar el inicio de sesión con [Apple ID](https://support.apple.com/es-mx/apple-id) en tu tienda:

- [Prerrequisitos](#prerrequisitos)
- [Registrarse en Apple](#registrarse-en-apple)
- [Rellenar la información de autenticación](#rellenar-la-informacion-de-autenticacion)
- [Probar el inicio de sesión con Apple ID](#probar-el-inicio-de-sesion-con-apple-id)
- [Limitaciones](#limitaciones)

## Prerrequisitos

Antes de empezar a configurar el inicio de sesión con Apple ID en tu tienda, debes tener un [Apple ID](https://support.apple.com/es-mx/apple-id) y estar inscrito en el [Apple Developer Program](https://developer.apple.com/programs/).

## Registrarse en Apple

Para configurar la integración de inicio de sesión con Apple, debes crear credenciales de OAuth 2.0 (protocolo utilizado para la integración) en el servicio. Para crear las credenciales, sigue las instrucciones de nuestra guía para desarrolladores [Registering credentials to set up Apple ID login](https://developers.vtex.com/docs/guides/registering-credentials-to-set-up-apple-id-login).

## Rellenar la información de autenticación

Después de registrarte en Apple, debes activar la opción de inicio de sesión con ese proveedor en tu tienda siguiendo las instrucciones a continuación. Debes tener listas las credenciales obtenidas en el paso de registro.

1. En la barra superior del Admin VTEX, haz clic en el **avatar de tu perfil** que tiene la inicial de tu email.
2. Haz clic en **Configuración de la cuenta > Autenticación**.

    Se te redirigirá a la pestaña **Tienda virtual** de la página **Autenticación**, que lista los métodos de inicio de sesión disponibles en tu tienda.

3. En la fila **Apple**, haz clic en `Configurar`.
4. Rellena los campos de configuración con las [credenciales registradas previamente en Apple](#registrarse-en-apple):

    - **Key ID:** identificación de clave privada generada por Apple que VTEX utilizará para generar el [OAuth client secret](https://www.oauth.com/oauth2-servers/client-registration/client-id-secret/).
    - **Team ID:** identificación de tu equipo en[ Apple Developer Portal](https://developer.apple.com/).
    - **Service ID:** identificación de tu servicio en Apple, que se utilizará como el [OAuth `client_id`](https://www.oauth.com/oauth2-servers/client-registration/client-id-secret/).
    - **P8 certificate:** clave privada guardada en un archivo de texto en formato `.p8`. Apple lo genera una sola vez durante la creación de la clave.

    Para más información sobre cómo obtener estas credenciales, consulta nuestra guía para desarrolladores [Registering credentials to set up Apple ID login](https://developers.vtex.com/docs/guides/registering-credentials-to-set-up-apple-id-login).

    ![apple-id-setup-es](https://images.ctfassets.net/alneenqid6w5/3llgZRzP1yyUiqgZjagXyT/83719fc4ecc831b785e06d485eb13188/apple-id-setup-pt.png)

5. Haz clic en `Guardar`.
6. Haz clic en `Proveedores de tienda virtual` para volver a la página anterior.
7. Haz clic en el _botón de alternancia_ <i class="fas fa-toggle-on"></i> para activar el uso de Apple como proveedor de inicio de sesión.

## Probar el inicio de sesión con Apple ID

Ahora que todo está listo, puedes probar la configuración. Recomendamos que realices las pruebas con la URL final que tus usuarios utilizarán para acceder a tu tienda. Al intentar iniciar sesión, la opción de utilizar el Apple ID debe estar disponible.

1. Accede al sitio web de tu tienda y haz clic en `Entrar` para iniciar sesión.
2. Haz clic en `Entrar con Apple`. Se te redirigirá a la pantalla de inicio de sesión de Apple.
3. Ingresa tu ID y contraseña de Apple.
4. Completa la autenticación de dos factores, si se te solicita.
5. Escoge si deseas compartir tu email con la aplicación u [Ocultar mi correo](https://support.apple.com/es-mx/HT210425) y haz clic en `Continuar`. Recomendamos compartir el email, ya que hay [limitaciones](#limitaciones) respecto al email oculto en VTEX.

>ℹ️ La opción de compartir u ocultar el email solo aparece la primera vez que se accede a la tienda con el Apple ID. Después, solo es necesario hacer clic en `Continuar`. Para redefinir la opción de compartir el email, accede a la [página de administración de Apple ID](https://appleid.apple.com/mx/), revoca la autorización de la tienda y vuelve a iniciar sesión.

Luego de eso, estarás autenticado en la tienda.

## Limitaciones

Ten en cuenta las limitaciones actuales del inicio de sesión con Apple ID en tiendas VTEX:

- Message Center no es compatible con emails de usuarios Apple; en otras palabras: los emails configurados en la herramienta no se enviarán a usuarios que inicien sesión con un Apple ID.
- Si el usuario escoge la opción de Apple [Ocultar mi correo](https://support.apple.com/es-mx/HT210425), VTEX generará una nueva cuenta cada vez que el usuario inicie sesión.

    Esto significa que si alguien inicia sesión con un email y contraseña primero, realiza un pedido y luego inicia sesión con un Apple ID que tiene la opción de ocultar el email activada, VTEX creará una cuenta separada. La nueva cuenta no tendrá relación con la cuenta original y no permitirá acceder al historial de pedidos anteriores o a otra información del usuario. Esta acción no se puede deshacer.
