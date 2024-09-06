---
title: 'La API de uso de cupones GET no muestra varios pedidos del mismo cupón.'
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
slug: la-api-de-uso-de-cupones-get-no-muestra-varios-pedidos-del-mismo-cupon
locale: es
kiStatus: Backlog
internalReference: 326662
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.



La API de uso de cupones GET https://developers.vtex.com/vtex-rest-api/reference/catalog-api-overview no está listando actualmente todos los pedidos cerrados en los que se utilizó este cupón, está listando total-1



##

## Simulación


1) Cierre dos pedidos distintos con el mismo cupón.

2) Obtener los datos de uso de este cupón https://developers.vtex.com/vtex-rest-api/reference/coupons#getusage

3) Se listará el total menos un pedido.



##

## Workaround


n/a

