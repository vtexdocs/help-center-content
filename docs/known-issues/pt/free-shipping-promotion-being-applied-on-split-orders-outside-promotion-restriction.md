---
title: 'Promoção de remessa gratuita sendo aplicada em pedidos divididos fora da restrição de promoção'
id: APAIGZx8tdtIjGsQJmvgu
status: PUBLISHED
createdAt: 2023-01-12T16:19:47.878Z
updatedAt: 2024-02-16T20:23:58.107Z
publishedAt: 2024-02-16T20:23:58.107Z
firstPublishedAt: 2023-01-12T16:19:48.479Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slug: promocao-de-remessa-gratuita-sendo-aplicada-em-pedidos-divididos-fora-da-restricao-de-promocao
locale: pt
kiStatus: No Fix
internalReference: 732302
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>



Na promoção de remessa gratuita, a conta pode configurar uma restrição a ser aplicada, por exemplo, o método de remessa.

Em cartlinks com produtos vendidos por diferentes vendedores, pode ocorrer um cenário de pedidos divididos. Que alguns produtos serão entregues por um vendedor e outros por outro vendedor.

É comum nestes cenários que os métodos de envio dos vendedores sejam diferentes, o que significa que os pedidos divididos terão métodos de envio diferentes.

O problema acontece quando a promoção de remessa gratuita não valida a restrição do método de remessa em pedidos divididos. O resultado é que o envio será gratuito mesmo para o pedido dividido com um método de envio diferente.

O resultado esperado é que somente os pedidos divididos com métodos de envio iguais à restrição teriam frete gratuito.


##

## Simulação



1. Criar uma promoção de remessa gratuita com restrição do método de remessa.
2. Simular um carrinho com produtos vendidos por diferentes vendedores (podem ser vendedores de etiquetas brancas) que tenham diferentes métodos de envio.
3. Certifique-se de que um dos vendedores está usando um método de envio que não pertence à restrição de promoção.
4. Verifique se a remessa gratuita está sendo aplicada a todo o carrinho.


##

## Workaround


Nenhuma solução.

