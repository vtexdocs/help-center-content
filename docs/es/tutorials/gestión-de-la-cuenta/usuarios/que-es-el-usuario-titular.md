---
title: 'Usuario titular'
id: 3oPr7YuIkEYqUGmEqIMSEy
status: PUBLISHED
createdAt: 2019-01-24T20:45:43.693Z
updatedAt: 2022-10-25T15:05:55.777Z
publishedAt: 2022-10-25T15:05:55.777Z
firstPublishedAt: 2019-01-24T22:00:34.038Z
contentType: tutorial
productTeam: Identity
author: 56yU9Wz6mLwmzo82TjgAHy
slugEN: what-is-the-sponsor-user
legacySlug: que-es-el-usuario-patrocinador
locale: es
subcategoryId: 63DHe3VQEEE6Uuua8gIs2M
---

Cada cuenta de VTEX tiene un único usuario titular que es el único que tiene acceso completo a todas las secciones del Admin, incluidas las acciones críticas de mantenimiento y autorización. 

> ⚠️ El usuario titular no es el mismo que el **Owner (Admin Super)**. El **Owner (Admin Super)** es un perfil de acceso del License Manager que define los permisos que se conceden a un determinado usuario de tu tienda, e incluso puede asignarse a varios usuarios.

La página de gestión del titular le permite identificar al usuario titular actual, transferir la propiedad de la tienda y ver el registro de actividad asociado al usuario titular. Para acceder a esta página navegue a **Configuración de la cuenta** > **Gestión de la cuenta** > **Cuenta**, desplácese hacia abajo hasta la sección de «Contacto» y haga clic en el enlace `Gestión de titulares`.

## Acciones restringidas al usuario titular

Solo el usuario titular puede realizar estas acciones críticas de mantenimiento y autorización:

* [Transferir la propiedad de la tienda](/es/docs/tutorials/transferir-la-propiedad-de-la-tienda) a un nuevo usuario titular
* Operaciones de [mantenimiento de la base de datos (full cleanup)](/es/docs/tutorials/mantenimiento-de-base-de-datos-full-cleanup) tales como:
    * Volver a registrar los precios en SmartCheckout
    * Eliminar productos del indexador
    * Eliminar productos/SKU e ítems relacionados
    * Eliminar categorías, marcas, campos e ítems relacionados
    * Eliminar _sellers_ e ítems relacionados
    * Programar una indexación completa
* Autenticar la cuenta en nuestros conectores nativos, como:
    * [Facebook](/es/docs/tracks/configuracion-del-conector-facebook)
    * [Google Shopping](/es/docs/tracks/autenticar-la-cuenta-google-shopping)
    * [Mercado Libre](/es/docs/tracks/autorizar-la-integracion-de-mercado-libre-en-el-panel-de-vtex)
* [Aprobar solicitudes de cancelación de pedidos](/es/docs/tutorials/cancelacion-de-pedido-solicitada-por-el-cliente)

Además, cuando VTEX necesita comunicar información importante sobre la tienda, como cambios de roles, dicha comunicación se lleva a cabo directa y exclusivamente con el usuario titular.

> ℹ️ La creación de [credenciales de autenticación](/es/tutorial/application-keys--2iffYzlvvz4BDMr6WGUtet) (appKey/appToken) para integraciones de API ya no está restringida al usuario titular. Vea este [anuncio](/es/announcements/changes-in-the-name-and-restricted-actions-available-to-the-master-user) para saber más detalles sobre este cambio.
