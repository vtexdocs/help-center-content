---
title: 'Gestionar el acceso de usuarios a AI Workspace (beta)'
createdAt: 2026-08-11T00:00:00.000Z
updatedAt: 2026-08-11T00:00:00.000Z
contentType: tutorial
productTeam: Identity
slugEN: managing-user-access-to-ai-workspace
locale: es
---

> ℹ️ Esta funcionalidad está disponible solo para cuentas que utilizan AI Workspace. Si no es tu caso, consulta [Gestionar usuarios administradores](https://help.vtex.com/es/docs/tutorials/gestionar-usuarios-administradores).

Los agentes de AI Workspace actúan en nombre de los usuarios y pueden encadenar llamadas a múltiples servicios, con permisos que varían según quién los activa. Por eso, definir a qué agentes puede acceder cada usuario es fundamental para la gobernanza de la cuenta.

Para cuentas con AI Workspace, la página **Usuarios** en el Admin VTEX muestra la lista de todos los usuarios administradores y los agentes a los que cada uno tiene acceso, además de permitir la gestión individual de acceso. Esto garantiza que cada persona interactúe solo con los agentes relevantes para su función.

![Página de usuarios administradores con las columnas Email, Roles, Agentes y MFA](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/beta/ai-workspace-beta/gerenciar-acesso-de-usuarios-ao-ai-workspace_1.png)

La página muestra la siguiente información en una tabla:

| Columna | Descripción                                                                                                                                                                                                                                                                                                                                                                          |
| :------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Email   | Email del usuario administrador registrado en el Admin VTEX.                                                                                                                                                                                                                                                                                                         |
| Roles   | Roles asociados al usuario administrador.                                                                                                                                                                                                                                                                                                                            |
| Agentes | Agentes de AI Workspace a los que el usuario tiene acceso.                                                                                                                                                                                                                                                                                                           |
| MFA     | Configuración de autenticación multifactor (MFA), que puede tener el status Inactivo o mostrar el método configurado (SMS o Authenticator). Consulta [Autenticación de dos factores](https://help.vtex.com/es/docs/tutorials/habilitar-inicio-de-sesion-por-autenticacion-de-2-factores) para más información. |

## Requisitos

Para gestionar usuarios administradores, necesitas tener un [rol](https://help.vtex.com/es/docs/tutorials/roles) que contenga los siguientes [recursos de License Manager](https://help.vtex.com/es/docs/tutorials/recursos-del-license-manager):

| Nombre del recurso | Clave del recurso (resource_key) | Descripción                                                               |
| :----------------- | :----------------------------------------------------------------------- | :------------------------------------------------------------------------ |
| Edit Admin Users   | EditAdminUsers                                                           | Permite crear, editar y remover usuarios administrativos. |
| View Admin Users   | ViewAdminUsers                                                           | Permite ver información de usuarios y roles.              |

## Crear un usuario con acceso a AI Workspace

Para agregar un nuevo usuario y definir su acceso a AI Workspace sigue los pasos a continuación:

1. En la barra superior del Admin VTEX haz clic en el avatar de tu perfil, marcado por la inicial de tu email, y luego en **Configuración de la cuenta > Usuarios**.
2. Haz clic en **Nuevo**.
3. Completa el campo **Email** con la dirección del nuevo usuario.
4. En **Ámbito de acceso**, haz clic en la pestaña **AI Workspace**.
5. En la sección **Agentes**, marca los agentes a los que el usuario podrá acceder.

   > ℹ️ Para ver qué recursos utiliza cada agente en nombre del usuario, pasa el cursor sobre **Recursos** al lado del agente.
6. Haz clic en **Crear**.

![Pantalla de creación de un nuevo usuario con la pestaña AI Workspace seleccionada y agentes marcados](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/beta/ai-workspace-beta/gerenciar-acesso-de-usuarios-ao-ai-workspace_2.png)

## Editar el acceso de un usuario existente

Si es necesario ajustar los agentes disponibles para un usuario ya registrado, edita el usuario siguiendo las instrucciones a continuación.

1. En la barra superior del Admin VTEX, haz clic en el avatar de tu perfil, marcado por la inicial de tu email, y luego en **Configuración de la cuenta > Usuarios**.
2. En la fila del usuario deseado, haz clic en **⋮ > Editar**.
3. En **Ámbito de acceso**, haz clic en la pestaña **AI Workspace**.
4. En la sección **Agentes**, marca o desmarca los agentes según sea necesario.

   > ℹ️ Para ver qué recursos utiliza cada agente en nombre del usuario, pasa el cursor sobre **Recursos** al lado del agente.
5. Haz clic en **Guardar**.

![Pantalla de edición de un usuario existente con la pestaña AI Workspace seleccionada](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/beta/ai-workspace-beta/gerenciar-acesso-de-usuarios-ao-ai-workspace_3.png)

> ℹ️ Para eliminar usuarios, exportar la lista de usuarios o gestionar el acceso a recursos del Admin VTEX, consulta [Gestionar usuarios administradores](https://help.vtex.com/es/docs/tutorials/gestionar-usuarios-administradores).
