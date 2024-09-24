---
title: 'Inconsistência na quantidade de itens com Assembly options no carrinho'
id: ANQ597XM5mK85MhME920Y
status: PUBLISHED
createdAt: 2021-09-23T20:34:36.214Z
updatedAt: 2022-12-22T20:41:06.210Z
publishedAt: 2022-12-22T20:41:06.210Z
firstPublishedAt: 2021-09-23T20:44:17.391Z
contentType: knownIssue
productTeam: Post-purchase
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: inconsistency-in-the-quantity-of-items-with-assembly-options-in-the-cart
locale: pt
kiStatus: Backlog
internalReference: 
---

## Sumário

Nos produtos com customização do Assembly options, um item pai possui componentes, que são chamados de itens filhos. É o caso, por exemplo, de uma geladeira (item pai) com garantia estendida (item filho). Há uma inconsistência na plataforma quando se adiciona a quantidade total disponível em estoque do item pai e a mesma quantidade de um de seus itens filhos. Considere que um cliente está comprando um produto que possui customização do Assembly options. Quando ele adiciona ao carrinho o item pai — na quantidade total disponível em estoque —, e a mesma quantidade de um item filho associado a ele, a quantidade final do item filho será diferente da quantidade final do item pai. O carrinho terá uma unidade a mais do item filho em relação ao item pai.


## Simulação

1. Acesse a loja;
2. Adicione um produto que possui um item filho ao carrinho (selecione a quantidade total disponível em estoque);
3. Selecione o item filho do produto, na mesma quantidade;
4. Confira os itens no carrinho de compras.

![KI assembly](//images.contentful.com/alneenqid6w5/1xmOq4gUrxUjJLMMox7WQj/b2d02da26c27f468b43e32e0d3a81f61/KI_assembly.png)
Observe que o carrinho contém uma unidade a mais do item filho em relação ao item pai.


## Workaround

Não existe workaround para este cenário.


