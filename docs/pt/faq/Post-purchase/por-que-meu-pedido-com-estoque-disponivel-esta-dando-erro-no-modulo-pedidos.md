---
title: 'Por que meu pedido com estoque disponível está dando erro no módulo Pedidos?'
id: 2FZHMJFo8oyWW46gYSqqOc
status: PUBLISHED
createdAt: 2018-03-07T14:26:47.000Z
updatedAt: 2023-03-31T23:05:09.937Z
publishedAt: 2023-03-31T23:05:09.937Z
firstPublishedAt: 2018-03-07T15:14:02.766Z
contentType: frequentlyAskedQuestion
productTeam: Post-purchase
author: 7FpKZ0rc6k4WqeymES80cw
slugEN: why-is-my-order-with-available-stock-failing-in-orders-module
locale: pt
legacySlug: por-que-meu-pedido-com-estoque-disponivel-esta-dando-erro-no-oms
---

Quando o pagamento de um pedido demora muitos dias para ser aprovado, algumas reservas acabam expirando, ocasionando possíveis erros no [fluxo do pedido](/pt/tutorial/fluxo-e-status-de-pedidos--tutorials_196) no módulo **Pedidos**, como produtos com estoque indisponível.

A fim de evitar a reserva desnecessária de SKUs, o status `Reservado` tem um prazo de validade estabelecido e, caso o pagamento não seja confirmado até essa data, o SKU do pedido é liberado para outra compra. 

Dessa forma, com um estoque reduzido e sem SKU para os dois pedidos, um deles ficará descoberto e ocasionará em erro no fluxo do módulo **Pedidos**. 

A solução aqui é adicionar estoque a esse SKU ou cancelar o pedido, já que sua reserva caiu, seu SKU foi direcionado para outro pedido e o estoque estava sem cobertura.
