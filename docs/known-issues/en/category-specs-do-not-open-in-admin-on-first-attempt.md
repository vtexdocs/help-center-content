---
title: Category specs do not open in admin on first attempt
id: 3201pbbSjB9rNzGP8HA6ow
status: PUBLISHED
createdAt: 2022-09-23T14:29:09.527Z
updatedAt: 2022-11-25T21:43:23.064Z
publishedAt: 2022-11-25T21:43:23.064Z
firstPublishedAt: 2022-09-23T14:29:10.468Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: category-specs-do-not-open-in-admin-on-first-attempt
kiStatus: Backlog
internalReference: 664419
---

## Summary


Sometimes, when trying to open a product or sku specification in the categories admin the page does not load properly and is refreshed back to the categories tree initial page.

However, this behavior does not happen at the second attempt to open them or using vtexcommercestable on admin.




## Simulation


The simulation won't be precise because this does not happen to all accounts all the time.

1. Go to the category tree admin and select a category;
2. Try to open the product specifications on "Actions";
3. Check that the page will be refresh and you'll get redirected to the category tree admin again;
4. Try to open a second time and you'll actually get to the specifications page.



## Workaround


Use vtexcommercestable admin.
Open the specifications at the second attempt.

