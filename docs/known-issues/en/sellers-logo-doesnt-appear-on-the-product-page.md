---
title: "Seller's logo doesn't appear on the product page"
id: 1WIIPZibFegYSsKIIscIse
status: PUBLISHED
createdAt: 2018-05-08T19:35:42.171Z
updatedAt: 2022-12-22T14:39:53.593Z
publishedAt: 2022-12-22T14:39:53.593Z
firstPublishedAt: 2018-05-08T23:02:31.503Z
contentType: knownIssue
productTeam: Channels
author: 6qOjO5gpEs8scQ8OugaEaW
tag: Portal
slug: sellers-logo-doesnt-appear-on-the-product-page
locale: en
kiStatus: Backlog
internalReference: 
---

## Summary

When linking a product from the Suggestion module to a seller that doesn't have a registered logo and subsequently registering a logo for the seller, the product page does not show the logo, only the name of the registered seller.


## Simulation

1. Register a [new seller](/en/tutorial/configuring-the-seller) without the logo.
2. Receive and [approve products](/en/tutorial/approving-suggestions-for-skus) from this seller at the Suggestion module.
3. Register the seller's logo.
4. Access the product page in the marketplace.

## Workaround

The first option is to force the product reindexation in the marketplace.

If this action doesn't solve the issue, you will need to exclude the product in Sellers SKUs ([Delete seller products](/en/faq/what-is-the-difference-between-delinking-and-deleting-seller-sku)). After deletion, you must ask the seller to perform the reindexation of the product in order for the marketplace to be notified again.

