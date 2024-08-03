---
title: 'O=OrderByPriceASC (ou OrderByPriceDESC) pode gerar o pedido errado'
id: 2XCplZQutilKeD2bNnjYDx
status: PUBLISHED
createdAt: 2022-05-20T15:48:15.215Z
updatedAt: 2024-06-21T11:29:11.233Z
publishedAt: 2024-06-21T11:29:11.233Z
firstPublishedAt: 2022-05-20T15:48:16.089Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slug: oorderbypriceasc-ou-orderbypricedesc-pode-gerar-o-pedido-errado
locale: pt
kiStatus: Backlog
internalReference: 582861
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


**O=OrderByPriceASC** (ou **OrderByPriceDESC**) pode usar a política errada para pedir preços. Além disso, como o preço indexado tem apenas uma casa decimal, a segunda casa decimal do preço não será considerada.

Além disso, os preços de vendedores não abrangentes não são considerados na classificação. Como resultado, as lojas regionalizadas no Portal não podem usar o parâmetro **orderByPrice**.

## Simulação



## Workaround



