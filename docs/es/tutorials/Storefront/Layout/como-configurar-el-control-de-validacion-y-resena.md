---
title: 'Configurar control de evaluación y reseña'
id: frequentlyAskedQuestions_585
status: ARCHIVED
createdAt: 2019-01-24T20:45:54.562Z
updatedAt: 2021-05-26T19:52:40.600Z
publishedAt: 
firstPublishedAt: 2019-01-24T21:59:55.793Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slugEN: how-to-configure-rating-and-review-controls
locale: es
legacySlug: como-configurar-el-control-de-validacion-y-resena
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

Este artículo tiene el objeto de enseñar cómo usar los controles de evaluación y reseña.

## Controles responsables:

`vtex.cmc:evaluationRate` – Evaluaciones de los consumidores (estrellas)

_Remite al total de clasificaciones que los usuarios han hecho._


`vtex.cmc:UserReview` – Evaluaciones y comentarios.

_Agrega opción de evaluar y resultado de las evaluaciones, formulario para comentar y visualización de comentarios._


`vtex.cmc:welcomeMessage` – Login del usuario

_Responsable por la creación del cookie IPI utilizado por el control UserReview. Sin él, al intentar hacer una evaluación, el login será requerido en loop._


## Conceptos y uso

Normalmente estos controles se usan en conjunto, pues el ‘evaluationRate’ muestra la clasificación media de las evaluaciones hechas en el ‘UserReview’.

Diferente de los demás, estos controles necesitan una configuración imprescindible para que funcionen, vea cómo hacerlo abajo:

En el registro de Categoria existe la opción de configurar la Avaliação (Evaluación) y normalmente esta configuración se hace en la categoría raíz:

![avaliação-categoria ES](https://images.ctfassets.net/alneenqid6w5/2iOensHpjSW8aYCqi2o2O8/548b7ff362e70275c73dbc9b0b2239d6/avalia____o_es.png)

Haga click en **Nueva Calificación** y rellene los datos Nome (Nombre) y Texto y después grabe.

![nueva-calificacion-categorias ES](//images.ctfassets.net/alneenqid6w5/5A1DGDfYGI4syYkYGkAI86/c9fd86d9e6bbe8c61828e28e4cd0f5de/Nueva_calificacion.png)

¡Listo! Sus controles de Reseña y Evaluación están listos para usarse.
