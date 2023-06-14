---
title: 'Inconsistência sobre os prazos das faturas de crédito ao cliente'
id: 73zrcR44MDH7PAFdhu8fPM
status: PUBLISHED
createdAt: 2022-03-27T13:20:54.642Z
updatedAt: 2022-11-25T22:08:23.381Z
publishedAt: 2022-11-25T22:08:23.381Z
firstPublishedAt: 2022-03-27T13:20:55.062Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: inconsistencia-sobre-os-prazos-das-faturas-de-credito-ao-cliente
locale: pt
kiStatus: Backlog
internalReference: 331279
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Os pedidos feitos utilizando Crédito ao Cliente como forma de pagamento geram faturas de apenas uma única parcela devido a 60 dias. Se você verificar a conta no módulo de Crédito ao Cliente, diz que a fatura foi gerada sem problemas. No entanto, olhando através da API é possível notar que dentro do campo customData os prazos (datas de vencimento) são enviados com valores diferentes. Isto impacta a integração com outros sistemas que organizam o cumprimento.



## Simulação


N/A



## Workaround


N/A

