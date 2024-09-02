---
title: 'Problema de cálculo em comissionAmount'
id: 1E8DRneWHVncTu5bZ9hNtF
status: PUBLISHED
createdAt: 2024-03-15T21:13:28.729Z
updatedAt: 2024-03-15T21:13:29.705Z
publishedAt: 2024-03-15T21:13:29.705Z
firstPublishedAt: 2024-03-15T21:13:29.705Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: problema-de-calculo-em-comissionamount
locale: pt
kiStatus: Backlog
internalReference: 1001005
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Isso ocorre em um cenário específico de divisão de pagamento com vários pagamentos e vendedores (em que ambos são responsáveis por encargos de processamento de pagamento e estornos). A soma do `comissionAmount` dos vendedores não é igual ao `amount` do marketplace (problema de arredondamento), essa diferença pode causar uma recusa de liquidação pelo adquirente.

## Simulação


Não foi possível simular esse problema, pois ele envolve várias condições

## Workaround


NA




