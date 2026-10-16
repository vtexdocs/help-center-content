---
title: 'Configurar el inicio de sesión persistente para clientes'
createdAt: 2026-09-18T00:00:00.000Z
updatedAt: 2026-09-18T00:00:00.000Z
contentType: tutorial
productTeam: Identity
slugEN: configuring-persistent-login-for-customers
locale: es
---

El inicio de sesión persistente permite mantener al cliente autenticado en tu tienda virtual por más tiempo, sin exigir un nuevo inicio de sesión cada 24 horas. Al activar esta funcionalidad en la página **Autenticación** del Admin VTEX, puedes definir directamente cuántos días permanece conectado el cliente, sin tener que abrir un ticket con el Soporte VTEX.

> ℹ️ El inicio de sesión persistente afecta solo las sesiones de clientes en la tienda virtual. Las sesiones de inicio de sesión de los usuarios administrativos en el Admin VTEX no se ven afectadas por esta configuración.

## Cómo funciona

Al acceder a la tienda, el cliente recibe una cookie de acceso (`VtexIdclientAutCookie_{account}`) con una duración fija de 24 horas que no se puede configurar. Cuando el inicio de sesión persistente está activado, la plataforma también emite un token de actualización (`vid_rt`), responsable de renovar el acceso del cliente sin exigir un nuevo inicio de sesión, durante el periodo que configures.

Algunos puntos importantes sobre el funcionamiento de esta configuración:

* El inicio de sesión persistente es opcional y, de forma predeterminada, esta opción está desactivada. Si no configuras nada, el comportamiento de tu tienda no cambia.
* La duración puede ser cualquier número entero de días, de **1** a **365**.
* Al activar el inicio de sesión persistente por primera vez, la duración predeterminada es de **1 día**. Puedes modificarla en cualquier momento.
* Los cambios en la configuración, incluida la desactivación del inicio de sesión persistente, solo se aplican a los inicios de sesión posteriores. Las sesiones activas no se modifican.
* Si desactivas el inicio de sesión persistente y luego lo vuelves a activar, se restaura la última duración guardada (la configuración no vuelve automáticamente a 1 día).
* La forma en que se renueva el acceso del cliente depende de la tecnología del storefront. Consulta [Pasos adicionales por tipo de tienda](#pasos-adicionales-por-tipo-de-tienda).

## Prerrequisitos

Para activar o modificar el inicio de sesión persistente, el usuario debe tener un [rol](https://help.vtex.com/es/docs/tutorials/roles) con el recurso **Write Account Config**, en la categoría Account Configuration del producto VTEX ID. Sin este permiso, la modificación no se guarda y se muestra un mensaje de error.

## Activar el inicio de sesión persistente

Para empezar a usar el inicio de sesión persistente activa la funcionalidad en la tarjeta correspondiente de la página **Autenticación**:

1. En la barra superior del Admin VTEX, haz clic en el avatar de tu perfil que tiene la inicial de tu email.
2. Haz clic en **Configuración de la cuenta > Autenticación**.
3. En la pestaña **Tienda virtual**, busca la tarjeta **Inicio de sesión persistente**, debajo de los métodos de inicio de sesión.
   ![Tarjeta Inicio de sesión persistente en la pestaña Tienda virtual](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/autenticación/conceptos-básicos-de-autenticación/configurar-el-inicio-de-sesion-persistente-para-clientes_1.png)
4. Haz clic en el botón de alternancia para activar la funcionalidad.

Cuando activas la funcionalidad, se muestra una notificación que lo confirma e indica la duración que se aplicará a los nuevos inicios de sesión: 1 día si es la primera vez, o la última duración guardada si la vuelves a activar.

## Pasos adicionales por tipo de tienda

Después de activar el inicio de sesión persistente, verifica si tu tienda necesita algún paso adicional. Lo que cambia es la forma en que se renueva el acceso del cliente, que depende de la tecnología del storefront.

En tiendas con [Store Framework](https://developers.vtex.com/docs/guides/store-framework) o [CMS Portal (Legado)](https://help.vtex.com/es/docs/tracks/cms-portal-legado), basta con activar el inicio de sesión persistente en el Admin VTEX, ya que la renovación del acceso del cliente en la tienda es automática.

En tiendas headless, además de activar el inicio de sesión persistente en el Admin VTEX, es necesario implementar la renovación del token por cuenta propia. La guía para desarrolladores [Refresh token flow for headless implementations](https://developers.vtex.com/docs/guides/refresh-token-flow-for-headless-implementations) explica cómo implementar la renovación de sesión en una tienda headless.

Si tu tienda usa FastStore, además de activar el inicio de sesión persistente en el Admin VTEX, debes habilitar el refresh token en tu proyecto, como se describe en [Enabling refresh token on FastStore](https://developers.vtex.com/docs/guides/faststore/session-enabling-refresh-token).

## Configurar la duración del inicio de sesión persistente

La duración configurada no se muestra directamente en la tarjeta. Para consultarla o modificarla sigue estos pasos:

1. En la barra superior del Admin VTEX, haz clic en el avatar de tu perfil que tiene la inicial de tu email.
2. Haz clic en **Configuración de la cuenta > Autenticación**.
3. En la pestaña **Tienda virtual**, en la tarjeta **Inicio de sesión persistente**, haz clic en `Editar`.

   Se abre una ventana con la duración configurada actualmente, en días.

   ![Ventana de configuración de la duración del inicio de sesión persistente](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/autenticación/conceptos-básicos-de-autenticación/configurar-el-inicio-de-sesion-persistente-para-clientes_2.png)
4. En el campo **Duración de la sesión**, ingresa un número entero entre **1** y **365** días.
5. Haz clic en `Guardar`.

Si el valor ingresado está fuera del rango permitido o no es un número entero, se muestra un mensaje de error y la modificación no se guarda.

Puedes configurar la duración incluso con el inicio de sesión persistente desactivado. En ese caso, el valor se guarda y empieza a aplicarse en cuanto se active la funcionalidad.

## Desactivar el inicio de sesión persistente

Si ya no deseas mantener a los clientes conectados durante un periodo extendido puedes desactivar la funcionalidad en cualquier momento siguiendo estos pasos:

1. En la barra superior del Admin VTEX, haz clic en el avatar de tu perfil que tiene la inicial de tu email.
2. Haz clic en **Configuración de la cuenta > Autenticación**.
3. En la pestaña **Tienda virtual**, en la tarjeta **Inicio de sesión persistente**, haz clic en el botón de alternancia para desactivar la funcionalidad.

A partir de ese momento los nuevos inicios de sesión de clientes dejan de recibir el token de actualización y vuelven al comportamiento predeterminado de vencimiento en 24 horas. Las sesiones ya activas no se ven afectadas por este cambio.

## Más información

- [Refresh token flow for headless implementations](https://developers.vtex.com/docs/guides/refresh-token-flow-for-headless-implementations)
- [Enabling refresh token on FastStore](https://developers.vtex.com/docs/guides/faststore/session-enabling-refresh-token)
- [Autenticación](https://help.vtex.com/es/docs/tutorials/autenticacion)
