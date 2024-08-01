---
title: 'Solicitação dupla do Adyen 3DS2 gera recusa de autorização de pagamento'
id: 3yR8LzaUjclJ22PkAymvoe
status: PUBLISHED
createdAt: 2023-09-20T13:09:29.771Z
updatedAt: 2023-09-20T13:09:30.507Z
publishedAt: 2023-09-20T13:09:30.507Z
firstPublishedAt: 2023-09-20T13:09:30.507Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: solicitacao-dupla-do-adyen-3ds2-gera-recusa-de-autorizacao-de-pagamento
locale: pt
kiStatus: Backlog
internalReference: 884154
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Quando a solicitação 3DS2 da Adyen é enviada duas vezes, ela obtém um erro na resposta e o pagamento é automaticamente negado.

Resposta de autorização:

`{"status":409, "errorCode": "704", "message": "request already processed or in progress", "errorType": "validation"}`

Seguindo a mensagem:

`Resposta não esperada [].`

Esse é um problema quando o pagamento é realmente autorizado no lado da Adyen, mas como não há liquidação do nosso lado, não podemos enviar uma solicitação de reembolso.

## Simulação


Não conseguimos reproduzir esse cenário ou encontrar um padrão até o momento.



## Workaround


NA




