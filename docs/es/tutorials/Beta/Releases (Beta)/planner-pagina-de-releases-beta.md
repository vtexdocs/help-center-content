---
title: 'Releases: página de Releases (Beta)'
id: 2p7IiVD6K8i1iRiwHph5sw
status: PUBLISHED
createdAt: 2022-09-19T21:56:39.252Z
updatedAt: 2023-02-08T21:20:51.145Z
publishedAt: 2023-02-08T21:20:51.145Z
firstPublishedAt: 2022-09-20T00:26:05.306Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: planner-releases-page-beta
locale: es
legacySlug: planner-pagina-de-lanzamientos-beta
subcategoryId: 3vXj7HrnYK8V5riTOwUuYv
---


<div class="alert alert-info">
  <p>El <strong>Releases</strong>se encuentra en la versión Beta, por lo tanto, estamos trabajando para mejorarlo. Esta funcionalidad es válida únicamente para las tiendas que usan <a href="https://www.faststore.dev/">FastStore</a>.</p>
</div>

El módulo **Releases** te permite [gestionar tus releases](/es/tutorial/planner-concepto-de-release-beta--4pWhQTXG0aIIsi2TYxxRkZ) para que puedas coordinar la creación, programación y publicación de los cambios en tu tienda.

Las páginas **Releases** y [Calendario](/es/v4/docs/planner-pagina-calendario--6GESJ17RFvGrvF9JqToron) están en menú de navegación del **Releases** en el Admin VTEX. Puedes crear un nuevo release y realizar algunas otras [acciones](/pt/tutorial/planner-acciones-en-los-releases-beta--1zsomdifPEQkdV6RW93JyW) desde **Releases**.

En la página **Releases**, podrás visualizar una lista con todos los releases existentes, clasificados primero por aquellos releases con el [status](/es/tutorial/planner-concepto-de-release-beta--4pWhQTXG0aIIsi2TYxxRkZ#status-de-los-releases) `No programado`, seguidos de los programados. 

El orden de los releases programados se basa en la fecha de publicación: cuanto más lejano en el futuro sea un release, antes aparecerá en la lista; y cuanto más distante en el pasado, más hacia el final aparecerá.

<div class="alert alert-warning">
  <p>En la etapa Beta, los releases deben estar relacionados al <a href="https://help.vtex.com/es/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/4yB9wSl79cArd68aRBnBZ2">CMS</a> porque hay otros módulos de la plataforma VTEX que aún no están incluidos. Para usar el <strong>Releases</strong>, se debe configurar el CMS tal como se describe en <a href="https://www.faststore.dev/how-to-guides/cms/vtex-headless-cms/Installing%20Releases%20on%20VTEX%20Headless%20CMS">Installing Releases on VTEX Headless CMS</a>.</p>
</div>

## Vista en lista

Para acceder a la página **Releases** en el Admin VTEX, dirígete al menú de navegación del **Releases**. La imagen a continuación muestra la interfaz e identifica qué puedes hacer en ella:

![Releases list view v3 - ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Beta/Releases%20(Beta)/planner-pagina-de-releases-beta_1.png)

| **Campo** | **Descripción** |
|---|---|
| **Nombre** | Nombre que identifica el release, definido en la etapa de creación. Si no se publicó el release, se lo puede editar en cualquier momento. |
| **Última modificación** | Tiempo transcurrido desde la última modificación del release. |
| **Creado por** | Identificación del último usuario que modificó el contenido del release. |
| **Fecha de publicación** | Día y hora de publicación o programación de la publicación del release. Si el release no tiene una fecha definida, este campo aparecerá como `No programado`. |
| **Status** | Indicación del [estado del release](/es/tutorial/planner-concepto-de-release-beta--4pWhQTXG0aIIsi2TYxxRkZ#status-de-los-releases). |

En la página **Releases**, puedes:

**I - Acceder a detalles del release:** haz clic sobre un release y serás redireccionado a la página de detalles del release.

**II - Buscar releases:** en la barra de búsqueda, ingresa el nombre del releaseque quieres encontrar. La búsqueda tiene en cuenta todos los releases existentes.

**III - Filtrar releases:** para filtrar por [status de releases](/es/tutorial/planner-concepto-de-release-beta--4pWhQTXG0aIIsi2TYxxRkZ#status-de-los-releases), usa el botón `Status`<i class="fas fa-angle-down"></i> y selecciona la opción deseada. Para filtrar por fecha de programación o publicación, haz clic en `Fecha` <i class="fas fa-angle-down"></i> y selecciona la fecha deseada.

**IV - Crear nuevo release:** para crear un nuevo release, haz clic en el botón `Crear release` y sigue los pasos descriptos en [Releases: acciones en releases](/pt/tutorial/planner-acciones-en-los-releases-beta--1zsomdifPEQkdV6RW93JyW).

**VI - Navegar entre páginas:** para ver más resultados de los releases, navega entre las páginas de resultados usando las flechas laterales <i class="fas fa-angle-left"></i> <i class="fas fa-angle-right"></i>.

**VII - Realizar acciones en el release:** egún [status de un release](/es/tutorial/planner-concepto-de-release-beta--4pWhQTXG0aIIsi2TYxxRkZ#status-de-los-releases), el menú de tres puntos <i class="fas fa-ellipsis-v"></i> mostrará distintas opciones de acciones. Para ver las posibles acciones, lee [Releases: acciones en los releases](/pt/tutorial/planner-acciones-en-los-releases-beta--1zsomdifPEQkdV6RW93JyW).

## Más información

* [Releases: concepto de release](/es/tutorial/planner-concepto-de-release-beta--4pWhQTXG0aIIsi2TYxxRkZ)
* [Releases: acciones en los releases](/es/tutorial/planner-acciones-en-los-releases-beta--1zsomdifPEQkdV6RW93JyW)
* [Releases: página Calendario](/es/v4/docs/planner-pagina-calendario--6GESJ17RFvGrvF9JqToron)
