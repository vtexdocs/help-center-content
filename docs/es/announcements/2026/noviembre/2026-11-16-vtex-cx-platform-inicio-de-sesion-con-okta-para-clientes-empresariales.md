---
title: 'VTEX CX Platform: inicio de sesión con Okta para clientes empresariales'
createdAt: 2026-11-16T12:00:00.000Z
updatedAt: 2026-11-16T12:00:00.000Z
contentType: updates
productTeam: VTEX CX Platform
slugEN: 2026-11-16-vtex-cx-platform-enterprise-okta-login
locale: es
tags:
  - Novedad
  - VTEX CX Platform
announcementSynopsisES: 'Los clientes empresariales ahora pueden iniciar sesión en VTEX CX Platform con su propio tenant de Okta. La activación se hace a pedido, mediante solicitud al equipo de VTEX.'
---

Los clientes empresariales ahora pueden iniciar sesión en [VTEX CX Platform](https://help.vtex.com/es/docs/tutorials/vtex-cx-platform-visao-geral) usando Okta. Para cumplir con los requisitos de seguridad de las empresas que centralizan la autenticación en su propio proveedor de identidad, habilitamos esta funcionalidad para todos los clientes.

Con el inicio de sesión con Okta, los usuarios ingresan con sus credenciales corporativas, y la verificación en dos pasos sigue las reglas ya definidas en el Okta del cliente.

## ¿Qué cambió?

Antes, todos los usuarios iniciaban sesión en la plataforma con email y contraseña o con los botones de inicio de sesión social (GitHub, Google y Microsoft), sin la posibilidad de usar el proveedor de identidad de su propia empresa.

Ahora, la pantalla de inicio de sesión pide primero solo el email y dirige al usuario según el dominio indicado:

- **Dominio mapeado a un inquilino de Okta:** el usuario es redirigido directamente al Okta de la empresa, incluida la autenticación multifactor configurada en Okta. El campo de contraseña de la plataforma no se muestra en este intento.
- **Dominio no mapeado:** el usuario continúa con el paso de contraseña, como antes.

Las opciones de inicio de sesión con GitHub, Google y Microsoft siguen disponibles y no cambiaron.

> ℹ️ El acceso a las organizaciones sigue haciéndose solo por invitación, y el mapeo de dominio está restringido por cliente: el Okta de una empresa nunca otorga acceso a la organización de otra.

## ¿Qué se necesita hacer?

Para usar esta función, ponte en contacto con el [Soporte de VTEX](https://help.vtex.com/es/support) y solicita la configuración del mapeo del dominio de email y de la política de tu organización.
