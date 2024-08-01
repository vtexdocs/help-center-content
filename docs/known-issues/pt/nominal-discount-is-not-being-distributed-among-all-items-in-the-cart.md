---
title: 'O desconto nominal não está sendo distribuído entre todos os itens do carrinho'
id: gt1qMqN71YkaHuZgk9Ibs
status: PUBLISHED
createdAt: 2023-01-25T17:33:59.274Z
updatedAt: 2024-07-20T02:22:10.021Z
publishedAt: 2024-07-20T02:22:10.021Z
firstPublishedAt: 2023-01-25T17:33:59.996Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slug: o-desconto-nominal-nao-esta-sendo-distribuido-entre-todos-os-itens-do-carrinho
locale: pt
kiStatus: Backlog
internalReference: 334130
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>



O desconto nominal das promoções não está sendo distribuído entre todos os itens do carrinho.

Esse cenário está ocorrendo apenas em algumas contas.

A loja tem uma promoção nominal e o desconto só está sendo aplicado a um item no carrinho, não distribuindo proporcionalmente o desconto a todos os itens, como deveria.

## Simulação




1. Crie uma promoção regular com um desconto nominal;
2. Crie um link de carrinho no qual a promoção seja aplicável;
3. Verifique se o desconto está sendo totalmente aplicado a apenas um item em vez de ser distribuído entre todos os itens.

PS: Isso não acontece sempre e com todas as contas

## Workaround


Para atenuar esse problema, você pode usar a API Create or Update Coupon API para aumentar o campo `maxItemsPerClient`. Isso permite que o cupom seja aplicado a tantas SKUs quantas forem permitidas nesse campo.





