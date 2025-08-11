---
title: 'Menos carrinhos abandonados com a nova heurística do Checkout'
id: 3XLEhUnRe3jjzUGLbDEZJz
status: CHANGED
createdAt: 2020-05-30T13:08:43.104Z
updatedAt: 2020-11-27T19:40:17.125Z
publishedAt: 2020-06-02T18:09:53.394Z
contentType: updates
productTeam: Shopping
author: authors_24
slugEN: fewer-abandoned-carts-with-the-new-checkout-heuristic
locale: pt
legacySlug: menos-carrinhos-abandonados-com-a-nova-heuristica-do-checkout
announcementImageID: ''
announcementSynopsisPT: 'Mudamos a lógica que define a ordem de escolha dos sellers para contas-franquia, diminuindo assim carrinhos abandonados.'
---

A VTEX fez uma alteração na lógica que define a ordem de escolha dos sellers a serem mostrados no checkout das lojas que usam o modelo de [contas-franquia](https://help.vtex.com/pt/tutorial/what-are-franchise-account-and-seller-white-label--5orlGHyDHGAYciQ64oEgKa). Antes, o checkout assumia que os sellers tinham estoque e selecionava todos os que entregavam para o endereço do pedido. A partir de agora, o checkout seleciona primeiro apenas os sellers que conseguem atender aquele endereço e depois filtra os sellers com estoque dos produtos no carrinho.

Essa mudança evita que sejam selecionados sellers disponíveis para entrega, mas que não têm estoque. A consequência é um processo de escolha de sellers mais eficiente para lojas que usam o modelo de contas-franquia, o que reduz os casos de ruptura de carrinho e contribui para aumentar a rotatividade do estoque e a capilaridade da sua loja.

## Qual é o benefício?
Realizamos essa alteração na heurística do checkout (a lógica que determina a ordem de escolha dos sellers) com o objetivo de reduzir pedidos não completados por conta da indisponibilidade de itens em estoque. Desde a efetivação da mudança, observamos uma redução de 40% no número de pedidos não completados neste cenário, o que aumentou em 1 ponto percentual a quantidade de carrinhos disponíveis para finalização de compra. Trata-se de um resultado excelente, já que assim reduzimos o número de carrinhos abandonados, o que significa mais vendas concluídas para as lojas VTEX.

## Minha loja precisa tomar alguma ação?
Não. Essa mudança tem impacto na eficiência da escolha de sellers pelo checkout e, consequentemente, na taxa de conversão das lojas que usam o modelo de contas-franquia. Trata-se de uma mudança na heurística, que não exige qualquer ação por parte do lojista.

[Saiba mais sobre contas-franquia na VTEX →](https://help.vtex.com/pt/tutorial/what-are-franchise-account-and-seller-white-label--5orlGHyDHGAYciQ64oEgKa)
