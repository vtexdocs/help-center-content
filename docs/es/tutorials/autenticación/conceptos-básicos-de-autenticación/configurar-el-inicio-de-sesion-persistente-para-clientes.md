---
title: 'Configurar el inicio de sesión persistente para clientes'
createdAt: 2026-09-18T00:00:00.000Z
updatedAt: 2026-09-18T00:00:00.000Z
contentType: tutorial
productTeam: Identity
slugEN: configuring-persistent-login-for-customers
locale: es
---

El inicio de sesión persistente te permite mantener al cliente autenticado en tu tienda virtual durante más tiempo, sin exigir un nuevo inicio de sesión cada 24 horas. Al habilitar esta funcionalidad, defines por cuántos días el cliente permanece conectado, directamente desde la página **Autenticación** en el Admin VTEX, sin necesidad de abrir un ticket con el Soporte VTEX.

> ℹ️ El inicio de sesión persistente afecta solo las sesiones de los clientes en la tienda virtual. Las sesiones de inicio de sesión de los usuarios administrativos en el Admin VTEX no se ven afectadas por esta configuración.

## Cómo funciona

Al acceder a la tienda, el cliente recibe una cookie de acceso (`VtexIdclientAutCookie_{account}`) con una duración fija de 24 horas, que no puede configurarse. Cuando el inicio de sesión persistente está habilitado, la plataforma también emite un token de actualización (`vid_rt`), responsable de renovar el acceso del cliente sin exigir un nuevo inicio de sesión, durante el período que configures.

Algunos puntos importantes sobre el funcionamiento de esta configuración:

* El inicio de sesión persistente es opcional y viene deshabilitado de forma predeterminada. Si no configuras nada, el comportamiento de tu tienda no cambia.
* La duración puede ser cualquier número entero de días, de **1** a **365**.
* Al habilitar el inicio de sesión persistente por primera vez, la duración predeterminada es de **1 día**. Puedes modificarla en cualquier momento.
* Las modificaciones en la configuración (incluida la deshabilitación del inicio de sesión persistente) aplican solo a los nuevos inicios de sesión realizados después del cambio. Las sesiones que ya están activas continúan comportándose como lo hacían antes de la modificación.
* Si deshabilitas el inicio de sesión persistente y luego lo vuelves a habilitar, se restaura la última duración guardada (la configuración no vuelve automáticamente a 1 día).
* La forma en que se renueva el acceso del cliente depende de la tecnología del storefront. En tiendas headless y FastStore, se requieren pasos adicionales, descritos en [Pasos adicionales según el tipo de tienda](#pasos-adicionales-segun-el-tipo-de-tienda).

## Requisitos previos

Para habilitar o modificar el inicio de sesión persistente, el usuario debe tener un [rol de acceso](https://help.vtex.com/es/docs/tutorials/roles) con el recurso **Write Account Config**, en la categoría Account Configuration del producto VTEX ID. Sin este permiso, la modificación no se guarda y se muestra un mensaje de error.

## Habilitar el inicio de sesión persistente

Para empezar a usar el inicio de sesión persistente, habilita la funcionalidad en la tarjeta correspondiente de la página **Autenticación**:

1. En la barra superior del Admin VTEX, haz clic en el avatar de tu perfil, marcado por la inicial de tu email.
2. Haz clic en **Configuración de la cuenta > Autenticación**.
3. En la pestaña **Tienda virtual**, ubica la tarjeta **Inicio de sesión persistente**, debajo de los métodos de inicio de sesión.
4. Haz clic en el interruptor para habilitar la funcionalidad.
    ![Tarjeta Inicio de sesión persistente en la pestaña Tienda virtual](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/autenticación/conceptos-básicos-de-autenticación/configurar-el-inicio-de-sesion-persistente-para-clientes_1.png)

Al habilitarlo, una notificación confirma la activación e informa la duración que pasa a aplicar a los nuevos inicios de sesión (1 día, en el primer uso, o la última duración guardada, en una reactivación).

## Pasos adicionales según el tipo de tienda

Después de habilitar el inicio de sesión persistente, verifica si tu tienda necesita algún paso adicional. Lo que cambia es la forma en que se renueva el acceso del cliente, que depende de la tecnología del storefront.

En tiendas con [Store Framework](https://developers.vtex.com/docs/guides/store-framework) o [CMS Portal (Legado)](https://help.vtex.com/es/docs/tracks/cms-portal-legado), basta con habilitar el inicio de sesión persistente en el Admin VTEX, ya que la renovación del acceso del cliente en la tienda es automática.

En tiendas headless, además de habilitar el inicio de sesión persistente en el Admin VTEX, es necesario implementar la renovación del acceso del cliente mediante las API de VTEX ID. La guía para desarrolladores [Refresh token flow for headless implementations](https://developers.vtex.com/docs/guides/refresh-token-flow-for-headless-implementations) explica cómo hacer esta implementación.

Si tu tienda usa FastStore, además de habilitar el inicio de sesión persistente en el Admin VTEX, es necesario habilitar el refresh token en el proyecto, según la guía [Enabling refresh token on FastStore](https://developers.vtex.com/docs/guides/faststore/session-enabling-refresh-token).

## Configurar la duración del inicio de sesión persistente

La duración configurada no se muestra directamente en la tarjeta. Para consultarla o modificarla, sigue los pasos a continuación:

1. En la barra superior del Admin VTEX, haz clic en el avatar de tu perfil, marcado por la inicial de tu email.
2. Haz clic en **Configuración de la cuenta > Autenticación**.
3. En la pestaña **Tienda virtual**, en la tarjeta **Inicio de sesión persistente**, haz clic en `Editar`.

    Se abre una ventana con la duración actualmente configurada, en días.
    ![Ventana de configuración de la duración del inicio de sesión persistente](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/autenticación/conceptos-básicos-de-autenticación/configurar-el-inicio-de-sesion-persistente-para-clientes_2.png)
4. En el campo **Duración de la sesión**, ingresa un número entero entre **1** y **365** días.
5. Haz clic en `Guardar`.

Si el valor ingresado está fuera del intervalo permitido o no es un número entero, se muestra un mensaje de error y la modificación no se guarda.

Puedes configurar la duración incluso con el inicio de sesión persistente deshabilitado. En ese caso, el valor se guarda y pasa a aplicar en cuanto se habilite la funcionalidad.

## Deshabilitar el inicio de sesión persistente

Si ya no quieres mantener a los clientes conectados durante un período extendido, deshabilita la funcionalidad en cualquier momento:

1. En la barra superior del Admin VTEX, haz clic en el avatar de tu perfil, marcado por la inicial de tu email.
2. Haz clic en **Configuración de la cuenta > Autenticación**.
3. En la pestaña **Tienda virtual**, en la tarjeta **Inicio de sesión persistente**, haz clic en el interruptor para deshabilitar la funcionalidad.

A partir de ese momento, los nuevos inicios de sesión de los clientes dejan de recibir el token de actualización, volviendo al comportamiento predeterminado de expiración en 24 horas. Las sesiones que ya están activas no se ven alteradas por este cambio.

## Más información

- [Refresh token flow for headless implementations](https://developers.vtex.com/docs/guides/refresh-token-flow-for-headless-implementations)
- [Enabling refresh token on FastStore](https://developers.vtex.com/docs/guides/faststore/session-enabling-refresh-token)
- [Autenticación](https://help.vtex.com/es/docs/tutorials/autenticacion)
