---
title: "Incomplete billingAddress apesar de isBillingAddressDifferent: false"
id: 2CeCL5GPjrf04jXrTmTRMW
status: PUBLISHED
createdAt: 2025-07-01T13:41:53.688Z
updatedAt: 2025-07-01T14:03:58.548Z
publishedAt: 2025-07-01T14:03:58.548Z
firstPublishedAt: 2025-07-01T13:41:54.340Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: incomplete-billingaddress-apesar-de-isbillingaddressdifferent-false
locale: pt
kiStatus: Backlog
internalReference: 1252301
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


O `billingAddress` está incompleto, faltando campos como `street`, `number`, `neighborhood` e `postalCode`. Em alguns cenários pouco claros, mesmo quando o campo `isBillingAddressDifferent` é definido como `false` (indicando que o `billingAddress` deve ser o mesmo que o `shippingAddress`), o `billingAddress` acaba sendo diferente e, muitas vezes, uma versão incompleta do `shippingAddress`.

## Simulação


Esse problema não pode ser reproduzido de forma confiável.




## Workaround


Não há nenhuma solução alternativa conhecida.





