---
title: 'Problemas de tradução ao usar uma subconta para implementar lojas em vários idiomas'
id: 5FOCZE7pI4npyfo7TjsFaY
status: PUBLISHED
createdAt: 2023-06-21T20:36:33.483Z
updatedAt: 2024-02-29T15:19:42.862Z
publishedAt: 2024-02-29T15:19:42.862Z
firstPublishedAt: 2023-06-21T20:36:33.922Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slug: problemas-de-traducao-ao-usar-uma-subconta-para-implementar-lojas-em-varios-idiomas
locale: pt
kiStatus: Backlog
internalReference: 848524
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


A indexação unificada do catálogo considera as traduções das mensagens apenas da conta principal, mesmo quando se usa uma arquitetura de subconta para implementar armazenamentos internacionais.

Isso leva a uma tradução diferente na página de pesquisa e na página do produto, pois o conteúdo da página de pesquisa baseia-se apenas nas traduções recuperadas pelo Catalog Indexer.

## Simulação



- Crie uma subconta e implemente lojas internacionais;
- Traduza o conteúdo do catálogo na subconta;
- Compare a página de pesquisa e a página do produto; elas terão traduções diferentes

## Workaround


Defina os idiomas adicionais (vinculações e conteúdo de Mensagens) na conta principal, replicando as traduções da subconta também na conta principal.




