---
title: 'Crear usuario de televentas'
id: frequentlyAskedQuestions_4227
status: PUBLISHED
createdAt: 2019-01-24T20:46:00.809Z
updatedAt: 2025-09-30T18:42:28.656Z
publishedAt: 2025-09-30T18:42:28.656Z
firstPublishedAt: 2019-01-24T21:59:45.397Z
contentType: tutorial
productTeam: Shopping
author: authors_24
slugEN: how-can-i-create-callcenter-user
legacySlug: como-creo-un-usuario-de-televentas
locale: es
subcategoryId: 63DHe3VQEEE6Uuua8gIs2M
---

Este artículo explica cómo crear un usuario con un rol de televentas. Para más información sobre los roles y cómo configurarlos, consulta el artículo [Roles](https://help.vtex.com/es/docs/tutorials/roles).

Los roles de televentas permiten a los retailers otorgar permiso de acceso a usuarios de televentas para atender a los clientes y realizar operaciones de ventas.

> ℹ️ Los usuarios con el rol Call Center Operator tienen acceso restringido al entorno de televentas de la tienda y no pueden acceder a los módulos administrativos del Admin VTEX, como Catálogo, Pagos, Promociones, entre otros. El acceso está limitado exclusivamente a las funcionalidades necesarias para realizar ventas asistidas en nombre de los clientes.

Cuando los usuarios de televentas inician sesión, se les redirige automáticamente al sitio web de televentas, donde pueden realizar operaciones en la tienda en nombre del cliente final.

Para crear un usuario con el rol de televentas, sigue los pasos a continuación:

1. Haz clic en el ícono con la inicial de tu email y luego en **Configuración de la cuenta** > **Roles de usuario**.
2. Haz clic en el botón **Nuevo rol**.
3. En el menú **Seleccionar rol**, selecciona uno de los roles de televentas:

   - **Call center operator**: permite acceder a las [funcionalidades de televentas](https://help.vtex.com/es/docs/tutorials/funcionalidades-de-televentas) y ver todos los pedidos en el módulo **Pedidos**.
   - **Call center operator (restricted order views)**: permite acceder a las funcionalidades de televentas, pero solo permite ver los pedidos creados por el propio usuario.

   Para más información sobre los recursos de cada rol, consulta [Perfiles de acceso predefinidos](https://help.vtex.com/es/docs/tutorials/roles-de-usuario-predefinidos#call-center-operator).
4. En el campo **Agregar usuarios para este rol**, ingresa la dirección de email del usuario al que deseas asignar el rol de televentas.
5. Haz clic en el botón `Agregar`.
6. Si deseas agregar más usuarios, repite los pasos 4 y 5.
7. Haz clic en el botón `Guardar`.

> ⚠️ Al crear un [rol](https://help.vtex.com/es/docs/tutorials/roles), evita incluir [recursos](https://help.vtex.com/es/docs/tutorials/recursos-del-license-manager) de televentas junto con otros tipos de recursos. Combinar recursos puede causar comportamientos inesperados.