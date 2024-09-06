---
title: 'A API GET Coupon Usage não lista vários pedidos para o mesmo cupom'
id: 7B9Qlcx2XMGxWj9OB5Xl8n
status: PUBLISHED
createdAt: 2023-09-08T17:54:13.642Z
updatedAt: 2023-09-08T17:54:14.220Z
publishedAt: 2023-09-08T17:54:14.220Z
firstPublishedAt: 2023-09-08T17:54:14.220Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slug: a-api-get-coupon-usage-nao-lista-varios-pedidos-para-o-mesmo-cupom
locale: pt
kiStatus: Backlog
internalReference: 326662
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.



## Simulação


1) Feche dois pedidos distintos com o mesmo cupom.

2) Obter os dados de uso desse cupom https://developers.vtex.com/vtex-rest-api/reference/coupons#getusage

3) Será listado o total menos um pedido.

## Workaround


n/a

