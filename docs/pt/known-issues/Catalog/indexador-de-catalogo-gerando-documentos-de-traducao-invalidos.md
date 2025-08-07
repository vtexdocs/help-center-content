---
title: "Indexador de catálogo gerando documentos de tradução inválidos"
id: 3pbXOA3DQILdu05tAwjlVM
status: PUBLISHED
createdAt: 2024-02-29T18:02:38.600Z
updatedAt: 2025-07-24T17:50:39.534Z
publishedAt: 2025-07-24T17:50:39.534Z
firstPublishedAt: 2024-02-29T18:02:39.430Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: indexador-de-catalogo-gerando-documentos-de-traducao-invalidos
locale: pt
kiStatus: No Fix
internalReference: 991494
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Ao indexar um produto com informações traduzidas, o aplicativo Messages é consultado. Essas solicitações devem ter menos de 3s e, quando demoram mais do que isso, a indexação falha e gera um documento de tradução inválido.

Esse cenário gerará erros no histórico de indexação com a mensagem "translations is smaller than context".

## Simulação


Não há uma maneira fácil de reproduzir esse cenário, mas as contas com muitos idiomas ou muitos campos para traduzir são mais suscetíveis a esse cenário.



## Workaround


N/A




