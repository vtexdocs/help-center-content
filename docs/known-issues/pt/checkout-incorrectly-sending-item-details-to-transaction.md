---
title: 'Checkout incorretamente enviando detalhes do item para a transação'
id: YxjZNKuIxkKQioS7lkmu8
status: PUBLISHED
createdAt: 2022-03-04T15:08:55.326Z
updatedAt: 2024-02-16T20:28:39.301Z
publishedAt: 2024-02-16T20:28:39.301Z
firstPublishedAt: 2022-03-04T15:08:55.710Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: checkout-incorretamente-enviando-detalhes-do-item-para-a-transacao
locale: pt
kiStatus: No Fix
internalReference: 535859
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.



## Simulação


O usuário faz um pedido que é dividido em três vendedores, sendo Vendedor 1 (mercado), Vendedor A e Vendedor B, ambos WL;


O Vendedor B não tem seus próprios meios de pagamento e utiliza o pagamento do vendedor 1 (mercado), enquanto o Vendedor A tem seus próprios meios de pagamento;

O pagamento e a transação são registrados corretamente junto aos comerciantes correspondentes, neste caso, o Vendedor 1 e o Vendedor A;

Entretanto, ao observar os detalhes da transação no Vendedor 1, será possível ver o valor total do pagamento feito ao Vendedor 1 e B, e o detalhe do item vendido pelo Vendedor 1 que é o vendedor onde a transação está vinculada; o item Vendedor B não será considerado nos detalhes da transação;




## Workaround


N/A


##

