---
title: 'Os pedidos MELI não estão sendo cancelados no VTEX OMS para o cenário de contas múltiplas'
id: 4u9ue93sHNWcfVm3sRL2qx
status: PUBLISHED
createdAt: 2024-02-06T11:04:52.918Z
updatedAt: 2024-02-06T11:04:54.082Z
publishedAt: 2024-02-06T11:04:54.082Z
firstPublishedAt: 2024-02-06T11:04:54.082Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: meli-orders-not-being-cancelled-in-vtex-oms-for-multiples-accounts-scenario
locale: pt
kiStatus: Backlog
internalReference: 977453
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.



Atualmente, nossa integração MELI tem um problema relacionado ao processo de cancelamento de ordens. Quando o MELI cancela uma ordem e o vendedor tem mais de 4 contas na VTEX, há uma chance de não tentar cancelar a ordem na quinta conta

## Simulação



Se o cancelamento da ordem não puder ser concluído, o vendedor poderá ver a ordem não cancelada na VTEX, mas cancelada na MELI; nesse caso, um cancelamento manual é necessário diretamente no OMS.
Isso só é aplicado para casos em que o vendedor tem mais de 4 contas na VTEX, usando o mesmo MELI UserID

## Workaround


n/a





