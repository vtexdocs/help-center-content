---
title: "Requests con paginación en la API de búsqueda van a cambiar"
id: 3UZR4qoAisiqE6kmuuYEAc
status: CHANGED
createdAt: 2018-01-24T14:11:26.225Z
updatedAt: 2020-11-27T19:40:17.179Z
publishedAt: 2020-05-11T18:53:36.826Z
contentType: updates
productTeam: Identity
author: authors_24
slug: requests-con-paginacion-en-la-api-de-busqueda-van-a-cambiar
legacySlug: requests-con-paginacion-en-la-api-de-busqueda-van-a-cambiar
announcementImageID: ""
announcementSynopsisES: A partir de 31/02/18, requests con paginación no se podrán hacer con el header resources del request.
---

<div class = "alert alert-warning">
  <strong>Atención</strong>: VTEX presenta dos opciones de búsqueda - La búsqueda VTEX y VTEX Intelligent Search. Este artículo se refiere a la búsqueda VTEX. Para saber más sobre la aplicación VTEX Intelligent Search, consulte <a href = "https://help.vtex.com/es/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb">nuestra guía</a>.
</div>

A partir de __31 de marzo__, los requests con paginación en la API de búsqueda ya no se podrán hacer con el header `resources` del request. Él se interrumpirá y, para solicitar una respuesta de la API, usted deberá utilizar los parámetros `_from` y `_to` en la URL, como en el ejemplo:

`http://{{AccountName}}.{{environment}}.com.br/api/catalog_system/pub/products/search?ft=refrigerador&_from=1&_to=30`

Este cambio ya se ha implementado en la API, pero hasta la fecha límite, todavía será posible realizar el request de las dos formas. El header `resources` del response no se verá afectado y seguirá funcionando.

<div class="alert alert-warning">
<b>Importante:</b><br>
- Para funcionar, los parámetros <b>_from</b> y <b>_to</b> no deben tener una diferencia mayor que <b>50</b>. Esto hará que se muestren como máximo 50 resultados de búsqueda a la vez.<br><br>
- También hay un límite de 2500 elementos para una búsqueda. Por lo tanto, usted no puede utilizar un valor mayor que 2500 al parámetro <b>_to</b>.
</div>

Para saber todos los detalles del funcionamiento de los requests de paginación en la API de búsqueda, acceda a este [documento](https://developers.vtex.com/reference/search-api-overview).
