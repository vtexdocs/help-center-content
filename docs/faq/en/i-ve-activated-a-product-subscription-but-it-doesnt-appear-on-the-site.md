---
title: "I've activated a product subscription, but it doesn't appear on the site. Why?"
id: 4HTtsuhjckHBgkBIyrH8tz
status: PUBLISHED
createdAt: 2019-01-28T19:20:20.661Z
updatedAt: 2021-04-30T14:35:48.244Z
publishedAt: 2021-04-30T14:35:48.244Z
firstPublishedAt: 2019-01-28T19:20:54.475Z
contentType: frequentlyAskedQuestion
productTeam: Marketing & Merchandising
author: 7FpKZ0rc6k4WqeymES80cw
slug: i-ve-activated-a-product-subscription-but-it-doesnt-appear-on-the-site
locale: en
legacySlug: i-ve-activated-a-product-recurrence-but-it-doesnt-appear-on-the-site
---

>⚠️ **Warning:** there are two ways to configure collections, through the CMS or the Collection module (Beta). This article is about how to <a href = "https://help.vtex.com/en/tutorial/adding-collections-cms--2YBy6P6X0NFRpkD2ZBxF6L">configure collections through the CMS</a>.

Whenever you change or create a subscription, you need to reindex your SKUs to make it work properly. In doing so, you will be saving the information that such SKU has an attachment (in this case, subscription) and should be treated differently.

To re-index only the subscription SKUs, not your entire base, you can create a collection with the SKUs that are part of the subscription and manually include them so that only these SKUs are reindexed.

For manual inclusion of specific SKUs, follow these step-by-step instructions:

1. In the Admin, enter the __CMS__.
2. Click the __CMS__ folder.
3. Then, in __Product Clusters (Collections)__.
4. Click __New collection__.
5. Name your Collection (the other fields are not to be filled).
6. Insert the SKUs in the field and __separate them with commas__.

![recurrence-specific-skus](https://raw.githubusercontent.com/vtexdocs/help-center-content/main/images/en/i-ve-activated-a-product-subscription-but-it-doesnt-appear-on-the-site-0.png)

Finally, give a name to the __Group__ of your Collection and click __Save Group__.
