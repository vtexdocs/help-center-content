---
title: 'Mejoras en la gestión de claves de aplicación'
id: 6DsPdiQ65RKNUNl7p93zHJ
status: PUBLISHED
createdAt: 2021-08-19T14:45:15.177Z
updatedAt: 2021-12-10T02:40:04.550Z
publishedAt: 2021-12-10T02:40:04.550Z
contentType: updates
productTeam: Identity
author: 56yU9Wz6mLwmzo82TjgAHy
slugEN: 2021-08-19-improvements-in-application-key-management
locale: es
legacySlug: mejoras-en-la-gestion-de-claves-de-aplicacion
announcementImageID: 'undefined'
announcementSynopsisES: 'Administre sus credenciales de autenticación en un solo lugar y delegue esa responsabilidad según sea necesario.'
---

Muchos de nuestros clientes aprovechan las integraciones de API para conectar su cuenta VTEX a sistemas externos. Las credenciales de [autenticación](https://developers.vtex.com/vtex-rest-api/docs/getting-started-authentication) se utilizan para proporcionar acceso seguro a los datos que estas integraciones requieren, sin exponer su cuenta a usuarios o aplicaciones no autorizadas. 

Las claves de aplicación (también conocidas como _app keys_) son el tipo más común de credenciales de autenticación, pero su gestión se distribuía en varias pantallas del Admin de VTEX y se restringía a un solo usuario. Ahora usted puede administrar sus credenciales de autenticación en un solo lugar y delegar esa responsabilidad según sea necesario.

## ¿Que cambió?

### Nueva interfaz de usuário para gestión de Claves de Aplicación

Anteriormente, la gestión de las  [Claves de Aplicación](/es/tutorial/claves-de-aplicacion--2iffYzlvvz4BDMr6WGUtet) requería la navegación por múltiples pantallas. Ahora puede generar, agregar/eliminar, habilitar/deshabilitar, exportar y editar permisos para sus pares app key y token en un solo lugar.

### La autorización para crear claves de aplicación ahora se basan en recursos

Anteriormente, solo el [usuario Titular](/es/docs/tutorials/que-es-el-usuario-titular) podía crear y administrar claves de aplicación. Ahora, cualquier usuario con el recurso `License Manager / Services access control / Save user` configurado en sus [perfiles de acceso](/es/docs/tutorials/roles) puede crear estas credenciales y compartir los mismos permisos con otros usuarios, lo que permite al usuario propietario delegar esta responsabilidad según sea necesario.

## ¿Por qué realizamos estos cambios?

Al simplificar la administración de credenciales de autenticación, ayudamos a nuestros clientes a comprender mejor sus integraciones activas y las funciones de la cuenta a las que tienen acceso, lo que les permite mejorar la seguridad de sus cuentas.

## ¿Qué se necesita hacer?

Consulte el artículo [Claves de aplicación](/es/tutorial/claves-de-aplicacion--2iffYzlvvz4BDMr6WGUtet) para obtener más informaciónes.
