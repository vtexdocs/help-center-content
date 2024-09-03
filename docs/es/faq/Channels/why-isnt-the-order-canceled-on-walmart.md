---
title: '¿Por qué el pedido no es cancelado en Walmart?'
id: frequentlyAskedQuestions_680
status: ARCHIVED
createdAt: 2017-04-27T22:30:09.292Z
updatedAt: 2020-01-09T15:46:16.410Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:02:27.310Z
contentType: frequentlyAskedQuestion
productTeam: Channels
author: authors_3
slug: por-que-el-pedido-no-cancela-en-walmart
locale: es
legacySlug: por-que-el-pedido-no-cancela-en-walmart
---

En la integración del marketplace con Walmart, la integración de pedidos es de responsabilidad del integrador de Walmart. Así que cuándo existe la cancelación del pedido, se efectué una notificación en Walmart, pero puede haber fallas en esta comunicación.

Cuando esto ocurre, el pedido queda en el status &#8220;Iniciando Cancelamento&#8221; en VTEX y, al intentar cancelar de nuevo, se devuelve el mensaje siguiente:

`System.AggregateException: One or more errors occurred. ---&gt; System.InvalidOperationException: **The character set provided in ContentType is invalid. Cannot read content as string using an invalid character set.** ---&gt; System.ArgumentException: **'"UTF-8"' is not a supported encoding name. **at System.Globalization.EncodingTable.internalGetCodePageFromName(String name) at System.`

Para corregir este tipo de escenario, es necesario que el pedido sea alineado directamente con el equipo técnico de Walmart para, entonces, intentar de cancelar de nuevo por VTEX.
