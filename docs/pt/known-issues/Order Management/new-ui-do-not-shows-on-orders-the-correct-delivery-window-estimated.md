---
title: 'Nova UI não mostra nos pedidos a janela de entrega correta estimada'
id: 5YG6dpMbOX3DK1fSWEyAzJ
status: PUBLISHED
createdAt: 2023-01-09T13:18:30.970Z
updatedAt: 2023-02-28T16:55:18.969Z
publishedAt: 2023-02-28T16:55:18.969Z
firstPublishedAt: 2023-01-09T13:18:31.481Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: nova-ui-nao-mostra-nos-pedidos-a-janela-de-entrega-correta-estimada
locale: pt
kiStatus: Backlog
internalReference: 620668
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.

Na nova IU, alguns pedidos não mostram corretamente a entrega estimada.

Quando há uma divergência de erro entre api de pedido e oms api pode acontecer ou se houver mais itens a Nova UI toma a EstimativaData do itemIndex 0 ignorando a Janela de Entrega.

## Simulação


Defina uma compra com mais deles um item com o shippingEstimateDate and Delivery Window populated them verifique a nova interface.

## Workaround


A alternativa é verificar usando a antiga interface do usuário (UI).




