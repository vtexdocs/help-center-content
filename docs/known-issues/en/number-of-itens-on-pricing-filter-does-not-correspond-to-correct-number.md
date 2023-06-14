---
title: 'Number of itens on Pricing filter does not correspond to correct number'
id: 1FyjpY1K6JfAQ0gRIuXyuO
status: PUBLISHED
createdAt: 2022-03-16T19:37:02.943Z
updatedAt: 2022-11-25T22:12:33.361Z
publishedAt: 2022-11-25T22:12:33.361Z
firstPublishedAt: 2022-03-16T19:37:03.370Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slug: number-of-itens-on-pricing-filter-does-not-correspond-to-correct-number
locale: en
kiStatus: Backlog
internalReference: 371405
---

## Summary


On the Pricing UI, we are able to filter by brand or category. After making a filter, the UI returns only the products on the filter, but the total items returned on the menu is actually the total without no filter, and the data shown are filtered as expected.




## Simulation


- Go to `.myvtex.com/admin/pricing/#/prices`
- Make a filter by brand or category;
- Check items value;


## Workaround


Despite the wrong UI information, if we export the filter, it will return only the products filtered. It's only a misunderstood information on the number of items on the UI.

