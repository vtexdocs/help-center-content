---
title: 'Why isn’t my product indexed?'
id: frequentlyAskedQuestions_1608
status: PUBLISHED
createdAt: 2017-04-27T22:27:09.727Z
updatedAt: 2022-05-24T22:36:40.718Z
publishedAt: 2022-05-24T22:36:40.718Z
firstPublishedAt: 2017-04-27T23:02:35.077Z
contentType: frequentlyAskedQuestion
productTeam: Marketing & Merchandising
author: authors_3
slugEN: why-isnt-my-product-indexed
locale: en
legacySlug: why-isnt-my-product-indexed
---

### Timeout

When several instances of a product are being indexed, as explained in our article [How indexing works](https://help.vtex.com/en/tutorial/understanding-how-indexation-works--tutorials_256), it may leave the indexation queue for having reached the maximum waiting time.

The example below illustrates this situation:

Product A with 5 SKUs and enabled for 5 commercial policies.

In this situation, product A will record 25 validations for each change. The reason for this is that, for each SKU, the inventory availability and price and promotion rules will be checked according to each commercial policy. In order to avoid so many validations, we recommend adjusting and reducing the number of commercial policies.

As explained in [Configuring a marketplace trade policy](https://help.vtex.com/en/tutorial/configuring-a-marketplace-trade-policy--tutorials_404), one single policy can be used for several marketplaces, as long as these use the same catalog, price and inventory.

The number of SKUs by product can also be reduced. In this case, we recommend splitting one product into several products, aiming at increasing the product’s particularities. Example:

Before:
Product: Shirt. SKUs: Yellow S, Yellow M, Yellow L, Blue S, Blue M, Blue L.

After:
Product: Yellow Shirt. SKUs: S, M, L.
Product: Blue Shirt. SKUs: S, M, L.

To check if your product has not been indexed, see the indexation report in **Products not indexed.** For further details, check in the **Log** button the reason why the product has not been indexed.

### Sales policy

In addition, the product's sales policy must be associated with a valid Website.

If in CMS some Website has incorrect settings or folder structure, there is a risk that the product will not be properly indexed.
