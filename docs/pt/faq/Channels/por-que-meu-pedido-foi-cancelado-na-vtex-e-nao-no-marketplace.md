---
title: 'Por que meu pedido foi cancelado na VTEX e não no marketplace?'
id: frequentlyAskedQuestions_678
status: PUBLISHED
createdAt: 2017-04-27T22:30:17.232Z
updatedAt: 2023-03-31T18:41:40.538Z
publishedAt: 2023-03-31T18:41:40.538Z
firstPublishedAt: 2017-04-27T23:02:27.269Z
contentType: frequentlyAskedQuestion
productTeam: Channels
author: authors_3
slugEN: why-was-my-order-cancelled-in-vtex-and-not-in-the-marketplace
locale: pt
legacySlug: por-que-meu-pedido-foi-cancelado-na-vtex-e-nao-no-marketplace
---

A integração com marketplaces não possui uma via de mão dupla quando se trata de cancelamento de pedidos. Um pedido cancelado diretamente na plataforma VTEX não irá atualizar esse mesmo pedido na plataforma do marketplace.

Com isso, mesmo que o pedido seja cancelado no seller, o mesmo seguirá seu fluxo no marketplace, pois não será notificado dessa alteração.

## Como cancelar o pedido nesse caso?

Para solucionar o cenário, o lojista precisaria realizar a ação de cancelamento manual diretamente na interface de cada marketplace. Assim, o pedido ficará como cancelado nas duas interfaces.

## Como identificar quem efetuou o cancelamento do pedido?

Toda ação feita em um pedido fica registrado no módulo **Pedidos**. Para ver esse log, siga os passos abaixo:

1. No Admin VTEX, acesse **Pedidos > Todos os pedidos**, ou digite **Todos os pedidos** na barra de busca no topo da página.
2. Selecione o pedido desejado.
3. Na seção **Histórico do pedido**, clique em `Ver interações`.

