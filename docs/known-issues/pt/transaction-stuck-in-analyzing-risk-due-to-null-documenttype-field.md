---
title: Transação travada no Analyzing Risk devido ao campo documentType nulo.
id: 5cZWkKc0ZXnMZCw4bvXJjA
status: PUBLISHED
createdAt: 2023-05-11T17:33:04.077Z
updatedAt: 2023-05-11T17:33:04.511Z
publishedAt: 2023-05-11T17:33:04.511Z
firstPublishedAt: 2023-05-11T17:33:04.511Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: transacao-travada-no-analyzing-risk-devido-ao-campo-documenttype-nulo
kiStatus: Backlog
internalReference: 697107
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


As transações estão ficando presas no estágio "Analyzing Risk" porque o campo `documentType` é nulo.

## Simulação


Esse problema ocorre quando um cliente usa informações de uma empresa para concluir um pedido. Se o nome da empresa for usado para concluir a transação, o campo `documentType` não será preenchido, causando problemas com a aprovação antifraude da transação

## Workaround



N/A

