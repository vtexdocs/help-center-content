---
title: "Calculador de frete inconsistente no carrinho"
id: 2U3U4r7DAAuIegW0geKG8U
status: PUBLISHED
createdAt: 2018-12-10T16:09:32.683Z
updatedAt: 2019-12-31T17:00:43.523Z
publishedAt: 2019-12-31T17:00:43.523Z
firstPublishedAt: 2018-12-10T16:30:03.673Z
contentType: knownIssue
productTeam: Shopping
author: authors_4
tag: Checkout
slugEN: calculador-de-frete-inconsistente-no-carrinho
locale: pt
kiStatus: Closed
internalReference: 
---

## Sumário

Quando um carrinho possui mais de 20 itens a sua exibição é cortada parcialmente, dando lugar ao botão "mostrar mais itens".

Nestes casos, o calculador de frete tem comportamento inconsistente, exibindo dois seletores e valores divergentes entre si.

Isso acontece somente na versão 5 do checkout.

![image](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/known-issues/Shopping/calculador-de-frete-inconsistente-no-carrinho_1.png)

## Simulação

- utilizar uma loja com o checkout v5
- ter um carrinho com mais de 20 itens
- calcular frete no carrinho para observar seu comportamento

## Workaround

Este cenário já não acontece mais na versão 6 do checkout, que utiliza o componente "Shipping Preview" para o cálculo do frete no carrinho.

