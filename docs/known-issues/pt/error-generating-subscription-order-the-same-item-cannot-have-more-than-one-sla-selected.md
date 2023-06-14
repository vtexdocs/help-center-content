---
title: 'Ordem de assinatura geradora de erro ""O mesmo item não pode ter mais de um SLA selecionado"".'
id: 2aBMa8ncalkqSm2s868i1q
status: PUBLISHED
createdAt: 2022-09-29T13:31:57.984Z
updatedAt: 2022-11-25T22:01:16.295Z
publishedAt: 2022-11-25T22:01:16.295Z
firstPublishedAt: 2022-09-29T13:32:01.838Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: ordem-de-assinatura-geradora-de-erro-o-mesmo-item-nao-pode-ter-mais-de-um-sla-selecionado
locale: pt
kiStatus: Backlog
internalReference: 658185
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Em cenários de pedidos de assinatura onde o mesmo item de compra acaba sendo dividido em entradas diferentes, como a compra de 10 unidades do mesmo item sendo apresentada como 7 unidades (A) e 3 unidades (B), o fluxo de execução do ciclo de assinatura pode eventualmente escolher métodos de entrega diferentes entre o item A e B, mesmo que sejam a mesma SKU.
Nesta situação, será gerado o erro "O mesmo item não pode ter mais de um SLA selecionado".
Esta seleção cruzada pode acontecer ao avaliar qual é o método de entrega mais barato para cada item (A e B, separadamente).



## Simulação


A simulação deste cenário requer uma combinação muito complexa de variáveis entre os sistemas envolvidos no fluxo de compra.



## Workaround


N/A

