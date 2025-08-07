---
title: "A interface do usuário mostra pontos de coleta duplicados quando um item para entrega está entre itens para coleta"
id: lIP6kRDsi23lNQd7RzNfY
status: PUBLISHED
createdAt: 2023-09-25T13:50:27.481Z
updatedAt: 2023-10-18T14:36:11.434Z
publishedAt: 2023-10-18T14:36:11.434Z
firstPublishedAt: 2023-09-25T13:50:28.066Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: a-interface-do-usuario-mostra-pontos-de-coleta-duplicados-quando-um-item-para-entrega-esta-entre-itens-para-coleta
locale: pt
kiStatus: Backlog
internalReference: 906549
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Em um carrinho com pelo menos três produtos, onde os pedidos de itens são: O primeiro é para retirada, o segundo é para entrega e o terceiro é para retirada, a interface do usuário mostrará o ponto de retirada duplicado. Isso acontece porque a API agrupará o 1º item e o 3º item, já que se trata do mesmo SLA.

É possível ir para a etapa de pagamento e concluir a compra.

## Simulação



- Adicionar um item ao carrinho para retirada;
- Adicionar um item ao carrinho para entrega;
- Adicionar outro item ao carrinho para retirada;
- Na etapa de envio, a retirada será duplicad

## Workaround


N/A




