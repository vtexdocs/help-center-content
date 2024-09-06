---
title: 'delayToAutoSettleAfterAntifraud acionando a captura automática mesmo sem antifraude'
id: 4HjKZsCbSTJSYE49xij9C8
status: PUBLISHED
createdAt: 2023-05-08T19:59:07.523Z
updatedAt: 2023-05-08T19:59:08.684Z
publishedAt: 2023-05-08T19:59:08.684Z
firstPublishedAt: 2023-05-08T19:59:08.684Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: delaytoautosettleafterantifraud-acionando-a-captura-automatica-mesmo-sem-antifraude
locale: pt
kiStatus: Backlog
internalReference: 369633
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Quando a transação **NÃO** possui antifraude, ela assume o menor valor entre `delayToAutoSettle` e `delayToAutoSettleAfterAntifraud`. Nesse caso, o `EarlySettlementWorker` é responsável pela captura, que é o worker para captura antecipada. Tecnicamente, é o worker que é chamado após a execução da antifraude, mas quando não há uma, ele inicia sua contagem regressiva após a autorização de pagamento.

Por outro lado, no cenário em que a antifraude **EXISTE**, ela se comporta como esperado: o que vier primeiro é chamado. A captura automática inicia a contagem regressiva após a aprovação do pagamento. A captura antecipada inicia a contagem regressiva após a aprovação antifraude.

Por exemplo, se `delayToAutoSettle` for igual a 1 minuto e `delayToAutoSettleAfterAntifraud` for igual a 1 segundo, e a antifraude for chamada e aprovada antes de 1 minuto após a autorização do pagamento, então o `EarlySettlementWorker` será chamado.

## Simulação


Para simular, é necessário que o conector em questão esteja enviando diferentes períodos de atraso para[...]. Considerando que isso está configurado, é necessário criar uma condição de pagamento sem uma antifraude associada. Proceda à colocação de uma ordem e verifique o tempo que leva para a liquidação ser chamada (que será a referência para `delayToAutoSettleAfterAntifraud` e não `delayToAutoSettle`)

## Workaround


N/A





