---
title: "Split de pagamento incorreto com sellers white label"
id: 4ONWSOeG3mmSKyawq8SYCQ
status: PUBLISHED
createdAt: 2018-07-24T18:27:44.066Z
updatedAt: 2022-12-22T15:08:03.011Z
publishedAt: 2022-12-22T15:08:03.011Z
firstPublishedAt: 2018-07-24T18:33:19.288Z
contentType: knownIssue
productTeam: Shopping
author: authors_41
tag: Checkout,Order Management,Payments
slugEN: split-de-pagamento-incorreto-com-sellers-whitelabels
locale: pt
kiStatus: Backlog
internalReference: 
---

## Sumário

Em um cenário de fechamento de compra no marketplace, um pedido fica sem pagamento.

Após análise, verifica-se que esse pedido está contido no `orderGroup` (propriedade do pedido que agrupa as informações dos pedidos dos sellers) junto a outros três pedidos. A soma das transações está correta. Isso significa que o cliente pagou o valor correto.

O problema ocorre no split de pagamento em pedidos com sellers white label. Em cenários onde o `orderGroup` tem um pedido do marketplace principal, outro pedido de um seller white label A e mais um pedido de um seller white label B, um dos pedidos de seller fica sem transação.

## Comportamento esperado

Devido ao split, deveriam ter sido criadas quatro transações:
1. Transação com o valor total.
2. Transação com o valor do item comprado do Marketplace.
3. Transação com o valor do item comprado do Seller A.
4. Transação com o valor do item comprado do Seller B.

## Comportamento atual

São criadas três transações:
1. Transação com o valor total.
2. Transação com o valor do item comprado do Marketplace.
3. Transação com o valor do item comprado do Seller B.

O pedido do Seller A fica com o status de `NO-PAYMENT`. Mesmo assim, a soma das transações é igual ao valor da transação completa. O que ocorre é que a transação relacionada ao Seller A fica distribuída entre as outras três transações que foram criadas.

## Simulação

Fazer uma compra, com 4 itens, sendo que um sai do seller 1, um do seller A, outro do seller B e outro do seller C. Os itens do seller 1 e C devem ser pagos no merchant principal (1), o de A no merchant A e o de B no merchant B.

## Workaround

Não há workaround no momento para este problema.

