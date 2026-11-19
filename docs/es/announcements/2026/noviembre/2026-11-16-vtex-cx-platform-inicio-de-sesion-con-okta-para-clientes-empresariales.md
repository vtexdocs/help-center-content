---
title: 'VTEX CX Platform: inicio de sesión con Okta para clientes empresariales'
createdAt: 2026-11-16T12:00:00.000Z
updatedAt: 2026-11-16T12:00:00.000Z
contentType: updates
productTeam: VTEX CX Platform
slugEN: 2026-11-16-vtex-cx-platform-enterprise-okta-login
locale: es
tags:
  - Nueva funcionalidad
  - VTEX CX Platform
announcementSynopsisES: 'Los clientes empresariales ahora pueden iniciar sesión en VTEX CX Platform con su propio inquilino Okta. La activación se realiza bajo demanda mediante una solicitud al equipo de VTEX.'
---

Los clientes empresariales ahora pueden iniciar sesión en [VTEX CX Platform](/es/docs/tutorials/vtex-cx-platform-vision-de-conjunto) usando Okta. Para atender las exigencias de seguridad de las empresas que centralizan la autenticación en su propio proveedor de identidad, hemos puesto esta funcionalidad a disposición de todos los clientes.

Con el inicio de sesión Okta, los usuarios inician sesión con las credenciales corporativas y la autenticación de dos factores sigue las reglas definidas en la solución Okta del cliente.

## ¿Qué cambió?

Antes, todos los usuarios iniciaban sesión en la plataforma con email y contraseña o con los botones de inicio de sesión social (GitHub, Google y Microsoft), sin la posibilidad de usar el proveedor de identidad de su propia empresa.

Ahora, la pantalla de inicio de sesión pide primero el email y dirige al usuario según el dominio ingresado:

- **Dominio mapeado a un inquilino Okta:** el usuario es redirigido directamente a la solución Okta de la empresa, incluso con la autenticación multifactor de Okta configurada. El campo de contraseña de la plataforma no se muestra en este intento.
- **Dominio no mapeado:** el usuario continúa al paso de contraseña como antes.

Las opciones de inicio de sesión con GitHub, Google y Microsoft siguen disponibles y sin cambios.

> ℹ️ El acceso a las organizaciones sigue siendo solo por invitación. El mapeo de dominio está restringido a cada cliente: la solución Okta de una empresa nunca da acceso a la organización de otra.

## ¿Qué se necesita hacer?

Para utilizar este recurso, ponte en contacto con el [Soporte VTEX](/es/support) y solicita la configuración del mapeo del dominio de email y de la política de tu organización.
