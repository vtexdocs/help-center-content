---
title: 'Configurar recuperación de contraseña por SMS'
id: 4MBZmPN2GSBNFooa9la555
status: ARCHIVED
createdAt: 2019-03-07T21:02:11.023Z
updatedAt: 2024-05-22T13:29:09.953Z
publishedAt: 
firstPublishedAt: 2019-03-07T21:04:24.196Z
contentType: tutorial
productTeam: Post-purchase
author: 5mp4SUVpZYa02A8QOqYySu
slugEN: setting-up-sms-password-recovery
locale: es
legacySlug: 
subcategoryId: 63DHe3VQEEE6Uuua8gIs2M
---

En casos de [pérdida de contraseña](/tutorial/como-recuperar-la-contrasena?locale=es), es necesario enviar un código temporal para que el usuario acceda a la plataforma y registre una nueva contraseña. El envío de este mensaje se puede hacer por correo electrónico, pero también por SMS.

En el módulo Central de Mensajes, usted puede personalizar templates de SMS con el contenido de la elección del usuario.

Sin embargo, es importante resaltar que cada tipo de template tiene sus particularidades. Los templates de SMS, por ejemplo, no aceptan título, imágenes o salto de línea.

Dicho esto, eche un vistazo al paso a paso de cómo configurar esta modalidad:

1. Acceda a la __Central de Mensajes__.
2. Haga clic en __Templates__.

  ![5NrtBpFRTxInFl4aY2FrVz-es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)

3. Haga clic en el template __Password Recovery__.
4. Haga clic en la pestaña __SMS__;
5. Seleccione la opción __"Activar envío de SMS?"__.

  ![password-recovery-sms-tab-es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_2.gif)

  *En el momento en que el usuario hace clic en "Activar envío de SMS", la plataforma muestra las demás configuraciones de envío.*

6. Seleccione el __remitente__ Movile SMS.
7. Rellene el campo __Destination__ con la variable `{{_accountInfo.Telephone}}`.
8. Rellene el campo __Message Text__ con el contenido del mensaje. Las informaciones `Nombre: {{nombre}}`, `Login: {{login}}` y `Contraseña: {{contraseña}}` son esenciales.

  ![password-recovery-sms-fields-es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_3.png)

9. Revise el contenido del SMS en __Preview__.
10. Haga clic en __Guardar__.

¡Listo, SMS configurado! No olvide hacer clic en guardar para conservar los cambios recién realizados.
