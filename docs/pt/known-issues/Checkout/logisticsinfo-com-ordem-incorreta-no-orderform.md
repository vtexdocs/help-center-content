---
title: "logisticsInfo com ordem incorreta no orderForm"
id: 3rrMW0ekZcgROOkTyxWCIJ
status: PUBLISHED
createdAt: 2025-01-28T14:43:31.712Z
updatedAt: 2025-01-29T14:39:39.473Z
publishedAt: 2025-01-29T14:39:39.473Z
firstPublishedAt: 2025-01-28T14:43:32.566Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: logisticsinfo-com-ordem-incorreta-no-orderform
locale: pt
kiStatus: Backlog
internalReference: 1170225
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Os itens em `shippingData.logisticsInfo` não são ordenados de acordo com a propriedade `itemIndex`, causando inconsistências apenas na interface de checkout, mas ainda é possível fazer o pedido.

## Simulação


Não há um processo passo a passo simples para replicar esse cenário, mas a verificação do orderForm via API.



## Workaround


N/A




