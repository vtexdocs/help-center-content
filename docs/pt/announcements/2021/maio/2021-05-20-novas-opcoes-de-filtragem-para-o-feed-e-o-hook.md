---
title: 'Novo filtro do feed possibilita notificações relacionadas a qualquer atributo do pedido'
id: 4j99SY7EW0sSJz1Vu0p4uP
status: PUBLISHED
createdAt: 2021-05-20T16:39:31.231Z
updatedAt: 2021-05-28T18:00:19.312Z
publishedAt: 2021-05-28T18:00:19.312Z
contentType: updates
productTeam: Post-purchase
author: 2Gy429C47ie3tL9XUEjeFL
slugEN: 2021-05-20-new-filtering-options-for-the-orders-feed-and-hook
locale: pt
legacySlug: novas-opcoes-de-filtragem-para-o-feed-e-o-hook
announcementImageID: 'undefined'
announcementSynopsisPT: 'Agora é possível filtrar o feed de pedidos por qualquer atributo, como entrega ou mudanças em itens, por exemplo.'
---

Melhoramos as opções de configuração do [feed e do hook](https://developers.vtex.com/vtex-rest-api/docs/feed-v3-1) de pedidos com um novo filtro que permite que lojas recebam atualizações relacionadas a qualquer atributo do pedido. Por exemplo, agora é possível receber atualizações quando um pedido é entregue ou quando itens são alterados, entre outras coisas.

## O que mudou?

Antes, o feed e o hook recebiam mudanças apenas no [status](/pt/tutorial/order-status-table-oms--frequentlyAskedQuestions_773?&utm_source=autocomplete#) dos pedidos.

Com a nova configuração, qualquer alteração que aconteça em um pedido pode ser recebida. Isso é feito com expressões [JSONata](https://jsonata.org/) ajustadas na API de pedidos, o que permite uma filtragem altamente customizável.

## Por que fizemos esta mudança?

A filtragem de pedidos por status não abarcava eventos relevantes para alguns tipos de integração. Nós notamos que as lojas poderiam se beneficiar de receber atualizações referentes a entrega ou alteração de pedidos, por exemplo.

Além disso, a nova configuração permite inúmeras opções de filtros customizados além dos citados anteriormente. Como o novo filtro usa [expressões JSONata](https://docs.jsonata.org/overview.html), é possível combinar condições de filtragem e selecionar conjuntos específicos de pedidos que devem gerar eventos, por exemplo.

## O que precisa ser feito?

Configurações existentes de feed e hook não serão impactadas por essa mudança. Esta nova configuração é uma alternativa à filtragem padrão por status.

Você pode implementar a nova configuração usando os endpoints de [configuração do feed](https://developers.vtex.com/vtex-rest-api/reference/feed-v3) ou de [configuração do hook](https://developers.vtex.com/vtex-rest-api/docs/feed-v3-1#hook) da API de pedidos. Saiba mais sobre como configurar esse novo filtro no [guia do Feed v3](https://developers.vtex.com/vtex-rest-api/docs/feed-v3-1).

Se precisar testar suas expressões JSONata, use o nosso [endpoint de expressões JSONata](https://developers.vtex.com/vtex-rest-api/reference/feed-v3#testjsonataexpression).
