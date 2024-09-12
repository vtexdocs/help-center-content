---
title: 'Total de itens de reserva com valor negativo na interface do usuário do inventário'
id: 5W8BeBZjSgN30YXwXfT8kV
status: PUBLISHED
createdAt: 2024-02-29T22:05:19.854Z
updatedAt: 2024-03-01T13:46:07.440Z
publishedAt: 2024-03-01T13:46:07.440Z
firstPublishedAt: 2024-02-29T22:05:20.674Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slug: total-de-itens-de-reserva-com-valor-negativo-na-interface-do-usuario-do-inventario
locale: pt
kiStatus: Backlog
internalReference: 991735
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.



Um cenário específico, no qual mais de um pedido é feito com o mesmo sku e proveniente do mesmo depósito, pode deixar o número da reserva negativo na interface do usuário do inventário.

**Cenário específico:**
Pedido A: 4 unidades do sku X do depósito 1;
pedido B: 6 unidades da sku X do depósito 1;

Pedido A: `status=handling`, a reserva é confirmada;
pedido B: `status=window-to-cancel`, a reserva ainda não foi confirmada;

Depois disso, o comerciante atualiza o estoque considerando as unidades do pedido A como entregues. Se o comerciante cancelar o pedido A e, posteriormente, mover o pedido B para `status=handling` (reconhecer a reserva), isso deixará a interface do usuário do estoque com -4 dessa sku como reservada.


#

## Simulação



## Workaround



