---
title: 'As transações de verificação ao salvar o cartão em MyCards não são automaticamente canceladas'
id: 3VqRlcnzHqDEx7v1IIlBuf
status: PUBLISHED
createdAt: 2022-03-27T15:14:55.382Z
updatedAt: 2022-11-25T22:08:31.611Z
publishedAt: 2022-11-25T22:08:31.611Z
firstPublishedAt: 2022-03-27T15:14:56.630Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: as-transacoes-de-verificacao-ao-salvar-o-cartao-em-mycards-nao-sao-automaticamente-canceladas
locale: pt
kiStatus: Backlog
internalReference: 347084
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Quando um cartão é salvo no módulo MyCards, é gerada uma transação de verificação no valor de R$ 1,50, que, após seguir o fluxo de autorização e aprovação, deve ser automaticamente cancelada. Esta transação destina-se a validar que o cartão salvo é autêntico e está transacionando sem problemas.
No entanto, foi identificado que no caso em que o adquirente devolve uma comunicação indefinida, o Gateway não está chamando simulação



## Simulação


Este é um problema intermitente e depende do fornecedor, portanto não podemos determinar um passo a passo para reproduzir este cenário



## Workaround


Não foi identificada nenhuma solução, mas é possível cancelar manualmente a transação de R$ 1,50 via API

