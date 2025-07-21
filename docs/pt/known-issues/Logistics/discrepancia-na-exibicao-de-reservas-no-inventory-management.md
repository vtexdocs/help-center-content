---
title: "Discrepância na exibição de reservas no Inventory Management"
id: 4UNZLS4HVABw4LYatRB6O
status: PUBLISHED
createdAt: 2025-05-05T22:11:26.083Z
updatedAt: 2025-07-08T19:35:20.576Z
publishedAt: 2025-07-08T19:35:20.576Z
firstPublishedAt: 2025-05-05T22:11:26.627Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: discrepancia-na-exibicao-de-reservas-no-inventory-management
locale: pt
kiStatus: Backlog
internalReference: 1220722
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>



A tela de gerenciamento de inventário exibe um comportamento inesperado em que a quantidade de itens reservados exibida na tela inicial é maior do que a quantidade exibida no modal de itens reservados. Esse comportamento ocorre para reservas no status "Canceled_AbortedCommitted", e essas reservas não são filtradas corretamente na tela inicial.

## Simulação



Não há uma maneira fácil de reproduzir esse cenário, mas há uma grande chance de ocorrer com reservas com o status "Canceled_AbortedCommitted".



## Workaround



Ao cancelar a reserva novamente, o cancelamento funciona e a reserva não aparece mais na interface do usuário.

https://developers.vtex.com/docs/api-reference/logistics-api#post-/api/logistics/pvt/inventory/reservations/-reservationId-/cancel?endpoint=post-/api/logistics/pvt/inventory/reservations/-reservationId-/cancel



