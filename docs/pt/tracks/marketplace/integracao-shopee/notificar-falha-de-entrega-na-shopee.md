---
title: 'Notificar falha de entrega na Shopee'
createdAt: 2026-09-09T16:26:00.000Z
updatedAt: 2026-09-10T20:16:00.000Z
contentType: trackArticle
productTeam: Channels
slugEN: notify-failed-delivery-shopee
locale: pt
trackId: 4CaZCzU9ZO1CByH0haZ9hA
trackSlugEN: integracao-shopee
order: 6
---

Quando uma entrega na modalidade [Logística do vendedor](/pt/tracks/integracao-shopee--4CaZCzU9ZO1CByH0haZ9hA/3vKp8QmN2xRsWy5Hb7Lc9T) não pode ser concluída, a Shopee precisa ser notificada para que o comprador receba o estorno. Com o conector VTEX, essa notificação acontece automaticamente depois que você registra uma [nota fiscal de devolução](/pt/docs/tutorials/como-devolver-itens-do-pedido) no valor total do pedido no OMS.

> ℹ️ Este fluxo se aplica apenas a pedidos da **Logística do vendedor**. Ele não está disponível para a modalidade [Shopee Full Logistics](/pt/tracks/integracao-shopee--4CaZCzU9ZO1CByH0haZ9hA/8nRw4mK7qPsXz2Yt3bVj6A).

## Como notificar a falha de entrega

O pedido precisa já ter sido faturado. Em seguida, faça uma **devolução total** no OMS seguindo os passos abaixo:

1. No Admin VTEX, acesse **Pedidos > Todos os pedidos**, ou digite **Todos os pedidos** na barra de busca.
2. Abra o pedido cuja entrega não pôde ser concluída.
3. Siga o procedimento descrito em [Como devolver itens do pedido](/pt/docs/tutorials/como-devolver-itens-do-pedido) para devolver os itens e registrar a nota fiscal de devolução.
4. Devolva **todos os itens** do pedido. A nota fiscal de devolução deve corresponder ao **valor total** do pedido, incluindo o frete.

> ⚠️ A integração só notifica a Shopee quando a devolução é total. Se o valor da nota fiscal de devolução for menor que o valor total do pedido, a devolução é considerada parcial. Esse cenário não é suportado, e a Shopee não é notificada.

Se você emitir mais de uma nota fiscal de devolução para o mesmo pedido, a soma dos valores deve ser igual ao valor total do pedido.

## Notificar a falha de entrega via API

Operações que registram a devolução pelo ERP ou por outro sistema de gestão também disparam a notificação automática à Shopee, desde que a nota fiscal de entrada seja lançada no OMS no valor total do pedido.

Utilize o endpoint [Order Invoice Notification](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/oms/pvt/orders/-orderId-/invoice):

`POST /api/oms/pvt/orders/{orderId}/invoice`

A nota fiscal deve ser registrada como nota de entrada, com `type: "input"`. A soma dos valores das notas fiscais de entrada precisa ser igual ao valor total do pedido, incluindo o frete. A mesma regra de devolução total descrita neste artigo se aplica.

> ℹ️ Sempre que possível, registre a devolução pelo OMS, no Admin ou pela Orders API. Assim, o pedido permanece sincronizado na VTEX e a comunicação com a Shopee acontece automaticamente.

Se a operação precisar informar a falha de entrega sem registrar a devolução no OMS, use o endpoint [Cancel Marketplace Delivery](https://developers.vtex.com/docs/api-reference/vtex-shopee-integration-api#post-/api/shopeeintegration/-accountName-/pub/orders/-mktplaceOrderId-/cancelDelivery):

`POST /api/shopeeintegration/{accountName}/pub/orders/{mktplaceOrderId}/cancelDelivery`

Esse caminho comunica à Shopee que a entrega não foi concluída, sem passar pelo fluxo de devolução do pedido na VTEX.

## O que acontece depois da nota fiscal de devolução

Quando a nota fiscal de devolução total é registrada no pedido, o conector identifica a devolução no OMS e notifica automaticamente a Shopee sobre a falha na entrega. Não é necessário notificar a devolução na Central do Vendedor da Shopee.
