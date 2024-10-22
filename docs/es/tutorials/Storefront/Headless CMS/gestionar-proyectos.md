---
title: 'Gestionar Proyectos'
id: 42IpDFqTVTESH8DCypJMPM
status: PUBLISHED
createdAt: 2023-11-01T13:45:57.091Z
updatedAt: 2024-09-11T14:05:18.500Z
publishedAt: 2024-09-11T14:05:18.500Z
firstPublishedAt: 2023-11-01T19:38:50.237Z
contentType: tutorial
productTeam: VTEX IO
author: 4oTZzwYoyhy1tDBwLuemdG
slugEN: managing-projects
locale: es
legacySlug: gestionar-proyectos
subcategoryId: 27t6x0lngvjI3bnUg5AgEO
---

Proyectos es una funcionalidad de VTEX Headless CMS que simplifica la gestión de varios proyectos de frontend, como aplicaciones móviles, páginas web y email marketing, desde un único dashboard.

![Projects pages](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Storefront/Headless CMS/gestionar-proyectos_1.gif)

Cada proyecto cuenta con sus propios ajustes, contenido y marca, pudiendo personalizarse en función de públicos u objetivos específicos. 

En esta guía aprenderás a gestionar cada proyecto de frontend de tu tienda.

>⚠️ [ FastStore WebOps usuarios](https://developers.vtex.com/docs/guides/faststore/1-onboarding-overview):Los cambios realizados a través del Headless CMS en el VTEX Admin, como la creación de nuevos tipos de contenido (content types), la adición de secciones o la actualización de campos, pueden no aparecer automáticamente en la tienda una vez que los publiques. Este es un problema conocido, y debes contactar a tu equipo de desarrollo para implementar la solución necesaria. Para obtener instrucciones detalladas, consulta el artículo sobre el problema conocido [La aplicación Webops no está totalmente integrada con Headless CMS](https://help.vtex.com/es/known-issues/webops-app-is-not-fully-integrated-with-headless-cms--577fIocKB9BYYCOkN9dZfW).

## Antes de empezar

Para gestionar Headless CMS, asegúrate de que los [recursos](https://help.vtex.com/es/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) `See CMS menu on the top-bar`, `Settings*`, and `CMS GraphQL API` estén asociados con tu [rol de usuario](https://help.vtex.com/es/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc). De lo contrario, [crea un rol de usuario](https://help.vtex.com/es/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creando-un-rol) y agrega estos recursos o añádelos a un rol de usuario existente.

## Visión general
Para acceder a **Proyectos**, en el Admin VTEX ve a **Storefront > Headless CMS**.

![Projects overview](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Storefront/Headless CMS/gestionar-proyectos_2.png)

| Opciones     | Descripción     |
| ---------- | ---------- |
| Tarjeta del proyecto       | Abre el proyecto seleccionado, para que puedas crear y editar las páginas de su contenido.       |
| Configuración (⚙️)      | Abre una ventana que muestra los ajustes del proyecto organizados en tres pestañas: <ul><li>**General:** permite editar el ID del proyecto y la configuración de API o archivar el proyecto.</li><li>**Content-Types:** conecta el proyecto Headless CMS con tu fuente de código a través de webhooks cuando configuras los tipos de contenido (content types) y las secciones. </li> <li>**Compilación:** te permite iniciar y administrar compilaciones del sitio web. Puedes establecer una URL de webhook para recibir notificaciones de compilación y un endpoint para previsualizar las versiones de la página.</li></ul>      |
| Crear nuevo | Abre una página para configurar un nuevo proyecto. |

## Crear un nuevo proyecto

Crea un nuevo proyecto para tu tienda configurando ajustes generales como **ID del proyecto** y **URL base de producción**. Para conectar eficazmente un proyecto Headless CMS con el código fuente de tu proyecto también será necesario configurar webhooks y ajustes de compilación, como *URL de compilación de webhook* y *URL de previsualización*. 

Un webhook es un endpoint HTTP que permite la comunicación automatizada entre VTEX Headless CMS y el código fuente del proyecto. Por ejemplo, permite que el CMS notifique a un proyecto FastStore sobre cambios de contenido u otros eventos, desencadenando acciones como la sincronización de contenido en tiempo real.

1. En la página **Proyectos**, haz clic en `Crear nuevo`.
2. En la página **Nuevo proyecto**, rellena los campos de la sección [Configuración del proyecto](#configuración del proyecto).
3. Después de definir cada campo de la página, haz clic en `Crear` y un mensaje de éxito se mostrará en la pantalla.

Tras crear un nuevo proyecto, puedes crear páginas para el mismo con todas las rutas URL y modelos de página compatibles con tu tienda, como páginas de inicio, de producto y de inicio de sesión. 

Para crear una nueva página sigue los pasos presentes en este artículo: [Gestión de páginas en Headless CMS](https://help.vtex.com/es/tutorial/managing-pages--3DO6rBhZ1p3zndnFu5BgRt)

## Configuración del proyecto
En Configuración, puedes realizar ajustes en el proyecto en  tres categorías principales:

-[General](#general): permite editar el ID del proyecto y la configuración de API y archivar el proyecto.
-[Content-Types](#content-types): permite conectar el proyecto Headless CMS a tu código fuente a través de webhooks cuando configuras los tipos de contenido (content types) y las secciones.
-[Compilación](#compilacion): permite iniciar y administrar las compilaciones del sitio web. Puedes establecer una URL de webhook para las notificaciones de compilación y un endpoint para previsualizar las versiones de la página.

### General

| Nombre del campo     | Descripción     | Ejemplo de valor    |
| ---------- | ---------- | ---------- |
| ID del proyecto (obligatorio)      | ID del proyecto.       | `FastStore`        |
| Storefront      | Define los storefronts VTEX disponibles (`FastStore` o `Custom`) y su propósito. | Consulta la sección [Storefront](#storefront) para obtener más información. |

#### Storefront

Este campo determina la configuración de la [compilación](#compilacion) en función del storefront elegido. Las opciones incluyen:

- **VTEX Storefront**:

Selecciona un storefront de tu cuenta (por ejemplo, FastStore). La [compilación](#compilacion) se ajusta automáticamente según el storefront elegido. Puedes personalizarlo después.

- **Custom**

Escoger un storefront `Custom` (personalizado) te brinda la flexibilidad de definir tu propia configuración de [compilación](#compilacion).
### Content-Types

| Nombre del campo             | Descripción           | Ejemplo del valor     |
| ---------------------- | --------------------- | ----------------- |
| URL de las secciones | URL del webhook para recibir y guardar las secciones creadas en el código fuente de Headless CMS. | `https://infra.io.vtex.com/vbase/v0/{accountName}/master/buckets/vtex.admin-cms-graphql-rc/store/files/{projectId}/sections`       |
| URL de los tipos de contenido       | URL del webhook para recibir y guardar los tipos de contenido creados en el código fuente de Headless CMS.      | `https://infra.io.vtex.com/vbase/v0/{accountName}/master/buckets/vtex.admin-cms-graphql-rc/store/files/{builderId}/content-types` |

### Compilar

| Nombre del campo    | Descripción     | Ejemplo del valor     |
| ---------- | ---------- | ---------- |
| URL de las secciones       | URL del webhook para recibir y guardar las secciones creadas en el código fuente en Headless CMS.      | `https://infra.io.vtex.com/vbase/v0/{accountName}/master/buckets/vtex.admin-cms-graphql-rc/store/files/{builderId}/sections`       |
| URL de los tipos de contenido       | URL del webhook para recibir y guardar los tipos de contenido creados en el código fuente en Headless CMS.       | `https://infra.io.vtex.com/vbase/v0/{accountName}/master/buckets/vtex.admin-cms-graphql-rc/store/files/{builderId}/content-types`       |
| URL de compilación del webhook       | URL del webhook para iniciar una nueva compilación en Headless CMS cuando se agrega o edita una página o contenido.       | `https://app.io.vtex.com/vtex.cms-builder-sf-jamstack/v1/{accountName}/{workspace}/build-releases`      |
| Guardar URL de webhook      | URL de webhook para permitir previsualizaciones del proyecto en tiempo real, enviando una notificación para actualizar la página y que se reflejen los últimos cambios en Headless CMS.      | -       |
| URL de previsualización      | URL de webhook que permite la previsualización de páginas en el Headless CMS. | `https://{accountName}.vtex.app/api/preview` |

## Editar proyecto
Después de crear el proyecto, también puedes editar toda la información definida durante la [creación del proyecto](#crear-nuevo-proyecto).
En la página principal Proyectos, haz clic en Configuración (⚙️), y se abrirá una ventana con tres pestañas para realizar ajustes: [General](#general), [Content-Types](#content-types) y [Compilación](#compilacion).

### Restaurar la URL predeterminada de las secciones 

Una vez que has [creado el proyecto](#crear-un-nuevo-proyecto) y deseas editar el campo [**URL de las secciones**](#content-types), haz clic en `Editar`, agrega la nueva URL del webhook y haz clic en `Guardar`. Si deseas restaurar la URL predeterminada, haz clic en `Restaurar URL predeterminada`

## Archivar proyecto
Al archivar un proyecto se desactiva la API y el acceso al contenido del proyecto. 
Para archivar un proyecto sigue los pasos a continuación:

1. Accede a **Storefront > Proyectos**.
2. Selecciona el proyecto que deseas archivar y haz clic en **Configuración** (⚙️). 
3. Haz clic en `Archivar proyecto` en la página `General`. Aparecerá un mensaje emergente para confirmar que deseas archivar el proyecto.
![Arquivar projeto - ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Storefront/Headless CMS/gestionar-proyectos_3.png)
4. Haz clic en `Archivar`. A continuación aparecerá un mensaje informando que el proyecto se archivó con éxito.

Para restaurar un proyecto archivado, sigue los pasos descritos en [Restaurar proyecto] (#restaurar-proyecto).

### Restaurar proyecto
Al restaurar un proyecto la API se reactiva y se puede acceder de nuevo a su contenido.
Para restaurar un proyecto sigue los pasos a continuación:

1. Accede a **Storefront > Proyectos**.
2. Haz clic en la tarjeta del proyecto archivado.
3. Haz clic en `Restaurar proyecto`. Aparecerá un mensaje emergente para confirmar que deseas restaurar el proyecto.
4. Haz clic en `Restaurar`. A continuación aparecerá un mensaje informando que el proyecto se restauró con éxito.

