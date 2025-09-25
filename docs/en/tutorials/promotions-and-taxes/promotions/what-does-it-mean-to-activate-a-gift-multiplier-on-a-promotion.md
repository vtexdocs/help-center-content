---
title: 'How the gift multiplier works in promotions'
id: 1gydgkmjEWcoo2CskUwuYK
status: PUBLISHED
createdAt: 2019-01-24T20:45:34.467Z
updatedAt: 2025-09-24T11:13:38.983Z
publishedAt: 2025-09-24T11:13:38.983Z
firstPublishedAt: 2019-01-24T22:13:50.154Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 2AhArvGNSPKwUAd8GOz0iU
slugEN: what-does-it-mean-to-activate-a-gift-multiplier-on-a-promotion
legacySlug: what-does -it-mean-to-activate-a-gift-multiplier-on-a-promotion
locale: en
subcategoryId: 1yTYB5p4b6iwMsUg8uieyq
---

When configuring a Buy One Get One or Regular promotion, you can use the gift multiplier option, which changes the behavior of the maximum number of gifts the customer can select in the cart based on the number of eligible SKUs.

## How to configure the gift multiplier in the Admin
1. In the VTEX Admin, go to Promotions > Promotions, or type Promotions in the search bar at the top of the page.
2. Click `Create promotion`.
3. Choose the promotion type:
    - Regular
    - Buy One Get One
4. In the `Add benefit` menu under Customer gets—depending on the promotion you want—select Gift.
5. Select the SKUs that are eligible for the gift.
6. In the **Maximum number of gifts** field, set how many gifts the customer can select.
7. In the selector next to it, choose **Per cart** or **By eligible item**.
8. Complete the remaining promotion fields and click Create.

Below, you'll find more details about how the multiplier works in both scenarios and how to configure it in VTEX Admin.

## Gift multiplier behavior
In the Gift drawer under `Add benefit`, there's a selector that determines how the maximum number of gifts will be applied. There are two options:

### Per cart
The maximum number of gifts is applied only once, regardless of the number of eligible SKUs in the cart.

- Example:

    - Maximum quantity: `2`
    - Eligible SKUs in the cart: `3`
    - Available gifts: `2`

### Per eligible item
The maximum number of gifts is multiplied by the number of eligible SKUs to define the total number of gifts available.

- Example:

    - Maximum quantity: `2`
    - Eligible SKUs in the cart: `3`
    - Available gifts: `6` (2 × 3)
