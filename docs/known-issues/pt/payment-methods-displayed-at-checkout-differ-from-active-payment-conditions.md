---
title: 'Os métodos de pagamento exibidos no checkout diferem das condições de pagamento ativas'
id: 1cpVNspn5G6je4EZKzvCF9
status: PUBLISHED
createdAt: 2022-09-27T16:32:55.806Z
updatedAt: 2023-04-10T15:14:18.718Z
publishedAt: 2023-04-10T15:14:18.718Z
firstPublishedAt: 2023-04-10T15:11:01.389Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: os-metodos-de-pagamento-exibidos-no-checkout-diferem-das-condicoes-de-pagamento-ativas
locale: pt
kiStatus: Backlog
internalReference: 666469
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Este KI se manifesta de duas maneiras no checkout:

1. Métodos de pagamento **não*** aparecem na página de checkout, mesmo quando a condição de pagamento associada estiver ativa por mais de 10 minutos.
2. Métodos de pagamento **supremain** na página de checkout, mesmo quando a condição de pagamento associada estiver desativada por mais de 10 min.

Esta é uma questão intermitente e não há evidências de como reproduzir este comportamento. Há uma maior incidência nos métodos de pagamento personalizados.


##

## Simulação


N/A


##

## Workaround



1. Resgatando a regra.
2. Reindexando todos os sistemas de pagamento no checkout via API.

