---
title: 'Products showing flag and discount after promotion ended'
id: 21qXD9XIfaxsxCH4jMGLJX
status: PUBLISHED
createdAt: 2024-06-07T19:50:09.302Z
updatedAt: 2024-06-07T19:50:10.154Z
publishedAt: 2024-06-07T19:50:10.154Z
firstPublishedAt: 2024-06-07T19:50:10.154Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slug: products-showing-flag-and-discount-after-promotion-ended
locale: en
kiStatus: Backlog
internalReference: 383911
---

## Summary


Sometimes promotion flags and discounts are displayed on PLP and PLP after the promotion's expiration date. This happens because the promotion doesn't trigger the product indexation, resulting in the wrong exhibition of the discount.


##

## Simulation


1- Create a promotion with a flag
2- Set an expiration date
3- Check that the promotion continues to be active on PLP and PDP



##

## Workaround


Reindex the products included in the promotion

