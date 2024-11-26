---
title: 'A API de pesquisa da Faststore considera o fuzzy como automático por padrão'
id: 2zedXBMhlD8pu4gZMXsrSp
status: ARCHIVED
createdAt: 2023-08-28T23:35:04.009Z
updatedAt: 2024-11-11T20:14:10.699Z
publishedAt: 
firstPublishedAt: 2023-08-28T23:35:04.608Z
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slugEN: faststore-search-api-considering-fuzzy-as-auto-as-default
locale: pt
kiStatus: Fixed
internalReference: 889321
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


No pacote @fatstore/api, para o resolvedor da Pesquisa Inteligente, estamos considerando o fuzzy como automático por padrão quando deveria ser 0. Isso está fazendo com que o comportamento do fuzzy seja aplicado, causando uma "falsa correspondência incorreta" nos resultados da pesquisa quando realmente temos uma correspondência exata com o termo pesquisado, mas exibimos mais resultados independentemente disso

## Simulação



## Workaround



lação



## Workaround



