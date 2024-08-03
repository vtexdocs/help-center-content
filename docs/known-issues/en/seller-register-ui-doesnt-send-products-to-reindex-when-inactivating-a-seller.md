---
title: "Seller register UI doesn't send products to reindex when inactivating a seller"
id: 0iAMGhIOKDyMbEykB4pfx
status: PUBLISHED
createdAt: 2023-10-06T19:45:08.963Z
updatedAt: 2023-10-06T19:45:29.372Z
publishedAt: 2023-10-06T19:45:29.372Z
firstPublishedAt: 2023-10-06T19:45:09.832Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slug: seller-register-ui-doesnt-send-products-to-reindex-when-inactivating-a-seller
locale: en
kiStatus: Backlog
internalReference: 915970
---

## Summary


When using the new seller experience UI, /admin/sellers, the action of inactivating a seller should reindex its related products so they can be removed from the associated marketplaces, which isn't currently happening.


##

## Simulation


Access the aforementioned UI and, for a store that is integrating with a marketplace, with an affiliate endpoint (https://help.vtex.com/en/tutorial/como-configurar-afiliado--tutorials_187) and then try inactivating a seller available for this same trade policy.

The items, in the marketplace, will not be updated.


##

## Workaround


Either reindex the base or use the legacy seller UI ( https://accountname.vtexcommercestable.com.br/admin/site/seller.aspx), which does trigger the indexing properly.





