---
title: 'Substituição de pedidos por outro canal de vendas'
id: 2gShXcwLLHu7R8JyPjP0W6
status: PUBLISHED
createdAt: 2024-02-16T13:02:17.686Z
updatedAt: 2024-02-16T13:05:20.998Z
publishedAt: 2024-02-16T13:05:20.998Z
firstPublishedAt: 2024-02-16T13:02:18.609Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: substituicao-de-pedidos-por-outro-canal-de-vendas
locale: pt
kiStatus: Backlog
internalReference: 982965
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Identificamos que não é possível substituir uma SKU no pedido se o canal de vendas (SC), igual a 1, não estiver disponível para a conta.

Por exemplo, a conta A não tem canal de vendas=1, apenas SC=2, na solicitação de substituição do pedido estamos enviando canal de vendas=1 e não 2.

## Simulação


A conta A não tem canal de vendas=1, apenas SC=2, na solicitação de substituição de pedido, quando eles solicitam a substituição de uma SKU, estamos enviando o canal de vendas=1 e não o 2, portanto, não é possível realizar a substituição

## Workaround


N/A.





