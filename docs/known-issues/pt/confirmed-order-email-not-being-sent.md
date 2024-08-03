---
title: 'O e-mail de confirmação do pedido não está sendo enviado'
id: 4RelMFApLldLtf0GxhYzdt
status: PUBLISHED
createdAt: 2023-03-10T22:07:59.908Z
updatedAt: 2023-08-28T14:53:51.322Z
publishedAt: 2023-08-28T14:53:51.322Z
firstPublishedAt: 2023-03-10T22:08:01.026Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: o-email-de-confirmacao-do-pedido-nao-esta-sendo-enviado
locale: pt
kiStatus: Fixed
internalReference: 423628
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


O Checkout não mapeia todos os fluxos em que o "GatewayCallback" deve acionar o evento "Raised OrderPlaced", de modo que os fluxos não mapeados podem não acionar esse evento como esperado, afetando diretamente o e-mail de confirmação do pedido a ser enviado.

## Simulação


Não há como simular o cenário.



## Workaround


N/A



