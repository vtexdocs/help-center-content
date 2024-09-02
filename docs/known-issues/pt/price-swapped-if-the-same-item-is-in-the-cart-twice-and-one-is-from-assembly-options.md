---
title: 'Preço trocado se o mesmo item estiver no carrinho duas vezes e um deles for de Opções de montagem'
id: 6ASEyEYPt9wjj4eSzMqdc0
status: PUBLISHED
createdAt: 2024-07-24T14:51:12.922Z
updatedAt: 2024-07-24T14:51:13.713Z
publishedAt: 2024-07-24T14:51:13.713Z
firstPublishedAt: 2024-07-24T14:51:13.713Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: preco-trocado-se-o-mesmo-item-estiver-no-carrinho-duas-vezes-e-um-deles-for-de-opcoes-de-montagem
locale: pt
kiStatus: Backlog
internalReference: 1070336
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Se um item for adicionado ao carrinho como uma opção (também conhecida como filho) das Opções de montagem, e o mesmo item for adicionado ao carrinho como um item normal, os preços serão misturados e cada um será aplicado ao item incorreto.

Por exemplo:

- Item como uma opção com um preço de 0;
- Item como regular com um preço de 100.
No pedido, o item como opção terá o preço de 100 e o regular terá o preço de 0.

## Simulação



- Adicione um item com uma opção de montagem ao carrinho e certifique-se de que uma das opções tenha uma lista de preços diferente na configuração;
- Adicione o mesmo item que a opção

## Workaround


N/A



