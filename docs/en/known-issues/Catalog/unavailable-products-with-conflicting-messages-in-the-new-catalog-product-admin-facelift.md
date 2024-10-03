---
title: 'Unavailable products with conflicting messages in the new catalog product admin (Facelift)'
id: 637P8whSEQWtERrXtndWsH
status: PUBLISHED
createdAt: 2024-09-10T13:40:10.557Z
updatedAt: 2024-09-10T13:40:11.642Z
publishedAt: 2024-09-10T13:40:11.642Z
firstPublishedAt: 2024-09-10T13:40:11.642Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: unavailable-products-with-conflicting-messages-in-the-new-catalog-product-admin-facelift
locale: en
kiStatus: Backlog
internalReference: 1095510
---

## Summary


On the product page `/admin/catalog-products`, an unavailable product will have the messages `"Active the product to make it visible in the store"` and `"Pending Product. Check if this product has all the required information, prices, inventory, and logistics settings."`.
This does not mean that the product is pending indexing or inactive.


##

## Simulation



- Create a product
- Make this product unavailable
- See the message on the admin `/admin/catalog-products`.


##

## Workaround


Use the legacy admin `{account}.vtexcommercestable.com.br/admin/site/Produto.aspx`




