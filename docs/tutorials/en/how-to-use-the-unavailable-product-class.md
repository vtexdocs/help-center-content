---
title: 'How to use the unavailable product class from the SKU selection control'
id: 62t7maHVvyAsqkSmi62g82
status: PUBLISHED
createdAt: 2018-01-18T18:10:19.780Z
updatedAt: 2023-03-29T01:05:52.326Z
publishedAt: 2023-03-29T01:05:52.326Z
firstPublishedAt: 2018-01-22T12:58:23.819Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_24
slug: how-to-use-the-unavailable-product-class
legacySlug: how-to-use-the-unavailable-product-class
subcategory: 2g6LxtasS4iSeGEqeYUuGW
---

<div style="background-color:#FCF8F2; border-left: 2px solid #F0AD4E; border-top-left-radius: 2px; border-bottom-left-radius: 2px; padding: 15px; margin-bottom: 10px">
Tutorial valid only for Legacy CMS Stores.
</div>

## What is the unavailable product class

The SKU selection control (`<vtex.cmc:skuSelection />`) allows the store user to select one of multiple SKUs for a product. Usually it's applied to the cart, so that the customer chooses, for example, a shirt between the size options S, M or L; a 110v or 220v refrigerator; or a white or black keyboard.

That is, given an SKU specification (size, voltage, color etc.), the SKU selector displays the available options for the user choice.

__If an SKU with a certain specification is not available in stock, the store may visually communicate this unavailability.__

In the example below, sizes P and G are not available.

![classeIndisponivel](//images.contentful.com/alneenqid6w5/6dTacclHvqeaMwws8kqU8K/2d0d79d95dc521626eb1ba5c1c056da2/classeIndisponivel.png)

## Including the unavailable product class

When the SKU selection control (`<vtex.cmc:skuSelection />`) is included on a product page, the unavailable product class is automatically added whenever an SKU is unavailable.

For example, a customer from your store entered the jeans pants product page, and the SKUs available in stock for this product are the ones with sizes 38 and 40, but not the one with size 42.

If the template of your currently active product page has an SKU selection control, the SKU with size specification 42 will automatically receive the unavailability class.

You can customize your CSS file so that this class displays, for example, a cut or gray number, or whatever you want.

## Determining to which specification the classed will be assigned

<div class="alert alert-warning">
The unavailable product class is only assigned to the specification that <b>last</b> appears in the SKU specifications list in the Catalog module.
</div>

For example, in the case of a SKU that only the `Tamanho` specification will receive the unavailability class.

If, in this case, you wanted the `Faixa` specification to receive the class instead, you would simply need to reverse the order of the specifications.
