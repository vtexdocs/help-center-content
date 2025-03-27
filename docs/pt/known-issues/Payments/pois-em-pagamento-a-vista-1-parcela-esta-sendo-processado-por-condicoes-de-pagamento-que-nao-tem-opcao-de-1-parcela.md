---
title: 'Pois em pagamento à vista (1 parcela) está sendo processado por condições de pagamento que não têm opção de 1 parcela'
id: 4IFxkUqJ9jdqkJf7kSNUcy
status: PUBLISHED
createdAt: 2022-03-26T12:27:04.928Z
updatedAt: 2022-11-25T22:06:19.145Z
publishedAt: 2022-11-25T22:06:19.145Z
firstPublishedAt: 2022-03-26T12:27:05.532Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: for-in-cash-payment-1-installment-is-being-processed-by-payment-conditions-that-have-not-1-installment-option
locale: pt
kiStatus: Backlog
internalReference: 292781
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Pois em pagamento à vista (1 parcela) está sendo ignorada para a regra de condição de pagamento, embora a condição de pagamento não tenha configuração para 1 parcela.




## Simulação



1. Criar duas condições de pagamento com dois intervalos de parcelas diferentes: Uma com 1-12 parcelas e outra com 13-18 parcelas
2. Vá ao checkout e compre um item aleatório e finalize a compra com 1 opção de parcela e verifique a transação na administração, ela será associada à condição de pagamento com 13-18 parcelas, mesmo que não tenha 1 parcela configurada.




## Workaround


Estabelecer a condição de pagamento com parcelas de 1 a 13 como padrão

