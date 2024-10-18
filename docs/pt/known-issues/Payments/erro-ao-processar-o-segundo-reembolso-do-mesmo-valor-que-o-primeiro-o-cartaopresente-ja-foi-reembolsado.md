---
title: 'Erro ao processar o segundo reembolso do mesmo valor que o primeiro: O cartão-presente já foi reembolsado'
id: 17uP0QDzEPHmKvLMiyDYxc
status: PUBLISHED
createdAt: 2024-10-16T20:27:34.223Z
updatedAt: 2024-10-16T20:27:35.166Z
publishedAt: 2024-10-16T20:27:35.166Z
firstPublishedAt: 2024-10-16T20:27:35.166Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: error-when-processing-the-second-refund-of-the-same-value-as-the-first-gift-card-has-been-already-refunded
locale: pt
kiStatus: Scheduled
internalReference: 1118560
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Ao solicitar um segundo reembolso parcial com o mesmo valor do primeiro, o gateway retorna a seguinte mensagem:

    Message: O cartão-presente já foi reembolsado.


Embora isso seja registrado na interação, o segundo reembolso não é realmente processado.
Esse cenário é muito mais comum para o segundo reembolso do mesmo valor, mas também pode ocorrer em reembolsos subsequentes, desde que o valor solicitado seja igual à soma dos reembolsos já processados.

## Simulação



1. Faça uma compra exclusivamente com um cartão-presente (GC);
2. Conclua a transação;
3. Emitir um reembolso parcial de um valor menor que a metade do pagamento total;
4. Solicitar outro reembolso no mesmo valor do primeiro

## Workaround


Foi criado um sinalizador de recurso em que as contas adicionadas ignoram a parte que introduz esse bug.
https://github.com/vtex/configs/blob/main/src/configs/payment-gateway/flags/gch-refund-condition.jsonnet




