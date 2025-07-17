---
title: 'Quando o acordo é enviado tão nulo e codificado como "reembolso-manual", nosso gateway realiza um duplo reembolso.'
id: 2PdRRjHDODY2Tk0VItO4Fo
status: PUBLISHED
createdAt: 2022-07-11T17:37:43.961Z
updatedAt: 2024-02-16T20:28:17.704Z
publishedAt: 2024-02-16T20:28:17.704Z
firstPublishedAt: 2022-07-11T17:37:44.954Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: quando-o-acordo-e-enviado-tao-nulo-e-codificado-como-reembolsomanual-nosso-gateway-realiza-um-duplo-reembolso
locale: pt
kiStatus: No Fix
internalReference: 615050
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


A documentação do PPP indica que quando o processo de reembolso não funcionou, o provedor deve responder com um `nulo` a este campo, e também quando o reembolso deve ser feito manualmente, o campo de código deve ter o valor "reembolso-manual".

O problema é que cada um desencadeia um reembolso, fazendo com que ele seja duplicado.



## Simulação


Send code="refund-manually" e settled=null na resposta de liquidação com PPP.



## Workaround


Não enviar "reembolso-manual" no campo de código, mas apenas enviar o liquidado como nulo.

