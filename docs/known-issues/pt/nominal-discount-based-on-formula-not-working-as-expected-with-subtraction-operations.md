---
title: 'O desconto nominal baseado na fórmula não está funcionando como esperado com operações de subtração'
id: 50YsRuiICJNdH2e1QqYnn0
status: DRAFT
createdAt: 2023-08-24T13:30:36.935Z
updatedAt: 2023-08-28T20:44:40.744Z
publishedAt: 
firstPublishedAt: 2023-08-24T13:30:37.863Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slug: o-desconto-nominal-baseado-na-formula-nao-esta-funcionando-como-esperado-com-operacoes-de-subtracao
locale: pt
kiStatus: Backlog
internalReference: 886980
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Ao criar uma promoção usando o desconto nominal com base na fórmula, o comerciante pode usar as seguintes operações de acordo com esta documentação: https://help.vtex.com/en/tutorial/promocao-regular-com-desconto-nominal-baseado-em-formula--2Pwrq6THyGViNedQG381jV
 ![](https://vtexhelp.zendesk.com/attachments/token/1EhryrRZDsiXZ31kaSV2VcegW/?name=image.png)

No entanto, ao usar a operação de subtração, o valor do desconto é substituído pelo valor total do pedido.

## Simulação


Crie uma promoção usando o desconto nominal com base na fórmula e use uma operação de subtração, como esta:
 ![](https://vtexhelp.zendesk.com/attachments/token/3wIEiPGtF9oX2daeQ3F3AZqCk/?name=image.png)

Verifique no checkout se o desconto foi substituído pelo que deveria ser o valor total do pedido:
 ![](https://vtexhelp.zendesk.com/attachments/token/r2bWktL4reNcVnnhSqr4hT0FC/?name=image.png)

## Workaround


N/A





