---
title: 'Price Range Slider defaults to minimum value after selecting a filter'
id: 15ABXMTT9cqieizxYWqC2V
status: PUBLISHED
createdAt: 2023-11-08T13:34:50.960Z
updatedAt: 2023-11-08T13:34:51.373Z
publishedAt: 2023-11-08T13:34:51.373Z
firstPublishedAt: 2023-11-08T13:34:51.373Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: price-range-slider-defaults-to-minimum-value-after-selecting-a-filter
locale: en
kiStatus: Backlog
internalReference: 843442
---

## Summary


This is a price range, it is a slider and has two selectors(markers), one for min and one for max so it knows where to position itself on the slider.
When applying a brand filter to it the selector will not move its min value to the brand min values, it will keep the default min value and the marker will appear out of the range.


##

## Simulation


1 - Access a Category page and notice the price range filter and its min e max values.
2- Select a filter by checking it on the left (category2/3/4)
3- With the filter applied, notice that the price range slider will keep the min value as before and will be out of the slider range.

 ![](https://vtexhelp.zendesk.com/attachments/token/RuhwOHLwbPslKpeZ4VUq4Y995/?name=image.png)

Filter with the behavior as described for the min value.


##

## Workaround


There is no workaround available.





