---
title: "Outdated indexed information when performing 2 product changes in a row."
id: 66aX8MktRogeUD9bbTo0vF
status: PUBLISHED
createdAt: 2023-09-26T14:44:57.146Z
updatedAt: 2023-09-26T14:44:57.895Z
publishedAt: 2023-09-26T14:44:57.895Z
firstPublishedAt: 2023-09-26T14:44:57.895Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: outdated-indexed-information-when-performing-2-product-changes-in-a-row
locale: en
kiStatus: No Fix
internalReference: 907428
---

## Summary


For stores using the legacy search engine, if two changes of a product's data are done in a quick succession (i.e. you've inactivated a product and then reactivated it right after that), and the latter change returns the product's information to what it was right before, the state of said item can be stuck in the first change, as the latter is not properly recognized.

This issue doesn't happen in stores using the intelligent search application.


##

## Simulation


1 - get an active item in your store and inactivate it
2 - Right after that (< 5min), reactivate it.
3 - After a few minutes, check your product: it'll be not showing in the store, despite it being set to do so. (in other words, it got "stuck" in that middle state).


##

## Workaround


1 - Reindex said products after 5+ min of experiencing the issue.
2 - Use the Intelligent search engine, which doesn't face this issue at all.
3 - Avoid performing 2+ changes for a product in a row in which the latter change just reverts the former.





