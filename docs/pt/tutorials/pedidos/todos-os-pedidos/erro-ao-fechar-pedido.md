---
title: 'Identificar erros de fechamento de pedido'
id: 4VZvHbDMfuIo0gO6OscgKE
status: PUBLISHED
createdAt: 2019-01-24T20:45:49.682Z
updatedAt: 2023-03-30T15:11:30.251Z
publishedAt: 2023-03-30T15:11:30.251Z
firstPublishedAt: 2019-01-24T22:02:42.931Z
contentType: tutorial
productTeam: Shopping
author: authors_35
slugEN: how-to-identify-order-closing-errors
legacySlug: erro-ao-fechar-pedido
locale: pt
subcategoryId: 2t00bBkcAwIkgSCGKsMOwY
---

Sempre que o usuário clica em fechar pedido, o checkout cria um novo pedido na plataforma VTEX. Esse pedido possui inicialmente o status **incompleto** e pode ser encontrado com o uso de [filtros](/pt/tutorial/filtrar-todos-pedidos--tutorials_192). No Admin VTEX, acesse **Pedidos > Todos os pedidos**, ou digite **Todos os pedidos** na barra de busca no topo da página.

E como todo pedido tem, no mínimo, uma transação, também é possível encontrar essa transação em **Pedidos > Transações**. Por ser um cenário de erro, provavelmente já estará como transação cancelada.

> ℹ️ A recomendação é para todo erro de pedido, o primeiro local a se consutar é o log das transações em **Pedidos > Transações**. Saiba mais em [Visualizar detalhes da transação em Pedidos](/pt/tutorial/how-to-view-the-orders-details).

A mensagem de erro exibida para o cliente pode ser gerada por diferentes motivos. Desde erros internos, como falha em efetuar uma reserva de um item, até problemas com o cartão, como dados incompletos, ou mesmo uma resposta do gateway, como dados inseridos errados.
