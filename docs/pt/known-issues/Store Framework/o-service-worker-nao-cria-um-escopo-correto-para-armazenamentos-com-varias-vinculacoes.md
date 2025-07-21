---
title: "O service worker não cria um escopo correto para armazenamentos com várias vinculações"
id: 3zZLIk4u7AzNBEQNBMctLG
status: PUBLISHED
createdAt: 2024-12-05T18:39:57.838Z
updatedAt: 2024-12-05T18:39:58.643Z
publishedAt: 2024-12-05T18:39:58.643Z
firstPublishedAt: 2024-12-05T18:39:58.643Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: o-service-worker-nao-cria-um-escopo-correto-para-armazenamentos-com-varias-vinculacoes
locale: pt
kiStatus: Backlog
internalReference: 1146421
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


O KI Service Worker não consegue criar o escopo correto para lojas com várias vinculações. Ao gerar o escopo para criar a URL de acesso para o service worker, ele acaba criando um caminho duplicado, o que causa erros em funcionalidades que dependem do service worker.

## Simulação



1. Crie uma loja com várias vinculações (multibinding).
2. Configure o service worker para gerar a URL com escopo.
3. Observe que o service worker cria um caminho duplicado. Essa duplicação leva a erros ou a um comportamento inesperado nas partes do aplicativo que dependem do service worker.

## Workaround


Se o seu armazenamento multibinding não exigir um service worker, você poderá desativar o service worker como solução alternativa. Isso evitará a ocorrência do erro até que uma correção adequada seja implementada.





