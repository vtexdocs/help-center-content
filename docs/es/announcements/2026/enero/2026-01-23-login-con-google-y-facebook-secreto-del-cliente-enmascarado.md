---
title: 'Inicio de sesión con Google y Facebook: enmascaramiento del secreto del cliente'
id: 
status: PUBLISHED
createdAt: 2026-01-21T00:00:00.000Z
updatedAt: 2026-01-21T00:00:00.000Z
publishedAt: 2026-01-21T00:00:00.000Z
contentType: updates
productTeam: Identity
author: 1malnhMX0vPThsaJaZMYm2
slugEN: 2026-01-23-login-with-google-and-facebook-client-secret-masked
locale: es
legacySlug: 
announcementImageID: 'undefined'
announcementSynopsisPT: 'El secreto del cliente al iniciar sesión con Google y Facebook está enmascarado y solo muestra los últimos 3 caracteres.'
---

Para reforzar la seguridad de las integraciones de inicio de sesión social, el campo **Secreto del cliente** de la configuración de [inicio de sesión con Google y Facebook](https://help.vtex.com/es/docs/tutorials/configurar-inicio-de-sesion-con-facebook-y-google) ahora se muestra enmascarado en el Admin VTEX.

## ¿Qué cambió?

Después de configurar el inicio de sesión con Google o Facebook, el campo **Secreto del cliente** deja de mostrarse por completo en **Configuración de la cuenta \> Autenticación**.

Al abrir de nuevo la configuración, los usuarios administradores solo ven los últimos 3 caracteres de la clave, evitando la exposición de la credencial.

El cambio afecta solo la vista del dato y no altera el funcionamiento de la autenticación.

## ¿Por qué realizamos este cambio?

Para reforzar la seguridad de las tiendas, reduciendo el riesgo de exposición indebida de credenciales sensibles y protegiendo las integraciones de autenticación contra accesos no autorizados.

## ¿Qué se necesita hacer?

No se requiere ninguna acción. La actualización se aplicará automáticamente a todas las tiendas. Para más información sobre la configuración del inicio de sesión social, accede a:

* [Configurar inicio de sesión con Facebook y Google](https://help.vtex.com/es/docs/tutorials/configurar-inicio-de-sesion-con-facebook-y-google)
* [Registrar Client ID y Secreto del cliente para inicio de sesión con Google](https://help.vtex.com/es/docs/tutorials/registrar-client-id-y-client-secret-para-inicio-de-sesion-con-google)
* [Registrar Client ID y Secreto del cliente para Inicio de sesión con Facebook](https://help.vtex.com/es/docs/tutorials/registrar-client-id-y-client-secret-para-login-con-facebook)
