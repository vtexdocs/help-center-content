---
title: 'New rules in promotion forms'
id: 6Waqgi9CTOvHlwr0CBcjlI
status: PUBLISHED
createdAt: 2025-03-10T11:12:54.341Z
updatedAt: 2025-03-11T16:25:14.071Z
publishedAt: 2025-03-11T16:25:14.071Z
contentType: updates
productTeam: Others
author: 2AhArvGNSPKwUAd8GOz0iU
slugEN: 2025-03-10-new-rules-in-promotion-forms
locale: en
legacySlug: new-rules-in-promotion-forms
announcementImageID: 'undefined'
announcementSynopsisEN: 'New checks in promotion forms increase accuracy, reduce errors, and result in better rules.'
---

We've improved the promotion forms to provide greater configuration accuracy and consistency and reduce errors. The main changes include adjustments to character limits, new condition rules, and restrictions for progressive discounts and Buy Together promotions.

## What has changed?
The updates include:

**General information checks**
- **Promotion name:** New maximum of 150 characters.
- **Description:** New maximum of 10,000 characters.
- **End date:** Must be after the current date.

**New promotion condition rules**
- Customer clusters must follow one of the formats below: 

    - *`field=value`*
    - *`field contains value`*
- **UTMs** only accept letters, numbers, hyphens, and underscores.
- **Coupons created from UTMs:** Aren't allowed to use **new** as a name because that generates an invalid URL.
- **Coupons created from UTMs:** Had a limit based on **maxItemsPerClient** (the customer couldn't buy more than a certain number of products using this coupon in one or more purchases). Now the these coupons are restricted by **maxUsage** (the number of times that the coupon can be used in the store).
- **Shipping location:** The end postal code must be greater than the start postal code of the range.

**Rules for Buy Together promotions**
Progressive discount:

- Repeated discounts aren't allowed.
- If a discount is applied to a specific item quantity, the quantities will keep the same discount unless a new range is set.

**Buy Together promotions**
- The SKUs in List 1 and List 2 must be different.
- None of the SKUs repeated in List 2 will get the discount due to the way processing works:

1. First, there's a check for SKUs from List 1, which get associated with cart items and removed from the list.
2. Next, the system checks for SKUs from List 2 to apply the discounts.
3. If a SKU was removed during step one (because it's part of List 1), it won't be found in List 2 and doesn't get the discount.

## What needs to be done?
No action is required. The improvements are automatically applied to the new forms for VTEX stores.

For more information, check the following articles:

- [Buy Together](/en/tutorial/compre-junto--tutorials_323)
- [Buy One Get One](/en/tutorial/compre-e-ganhe--tutorials_322)
- [Progressive discount](/en/tutorial/desconto-progressivo--tutorials_324)
- [More for Less](/en/tutorial/leve-mais-por-menos--tutorials_325)

