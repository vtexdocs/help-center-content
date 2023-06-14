---
title: 'Em um cenário de pagamento dividido quando o valor já foi capturado, a porta de entrada não permite mais um pedido de cancelamento'
id: 5qVUfltwPb3FacbECRsNa0
status: PUBLISHED
createdAt: 2023-01-27T20:13:21.397Z
updatedAt: 2023-01-27T20:13:22.038Z
publishedAt: 2023-01-27T20:13:22.038Z
firstPublishedAt: 2023-01-27T20:13:22.038Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: em-um-cenario-de-pagamento-dividido-quando-o-valor-ja-foi-capturado-a-porta-de-entrada-nao-permite-mais-um-pedido-de-cancelamento
kiStatus: Backlog
internalReference: 742046
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Para um cenário dividido, quando o usuário faz um pedido de mudança ou mesmo um simples cancelamento após o pagamento já ter sido capturado, o gateway não permite mais receber um novo UpdateAdditionalData.
Portanto, neste caso, o gateway lançará uma exceção chamada PayoutSplitWasAlreadyDone.


##

## Simulação


Tente cancelar uma transação junto com uma atualizaçãoAdditionalData após a transação ter capturado seu pagamento.


##

## Workaround


Concluir a transação capturando o valor restante e depois realizar um reembolso total ou parcial do valor da transação.





