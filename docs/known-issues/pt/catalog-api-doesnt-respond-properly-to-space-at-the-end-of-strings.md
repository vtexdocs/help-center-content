---
title: 'A API do catálogo não responde adequadamente ao espaço no final das cadeias de caracteres'
id: 37TmHtc19126iarlQ4IL2p
status: PUBLISHED
createdAt: 2024-02-05T16:49:35.136Z
updatedAt: 2024-07-01T18:49:25.845Z
publishedAt: 2024-07-01T18:49:25.845Z
firstPublishedAt: 2024-02-05T16:49:36.178Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: a-api-do-catalogo-nao-responde-adequadamente-ao-espaco-no-final-das-cadeias-de-caracteres
locale: pt
kiStatus: No Fix
internalReference: 977033
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Ao usar a coleção de APIs de catálogo, se um campo JSON de cadeia de caracteres for enviado terminando com espaços (por exemplo, productName: "myProductName"), as APIs de catálogo responderão com uma resposta 400 imprópria e um corpo de resposta vazio, deixando o usuário sem saber o que foi enviado de forma imprópria.

A resposta correta ainda deve ser 400 (solicitação incorreta), mas com um tratamento de erro informando qual campo está incorreto e por quê.

## Simulação


Para qualquer API de catálogo (https://developers.vtex.com/docs/api-reference/catalog-api), insira mais de 1 espaço vazio no final de um campo de string, como exemplificado acima.

## Workaround


n/a

Esse tipo de string não deve ser aceito, mas o tratamento de erros deve ser ajustado.





