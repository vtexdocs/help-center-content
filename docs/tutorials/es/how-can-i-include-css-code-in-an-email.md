---
title: '¿Qué estilo de CSS debe ser usado en los e-mails?'
id: frequentlyAskedQuestions_5390
status: PUBLISHED
createdAt: 2019-01-24T20:46:02.325Z
updatedAt: 2019-12-31T15:29:01.217Z
publishedAt: 2019-12-31T15:29:01.217Z
firstPublishedAt: 2019-01-24T22:16:01.974Z
contentType: tutorial
productTeam: Post-purchase
author: authors_3
slug: como-insertar-css-en-un-e-mail
legacySlug: como-insertar-css-en-un-e-mail
subcategory: 4D5LrWwlHGmOWMomOaaGee
---

Esta regla es válida para cualquier tipo de e-mail, tanto de e-mail marketing como templates del Message Center o Master Data: utilice siempre **CSS inline**.

Esto es porque varios servidores de e-mail ignoran código CSS en el head, y también archivos de estilo externos al HTML. Por eso, para que su código sea lido y renderizado, es necesario insertar el CSS en el **body** del HTML.

__Punta!__ Siempre que quiera ocultar alguna característica de un elemento que el control de VTEX trae automáticamente, cambie el color de ese elemento para el color de fondo de su e-mail. Por ejemplo: en el carrito abandonado la estante de artículos es hecha con una estructura `ul` &gt; `li`. Esa estructura muestra puntos (•) en HTML. Para ocultar estos puntos, sólo hay que cambiar esta propriedad.

Antes de llamar la estante, deje todo blanco (o con el color de fondo de su e-mail). En el template de la estante, vuelva a aplicar el color (negro o cualquier color de su texto) en el contenido. Asi, `ul` y `li` serán blancas (invisibles), pero adentro los textos serán aplicados con color (visibles).

