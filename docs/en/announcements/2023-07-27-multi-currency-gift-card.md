---
title: 'Multi-currency gift card'
id: 4FUXWCaQrFHcgjir698onc
status: PUBLISHED
createdAt: 2023-07-27T15:01:02.025Z
updatedAt: 2023-07-27T16:13:02.651Z
publishedAt: 2023-07-27T16:13:02.651Z
contentType: updates
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: 2023-07-27-multi-currency-gift-card
locale: en
legacySlug: multi-currency-gift-card
announcementImageID: ''
announcementSynopsisEN: 'Configure your store gift cards in multiple currencies'
---

VTEX provides a new feature to configure gift cards based on your store local currencies.

## What has changed?

Previously, all gift cards were created without a specific currency associated with their value. When purchasing, the customer would add a gift card as one of the payment methods at Checkout. The amount would then be deducted based on the currency configured in the products in the cart.

Now, the merchant can select the currency in which the gift card will be generated and make it available only for purchases made with that same type of currency.

## Why did we make this change?

In some regions, such as Europe and the United States, some stores sell products to more than one country and operate with price lists using multiple currencies. As there is no currency exchange operation when using a gift card, the discount could be higher or lower depending on the currency applied to the cart at checkout.

## What needs to be done?

Defining a specific currency for each gift card is optional. If you do not want to indicate in which currency it should be created, the behavior will remain the same as in a single-currency store, where discounts are applied without currency conversion.

To create a gift card using a specific currency, follow the steps below:

1. In the VTEX Admin, go to **Promotions > Gift Cards**, or type **Gift Cards** in the search bar at the top of the page.
2. Click `New Gift Card` or `New Gift Card Batch` (to create a batch of gift cards).
3. In the **Currency code** field, select the desired currency.
4. Complete the other fields for creating the gift card.
5. Click `Save`.

![Multi-currency gift card](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/announcements/2023-07-27-multi-currency-gift-card_1.PNG)

The currencies available will be the same as those in the [trade policies](/en/tutorial/how-trade-policies-work--6Xef8PZiFm40kg2STrMkMV) of each store.

<div class="alert alert-warning">
You must choose the currency when creating each gift card or a batch of gift cards since you cannot change the gift card currency after it has been created.
</div>
