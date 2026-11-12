---
title: 'Gestionar roles y permisos de storefront personalizados'
createdAt: '2026-09-29T18:10:00.000Z'
updatedAt: '2026-09-29T18:10:00.000Z'
contentType: tutorial
productTeam: B2B
slugEN: manage-custom-storefront-roles-and-permissions
locale: es
---

> ⚠️ Esta funcionalidad se encuentra disponible únicamente para tiendas que utilizan [B2B Buyer Portal](https://help.vtex.com/es/docs/tutorials/b2b-buyer-portal-es), actualmente disponible para cuentas seleccionadas.

La página **Permisos personalizados** te permite ver los roles y permisos de storefront personalizados de tu cuenta, y gestionarlos desde el Admin VTEX.

Para más información sobre los conceptos, las reglas y la lista de roles y permisos predefinidos, consulta [Roles y permisos de storefront personalizados](https://help.vtex.com/es/docs/tutorials/roles-y-permisos-de-storefront-personalizados).

Para acceder a la página en el Admin VTEX, haz clic en **Configuración > Permisos personalizados**.

En esta página puedes:

- Gestionar roles personalizados:
  - [Crear rol de storefront personalizado](#crear-rol-de-storefront-personalizado)
  - [Editar rol de storefront personalizado](#editar-rol-de-storefront-personalizado)
  - [Eliminar rol de storefront personalizado](#eliminar-rol-de-storefront-personalizado)
- Gestionar permisos personalizados:
  - [Crear permiso de storefront personalizado](#crear-permiso-de-storefront-personalizado)
  - [Eliminar permiso de storefront personalizado](#eliminar-permiso-de-storefront-personalizado)

## Requisitos

Hay dos requisitos que deben cumplirse para acceder a la página **Permisos personalizados**:

- Tu cuenta debe utilizar [B2B Buyer Portal](https://help.vtex.com/es/docs/tutorials/b2b-buyer-portal-es). En las cuentas que no usan esta solución, la página no está visible ni se puede acceder a ella.
- El usuario debe tener un rol del Admin con el [recurso de License Manager](https://help.vtex.com/es/docs/tutorials/recursos-del-license-manager) **Edit Storefront User Permissions** en la categoría **Services access control**. Sin este recurso, el usuario no verá la página.

### Pestaña Roles

La pestaña **Roles** muestra únicamente los roles personalizados de la cuenta. Los roles predefinidos no se muestran en la lista, pero puedes consultarlos mediante el link **Roles predefinidos**, disponible en la pestaña. Si la cuenta aún no tiene ningún rol personalizado, la pestaña muestra un mensaje con el botón `Crear rol`.

En la parte superior de la pestaña, el botón `Crear rol` abre el formulario para crear un nuevo rol.

Debajo del botón la lista de roles muestra los roles en orden alfabético de la A a la Z. Para invertir el orden haz clic en el título de la columna **Nombre**. Cuando hay muchos roles la lista se divide en páginas.

| Columna | Descripción |
| --- | --- |
| **Nombre** | Nombre que identifica el rol, definido al momento de creación. |
| **Acciones** | Menú con las acciones de `Editar rol` o `Eliminar`. |

El menú en la fila de cada rol muestra las siguientes opciones:

- **Editar rol:** abre el formulario de edición del rol. Consulta [Editar rol de storefront personalizado](#editar-rol-de-storefront-personalizado).
- **Eliminar:** elimina el rol después de confirmar. La opción permanece desactivada mientras el rol esté asignado a algún usuario. Consulta [Eliminar rol de storefront personalizado](#eliminar-rol-de-storefront-personalizado).

### Pestaña Permisos

La pestaña **Permisos** muestra solo los permisos personalizados de la cuenta. Los permisos predefinidos no se muestran en la lista, pero puedes consultarlos mediante el link **Permisos predefinidos**, disponible en la pestaña. Si la cuenta aún no tiene ningún permiso personalizado, la pestaña muestra un mensaje con el botón `Crear permiso`.

En la parte superior de la pestaña se muestra el:

- **Contador de permisos:** indica cuántos permisos personalizados ha creado la cuenta, en el formato `{n} de 10 permisos personalizados`. Un ícono de ayuda a su lado explica que cada cuenta puede tener hasta 10 permisos personalizados y que los predefinidos no cuentan para el límite.
- **Botón `Crear permiso`:** abre el formulario de creación de un nuevo permiso. Cuando la cuenta alcanza el límite de 10, el botón se desactiva y una notificación encima de la lista explica que es necesario eliminar un permiso que no esté en uso para crear otro.

La lista de permisos muestra los permisos personalizados de la cuenta e incluye la siguiente información:

| Columna | Descripción |
| --- | --- |
| **Nombre** | Nombre que identifica el permiso, definido al momento de la creación. |
| **Descripción** | Texto que explica la autorización que el permiso otorga. |
| **Roles que lo utilizan** | Roles que contienen el permiso. Cuando hay más de un rol, la columna muestra el nombre del primero seguido del total de roles adicionales, por ejemplo, `Comprador, +2`. Al pasar el cursor sobre el texto un tooltip lista todos los roles. |
| **Creado el** | Fecha de creación del permiso. Al pasar el cursor sobre la fecha un tooltip muestra el día y la hora exactos. |
| **Acciones** | Menú con la acción de `Eliminar` un permiso. |

No puedes editar un permiso después de crearlo, solo eliminarlo usando la opción **Eliminar** en el menú de la fila del permiso y confirmando la acción. La opción se desactiva mientras algún rol esté usando el permiso. Para más detalles, consulta [Eliminar permiso de storefront personalizado](#eliminar-permiso-de-storefront-personalizado).

## Gestionar roles de storefront personalizados

En esta sección se describe cómo crear, editar y eliminar roles personalizados.

### Crear rol de storefront personalizado

Para crear un rol personalizado sigue las instrucciones a continuación:

1. En el Admin VTEX, accede a **Configuración > Permisos personalizados**.
2. En la pestaña **Roles** haz clic en `Crear rol`.
3. En **Nombre** ingresa el nombre del rol.

    > ⚠️ Elige nombres descriptivos para los roles, que dejen claro el tipo de usuario al que cada rol está destinado.
4. En la lista marca los permisos que el rol debe contener. Para encontrarlos más rápido, puedes buscar por el nombre del permiso o filtrar por **Tipo**: **Todos**, **Personalizados** o **Predefinidos**.
5. Haz clic en `Crear rol`.

    Un mensaje confirma la creación y el rol se muestra en la pestaña **Roles**. El botón `Crear rol` solo se activa después de que el nombre se completa con un valor válido.

#### Crear permiso de storefront durante la creación del rol

Si el permiso que necesitas aún no existe, puedes crearlo sin salir del formulario de creación del rol:

1. Con el formulario del rol abierto, debajo de la lista de permisos, haz clic en `Crear permiso`.
2. Completa el **Nombre** y **Descripción** del permiso y finaliza la creación.

    El nombre y los permisos que ya marcaste en el rol se mantienen.
3. En la lista de permisos, busca el nuevo permiso identificado con la etiqueta **Nuevo**. Se mostrará sin marcar. Márcalo para incluirlo en el rol.
4. Haz clic en `Crear rol`.

Si la cuenta ya tiene 10 permisos personalizados, la opción **Crear permiso** no se muestra. En su lugar, un mensaje informa que se alcanzó el límite y sugiere eliminar los permisos que no estén en uso en la pestaña **Permisos**. La lista sigue mostrando todos los permisos existentes, así que aún puedes crear el rol.

### Editar rol de storefront personalizado

> ⚠️ Al remover un permiso de un rol, el cambio entra en vigor de inmediato para todos los usuarios que tienen ese rol.

Para editar un rol personalizado sigue las instrucciones a continuación:

1. En el Admin VTEX, accede a **Configuración > Permisos personalizados**.
2. En la pestaña **Roles** haz clic en el ícono de menú (⋮) del rol que deseas editar y selecciona `Editar rol`.
3. Cambia el nombre o los permisos del rol.

    Los permisos actuales se muestran marcados. Los permisos creados después de la última vez que se guardó el rol se muestran sin marcar y con la etiqueta **Nuevo** para que decidas si deseas incluirlos.
4. Haz clic en `Guardar cambios`.

    Un mensaje confirma la actualización. Si cambiaste el nombre, el rol pasa a la posición correspondiente en el orden alfabético.

### Eliminar rol de storefront personalizado

Para eliminar un rol personalizado sigue las instrucciones a continuación:

1. En el Admin VTEX, accede a **Configuración > Permisos personalizados**.
2. En la pestaña **Roles**, haz clic en el ícono de menú (⋮) del rol que deseas eliminar.
3. Haz clic en `Eliminar`.
4. En la ventana de confirmación, haz clic en `Eliminar` nuevamente.

    Un mensaje confirma la eliminación y el rol se elimina de la lista.

Si la opción **Eliminar** está desactivada, el rol sigue asignado a algún usuario. Pasa el cursor sobre la opción para ver el motivo. Para eliminar el rol, remuévelo de todos los usuarios que lo utilizan. Más información en [Agregar usuarios a la organización compradora](https://help.vtex.com/es/docs/tutorials/agregar-usuarios-a-la-organizacion-compradora).

## Gestionar permisos de storefront personalizados

En esta sección se describe cómo crear y eliminar permisos personalizados. No es posible editar un permiso después de creado.

### Crear permiso de storefront personalizado

Para crear un permiso personalizado sigue las instrucciones a continuación:

1. En el Admin VTEX, accede a **Configuración > Permisos personalizados**.
2. En la pestaña **Permisos**, haz clic en `Crear permiso`.
3. En **Nombre**, ingresa el nombre del permiso.

    > ⚠️ El nombre debe seguir las [reglas de los permisos personalizados](https://help.vtex.com/es/docs/tutorials/roles-y-permisos-de-storefront-personalizados#reglas-y-limites-de-los-permisos-de-storefront-personalizados) y no se puede cambiar después de la creación.
4. En **Descripción**, explica la autorización que el permiso otorga.
5. Haz clic en `Crear`.

    Un mensaje confirma la creación y el permiso se muestra en la tabla. Para que tenga efecto, asócialo a un rol. En el propio mensaje, el botón `Ir a la pestaña Roles` te lleva a la lista de roles.

### Eliminar permiso de storefront personalizado

Para eliminar un permiso personalizado sigue las instrucciones a continuación:

1. En el Admin VTEX, accede a **Configuración > Permisos personalizados**.
2. En la pestaña **Permisos**, haz clic en el ícono de menú (⋮) del permiso que deseas eliminar.
3. Haz clic en `Eliminar`.
4. En la ventana de confirmación, haz clic en `Eliminar` nuevamente.

    Un mensaje confirma la eliminación y el permiso se elimina de la lista. Si la cuenta había alcanzado el límite de 10 permisos personalizados, el botón `Crear permiso` vuelve a estar activo.

Si la opción **Eliminar** está desactivada, significa que un rol aún utiliza el permiso. Pasa el cursor sobre la opción para ver cuántos roles lo utilizan. La columna **Roles que lo utilizan** muestra cuáles son. Para eliminar el permiso, remuévelo de cada uno de esos roles siguiendo los pasos de [Editar rol de storefront personalizado](#editar-rol-de-storefront-personalizado).

> ℹ️ Para gestionar roles y permisos personalizados vía API, accede a [Storefront Roles API](https://developers.vtex.com/docs/api-reference/storefront-roles-api) y a la guía para desarrolladores [Custom storefront roles and resources](https://developers.vtex.com/docs/guides/custom-storefront-roles-and-resources).

## Más información

- [Roles y permisos de storefront personalizados](https://help.vtex.com/es/docs/tutorials/roles-y-permisos-de-storefront-personalizados)
- [Agregar usuarios a la organización compradora](https://help.vtex.com/es/docs/tutorials/agregar-usuarios-a-la-organizacion-compradora)
- [Recursos de License Manager](https://help.vtex.com/es/docs/tutorials/recursos-del-license-manager)
