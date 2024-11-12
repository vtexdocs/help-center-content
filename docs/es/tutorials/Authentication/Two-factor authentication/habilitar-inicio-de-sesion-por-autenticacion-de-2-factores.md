---
title: 'Habilitar inicio de sesión por autenticación de dos factores'
id: 4Ae1fcQi12g8u4SkQKCqWQ
status: CHANGED
createdAt: 2017-11-09T00:46:29.023Z
updatedAt: 2024-11-07T17:23:22.840Z
publishedAt: 2024-03-12T17:52:28.500Z
firstPublishedAt: 2017-11-09T13:09:54.237Z
contentType: tutorial
productTeam: Identity
author: authors_24
slugEN: enabling-2-factor-authentication-login
locale: es
legacySlug: habilitar-inicio-de-sesion-por-autenticacion-de-2-factores
subcategoryId: 4sY1T2qdFehvVmC0tL5xW3
---

La autenticación de dos fatores (2FA) es un método de verificación que aumenta en gran medida la seguridad del inicio de sesión de su tienda. 

Esto porque, en el inicio de sesión, el sistema además de exigir el email y la contraseña exige una clave de acceso (en el caso de VTEX, esta puede ser un código enviado por SMS o generado por aplicación).

Como esa clave se genera durante el inicio de sesión y tiene una validez corta, se vuelve casi imposible que alguien acceda a su tienda utilizando sus datos sin autorización. Sin 2FA, si alguien tiene su email y contraseña puede tener un acceso amplio a la cuenta de su tienda.

>❗ Desde el **16 de noviembre de 2017**, la autenticación de dos factores (2FA) se volvió **obligatoria para todos los emails** en el Admin de VTEX.
>
> 
>
> Sin 2FA, usted **no podrá iniciar sesión** utilizando email y contraseña.
>
> 
>
> Ese requisito obligatorio no aplica para los otros métodos de inicio de sesión (como Google, Facebook y token).

## Cómo habilitar 2FA

Si usted aún no configuró la autenticación de dos factores, cada vez que acceda al Admin utilizando email y contraseña aparecerá una pantalla en la que se ofrece la configuración de 2FA. 

Existen dos opciones de autenticación, a través de: 

- Clave generada por una __aplicación__ de autenticación.
- Clave enviada por mensaje de celular (__SMS__).

![2FA - Select - ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)

>❗ Recomendamos enfáticamente que **elija la opción de autenticación por aplicación**, toda vez que en la autenticación por SMS usted depende de que no haya fallas en el servicio de su operador de telefonía. A través de la aplicación, la clave de acceso siempre estará disponible cuando sea necesaria.

>❗ Si configuró 2FA por SMS y el código está tardando en llegar, posiblemente este problema se deba a su operador de telefonía. Habilite 2FA por aplicación como se explica a continuación.

### Habilitar 2FA por aplicación

Para utilizar una clave generada a través de la aplicación de autenticación:
1. Descargue la aplicación **Google Autenticator** ([App Store](https://itunes.apple.com/br/app/google-authenticator/id388497605?mt=8) / [Google Play](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=pt_BR)). 

![2FA - App Download - ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_2.png)

2. Utilice la aplicación para leer el código QR a través de la cámara del celular.

![mfa código](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_3.jpg)

3. Su cuenta VTEX se agregará a la aplicación, que generará un código de 6 dígitos. Ingrese ese código para finalizar su inicio de sesión.

  *El código de la app se actualiza periódicamente. No es necesario que lo memorice, solo debe consultar la aplicación cuando lo necesite.*

![2FA - App Insert Code - ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_4.png)

>ℹ️ Si usted realiza el inicio de sesión utilizando email y contraseña en el mismo computador, se solicitará la clave de acceso ** cada 3 días**. Cuando eso suceda, basta con consultar el código en la aplicación.

### Habilitar 2FA por SMS

Para utilizar una clave enviada a través de mensaje de texto:

1. Ingrese su número de celular para que le enviemos el código por SMS, no olvide colocar el código de país y área. 

![2FA - SMS Insert Phone - ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_5.png)

2. Usted recibirá un mensaje de texto de VTEX en el celular indicado. Ingrese la clave de 6 dígitos para finalizar su inicio de sesión.

![2FA - SMS Insert Code - ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_6.png)

>⚠️ No podemos garantizar que su operador de telefonía entregue la clave de acceso siempre que sea necesario. En caso de que el mensaje de texto de VTEX no llegue, intente reenviar el código o [habilitar 2FA a través de la aplicación](#habilitar-o-2fa-por-aplicativo).

### 2FA para operadores de televenta

Como en algunas empresas los operadores de televenta no pueden utilizar celulares, los usuarios VTEX que solo tienen el perfil de acceso de televenta no están obligados a habilitar la autenticación de 2 factores.

## Modificar la configuración de 2FA

Para modificar la configuración de la verificación en dos etapas:

1. Acceda a su configuración de usuario, haciendo clic en el círculo con sus iniciales en el lado superior derecho del Admin. 

![2FA - User Initials - ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_7.png)

2. Haga clic en **Verificación en 2 pasos** para ver su configuración.

![2FA - My User - ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_8.png)

3. Usted también puede modificar su configuración siguiendo pasos similares a los anteriores para habilitar 2FA por [SMS](#habilitar-o-2fa-por-sms) y por [aplicación](#habilitar-o-2fa-por-aplicativo).

