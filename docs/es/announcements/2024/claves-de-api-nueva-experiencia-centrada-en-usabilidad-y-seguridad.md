---
title: 'Claves de API: nueva experiencia centrada en usabilidad y seguridad'
id: 23b9SUp3kOQfpImskTww7a
status: PUBLISHED
createdAt: 2024-12-03T16:41:41.840Z
updatedAt: 2025-02-05T19:21:26.857Z
publishedAt: 2025-02-05T19:21:26.857Z
contentType: updates
productTeam: Identity
author: 1malnhMX0vPThsaJaZMYm2
slugEN: api-keys-new-experience-focused-on-usability-and-security
locale: es
legacySlug: claves-de-api-nueva-experiencia-centrada-en-usabilidad-y-seguridad
announcementImageID: ''
announcementSynopsisES: 'Gestiona tus claves de API de forma más segura: nueva interfaz, duración de tokens y opciones de renovar y eliminar.'
---

Presentamos la nueva experiencia de gestión de [claves de API](https://help.vtex.com/es/tutorial/claves-de-api--4bFEmcHXgpNksoePchZyy6) que permite controlar las credenciales de forma más eficiente.

La actualización incluye una interfaz optimizada para facilitar la gestión, además de nuevas funcionalidades que mejoran la seguridad, como definir la duración de los tokens, renovar tokens y eliminar claves no utilizadas.

![apikeys-es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/announcements/2024/claves-de-api-nueva-experiencia-centrada-en-usabilidad-y-seguridad_1.png)

## ¿Qué cambió?

Las novedades se describen en la tabla a continuación:

| Cambio | Descripción |
| :---- | :---- |
| **Nombre** | Cambiamos el nombre *claves de aplicación* a *claves de API* en la interfaz del Admin. |
| **Diseño** | Rediseñamos la interfaz de gestión, creación y edición de claves de API para proporcionar una experiencia más intuitiva y eficiente. |
| **Separación de claves** | Ahora las claves generadas internamente y las claves externas están en pestañas separadas para facilitar la gestión de cada tipo de clave. |
| **Duración de tokens** | Ahora todos los tokens generados internamente tienen una duración predeterminada de 3 meses, con opción de extenderla a 6 meses desde la interfaz.<br><br>La configuración se aplica a todos los tokens generados en la cuenta, ya sean nuevos o existentes, y la duración se calculará desde la fecha en que se creó la clave.<br><br>Solo se puede ver y configurar la duración de los tokens externos a través de la cuenta en que se crearon.<br><br>La interfaz notificará a los retailers cuando los tokens generados pasen a estar obsoletos. El uso del token no se ve impactado. El status obsoleto es solo un recurso visual para indicar la duración del token y sugerir su renovación.<br><br>Más información en [Configurar la duración de las claves de API](https://help.vtex.com/es/tutorial/configurar-a-duracao-de-chaves-de-api--kcGIFysFt02FDuhsfjQwZ). |
| **Renovación de tokens** | Ahora se pueden renovar los tokens de claves generados en la cuenta. La funcionalidad te da la opción de eliminar el token antiguo inmediatamente o más tarde.<br><br>Si decides eliminarlo más tarde, ambos tokens serán válidos y funcionales hasta que elimines el antiguo, lo que te permite actualizar el token utilizado en las integraciones sin impactar la operación.<br><br>Más información en [Renovar token de API](https://help.vtex.com/es/tutorial/renovar-token-de-api--7r4AzptYjXErGHadg9LnJ3). |
| **Eliminación de claves de API** | Ahora es posible eliminar las claves de API que no están en uso. |
| **Permisos específicos** | Nuevos permisos requeridos para gestionar claves de API:<ul class="t-body c-on-base mb7 lh-copy"><li class="t-body c-on-base mb5 lh-copy">*View API Keys* (ver, filtrar, buscar y ordenar claves de API y externas)</li><li class="t-body c-on-base mb5 lh-copy">*Edit API Keys* (crear, eliminar, modificar status y agregar o remover permisos)</li><li class="t-body c-on-base mb5 lh-copy">*Renew API Token* (ver y renovar los tokens de claves generadas)</li><li class="t-body c-on-base mb5 lh-copy">*Edit API Keys settings* (editar la configuración de la duración de tokens de claves generadas) Más información en [Recursos de License Manager](https://help.vtex.com/es/tutorial/recursos-do-license-manager--3q6ztrC8YynQf6rdc6euk3).</li></ul>Los usuarios con control de usuarios y roles tendrán los nuevos permisos asignados de forma automática según se describe en la tabla a continuación: <br><br><table><thead><tr class="bb b--muted-4"><th class="t-body fw5 c-muted-1 bw1 pa3 pb3 b--muted-4 tl">Si el usuario tiene…</th><th class="t-body fw5 c-muted-1 bw1 pa3 pb3 b--muted-4 tl">Se le asigna automáticamente…</th></tr></thead><tbody><tr class="bb b--muted-4"><td class="t-body pa3 bb b--muted-4">Get account by identifier</td><td class="t-body pa3 bb b--muted-4">View API Keys</td></tr><tr class="bb b--muted-4"><td class="t-body pa3 bb b--muted-4">Get paged users</td><td class="t-body pa3 bb b--muted-4">View API Keys</td></tr><tr class="bb b--muted-4"><td class="t-body pa3 bb b--muted-4">Get paged roles</td><td class="t-body pa3 bb b--muted-4">View API Keys</td></tr><tr class="bb b--muted-4"><td class="t-body pa3 bb b--muted-4">Find user by email</td><td class="t-body pa3 bb b--muted-4">View API Keys</td></tr><tr class="bb b--muted-4"><td class="t-body pa3 bb b--muted-4">Save user</td><td class="t-body pa3 bb b--muted-4">Edit API Keys</td></tr><tr class="bb b--muted-4"><td class="t-body pa3 bb b--muted-4">Owner - Super Admin</td><td class="t-body pa3 bb b--muted-4">Edit API Keys settings</td></tr><tr class="bb b--muted-4"><td class="t-body pa3">[User Administrator - RESTRICTED](https://help.vtex.com/es/tutorial/perfis-de-acesso-predefinidos--jGDurZKJHvHJS13LnO7Dy#user-administrator-restricted)</td><td class="t-body pa3">Renew API Token</td></tbody></table> |

## ¿Por qué realizamos este cambio?

El objetivo de la nueva experiencia es proporcionar mayor control y seguridad para tus claves de API de forma simplificada. La interfaz agiliza la gestión de diferentes tipos de claves y optimiza la visibilidad de la información.

Por otro lado, la configuración de la duración de tokens es una capa adicional de seguridad, mientras que las opciones de renovación evitan que las operaciones de la tienda se vean impactadas.

## ¿Qué se necesita hacer?

Sigue los pasos a continuación para acceder a la nueva experiencia:

1. En la barra superior del Admin VTEX, haz clic en el **avatar de tu perfil**, marcado por la inicial de tu email, y luego en **Configuración de la cuenta > Claves de API**.  
2. Haz clic en `Probar nueva experiencia`.

Puedes volver a la versión anterior de la página haciendo clic en `Volver a la versión anterior`.

Para más información, accede a la documentación relacionada:

* [Claves de API](https://help.vtex.com/es/tutorial/claves-de-api--4bFEmcHXgpNksoePchZyy6)  
* [Configurar la duración de las claves de API](https://help.vtex.com/es/tutorial/configurar-la-duracion-de-las-claves-de-api--kcGIFysFt02FDuhsfjQwZ)  
* [Claves generadas](https://help.vtex.com/es/tutorial/claves-generadas--7fnU4iZdvZKbxCaT3Ymdjc)  
* [Renovar token de API](https://help.vtex.com/es/tutorial/renovar-token-de-api--7r4AzptYjXErGHadg9LnJ3) 
* [Claves externas](https://help.vtex.com/es/tutorial/claves-externas--1isU0HfKkeg0atlxRha14Q)
