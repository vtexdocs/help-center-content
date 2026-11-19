---
title: 'Cómo funciona la relación entre websites y políticas comerciales'
id: 1VuakBcyNOgg4AM4cUeeQg
status: PUBLISHED
createdAt: 2019-01-24T20:45:42.855Z
updatedAt: 2026-10-14T18:21:41.930Z
publishedAt: 2023-03-29T14:43:46.618Z
firstPublishedAt: 2019-01-24T22:07:42.559Z
contentType: tutorial
productTeam: Channels
author: authors_59
slugEN: how-the-relationship-between-websites-and-business-policies-works
legacySlug: como-funciona-la-relacion-entre-sitios-web-y-politicas-comerciales
locale: es
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

Las políticas comerciales indican el contenido que se puede mostrar en un sitio web. A continuación se describen las reglas de la relación entre sitios web y políticas comerciales.

## Regla de elegibilidad

¿Cómo saber qué políticas comerciales son elegibles para un sitio web?

La elegibilidad se determina en la configuración del **binding** del sitio web. Para más información sobre cómo vincular una política comercial a un sitio web, consulta el **paso 8** del artículo [Vincular una tienda a una estructura de carpetas del CMS (binding)](/es/docs/tutorials/vincular-un-account-name-a-un-website-binding).

Las reglas de activación de elegibilidad son las siguientes:

- Si marcaste la casilla de una política comercial para un sitio web, esta política se vuelve elegible para ese sitio web. Si lo deseas, esta política también se puede vincular a otros sitios web.

- Si **no marcaste** una política comercial en **ningún sitio web**, esta política se vuelve elegible para **todos** tus sitios web.

> ℹ️ Cuando un [seller white label](/es/docs/tutorials/seller-white-label) realiza el fulfillment de los pedidos de tu tienda, la política comercial atendida por ese seller debe estar elegible en el binding de la **cuenta principal**, incluso si solo entrega pedidos de otro sitio web.

## Regla de prioridad

Entre las **políticas elegibles**, la que se mostrará en el sitio web será la que esté primero en el orden de las políticas comerciales.

Para ver el orden de las políticas comerciales sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Configuración de la tienda > Canales > Políticas comerciales**.
2. En la columna **Posición** se muestra el orden de tus políticas comerciales. La posición 1 muestra la política comercial de mayor prioridad.

> ❗ Recomendamos no cambiar la posición de la política comercial con **ID 1**. Al ser la política predeterminada de la cuenta, cambiar su posición puede modificar la política que se muestra en los sitios web y causar divergencias en precios, catálogo y envío. Si necesitas cambiar el orden, valida el resultado en cada sitio web después del cambio.

### Caso de uso

Considera una tienda con tres políticas comerciales (A, B y C) registradas. El orden de las políticas comerciales está configurado de la siguiente manera:

1. C
2. B
3. A

Un sitio web que tenga estas tres políticas comerciales elegibles mostrará la información de la **política comercial C**.

Un sitio web que tenga solo las políticas A y B como elegibles mostrará la información de la **política comercial B**.

## Excepción a la regla de prioridad

Si una política _con restricción de acceso_ está listada en el orden con prioridad superior a otra política elegible, _pero sin restricción de acceso_, se mostrará la **política elegible sin restricción de acceso**.

### Caso de uso

Considera una tienda con tres políticas comerciales (A, B y C) registradas. La política B es una política específica para B2B y, por lo tanto, **tiene restricción de acceso**. La política A es una política específica para marketplace, **sin restricción de acceso**.

El orden de las políticas comerciales está configurado de la siguiente manera:

1. C
2. B
3. A

Un sitio web que tenga solo las políticas A y B como elegibles mostrará la información de la **política comercial A**.

> ℹ️ Si la política de la cuenta principal atendida por un [seller white label](/es/docs/tutorials/seller-white-label) tiene restricción de acceso, el requisito de elegibilidad en el binding se combina con esta excepción. Si los usuarios no conectados ven información indebida en una tienda con restricción de acceso, consulta [Los usuarios no conectados ven información en mi tienda con restricción de acceso](/es/docs/troubleshooting/los-usuarios-no-conectados-ven-informacion-en-mi-tienda-con-restriccion-de-acceso).
