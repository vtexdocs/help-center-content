---
title: 'Como é calculado o prazo de entrega do pedido'
id: 1TOuKCIjGQmqOqQkEqCg82
status: PUBLISHED
createdAt: 2018-01-12T12:56:52.805Z
updatedAt: 2023-09-23T00:34:19.034Z
publishedAt: 2023-09-23T00:34:19.034Z
firstPublishedAt: 2018-01-12T14:42:26.502Z
contentType: tutorial
productTeam: Post-purchase
author: authors_24
slugEN: how-is-the-order-delivery-deadline-calculated
legacySlug: como-e-calculado-o-prazo-de-entrega-do-pedido
locale: pt
subcategoryId: 7fTH6bP0C4IaM8qWi0kkQC
---

O prazo de envio de um pedido leva em consideração os seguintes aspectos da logística:

- [Lead time](/pt/docs/tutorials/lead-time-tempo-de-envio-a-nivel-de-sku)
- [Estoque](/pt/docs/tutorials/estoque)
- [Doca](/pt/docs/tutorials/doca)
- [Política de envio](/pt/docs/tutorials/politica-de-envio)

![lead_time_image_total_time_PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/estratégia-de-envio/como-e-calculado-o-prazo-de-entrega-do-pedido_1.png)

Você define um período para essas etapas e o prazo de envio que o seu cliente vê no checkout é uma soma desses períodos. 

O tempo de envio da __transportadora__ é definido pela [tabela de frete](/pt/docs/tutorials/planilha-de-frete), que precisa ser associada a sua estratégia de envio por meio de uma [política de envio](/pt/docs/tutorials/politica-de-envio).

As configurações de política de envio, estoque e doca podem ser feitas pelo seu Admin VTEX, em **Envio > Estratégia de envio**, em abas diferentes. Já a configuração opcional do lead time pode ser realizada em **Catálogo > Gerenciamento de inventário**.

### Saiba mais

- [Simulador de envio](/pt/docs/tutorials/simulador-de-envio)
- [Verificar como o prazo de entrega de um pedido foi calculado](/pt/docs/tutorials/verificar-como-o-prazo-de-entrega-de-um-pedido-foi-calculado).
