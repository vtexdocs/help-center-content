---
title: 'Habilitar inicio de sesión por autenticación de dos factores'
id: 4Ae1fcQi12g8u4SkQKCqWQ
status: PUBLISHED
createdAt: 2017-11-09T00:46:29.023Z
updatedAt: 2024-11-14T18:38:58.853Z
publishedAt: 2024-11-14T18:38:58.853Z
firstPublishedAt: 2017-11-09T13:09:54.237Z
contentType: tutorial
productTeam: Identity
author: authors_24
slugEN: enabling-2-factor-authentication-login
locale: es
legacySlug: habilitar-inicio-de-sesion-por-autenticacion-de-2-factores
subcategoryId: 4sY1T2qdFehvVmC0tL5xW3
---

La autenticación de dos factores (2FA) es un método de autenticación que aumenta significativamente la seguridad del inicio de sesión en tu tienda.

Con 2FA, además de ingresar tu email y contraseña, el sistema solicita una clave adicional, que en VTEX puede ser un código enviado por SMS o generado por una aplicación.

Esta clave se genera cuando inicias sesión y tiene un corto período de validez, lo que dificulta casi por completo que alguien acceda a tu tienda utilizando tus datos sin autorización. Sin la autenticación de dos factores, basta con que alguien sepa tu dirección de email y contraseña para tener acceso a la cuenta de tu tienda.

>❗ La autenticación de dos factores es **obligatoria** en el Admin VTEX.
>
> 
>
> Sin esta verificación, no es posible iniciar sesión utilizando email y contraseña.
>
> 
>
>  La 2FA no es obligatoria para otros métodos de inicio de sesión (Google, Facebook o código de acceso).

>ℹ️ En algunas empresas, los operadores de televentas no pueden utilizar teléfonos celulares. Por lo tanto, los usuarios que tienen únicamente el [rol de televentas (call center operator)](https://help.vtex.com/es/tutorial/perfis-de-acesso-predefinidos--jGDurZKJHvHJS13LnO7Dy#call-center-operator) no están obligados a activar la autenticación de dos factores.

## Activar 2FA

Si aún no has configurado la autenticación de dos factores, notarás que al acceder al Admin con tu email y contraseña aparecerá una pantalla invitándote a configurar 2FA.

Hay dos opciones de autenticación:

- A través de una clave generada por una __aplicación__ de autenticación.
- A través de una clave enviada por mensaje de texto a tu teléfono (__SMS__).

![2FA - Select - PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Authentication/Two-factor%20authentication/habilitar-inicio-de-sesion-por-autenticacion-de-2-factores_1.png)

>❗ Recomendamos encarecidamente que **elijas la opción de autenticación por aplicación**, ya que la autenticación por SMS depende del funcionamiento del operador de telefonía móvil. Con la aplicación, la clave de acceso estará siempre disponible cuando sea necesaria.
>
> Si has configurado 2FA por SMS y el código tarda en llegar, probablemente la causa del problema esté en tu operador de telefonía. Por eso sugerimos [activar 2FA vía aplicación](#habilitar-o-2fa-por-aplicativo).

### Activar 2FA vía aplicación

Para utilizar una clave generada por una aplicación de autenticación sigue los pasos que se indican a continuación:

1. Descarga la aplicación __Google Authenticator__ ([App Store](https://itunes.apple.com/mx/app/google-authenticator/id388497605?mt=8) / [Google Play](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=es_MX)).
  ![2FA - App Download - PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Authentication/Two-factor%20authentication/habilitar-inicio-de-sesion-por-autenticacion-de-2-factores_2.png)
2. Utiliza la aplicación para escanear el código QR con la cámara de tu teléfono. Tu cuenta VTEX se vinculará a la aplicación con un código de 6 dígitos.
![mfa código](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Authentication/Two-factor%20authentication/habilitar-inicio-de-sesion-por-autenticacion-de-2-factores_3.jpg)
3. Inicia sesión ingresando el código que se muestra en la aplicación. Este código se actualiza periódicamente, consúltalo siempre que sea necesario.
  ![2FA - App Insert Code - PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Authentication/Two-factor%20authentication/habilitar-inicio-de-sesion-por-autenticacion-de-2-factores_4.png)

>ℹ️ Si inicias sesión con email y contraseña en la misma computadora, la clave de acceso se solicitará **cada 3 días**. Cuando esto ocurra, consulta el código de la aplicación.

### Activar 2FA por SMS

Para utilizar una clave enviada por SMS sigue los pasos a continuación:

1. Ingresa tu número de teléfono para recibir el código por SMS, incluyendo tanto el código del país como el código de área.

  ![2FA - SMS Insert Phone - PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Authentication/Two-factor%20authentication/habilitar-inicio-de-sesion-por-autenticacion-de-2-factores_5.png)

2. Recibirás un mensaje de texto de VTEX en el teléfono indicado. Ingresa la clave de 6 dígitos para completar el inicio de sesión.

   ![2FA - SMS Insert Code - PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Authentication/Two-factor%20authentication/habilitar-inicio-de-sesion-por-autenticacion-de-2-factores_6.png)

>⚠️ No podemos garantizar que tu operador de telefonía pueda entregarte la clave de acceso cuando la necesites. Si el mensaje de texto de VTEX no llega, intenta reenviar el código o [activa 2FA mediante la aplicación](#habilitar-o-2fa-por-aplicativo).

## Modificar la configuración 2FA

Para cambiar la configuración de la verificación en dos pasos sigue las instrucciones a continuación:

1. En la barra superior del Admin VTEX, haz clic en el avatar de tu perfil, marcado por la inicial de tu email, y luego en **Configuración del usuario**.
2. Haz clic en **Verificación en dos pasos** para acceder a tu configuración.
3. Para cambiar la configuración de 2FA sigue los pasos para activar 2FA por [SMS](#activar-2fa-por-sms) y [aplicación](#activar-2fa-por-aplicacion).

## Recuperar el acceso al Admin VTEX

Si pierdes el acceso al método de autenticación elegido y no puede iniciar sesión, prueba con otro método de inicio de sesión o sigue los pasos del artículo [Restablecer contraseña de acceso al Admin VTEX](https://help.vtex.com/es/tutorial/redefinir-senha-de-acesso-ao-admin-vtex--frequentlyAskedQuestions_531).

Después de ingresar el código de acceso y redefinir tu contraseña, podrás cambiar el método de autenticación en dos pasos siguiendo las instrucciones de esta guía.
