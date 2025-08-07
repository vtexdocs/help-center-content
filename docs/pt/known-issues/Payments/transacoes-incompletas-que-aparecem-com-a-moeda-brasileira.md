---
title: "Transações incompletas que aparecem com a moeda brasileira"
id: 7g0j3FGa5E8kNi9PM3kBOf
status: PUBLISHED
createdAt: 2024-04-01T13:37:35.197Z
updatedAt: 2024-04-01T13:37:36.114Z
publishedAt: 2024-04-01T13:37:36.114Z
firstPublishedAt: 2024-04-01T13:37:36.114Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: transacoes-incompletas-que-aparecem-com-a-moeda-brasileira
locale: pt
kiStatus: Backlog
internalReference: 1007953
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Transações incompletas (cliente "Sem nome") podem aparecer na seção Transações com a moeda R$, resultado de um erro de criação (os dados de pagamento não foram enviados), mas os pedidos são criados corretamente na moeda local.

Como essas transações já foram perdidas, não há impacto operacional (bug visual).

## Simulação


Ao concluir um pagamento no checkout, você pode recarregar a página para "interromper" o processo e verificar na interface do usuário se a criação completa da transação falhou (procurando por "No name")

## Workaround


NA





