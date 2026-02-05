---
title: 'Quais transportadoras disponibilizam o rastreio de frete?'
id: frequentlyAskedQuestions_303
status: PUBLISHED
createdAt: 2019-01-24T20:45:52.473Z
updatedAt: 2025-09-26T14:36:28.938Z
publishedAt: 2025-09-26T14:36:28.938Z
firstPublishedAt: 2019-01-24T22:12:09.421Z
contentType: tutorial
productTeam: Post-purchase
author: authors_2
slugEN: which-carriers-allow-delivery-tracking
legacySlug: quais-transportadoras-disponibilizam-o-rastreio-de-frete
locale: pt
subcategoryId: 7fTH6bP0C4IaM8qWi0kkQC
---

Após [informar a nota fiscal](/pt/tutorial/como-inserir-a-nota-fiscal--tutorials_193), é possível obter os dados de entrega no pedido. Estes dados correspondem ao nome da transportadora, código de rastreio e URL de rastreio, e podem ser inseridos tanto pela interface quanto pela API do módulo Gerenciamento de pedidos.

## Integração com transportadoras

Conforme detalhado [neste problema conhecido](/pt/known-issues/a-integracao-de-rastreamento-nao-esta-atualizando-de-forma-automatica), a atualização automática de rastreamento por transportadoras integradas **está atualmente desabilitada** em lojas VTEX.

Portanto, as verificações automáticas sobre o estado da entrega **não estão sendo realizadas** e os emails com o estado atualizado **não estão sendo enviados** para os clientes, mesmo que as lojas tenham configurado previamente transportadoras integradas de forma nativa na VTEX.

Por isso, independentemente da transportadora escolhida, recomendamos seguir o passo a passo abaixo para atualizar os dados de rastreio ativamente.

## Como enviar atualizações de entrega

Você pode atualizar os dados de rastreamento ativamente utilizando o endpoint [Update Order Tracking Status](https://developers.vtex.com/docs/api-reference/orders-api#put-/api/oms/pvt/orders/-orderId-/invoice/-invoiceNumber-/tracking) da Orders API. Nesse caso, a informação será registrada no Gerenciamento de pedidos e enviada por e-mail aos clientes.

O envio destes dados pode ser feito por qualquer sistema externo que esteja acompanhando o status da entrega do pacote, seja um ERP, um middleware ou a própria transportadora.

Também é possível [inserir a variável](/pt/tutorial/incluir-variaveis-do-pedido-no-template-de-e-mail-transacional--694Bn8eOeAWYQeaWGaOISe#outras-variaveis-de-e-mails-de-pedido) `trackingURL` em alguns [templates do Message Center](/pt/docs/tutorials/templates-de-emails-transacionais), como **Order invoiced** e **Order shipped**, e o cliente será capaz de acompanhar o rastreamento pelo link.

## Integração com os Correios

Conforme detalhado [neste problema conhecido](/pt/known-issues/atualizacao-automatica-do-rastreio-de-entregas-via-correios), a integração de rastreio nativa com os Correios está atualmente desabilitada.

Uma alternativa é utilizar soluções desenvolvidas por parceiros para acompanhar entregas dos Correios, como o [rastreio da XP Agência](https://rastreio.xpagencia.com.br/).

