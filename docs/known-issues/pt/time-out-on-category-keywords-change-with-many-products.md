---
title: 'Timeout ao mudar as palavras-chave da categoria com muitos produtos'
id: 14rC5XqGCOj1THVdYwbudS
status: PUBLISHED
createdAt: 2022-02-25T11:40:37.024Z
updatedAt: 2024-02-16T20:26:33.631Z
publishedAt: 2024-02-16T20:26:33.631Z
firstPublishedAt: 2022-02-25T11:40:37.550Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: timeout-ao-mudar-as-palavraschave-da-categoria-com-muitos-produtos
locale: pt
kiStatus: No Fix
internalReference: 497335
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

Impossível alterar as palavras-chave de uma categoria com muitos produtos, já que um timeout é retornado no processo, seja por admin ou por API


## Simulação


Por Admin ou API, altere as palavras-chave de uma categoria com muitos produtos (pelo menos mais de 40.000)
Espere alguns segundos e você receberá um timeout


## Workaround


Remover produtos da categoria, mudar palavras-chave, devolver produtos

