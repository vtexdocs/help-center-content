---
title: 'Usuarios y roles'
createdAt: 2020-01-07T19:24:22.388Z
updatedAt: 2026-05-21T19:06:00.000Z
contentType: trackArticle
productTeam: Identity
slugEN: users-and-roles
locale: es
trackSlugEN: accounts-and-permissions
order: 2
---

El control de acceso en el Admin VTEX se basa en **usuarios** y **roles**, garantizando que cada persona solo tenga acceso a las funcionalidades necesarias para sus tareas.

## Usuarios

Un **usuario administrativo** es cualquier persona registrada con acceso al Admin de tu tienda. Cada usuario se identifica por email y debe tener al menos un rol asociado.

**Qué puedes hacer:**

- Crear, editar y eliminar usuarios.
- Asociar roles a los usuarios.
- Exportar lista de usuarios.

**Gestionados en:** _Configuración de la cuenta > Usuarios_

> ℹ️ Consulta [Gestionar usuarios administrativos](/es/docs/tutorials/gestionar-usuarios-administradores).

## Roles

Un **rol** es un conjunto de permisos que determina las funcionalidades a las que puede acceder un grupo de usuarios en la plataforma. Los permisos se basan en **recursos** de License Manager.

License Manager verifica si el usuario tiene los recursos necesarios para realizar cada acción en VTEX (acceder a una página, hacer una llamada de API, etc.). Sin los recursos adecuados, la solicitud se rechaza.

**Gestionados en:** _Configuración de la cuenta > Roles_

> ℹ️ Consulta [Roles](/es/docs/tutorials/roles).

### Tipos de roles

| Tipo               | Descripción                                                                                                          | Ejemplos                                                                         | Documentación                                                          |
| ------------------ | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| **Predefinidos**   | Roles predeterminados de VTEX que cubren los casos de uso más comunes.                               | Owner (Admin Super), Call Center Operator, Finance, Logistics | [Roles predefinidos](/es/docs/tutorials/roles-de-usuario-predefinidos) |
| **Personalizados** | Roles personalizados creados seleccionando solo los recursos necesarios para cada grupo de usuarios. | Rol para el equipo de Catálogo, rol para operadores de marketplace               | [Crear nuevo rol](/es/docs/tutorials/crear-nuevo-rol)                  |

## Usuario titular

Toda cuenta de VTEX tiene un único **usuario titular**, que es el principal responsable de la tienda. Este usuario:

- Tiene acceso total a todas las funcionalidades.
- Puede realizar acciones críticas como reindexación, limpieza completa (full cleanup) o autorizaciones especiales.
- Recibe comunicaciones importantes de VTEX.

> ⚠️ Usuario titular ≠ rol Owner (Admin Super). El titular es único por cuenta, mientras que Owner es un rol que puede asignarse a varios usuarios.

> ℹ️ Consulta [Usuario titular](/es/docs/tutorials/que-es-el-usuario-titular).

## Principio de mínimo privilegio

Aplica siempre el **mínimo privilegio necesario**: cada usuario debe tener solo los roles y recursos estrictamente necesarios para sus actividades. Esto reduce riesgos de seguridad y facilita el control.

**Buenas prácticas:**

- Minimiza usuarios con el rol Owner (Admin Super).
- Revisa los accesos y las claves de API periódicamente (al menos una vez al año).
- Elimina a los usuarios inactivos de inmediato.
- Utiliza emails corporativos, no personales.
- Evita cuentas compartidas (por ejemplo, admin@empresa.com).
- Exige autenticación de dos factores para todos los usuarios administrativos.
- Considera usar el inicio de sesión único (SSO).

> ℹ️ Consulta [Buenas prácticas de gestión de accesos para tiendas](/es/docs/tutorials/buenas-practicas-de-gestion-de-acceso-para-tiendas).

## Más información

- [Roles](/es/docs/tutorials/roles) - guía completa sobre control de acceso
- [Buenas prácticas de gestión de accesos para tiendas](/es/docs/tutorials/buenas-practicas-de-gestion-de-acceso-para-tiendas)
- [Gestionar usuarios administrativos](/es/docs/tutorials/gestionar-usuarios-administradores)
- [Crear nuevo rol](/es/docs/tutorials/crear-nuevo-rol)
- [Roles predefinidos](/es/docs/tutorials/roles-predefinidos)
- [Recursos de License Manager](/es/docs/tutorials/recursos-del-license-manager)
- [Usuario titular](/es/docs/tutorials/que-es-el-usuario-titular)
- [Transferir la propiedad de la tienda](/es/docs/tutorials/transferir-la-propiedad-de-la-tienda)
