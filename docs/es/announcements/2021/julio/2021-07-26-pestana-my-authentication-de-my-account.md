---
title: 'Pestaña My Authentication de My Account'
id: 5OETzDR8d5qt13atEBxsB9
status: PUBLISHED
createdAt: 2021-07-26T14:25:34.550Z
updatedAt: 2021-09-27T20:51:42.279Z
publishedAt: 2021-09-27T20:51:42.279Z
contentType: updates
productTeam: Identity
author: 4ubliktPJIsvyl1hq91RdK
slugEN: 2021-07-26-my-authentication-section-in-my-account
locale: es
legacySlug: pestana-my-authentication-de-my-account
announcementImageID: 'undefined'
announcementSynopsisES: 'My Authentication es una pestaña de My Account que permite gestionar contraseñas y sesiones de acceso.'
---

My Authentication es una pestaña que aparece en el panel de My Account dentro de la tienda y está disponible en todas las cuentas VTEX.

> ❗ Este cambio afectará a todas las tiendas VTEX. Debido a que el cambio interfiere en algunos componentes de la interfaz de usuario de la tienda, es necesario realizar cambios manuales en la configuración de la tienda antes de la fecha límite del 29 de septiembre.

## ¿Qué cambia?

En esta pestaña los usuarios podrán gestionar su contraseña. También es posible gestionar las sesiones de inicio de sesión, lo que permite al usuario cancelar otras sesiones de forma remota. Encontrará más detalles sobre el uso de la pestaña en la sección [Autenticación del artículo Configurar My Account](/es/docs/tutorials/como-funciona-mi-cuenta).

![My Authentication app ES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/announcements/2021/julio/2021-07-26-pestana-my-authentication-de-my-account_1.png)

![My Authentication Session Management ES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/announcements/2021/julio/2021-07-26-pestana-my-authentication-de-my-account_2.png)

El 29 de septiembre también se eliminará el componente de gestión de contraseña del perfil de usuario para evitar duplicidades. Las siguientes imágenes muestran ejemplos de una página de perfil de usuario con y sin el componente de gestión de contraseña.

![My Account with password ES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/announcements/2021/julio/2021-07-26-pestana-my-authentication-de-my-account_3.png)

![My Account no password ES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/announcements/2021/julio/2021-07-26-pestana-my-authentication-de-my-account_4.png)

## ¿Por qué hicimos este cambio?

La funcionalidad de gestión de sesiones le permite proporcionar más seguridad a los usuarios de la tienda y será importante para implementar futuros cambios en la plataforma. Los cambios futuros incluyen ofrecer sesiones de mayor duración y la renovación automática de la sesión. Se reubicará el componente de gestión de contraseña en My Authentication porque creemos que tiene más sentido asignar esta funcionalidad a la pestaña en lugar de a la sección de perfil de usuario.

Para facilitar la transición, se hará en dos pasos:

1. Ahora se contará con la opción de habilitar la pestaña para que se muestre en la interfaz de usuario de la tienda. Además, el componente de cambio de contraseña estará disponible tanto en el perfil del usuario como en la pestaña.
2. El 29 de septiembre se habilitará forzosamente la pestaña en todas las cuentas y se eliminará el componente de cambio de contraseña en el perfil del usuario.

En ese intervalo entre las dos etapas, tendrá tiempo de hacer las modificaciones necesarias para que la pestaña funcione correctamente.

## ¿Qué se necesita hacer?

Ahora que My Authentication está disponible, debe hacer visible la pestaña en el perfil de usuario de su tienda.

Debido a que la habilitación de la pestaña inserta un elemento en la interfaz de usuario de la tienda, puede requerir una personalización manual de apariencia antes de ser visible públicamente para seguir la identidad visual de la tienda. Antes de hacer que la pestaña sea visible públicamente en la tienda, puede acceder a ella a través de una URL y decidir si necesita personalización.

- Si su tienda es VTEX IO, utilice la dirección `https://{account}.myvtex.com/account#/authentication`, sustituyendo `{account}` por el nombre de la cuenta.
- Si su tienda no usa VTEX IO, utilice la dirección `https://{account}.vtexcommercestable.com.br/_secure/account#/authentication`, sustituyendo `{account}` por el nombre de la cuenta.

> ⚠️ Antes de acceder a la pestaña de autentificación a través de la URL es necesario acceder a la tienda con una cuenta de usuario.

Para realizar la personalización de la apariencia de la pestaña, pida al desarrollador que consulte el artículo [My Authentication Customization Guide using CMS](https://developers.vtex.com/vtex-rest-api/docs/ui-customization-my-authentication), para las tiendas que no usan VTEX IO, o el artículo [My Authentication Customization Guide on VTEX IO](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-my-authentication), para las tiendas de VTEX IO, en nuestro portal del desarrollador.

Para que la pestaña My Authentication sea visible públicamente en su tienda:

1. En el panel lateral izquierdo del Admin, vaya a la sección **CONFIGURACIÓN DE LA CUENTA**.
2. Haga clic en **Apps**.
3. Haga clic en **Mis aplicaciones**.  
![My apps menu ES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/announcements/2021/julio/2021-07-26-pestana-my-authentication-de-my-account_5.png)
4. Vaya a la app **My Account** y haga clic en `Configuración`.  
![My apps installed ES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/announcements/2021/julio/2021-07-26-pestana-my-authentication-de-my-account_6.png)
5. En la sección **AUTHENTICATION** de la configuración de la app, marque la casilla `Visible`.
6. Haga clic en `Guardar`.
![My Authentication visible setting ES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/announcements/2021/julio/2021-07-26-pestana-my-authentication-de-my-account_7.png)

También puede acceder directamente a la configuración de la aplicación My Account en el Admin a través de una URL.

- Si su tienda es VTEX IO, utilice la dirección `https://{account}.myvtex.com/admin/apps/vtex.my-account@1.x/setup`, sustituyendo `{account}` por el nombre de la cuenta.
- Si su tienda no usa VTEX IO, utilice la dirección `https://{account}.myvtex.com/admin/apps/vtex.my-account@0.x/setup`, sustituyendo `{account}` por el nombre de la cuenta.

Tras habilitar la visibilidad de la pestaña **Autenticación**, esta aparecerá en el perfil de usuario de la tienda. Cualquier usuario puede acceder a ella desde el panel lateral izquierdo.

![My Authentication app ES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/announcements/2021/julio/2021-07-26-pestana-my-authentication-de-my-account_8.png)
