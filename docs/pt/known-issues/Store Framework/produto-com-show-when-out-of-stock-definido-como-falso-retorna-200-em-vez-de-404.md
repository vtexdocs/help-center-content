---
title: 'Produto com "Show When Out of Stock" definido como falso retorna 200 em vez de 404'
id: 5DV3Wpp568wKR8LNvbwurd
status: PUBLISHED
createdAt: 2025-05-27T17:32:29.271Z
updatedAt: 2025-05-27T17:32:29.806Z
publishedAt: 2025-05-27T17:32:29.806Z
firstPublishedAt: 2025-05-27T17:32:29.806Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: produto-com-show-when-out-of-stock-definido-como-falso-retorna-200-em-vez-de-404
locale: pt
kiStatus: Backlog
internalReference: 1233974
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Quando um produto existe no catálogo, mas está fora de estoque e tem o sinalizador `Show when out of stock` definido como `false`, o acesso ao seu URL retorna um código de status `200 OK` e redireciona para um URL que contém o parâmetro `ProductLinkNotFound`. O comportamento correto deve ser retornar uma resposta `404 Not Found` imediatamente.

## Simulação




1. Verifique se existe um produto na VTEX.
2. Defina o estoque do produto como zero.
3. Defina o sinalizador `Show when out of stock` como `false`.
4. Tente acessar o URL do PDP do produto.
5. Observe que a solicitação retorna um status `200 OK` e redireciona para uma página com `ProductLinkNotFound` no URL

## Workaround


N/A





