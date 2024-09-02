---
title: 'Configuração incorreta da liquidação automática de pagamentos'
id: 6KOQwBKNgOPNL7TM80Bqjf
status: PUBLISHED
createdAt: 2024-06-19T22:12:10.705Z
updatedAt: 2024-06-19T22:12:11.484Z
publishedAt: 2024-06-19T22:12:11.484Z
firstPublishedAt: 2024-06-19T22:12:11.484Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: configuracao-incorreta-da-liquidacao-automatica-de-pagamentos
locale: pt
kiStatus: Backlog
internalReference: 1053010
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


O problema é que o gateway ignorou o valor `delayToAutoSettleAfterAntifraud`.

Esses campos são obrigatórios na resposta de autorização, mas o gateway aceita a ausência deles. Nossa documentação está relacionada a isso.

        "delayToAutoSettle": 1200, "delayToAutoSettleAfterAntifraud": 1200

Em um cenário perfeito, o gateway não deveria aceitar a resposta sem eles.

Quando o campo `delayToAutoSettleAfterAntifraud` não está no payload da resposta de autorização. O gateway não pode definir o valor correto, portanto, o valor padrão da liquidação automática do pagamento será de 4 dias (padrão).

## Simulação



1. Crie um pagamento.
2. Configure o conector para responder sem que seja necessário o campo delayToAutoSettle, mas enviando o delayToAutoSettleAfterAntifraud
3. Verifique a resposta de autorização, e ela terá apenas o valor que o conector respondeu
4. Verifique o cartão roxo para ver qual valor foi configurado. A liquidação automática do pagamento será agendada para quatro dias após a aprovação do pagamento.

## Workaround



Defina o **delayAutoSettle** como o mesmo valor do **delayAutoSettleAfterAntifraud**.





