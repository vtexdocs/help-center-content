---
title: Por que o pedido não é cancelado no Walmart?
id: frequentlyAskedQuestions_680
status: DRAFT
createdAt: 2017-04-27T22:30:09.292Z
updatedAt: 2020-01-09T15:46:16.410Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:02:27.310Z
contentType: frequentlyAskedQuestion
productTeam: Channels
author: authors_3
slug: por-que-o-pedido-nao-cancela-no-walmart
legacySlug: por-que-o-pedido-nao-cancela-no-walmart
---

Na integração de marketplace com o Walmart, a integração de pedidos é de responsabilidade do integrador do Walmart. Logo, quando há o cancelamento do pedido, é feita uma notificação no Walmart, mas podem haver falhas nessa comunicação.

Quando isso acontece, o pedido fica no status de Iniciando cancelamento na VTEX e, ao tentar cancelar novamente, é retornada a seguinte mensagem:

`System.AggregateException: One or more errors occurred. ---&gt; System.InvalidOperationException: **The character set provided in ContentType is invalid. Cannot read content as string using an invalid character set.** ---&gt; System.ArgumentException: **'"UTF-8"' is not a supported encoding name. **at System.Globalization.EncodingTable.internalGetCodePageFromName(String name) at System.`

Para corrigir este tipo de cenário, é necessário que o pedido seja alinhado diretamente com o time técnico do Walmart para, então, tentar cancelá-lo novamente pela VTEX.

