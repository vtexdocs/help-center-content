---
title: 'Campos não suportados pela Intelligent Search API retornando vazios'
id: Jvm9oLhUM6NqCslpBqSti
status: PUBLISHED
createdAt: 2024-05-13T21:03:14.026Z
updatedAt: 2024-10-30T16:23:41.744Z
publishedAt: 2024-10-30T16:23:41.744Z
firstPublishedAt: 2024-05-13T21:03:15.346Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: unsupported-fields-by-the-intelligent-search-api-returning-empty
locale: pt
kiStatus: Backlog
internalReference: 1032531
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


A API de pesquisa inteligente baseia-se principalmente na API de pesquisa de catálogo herdada por motivos de compatibilidade, mas nem todas as propriedades retornam as mesmas informações. Em alguns casos, elas são diferentes ou estão vazias.

Algumas propriedades afetadas:

- ".items.attachments" (retorna vazia)
- ".items.isKit" (sempre retorna falso)
- ".items.kitItems" (retorna vazio)
- ".items.estimatedDateArrival" (retorna vazio)
- ".items.modalType" (retorna vazio)
- ".items.images.imageText" (retorna o mesmo que "imageLabel")
- ".items.sellers.commertialOffer.PaymentOptions" (não disponível, mas a versão resumida está disponível em ".commertialOffer.PaymentOptions")

## Simulação



- registrar o valor de um campo afetado no módulo Catalog
- comparar a resposta para o campo específico entre as APIs Catalog Search e Intelligent Searc

## Workaround


N/A




