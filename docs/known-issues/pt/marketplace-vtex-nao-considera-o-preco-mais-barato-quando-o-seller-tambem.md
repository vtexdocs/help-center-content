---
title: 'Marketplace VTEX não considera o preço mais barato quando o próprio marketplace também vende o produto'
id: 2rS3ArRydyM2ee68eIcWK4
status: DRAFT
createdAt: 2017-06-21T18:35:04.469Z
updatedAt: 2019-12-31T15:16:41.516Z
publishedAt: 
firstPublishedAt: 2017-06-27T18:30:47.071Z
contentType: knownIssue
productTeam: Channels
author: 5S2MYtrgEoSGaGMqsICaEC
tag: Suggestions
slug: marketplace-VTEX-nao-considera-o-preco-mais-barato
locale: pt
kiStatus: Open
internalReference: 
---

## Sumário

Quando Seller e Marketplace vendem o mesmo produto, deveria sempre ser considerado o menor preço se ambos conterem estoque.

Isso não está acontecendo quando o mais barato é o preço da própria loja (seller=1). Estamos assumindo o preço de um Seller que vende o produto, mais caro em vez de mostrar o da loja, que custa menos.

O link do carrinho que estamos montando por default no BuyButtom é:
`http://www.loja.com.br/checkout/cart/add?sku=20&qty=1&seller=SELLERMAISCARO&redirect=true&sc=1`

O certo deveria ser:
`http://www.loja.com.br/checkout/cart/add?sku=20&qty=1&seller=1&redirect=true&sc=1`

Visto que no caso o preço da loja é mais barato que dos sellers.

## Simulação

Usar um produto vendido pelo Seller e pelo Marketplace, sendo o preço do Marketplace mais baixo.

## Workaround

No momento não há solução para esse problema.

