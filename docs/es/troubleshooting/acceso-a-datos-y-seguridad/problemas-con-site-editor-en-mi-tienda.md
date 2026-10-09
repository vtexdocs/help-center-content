---
title: 'Problemas con Site Editor en mi tienda'
id: 3A6Ois91zEZ8zpKJp1wsP2
status: PUBLISHED
createdAt: 2024-08-26T16:52:35.556Z
updatedAt: 2026-09-11T14:35:20.717Z
publishedAt: 2025-08-14T22:58:05.821Z
firstPublishedAt: 2024-08-27T19:19:21.047Z
contentType: tutorial
productTeam: VTEX IO
author: 4oTZzwYoyhy1tDBwLuemdG
slugEN: my-stores-site-editor-is-not-working
legacySlug: problemas-con-site-editor-en-mi-tienda
locale: es
subcategoryId: 2Q0IQjRcOqSgJTh6wRHVMB
domainFilters:
  - Storefront
  - Admin
symptomFilters:
  - Error de carga
  - Restricción de acceso
---

[Site Editor](https://developers.vtex.com/docs/guides/store-framework-working-with-site-editor) es el CMS (sistema de gestión de contenido) disponible para tiendas que utilizan [Store Framework](https://developers.vtex.com/docs/guides/store-framework). En algunas situaciones pueden experimentarse dificultades para abrir Site Editor o para guardar contenido.

Consulta a continuación los problemas habituales y sus soluciones en Site Editor.

| Problema | Descripción | Instrucciones para la resolución de problemas |
| -------- | ----------- | --------------------------------------- |
| [Site Editor no abre](#site-editor-no-abre) | La página Site Editor muestra una pantalla en blanco o el mensaje `Se produjo un error`. | - [Comprueba la integración de la búsqueda](#comprueba-la-integracion-de-la-busqueda).<br> - [Comprueba la configuración del inquilino (solo cuentas nuevas)](#comprueba-la-configuracion-del-inquilino-solo-cuentas-nuevas). |
| [No puedo gestionar el contenido de mi tienda en Site Editor](#no-puedo-gestionar-el-contenido-de-mi-tienda-en-site-editor) | No se puede editar, guardar o eliminar contenido en Site Editor. | - [Comprueba si el rol de usuario tiene los permisos necesarios](#comprueba-si-el-rol-de-usuario-tiene-los-permisos-necesarios).<br> - [Comprueba la configuración regional principal del dominio](#comprueba-la-configuracion-regional-principal-del-dominio). |
| [Perdí el contenido almacenado en Site Editor](#perdi-el-contenido-almacenado-en-site-editor) | Se perdió el contenido guardado en Site Editor. | [Abre un ticket con el Soporte VTEX](https://supporticket.vtex.com/support). |
| [Sigo teniendo problemas con Site Editor](#sigo-teniendo-problemas-con-site-editor) | Sigues teniendo problemas con Site Editor después de intentar resolverlos. | [Abre un ticket con el Soporte VTEX](https://supporticket.vtex.com/support). |

Para comprender y corregir cada error, consulta las soluciones a continuación:

## Site Editor no abre

Es posible que se produzca el siguiente error: al acceder al Admin VTEX > **Storefront** y hacer clic en **Site Editor**, la página Site Editor muestra una pantalla en blanco o el mensaje `Se produjo un error`.

![Site Editor - Something went wrong ES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/troubleshooting/acceso-a-datos-y-seguridad/problemas-con-site-editor-en-mi-tienda_1.png)

Para solucionarlo, consulta las instrucciones a continuación:

1. [Comprueba la integración de la búsqueda](#comprueba-la-integracion-de-la-busqueda).
2. [Comprueba la configuración del inquilino](#comprueba-la-configuracion-del-inquilino-solo-cuentas-nuevas)

### Comprueba la integración de la búsqueda

Este problema puede deberse a que la búsqueda de [Intelligent Search](/es/docs/tracks/vision-general-intelligent-search) no está integrada con el catálogo de tu tienda. Sigue los pasos a continuación para integrarla correctamente:

1. En el Admin VTEX, accede a **Configuración de la tienda > Intelligent Search > Integraciones**.

2. En la página **Integraciones** todos los status deben estar marcados, como en la imagen a continuación.

   ![Site Editor - IS integrations ES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/troubleshooting/acceso-a-datos-y-seguridad/problemas-con-site-editor-en-mi-tienda_2.png)

3. Si todos los status están marcados y sigues sin poder abrir Site Editor, consulta la sección [Comprueba la configuración del inquilino](#comprueba-la-configuracion-del-inquilino-solo-cuentas-nuevas). En caso contrario, procede al siguiente paso.

4. Si la página Integraciones no coincide con la imagen mostrada anteriormente, consulta a continuación los posibles motivos y cómo solucionarlos:

- **El status `Activar búsqueda` no está marcado**: no has iniciado la integración. Haz clic en `Iniciar la integración`.
- **Uno de los status falló y no está marcado**: si intentaste iniciar la integración pero sigue fallando, abre un ticket con el [Soporte VTEX](https://supporticket.vtex.com/support) para reportar el error.

### Comprueba la configuración del inquilino (solo cuentas nuevas)

Si ya realizaste la [integración de la búsqueda](#comprueba-la-integracion-de-la-busqueda) y continúas viendo una pantalla en blanco cuando haces clic en **Site Editor** en el Admin VTEX, es posible que la tienda no tenga configurado el inquilino o haya un error en esta configuración.

VTEX utiliza un enfoque de arquitectura [SaaS multiinquilino](https://developers.vtex.com/docs/guides/cloud-infrastructure#saas-multi-tenancy), en el cual cada cuenta funciona como un inquilino que debe estar conectado (vinculado) a la infraestructura de VTEX para garantizar la sincronización de datos e información.

Para configurar el inquilino en tu tienda, abre un ticket con el [Soporte VTEX](https://supporticket.vtex.com/support). Una vez que recibas respuesta del soporte confirmando que el inquilino ha sido configurado, en el Admin VTEX accede a **Storefront > Site Editor**, y comprueba si se abre correctamente. Si la pantalla en blanco continúa, actualiza el ticket con el Soporte VTEX ingresando la nueva información para que el equipo pueda investigarlo a fondo.

## No puedo gestionar el contenido de mi tienda en Site Editor

Un error que puede darse en Site Editor es no poder editar, guardar o eliminar contenido. Cuando intentas realizar una de estas acciones aparece el siguiente mensaje:

```bash
Se produjo un error. Inténtalo de nuevo.
```

Para solucionarlo, consulta las instrucciones a continuación:

1. [Comprueba si el rol de usuario tiene los permisos necesarios](#comprueba-si-el-rol-de-usuario-tiene-los-permisos-necesarios).
2. [Comprueba si la política comercial está configurada en el catálogo](#comprueba-si-la-politica-comercial-esta-configurada-en-el-catalogo)
3. [Comprueba la configuración regional principal del dominio](#comprueba-la-configuracion-regional-principal-del-dominio)

### Comprueba si el rol de usuario tiene los permisos necesarios

Una posible causa de este problema puede estar relacionada con la falta del [recurso](/es/docs/tutorials/recursos-del-license-manager) `CMS GraphQL API` de License Manager en un [rol](/es/docs/tutorials/roles) para gestión de contenidos.

Asegúrate de que los usuarios tengan el recurso `CMS GraphQL API` asociado a sus roles, ya sea [creando un nuevo rol](/es/docs/tutorials/crear-nuevo-rol) o editando uno existente.

Si continúas sin poder gestionar el contenido incluso después de agregar el recurso `CMS GraphQL API` al rol del usuario consulta la siguiente sección: [Comprueba si la política comercial está configurada en el catálogo](#comprueba-si-la-politica-comercial-esta-configurada-en-el-catalogo).

### Comprueba si la política comercial está configurada en el catálogo

Otro motivo posible para este error es que la política comercial de la cuenta no esté correctamente asociada al catálogo de la tienda, lo que impide que Site Editor cargue o guarde el contenido.

1. En el Admin VTEX, accede a **Configuración de la tienda > Canales > Políticas comerciales**.
2. Comprueba si hay una política comercial asociada a tu cuenta y si está correctamente configurada para el catálogo de la tienda.
3. Si no hay ninguna política comercial configurada, o si no está asociada correctamente al catálogo de la tienda, [configura una política comercial](/es/docs/tutorials/crear-una-politica-comercial) para la cuenta.
4. Si la política comercial ya está configurada y el problema continúa abre un ticket con el [Soporte VTEX](https://supporticket.vtex.com/support) para verificar la asociación entre la política comercial y el catálogo.

Si aún no es posible gestionar el contenido consulta la siguiente sección: [Comprobar la configuración regional principal del dominio](#comprobar-la-configuracion-regional-principal-del-dominio).

### Comprueba la configuración regional principal del dominio

Otra posible causa de este error está relacionada con la configuración regional de la cuenta.

1. [Instala](https://developers.vtex.com/docs/guides/vtex-io-documentation-installing-an-app) la aplicación `vtex.admin-graphql-ide@3.x` usando tu terminal.

2. En el Admin VTEX, accede a **Configuración de la tienda > Storefront > GraphQL IDE**.

3. En el menú desplegable, selecciona la aplicación `vtex.tenant-graphql@0.1.2`.

4. En el cuadro de texto ingresa la siguiente consulta:

    ```graphql
    query {
      tenantInfo {
        bindings {
          id,
          canonicalBaseAddress,
         defaultLocale
        }
      }
    }
    ```

5. Comprueba cuál es la configuración regional principal definida para tu tienda. Esta información se encuentra disponible en el campo `defaultLocale`. Consulta el siguiente ejemplo.

   ![graphql-default-locale-es](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/troubleshooting/acceso-a-datos-y-seguridad/problemas-con-site-editor-en-mi-tienda_3.png)

6. Ahora, accede a **Configuración de la tienda > Canales > Políticas comerciales**.

7. En la página **Políticas comerciales**, selecciona la política comercial asociada a tu cuenta y comprueba el campo **Región**.

   ![Site Editor - Locale PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/troubleshooting/acceso-a-datos-y-seguridad/problemas-con-site-editor-en-mi-tienda_4.png)

   La configuración regional se considera incorrecta en los siguientes casos:

   - La configuración regional es diferente de la que debería usar la cuenta. Por ejemplo, la configuración regional definida es `es-CO`, pero debería ser `es-MX`.
   - La configuración regional está en minúsculas. Dado que esta configuración distingue entre mayúsculas y minúsculas, debes establecer la región como `es-MX` en lugar de `es-mx`.
   - La configuración regional definida en la política comercial es distinta del `defaultLocale` identificado.

8. En todos los casos, abre un ticket con el [Soporte VTEX](https://supporticket.vtex.com/support) para solicitar el cambio de la configuración regional definida en la política comercial. Recuerda incluir evidencias del error, tales como capturas de pantalla, logs de mensajes y detalles de tu investigación previa.

## Perdí el contenido almacenado en Site Editor

Abre un ticket con el [Soporte VTEX](https://supporticket.vtex.com/support) para investigar el problema más a fondo.

Para evitar perder el contenido almacenado en Site Editor al cambiar las dependencias de pares de la aplicación Store Theme, sigue los pasos de la guía [Migrating CMS settings after a major theme update](https://developers.vtex.com/docs/guides/vtex-io-documentation-migrating-cms-settings-after-major-update).

> ⚠️  En los casos en que se pierda el contenido almacenado en Site Editor, la restauración solo es posible si la pérdida está relacionada con el problema [pérdida intermitente de contenido en Site Editor](/es/known-issues/perdida-intermitente-de-contenido-del-editor-de-sitios). Ante esta situación, abre un ticket con el [Soporte VTEX](https://supporticket.vtex.com/support) con prioridad `urgente`.

## Sigo teniendo problemas con Site Editor

Si tras intentar implementar las soluciones mencionadas anteriormente continúas experimentando problemas con Site Editor, abre un ticket con el [Soporte VTEX](https://supporticket.vtex.com/support), incluyendo pruebas de los problemas encontrados:

- Mensajes de error
- [Mensajes de log de la consola](https://developer.chrome.com/docs/devtools/console/understand-messages) (si hay alguno)
- Cambios realizados antes de que se produjera el problema
- Capturas de pantalla del problema
- Fecha y hora de inicio del problema
- Pruebas ya realizadas y pasos para reproducirlas.
