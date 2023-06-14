---
title: 'Como é calculado o prazo de entrega do pedido'
id: 1TOuKCIjGQmqOqQkEqCg82
status: PUBLISHED
createdAt: 2018-01-12T12:56:52.805Z
updatedAt: 2023-03-29T14:09:06.429Z
publishedAt: 2023-03-29T14:09:06.429Z
firstPublishedAt: 2018-01-12T14:42:26.502Z
contentType: tutorial
productTeam: Post-purchase
author: authors_24
slug: como-e-calculado-o-prazo-de-entrega-do-pedido
legacySlug: como-e-calculado-o-prazo-de-entrega-do-pedido
subcategory: 7fTH6bP0C4IaM8qWi0kkQC
---

O prazo de entrega de um pedido leva em consideração os __tempos de custo__ definidos para as cinco etapas da rota de logística:
- Estoque.
- Doca.
- Transportadora.
- Feriados.
- Horários de corte.

Ou seja, para cada uma dessas etapas você pode definir um tempo de custo - e o prazo de entrega que o seu cliente verá no checkout é a soma desses tempos de custo.

![deliveryCostTimes](//images.contentful.com/alneenqid6w5/hA6N4VPj440AEqEecIUck/0a6784f0c3d6f6d88b65547762600a7d/deliveryCostTimes.png)

Os tempos de custo do __estoque__ e da __doca__ são definidos nas telas de configuração de cada uma dessas etapas, em **Envio > Estratégia de envio > Política de envio.**

![calculoPrazoEntrega1](//images.contentful.com/alneenqid6w5/4QgQlroxxCK4iu6YoU2uIQ/a2df01bdbe2449e924a6380b5a39a19b/calculoPrazoEntrega1.png) 

![calculoPrazoEntrega2](//images.contentful.com/alneenqid6w5/6xAiBHXxwA2cMIaaK4AKm2/bfff8d81b7363121cc84de1149cfd587/calculoPrazoEntrega2.png)

O tempo de custo da __transportadora__ é definido na tabela de frete, enviada à VTEX por meio da tela de configuração da transportadora, também na página Estratégia de envio.

![calculoPrazoEntrega3](//images.contentful.com/alneenqid6w5/2bL9Gw0AeswGAeKSqYCYw4/57c492eb08239d61e463839a768101ad/calculoPrazoEntrega3.png)

### Para saber mais

Por meio da simulação de frete, você pode verificar como o prazo de entrega de um pedido específico foi calculado. Entenda como no artigo [Verificar como o prazo de entrega de um pedido foi calculado](/pt/tutorial/verificar-como-o-prazo-de-entrega-de-um-pedido-foi-calculado).
