---
title: 'Nuevos permisos para acceder a la configuración de pedidos'
id: UyJ0JRWiP9biWoAMR0ODF
status: PUBLISHED
createdAt: 2025-10-21T14:17:33.120Z
updatedAt: 2025-10-22T13:00:10.895Z
publishedAt: 2025-10-22T13:00:10.895Z
contentType: updates
productTeam: Shopping
author: 2o8pvz6z9hvxvhSoKAiZzg
slugEN: 2025-10-21-new-license-manager-resources-order-configurations
locale: es
legacySlug: nuevos-recursos-de-license-manager-configuracion-pedidos
announcementImageID: 'undefined'
announcementSynopsisES: 'Nuevos permisos requeridos para acceder a la configuración de pedidos en el Admin VTEX'
---

Para aumentar la seguridad y control de la autenticación, actualizamos la forma en que [License Manager](/es/docs/tutorials/roles) valida el acceso a la configuración de pedidos de la tienda. Los nuevos recursos son obligatorios para poder acceder a ciertas páginas del Admin VTEX. 

## ¿Qué cambió?

Actualizamos los [recursos de License Manager](/es/docs/tutorials/recursos-del-license-manager) utilizados para validar la autenticación de los usuarios al acceder a algunas páginas del Admin VTEX. Ahora se requieren los recursos `Save Order Configuration` y `Save OrderForm Configuration` para acceder a las páginas de [configuración general de pedidos](/es/docs/tutorials/configuraciones-generales) y de [gestión de afiliados](/es/docs/tutorials/como-configurar-afiliado).

## ¿Qué se necesita hacer?

Para que los usuarios puedan acceder a las páginas mencionadas anteriormente, debes [crear un rol personalizado](/es/tutorial/crear-nuevo-rol--qGtNQpKSSAduX94l2WZBW#rol-personalizado) o [editar el rol existente](/es/tracks/cuentas-y-permisos--5PxyAgZrtiYlaYZBTlhJ2A/6Ymo5bNMyEYBGsTmbTC3H9#editar-perfil-de-acceso) para agregarle los recursos `Save Order Configuration` y `Save OrderForm Configuration`.

Después de agregar los recursos, los usuarios podrán acceder a las páginas del Admin VTEX indicadas.

