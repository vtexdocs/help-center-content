---
title: "The /_search route of the Gift card system intermittently does not return vouchers when the REST-range header is less than 10."
id: 1WgbuMggOFUYFm2HseAxnd
status: PUBLISHED
createdAt: 2023-03-13T22:29:35.009Z
updatedAt: 2023-03-13T22:29:35.922Z
publishedAt: 2023-03-13T22:29:35.922Z
firstPublishedAt: 2023-03-13T22:29:35.922Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: the-search-route-of-the-gift-card-system-intermittently-does-not-return-vouchers-when-the-restrange-header-is-less-than-10
locale: en
kiStatus: Backlog
internalReference: 770337
---

## Summary


In a scenario where the customer has loyalty vouchers and reaches the checkout, it is expected that the /_search route returns all vouchers linked to that user. However, the checkout passes the header with REST-range = 0-9. In some accounts, this range is not sufficient and the API returns an empty array. When we simulate the call directly to the API with a range greater than 10, we are able to retrieve at least one voucher.


##

## Simulation


To have a store in this situation and make a POST to this route https://developers.vtex.com/docs/api-reference/giftcard-api#post-/giftcards/_search passing the header REST-range=giftcard=0-9.


##

## Workaround


Use a number larger than the range of 0-9. However, the checkout does not customize this field.





