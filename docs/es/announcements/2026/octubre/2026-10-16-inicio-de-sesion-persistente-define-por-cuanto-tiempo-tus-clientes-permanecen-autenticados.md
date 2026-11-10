---
title: 'Inicio de sesión persistente: define por cuánto tiempo tus clientes permanecen autenticados'
slug: '2026-10-16-inicio-de-sesion-persistente-define-por-cuanto-tiempo-tus-clientes-permanecen-autenticados'
createdAt: 2026-10-16T00:00:00.000Z
updatedAt: 2026-10-16T00:00:00.000Z
contentType: updates
productTeam: Identity
slugEN: '2026-10-16-persistent-login-set-how-long-your-customers-stay-authenticated'
locale: es
announcementSynopsisES: 'Configura por cuántos días tus clientes permanecen autenticados en la tienda virtual, de 1 a 365 días, directamente en el Admin VTEX.'
tags:
  - Nueva funcionalidad
  - Identity
  - Admin
---

Ahora puedes definir por cuántos días tus clientes permanecen autenticados en la tienda virtual, de **1 a 365 días**, con el **inicio de sesión persistente**. Así, no necesitan iniciar sesión nuevamente cada 24 horas. La configuración se realiza directamente en la página **Autenticación** del Admin VTEX, sin necesidad de abrir un ticket con el Soporte VTEX.

![Tarjeta de inicio de sesión persistente en la página Autenticación del Admin VTEX](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/announcements/2026/octubre/2026-10-16-inicio-de-sesion-persistente-define-por-cuanto-tiempo-tus-clientes-permanecen-autenticados_1.png)

## ¿Qué cambió?

De forma predeterminada, la sesión de los clientes en la tienda virtual expira después de 24 horas. Antes, para extender ese período, era necesario abrir un ticket con el Soporte VTEX para solicitar la activación del refresh token y definir el tiempo de expiración, que solo podía ser 1, 7 o 30 días. Ahora, con el inicio de sesión persistente habilitado, además de la cookie de acceso, que mantiene la duración fija de 24 horas, la plataforma emite un token de actualización que renueva el acceso del cliente sin exigir un nuevo inicio de sesión, durante el período que configures.

Así es como se comporta la funcionalidad:

* El inicio de sesión persistente es opcional y viene deshabilitado de forma predeterminada. Si no configuras nada, el comportamiento de tu tienda no cambia y la sesión de los clientes sigue expirando después de 24 horas.
* La duración puede ser cualquier número entero de días, de **1** a **365**. Al habilitar la funcionalidad por primera vez, la duración predeterminada es de **1 día**.
* Los cambios, incluida la deshabilitación de la funcionalidad, solo se aplican a los nuevos inicios de sesión. Las sesiones ya activas no se ven afectadas.
* La configuración afecta solo las sesiones de clientes en la tienda virtual. El inicio de sesión de los usuarios administrativos en el Admin VTEX no cambia.

## ¿Por qué realizamos este cambio?

Con este cambio, tienes más autonomía y flexibilidad para equilibrar la conveniencia y la seguridad en tu tienda. Al elegir el período que mejor se adapte a tu negocio, reduces la necesidad de nuevos inicios de sesión y mejoras la experiencia de compra de tus clientes.

## ¿Qué se necesita hacer?

Para usar el inicio de sesión persistente, habilita la funcionalidad en el Admin VTEX. Según la tecnología de tu storefront, también puede ser necesario completar pasos adicionales para que la renovación del acceso de los clientes funcione.

### Habilitar el inicio de sesión persistente

Para habilitar o modificar el inicio de sesión persistente, el usuario debe tener un [rol de acceso](https://help.vtex.com/es/docs/tutorials/roles) con el recurso **Write Account Config**, en la categoría Account Configuration del producto VTEX ID.

El inicio de sesión persistente solo comienza a funcionar cuando lo habilitas. Para configurarlo, sigue estos pasos:

1. En el Admin VTEX, accede a **Configuración de la cuenta > Autenticación**.
2. En la pestaña **Tienda virtual**, ubica la tarjeta **Inicio de sesión persistente** y haz clic en el interruptor para habilitar la funcionalidad.
3. Para modificar la duración, haz clic en `Editar`, ingresa un número entero entre **1** y **365** días en el campo **Duración de la sesión** y haz clic en `Guardar`.

![Ventana de configuración de la duración del inicio de sesión persistente](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/announcements/2026/octubre/2026-10-16-inicio-de-sesion-persistente-define-por-cuanto-tiempo-tus-clientes-permanecen-autenticados_2.png)

Más información en [Configurar el inicio de sesión persistente para clientes](https://help.vtex.com/es/docs/tutorials/configurar-el-inicio-de-sesion-persistente-para-clientes).

### Pasos adicionales según el tipo de tienda

Después de habilitar el inicio de sesión persistente, verifica si tu tienda necesita algún paso adicional. Lo que cambia es la forma en que se renueva el acceso del cliente, que depende de la tecnología del storefront.

En tiendas con [Store Framework](https://developers.vtex.com/docs/guides/store-framework) o [CMS Portal (Legado)](https://help.vtex.com/es/docs/tracks/cms-portal-legado), basta con habilitar el inicio de sesión persistente en el Admin VTEX, ya que la renovación del acceso del cliente en la tienda es automática.

En tiendas headless, además de habilitar el inicio de sesión persistente en el Admin VTEX, es necesario implementar la renovación del acceso del cliente mediante las API de VTEX ID. La guía para desarrolladores [Refresh token flow for headless implementations](https://developers.vtex.com/docs/guides/refresh-token-flow-for-headless-implementations) explica cómo hacer esta implementación.

Si tu tienda usa FastStore, además de habilitar el inicio de sesión persistente en el Admin VTEX, es necesario habilitar el refresh token en el proyecto, según la guía [Enabling refresh token on FastStore](https://developers.vtex.com/docs/guides/faststore/session-enabling-refresh-token).
