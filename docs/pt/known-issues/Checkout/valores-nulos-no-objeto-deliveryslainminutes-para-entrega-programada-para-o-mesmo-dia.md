---
title: 'Valores nulos no objeto deliverySlaInMinutes para entrega programada para o mesmo dia'
id: 3iSfWDl8hMtuRaYxFKWjPI
status: PUBLISHED
createdAt: 2024-08-12T20:58:03.483Z
updatedAt: 2024-08-12T20:58:04.450Z
publishedAt: 2024-08-12T20:58:04.450Z
firstPublishedAt: 2024-08-12T20:58:04.450Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: null-values-in-deliveryslainminutes-object-for-same-day-scheduled-delivery
locale: pt
kiStatus: Backlog
internalReference: 1079981
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Os pedidos criados com entrega programada para o mesmo dia em que foram feitos retornam `items.deliverySlaInMinutes: null` dentro do objeto do carrinho.

## Simulação



- Configure uma loja com entrega programada com disponibilidade para o mesmo dia;
- Concluir uma compra com entrega programada para o mesmo dia;
- O campo `items.deliverySlaInMinutes` dentro do objeto do carrinho na transação será `null`

## Workaround


N/A





