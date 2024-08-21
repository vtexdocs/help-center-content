---
title: 'getCurrentProductWithVariations da VTEX.js traz dados do Componente SKU e não do KIT SKU.'
id: 1m1bMbNXZVpQo9bQG1iSjn
status: PUBLISHED
createdAt: 2022-03-16T16:35:51.214Z
updatedAt: 2024-02-16T20:24:03.691Z
publishedAt: 2024-02-16T20:24:03.691Z
firstPublishedAt: 2022-03-16T16:35:51.652Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slug: getcurrentproductwithvariations-da-vtexjs-traz-dados-do-componente-sku-e-nao-do-kit-sku
locale: pt
kiStatus: No Fix
internalReference: 324416
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Função `getCurrentProductWithVariations` da VTEX.js traz dados do Componente SKU em vez do KIT SKU.



## Simulação


- Acesse um PDP a partir de um produto KIT;
- Use a função getCurrentProductWithVariations para obter dados do KIT;
- Verifique se a resposta é dos componentes do SKU, e não do SKU do KIT.



## Workaround


Utilize a função 'getProductWithVariations({productId})`como uma alternativa de trabalho. Neste caso, temos que utilizar a ID do Produto deste KIT.

