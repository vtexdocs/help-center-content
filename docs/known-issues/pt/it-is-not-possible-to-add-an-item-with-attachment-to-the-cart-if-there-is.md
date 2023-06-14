---
title: Não é possível adicionar um item com anexo ao carrinho caso exista outra unidade sem anexo no carrinho
id: 3l41VmdtPCxUjYChuO7o9O
status: PUBLISHED
createdAt: 2021-09-15T15:24:52.309Z
updatedAt: 2022-01-28T16:36:23.041Z
publishedAt: 2022-01-28T16:36:23.041Z
firstPublishedAt: 2021-09-15T15:30:26.487Z
contentType: knownIssue
productTeam: Checkout
author: 30TBnJ838LXSZvdJFlcB8H
tag: Checkout
slug: nao-e-possivel-adicionar-um-item-com-anexo-ao-carrinho-caso-exista-outra
kiStatus: Backlog
internalReference: 412041
---

## Sumário

Durante o processo de compra, se o cliente adicionar um item que já tenha sido colocado no carrinho anteriormente e na nova inclusão tenha algum [tipo de anexo](https://help.vtex.com/pt/tutorial/o-que-e-um-anexo--aGICk0RVbqKg6GYmQcWUm), o item não é adicionado ao carrinho.

Por exemplo, durante uma compra o cliente adiciona um SKU ao carrinho de compras, e depois adiciona outra unidade do mesmo SKU mas com uma garantia estendida, o último item adicionado (item com garantia estendida) não ficará disponível no carrinho. 


## Simulação

Para realizar a simulação, certifique que há itens que possuam anexo na sua loja.

1. Acesse a loja;
2. Adicione um produto ao carrinho;
3. Adicione novamente o produto, mas inclua um anexo ao item (uma personalização ou garantia estendida, por exemplo);
4.  Consulte o carrinho de compras e confira que o item com anexo não foi adicionado. 

O que ocorre é que ao adicionar itens iguais mas com o segundo contendo um anexo, a plataforma não adiciona ao carrinho pois interpreta como um “item repetido”  .


## Workaround

Não existe workaround para este cenário.


