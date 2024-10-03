---
title: 'Cálculo incorreto de entrega quando um dos SLAs não possui todos os itens'
id: 57rd31npt6iWcOQm0gIAMA
status: PUBLISHED
createdAt: 2018-08-06T18:50:44.391Z
updatedAt: 2022-12-22T20:43:12.816Z
publishedAt: 2022-12-22T20:43:12.816Z
firstPublishedAt: 2018-08-06T19:53:28.422Z
contentType: knownIssue
productTeam: Shopping
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: incorrect-delivery-calculation-when-one-of-the-slas-doesnt-have-all-items
locale: pt
kiStatus: Backlog
internalReference: 
---

## Sumário

Este cenário acontece apenas para os cálculos de frete no carrinho em que nem todas as formas de entrega possuem todos os itens disponíveis. 

Isso faz com que o valor seja calculado sobre a quantidade em comum entre todas as formas de entrega. Em outras palavras, o valor do frete é definido com base na quantidade máxima de itens que todas as formas de entrega conseguem atender.

## Simulação

1. Considere que a loja tenha 2 formas de entrega: Expressa e Normal, por exemplo.
2. Na forma de entrega Expressa, o `item x` possui a quantidade disponível de apenas 10 unidades.
3. Já na forma de entrega Normal, considere que existem 200 unidades do mesmo `item x` como quantidade disponível.
4. No carrinho, o cliente seleciona 14 unidades do `item x`.
5. Dado que a forma de entrega Expressa possui apenas 10 unidades, o checkout não fará o cálculo para as 14 unidades do carrinho, e sim para apenas 10 em ambas as formas de entrega.
6. Como resultado, o valor exibido na simulação será menor, caso a entrega escolhida seja a Normal; se a escolha do cliente for pela Expressa, o valor mostrado será referente a uma quantidade menor de itens do que a previamente selecionada.

## Workaround

No momento, não existe workaround para esse cenário.

