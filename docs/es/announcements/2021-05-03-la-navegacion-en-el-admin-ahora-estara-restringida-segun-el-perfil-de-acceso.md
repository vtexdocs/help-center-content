---
title: 'La navegación en el Admin ahora estará restringida según el perfil de acceso del usuario'
id: 4AkzWcYXhsLboTZeSW3jcj
status: PUBLISHED
createdAt: 2021-05-03T12:51:16.640Z
updatedAt: 2021-05-04T14:40:47.552Z
publishedAt: 2021-05-04T14:40:47.552Z
contentType: updates
productTeam: Channels
author: 0QBQws7rk0t5Mnu8fgfUv
slugEN: 2021-05-03-admin-navigation-will-now-be-restricted-by-user-role
locale: es
legacySlug: la-navegacion-en-el-admin-ahora-estara-restringida-segun-el-perfil-de-acceso
announcementImageID: ''
announcementSynopsisES: 'Usuarios solo verán los ítems del menú de la barra lateral a los que tengan acceso, según su perfil de aceso y permisos.'
---

Los [perfiles de acceso](/es/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc) permiten a las tiendas conceder y limitar el acceso de los usuarios a un subconjunto determinado de recursos en la plataforma. Aunque esto era suficiente para proteger la integridad y seguridad de su cuenta, los usuarios sí podían ver los ítems del menú de las secciones restringidas del Admin. Ahora las secciones no son visibles de manera que los usuarios solo ven los ítems a los que tienen acceso. 

<div class="alert alert-info">
Esta acción tiene bajo impacto en las operaciones de la tienda, dado que es una reorganización de la barra de navegación de la izquierda y no supone cambios a los perfiles de usuarios individuales.  Además, no se perderá ninguna configuración predefinida: si sus usuarios ya tenían perfiles y permisos predefinidos, no sufrirán ningún cambio.
</div>

## ¿Qué cambió?

Antes, los usuarios podían ver los ítems del menú de la barra lateral del Admin, incluso las secciones a las que no tenían acceso. Por ejemplo, un usuario con el [perfil Call center operator](/es/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#call-center-operator) no tiene acceso a «Master Data», pero la opción estaría visible en el menú de la barra lateral.

Ahora, los usuarios sólo verán los ítems del menú de la barra lateral a los que tengan acceso, según su perfil. En el ejemplo anterior, el usuario con el perfil de acceso «Call center operator» ya no verá «Master Data» en el menú de la barra lateral. 

La imagen a continuación ilustra cómo la barra lateral cambiaría al aplicar esta modificación de mantenimiento para mejorar la seguridad y la experiencia de usuario de su tienda.

![ES Sidebar permissions announcement screenshot](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/announcements/2021-05-03-la-navegacion-en-el-admin-ahora-estara-restringida-segun-el-perfil-de-acceso_1.png)

## ¿Por qué realizamos este cambio?

El objetivo de esta modificación de mantenimiento es limitar la visualización de módulos importantes de una cuenta para proteger la integridad de su tienda. De esta manera, se minimiza la posibilidad de una disrupción en la operación de una tienda y se asegura que cada usuario solo vea lo que debe.

## ¿Qué se necesita hacer?

No necesita tomar ninguna acción. Todos los usuarios automáticamente verán solo los ítems del menú de la barra lateral a los que tengan acceso.

Si un usuario de su cuenta deja de ver algún ítem del menú de la barra lateral que debiera poder ver, revise los permisos del usuario. Puede saber más sobre [perfiles de acceso](/es/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc) y [cómo crear un perfil de acceso](http://help.vtex.com/es/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc#creando-un-perfil-de-acceso) en los artículos de nuestro Centro de Ayuda.
