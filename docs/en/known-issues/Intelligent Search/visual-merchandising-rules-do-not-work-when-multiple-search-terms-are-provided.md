---
title: 'Visual merchandising rules do not work when multiple search terms are provided'
id: 6FkfnnvFiYXYqPgMrpDgM1
status: PUBLISHED
createdAt: 2024-06-20T21:41:14.250Z
updatedAt: 2024-06-20T21:41:15.088Z
publishedAt: 2024-06-20T21:41:15.088Z
firstPublishedAt: 2024-06-20T21:41:15.088Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: visual-merchandising-rules-do-not-work-when-multiple-search-terms-are-provided
locale: en
kiStatus: Backlog
internalReference: 1053623
---

## Summary


Although it's possible to provide multiple search terms while creating a visual merchandising rule for the Intelligent Search, they can not be used. The rule will be considered invalid and will not be applied.

Different search terms can return completely different products in a search result in a different order, which is incompatible with the action of pinning (_promote_) or hiding (_remove_) some products that a visual rule offers.

As an invalid action, this condition is not expected to be provided and will be removed from the interface.


##

## Simulation



- Create a visual merchandising rule
- Apply multiple search terms as a condition for the rule
- Select some products to pin and/or hide
- Search for one of these search terms and observe that the results won't have the rule applied
- It's also possible to observe the same through the explained search function from the admin, which will highlight that no rules were applied to the search


##

## Workaround


This objective is achieved through manual merchandising rules. The action of pinning and hiding products is directly compatible with the promote and remove actions for a manual rule.




