---
title: 'Promoções de remessa aplicadas em SLAs diferentes causando divergência no Tax Hub'
id: 3uI0b4FmXUh4uue5kFyFNy
status: PUBLISHED
createdAt: 2023-10-09T13:42:08.767Z
updatedAt: 2023-10-23T11:59:12.329Z
publishedAt: 2023-10-23T11:59:12.329Z
firstPublishedAt: 2023-10-09T13:42:09.636Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: promocoes-de-remessa-aplicadas-em-slas-diferentes-causando-divergencia-no-tax-hub
locale: pt
kiStatus: Fixed
internalReference: 916423
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Quando as promoções de frete se aplicam a diferentes SLAs, sendo um deles o frete grátis, isso causa divergência na solicitação enviada pelo Tax Hub, impedindo que o pedido seja feito.

## Simulação



- Crie uma promoção de frete grátis para um SLA específico;
- Crie qualquer outra promoção de frete para outro SLA;
- Ao tentar fazer um pedido, a mensagem "O pedido solicitado não pôde ser criado. Por favor, tente novamente"

## Workaround


N/A



