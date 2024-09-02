---
title: 'A interface do usuário não mostra a seleção de janelas para pontos de retirada quando um item de um vendedor está entre itens para retirada de outro vendedor'
id: 7uDtst6o01FV405luUQ3Ok
status: PUBLISHED
createdAt: 2024-08-07T18:26:30.702Z
updatedAt: 2024-08-07T18:26:31.693Z
publishedAt: 2024-08-07T18:26:31.693Z
firstPublishedAt: 2024-08-07T18:26:31.693Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: a-interface-do-usuario-nao-mostra-a-selecao-de-janelas-para-pontos-de-retirada-quando-um-item-de-um-vendedor-esta-entre-itens-para-retirada-de-outro-vendedor
locale: pt
kiStatus: Backlog
internalReference: 1077568
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Em um carrinho com pelo menos três produtos, onde os pedidos de itens são: O primeiro é para a retirada 1, o segundo para a retirada 2 (vendedor diferente) e o terceiro é para a retirada 1, a interface do usuário não permitirá uma seleção de SLA para o segundo item.

É possível ir para a etapa de pagamento, mas, devido à falta de um SLA selecionado para o segundo item, não é possível concluir a compra.

## Simulação



- Adicionar um item ao carrinho para retirada do vendedor A;
- Adicione um item ao carrinho para retirada no vendedor B;
- Adicionar outro item ao carrinho para retirada no vendedor A;
- Na etapa de envio, a segunda janela de seleção de SLA não será exibida

## Workaround


Adicionar o item do vendedor B primeiro no carrinho e depois adicionar os itens do vendedor B faz com que a seleção do SLA seja possível, assim como a compra.





