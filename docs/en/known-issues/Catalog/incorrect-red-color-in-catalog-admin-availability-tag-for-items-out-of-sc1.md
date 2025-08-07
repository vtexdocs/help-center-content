---
title: "Incorrect red color in catalog admin availability tag for items out of sc=1"
id: 16UZBv5zFB2pwSm5WMritS
status: PUBLISHED
createdAt: 2025-04-16T21:43:49.877Z
updatedAt: 2025-04-16T21:43:50.461Z
publishedAt: 2025-04-16T21:43:50.461Z
firstPublishedAt: 2025-04-16T21:43:50.461Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: incorrect-red-color-in-catalog-admin-availability-tag-for-items-out-of-sc1
locale: en
kiStatus: Backlog
internalReference: 1212652
---

## Summary


Currently, the availability check display in the catalog admin has 3 different types of color to signalize the availability of an item:

Green = active and available for purchase
Red = active, but unavailable for purchase
Blank = inactive

However, the Red status only considers the availability for the default sales channel of the store (usually sc=1). Hence, if an item is available for other sales channels but not the default, it should still display a green tag, but it instead displays as red.


##

## Simulation


1 - For a store with multiple sales channels, create a product with availability for a sales channel other than sc=1
2 - Check its catalog availability visual tag, the one that can be seen in the catalog listing

 ![](https://vtexhelp.zendesk.com/attachments/token/OpqtMAd4kvj5EW4HUxlAdrBo0/?name=image.png)

3 - even with the item available for other sales channels, such as sc=2, the tag will only go green if its active and available for sc=1.


##

## Workaround


-





