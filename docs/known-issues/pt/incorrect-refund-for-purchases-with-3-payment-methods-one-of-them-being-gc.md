---
title: 'Reembolso incorreto para compras com 3 métodos de pagamento (um deles é GC)'
id: 5nWfRRuxOj7CN5mjXCLzzu
status: PUBLISHED
createdAt: 2022-03-03T18:38:19.216Z
updatedAt: 2022-11-25T22:08:35.058Z
publishedAt: 2022-11-25T22:08:35.058Z
firstPublishedAt: 2022-03-03T18:38:19.775Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: reembolso-incorreto-para-compras-com-3-metodos-de-pagamento-um-deles-e-gc
locale: pt
kiStatus: Backlog
internalReference: 464837
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


As transações com 3 métodos de pagamento sendo um de seus cartões-presente têm valores de reembolso incorretos. Em alguns casos, temos um reembolso negativo que faz com que o pagamento seja cancelado.

Fale com a discussão



## Simulação


O procedimento parece ser aleatório, percebemos que o valor negativo do reembolso é o valor total solicitado - os métodos de pagamento que foram corretamente reembolsados - o valor do GC.
No caso acima:
Pagamento 1(American Express): 66,99 BRL
Pagamento 2(Diners): 67,00 BRL
**Pagamento 3(GC): 30,99 BRL***

Reembolso solicitado: 104,99 BRL

**Refundo em cartão de presente: 30,99 BRL***
Reembolso no American Express: 66,99 BRL
Reembolso em Diners: -23,98 BRL

O valor negativo no reembolso dos Diners é (104,99 - 30,99 - 66,99 - **30,99***) = -23,98.
O que parece ser é que, de alguma forma, o valor do GC está sendo descontado duas vezes.



## Workaround


Não há solução para este bug

