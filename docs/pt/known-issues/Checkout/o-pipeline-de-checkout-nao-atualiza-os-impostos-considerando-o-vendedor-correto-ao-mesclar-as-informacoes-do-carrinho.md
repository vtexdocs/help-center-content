---
title: 'O pipeline de checkout não atualiza os impostos considerando o vendedor correto ao mesclar as informações do carrinho'
id: 4HDGps2Ez5kWKuW1UNX1JQ
status: PUBLISHED
createdAt: 2024-07-03T20:21:23.533Z
updatedAt: 2024-07-03T20:21:24.413Z
publishedAt: 2024-07-03T20:21:24.413Z
firstPublishedAt: 2024-07-03T20:21:24.413Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: checkout-pipeline-doesnt-update-taxes-considering-the-correct-seller-when-merging-cart-information
locale: pt
kiStatus: Backlog
internalReference: 759842
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Quando há dois vendedores no método "SellerElection", um deles é selecionado como tendo o preço mais barato para entrega e o outro como o preço mais barato para retirada no ponto, a mesclagem de informações do carrinho não atualiza os impostos ao selecionar a retirada no ponto, causando um erro ao concluir a compra

## Simulação



- Ter dois vendedores configurados: um é o mais barato para entrega e o outro para retirada no ponto
- Configure os impostos _somente_ para o vendedor que atenderá à retirada no ponto ou impostos diferentes entre eles
- Faça uma simulação de checkout e você verá que não haverá impostos em "priceTags" e a compra não será concluída.



## Workaround


N/A



