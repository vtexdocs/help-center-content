---
title: 'Número de 12 dígitos do cartãoNúmero sendo aceito na caixa e causando transações presas'
id: 2vLsFwO5Dt2gUL9kUTZ8s3
status: PUBLISHED
createdAt: 2022-03-03T18:39:42.814Z
updatedAt: 2022-11-25T22:05:12.000Z
publishedAt: 2022-11-25T22:05:12.000Z
firstPublishedAt: 2022-03-03T18:39:43.280Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: numero-de-12-digitos-do-cartaonumero-sendo-aceito-na-caixa-e-causando-transacoes-presas
locale: pt
kiStatus: Backlog
internalReference: 452392
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Quando um cliente insere um cartãoNumber de 12 dígitos, apesar deste número de dígitos não ser válido, nós o enviamos várias vezes ao adquirente mesmo sabendo que ele não aprovará, uma vez que o cartãoNumber não está no padrão: [0-9]{13,19}. O resultado é uma ordem de bloqueio por vários dias até ser cancelada.



## Simulação



1. Fazer o checkout de uma loja Argentina
2. Preencha um cartão Mastercard 12 dígitos aleatóriosNúmero do cartão
3. Clique em "SÍ, EL NÚMERO DE LA TARJETA DE CRÉDITO ES CORRECTO".



## Workaround


N/A

