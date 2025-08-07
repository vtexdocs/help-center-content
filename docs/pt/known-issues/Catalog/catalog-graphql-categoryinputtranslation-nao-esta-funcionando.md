---
title: "Catalog GraphQL CategoryInputTranslation não está funcionando"
id: 1Zue7Roia2sYa4xNP9hF2y
status: PUBLISHED
createdAt: 2024-04-29T14:30:53.743Z
updatedAt: 2025-01-28T14:38:29.411Z
publishedAt: 2025-01-28T14:38:29.411Z
firstPublishedAt: 2024-04-29T14:30:54.577Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: catalog-graphql-categoryinputtranslation-nao-esta-funcionando
locale: pt
kiStatus: Backlog
internalReference: 1024172
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Atualmente, o método CategoryInputTranslation, para o catálogo graphQL, não está gerando uma atualização nos dados traduzidos para as contas.

## Simulação


1 - Acesse o IDE graphQL da VTEX e selecione o aplicativo vtex.catalog-graphql@1.103.1
2 - Crie uma mutação para o método CategoryInputTranslation
3 - Verifique se essa atualização se refletiu nos dados traduzidos no sit

## Workaround



- usar `vtex.catalog-grapghql@1.103.1` via Postman

- usar diretamente `vtex.messages@1.69.0` no GraphQL IDE

