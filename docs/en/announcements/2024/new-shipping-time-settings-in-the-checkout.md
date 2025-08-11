---
title: 'New shipping time settings in the Checkout'
id: 5pv2gBQKH8nOKJiMKyBwDu
status: PUBLISHED
createdAt: 2024-12-05T14:49:01.044Z
updatedAt: 2024-12-11T13:00:03.603Z
publishedAt: 2024-12-11T13:00:03.603Z
contentType: updates
productTeam: Shopping
author: 2o8pvz6z9hvxvhSoKAiZzg
slugEN: new-shipping-time-settings-in-the-checkout
locale: en
legacySlug: new-shipping-time-settings-in-the-checkout
announcementImageID: ''
announcementSynopsisEN: 'New Checkout settings now allow you to display the shipping time for each product individually.'
---

The default Checkout settings display a single shipping time (in business days) for all the products in the cart, which always corresponds to the longest shipping time.

To improve the customer experience, the [Checkout API](https://developers.vtex.com/docs/api-reference/checkout-api) now offers the flexibility to display individual shipping times for each item at the checkout, instead of displaying a single shipping time for all products in the cart.

## What has changed?

Now, merchants can:

* Display the shipping time for each product individually.
* Display the shipping time in date format instead of the number of days (i.e., "September 15, 2023" instead of "in 5 working days").

## What needs to be done?

The feature is now available automatically in all stores. To implement these improvements, you can customize your storefront using the information returned by the [Checkout API](https://developers.vtex.com/docs/api-reference/checkout-api).

For more details, see our [release note](https://developers.vtex.com/updates/release-notes/2024-06-24-displaying-sla-by-item-in-checkout) and the guide [Displaying SLA by item in Checkout](https://developers.vtex.com/docs/guides/displaying-sla-by-item-in-checkout).

> ⚠️ The active functionality may impact the **Orders module**, considering that the standard is to display the delivery time grouped by the longest duration. This creates a discrepancy between what is shown in the VTEX Admin and what is presented to the customer.
