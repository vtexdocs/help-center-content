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
slug: que-es-el-usuario-titular
locale: es
legacySlug: que-es-el-usuario-patrocinador
subcategory: 63DHe3VQEEE6Uuua8gIs2M
---

Cada cuenta de VTEX tiene un único usuario titular que es el único que tiene acceso completo a todas las secciones del Admin, incluidas las acciones críticas de mantenimiento y autorización. 

<div class = "alert alert-warning">
El usuario titular no es el mismo que el <b>Owner (Admin Super)</b>. El <b>Owner (Admin Super)</b> es un perfil de acceso del License Manager que define los permisos que se conceden a un determinado usuario de tu tienda, e incluso puede asignarse a varios usuarios.
</div>

La página de gestión del titular le permite identificar al usuario titular actual, transferir la propiedad de la tienda y ver el registro de actividad asociado al usuario titular. Para acceder a esta página navegue a **Configuración de la cuenta** > **Gestión de la cuenta** > **Cuenta**, desplácese hacia abajo hasta la sección de «Contacto» y haga clic en el enlace `Gestión de titulares`.

## Acciones restringidas al usuario titular

Solo el usuario titular puede realizar estas acciones críticas de mantenimiento y autorización:

* [Transferir la propiedad de la tienda](https://help.vtex.com/es/tutorial/transferir-la-propiedad-de-la-tienda--7a7fRn7Em47DcP272RwUYG) a un nuevo usuario titular
* Operaciones de [mantenimiento de la base de datos (full cleanup)](https://help.vtex.com/es/tutorial/database-maintenance-full-cleanup--34P9LGs7BCIQK6acQom802) tales como:
    * Volver a registrar los precios en SmartCheckout
    * Eliminar productos del indexador
    * Eliminar productos/SKU e ítems relacionados
    * Eliminar categorías, marcas, campos e ítems relacionados
    * Eliminar _sellers_ e ítems relacionados
    * Programar una indexación completa
* Autenticar la cuenta en nuestros conectores nativos, como:
    * [Facebook](https://help.vtex.com/es/tracks/facebook-integration--7h8KvIC4DbRRc8VlyJ8PFc/5OP69kHWKca01wLH0w10jX)
    * [Google Shopping](https://help.vtex.com/es/tracks/integrating-with-google-shopping--25Sl7iOqq58PGfVfTAo8Xw/44hAYlKYSRZMTNY3ELxeQ2)
    * [Mercado Libre](https://help.vtex.com/es/tracks/mercado-libre-integration-set-up--2YfvI3Jxe0CGIKoWIGQEIq/4leBEAd22Icm46kGeiGgak)
* [Aprobar solicitudes de cancelación de pedidos](https://help.vtex.com/es/tutorial/how-does-cancellation-work-when-requested-by-the-customer--3wEI6DUNtecooG2Ki4Akqo)

Además, cuando VTEX necesita comunicar información importante sobre la tienda, como cambios de roles, dicha comunicación se lleva a cabo directa y exclusivamente con el usuario titular.

<div class="alert alert-info">
La creación de <a href="https://help.vtex.com/es/tutorial/application-keys--2iffYzlvvz4BDMr6WGUtet">credenciales de autenticación</a> (appKey/appToken) para integraciones de API ya no está restringida al usuario titular. Vea este <a href="https://help.vtex.com/es/announcements/changes-in-the-name-and-restricted-actions-available-to-the-master-user">anuncio</a> para saber más detalles sobre este cambio.
</div>
