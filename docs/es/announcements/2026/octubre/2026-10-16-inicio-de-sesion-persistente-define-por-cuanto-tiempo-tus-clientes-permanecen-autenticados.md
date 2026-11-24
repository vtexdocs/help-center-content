---
title: 'Inicio de sesión persistente: define cuánto tiempo permanecen autenticados tus clientes'
slug: '2026-10-16-inicio-de-sesion-persistente-define-por-cuanto-tiempo-tus-clientes-permanecen-autenticados'
createdAt: 2026-10-16T00:00:00.000Z
updatedAt: 2026-10-16T00:00:00.000Z
contentType: updates
productTeam: Identity
slugEN: '2026-10-16-persistent-login-set-how-long-your-customers-stay-authenticated'
locale: es
announcementSynopsisES: 'Define por cuántos días tus clientes permanecen autenticados en tu tienda virtual, de 1 a 365 días, directamente en el Admin VTEX.'
tags:
  - Nueva funcionalidad
  - Identity
  - Admin
---

Con el **inicio de sesión persistente** ahora puedes definir durante cuántos días tus clientes permanecen autenticados en la tienda virtual, de **1 a 365 días**. De esta forma, no necesitan iniciar sesión de nuevo cada 24 horas. La configuración se realiza directamente en la página **Autenticación** del Admin VTEX, sin necesidad de abrir un ticket con el Soporte VTEX.

![Tarjeta de inicio de sesión persistente en la página Autenticación del Admin VTEX](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/announcements/2026/octubre/2026-10-16-inicio-de-sesion-persistente-define-por-cuanto-tiempo-tus-clientes-permanecen-autenticados_1.png)

## ¿Qué cambió?

De forma predeterminada, la sesión de los clientes en la tienda virtual vence después de 24 horas. Antes, para extender ese periodo era necesario abrir un ticket con el Soporte VTEX para solicitar la activación del token de actualización y definir el tiempo de vencimiento, que solo podía ser 1, 7 o 30 días. Con el inicio de sesión persistente activado la plataforma genera un token de actualización además de la cookie de acceso. La cookie mantiene una duración fija de 24 horas. El token renueva el acceso del cliente durante el periodo que configures y no hace falta un nuevo inicio de sesión.

Consulta a continuación el comportamiento de la funcionalidad:

- El inicio de sesión persistente es opcional y está desactivado de forma predeterminada. Si no configuras nada, el comportamiento de tu tienda no cambia y las sesiones de los clientes siguen venciendo después de 24 horas.
- La duración puede ser cualquier número entero de días, de **1** a **365**. Al activar la funcionalidad por primera vez, la duración predeterminada es de **1 día**.
- Los cambios, incluida la desactivación de la funcionalidad, se aplican solo a los nuevos inicios de sesión. Las sesiones activas no se ven afectadas.
- Esta configuración afecta solo las sesiones de clientes en la tienda virtual. El inicio de sesión de usuarios administrativos en el Admin VTEX no cambia.

## ¿Por qué realizamos este cambio?

Así puedes equilibrar comodidad y seguridad en tu tienda. Al elegir el periodo que mejor se adapta a tu negocio, reduces la necesidad de nuevos inicios de sesión y mejoras la experiencia de compra de tus clientes.

## ¿Qué se necesita hacer?

Para usar el inicio de sesión persistente activa la funcionalidad en el Admin VTEX. Según la tecnología de tu storefront también puede ser necesario completar pasos adicionales para que la renovación del acceso de los clientes funcione.

### Activar el inicio de sesión persistente

Para activar o modificar el inicio de sesión persistente, el usuario debe tener un [rol](https://help.vtex.com/es/docs/tutorials/roles) con el recurso **Write Account Config**, en la categoría Account Configuration de VTEX ID.

El inicio de sesión persistente solo empieza a funcionar cuando lo activas. Para configurarlo sigue los pasos a continuación:

1. En el Admin VTEX accede a **Configuración de la cuenta > Autenticación**.
2. En la pestaña **Tienda virtual** localiza la tarjeta **Inicio de sesión persistente** y haz clic en el botón de alternancia para activar la funcionalidad.
3. Para modificar la duración haz clic en `Editar`, ingresa un número entero entre **1** y **365** días en el campo **Duración de la sesión** y haz clic en `Guardar`.

![Ventana de configuración de la duración del inicio de sesión persistente](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/announcements/2026/octubre/2026-10-16-inicio-de-sesion-persistente-define-por-cuanto-tiempo-tus-clientes-permanecen-autenticados_2.png)

Consulta [Configurar el inicio de sesión persistente para clientes](https://help.vtex.com/es/docs/tutorials/configurar-el-inicio-de-sesion-persistente-para-clientes) para más información.

### Pasos adicionales según el tipo de tienda

Después de activar el inicio de sesión persistente verifica si tu tienda necesita realizar algún paso adicional. La diferencia está en cómo se renueva el acceso del cliente, que depende de la tecnología del storefront.

En tiendas con [Store Framework](https://developers.vtex.com/docs/guides/store-framework) o [CMS Portal (Legado)](https://help.vtex.com/es/docs/tracks/cms-portal-legado) debes activar el inicio de sesión persistente en el Admin VTEX, ya que el acceso del cliente se renueva automáticamente.

En tiendas headless además de activar el inicio de sesión persistente en el Admin VTEX es necesario implementar la renovación del acceso del cliente mediante las APIs de VTEX ID. La guía para desarrolladores [Refresh token flow for headless implementations](https://developers.vtex.com/docs/guides/refresh-token-flow-for-headless-implementations) explica cómo realizar esta implementación.

Si tu tienda usa FastStore además de activar el inicio de sesión persistente en el Admin VTEX, es necesario activar el token de actualización en el proyecto, según la guía [Enabling refresh token on FastStore](https://developers.vtex.com/docs/guides/faststore/session-enabling-refresh-token).
