---
title: 'Transações bloqueadas após a rejeição do risco'
id: 4LKwXp4P9IEkUh02vNZKiA
status: PUBLISHED
createdAt: 2024-09-04T19:05:28.366Z
updatedAt: 2024-09-04T19:05:29.306Z
publishedAt: 2024-09-04T19:05:29.306Z
firstPublishedAt: 2024-09-04T19:05:29.306Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: stuck-transactions-after-risk-rejection
locale: pt
kiStatus: Backlog
internalReference: 1092563
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


As transações com uma resposta RiskRejected do conector antifraude que já tiveram uma liquidação ficam presas em um loop de alteração de status.

## Simulação


Criar uma transação com validação antifraude
Liquidar a transação antes de uma resposta final da antifraude
Receber uma resposta RiskRejected do provedor antifraude
A transação ficará presa em um loo

## Workaround


N/A





