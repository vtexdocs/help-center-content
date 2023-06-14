---
title: "El rol Owner (Admin Super) ya no tiene permiso para crear usuarios"
id: 5OpVXwzX5NWqTkVZ7QLMBd
status: PUBLISHED
createdAt: 2023-02-03T14:49:10.763Z
updatedAt: 2023-02-06T14:08:09.172Z
publishedAt: 2023-02-06T14:08:09.172Z
contentType: updates
productTeam: Identity
author: 2Gy429C47ie3tL9XUEjeFL
slug: el-rol-owner-admin-super-ya-no-tiene-permiso-para-crear-usuarios
legacySlug: 
announcementImageID: ""
announcementSynopsisES: El rol Owner (Admin Super) ya no incluye el recurso Save user, relacionado con las acciones de gestión de usuarios.
---

**Owner (Admin Super)** es un [rol](https://help.vtex.com/es/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc) que abarca todos los [recursos](https://help.vtex.com/es/tutorial/recursos-del-license-manager--3q6ztrC8YynQf6rdc6euk3) necesarios para acceder a información y realizar tareas cotidianas en tu tienda VTEX.

Para mejorar las prácticas de seguridad de nuestro ecosistema, hemos redefinido los permisos predeterminados de usuarios y claves en la plataforma. Las claves son equivalentes a las contraseñas y se deben proteger con el mismo rigor.

El objetivo de estas medidas es facilitar a los administradores de la tienda la restricción de la cantidad de usuarios con el recurso **Save user** y, así, proporcionar mayor control sobre acciones sensibles y, por lo tanto, mayor seguridad para su tienda VTEX.

## Qué cambió?

A partir de hoy, el [rol](https://help.vtex.com/es/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc) **Owner (Admin Super)** dejará de incluir el [recurso](https://help.vtex.com/es/tutorial/recursos-del-license-manager--3q6ztrC8YynQf6rdc6euk3) **Save user**. Esto significa que los usuarios que solo tengan este rol perderán la capacidad de:
- [Crear usuarios](https://help.vtex.com/es/tutorial/gestionar-usuarios--tutorials_512).
- Asignar [roles](https://help.vtex.com/es/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc) a los usuarios.
- Remover [roles](https://help.vtex.com/es/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc) de los usuarios.
- [Editar datos de usuarios](https://help.vtex.com/es/tutorial/gestionar-usuarios--tutorials_512#editando-usuarios).
- Crear [claves de aplicación](https://help.vtex.com/es/tutorial/claves-de-aplicacion--2iffYzlvvz4BDMr6WGUtet).
- Cambiar [claves de aplicación](https://help.vtex.com/es/tutorial/claves-de-aplicacion--2iffYzlvvz4BDMr6WGUtet).

Además, a partir de hoy, VTEX tiene el rol **User Administrator - RESTRICTED**, que incluye únicamente el recurso **Save user** descrito anteriormente.

## ¿Por qué realizamos este cambio?

Esto es necesario para reducir las posibilidades de que personas malintencionadas realicen cambios en la plataforma que puedan causar daños a tu tienda, como cambios en el checkout y gestión de usuarios administrativos.

A partir de ahora, los roles de usuarios administrativos y claves de aplicación tendrán permisos predeterminados más limitados, y algunas acciones, como la creación de usuarios administrativos y claves de aplicación, estarán restringidas a un rol específico. De esta manera, facilitamos a nuestros clientes el monitoreo y control de quién puede realizar cambios en la plataforma VTEX.

Sabemos que estos cambios afectan las operaciones de nuestros clientes, pero la adopción de las mejores prácticas de seguridad siempre es necesaria y un beneficio para todo el ecosistema.

## ¿Qué se necesita hacer?

Este cambio afecta de forma diferente la gestión de permisos de [usuarios](#usuarios) y de [claves de aplicación](#claves-de-aplicacion).

### Usuarios

El rol **User Administrator - RESTRICTED** se asignará automáticamente a todos los usuarios que ya tengan el rol **Owner (Admin Super)**. Por lo tanto, no habrá pérdida de permisos para usuarios existentes, ya que tendrán ambos roles.

Sin embargo, recomendamos que revises los usuarios de tu tienda y remuevas el rol **User Administrator - RESTRICTED** de cada usuario que no necesite realizar acciones asociadas al recurso **Save user** según descrito anteriormente.

Los usuarios que, a partir de ahora, reciban el rol de usuario **Owner (Admin Super)**, no tendrán el recurso **Save user** y no podrán realizar las acciones asociadas, como crear y editar usuarios y claves de aplicación.

Si deseas que algún usuario de tu tienda pueda realizar las acciones asociadas al recurso **Save user** antes mencionadas, debes asegurarte de que el usuario tenga el rol **User Administrator - RESTRICTED** o crear un [rol de usuario personalizado](https://help.vtex.com/es/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#tipos-de-perfis) que incluya el recurso **Save user**.

### Claves de aplicación

Las claves de aplicación con el rol de usuario **Owner (Admin Super)** no recibirán el rol **User Administrator - RESTRICTED** automáticamente. Por lo tanto, si deseas que alguna clave de aplicación pueda realizar las acciones asociadas al recurso **Save user** antes mencionadas, debes asegurarte de que la clave tenga el rol **User Administrator - RESTRICTED** o crear un [rol de usuario personalizado](https://help.vtex.com/es/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#tipos-de-roles) que incluya el recurso **Save user**.

<div class="alert alert-warning">
Ten en cuenta que con los cambios descritos anteriormente, las claves de aplicación dejarán de tener el recurso <b>Save user</b> y será necesario que un usuario con este recurso se lo asigne, de ser necesario.
</div>

## ¿Cómo proteger las llaves de tu tienda?

Sigue las [buenas prácticas para el uso de claves de aplicación](https://help.vtex.com/es/tutorial/buenas-practicas-claves-de-aplicacion--7b6nD1VMHa49aI5brlOvJm).

Los incidentes ocurren cuando las claves de aplicacón de nuestros clientes se exponen a internet o se capturan mediante phishing. La fuga de estas claves puede tener distintas causas, como por ejemplo:

- Claves incluidas en el código fuente y proporcionadas en repositorios públicos.
- Uso compartido de claves a través de medios inseguros, como email a grupos de personas, canales de Slack u otros medios corporativos de comunicación en masa.
- Compartir claves de acceso con terceros.
- Posible uso indebido de credenciales por parte de empleados o subcontratistas.
- Ausencia de un proceso periódico de rotación de claves.
- Ausencia de una revisión periódica de usuarios y roles.

Reforzamos la importancia de cambiar periódicamente todas las contraseñas de los usuarios y las claves de aplicación, así como de constantemente revisar los usuarios que tienen acceso a la plataforma.

## Más información

Consulta la siguiente documentación para saber más sobre la gestión de usuarios y permisos en tu tienda:
- [Roles](https://help.vtex.com/es/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc)
- [Recursos de License Manager](https://help.vtex.com/es/tutorial/recursos-del-license-manager--3q6ztrC8YynQf6rdc6euk3)
- [Gestionar usuarios](https://help.vtex.com/es/tutorial/gestionar-usuarios--tutorials_512)
- [Claves de aplicación](https://help.vtex.com/es/tutorial/claves-de-aplicacion--2iffYzlvvz4BDMr6WGUtet)
- [Buenas prácticas para el uso de claves de aplicación](https://help.vtex.com/es/tutorial/buenas-practicas-claves-de-aplicacion--7b6nD1VMHa49aI5brlOvJm)

