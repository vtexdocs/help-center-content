---
title: 'Problemas con Site Editor en mi tienda'
id: 3A6Ois91zEZ8zpKJp1wsP2
status: PUBLISHED
createdAt: 2024-08-26T16:52:35.556Z
updatedAt: 2024-11-08T19:30:28.924Z
publishedAt: 2024-11-08T19:30:28.924Z
firstPublishedAt: 2024-08-27T19:19:21.047Z
contentType: tutorial
productTeam: VTEX IO
author: 4oTZzwYoyhy1tDBwLuemdG
slugEN: my-stores-site-editor-is-not-working
locale: es
legacySlug: problemas-con-site-editor-en-mi-tienda
subcategoryId: 2Q0IQjRcOqSgJTh6wRHVMB
---

**Tags:** Site Editor, CMS, Store Framework

[Site Editor](https://developers.vtex.com/docs/guides/vtex-io-documentation-site-editor) es el CMS disponible para tiendas que utilizan [Store Framework](https://developers.vtex.com/docs/guides/store-framework). Podrías experimentar problemas como no poder abrir Site Editor o que el contenido no se guarde.

A continuación se muestran diferentes comprobaciones de resolución de problemas e instrucciones que puedes utilizar para resolver este tipo de situaciones en Site Editor:

| **Problema** | **Descripción** | **Instrucciones para resolución de problemas** |
| ------------ | --------------- | --------------------------------------------- |
| [Site Editor no abre](#site-editor-no-abre) | La página de Site Editor muestra una pantalla en blanco o el mensaje `Se produjo un error`. | - [Comprueba la integración de búsqueda](#comprobar-la-integracion-de-la-busqueda).<br>- [Comprueba la configuración del inquilino (solo cuentas nuevas)](#comprobar-la-configuracion-del-inquilino-solo-cuentas-nuevas). |
| [No puedo gestionar el contenido de mi tienda en Site Editor](#no-puedo-gestionar-el-contenido-de-mi-tienda-en-site-editor) | No se puede editar, guardar o eliminar contenido en Site Editor. | - [Comprueba si el rol de usuario tiene los permisos necesarios](#comprobar-si-el-rol-de-usuario-tiene-los-permisos-necesarios).<br>- [Comprueba la región principal del dominio](#comprobar-la-region-principal-del-dominio). |
| [Perdí el contenido almacenado en Site Editor](#perdi-el-contenido-almacenado-en-site-editor) | El contenido almacenado en Site Editor se perdió. | [Abre un ticket con el soporte VTEX](#perdi-el-contenido-almacenado-en-site-editor). |
| [Continúo experimentando problemas con Site Editor](#continuo-experimentando-problemas-con-site-editor) | Continúas experimentando problemas en Site Editor después de intentar solucionarlos. | [Abre un ticket con el soporte VTEX](#continuo-experimentando-problemas-con-site-editor). |

## Site Editor no abre

Este es uno de los errores que puedes experimentar cuando, en el Admin VTEX, accedes a **Storefront** y haces clic en **Site Editor**. En lugar de cargarse, la página de Site Editor muestra una pantalla en blanco o el mensaje `Se produjo un error`.

![Site Editor - Something went wrong ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)

Para solucionar este error, consulta las instrucciones a continuación:

1. [Comprueba la integración de búsqueda](#comprobar-la-integracion-de-busqueda).
2. [Comprueba la configuración del inquilino(solo cuentas nuevas)](#comprobar-la-configuracion-del-inquilino-solo-cuentas-nuevas)

### Comprobar integración de la búsqueda

El error puede deberse a que [Intelligent Search](https://help.vtex.com/es/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/3qgT47zY08biLP3d5os3DG) no está integrado con el catálogo de tu tienda. Sigue los pasos a continuación para integrarlo correctamente:

1. En el Admin VTEX, accede a **Configuración de la tienda > Intelligent Search > Integraciones**.
2. En la página **Integraciones**, comprueba que todos los status estén verificados, como en la imagen a continuación. 

![Site Editor - IS integrations ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_2.png)

3. Si todos los status están verificados y sigues sin poder abrir Site Editor, consulta la sección [Comprobar la configuración del inquilino](#comprobar-la-configuracion-del-inquilino). En caso contrario, procede al siguiente paso.
4. Si la página Integraciones no coincide con la imagen mostrada anteriormente, consulta a continuación los posibles motivos y cómo solucionarlos:
- **El status `Activar búsqueda` no está verificado**: no se ha iniciado la integración. Haz clic en `Iniciar la integración`.
- **Uno de los status falló y no se ha verificado**: si intentaste iniciar la integración pero sigue fallando, abre un ticket con el [soporte VTEX](https://help.vtex.com/es/support) para reportar el error.

### Comprobar la configuración del inquilino (solo cuentas nuevas)

Si ya realizaste la [integración de la búsqueda](#comprobar-integracion-de-la-busqueda) y continúas viendo una pantalla en blanco cuando haces clic en **Site Editor** en el Admin VTEX, es posible que la tienda no tenga configurado el inquilino o haya un error en esta configuración. 

VTEX utiliza un enfoque de arquitectura [SaaS multiinquilino](https://developers.vtex.com/docs/guides/cloud-infrastructure#saas-multi-tenancy), en el cual cada cuenta funciona como un inquilino que debe estar conectado (vinculado) a la infraestructura de VTEX para garantizar la sincronización de datos e información.

Para configurar el inquilino en tu tienda, abre un ticket con el equipo de [soporte VTEX](https://help.vtex.com/es/support). Una vez que recibas respuesta del soporte confirmando que el inquilino ha sido configurado, accede al Admin VTEX, **Storefront > Site Editor**, y comprueba si se abre correctamente. Si la pantalla en blanco continúa, actualiza el ticket con el soporte VTEX ingresando la nueva información para que el equipo pueda investigarlo a fondo.

## No puedo gestionar el contenido de mi tienda en Site Editor

Un error que puede darse en Site Editor es no poder editar, guardar o eliminar contenido. Cuando intentas realizar una de estas acciones, aparece el siguiente mensaje:

```bash
Se produjo un error. Por favor, inténtalo de nuevo.
```
Para solucionarlo, consulta las instrucciones a continuación:

1. [Comprueba si el rol de usuario tiene los permisos necesarios](#comprobar-si-el-rol-de-usuario-tiene-los-permisos-necesarios).
2. [Revisa la región principal del dominio](#checking-the-domains-main-locale)

### Comprobar si el rol de usuario tiene los permisos necesarios

Una posible causa de este problema podría estar relacionada con la falta del [recurso](https://help.vtex.com/es/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) `CMS GraphQL API` de License Manager para el [rol de usuario](https://help.vtex.com/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc) asignado a la gestión de contenido. 

Asegúrate de que el recurso `CMS GraphQL API` esté asociado con el rol de usuario correspondiente, ya sea [creando un nuevo rol](https://help.vtex.com/es/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) o editando uno existente.

Si sigues sin poder gestionar contenido incluso después de agregar el recurso `CMS GraphQL API` al rol de usuario, accede a la siguiente sección: [Comprobar la región principal del dominio](#comprobar-la-region-principal-del-dominio).

### Comprobar la región principal del dominio

Otra posible causa de este error está relacionada con la configuración de la región de la cuenta. Para verificar esta configuración, sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Configuración de la tienda > Canales > Políticas comerciales**.
2. En la página **Políticas comerciales**, selecciona la política comercial asociada a tu cuenta y consulta el campo **Región**.

![Site Editor - Locale ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_3.png)

3. Se considera que la región es incorrecta si se da cualquiera de los siguientes casos:
- La región es diferente de la que debería utilizar la cuenta. Por ejemplo, la región configurada es `es-CO`, pero la cuenta debería ser `es-MX`.
- La región está en minúsculas. Dado que esta configuración distingue entre mayúsculas y minúsculas, debes establecer la región como `es-MX` en lugar de `es-mx`.
4. En ambos casos, abre un ticket con el [soporte VTEX](https://help.vtex.com/es/support) para solicitar un cambio en la configuración de la región definida en la política comercial. Recuerda incluir evidencias del error, tales como capturas de pantalla, logs de mensajes y detalles de tu investigación previa.

## Perdí el contenido almacenado en Site Editor

Abre un ticket con el [soporte VTEX](https://help.vtex.com/es/support) para investigar el problema más a fondo. Para evitar situaciones en las que pierdas contenido almacenado en Site Editor al cambiar las dependencias entre pares de la aplicación Store Theme y sea necesario realizar una actualización importante, sigue los pasos de la guía Migrating CMS settings after a major theme update.

>⚠️ En casos en los que se pierde contenido almacenado en Site Editor, este solo se puede restaurar si dicha pérdida está relacionada con el problema conocido como pérdida intermitente de contenido en Site Editor. Para resolverlo, abre un ticket con el [soporte VTEX](https://help.vtex.com/es/support) con prioridad `urgente`

## Continúo experimentando problemas con Site Editor 

Si ya has seguido las soluciones descritas anteriormente y continúas experimentando problemas con Site Editor, por favor abre un ticket con el [soporte VTEX](https://help.vtex.com/en/support) y proporciona evidencias del tipo:

- Mensajes de error.
- [Mensajes de log de la consola](https://developer.chrome.com/docs/devtools/console/understand-messages) (si hay alguno).
- Cambios realizados antes de que se produjera el problema.
- Capturas de pantalla del problema.
- Fecha y hora de inicio del problema.
- Pruebas ya realizadas y pasos para reproducirlas.

