---
title: "Callback com status aprovado não está sendo considerado para prosseguir com a transação"
id: 1IU3macRFOPM5nI2ekXHHD
status: PUBLISHED
createdAt: 2024-11-04T19:56:28.031Z
updatedAt: 2024-11-04T19:56:29.230Z
publishedAt: 2024-11-04T19:56:29.230Z
firstPublishedAt: 2024-11-04T19:56:29.230Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: callback-com-status-aprovado-nao-esta-sendo-considerado-para-prosseguir-com-a-transacao
locale: pt
kiStatus: Backlog
internalReference: 1129281
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Embora o gateway receba corretamente o retorno de chamada indicando que o status do pagamento foi aprovado, a transação não progride para `authorized` e depois para `approved`. Uma solicitação de autorização subsequente é enviada e, como o retorno é "indefinido", a transação permanece no status "autorizando" até que o número de novas tentativas se esgote.

## Simulação


Para que esse problema ocorra, o gateway deve tentar novamente no mesmo registro de data e hora em que recebeu o retorno de chamada. Não é simples reproduzir esse comportamento, pois é muito difícil atingir exatamente o mesmo registro de data e hora.

## Workaround


Há duas ações que o parceiro pode realizar:

1. Se o pagamento for aprovado, responda às chamadas de solicitação de autorização subsequentes do gateway com esse status em vez de indefinido.
2. Aumentar o número de novas tentativas (`delayToCancel`) para que o gateway faça mais tentativas.





