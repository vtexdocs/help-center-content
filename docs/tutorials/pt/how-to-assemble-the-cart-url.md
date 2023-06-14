---
title: Como montar a URL do carrinho
id: u3Tj5wagnukYwG84IQU06
status: PUBLISHED
createdAt: 2017-10-02T17:14:38.584Z
updatedAt: 2019-12-31T15:19:22.357Z
publishedAt: 2019-12-31T15:19:22.357Z
firstPublishedAt: 2017-10-02T17:39:15.192Z
contentType: tutorial
productTeam: Shopping
author: 1nsS1IgG3WWQ4cA8e2qsw6
slug: como-montar-a-url-do-carrinho
legacySlug: como-montar-a-url-do-carrinho
subcategory: 6XAvmMxp7yyY06ewYMuggs
---

Em algumas situações, os clientes solicitam aos lojistas o link com o carrinho de compras já montado com todos os produtos. Para montar a URL do carrinho é necessário usar __/checkout/cart/add?__ no final da URL padrão do site, seguida destes parâmetros:

- __Política Comercial:__ `sc={ID da Política Comercial}`
- __SKU:__ `sku={ID do SKU}`
- __Quantidade:__ `qty={Quantidade do produto em questão}`
- __Seller:__ `seller={ID do Seller}`

Vale destacar que só é necessário usar a Política Comercial uma vez na URL. Já os outros três parâmetros (SKU, Quantidade, Seller) devem ser repetidos toda vez que for adicionado mais um produto no carrinho.

Ao juntar cada um deles na URL, deve-se separa-los por "&". No final, a URL fica assim:

`https://www.seusite.com.br/checkout/cart/add?sc={ID da Política Comercial}&sku={ID do SKU}&qty={Quantidade}&seller={Id do Seller}`
 
Seguem abaixo dois exemplos:
- Com 1 produto no carrinho: `https://www.seusite.com.br/checkout/cart/add?sc=1&sku=22&qty=1&seller=1`
- Com 2 produtos no carrinho: `https://www.seusite.com.br/checkout/cart/add?sc=1&sku=22&qty=1&seller=1&sku=73&qty=3&seller=1`
