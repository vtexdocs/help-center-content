---
title: 'Investigating why a product appears as unavailable at the store'
id: frequentlyAskedQuestions_161
status: DRAFT
createdAt: 2017-04-27T22:39:35.556Z
updatedAt: 2019-12-31T14:23:51.835Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:01:43.712Z
contentType: frequentlyAskedQuestion
productTeam: Marketing & Merchandising
author: authors_84
slug: why-does-my-product-appear-as-unavailable-at-the-store
locale: en
legacySlug: 
---

For a product to appear as available at the store, besides proper and correct registration in the catalog, it needs to be attended by the logistics set for the store. This means that all stock configuration, such as dock, carrier, weight, dimensions, etc. must include the product in question.

When this product does not appear at the store or, when it appears as unavailable, it means that one of these points need to be fixed. This article aims to list the main means of investigating, on the platform, what must be changed in the product configuration.

## Product registration

1. Make sure the product and SKU are active;
2. Make sure the brand is active;
3. Make sure the category is active;
4. Make sure there is a valid price for the desired commercial policy associated to the SKU;
5. Make sure the flag **Display on the Website** is checked for this product;
6. Make sure the [website is associated to a binding](/en/faq/website-with-error-how-to-fix-it "website is associated to a binding");
7. Make sure the flag **Show Sold Out Product** is checked &#8211; if not, maybe the product is unavailable. To verify this hypothesis, follow the checklist below.

## Logistics

At the Logistics module, we have a simulator that indicates which configurantions entered at the validation are not set for the cart (products and ZIP code). It&#8217;s basically the same test the Admin performs before identifying if the product is available.
You should always perform this simulation with a ZIP code that is attended by all your carriers, therefore, if that ZIP code is not related to the product, no other will be.

1. [Click here to access the step-by-step of freight simulation](/en/tutorial/freight-simulation).
2. After the adjustment of any logistics item, or after product registration, wait for the indexation of the product, observing the [indexation line](/en/tutorial/understanding-how-indexation-works/).
3. Finally, access the product page with an anonymous tab, to avoid displaying the cached page.
