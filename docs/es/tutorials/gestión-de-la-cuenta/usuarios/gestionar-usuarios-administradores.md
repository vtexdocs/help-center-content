---
title: 'Gestionar usuarios administradores'
id: tutorials_512
status: PUBLISHED
createdAt: 2017-04-27T22:03:09.608Z
updatedAt: 2024-06-10T18:24:36.901Z
publishedAt: 2024-06-10T18:24:36.901Z
firstPublishedAt: 2017-04-27T23:03:28.211Z
contentType: tutorial
productTeam: Identity
author: authors_4
slugEN: managing-admin-users
legacySlug: creando-usuarios, gestionar-usuarios
locale: es
subcategoryId: 63DHe3VQEEE6Uuua8gIs2M
---

La gestión de los usuarios con acceso al entorno administrativo de la tienda VTEX se realiza a través de [Configuración de la cuenta](/es/tutorial/vision-general-configuraciones-de-la-cuenta), en la página de **Usuarios**. Para acceder a esta sección, en la barra superior del Admin VTEX, haz clic en el avatar de tu perfil, marcado por la inicial de tu email, y luego en **Configuración de la cuenta > Usuarios**.

En esta página puedes realizar las siguientes acciones: 

* [Crear usuarios](#crear-usuarios)
* [Editar usuarios](#editar-usuarios)   
* [Eliminar usuarios](#eliminar-usuarios)  
* [Exportar usuarios](#exportar-usuarios) 

![gestionar-usuarios-administradores](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/gestión-de-la-cuenta/usuarios/gestionar-usuarios-administradores.png)

La página muestra la siguiente información en una tabla: 

| Columna | Descripción |
| :---- | :---- |
| Email | Email del usuario administrador registrado en el Admin VTEX. |
| Roles | Roles asociados al usuario administrador. |
| MFA | Configuración de autenticación multifactor (MFA), que puede tener status Inactivo o mostrar el método en uso (SMS o Authenticator). Más información en [Habilitar inicio de sesión por autenticación de dos factores](/es/docs/tutorials/habilitar-inicio-de-sesion-por-autenticacion-de-2-factores). |

La barra de búsqueda permite buscar utilizando el email de los usuarios y muestra los resultados en tiempo real.

## Requisitos

Para gestionar usuarios administradores, tu [rol](/es/docs/tutorials/roles) debe tener los siguientes [recursos de License Manager](/es/docs/tutorials/recursos-del-license-manager):

| Nombre del recurso | Clave del recurso (resource_key) | Descripción |
| :---- | :---- | :---- |
| Edit Admin Users | EditAdminUsers | Permite crear, editar y remover usuarios administradores. |
| View Admin Users | ViewAdminUsers | Permite ver información de usuarios y roles. |

## Crear usuarios

Para agregar un usuario al Admin VTEX, debes registrar su email y asociarle los roles correspondientes siguiendo los pasos a continuación:

1. En la barra superior del Admin VTEX, haz clic en el **avatar de tu perfil**, marcado por la inicial de tu email, y luego en **Configuración de la cuenta** > **Usuarios**.
2. Haz clic en el botón `+ Nuevo`.
3. Ingresa el **Email**.
4. Selecciona los [roles](/es/docs/tutorials/roles) deseados.
5. Haz clic en `Guardar`.

El usuario recibirá un email confirmando la creación y un link para registrar una nueva contraseña de acceso. La contraseña debe tener al menos 8 caracteres e incluir un número, una letra mayúscula y una letra minúscula. Después de ingresarla, se enviará por email una clave de acceso para validar el registro.

## Editar usuarios

Si necesitas ajustar los permisos o actualizar el rol de un usuario registrado, edítalo siguiendo las instrucciones a continuación.

Aplica el principio de acceso mínimo, es decir, solo concede a los usuarios los roles y recursos estrictamente necesarios para desempeñar sus funciones diarias. Esto ayuda a reducir los riesgos de seguridad y garantiza un control más eficaz del entorno.

1. En la barra superior del Admin VTEX, haz clic en el **avatar de tu perfil** marcado por la inicial de tu email y luego en **Configuración de la cuenta > Usuarios**.
2. Para editar un usuario registrado, haz clic en el botón de menú ⋮ en la fila del usuario deseado y luego en **Editar**.

   No se puede cambiar el email de un usuario registrado. Si deseas cambiarlo, debes eliminarlo y registrarlo de nuevo.
3. En la pantalla de edición puedes agregar y remover [roles](/es/docs/tutorials/roles) del usuario.
4. Después de realizar los cambios deseados, haz clic en `Guardar`.

> ℹ️ Se mostrará una alerta al editar un usuario que no utilice autenticación multifactor (MFA). El artículo [Habilitar login por autenticación de dos factores](/es/tutorial/habilitar-login-por-autenticacao-de-2-fatores--4Ae1fcQi12g8u4SkQKCqWQ) describe cómo habilitar esta configuración.

> ⚠️ Si remueves todos sus roles, el usuario no podrá acceder al Admin VTEX.

## Eliminar usuarios

Cuando se debe revocar el acceso de un colaborador al Admin VTEX, es necesario eliminar su registro siguiendo los pasos a continuación.

1. En la barra superior del Admin VTEX, haz clic en el **avatar de tu perfil** marcado por la inicial de tu email y luego en **Configuración de la cuenta > Usuarios**.
2. Para revocar el acceso de un usuario, en la lista de usuarios haz clic en el botón de menú <i class="fas fa-ellipsis-v"></i> en la fila del usuario que deseas eliminar.
3. Haz clic en **Eliminar**.
4. Confirma haciendo clic en `Confirmar`.

## Exportar usuarios

Si necesitas consultar o guardar una lista de todos los usuarios administradores registrados, puedes exportarlos en un archivo CSV siguiendo los pasos a continuación:

1. En la barra superior del Admin VTEX, haz clic en el **avatar de tu perfil** marcado por la inicial de tu email y luego en **Configuración de la cuenta > Usuarios**.
2. Para exportar los datos de los usuarios, haz clic en el botón <i class="fas fa-download"></i> `Exportar`.

La descarga del archivo CSV se iniciará automáticamente. El archivo contiene el ID, email, roles y configuración de MFA de cada usuario.

## Más información

* [Configuración de la cuenta](/es/tutorial/vision-general-configuraciones-de-la-cuenta)
* [Roles](/es/docs/tutorials/roles)
* [Recursos del License Manager](/es/docs/tutorials/recursos-del-license-manager)
* [Habilitar inicio de sesión por autenticación de dos factores](/es/docs/tutorials/habilitar-inicio-de-sesion-por-autenticacion-de-2-factores)
