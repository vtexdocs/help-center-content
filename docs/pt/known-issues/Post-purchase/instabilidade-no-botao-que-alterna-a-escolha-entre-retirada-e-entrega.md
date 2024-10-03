---
title: ' Instabilidade no botão que alterna a escolha entre  retirada e entrega'
id: 54pnP8pZGWSo2VZKhOLBKC
status: PUBLISHED
createdAt: 2021-09-08T17:53:29.698Z
updatedAt: 2022-12-22T20:41:12.728Z
publishedAt: 2022-12-22T20:41:12.728Z
firstPublishedAt: 2021-09-08T17:59:00.783Z
contentType: knownIssue
productTeam: Post-purchase
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: instability-in-the-toggle-button-for-shipping-and-instore-pickup
locale: pt
kiStatus: Backlog
internalReference: 
---

## Sumário

Durante a escolha do tipo de entrega do pedido no checkout, ao alternar a escolha entre  retirada e entrega, se for inserido o código postal na opção de entrega e houver mudança para a opção de retirada, ao selecionar novamente a opção de entrega o código postal que foi inserido no primeiro momento é perdido. É possível também que ao invés da perda do código postal, a página carregue um novo código postal errado.


## Simulação

1. Acesse a loja;
2. Adicione produtos ao carrinho;
3. Siga para o checkout;
4. No campo de entrega, selecione o <i class="fas fa-toggle-on"></i> para recebimento e insira o código postal; 
5. Troque o <i class="fas fa-toggle-on"></i> para ponto de retirada e selecione uma localização;
6. Troque novamente o <i class="fas fa-toggle-on"></i> para recebimento.
7. Verifique se os dados (inseridos no passo 4) da opção de entrega se mantiveram os mesmos.

É importante ressaltar que por causa da instabilidade nem toda  simulação apresenta o cenário descrito.


## Workaround

Não existe workaround para este cenário.


