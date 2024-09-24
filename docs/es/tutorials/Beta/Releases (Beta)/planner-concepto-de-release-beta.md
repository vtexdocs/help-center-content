---
title: 'Releases: concepto de release (Beta)'
id: 4pWhQTXG0aIIsi2TYxxRkZ
status: PUBLISHED
createdAt: 2022-09-19T20:49:52.633Z
updatedAt: 2023-02-08T21:13:19.140Z
publishedAt: 2023-02-08T21:13:19.140Z
firstPublishedAt: 2022-09-19T23:25:39.523Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: planner-release-concept-beta
locale: es
legacySlug: planner-concepto-de-lanzamiento-beta
subcategoryId: 3vXj7HrnYK8V5riTOwUuYv
---

>ℹ️ El **Releases** se encuentra en la versión Beta, por lo tanto, estamos trabajando para mejorarlo. Esta funcionalidad es válida únicamente para las tiendas que usan [FastStore](https://www.faststore.dev/).

La gestión de una operación de _ecommerce_ exige que el _retailer_ haga una serie de actualizaciones en su tienda que, muchas veces, suelen relacionarse entre sí. Por ejemplo, una campaña publicitaria en la cual se deben configurar distintos elementos del _storefront_.

El **Releases** es el módulo de VTEX que le permite al _retailer_ [administrar sus releases](https://help.vtex.com/es/tutorial/planner-acciones-en-los-releases-beta--1zsomdifPEQkdV6RW93JyW) a fin de coordinar la planificación, la creación, la programación y la publicación de los cambios en la tienda. 

Un release es un cambio o un grupo de cambios que pueden publicarse en conjunto. Los principales beneficios de usar los releases son:

* Optimización del rendimiento de la plataforma, ya que la publicación de los cambios agrupados elimina las colas de procesamiento.
* Más eficiencia en la operación porque se simplifica la gestión de cambios relacionados.
* Mayor control al probar y revisar los cambios antes de publicarlos.
* Facilidad para programar o eliminar grupos de cambios.

>⚠️ En la etapa Beta, los releases deben estar relacionados al [CMS](https://help.vtex.com/es/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/4yB9wSl79cArd68aRBnBZ2) porque hay otros módulos de la plataforma VTEX que aún no están incluidos. Para usar el **Releases**, se debe configurar el CMS tal como se describe en [Installing Releases on VTEX Headless CMS](https://www.faststore.dev/how-to-guides/cms/vtex-headless-cms/Installing%20Releases%20on%20VTEX%20Headless%20CMS).

Se puede acceder a esta funcionalidad a través del menú de navegación del **Releases** en el Admin VTEX, donde encontrarás las siguientes páginas:

* [Calendario](https://help.vtex.com/es/tutorial/planner-pagina-calendario-beta--46wSZ7Z5xoXQPP0xHfIx9C): permite gestionar los releases programados. Se pueden ver por semana o mes.
* [Releases](https://help.vtex.com/es/tutorial/planner-pagina-de-releases-beta--2p7IiVD6K8i1iRiwHph5sw): permite gestionar todos los releases. Se muestran en una lista.

## Status de los releases

Un release puede tener distintos status desde que se crea hasta que se publica o elimina, por ejemplo. En las páginas [Calendario](https://help.vtex.com/es/tutorial/planner-pagina-calendario-beta--46wSZ7Z5xoXQPP0xHfIx9C) y [Releases](https://help.vtex.com/es/tutorial/planner-pagina-de-releases-beta--2p7IiVD6K8i1iRiwHph5sw), el status de cada release se presenta asociado a un color, tal como se muestra en la tabla a continuación:

| **Status** | **Color** | **Definición** |
|:---:|:---:|:---:|
| `Programado` |  | Hay una fecha definida para la publicación del release. |
| `No programado` | Gris | No hay una fecha definida para la publicación del release. |
| `En fila` | Verde (intermitente) | La publicación del release está en la etapa de implementación. Por lo tanto, el retailer no necesita hacer nada para que el release pase al siguiente status, el cual puede ser `Publicando` o `Error al publicar`. |
| `Publicando` | Verde (intermitente) | La plataforma VTEX está procesando la solicitud de publicación del release. El retailer no necesita hacer nada para que el release pase al siguiente status, el cual puede ser `Publicado`, `Error al publicar` o `Eliminado`. |
| `Publicado` | Verde | El release se publicó y los cambios pueden verse en el storefront de la tienda. |
| `Removido` | Gris | El release ya no está publicado y, en consecuencia, los cambios ya no se ven en el storefront de la tienda. El release removido no está eliminado, sino que se archiva y puede ser [publicado](https://help.vtex.com/es/tutorial/planner-acciones-en-los-releases-beta--1zsomdifPEQkdV6RW93JyW#publicar-releases) de nuevo en cualquier momento.  |
| `Error al publicar` | Rojo | Ocurrió un error y no se publicó el release. En estos casos, el retailer puede intentar [publicar el release](https://help.vtex.com/es/tutorial/planner-acciones-en-los-releases-beta--1zsomdifPEQkdV6RW93JyW#publicar-releases) de nuevo o [programar una nueva fecha de publicación](https://help.vtex.com/es/tutorial/planner-acciones-en-los-releases-beta--1zsomdifPEQkdV6RW93JyW#reprogramar). |

## Más información

* [Releases: acciones en releases](https://help.vtex.com/es/tutorial/planner-acciones-en-los-releases-beta--1zsomdifPEQkdV6RW93JyW)
* [Releases: página Calendario](https://help.vtex.com/es/tutorial/planner-pagina-calendario-beta--46wSZ7Z5xoXQPP0xHfIx9C)
* [Releases: página Releases](https://help.vtex.com/es/tutorial/planner-pagina-de-releases-beta--2p7IiVD6K8i1iRiwHph5sw)
