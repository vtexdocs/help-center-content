---
title: 'Message displayed when clicking the Buy Button prevents customers from proceeding with the purchase'
id: 3i3eys6d4MWnt0E611OdPH
status: PUBLISHED
createdAt: 2021-10-13T16:50:22.116Z
updatedAt: 2022-12-22T20:40:58.474Z
publishedAt: 2022-12-22T20:40:58.474Z
firstPublishedAt: 2021-10-13T16:56:30.403Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: message-displayed-when-clicking-the-buy-button-prevents-customers-from-proceeding-with-the-purchase
locale: en
kiStatus: Backlog
internalReference: 
---

## Summary

When multiple SKUs of the same product have the same combination of specifications and the customer selects one of them on the product page, the message _"Por favor selecione o tamanho desejado"_ (please select a size) pops up, and they can’t proceed to add the product to the shopping cart.

## Simulation

1. Create a product that has more than two SKUs with at least two specifications and two values for each specification.
2. Select the same combination of specification values for each SKU (see an example below).
3. Go to the product page and try to buy the product. 

Example: 

You have the product shirt with four SKUs. It has the specifications **"Size"** and **"Color"**, with the options **"S"**, **"M"** and **"L"** for size and **"Red"** or **"Blue"** for **Color**. 

On the `SkuForm.aspx` page, please select the following specifications:

- **SKU #1:** Size = L and Color = Red
- **SKU #2:** Size = L and Color = Red
- **SKU #3:** Size = M and Color = Red
- **SKU #4:** Size = M and Color = Blue 

If you select either SKU #1 or SKU #2 on the product page, you won't be able to proceed to checkout due to the problem mentioned above.


## Workaround

A possible workaround is to edit the specification values of one of the SKUs that have the same values.

