---
title: 'VTEX Pick and Pack: Indicadores de fulfillment'
id:
status: PUBLISHED
createdAt: 2026-07-03T13:45:00.000Z
updatedAt: 2026-07-03T13:45:00.000Z
publishedAt: 2026-07-03T13:45:00.000Z
firstPublishedAt: 2026-07-03T13:45:00.000Z
contentType: tutorial
productTeam: Post-purchase
author: 2o8pvz6z9hvxvhSoKAiZzg
slugEN: vtex-pick-and-pack-fulfillment-indicators
legacySlug: vtex-pick-and-pack-fulfillment-indicators
locale: pt
subcategoryId: 7Kllu6CmeLNV3tYXlCFvOt
---

Os indicadores de fulfillment ajudam a acompanhar a eficiência operacional dos pedidos, desde o início do processamento até a entrega ao cliente. Com essas métricas, a loja pode avaliar prazos, identificar gargalos e medir a qualidade das etapas de separação, empacotamento, envio e entrega.

Este artigo apresenta os principais indicadores de fulfillment, os estados do pedido considerados em cada cálculo e as fórmulas usadas para gerar os resultados exibidos no dashboard.

A tabela a seguir resume os indicadores disponíveis e seus respectivos cálculos:

| Indicador | Descrição | Cálculo |
| :-- | :-- | :-- |
| Pedidos (Orders) | Total de pedidos únicos criados no período. | `total_orders` |
| Ordens de serviço (Worksheets) | Total de ordens de serviço únicas criadas no período. | `total_worksheets` |
| Tempo do ciclo do pedido (Order Cycle Time) | Tempo médio entre o pedido ficar pronto para processamento e ser entregue (em dias). | `Σ (t_delivered − t_ready_for_handling) / N` |
| Precisão do prazo (Deadline Accuracy) | Percentual de pedidos entregues antes ou na data estimada. | `(on_time_orders / total_orders) × 100` |
| Tempo de separação (Picking Time) | Tempo médio na etapa de separação. | `Σ (t_ready_for_packing − t_ready_for_picking) / N` |
| Tempo de empacotamento (Packing Time) | Tempo médio na etapa de empacotamento. | `Σ (t_preparing_shipping − t_ready_for_packing) / N` |
| Tempo de envio (Shipping Time) | Tempo médio entre o pedido ficar pronto para envio e ser entregue. | `Σ (t_delivered − t_preparing_shipping) / N` |
| Taxa de separação de pedidos (Pick Rate) | Média de itens separados por hora. | `total_picked_items / elapsed_hours` |
| Taxa de empacotamento (Pack Rate) | Média de itens empacotados por hora. | `total_packed_items / elapsed_hours` |
| Tempo médio de processamento (Average Processing Time) | Tempo médio entre o pedido ficar pronto para separação e pronto para envio (em minutos). | `Σ (t_preparing_shipping − t_ready_for_picking) / N` |
| Taxa de devolução (Return Rate) | Percentual de pedidos devolvidos. | `(returned_orders / total_orders) × 100` |
| OTIF (On-Time In-Full) | Percentual de pedidos perfeitos (sem alterações e no prazo). | `(perfect_orders / total_orders) × 100` |
| Entrega no prazo (Orders Delivered On Time) | Percentual de pedidos entregues no prazo. | `(on_time_count / total_delivered) × 100` |
| Taxa de precisão (Accuracy Rate) | Percentual de pedidos processados sem substituições ou rejeições. | `(accurate_orders / total_orders) × 100` |
| Taxa de fulfillment (Fulfillment Rate) | Percentual de pedidos entregues sem substituições ou rejeições. | `(fulfilled_orders / total_orders) × 100` |
| Taxa de backorder (Back Order Rate) | Percentual de pedidos com itens rejeitados por falta de estoque. | `(back_orders / total_orders) × 100` |

Nas seções a seguir, cada indicador é detalhado com os estados ou campos utilizados e a fórmula completa.

## Pedidos (Orders)

Contabiliza o número total de pedidos únicos criados dentro do período selecionado.

Os campos utilizados no cálculo são `createdAt` e `orderId`.

A fórmula matemática é `pedidos = total_orders`.

Onde:

* `total_orders`: número total de pedidos únicos criados no período selecionado.

## Ordens de serviço (Worksheets)

Contabiliza o número total de ordens de serviço únicas criadas dentro do período selecionado.

Os campos utilizados no cálculo são `createdAt` e `worksheetId`.

A fórmula matemática é `ordens_de_serviço = total_worksheets`.

Onde:

* `total_worksheets`: número total de ordens de serviço únicas criadas no período selecionado.

## Tempo do ciclo do pedido (Order Cycle Time)

Mede o tempo total decorrido desde quando um pedido está pronto para processamento até ser entregue ao cliente.

O resultado é expresso em dias e permite avaliar a eficiência operacional de todo o ciclo do pedido.

Os estados utilizados no cálculo são:

* `READY_FOR_HANDLING`: início do ciclo.
* `DELIVERED`: fim do ciclo.

> ℹ️ Apenas pedidos que passaram por ambos os estados são considerados.

A fórmula matemática é:

* Tempo de ciclo por pedido: `t_delivered_i − t_ready_for_handling_i`
* Tempo médio de ciclo: `Σ (t_delivered_i − t_ready_for_handling_i) / N`

Onde:

* `t_ready_for_handling_i`: data e hora em que o pedido `i` atinge o estado `READY_FOR_HANDLING`.
* `t_delivered_i`: data e hora em que o pedido `i` atinge o estado `DELIVERED`.
* `N`: total de pedidos que possuem ambos os status dentro do período selecionado.

## Precisão do prazo (Deadline Accuracy)

Percentual de pedidos entregues antes ou na data estimada.

O estado utilizado no cálculo é `DELIVERED`.

A fórmula matemática é `(on_time_orders / total_orders) × 100`.

Onde:

* `on_time_orders`: pedidos com status `DELIVERED` e `deliveryDate ≤ shippingEstimatedDateMin`.
* `total_orders`: total de pedidos com status `DELIVERED` no período selecionado.

## Tempo de separação (Picking Time)

Mede o tempo médio que um pedido permanece na etapa de separação, desde quando fica pronto para separação até ficar pronto para empacotamento.

Os estados utilizados no cálculo são:

* `READY_FOR_PICKING`: início.
* `READY_FOR_PACKING`: fim.

> ℹ️ Apenas pedidos que passaram por ambos os estados são considerados.

A fórmula matemática é:

* Tempo de separação por pedido: `t_ready_for_packing_i − t_ready_for_picking_i`
* Tempo médio de separação: `Σ (t_ready_for_packing_i − t_ready_for_picking_i) / N`

Onde:

* `t_ready_for_picking_i`: data e hora em que o pedido `i` atinge o estado `READY_FOR_PICKING`.
* `t_ready_for_packing_i`: data e hora em que o pedido `i` atinge o estado `READY_FOR_PACKING`.
* `N`: total de pedidos que atingiram ambos os estados dentro do período selecionado.

## Tempo de empacotamento (Packing Time)

Mede o tempo médio que um pedido permanece na etapa de empacotamento, desde quando fica pronto para empacotamento até estar pronto para envio.

Os estados utilizados no cálculo são:

* `READY_FOR_PACKING`: início.
* `PREPARING_SHIPPING`: fim.

> ℹ️ Apenas pedidos que passaram por ambos os estados são considerados.

A fórmula matemática é:

* Tempo de empacotamento por pedido: `t_preparing_shipping_i − t_ready_for_packing_i`
* Tempo médio de empacotamento: `Σ (t_preparing_shipping_i − t_ready_for_packing_i) / N`

Onde:

* `t_ready_for_packing_i`: data e hora em que o pedido `i` atinge o estado `READY_FOR_PACKING`.
* `t_preparing_shipping_i`: data e hora em que o pedido `i` atinge o estado `PREPARING_SHIPPING`.
* `N`: total de pedidos que atingiram ambos os estados dentro do período selecionado.

## Tempo de envio (Shipping Time)

Mede o tempo médio desde quando um pedido está pronto para envio até ser entregue.

Os estados utilizados no cálculo são:

* `PREPARING_SHIPPING`: início.
* `DELIVERED`: fim.

> ℹ️ Apenas pedidos que passaram por ambos os estados são considerados.

A fórmula matemática é:

* Tempo de envio por pedido: `t_delivered_i − t_preparing_shipping_i`
* Tempo médio de envio: `Σ (t_delivered_i − t_preparing_shipping_i) / N`

Onde:

* `t_preparing_shipping_i`: data e hora em que o pedido `i` atinge o estado `PREPARING_SHIPPING`.
* `t_delivered_i`: data e hora em que o pedido `i` atinge o estado `DELIVERED`.
* `N`: total de pedidos que atingiram ambos os estados dentro do período selecionado.

## Taxa de separação de pedidos (Pick Rate)

Mede a quantidade média de itens separados por hora durante o período selecionado.

Os campos utilizados no cálculo são `pickedAt` e `pickedQuantity`.

A fórmula matemática é `total_picked_items / elapsed_hours`.

Onde:

* `total_picked_items`: soma de `pickedQuantity` no período selecionado.
* `elapsed_hours`: horas entre o primeiro e o último registro de `pickedAt` no período selecionado.

## Taxa de empacotamento (Pack Rate)

Mede a quantidade média de itens empacotados por hora durante o período selecionado.

Os campos utilizados no cálculo são `packedAt` e `packedQuantity`.

A fórmula matemática é `total_packed_items / elapsed_hours`.

Onde:

* `total_packed_items`: soma de `packedQuantity` no período selecionado.
* `elapsed_hours`: horas entre o primeiro e o último registro de `packedAt` no período selecionado.

## Tempo médio de processamento (Average Processing Time)

Tempo médio de processamento desde quando um pedido está pronto para separação até estar pronto para envio.

O resultado é expresso em minutos e permite avaliar a eficiência operacional do processo interno de preparação de pedidos.

Os estados utilizados no cálculo são:

* `READY_FOR_PICKING`: início.
* `PREPARING_SHIPPING`: fim.

> ℹ️ Apenas pedidos que passaram por ambos os estados são considerados.

A fórmula matemática é:

* Tempo de processamento por pedido: `t_preparing_shipping_i − t_ready_for_picking_i`
* Tempo médio de processamento: `Σ (t_preparing_shipping_i − t_ready_for_picking_i) / N`

Onde:

* `t_ready_for_picking_i`: data e hora em que o pedido `i` atinge `READY_FOR_PICKING`.
* `t_preparing_shipping_i`: data e hora em que o pedido `i` atinge `PREPARING_SHIPPING`.
* `N`: total de pedidos que possuem ambos os status dentro do período selecionado.

## Taxa de devolução (Return Rate)

Percentual de pedidos devolvidos.

O estado utilizado no cálculo é `RETURNED`.

A fórmula matemática é `(returned_orders / total_orders) × 100`.

Onde:

* `returned_orders`: total de pedidos com status `RETURNED`.
* `total_orders`: total de pedidos no período selecionado.

## OTIF (On-Time In-Full)

Percentual de pedidos perfeitos (sem alterações e entregues no prazo).

Qualquer estado é avaliado, com base nos campos `deliveryDate`, `shippingEstimatedDateMin`, `replacedItems` e `rejectedItems`.

A fórmula matemática é `(perfect_orders / total_orders) × 100`.

Onde:

* `perfect_orders`: pedidos sem itens rejeitados, sem itens substituídos e com `deliveryDate ≤ shippingEstimatedDateMin`.
* `total_orders`: total de pedidos no período selecionado.

## Entrega no prazo (Orders Delivered On Time)

Percentual de pedidos entregues dentro do prazo.

O estado utilizado no cálculo é `DELIVERED`.

A fórmula matemática é `(on_time_count / total_delivered) × 100`.

Onde:

* `on_time_count`: total de pedidos com status `DELIVERED` e `deliveryDate ≤ shippingEstimatedDateMin`.
* `total_delivered`: total de pedidos com status `DELIVERED` no período selecionado.

## Taxa de precisão (Accuracy Rate)

Percentual de pedidos processados sem itens substituídos ou rejeitados.

O estado utilizado no cálculo é `PREPARING_SHIPPING`.

A fórmula matemática é `(accurate_orders / total_orders) × 100`.

Onde:

* `accurate_orders`: pedidos com status `PREPARING_SHIPPING`, sem itens rejeitados e sem itens substituídos.
* `total_orders`: total de pedidos no período selecionado.

## Taxa de fulfillment (Fulfillment Rate)

Percentual de pedidos entregues sem itens substituídos ou rejeitados.

O estado utilizado no cálculo é `DELIVERED`.

A fórmula matemática é `(fulfilled_orders / total_orders) × 100`.

Onde:

* `fulfilled_orders`: pedidos com status `DELIVERED`, sem itens rejeitados e sem itens substituídos.
* `total_orders`: total de pedidos no período selecionado.

## Taxa de backorder (Back Order Rate)

Percentual de pedidos com itens rejeitados por falta de estoque.

> ℹ️ Este indicador não depende dos estados do pedido, mas do fulfillment.

A fórmula matemática é `(back_orders / total_orders) × 100`.

Onde:

* `back_orders`: total de pedidos com `rejectionReasons="faltante"` e `rejectedQuantity > 0`.
* `total_orders`: total de pedidos no período selecionado.

![pick-and-pack-fulfillment-indicators-PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-fulfillment_insights_pt_1.png)
