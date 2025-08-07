---
title: "O evento de compra GA4 não tem a árvore de categorias em item_category no dataLayer"
id: 6GCrgcG8PJHaZp80hi4Gb1
status: PUBLISHED
createdAt: 2023-07-12T16:42:17.087Z
updatedAt: 2023-07-12T16:43:37.976Z
publishedAt: 2023-07-12T16:43:37.976Z
firstPublishedAt: 2023-07-12T16:42:17.674Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: o-evento-de-compra-ga4-nao-tem-a-arvore-de-categorias-em-itemcategory-no-datalayer
locale: pt
kiStatus: Backlog
internalReference: 860655
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


O evento de compra do GA4 não tem a árvore de categorias em item_category no dataLayer, portanto, a única categoria disponível é a categoria de último nível do produto.

## Simulação



- Configure o aplicativo Google Tag Manager e ative "Send Google Analytics 4 Events" (Enviar eventos do Google Analytics 4);
- Conclua uma compra;
- No console, verifique os eventos em dataLayer; haverá apenas a categoria de último nível em item_category

## Workaround


N/A



