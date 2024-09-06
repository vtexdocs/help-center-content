---
title: 'Roles'
id: 7HKK5Uau2H6wxE1rH5oRbc
status: CHANGED
createdAt: 2020-04-08T15:21:05.110Z
updatedAt: 2023-11-30T21:36:49.415Z
publishedAt: 2023-09-26T13:32:10.280Z
firstPublishedAt: 2020-04-08T20:52:12.334Z
contentType: tutorial
productTeam: Identity
author: 1malnhMX0vPThsaJaZMYm2
slug: roles
locale: es
legacySlug: como-crear-perfil-de-acceso, perfiles-de-acceso
subcategoryId: 1HSqkejwuYcQSMC400uY84
---

La página **Roles** en el Admin VTEX permite gestionar los [roles](https://help.vtex.com/es/tutorial/control-de-acceso--4rM3gyiWqtkim4Q8hOvLTC#roles) registrados en tu tienda y los usuarios asociados a los mismos. Accede desde la barra superior del Admin VTEX haciendo clic en el avatar de tu perfil, marcado por la inicial de tu email, y luego en **Configuración de la cuenta** > **Roles de usuario**.

En la página **Roles** puedes realizar las siguientes acciones:

* [Crear rol](#crear-rol)
* [Buscar rol](#buscar-rol)
* [Editar rol](#editar-rol)
* [Eliminar rol](#eliminar-rol)

![roles-es](https://images.ctfassets.net/alneenqid6w5/hn5I8XMFI38UCoMxIIjjM/61435c94a6654fd066e3b0f5f8cd2fd0/roles-es.png)

La página muestra en formato de tabla una lista con todos los roles registrados en la cuenta y su respectiva información: 

| **Columna** | **Descripción** |
|---|---|
| **Nombre** | Nombre del rol. |
| **Usuarios** | Número de usuarios asociados al rol. |
| **Tipo de rol** | Tipo de rol, que puede ser __Predefinido__ o __Personalizado__. Para más información sobre cada uno de ellos, consulta [Tipos de rol](https://help.vtex.com/es/tutorial/control-de-acceso--4rM3gyiWqtkim4Q8hOvLTC#tipos-de-rol). |
| **Productos** | Productos de License Manager incluidos en el rol. Consulta los productos disponibles en la columna __Producto__ de la tabla en [Recursos de License Manager](https://help.vtex.com/es/tutorial/recursos-do-license-manager--3q6ztrC8YynQf6rdc6euk3). |
| **Fecha de creación** | Fecha de creación del rol personalizado. Los roles predefinidos o creados antes de diciembre de 2023 carecen de información de fecha en esta columna. |

En una cuenta recién creada, solo aparecerá en la lista el rol _Owner (Admin Super)_. Dicho rol permite al usuario acceder sin restricciones a todos los recursos nativos de la plataforma.

>⚠️ El número de usuarios con el rol *Owner (Admin Super)* debe ser el menor posible. También hay que asegurarse de que haya visibilidad y control sobre quién recibe este acceso.

## Crear rol

Para registrar un nuevo rol, haz clic en `+ Crear rol`. Para más detalles sobre cómo rellenar el formulario, consulta el artículo [Crear nuevo rol](https://help.vtex.com/pt/tutorial/crear-nuevo-rol--qGtNQpKSSAduX94l2WZBW).

## Buscar rol

Puedes buscar un rol ingresando parte de su nombre en la barra de búsqueda. Los resultados se actualizarán en tiempo real en la lista.

## Editar rol

Puedes editar los recursos y usuarios relacionados con un determinado rol; solo hay que hacer clic en el ícono de `⫶` en la fila del rol que deseas editar y a continuación en <i class="fas fa-pencil-alt"></i> `Editar`.

## Eliminar rol

Para eliminar un rol, haz clic en el ícono de ⫶ en la fila del rol que deseas eliminar y a continuación en <i class="far fa-trash-alt"></i> `Eliminar`.

>⚠️ Al eliminar un rol, los usuarios asociados al mismo perderán el acceso a los [recursos del License Manager](https://help.vtex.com/es/tutorial/recursos-del-license-manager--3q6ztrC8YynQf6rdc6euk3) relacionados con él, a menos que tengan otros roles con los mismos permisos.

## Más información

* [Control de acceso](https://help.vtex.com/es/tutorial/control-de-acceso--4rM3gyiWqtkim4Q8hOvLTC)
* [Crear rol](https://help.vtex.com/es/tutorial/crear-nuevo-rol--qGtNQpKSSAduX94l2WZBW)
