---
title: 'A tabela de preços promocionais em carrinhos de compras grandes pode afetar o desempenho ou levar a erros de tempo limite'
id: 22H47mc9qYLdzk2sFkbBut
status: PUBLISHED
createdAt: 2023-12-07T15:47:28.360Z
updatedAt: 2023-12-07T15:57:49.789Z
publishedAt: 2023-12-07T15:57:49.789Z
firstPublishedAt: 2023-12-07T15:47:28.972Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: promotional-price-table-in-large-shopping-carts-can-impact-performance-or-lead-to-timeout-errors
locale: pt
kiStatus: Backlog
internalReference: 949389
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.



Quando temos uma loja com tabelas de preços promocionais criadas e grandes carrinhos de compras aplicando as promoções, isso causa lentidão no desempenho da compra e leva a erros de timeout no carrinho.

Qualquer ação no carrinho pode desencadear erros, como adicionar itens, edições, inserir CEP, etc., comprometendo o desempenho da compra.

Não podemos saber com precisão qual o número de tabelas de preços promocionais que estão sendo calculadas no carrinho ou a quantidade de itens adicionados ao carrinho que começará a disparar os erros de timeout ou a tornar o desempenho mais lento, pelo que foi analisado pode acontecer com qualquer quantidade significativa.


## Simulação



Crie várias tabelas de preços promocionais e um carrinho de compras com muitos itens (aqui não podemos apontar um número claro, como 50 ou 100, isso depende das promoções)



## Workaround



Infelizmente, não temos nenhuma solução alternativa para isso,
desativar as promoções e usar o módulo de preços para inserir os preços ajudaria.





