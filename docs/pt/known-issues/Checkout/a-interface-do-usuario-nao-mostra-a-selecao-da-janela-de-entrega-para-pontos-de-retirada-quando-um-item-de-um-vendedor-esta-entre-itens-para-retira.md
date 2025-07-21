---
title: "A interface do usuário não mostra a seleção da janela de entrega para pontos de retirada quando um item de um vendedor está entre itens para retirada de outro vendedor"
id: 5SyIw04UtNiZhmy0ELNLCD
status: PUBLISHED
createdAt: 2023-12-15T20:18:48.433Z
updatedAt: 2023-12-15T20:18:49.218Z
publishedAt: 2023-12-15T20:18:49.218Z
firstPublishedAt: 2023-12-15T20:18:49.218Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: a-interface-do-usuario-nao-mostra-a-selecao-da-janela-de-entrega-para-pontos-de-retirada-quando-um-item-de-um-vendedor-esta-entre-itens-para-retirada-de-outro-vendedor
locale: pt
kiStatus: Backlog
internalReference: 954108
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Em um carrinho com pelo menos três produtos, onde os pedidos de itens são: O primeiro é para a retirada programada 1, o segundo é para a retirada programada 2 (vendedor diferente) e o terceiro é para a retirada programada 1, a interface do usuário não mostrará as janelas de entrega para selecionar a data/hora da segunda retirada. Isso acontece porque a API agrupará o 1º item e o 3º item, já que se trata do mesmo SLA.

Não é possível ir para a etapa de pagamento e concluir a compra.

## Simulação



- Adicione um item ao carrinho para retirada no vendedor A;
- Adicione um item ao carrinho para retirada no vendedor B;
- Adicionar outro item ao carrinho para retirada do vendedor A;
- Na etapa de envio, as janelas de entrega de retirada para selecionar a data/hora não serão exibidas

## Workaround


N/A




