---
title: 'Valor incorreto da MELI quando o cliente tem cupom na MELI'
id: 3PvNKqG2BMZDBLLVuriIHy
status: PUBLISHED
createdAt: 2024-01-22T11:58:00.747Z
updatedAt: 2024-10-01T12:14:48.088Z
publishedAt: 2024-10-01T12:14:48.088Z
firstPublishedAt: 2024-01-22T11:58:01.431Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: meli-incorrect-value-when-client-has-coupon-on-meli
locale: pt
kiStatus: Fixed
internalReference: 969297
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.



Atualmente, o cliente usou um cupom no MELI, há uma variedade de tipos de cupom no MELI. E alguns deles não estão incluídos nos cálculos do VTEX OMS.

## Simulação



Na VTEX OMS, o valor da ordem pode ser diferente do que a MELI vendeu ao cliente, devido a alguns tipos de cupons que não estão sendo considerados durante a criação da ordem na VTEX.



## Workaround



Para pedidos ME1, se o vendedor precisa ter o valor correto do pedido, a fim de enviar o valor da fatura para MELI, ele pode usar o campo no VTEX OMS chamado "total_paid_amount", este campo está atualmente considerando todos os valores de cupom.





