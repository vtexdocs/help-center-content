---
title: 'Las credenciales en las afiliaciones de gateway deben ser obtenidas por el proveedor de pagos'
id: 6RsAtRDmehojI076vYBpog
status: PUBLISHED
createdAt: 2022-10-13T20:36:50.162Z
updatedAt: 2023-04-03T14:13:18.199Z
publishedAt: 2023-04-03T14:13:18.199Z
contentType: updates
productTeam: Financial
author: 4ubliktPJIsvyl1hq91RdK
slug: las-credenciales-en-las-afiliaciones-de-gateway-deben-ser-obtenidas-por-el
legacySlug: las-credenciales-en-las-afiliaciones-de-gateway-deben-ser-obtenidas-por-el
announcementImageID: ''
announcementSynopsisES: 'Las credenciales en las afiliaciones de gateway creadas en el Admin deben ser reemplazadas antes del 31/10 por seguridad'
---

Al realizar la [configuración de las afiliaciones de gateway](https://help.vtex.com/es/tutorial/afiliaciones-de-gateway--tutorials_444) en el Admin para que los pagos estén disponibles en la tienda, los administradores de las tiendas deben introducir las credenciales para identificarse ante el proveedor de pagos: la **clave de aplicación** y el **token de aplicación**. Estas credenciales actúan como un usuario y una contraseña y deben ser proporcionadas por el proveedor de pagos.

## ¿Qué cambió?

Estas credenciales no deben confundirse con las credenciales [clave de aplicación y token de aplicación utilizadas en las API de VTEX para las integraciones](https://help.vtex.com/es/tutorial/claves-de-aplicacion--2iffYzlvvz4BDMr6WGUtet). En este caso, las credenciales se generan en el Admin y se utilizan para identificar los sistemas externos que acceden a los servicios de las tiendas VTEX. Una **clave de aplicación** generada en el Admin puede ser identificada si empieza por `vtexappkey-`.

Si tu tienda tiene alguna afiliación de gateway configurada con un par de **clave de aplicación** y **token de aplicación** generados en el Admin, deben ser reemplazados antes del 30 de abril de 2023.

## ¿Por qué realizamos este cambio?

El uso de la **clave de aplicación** y del **token de aplicación** generados en el Admin en las afiliaciones de gateway puede suponer un riesgo de seguridad, ya que se están compartiendo claves para acceder a los servicios de una tienda VTEX. El [rol](https://help.vtex.com/es/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc) asignado a una credencial define a qué [recursos de la tienda](https://help.vtex.com/es/tutorial/recursos-del-license-manager--3q6ztrC8YynQf6rdc6euk3) se puede acceder. Dependiendo del rol utilizado, cualquiera que tenga acceso a las credenciales podrá acceder a los recursos indebidamente permitidos. Si es necesario, puedes consultar las instrucciones del artículo [Claves de aplicación](https://help.vtex.com/es/tutorial/claves-de-aplicacion--2iffYzlvvz4BDMr6WGUtet) para desactivar una **clave de aplicación**.

## ¿Qué se necesita hacer?

Las credenciales deben ser proporcionadas por el proveedor de pagos correspondiente a la afiliación que se está configurando. La sustitución debe realizarse antes del 30 de abril de 2023. Las instrucciones para hacer la configuración se encuentran en el artículo [Registrar afiliaciones de gateway](https://help.vtex.com/es/tutorial/claves-de-aplicacion--2iffYzlvvz4BDMr6WGUtet).
