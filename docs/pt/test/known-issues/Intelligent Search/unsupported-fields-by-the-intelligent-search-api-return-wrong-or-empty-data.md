---
title: 'Campos não suportados pela Intelligent Search API retornam dados errados ou vazios'
id: Jvm9oLhUM6NqCslpBqSti
status: PUBLISHED
createdAt: 2024-05-13T21:03:14.026Z
updatedAt: 2024-06-25T19:11:41.925Z
publishedAt: 2024-06-25T19:11:41.925Z
firstPublishedAt: 2024-05-13T21:03:15.346Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slug: campos-nao-suportados-pela-intelligent-search-api-retornam-dados-errados-ou-vazios
locale: pt
kiStatus: Backlog
internalReference: 1032531
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


A API de pesquisa inteligente baseia-se principalmente na API de pesquisa de catálogo herdada por motivos de compatibilidade, mas nem todas as propriedades retornam as mesmas informações. Em alguns casos, elas são diferentes ou estão vazias.

Algumas propriedades afetadas:

- "modalType" (retorna vazio)
- "imageText" (retorna o mesmo que "imageLabel")
- "kitItems" (retorna vazio)

## Simulação



- registrar o valor de um campo afetado no módulo Catalog
- comparar a resposta para o campo específico entre as APIs Catalog Search e Intelligent Searc

## Workaround


N/A




