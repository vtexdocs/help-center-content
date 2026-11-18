---
title: "CMS para FastStore y Headless Stores"
createdAt: "2026-03-27T17:08:52.219Z"
updatedAt: "2026-03-30T17:08:52.219Z"
contentType: tutorial
productTeam: CMS
slugEN: cms-overview
locale: es
---

<div style="background-color:#EBF5FB; border-left: 2px solid #3498DB; border-top-left-radius: 2px; border-bottom-left-radius: 2px; padding: 15px; margin-bottom: 10px">
  El CMS está disponible para tiendas FastStore desde la v3 en adelante y para Headless Stores. Si tu tienda utiliza FastStore v1 o v2, consulta <a href="/es/docs/tutorials/headless-cms-vision-general">Headless CMS (Legacy)</a>.
</div>

El sistema de gestión de contenidos (CMS) ofrece a las empresas la flexibilidad y el control necesarios para gestionar y estructurar el contenido de su storefront de manera independiente permitiendo que los equipos de negocio y editores de contenido creen múltiples versiones, colaboren en detalles, revisen la calidad y programen la publicación. Accede al CMS desde el Admin VTEX en **Storefront > Contenido > Contenido**.

## Primeros pasos

Cada pieza de contenido que ve un comprador comienza con un desarrollador que define qué se puede editar: los campos, sus tipos y sus nombres. Una vez que el desarrollador publica esa estructura, los operadores de contenido usan el Admin para crear, revisar y publicar páginas basadas en ella, sin escribir código.

![cms-workflow-overview](https://vtexhelp.vtexassets.com/assets/docs/src/cms-workflow___1051ba6444b1b3aeaf5a5623620dc62f.png)

Antes de comenzar, asegúrate de tener:

| Requisito | Descripción |
| --------- | ----------- |
| Un esquema publicado por un desarrollador | Sin un esquema no hay campos para editar. Los desarrolladores pueden encontrar los pasos de configuración en la guía del Developer Portal [Getting started with CMS](https://developers.vtex.com/docs/guides/getting-started-with-cms). |
| El rol adecuado | El CMS tiene tres roles: Content Producer, Content Editor y Content Administrator. Consulta [CMS roles y permisos](https://help.vtex.com/es/docs/tutorials/cms-roles-y-permisos). |
| Una tienda configurada con una URL de vista previa | Una tienda vincula tu storefront con el CMS y contiene su configuración, incluidas las configuraciones regionales y la URL de vista previa usada para previsualizar entradas y ramas antes de publicarlas. Consulta [Configurar tiendas](https://help.vtex.com/es/docs/tutorials/cms-configurar-tiendas). |

Después de asegurarte de que cumples estos requisitos sigue los pasos a continuación para empezar a trabajar con el CMS:

1. **Configura tu tienda.** Define el nombre de la tienda, la URL de vista previa y las configuraciones regionales. Más información en [Configurar tiendas](https://help.vtex.com/es/docs/tutorials/cms-configurar-tiendas).
2. **Crea una rama y edita el contenido.** Trabaja en una rama aislada, previsualiza tus cambios y haz merge en `main` ahora o en una fecha programada. Más información en [Versiones y ramas](https://help.vtex.com/es/docs/tutorials/gestionando-versiones-y-branches) y [Flujos de trabajo de colaboración](https://help.vtex.com/es/docs/tutorials/flujos-de-trabajo-de-colaboracion).
3. **Restaura trabajo anterior si es necesario.** Consulta [Historial de versiones](https://help.vtex.com/es/docs/tutorials/historial-de-versiones).
4. **Traduce tu contenido.** Configura las configuraciones regionales y el comportamiento de resguardo. Más información en [Configurar configuraciones regionales](https://help.vtex.com/es/docs/tutorials/configurar-configuraciones-regionales), [Localización de contenido](https://help.vtex.com/es/docs/tutorials/localizacion-de-contenido) y [Estrategias de configuración regional de resguardo](https://help.vtex.com/es/docs/tutorials/estrategias-de-configuracion-regional-de-resguardo).

> ℹ️ Los desarrolladores pueden encontrar la información técnica del CMS, como la configuración del entorno y las declaraciones de esquemas, en el [Developer Portal](https://developers.vtex.com/docs/guides/getting-started-with-cms).

## Partes principales del CMS

A continuación se describen las principales partes del CMS:

## Todo el contenido

![cms-todo-el-contenido-overview](https://vtexhelp.vtexassets.com/assets/docs/src/cms-all-content-es___6b2b19b4fb33ea1a72b0818bbeede857.png)

**Todo el contenido** es el dashboard principal del sistema de gestión de contenido que permite listar y gestionar todo el contenido digital de tu tienda, incluyendo páginas, layouts, plantillas y secciones globales dentro del Admin VTEX. Este hub centralizado tiene como objetivo agilizar la creación, edición y publicación de contenido mediante un sistema modular con control de versiones (ramas).

## Tiendas

![cms-tiendas](https://vtexhelp.vtexassets.com/assets/docs/src/cms-tiendas-es___077eb1676abd02b765dbb1e625bf4935.png)

La página Tiendas muestra cada storefront asociado al CMS de la cuenta para facilitar la gestión. En la página Tiendas puedes:

* Ver todas las tiendas de la cuenta y los storefronts a los que están asociadas.  
* Agregar nuevas tiendas para asociar storefronts o proyectos adicionales al CMS.  
* Abrir la configuración de una tienda para gestionar sus URLs de vista previa/compilación, integración con el repositorio y las configuraciones regionales predeterminadas y de resguardo para la entrega de contenido.

## Ramas

![cms-ramas](https://vtexhelp.vtexassets.com/assets/docs/src/cms-ramas-es___a7d77825b8c652c949df7bde63e79d2d.png)

Las ramas proporcionan un workspace colaborativo donde los equipos pueden trabajar en modificaciones de contenido en un entorno aislado antes de hacer merge en la rama main sin afectar el storefront de producción.

Cada rama es una versión aislada de contenido, lo que permite que múltiples editores creen, actualicen y refinen páginas, layouts y secciones de manera simultánea. Todas las modificaciones se monitorean a nivel de pieza de contenido, facilitando ver quién realizó la modificación, qué cambió y cuándo.

El flujo de colaboración en una rama es el siguiente:

* **Editar:** varios editores trabajan en la misma rama, realizando actualizaciones de contenido de forma independiente.  
* **Seguimiento:** a cada modificación se le asigna una versión, con visibilidad clara de quién hizo cada actualización y cuándo.  
* **Vista previa:** los equipos utilizan una vista previa de las modificaciones no publicadas en un contexto de storefront para revisar y validar el contenido.  
* **Merge:** una vez aprobada, se le hace merge a la rama para unirla a la rama Main y publicar todas las modificaciones en la tienda en producción.

## Multimedia

![cms-medi-es](https://vtexhelp.vtexassets.com/assets/docs/src/cms-media-es___f4f4cfae4ad6d3b5318ac01dac6da1a8.png)

El módulo Multimedia te permite gestionar los archivos multimedia de tu tienda, como imágenes y videos. Para imágenes, puedes cargar y organizar archivos de hasta 5 MB en los siguientes formatos: PNG, JPG, GIF, SVG y WebP. Para videos, puedes registrar una URL de un proveedor de videos externo, como YouTube.

Para más detalles, consulta la guía [Multimedia](https://newhelp.vtex.com/docs/tutorials/media-overview).
