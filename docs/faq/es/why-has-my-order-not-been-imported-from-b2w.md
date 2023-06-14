---
title: '¿Por qué mi pedido no fue importado de B2W?'
id: frequentlyAskedQuestions_6657
status: DRAFT
createdAt: 2017-04-27T22:22:21.393Z
updatedAt: 2020-01-09T15:46:16.442Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:02:46.453Z
contentType: frequentlyAskedQuestion
productTeam: Channels
author: authors_35
slug: por-que-mi-pedido-no-fue-importado-de-b2w
legacySlug: por-que-mi-pedido-no-fue-importado-de-b2w
---

La integración con B2W funciona de la siguiente manera:

La SkyHub hace disponible una hilera con los pedidos hechos en B2W, y VTEX consume esos pedidos. Entre esas dos operaciones, hay un intervalo de tiempo natural, así como hay un intervalo entre el momento en el que los pedidos en su tienda los general el Checkout y los consume el OMS.

En general, un pedido hecho en B2W necesita indexarse en SkyHub, y luego insertarse en la hilera. Ese proceso suele tomar **hasta 1 hora**. Como VTEX consume constantemente esa hilera, no hay acumulación de pedidos. En la medida en que entran, ya son distribuidos para cada tienda.

Pero ¿qué hacer si ya ha transcurrido un largo periodo de tiempo y usted no encuentra el pedido en VTEX, incluso buscando vía API? En este caso, el mejor camino es entrar en contacto con SkyHub y pedirle que verifique si el pedido fue incluido en la hilera.
