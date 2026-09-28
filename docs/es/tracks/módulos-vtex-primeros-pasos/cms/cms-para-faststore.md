---
title: 'CMS para FastStore'
createdAt: 2026-09-11T20:00:00.000Z
updatedAt: 2026-09-11T20:00:00.000Z
contentType: trackArticle
productTeam: CMS
slugEN: cms-for-faststore
locale: es
trackSlugEN: cms
order: 4
---

Para tiendas desarrolladas con [FastStore](https://developers.vtex.com/docs/guides/faststore) (v3 y superior) o una implementación headless personalizada, el contenido se gestiona desde el [CMS](https://help.vtex.com/es/docs/tutorials/cms-informacion-general), un sistema de gestión de contenidos que permite a los equipos de negocio crear, colaborar y publicar el contenido del storefront sin depender del código frontend.

Estas son las funcionalidades del CMS:

- [Todos los contenidos](#todos-los-contenidos)
- [Tiendas](#tiendas)
- [Ramas y control de versiones](#ramas-y-control-de-versiones)
- [Configuraciones regionales](#configuraciones-regionales)
- [Multimedia](#multimedia)
- [Roles y permisos](#roles-y-permisos)

## Todos los contenidos

**Todos los contenidos** es el dashboard principal del CMS. Permite listar y gestionar desde un único hub del Admin VTEX todo el contenido digital de tu tienda: páginas, layouts, plantillas y secciones globales. Para acceder, abre el Admin VTEX y ve a **Storefront > Contenido > Todos los contenidos**.

![cms-overview](https://vtexhelp.vtexassets.com/assets/docs/src/cms-overview___4da66fe4346083e5056bc43f9c49db1a.png)

## Tiendas

En la página **[Tiendas](https://help.vtex.com/es/docs/tutorials/cms-configurar-tiendas)** se define cada storefront que consume contenido del CMS, tal como un proyecto de FastStore. En esta página puedes vincular storefronts al CMS y configurar las URLs de vista previa y compilación de cada tienda, la integración con el repositorio, además de las configuraciones regionales predeterminadas y de resguardo para la entrega de contenido.

![cms-stores](https://vtexhelp.vtexassets.com/assets/docs/src/cms-stores___6a92351517b7672eb34b4427765cbd2e.png)

## Ramas y control de versiones

En la página **[Ramas](https://help.vtex.com/es/docs/tutorials/gestionando-versiones-y-branches)** hay un workspace colaborativo donde los equipos pueden trabajar en cambios de contenido en un entorno aislado antes de hacer merge en la rama Main, sin afectar el storefront en producción.

Cada rama es una versión aislada de contenido, lo que permite que múltiples editores creen, actualicen y refinen páginas, layouts y secciones de manera simultánea. Todos los cambios se registran por pieza de contenido a través del [historial de versiones](https://help.vtex.com/es/docs/tutorials/historial-de-versiones), lo que facilita ver quién realizó un cambio, qué cambió y cuándo.

![cms-branches](https://vtexhelp.vtexassets.com/assets/docs/src/cms-branches___d4cbb256190ee104d3794e2c812b4c8f.png)

## Configuraciones regionales

En la pestaña **[Configuraciones regionales](https://help.vtex.com/es/docs/tutorials/configurar-configuraciones-regionales)** se define el idioma y la configuración regional del contenido de la tienda, lo que permite experiencias de compra multidioma. En lugar de duplicar páginas o mantener tiendas separadas para cada región, puedes definir las configuraciones regionales de la tienda (por ejemplo, `en-US` o `es-MX`) y crear versiones localizadas del mismo contenido, incluyendo reglas de resguardo para las configuraciones regionales que no tienen contenido localizado propio.

## Multimedia

En la página **Multimedia** se gestionan los archivos multimedia de la tienda, como imágenes y videos. Para imágenes, puedes cargar y organizar archivos de hasta 5 MB en los formatos PNG, JPG, GIF, SVG y WebP. Para videos, puedes registrar una URL de un proveedor externo, como YouTube.

## Roles y permisos

Los **[roles y permisos](https://help.vtex.com/es/docs/tutorials/cms-roles-y-permisos)** controlan lo que cada miembro del equipo puede crear, editar y publicar en el CMS. Los tres roles predefinidos, Content Producer, Content Editor y Content Administrator, siguen el modelo de ramificación tipo git del CMS, que separa la autoría del contenido de su publicación.

## Más información

- **[CMS para FastStore y Headless Stores](https://help.vtex.com/es/docs/tutorials/cms-informacion-general):** conoce las principales partes del CMS.

- **[Configurar tiendas](https://help.vtex.com/es/docs/tutorials/cms-configurar-tiendas):** vincula storefronts al CMS y configura sus ajustes.

- **[Versiones y ramas](https://help.vtex.com/es/docs/tutorials/gestionando-versiones-y-branches):** aprende a crear, previsualizar y hacer merge de ramas para publicar contenido.

- **[Configurar configuraciones regionales](https://help.vtex.com/es/docs/tutorials/configurar-configuraciones-regionales):** configura los idiomas y las regiones para el contenido de tu tienda.

- **[CMS roles y permisos](https://help.vtex.com/es/docs/tutorials/cms-roles-y-permisos):** conoce los roles predefinidos del CMS y lo que puede hacer cada uno.
