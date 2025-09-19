---
title: 'No puedo acceder a una página del Admin'
id: 3U8TJMlAqHIM5Qs8rLwkwQ
status: PUBLISHED
createdAt: 2024-11-28T14:27:44.578Z
updatedAt: 2025-08-14T15:09:37.454Z
publishedAt: 2025-08-14T15:09:37.454Z
firstPublishedAt: 2024-11-28T14:46:25.398Z
contentType: tutorial
productTeam: Identity
author: 1malnhMX0vPThsaJaZMYm2
slugEN: i-cant-view-a-page-in-the-admin
legacySlug: no-puedo-acceder-a-una-pagina-del-admin
locale: es
subcategoryId: 2Q0IQjRcOqSgJTh6wRHVMB
tags:
  - Roles
  - Recursos de License Manager
  - License Manager
  - Admin
---

Al utilizar el Admin, algunos usuarios pueden experimentar problemas como el Error 403 \- Lo sentimos, no tienes acceso a esta página, o que una página no termine de cargar.

Estos problemas suelen producirse por conflictos entre [roles](/es/tutorialroles--7HKK5Uau2H6wxE1rH5oRbc) de usuarios administrativos o configuraciones específicas del navegador.  

## Solución

Para resolver estos problemas hay algunas soluciones que puedes considerar:

* [Revisar roles](#revisar-roles): comprueba que el usuario dispone de los roles necesarios y si existe algún conflicto.
* [Revisar configuración del navegador](#revisar-configuracion-del-navegador): comprueba las extensiones utilizadas y borra la caché del navegador.

### Revisar roles

Sigue los pasos a continuación para solucionar el problema:

1. En la barra superior del Admin VTEX haz clic en el **avatar de tu perfil**, marcado por la inicial de tu email, y luego en **Configuración de la cuenta > Usuarios**.
2. Haz clic en el usuario deseado.
3. Comprueba los roles que tiene asignados:

   * Si el rol no es compatible con la página a la que el usuario está intentando acceder, el comportamiento esperado es Error 403.
   * Si hay una combinación del rol **Call center operator** o **OMS- Full access** con el rol **Owner (Admin Super)**, puede haber un conflicto en el acceso a algunas páginas.
4. Remueve los roles conflictivos y concede únicamente los necesarios para las operaciones que el usuario realiza en la tienda, siguiendo las instrucciones para [Gestionar usuarios](/es/tutorial/gestionar-usuarios--tutorials_512#editar-usuarios).

> ⚠️ Solamente el **Owner (Admin Super)** de la cuenta o usuarios con el rol **User Administrator - RESTRICTED** tienen los permisos necesarios para realizar esta etapa.

### Revisar configuración del navegador

Si el problema no es el rol del usuario, se recomienda realizar más pruebas:

* **Revisar extensiones:** desactiva todas las extensiones del navegador y prueba el acceso utilizando una ventana de incógnito.
* **Borrar caché:** en el navegador que utilices para acceder al Admin, ve a la configuración y borra los datos de navegación, incluida la caché.

