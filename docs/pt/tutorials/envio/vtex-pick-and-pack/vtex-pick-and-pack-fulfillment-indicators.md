---
title: 'VTEX Pick and Pack: Indicadores de fulfillment'
createdAt: 2026-07-10T13:45:00.000Z
updatedAt: 2026-07-10T13:45:00.000Z
contentType: tutorial
productTeam: Post-purchase
slugEN: vtex-pick-and-pack-fulfillment-indicators
locale: pt
hidden: false
---

Os indicadores de fulfillment são exibidos no dashboard do [VTEX Pick and Pack: Fulfillment](/pt/docs/tutorials/vtex-pick-and-pack-fulfillment), módulo da solução [VTEX Pick and Pack](/pt/docs/tutorials/vtex-pick-and-pack). Eles ajudam a acompanhar a eficiência operacional dos pedidos, desde o início do processamento até a entrega ao cliente. Com essas métricas, a loja pode avaliar prazos, identificar gargalos e medir a qualidade das etapas de separação, empacotamento, envio e entrega.

A imagem a seguir mostra o dashboard em que esses indicadores são apresentados:

![pick-and-pack-fulfillment-indicators-PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-fulfillment_insights_pt_1.png)

> ℹ️ Para saber mais sobre a página que apresenta esses dados, confira o artigo [VTEX Pick and Pack: Insights](/pt/docs/tutorials/vtex-pick-and-pack-insights).

A tabela a seguir apresenta os indicadores de fulfillment disponíveis, o que cada um mede e a fórmula utilizada no cálculo:

| Indicador | Descrição | Cálculo |
| :-- | :-- | :-- |
| Pedidos (Orders) | Número total de pedidos únicos criados no período. | `total de pedidos` |
| Ordens de serviço (Worksheets) | Número total de ordens de serviço únicas criadas no período. | `total de ordens de serviço` |
| Tempo do ciclo do pedido (Order Cycle Time) | Tempo médio, em dias, desde que o pedido atinge `Pronto para manuseio` até ser `Entregue`. Avalia a eficiência de todo o ciclo. | `Σ (data em Entregue − data em Pronto para manuseio) / total de pedidos considerados` |
| Precisão do prazo (Deadline Accuracy) | Percentual de pedidos entregues até a data estimada, entre os pedidos `Entregue`. | `(pedidos entregues no prazo / total de pedidos entregues) × 100` |
| Tempo de separação (Picking Time) | Tempo médio, em minutos, entre `Pronto para separação` e `Pronto para empacotamento`. | `Σ (data em Pronto para empacotamento − data em Pronto para separação) / total de pedidos considerados` |
| Tempo de empacotamento (Packing Time) | Tempo médio, em minutos, entre `Pronto para empacotamento` e `Pronto para envio`. | `Σ (data em Pronto para envio − data em Pronto para empacotamento) / total de pedidos considerados` |
| Tempo de envio (Shipping Time) | Tempo médio, em dias, entre `Pronto para envio` e `Entregue`. | `Σ (data em Entregue − data em Pronto para envio) / total de pedidos considerados` |
| Taxa de separação de pedidos (Pick Rate) | Média de itens separados por hora no período. | `total de itens separados / horas decorridas` |
| Taxa de empacotamento (Pack Rate) | Média de itens empacotados por hora no período. | `total de itens empacotados / horas decorridas` |
| Tempo médio de processamento (Average Processing Time) | Tempo médio, em minutos, entre `Pronto para separação` e `Pronto para envio`. Avalia o processo interno de preparação. | `Σ (data em Pronto para envio − data em Pronto para separação) / total de pedidos considerados` |
| Taxa de devolução (Return Rate) | Percentual de pedidos com status `Devolvido`, sobre o total. | `(pedidos devolvidos / total de pedidos) × 100` |
| OTIF (On-Time In-Full) | Percentual de pedidos perfeitos (entregues no prazo, sem itens rejeitados ou substituídos), sobre o total. | `(pedidos perfeitos / total de pedidos) × 100` |
| Entrega no prazo (On-time shipping) | Percentual de pedidos entregues até a data estimada, entre os pedidos `Entregue`. | `(pedidos entregues no prazo / total de pedidos entregues) × 100` |
| Taxa de precisão (Accuracy Rate) | Percentual de pedidos que chegaram a `Pronto para envio` sem itens rejeitados ou substituídos, sobre o total. | `(pedidos processados sem substituições ou rejeições / total de pedidos) × 100` |
| Taxa de fulfillment (Fulfillment Rate) | Percentual de pedidos `Entregue` sem itens rejeitados ou substituídos, sobre o total. | `(pedidos entregues sem substituições ou rejeições / total de pedidos) × 100` |
| Taxa de backorder (Back Order Rate) | Percentual de pedidos com itens rejeitados por falta de estoque, sobre o total. | `(pedidos com itens rejeitados por falta de estoque / total de pedidos) × 100` |

> ℹ️ Nos indicadores de tempo, apenas os pedidos que passaram pelos dois status considerados entram no cálculo.

> ℹ️ A Taxa de backorder considera os itens rejeitados por falta de estoque, independentemente do status do pedido.
