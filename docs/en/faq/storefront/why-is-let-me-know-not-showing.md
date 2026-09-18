---
title: 'Why is "Let me know" not showing?'
excerpt: "Besides CMS and BuyButton settings, categories set as List of SKUs also need the SkuSelection control for Let me know to appear."
id: frequentlyAskedQuestions_628
status: PUBLISHED
createdAt: 2017-04-27T22:31:23.053Z
updatedAt: 2019-12-31T14:24:27.768Z
publishedAt: 2019-12-31T14:24:27.768Z
firstPublishedAt: 2017-04-27T23:02:25.457Z
contentType: frequentlyAskedQuestion
productTeam: Storefront
author: authors_84
slugEN: why-is-let-me-know-not-showing
locale: en
legacySlug: why-is-let-me-know-not-showing
---

> ⚠️ This tutorial only applies to [CMS Portal (Legacy)](https://help.vtex.com/docs/tracks/legacy-cms-portal) stores.

To show **Let me know** when the product is unavailable, use these settings:

- In **CMS > Settings > General**, enable **Show "Let Me Know" when out of stock**.
- In the page template, include the `vtex.cmc:BuyButton` control.

Even with those settings, **Let me know** still does not appear when the category display type is **List of SKUs**.

![categoria-lista-de-skus EN](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/faq/storefront/why-is-let-me-know-not-showing_1.png)

In that case, you must also add the `vtex.cmc:SkuSelection` control to the page template, even if the page has only one SKU.

When the category is set to **List of SKUs**, as in the image above, include `vtex.cmc:SkuSelection` so **Let me know** is displayed.
