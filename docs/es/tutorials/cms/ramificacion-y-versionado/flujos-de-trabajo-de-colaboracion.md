---
title: "Flujos de trabajo de colaboración"
createdAt: 2026-05-20T17:08:52.219Z
updatedAt: 2026-06-10T17:08:52.219Z
contentType: tutorial
productTeam: CMS
slugEN: collaboration-workflows
locale: es
---

Cuando se colabora con un equipo, las [ramas](https://help.vtex.com/es/docs/tutorials/gestionando-versiones-y-branches) proporcionan funcionalidades clave para facilitar los procesos de edición y revisión de contenido. Permiten que varios colaboradores trabajen juntos de forma eficiente, manteniendo el control sobre las distintas versiones del contenido.

## Awareness multiusuario

Cuando varios miembros del equipo están editando la misma versión, el sistema muestra los avatares de los usuarios en el encabezado. Esto facilita identificar a quien está activo actualmente en el documento.

![multi-user-awareness-overview](https://vtexhelp.vtexassets.com/assets/docs/src/multi-user-awareness-1___efb04fe660bbcd9c627683189124a776.gif)

Además, en el menú **Versiones** puedes ver a los usuarios que están editando activamente una versión específica. Sus avatares se muestran junto al nombre de la versión en el panel lateral, lo que ayuda a los equipos a mantenerse al tanto de las modificaciones en curso y a evitar conflictos.

![multi-user-awareness-detail](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/cms/branching-and-versioning/collaboration-workflow-2.gif)

## Edición multiusuario dentro de una rama

Cuando varios usuarios trabajan en la misma versión dentro de una rama, el contenido se actualiza automáticamente cada vez que alguien guarda sus cambios, lo que garantiza que todos vean la última versión guardada.

Sin embargo, los cambios no guardados no están protegidos. Si dos usuarios editan el mismo contenido y uno de ellos hace clic en `Guardar`, su versión sobrescribirá los cambios no guardados del otro usuario.

Para evitar la pérdida de trabajo, utiliza la [funcionalidad de awareness multiusuario](#awareness-multiusuario) para ver quién más está editando. Puedes identificar a los usuarios activos por sus avatares y coordinar los cambios realizados según sea necesario.

## Contenido de la rama con actualización automática

Las ramas se mantienen sincronizadas automáticamente con los cambios más recientes publicados en la rama `main` mediante la funcionalidad de actualización automática. Esto garantiza que la versión de la rama esté actualizada sin sobrescribir los cambios realizados en la rama.  

Por ejemplo, si estás editando una **estantería de productos** en la página de inicio dentro de una rama llamada **Temporada de primavera**, y un compañero publica una actualización de banner directamente en `main`, tu rama **Temporada de primavera** incluirá automáticamente ese nuevo banner sin interrumpir ni afectar tu trabajo en curso.  

El principio fundamental es que los cambios que hagas en tu rama siempre se conservan y nunca se sobrescriben por actualizaciones provenientes de `main`.  

Si tanto tú como tu compañero hacen cambios en el mismo contenido (por ejemplo, la misma estantería de productos), la actualización automática no se aplica. En caso de conflicto, el sistema conserva los cambios realizados en la rama.
