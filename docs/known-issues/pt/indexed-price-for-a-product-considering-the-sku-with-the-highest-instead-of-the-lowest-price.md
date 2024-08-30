---
title: 'Preço indexado para um produto considerando a SKU com o preço mais alto em vez do mais baixo'
id: 333mavl9dvgO4Jrgv8ECE6
status: PUBLISHED
createdAt: 2023-05-09T14:39:56.338Z
updatedAt: 2023-08-18T17:24:09.314Z
publishedAt: 2023-08-18T17:24:09.314Z
firstPublishedAt: 2023-05-09T14:39:56.771Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slug: preco-indexado-para-um-produto-considerando-a-sku-com-o-preco-mais-alto-em-vez-do-mais-baixo
locale: pt
kiStatus: Fixed
internalReference: 822120
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


O preço indexado, que é um valor único para todo o produto (junto com seus SKUs) e usado para classificar e filtrar os produtos na Intelligent Search, está considerando o preço mais alto entre os SKUs, enquanto o esperado é considerar o SKU com o preço mais baixo - junto com regras adicionais sobre a política comercial e os vendedores dos SKUs.

## Simulação



- para ter um item com vários SKUs com preços diferentes
- aplicar um filtro por preço, geralmente por meio do filtro "faixa de preço"
- observe que ele será baseado na SKU mais cara em vez da mais barat

## Workaround


N/A




