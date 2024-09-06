---
title: 'Promotions catalog conditions apply to skucomponent even when only adding skukit to cart'
id: g9V2wsKiakxYs4982oPDH
status: PUBLISHED
createdAt: 2024-08-22T13:29:07.146Z
updatedAt: 2024-08-22T13:34:20.455Z
publishedAt: 2024-08-22T13:34:20.455Z
firstPublishedAt: 2024-08-22T13:29:07.960Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slug: promotions-catalog-conditions-apply-to-skucomponent-even-when-only-adding-skukit-to-cart
locale: en
kiStatus: Backlog
internalReference: 1085500
---

## Summary


Currently, when adding a promotion restriction that has a catalog rule (i.e. categories, skus, brands, collections, ...) and this set contains the component of a SKU, but not the kit itself, the intent, of the user, originally, is to give this given discount only for when the component is bought separately.

However, if this kind of restriction is configured, if the skukit is added to the cart, the discount is still given to it.


##

## Simulation


1 - create a SKU kit with 1+ components.
2 - create a promotion that gives a discount to the component, but not the kit.
3 - add the kit to the cart, the discount will be given, as if it was the component too.


##

## Workaround


Either add other promotion restrictions or do not use components separately from kits to promotions





