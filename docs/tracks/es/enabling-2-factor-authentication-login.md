---
title: 'Habilitar autenticación de dos factores (2FA)'
id: 1ccQYubR9DvRJ08RgO8JW8
status: PUBLISHED
createdAt: 2020-01-07T21:12:36.958Z
updatedAt: 2021-03-22T20:46:32.393Z
publishedAt: 2021-03-22T20:46:32.393Z
firstPublishedAt: 2020-01-13T14:33:33.691Z
contentType: trackArticle
productTeam: Identity
slug: habilitar-inicio-de-sesion-por-autenticacion-de-2-factores
trackId: 5PxyAgZrtiYlaYZBTlhJ2A
trackSlugES: contas-e-permissoes
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

![2FA - Select - ES](//images.ctfassets.net/alneenqid6w5/3WRZKKU8LuW00UkeoUoIEY/e608a2a64a982983619918e515bbdb73/2FA_-_Select_-_ES.png)

<div class="alert alert-warning">
Recomendamos el uso de la <a href="#habilitar-o-2fa-por-aplicativo">aplicación de autenticación</a> para que las fallas del servicio de su operador de telefonía no impidan su inicio de sesión. A través de la aplicación, la clave de acceso siempre estará disponible para que la utilice.

</div>

<div class="alert alert-info">
Debido a que algunas empresas restringen el uso de celulares a los operadores de televenta, los usuarios que tienen el <a href="https://help.vtex.com/pt/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc#call-center-operator" target="_blank"> perfil de acceso de televentas</a> no están obligados a habilitar 2FA cuando inician sesión utilizando el email y la contraseña.
</div>

### Habilitar 2FA por aplicación

Para utilizar una clave generada a través de la aplicación de autenticación:
1. Descargue la aplicación **Google Autenticator** ([App Store](https://itunes.apple.com/br/app/google-authenticator/id388497605?mt=8) / [Google Play](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=pt_BR)). 

![2FA - App Download - ES](//images.ctfassets.net/alneenqid6w5/icTTRRH1WH7FiiH0gLnxb/69d034a2d68aad9a59febf1e29fc2b5b/2FA_-_App_Download_-_ES.png)

2. Utilice la aplicación para leer el código QR a través de la cámara del celular.

![2FA - App QR Code - ES](//images.ctfassets.net/alneenqid6w5/1Nyt9wLnfYG5z75tUhinQ6/fde55b590db79ef108e5f1d508e18d3a/2FA_-_App_QR_Code_-_ES.png)

3. Su cuenta VTEX se agregará a la aplicación, que generará un código de 6 dígitos. Ingrese ese código para finalizar su inicio de sesión.

  *El código de la app se actualiza periódicamente. No es necesario que lo memorice, solo debe consultar la aplicación cuando lo necesite.*

![2FA - App Insert Code - ES](//images.ctfassets.net/alneenqid6w5/NUKFyLNA9fWsBewD445Uy/5327fb40f54e16cd1f63abf16f7da89d/2FA_-_App_Insert_Code_-_ES.png)

<div class="alert alert-info">
Si usted realiza el inicio de sesión utilizando email y contraseña en el mismo computador, se solicitará la clave de acceso <strong> cada 3 días</strong>. Cuando eso suceda, basta con consultar el código en la aplicación.
</div>

### Habilitar 2FA por SMS

Para utilizar una clave enviada a través de mensaje de texto:

1. Ingrese su número de celular para que le enviemos el código por SMS, no olvide colocar el código de país y área. 

![2FA - SMS Insert Phone - ES](//images.ctfassets.net/alneenqid6w5/116sok6Zd8sq69UPSSzs1w/283dc2bac7fe017b977ea1c801364837/2FA_-_SMS_Insert_Phone_-_ES.png)

2. Usted recibirá un mensaje de texto de VTEX en el celular indicado. Ingrese la clave de 6 dígitos para finalizar su inicio de sesión.

![2FA - SMS Insert Code - ES](//images.ctfassets.net/alneenqid6w5/6KbuUvMFupmJEMN6kTOZ4E/dfcce0514f879ab5a2121d13579c82cb/2FA_-_SMS_Insert_Code_-_ES.png)

<div class="alert alert-warning">
No podemos garantizar que su operador de telefonía entregue la clave de acceso siempre que sea necesario. En caso de que el mensaje de texto de VTEX no llegue, intente reenviar el código o <a href="#habilitar-o-2fa-por-aplicativo">habilitar 2FA a través de la aplicación</a>.
</div>

## Modificar la configuración de 2FA

Para modificar la configuración de la verificación en dos etapas:

1. Acceda a su configuración de usuario, haciendo clic en el círculo con sus iniciales en el lado superior derecho del Admin. 

![2FA - User Initials - ES](//images.ctfassets.net/alneenqid6w5/3ktWD1KvDLV499l40SxUc2/21a91ab5aa3cb4c24c2cdc4fbcdba433/2FA_-_User_Initials_-_ES.png)

2. Haga clic en **Verificación en 2 pasos** para ver su configuración.

![2FA - My User - ES](//images.ctfassets.net/alneenqid6w5/O4jBeKN2RTMS0bKOWVJVK/cce01cd4ece9a83cfae7d8fdbdf9b286/2FA_-_My_User_-_ES.png)

3. Usted también puede modificar su configuración siguiendo pasos similares a los anteriores para habilitar 2FA por [SMS](#habilitar-o-2fa-por-sms) y por [aplicación](#habilitar-o-2fa-por-aplicativo).

