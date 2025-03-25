---
title: 'Cómo funciona la relación entre websites y políticas comerciales'
id: 1VuakBcyNOgg4AM4cUeeQg
status: PUBLISHED
createdAt: 2019-01-24T20:45:42.855Z
updatedAt: 2023-03-29T14:43:46.618Z
publishedAt: 2023-03-29T14:43:46.618Z
firstPublishedAt: 2019-01-24T22:07:42.559Z
contentType: tutorial
productTeam: Channels
author: authors_59
slugEN: how-the-relationship-between-websites-and-business-policies-works
locale: es
legacySlug: como-funciona-la-relacion-entre-sitios-web-y-politicas-comerciales
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

Políticas comerciales informan qué contenidos se pueden renderizar en un website. A continuación, vamos a explicar las reglas de la relación entre websites y políticas comerciales.

## Regla de elegibilidad

¿Cómo saber qué políticas comerciales son elegibles para un website?

Esta elegibilidad se determina en la configuración del __binding__ del website. [En este artículo](/es/tutorial/vincular-un-account-name-a-un-website-binding), en el __paso 8__, tenemos la explicación de cómo se vincula una política comercial a un website.

A continuación, vamos a ver las reglas de elegibilidad:

&bull; Si usted ha vinculado una política comercial a un website, esta política se vuelve elegible para este website. Si usted desea, esta política todavía se puede vincular a otros websites.

&bull; Si usted no ha vinculado una política comercial en __ningun website__, esta política se vuelve elegible a __todos__ sus websites.

## Regla de prioridad

Entre las __políticas comerciales elegibles__, la política que se renderizará en el website será la política que está en primer lugar en la ordenación de políticas comerciales.

Para saber la ordenación de las políticas, siga los pasos abajo:

1. En su Admin VTEX, acceda a **Configuración de la tienda > Canales > Políticas Comerciales**.
2. En la columna __Posición__, verá la ordenación de sus políticas comerciales. La posición 1 muestra la política comercial de mayor prioridad.

>❗ Recomendamos no cambiar la posición de la política comercial de **ID 1**.

### Ejemplos

Vamos a suponer una cuenta con tres políticas comerciales (A, B y C) registradas. La ordenación de las políticas comerciales está configurada de la siguiente manera:

1. C
2. B
3. A

Un website que tenga estas tres políticas comerciales elegibles va a renderizar la información de la __política comercial C__.

Un website que tenga sólo las políticas A y B como elegibles va a renderizar la información de la __política comercial B__.

## Excepción a la regla de prioridad

Si una política comercial *con restricción de acceso* aparece en la ordenación con prioridad por encima de otra política elegible, *pero sin restricción de acceso*, la política renderizada será la __política elegible sin restricción de acceso__.

### Ejemplos

Vamos a suponer una cuenta con tres políticas comerciales (A, B y C) registradas. La política B es una política específica para B2B y, por lo tanto, __tiene restricción de acceso__. La política A es una política específica para marketplace, __sin restricción de acceso__.

La ordenación de las políticas comerciales está configurada de la siguiente manera:

1. C
2. B
3. A

Un website que tenga sólo las políticas A y B como elegibles va a renderizar la información de la __política comercial A__.
