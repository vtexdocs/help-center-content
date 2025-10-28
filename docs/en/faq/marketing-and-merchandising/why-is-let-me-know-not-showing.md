---
title: 'Why is “Let me know” not showing?'
id: frequentlyAskedQuestions_628
status: PUBLISHED
createdAt: 2017-04-27T22:31:23.053Z
updatedAt: 2019-12-31T14:24:27.768Z
publishedAt: 2019-12-31T14:24:27.768Z
firstPublishedAt: 2017-04-27T23:02:25.457Z
contentType: frequentlyAskedQuestion
productTeam: Marketing & Merchandising
author: authors_84
slugEN: why-is-let-me-know-not-showing
locale: en
legacySlug: why-is-let-me-know-not-showing
---

The basic settings for displaying **Let me know** when the product is not available are as follows:

- **CMS** module > Settings > General > “Show "Let Me Know" when out of stock” flag.
- Template settings – Use of `vtex.cmc:BuyButton` control on page template.

However, there is a situation in which despite having set up the items above, “Let me know” does not appear. This happens **when the Category display type is marked as “List of SKUs”.**

![categoria-lista-de-skus EN](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/faq/marketing-and-merchandising/why-is-let-me-know-not-showing_1.png)

In this case, in addition to the default settings, the use of the `vtex.cmc:SkuSelection` control is required, even if there is only one SKU per page.

So, when the product category is set up as “List of SKUs,” as shown in the image above, the control `vtex.cmc:SkuSelection` must be included in the page template so that the “Let me know” is displayed.
