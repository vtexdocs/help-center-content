---
title: 'En VTEX, la conversión de PNG a WebP ahora es lossless'
id: 4J4ZtrCZIksY8qikWgeomY
status: PUBLISHED
createdAt: 2018-02-20T14:55:17.152Z
updatedAt: 2020-01-07T22:08:24.665Z
publishedAt: 2020-01-07T22:08:24.665Z
contentType: updates
productTeam: Marketing & Merchandising
author: authors_24
slugEN: on-vtex-png-to-webp-conversion-is-now-lossless
locale: es
legacySlug: en-vtex-la-conversion-de-png-a-webp-ahora-es-lossless
announcementImageID: ''
announcementSynopsisES: 'El cambio en la forma de compresión se hizo para atender a las tiendas que necesitan mantener alta calidad de imágenes.'
---

Las tiendas VTEX ya contaban con compresión automática de imágenes para el formato __WebP__, como se divulgó [en este announcement](/es/announcement/tiendas-vtex-ahora-tienen-compresion-automatica-de-imagenes-para-webp). La novedad es que, ahora, esta compresión es __lossless__ para las imágenes __PNG__. Esto significa que las imágenes con esta extensión seguirán siendo convertidas al formato creado por Google, pero __sin pérdidas de calidad__.

Esta conversión sólo ocurre cuando su tienda es accedida por un navegador compatible con el formato (por ejemplo, Google Chrome). En navegadores que no reconocen el WebP, las imágenes siguen siendo renderizadas en sus formatos originales. Recordamos también que la compresión automática no cambia el archivo que subió en el CMS, pero sólo la forma en que se representa este archivo en la pantalla de su usuario.

> ⚠️ La compresión **sin pérdidas** es aplicable sólo a los archivos **PNG**. Los archivos **JPG** continúan siendo comprimidos por el proceso **lossy** (que disminuye el tamaño de la imagen para aumentar la velocidad de carga de la página).

Este cambio se ha desarrollado para satisfacer a los usuarios que realmente necesitan mantener una calidad de imagen más alta, incluso después de la conversión al formato WebP. Para condiciones normales de uso, los archivos _.jpg_ siguen siendo la solución más indicada.
