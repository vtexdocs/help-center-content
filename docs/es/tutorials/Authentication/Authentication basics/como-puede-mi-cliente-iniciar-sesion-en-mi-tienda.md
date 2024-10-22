---
title: '¿Cómo puede mi cliente iniciar sesión en mi tienda?'
id: 3FCNpwbpZe0U4auiI4CC0C
status: PUBLISHED
createdAt: 2018-10-15T21:25:25.230Z
updatedAt: 2021-10-19T16:41:58.408Z
publishedAt: 2021-10-19T16:41:58.408Z
firstPublishedAt: 2018-10-15T21:30:09.527Z
contentType: tutorial
productTeam: Identity
author: authors_59
slugEN: how-can-my-customer-login-to-my-store
locale: es
legacySlug: como-puede-mi-cliente-iniciar-sesion-en-mi-tienda
subcategoryId: 14V5ezEX0cewOMg0o0cYM6
---

Hay algunas situaciones en las que el cliente de su tienda debe iniciar sesión para poder ver información personalizada. A continuación, enumeramos los escenarios más comunes:

- Acceso al área de pedidos del cliente (__Meus Pedidos__);
- Acceso a los datos de registro del cliente;
- Acceso a tiendas B2B;
- Acceso a las tiendas B2C con precios diferenciados para un grupo de clientes.

El objetivo de este artículo es mostrar cómo el cliente de su tienda debe hacer login en una tienda VTEX.

## Tipos de login

Al hacer clic en un enlace para autenticarse, el cliente verá la pantalla de login.

![vtex-id-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Authentication/Authentication basics/como-puede-mi-cliente-iniciar-sesion-en-mi-tienda_1.png)

Hay tres formas estándar de entrar en una tienda VTEX:

1. [__Recibir una clave de acceso rápido por email__](#recibir-una-clave-de-acceso-rapido-por-email);
2. [__Hacer login con email y contraseña__](#hacer-login-con-email-y-contrasena);
3. [__Inicio de sesión con redes sociales__](#inicio-de-sesion-con-redes-sociales).

### Recibir una clave de acceso rápido por email

En este tipo de login se envía __un token de acceso para el e-mail del usuario para que pueda autenticarse__.

Para que el cliente inicie sesión por este método, debe seguir los pasos abajo:

1. En la pantalla de inicio de sesión, el usuario debe hacer clic en __Recibir clave de acceso rápido por email__.
2. En la pantalla siguiente, el usuario debe rellenar su correo electrónico y hacer clic en el botón __Confirmar__![fill-mail-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Authentication/Authentication basics/como-puede-mi-cliente-iniciar-sesion-en-mi-tienda_2.png)
3. __Un token de acceso será enviado al email informado en el paso anterior__. Si el cliente no ha recibido el e-mail, pídale que compruebe si la ha introducido correctamente. Además, es necesario que el cliente verifique la basura electrónica para garantizar que la clave de acceso no haya caído en el filtro de *spam*. El token tiene 6 números. ![code-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Authentication/Authentication basics/como-puede-mi-cliente-iniciar-sesion-en-mi-tienda_3.png)
4. Vuelva a la pantalla de inicio de sesión y __escriba la clave de acceso__ recibida en el paso anterior y haga clic en __Entrar__. ![fill-access-token-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Authentication/Authentication basics/como-puede-mi-cliente-iniciar-sesion-en-mi-tienda_4.png)

### Hacer login con email y contraseña

Este tipo de login __solicita email y contraseña__ para que el cliente pueda autenticarse.

- Si el cliente ya tiene email y contraseña, simplemente hay que hacer clic en __Entrar con email y contraseña__, llenar el email, llenar la contraseña y hacer clic en __Entrar__.

- Si el cliente necesita __registrar una contraseña__, debe seguir los pasos abajo:

1. En la pantalla de inicio de sesión, el usuario debe hacer clic en __Entrar con email y contraseña__.
2. En la pantalla siguiente, debe hacer clic en __No tiene una contraseña? Registrela ahora__![register-password-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Authentication/Authentication basics/como-puede-mi-cliente-iniciar-sesion-en-mi-tienda_5.png)
3. El usuario debe llenar su email y hacer clic en el botón __Confirmar__![fill-mail-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Authentication/Authentication basics/como-puede-mi-cliente-iniciar-sesion-en-mi-tienda_6.png)
4. En la pantalla siguiente, debe escribir su nueva contraseña en los campos __Nueva contraseña__ y __Confirmar nueva contraseña__ y, a continuación, hacer clic en el botón __Registrar nueva contraseña__![register-new-password-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Authentication/Authentication basics/como-puede-mi-cliente-iniciar-sesion-en-mi-tienda_7.png)
5. __Un token de acceso será enviado al email informado en el paso anterior__. Si el cliente no ha recibido el e-mail, pídale que compruebe si lo ha introducido correctamente. Además, es necesario que el cliente verifique la basura electrónica para garantizar que la clave de acceso no haya caído en el filtro de *spam*. El token tiene 6 números. ![code-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Authentication/Authentication basics/como-puede-mi-cliente-iniciar-sesion-en-mi-tienda_8.png)
6. Vuelva a la pantalla de inicio de sesión y __escriba la clave de acceso__ recibida en el paso anterior y haga clic en __Cambiar contraseña__ ![change-password-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Authentication/Authentication basics/como-puede-mi-cliente-iniciar-sesion-en-mi-tienda_9.png)   

### Inicio de sesión con redes sociales

Se puede incluir opciones de inicio de sesión utilizando su cuenta de Google o Facebook. Para saber cómo incluir estas opciones, lea el artículo [Configurar inicio de sesión con Facebook y Google](https://help.vtex.com/es/tutorial/configuring-login-with-facebook-and-google--tutorials_513).

