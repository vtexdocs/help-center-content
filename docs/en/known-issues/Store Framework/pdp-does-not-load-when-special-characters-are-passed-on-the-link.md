---
title: "PDP does not load when special characters are passed on the link"
id: 442RD31ld9TYWHAECLjTmu
status: PUBLISHED
createdAt: 2023-03-14T17:13:19.750Z
updatedAt: 2023-03-14T17:13:20.317Z
publishedAt: 2023-03-14T17:13:20.317Z
firstPublishedAt: 2023-03-14T17:13:20.317Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: pdp-does-not-load-when-special-characters-are-passed-on-the-link
locale: en
kiStatus: Backlog
internalReference: 770893
---

## Summary


There's some special cases where the store have a link to a page in which is passed a special character like '#' to pass a property, for example, the item color, which causes the PDP not to load on the first time, instead it keeps on trying to load, but when the page is refreshed it does load correctly.

This behavior should not block the page to load due to some configurations the store can made, such as, to display the colors of a product in search pages.


##

## Simulation


Check for a store that have a configuration like color set on the search settings to be splitted and them go to the search page of some product and reach the PDP from it, if the property is passed on the URL it will crash due to the link created.


##

## Workaround


Currently the store can remove the split on the search side.





