---
title: 'Gestión de versiones de contenido'
id: 4loXo98CZncY0NnjKrScbG
status: PUBLISHED
createdAt: 2021-10-28T16:11:05.023Z
updatedAt: 2023-03-24T22:05:07.430Z
publishedAt: 2023-03-24T22:05:07.430Z
firstPublishedAt: 2021-12-16T16:27:38.316Z
contentType: tutorial
productTeam: VTEX IO
author: 1DedyaVUPp5wLAvjY7wKKv
slugEN: managing-content-versions
legacySlug: gestion-de-versiones-de-contenido
locale: es
subcategoryId: 9Arh3cJIOYlfSD1MUC2h3
---

La versión de un bloque es una copia de su contenido en un momento determinado. Por ejemplo, un carrusel puede tener versiones predefinidas para futuras campañas de marketing, como el Black Friday y el Día de San Valentín, con banners de contenido específico.

Con el recurso **Versiones**, puedes crear, programar y experimentar con diferentes contenidos para un bloque determinado, sin comprometer la versión publicada de tu tienda. Cada bloque disponible en el Site Editor puede tener varias versiones.

![Activating Versions - Versiones](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/storefront/site-editor/gestion-de-versiones-de-contenido_1.png)

Ve en las siguientes secciones cómo:

- [Crear una nueva versión de contenido](#crear-una-nueva-version-de-contenido)
- [Activar versiones](#activar-versiones)
- [Programar actualizaciones de contenido](#programar-actualizaciones-de-contenido)
- [Eliminar versiones](#eliminar-versiones)

## Crear una nueva versión de contenido

Utilizaremos de ejemplo el bloque [Layout del slider](https://developers.vtex.com/vtex-developer-docs/docs/vtex-slider-layout) para crear una nueva versión de contenido para tu tienda.

1. En el Admin VTEX, accede en **Storefront > Site Editor**.

2. Haz clic en el bloque deseado (por ejemplo, Layout del slider), selecciona **VERSIONES** y haz clic en **NUEVA VERSIÓN.**

3. En el campo **Contenido sin título**, introduce un nombre para identificar fácilmente tu contenido, por ejemplo, *Campaña de Black Friday*.

4. Configura el bloque según tus preferencias y haz clic en `GUARDAR`.

Tras guardar los cambios, se creará una nueva versión del bloque. Sin embargo, **esta versión aún no estará disponible públicamente en tu tienda**. Para publicarla, consulta la sección **[Activar versiones](#activar-versiones)**.

## Activar versiones

Después de [crear una nueva versión de contenido](#crear-una-nueva-version-de-contenido), puedes publicarla mediante la función **Más opciones**. Sigue las instrucciones a continuación para publicar el contenido en tu tienda

1. En el Admin VTEX, accede en **Storefront > Site Editor**.

2. Haz clic en el bloque deseado (por ejemplo, Layout del slider) y selecciona **VERSIONES.**

3. Elige el contenido que deseas activar y haz clic en `Más opciones` > **Activar.**

> ⚠️ Al acceder a *Aplicar a*, siempre aparecerá la opción *esta URL* encima de *esta plantilla*. Esto significa que si el bloque tiene dos versiones, cada una con una opción de aplicación diferente, el usuario solo podrá reactivar la versión aplicada en la plantilla si elimina la versión aplicada por URL. Después de hacer clic en `más opciones` > **Activar**, habrás publicado el nuevo contenido en tu tienda. <div style="background-color:#FCF8F2; border-left: 2px solid #F0AD4E; border-top-left-radius: 2px; border-bottom-left-radius: 2px; padding: 15px; margin-bottom: 10px"> Solo puedes tener un contenido activo a la vez. Si activas un contenido, los demás se desactivarán.

## Programar actualizaciones de contenido

Después de [crear una nueva versión de contenido](#crear-una-nueva-version-de-contenido), puedes programar la publicación de la nueva versión en tu tienda mediante el recurso **Visibilidad**.

Consulta la documentación [Programación de actualizaciones de contenido](/es/tutorial/agendando-atualizacoes-de-conteudo--5L93gED3wgSRoWpFJlJ2ns) y aprende a utilizar el recurso **Visibilidad**.

## Eliminar versiones

Si quieres eliminar una versión de un bloque, sigue los pasos a continuación para eliminarla de las versiones guardadas.

1. En el Admin VTEX, accede en **Storefront > Site Editor**.

2. Haz clic en el bloque deseado (por ejemplo, Layout del slider) y selecciona **VERSIONES.**

3. Elige el contenido que deseas eliminar y haz clic en `más opciones` > **Borrar.**

4. Se te preguntará si estás seguro de que quieres eliminar el contenido. Haz clic en `BORRAR` para eliminar definitivamente la versión.
