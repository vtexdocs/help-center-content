---
title: 'How to assemble the cart URL'
id: u3Tj5wagnukYwG84IQU06
status: PUBLISHED
createdAt: 2017-10-02T17:14:38.584Z
updatedAt: 2019-12-31T15:19:22.357Z
publishedAt: 2019-12-31T15:19:22.357Z
firstPublishedAt: 2017-10-02T17:39:15.192Z
contentType: tutorial
productTeam: Shopping
author: 1nsS1IgG3WWQ4cA8e2qsw6
slugEN: how-to-assemble-the-cart-url
locale: en
legacySlug: how-to-assemble-the-cart-url
subcategoryId: 6XAvmMxp7yyY06ewYMuggs
---

In some situations, customers ask stores for the link to the shopping cart already assembled with all products. To mount the cart URL you need to use __/checkout/cart/add?__ at the end of the website's default URL, followed by these parameters:

- __Sales Policy:__ `sc={Sales Policy ID}`
- __SKU:__ `sku={SKU ID}`
- __Quantity:__ `qty={Quantity of the product}`
- __Seller:__ `seller={Seller ID}`

It's worth noting that it is only necessary to use the sales policy once in the URL. The other three parameters (SKU, Quantity and Seller) must be repeated every time a new product is added to the cart.

When you join each of them in the URL, you must separate them by "&". In the end, the URL looks like this:

`https://www.yourwebsite.com.br/checkout/cart/add?sc={Sales Policy ID}&sku={SKU ID}&qty={Quantity}&seller={Seller ID}`
 
See below two examples:
- With 1 product in the cart: `https://www.yourwebsite.com.br/checkout/cart/add?sc=1&sku=22&qty=1&seller=1`
- With 2 products in the cart: `https://www.yourwebsite.com.br/checkout/cart/add?sc=1&sku=22&qty=1&seller=1&sku=73&qty=3&seller=1`
