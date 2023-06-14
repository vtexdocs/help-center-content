---
title: Valores errados nos destinatários de uma transação dividida com cancelamento parcial.
id: 5srb8YPqWIn5D5ZpJVs1u7
status: PUBLISHED
createdAt: 2022-03-03T18:38:02.299Z
updatedAt: 2023-05-25T15:06:30.437Z
publishedAt: 2023-05-25T15:06:30.437Z
firstPublishedAt: 2022-03-03T18:38:02.666Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: valores-errados-nos-destinatarios-de-uma-transacao-dividida-com-cancelamento-parcial
kiStatus: Backlog
internalReference: 489481
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Em um cenário de Payout Split, quando há um cancelamento parcial antes da captura, não alteramos os campos dos destinatários para que os valores para quando cada participante receberá sejam diferentes do correto, ou seja, os valores dentro dos destinatários da liquidação aparecem como se não tivesse havido cancelamento parcial.

##


## Simulação


1. Fazer uma compra com o produto de um vendedor em um mercado.
2. Fazer um cancelamento parcial após a aprovação, mas antes da captura.
3. 3. Verificar se os valores nos destinatários dentro do pedido de liquidação são os valores originais, sem contar o cancelamento parcial




## Workaround


Não há solução.

