---
title: 'Nova configuração de prazo de entrega no checkout'
id: 5pv2gBQKH8nOKJiMKyBwDu
status: PUBLISHED
createdAt: 2024-12-05T14:49:01.044Z
updatedAt: 2024-12-11T13:00:03.603Z
publishedAt: 2024-12-11T13:00:03.603Z
contentType: updates
productTeam: Shopping
author: 2o8pvz6z9hvxvhSoKAiZzg
slugEN: new-shipping-time-settings-in-the-checkout
locale: pt
legacySlug: nova-configuracao-de-prazo-de-entrega-no-checkout
announcementImageID: ''
announcementSynopsisPT: 'Criamos novas configurações no Checkout que permitem exibir individualmente o prazo de entrega para cada produto.'
---

A configuração padrão do checkout permite a exibição de um único prazo de entrega (em dias úteis), para todos os produtos do carrinho. O valor exibido é calculado pelo produto com tempo de entrega mais longo.

Para melhorar a experiência do seu cliente, agora, ao invés de exibir um único prazo de entrega para todos os produtos do carrinho, a [Checkout API](https://developers.vtex.com/docs/api-reference/checkout-api) oferece a flexibilidade de mostrar no checkout os prazos de entrega individuais para cada item.

## O que mudou?

Com esta atualização, os lojistas agora podem:

* Exibir no checkout prazos de entrega específicos para cada produto individualmente.
* Apresentar o prazo de entrega no formato de data, ao invés do número de dias (por exemplo, “15 de setembro de 2024” ao invés de “em 5 dias úteis”).

## O que precisa ser feito?

A funcionalidade já está disponível automaticamente em todas as lojas. Para implementar essas melhorias, você pode personalizar a frente de loja utilizando as informações retornadas pela [Checkout API](https://developers.vtex.com/docs/api-reference/checkout-api).

Para mais detalhes, leia nosso [release note](https://developers.vtex.com/updates/release-notes/2024-06-24-displaying-sla-by-item-in-checkout) e o guia [Displaying SLA by item in Checkout](https://developers.vtex.com/docs/guides/displaying-sla-by-item-in-checkout). 

> ⚠️ A funcionalidade ativa pode impactar o módulo de **Pedidos**, considerando que o padrão é mostrar o prazo de entrega agrupado pelo mais demorado. Assim, é gerada uma diferença de prazos entre o que é apresentado no Admin VTEX e para o cliente.
