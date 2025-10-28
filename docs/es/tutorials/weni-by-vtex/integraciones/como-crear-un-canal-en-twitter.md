---
title: 'Cómo crear un canal en Twitter'
id: 105ZDpGE4db4bOwN4IGjEL
status: PUBLISHED
createdAt: 2025-09-15T14:14:31.530Z
updatedAt: 2025-10-03T14:20:33.673Z
publishedAt: 2025-10-03T14:20:33.673Z
firstPublishedAt: 2025-10-03T14:20:33.673Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: how-to-create-a-channel-on-twitter
legacySlug: como-crear-un-canal-en-twitter
locale: es
subcategoryId: 7e9LaCixVcvflzgWkxlftd
---

Para crear un bot de Twitter, primero necesitas solicitar acceso a las API de Twitter para mensajes directos. El proceso de solicitud es breve, y deberás explicar el propósito de tu bot y la funcionalidad que proporcionará.

Ten en cuenta que puedes solicitarlo en cualquier nivel; una cuenta Sandbox (entornos de desarrollo) es suficiente si planeas que tu bot funcione con una única cuenta.

Una vez que aprueben tu cuenta de desarrollador, Twitter enviará un correo electrónico de bienvenida. Ahora puedes crear tu aplicación y conectarla.

**Etapas**

1. El primer paso es crear tu aplicación. Te pedirán el nombre de la aplicación, la descripción y la URL. Complétalos según la funcionalidad del bot que estás construyendo.

2. Luego, deberás crear un entorno de desarrollo para que tu aplicación se ejecute. Deberás crear un entorno para la **Account Activity API / Sandbox**. Puedes nombrarlo como desees; recomendamos ""producción."" Asegúrate de seleccionar la aplicación que creaste en esta etapa.
Este nombre se usará al conectar la cuenta en la Plataforma Weni.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/integraciones/como-crear-un-canal-en-twitter_1.png)

4. Ahora necesitas crear las claves y tokens para tu aplicación, que serán necesarios al crear tu canal. Vuelve a tu aplicación y selecciona la pestaña **Keys and****Tokens**. Haz clic en **Regenerar** en las secciones **Consumer API Keys** y **Access token \& access token secret**. Las claves y tokens deben generarse con los permisos de ""Leer, Escribir y Mensajes Directos"".

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/integraciones/como-crear-un-canal-en-twitter_2.png)

Asegúrate de que tu cuenta esté habilitada para recibir mensajes directos de cualquier persona. Puedes hacerlo en la configuración de seguridad/privacidad de Twitter.#### Conectando en la Plataforma

5. Para crear el canal en la plataforma, dentro de tu proyecto ve a **Aplicaciones > Descubrimiento** en la sección de **Canales de Comunicación** y agrégalo haciendo clic en el ""\+"".

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/integraciones/como-crear-un-canal-en-twitter_3.png)

6. Luego, haz clic en la pestaña **Mis Aplicaciones**; la aplicación estará en la sección de **Aplicaciones Instaladas**. Completa la página con los datos recopilados anteriormente, y no olvides ingresar el Environment Name tal como fue configurado en el paso 2\. Al terminar, haz clic en **Enviar**, y tu canal estará conectado.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/integraciones/como-crear-un-canal-en-twitter_4.png)

Tu canal ahora está conectado, y puedes probar el envío y recepción de mensajes directos.
