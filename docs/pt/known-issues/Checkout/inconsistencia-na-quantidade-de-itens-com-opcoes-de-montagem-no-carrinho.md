---
title: 'Inconsistência na quantidade de itens com opções de montagem no carrinho'
id: 5whwOflEwjIEpHIhv5sO2E
status: DRAFT
createdAt: 2024-08-02T11:03:16.194Z
updatedAt: 2024-08-02T11:03:16.194Z
publishedAt: 
firstPublishedAt: 
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: inconsistency-in-the-quantity-of-items-with-assembly-options-in-the-cart
locale: pt
kiStatus: Fixed
internalReference: 417098
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Em produtos com personalização de opções de montagem, um item principal tem componentes, que são chamados de itens secundários. Esse é o caso, por exemplo, de um refrigerador (item pai) com garantia estendida (item filho). Há uma inconsistência na plataforma ao adicionar ao carrinho a quantidade total disponível em estoque do item principal e a mesma quantidade de um de seus itens secundários. Suponha que um cliente esteja comprando um produto que tenha opções de personalização de montagem. Quando ele adiciona ao carrinho a quantidade total disponível em estoque do item principal e a mesma quantidade de um item secundário associado a ele, a quantidade final do item secundário será diferente da quantidade final do item principal. O carrinho terá uma unidade a mais do item filho em relação ao item pai.

## Simulação



- Acesse a loja;
- Adicione um produto que tenha um item filho ao carrinho (selecione a quantidade total disponível em estoque);
- Selecionar o item filho do produto, na mesma quantidade;
- Verificar os itens no carrinho.

Observe que o carrinho contém uma unidade a mais do item filho em relação ao item pai

## Workaround


N/A




