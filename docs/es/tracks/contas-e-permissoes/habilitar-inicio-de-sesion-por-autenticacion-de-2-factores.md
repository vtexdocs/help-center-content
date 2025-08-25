---
title: 'Habilitar autenticación de dos factores (2FA)'
id: 1ccQYubR9DvRJ08RgO8JW8
status: PUBLISHED
createdAt: 2020-01-07T21:12:36.958Z
updatedAt: 2024-08-22T14:02:07.053Z
publishedAt: 2024-08-22T14:02:07.053Z
firstPublishedAt: 2020-01-13T14:33:33.691Z
contentType: trackArticle
productTeam: Identity
slugEN: enabling-2-factor-authentication-login
locale: es
trackId: 5PxyAgZrtiYlaYZBTlhJ2A
trackSlugEN: contas-e-permissoes
---

Con la verificación en dos etapas, también conocida como autenticación de dos factores o 2FA, puede agregar una capa adicional de seguridad a su cuenta para protegerla en caso de que su contraseña sea revelada a terceros. 

Después de habilitar 2FA, usted podrá iniciar sesión en su tienda utilizando: 

- Su contraseña (*algo que usted sabe*)
- Su celular (*algo que posee*)

Su celular será utilizado para generar una clave de validez corta cuando realice el inicio de sesión. De esta forma, se torna casi imposible que alguien no autorizado acceda a su tienda con sus datos.  

## Cómo habilitar 2FA

Si la verificación en dos etapas no está habilitada, solicitamos su configuración siempre que un usuario realiza el inicio de sesión utilizando email y contraseña.

Hay dos opciones de autenticación:
- __App Google__ (clave generada por aplicación de autenticación)
- __Mensaje SMS__ (clave enviada por mensaje de texto)

![2FA - Select - ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/contas-e-permissoes/habilitar-inicio-de-sesion-por-autenticacion-de-2-factores_1.png)

> ⚠️ Recomendamos el uso de la [aplicación de autenticación](#habilitar-o-2fa-por-aplicativo) para que las fallas del servicio de su operador de telefonía no impidan su inicio de sesión. A través de la aplicación, la clave de acceso siempre estará disponible para que la utilice.

> ℹ️ Debido a que algunas empresas restringen el uso de celulares a los operadores de televenta, los usuarios que tienen el [ perfil de acceso de televentas](https://help.vtex.com/pt/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc#call-center-operator) no están obligados a habilitar 2FA cuando inician sesión utilizando el email y la contraseña.

### Habilitar 2FA por aplicación

Para utilizar una clave generada a través de la aplicación de autenticación:
1. Descargue la aplicación **Google Autenticator** ([App Store](https://itunes.apple.com/br/app/google-authenticator/id388497605?mt=8) / [Google Play](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=pt_BR)). 

![2FA - App Download - ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/contas-e-permissoes/habilitar-inicio-de-sesion-por-autenticacion-de-2-factores_2.png)

2. Utilice la aplicación para leer el código QR a través de la cámara del celular.

![2FA - App QR Code - ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/contas-e-permissoes/habilitar-inicio-de-sesion-por-autenticacion-de-2-factores_3.png)

3. Su cuenta VTEX se agregará a la aplicación, que generará un código de 6 dígitos. Ingrese ese código para finalizar su inicio de sesión.

  *El código de la app se actualiza periódicamente. No es necesario que lo memorice, solo debe consultar la aplicación cuando lo necesite.*

![2FA - App Insert Code - ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/contas-e-permissoes/habilitar-inicio-de-sesion-por-autenticacion-de-2-factores_4.png)

> ℹ️ Si usted realiza el inicio de sesión utilizando email y contraseña en el mismo computador, se solicitará la clave de acceso ** cada 3 días**. Cuando eso suceda, basta con consultar el código en la aplicación.

### Habilitar 2FA por SMS

Para utilizar una clave enviada a través de mensaje de texto:

1. Ingrese su número de celular para que le enviemos el código por SMS, no olvide colocar el código de país y área. 

![2FA - SMS Insert Phone - ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/contas-e-permissoes/habilitar-inicio-de-sesion-por-autenticacion-de-2-factores_5.png)

2. Usted recibirá un mensaje de texto de VTEX en el celular indicado. Ingrese la clave de 6 dígitos para finalizar su inicio de sesión.

![2FA - SMS Insert Code - ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/contas-e-permissoes/habilitar-inicio-de-sesion-por-autenticacion-de-2-factores_6.png)

> ⚠️ No podemos garantizar que su operador de telefonía entregue la clave de acceso siempre que sea necesario. En caso de que el mensaje de texto de VTEX no llegue, intente reenviar el código o [habilitar 2FA a través de la aplicación](#habilitar-o-2fa-por-aplicativo).

## Modificar la configuración de 2FA

Para modificar la configuración de la verificación en dos etapas:

1. Acceda a su configuración de usuario, haciendo clic en el círculo con sus iniciales en el lado superior derecho del Admin. 

![2FA - User Initials - ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/contas-e-permissoes/habilitar-inicio-de-sesion-por-autenticacion-de-2-factores_7.png)

2. Haga clic en **Verificación en 2 pasos** para ver su configuración.

![2FA - My User - ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/contas-e-permissoes/habilitar-inicio-de-sesion-por-autenticacion-de-2-factores_8.png)

3. Usted también puede modificar su configuración siguiendo pasos similares a los anteriores para habilitar 2FA por [SMS](#habilitar-o-2fa-por-sms) y por [aplicación](#habilitar-o-2fa-por-aplicativo).

