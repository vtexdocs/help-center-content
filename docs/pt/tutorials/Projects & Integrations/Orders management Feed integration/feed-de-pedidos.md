---
title: 'Feed de pedidos'
id: 5SzSKee2f666YCoWkm0eQC
status: ARCHIVED
createdAt: 2018-01-12T16:34:03.101Z
updatedAt: 2022-08-30T17:25:47.206Z
publishedAt: 
firstPublishedAt: 2018-01-16T14:52:21.286Z
contentType: tutorial
productTeam: Post-purchase
author: authors_24
slugEN: orders-feed
locale: pt
legacySlug: como-funciona-o-feed-do-oms, como-funciona-o-feed-v3-do-modulo-de-gerenciamento-de-pedidos
subcategoryId: 3Y8xzVGMXcuPTuzfFI0vUp
---


O Feed de pedidos é basicamente uma lista de atualizações dos pedidos com a qual você pode desenvolver integrações de pedidos via API. Isso quer dizer que sempre que há uma atualização em um pedido, ela será inclusa como um novo item do Feed. Estas atualizações podem ser mudanças de status, adição ou remoção de itens ou entrega do pedido, por exemplo.

Dessa forma, o feed não é uma lista de pedidos e sim uma lista de eventos. Por exemplo, se o status de um pedido é alterado para `Aprovar pagamento` e então para `Autorizar envio`, dois eventos serão recebidos pelo Feed: um para cada uma destas atualizações, ambos se referindo ao mesmo pedido. Você pode configurar o Feed para filtrar quais eventos vão gerar itens no feed de fato ou não, ao invés de todas as atualizações que acontecem no pedido gerarem itens na fila do feed.

O Feed também possui um complemento voltado para operações robustas que demandam integrações mais complexas, o [Hook](https://help.vtex.com/tutorial/configurar-hook-do-feed-v3--6JkYQpIlU8ptysUiGIp4Px#).

Para saber mais sobre como configurar e usar o Feed v3 e o Hook, acesse o [guia do Feed v3 para desenvolvedores](https://developers.vtex.com/vtex-rest-api/docs/feed-v3-1).
