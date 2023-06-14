---
title: 'A gaveta de componentes não funciona quando implementada no resumo do produto para iOS'
id: 75145kfQE8swAef57Yr4Aj
status: PUBLISHED
createdAt: 2023-05-29T13:22:57.856Z
updatedAt: 2023-05-29T13:22:58.422Z
publishedAt: 2023-05-29T13:22:58.422Z
firstPublishedAt: 2023-05-29T13:22:58.422Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slug: a-gaveta-de-componentes-nao-funciona-quando-implementada-no-resumo-do-produto-para-ios
kiStatus: Backlog
internalReference: 833338
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Quando o componente "drawer" (gaveta) é implementado em "product-summary" (resumo do produto), ele faz com que a página seja recarregada após a página 3 no iOS, e uma mensagem de erro pode ser exibida.

## Simulação



- Implemente o "drawer" em "product-summary";
- Acesse a página de pesquisa e vá até a página 3;
- A página será recarregada e, às vezes, uma mensagem de erro será exibida

## Workaround


Implemente o Layout Modal para ter uma visualização rápida.




