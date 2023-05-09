---
title: Unexpected multiple pickup point selection for the same seller when not every item is available through the same option
id: 1ILqLtP5CgtO6fhqh1dAgm
createdAt: 2022-08-16T01:03:28.941Z
updatedAt: 2023-05-08T18:34:26.625Z
publishedAt: 2023-05-08T18:34:26.625Z
firstPublishedAt: 2022-08-16T01:03:29.934Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: unexpected-multiple-pickup-point-selection-for-the-same-seller-when-not-every-item-is-available-through-the-same-option
status: Backlog
internalReference: 467702
---

## Summary



The pickup point components at the checkout front end are prepared to deal with a single option by each seller. Items from different regular sellers are managed separately, but if it's a whitelabel seller, they'll be considered in the same group.

If not every item is available under the same pickup point option for the same seller, it may lead to a wrong state, which includes not dealing correctly with the items from an option selected in a second moment or even now showing correctly the additional options applied to different items in the orderForm, focusing only in the first pickup point option.

The expected scenario is that any previously selected option should be removed to apply only the last one selected by the user.


##

## Simulation




- to have a cart with an address where there are no pickup options covering all the items,
- interact with the different pickup options to see unexpected combinations


##

## Workaround


Currently, there is no workaround for this scenario.




