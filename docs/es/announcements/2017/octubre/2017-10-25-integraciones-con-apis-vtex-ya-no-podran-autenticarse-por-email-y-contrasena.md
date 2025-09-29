---
title: 'A partir de 13/11 APIs VTEX dejarán de soportar autenticación por email y contraseña'
id: 7AdnXDH7AkYmuEUmmis8Es
status: PUBLISHED
createdAt: 2017-10-25T20:55:52.136Z
updatedAt: 2021-03-22T20:46:37.109Z
publishedAt: 2021-03-22T20:46:37.109Z
contentType: updates
productTeam: Others
author: authors_59
slugEN: 2017-10-25-integrations-with-vtex-apis-now-need-token-authentication
locale: es
legacySlug: integraciones-con-apis-vtex-ya-no-podran-autenticarse-por-email-y-contrasena
announcementImageID: 'undefined'
announcementSynopsisES: 'VTEX dejará de permitir que las integraciones con nuestras API usen el e-mail y la contraseña para la autenticación'
---

A partir del día 13 de noviembre, 14h (GMT-2, horario de Brasil), __VTEX dejará de permitir que las integraciones con nuestras APIs usen e-mail y contraseña para autenticación__.

Para toda integración con VTEX, será necesario usar appKey y appToken, que se pueden obtener en el módulo License Manager.

### Como era antes

Algunas tiendas usaban e-mail y contraseña como claves de autenticación en sus integraciones con VTEX. Era un caso permitido por nuestro sistema, pero que estaba lejos de ser ideal.

Las tiendas hacían esta elección principalmente porque sólo un par de appKey y appToken quedaba disponible, lo que hacía complicado manejar múltiples integraciones.

### Lo que cambia

VTEX bloqueará las integraciones por email y contraseña. A partir del día 13 de noviembre será necesario generar una appKey y un appToken en License Manager y usar estas claves para autenticar cualquier integración con las API de VTEX.

### Por qué

Utilizar email y contraseña para la autenticación compromete la seguridad de sus integraciones.

### Que deben hacer las tiendas
- Compruebe si su tienda utiliza email y contraseña en alguna integración con las API de VTEX.
- Si lo usa, cree un par de appKey y appToken para esa integración. Vea como en el artículo [Crear appKey y appToken para autenticar integraciones](/es/tutorial/creating-appkeys-and-apptokens-to-authenticate-integrations).

> ⚠️ **Atención**: todo par de appKey y appToken, cuando se crea, nace sin estar vinculado a un perfil de acceso. Entonces, después de crearlo, es necesario vincular la appKey y el appToken al perfil de acceso deseado.
