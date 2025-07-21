---
title: "Pedidos feitos com Gift Card geram transações em moeda brasileira (R$)"
id: 6KbJ0z705zqqSfL9PiuLHj
status: PUBLISHED
createdAt: 2024-08-19T15:44:05.465Z
updatedAt: 2024-08-19T15:44:06.236Z
publishedAt: 2024-08-19T15:44:06.236Z
firstPublishedAt: 2024-08-19T15:44:06.236Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: pedidos-feitos-com-gift-card-geram-transacoes-em-moeda-brasileira-r
locale: pt
kiStatus: Backlog
internalReference: 1083379
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Os pagamentos com Gift Card não são criados com um `currencyCode`, como consequência, as transações serão criadas com o padrão R$ (Real brasileiro), o que não acontece quando outro método de pagamento está presente (por exemplo, Gift Card + Cartão de crédito).

## Simulação


Faça um pedido usando apenas o Gift Card; a transação será em R$, mas o pedido será criado corretamente com a moeda local. O problema é apenas visual, sem impacto operacional.



## Workaround


NA




