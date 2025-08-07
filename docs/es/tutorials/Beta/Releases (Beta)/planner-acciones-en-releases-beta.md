---
title: 'Releases: acciones en releases (Beta)'
id: 1zsomdifPEQkdV6RW93JyW
status: PUBLISHED
createdAt: 2022-09-19T22:17:51.049Z
updatedAt: 2023-02-08T21:18:10.818Z
publishedAt: 2023-02-08T21:18:10.818Z
firstPublishedAt: 2022-09-19T23:00:29.141Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: planner-actions-on-releases-beta
locale: es
legacySlug: planner-acciones-en-los-lanzamientos-beta
subcategoryId: 3vXj7HrnYK8V5riTOwUuYv
---

<div class="alert alert-info">
  <p>El <strong>Releases</strong> se encuentra en la versión Beta, por lo tanto, estamos trabajando para mejorarlo. Esta funcionalidad es válida únicamente para las tiendas que usan <a href="https://www.faststore.dev/">FastStore</a>.</p>
</div>

El módulo **Releases** te permite gestionar [releases](/es/tutorial/planner-concepto-de-release-beta--4pWhQTXG0aIIsi2TYxxRkZ) para que puedas coordinar la creación, programación y publicación de los cambios en tu tienda. Un release es un cambio o un grupo de cambios que pueden publicarse en conjunto.

En el **Releases**, puedes ver la información de los releases, seguir los [status de los releases](/es/tutorial/planner-concepto-de-release-beta--4pWhQTXG0aIIsi2TYxxRkZ#status-de-los-releases) y llevar a cabo una serie de acciones. En este artículo, te mostraremos cuáles son esas acciones y cómo realizarlas.

Se puede acceder a esta funcionalidad a través del menú de navegación del **Releases** en el Admin VTEX, donde encontrarás las siguientes páginas:

* [Calendario](/es/tutorial/planner-pagina-calendario-beta--46wSZ7Z5xoXQPP0xHfIx9C)
* [Releases](/es/tutorial/planner-pagina-de-release-beta--2p7IiVD6K8i1iRiwHph5sw)

Cada página muestra una vista de los releases y te permite realizar distintas acciones que dependerán del [status del release](/es/tutorial/planner-concepto-de-release-beta--4pWhQTXG0aIIsi2TYxxRkZ#status-de-los-releases). Las principales acciones son:

* [Crear un release](#crear-un-release)
* [Buscar un release](#buscar-un-release)
* [Programar, reprogramar o desprogramar un release](#programar-reprogramar-o-desprogramar-un-release)
* [Publicar un release](#publicar-un-release)
* [Eliminar un release](#eliminar-un-release)

<div class="alert alert-warning">
  <p>En la etapa Beta, los releases deben estar relacionados al <a href="https://help.vtex.com/es/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/4yB9wSl79cArd68aRBnBZ2">CMS</a> porque hay otros módulos de la plataforma VTEX que aún no están incluidos. Para usar el <strong>Releases</strong>, se debe configurar el CMS tal como se describe en <a href="https://www.faststore.dev/how-to-guides/cms/vtex-headless-cms/Installing%20Releases%20on%20VTEX%20Headless%20CMS">Installing Releases on VTEX Headless CMS</a>.</p>
</div>

## Crear un release

Para crear un release a través del **Releases**, sigue estos pasos:

1. En la página [Calendario](/es/tutorial/planner-pagina-calendario-beta--46wSZ7Z5xoXQPP0xHfIx9C) o [Releases](/es/tutorial/planner-pagina-de-releases-beta--2p7IiVD6K8i1iRiwHph5sw), haz clic en el botón `Crear release`.
2. Rellena el campo **Nombre** con un nombre para el release.
3. En **Fecha de publicación**, selecciona una fecha para la publicación del release (opcional).
4. En **Hora**, selecciona un horario para la publicación (opcional).
5. Haz clic en `Crear release`.

  > Debe aparecer el siguiente mensaje de confirmación: _El release se creó y programó_.

Al crear el release, no es necesario que definas un **Fecha de publicación** y la **Hora**, ya que el release se puede crear con el [status](/es/tutorial/planner-concepto-de-release-beta--4pWhQTXG0aIIsi2TYxxRkZ#status-de-los-releases) `No programado` y dejarlo [programado](#programar) más adelante.

## Buscar releases

En la página **Releases**, se pueden buscar releases usando distintos componentes:

* **Barra de búsqueda:** ingresa el nombre del release que quieres encontrar. 
* **Filtros:** para filtrar por [status de releases](/es/tutorial/planner-concepto-de-release-beta--4pWhQTXG0aIIsi2TYxxRkZ#status-de-los-releases), usa el botón `Status` <i class="fas fa-angle-down"></i> y selecciona la opción deseada. Para filtrar por fecha de programación, haz clic en `Fecha` <i class="fas fa-angle-down"></i> y selecciona la fecha deseada.

## Programar, reprogramar o anular programación

En cuanto a la definición de las fechas de publicación, existen tres acciones posibles:

* [Programar](#programar): definir una fecha de publicación para el release cuando no existe ninguna.
* [Desprogramar](#desprogramar): cancelar la fecha de publicación, lo cual hace que el release pase al [status](/es/tutorial/planner-concepto-de-release-beta--4pWhQTXG0aIIsi2TYxxRkZ#status-de-los-releases) `No programado`.
* [Anular programación](#anular-programacion): definir una fecha nueva para un release que ya tenía una fecha determinada.

### Programar

Para programar un release en el status `No programado`, sigue estos pasos:

1. En la página [Releases](/es/tutorial/planner-pagina-de-releases-beta--2p7IiVD6K8i1iRiwHph5sw), haz clic en el ícono del menú de tres puntos<i class="fas fa-ellipsis-v"></i> del release deseado.
2. Selecciona la opción <i class="fal fa-calendar"></i> `Programar`.
3. En **Fecha de publicación**, selecciona una fecha para la publicación del release.
4. En **Hora**, selecciona un horario para la publicación.
5. Haz clic en `Programar`.

  > Luego de programar un release, debe aparecer el siguiente mensaje de confirmación: _Release programado_.

### Reprogramar

Cuando un release está en el status `Programado`, puedes reprogramarlo. Los pasos para reprogramarlo son similares a los de la sección anterior, con la diferencia de que deberás seleccionar la opción `Reprogramar` en lugar de `Programar`.

  > Luego de reprogramar un release, debe aparecer el siguiente mensaje de confirmación: _Release programado_.

### Anular programación

Para desprogramar un release y hacer que pase al status `No programado`, sigue estos pasos:

1. En la página [Releases](/es/tutorial/planner-pagina-de-releases-beta--2p7IiVD6K8i1iRiwHph5sw), haz clic en el ícono del menú de tres puntos<i class="fas fa-ellipsis-v"></i> del release deseado.
2. Selecciona la opción <i class="fal fa-calendar"></i> `Anular programación`.
3. Haz clic en el botón `Anular programación`.

## Publicar releases

Para publicar un release, este debe estar en uno de los siguientes [status](/es/tutorial/planner-concepto-de-release-beta--4pWhQTXG0aIIsi2TYxxRkZ#status-de-los-releases):

* `No programado`
* `Programado`
* `Falla al publicar`

Para publicar un release y hacer visibles los cambios en el _storefront_ de la tienda, sigue los pasos a continuación:

1. En la página **Calendario** o [Releases](/es/tutorial/planner-pagina-de-releases-beta--2p7IiVD6K8i1iRiwHph5sw), haz clic en el ícono del menú de tres puntos<i class="fas fa-ellipsis-v"></i> del release deseado.
2. Haz clic en <i class="far fa-cloud-upload"></i> `Publicar ahora`.
3. Haz clic en `Publicar`.

## Eliminar releases

Todos los [status de releases](/es/tutorial/planner-concepto-de-release-beta--4pWhQTXG0aIIsi2TYxxRkZ#status-de-los-releases) permiten eliminar un release, es decir, que el release se elimine permanentemente.

<div class="alert alert-info">
  <p>Si en lugar de eliminar un release quieres archivarlo, debes quitar el release de la publicación. De esta manera, no se eliminará y podrás volver a publicarlo en cualquier momento.</p>
</div>

Cuando se elimina un release que está en el status `Publicado`, los cambios que agrupaba se mantienen en el _storefront_ de la tienda. Lo único que deja de existir es el release que agrupaba los cambios.

Sigue estas instrucciones paso a paso para eliminar un release:

1. En la página [Releases](/es/tutorial/planner-pagina-de-releases-beta--2p7IiVD6K8i1iRiwHph5sw), haz clic en el ícono del menú de tres puntos<i class="fas fa-ellipsis-v"></i> del release deseado.
2. Haz clic en <i class="far fa-trash-alt"></i> `Eliminar`.
3. Haz clic en `Eliminar`.

  > Luego de eliminar un release, debe aparecer el siguiente mensaje de confirmación: _Release eliminado con éxito_.

## Más información

* [Releases: concepto de release](/es/tutorial/planner-concepto-de-release-beta--4pWhQTXG0aIIsi2TYxxRkZ)
* [Releases: página Calendario](/es/tutorial/planner-pagina-calendario-beta--46wSZ7Z5xoXQPP0xHfIx9C)
* [Releases: página Releases](/es/tutorial/planner-pagina-de-releases-beta--2p7IiVD6K8i1iRiwHph5sw)
