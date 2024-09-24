---
title: 'Valor de pagamento diferente ao misturar os tipos de vendedores para o mesmo vendedor em um carrinho'
id: 7txlcqRF5XLB014Z31pXaL
status: PUBLISHED
createdAt: 2023-05-08T22:25:15.897Z
updatedAt: 2023-05-08T22:25:16.585Z
publishedAt: 2023-05-08T22:25:16.585Z
firstPublishedAt: 2023-05-08T22:25:16.585Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: different-payment-value-when-mixing-the-types-of-sellers-for-the-same-seller-in-a-cart
locale: pt
kiStatus: Backlog
internalReference: 821741
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Nos casos em que um vendedor atua como vendedor de marca branca e como vendedor regular para itens diferentes no mesmo carrinho, o valor do pagamento será duplicado com o valor do frete.

## Simulação



- Adicione um item atendido pela marca branca de um vendedor no carrinho;
- Adicione outro item do mesmo vendedor, mas como um vendedor regular;
- Faça o pedido; você verá valores diferentes no pedido e na transação.



## Workaround


Evite misturar os tipos de vendedores para o mesmo vendedor.




