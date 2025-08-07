---
title: 'O minicarro exibe "FREE" em vez de "TBD" após a remoção rápida de itens disponíveis'
id: 7evKSOGKuKlSQf9UykLWkV
status: PUBLISHED
createdAt: 2025-06-23T13:05:51.370Z
updatedAt: 2025-06-23T13:05:52.516Z
publishedAt: 2025-06-23T13:05:52.516Z
firstPublishedAt: 2025-06-23T13:05:52.516Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: o-minicarro-exibe-free-em-vez-de-tbd-apos-a-remocao-rapida-de-itens-disponiveis
locale: pt
kiStatus: No Fix
internalReference: 1248177
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Quando um usuário adiciona uma SKU indisponível ao carrinho e, em seguida, adiciona e remove rapidamente os itens disponíveis, o minicarro exibe incorretamente o total como "FREE" em vez de "TBD". Isso ocorre devido à falta de sincronização adequada com o `orderForm`, especialmente quando as interações ocorrem rapidamente.

## Simulação



1. Adicione uma SKU ao carrinho.
2. Defina o código postal de entrega como aquele em que o produto inicial não está disponível
3. Retorne à página inicial e adicione as SKUs disponíveis.
4. Remova rapidamente as SKUs disponíveis do minicarro.
5. Observe que a mensagem de preço total permanece como "FREE" em vez de ser atualizada para "TBD"

## Workaround


Remova os itens em um ritmo mais lento para permitir a sincronização adequada. Isso reduz a chance de ocorrência do problema.





