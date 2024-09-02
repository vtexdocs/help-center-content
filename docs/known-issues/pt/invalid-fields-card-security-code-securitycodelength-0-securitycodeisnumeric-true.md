---
title: 'Campos inválidos: Código de segurança do cartão. SecurityCodeLength: 0 SecurityCodeIsNumeric: true'
id: 8VlvruNr0pp9zKKSaPLGZ
status: PUBLISHED
createdAt: 2022-03-27T22:58:34.329Z
updatedAt: 2022-11-25T22:07:42.877Z
publishedAt: 2022-11-25T22:07:42.877Z
firstPublishedAt: 2022-03-27T22:58:34.959Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: campos-invalidos-codigo-de-seguranca-do-cartao-securitycodelength-0-securitycodeisnumeric-true
locale: pt
kiStatus: Backlog
internalReference: 442772
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


O erro acontece em um cenário específico onde você preenche as informações do cartão, depois muda o método de pagamento para outro (MercadoPago, por exemplo) e depois volta novamente ao método de pagamento com cartão de crédito e depois confirma o pagamento.
Ele gerará uma ordem incompleta com a mensagem "*Um pagamento de transação não pôde ser validado. Campos inválidos: Código de segurança do cartão. SecurityCodeLength: 0 SecurityCodeIsNumeric: true*".



## Simulação


N/A



## Workaround


N/A

