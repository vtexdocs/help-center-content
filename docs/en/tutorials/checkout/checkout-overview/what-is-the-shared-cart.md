---
title: 'What is the shared cart'
id: 3oKJZfoAoUm8g0ukCIGsUu
status: PUBLISHED
createdAt: 2018-04-24T20:24:47.008Z
updatedAt: 2022-10-05T20:26:23.772Z
publishedAt: 2022-10-05T20:26:23.772Z
firstPublishedAt: 2018-05-03T14:07:40.683Z
contentType: tutorial
productTeam: Shopping
author: 7FpKZ0rc6k4WqeymES80cw
slugEN: what-is-the-shared-cart
legacySlug: what-is-the-shared-cart
locale: en
subcategoryId: 8AGXmtpbTqUE2KQu0Swwk
---

The shared cart is the tool that allows more than one user to manage the same cart, adding, removing or updating items and information from it. Through this functionality, your customer receives greater autonomy when making a purchase, and your store acquires:

- Opportunity for greater sales.
- Lesser logistical efforts.
- Single order flow.

## How the shared cart works

Each cart created in a store has an identification parameter, called `orderFormId`.

When we add the `orderFormId` of a cart in a standard URL (through a `querystring`), we have access to the page with the information of this cart. Through this shareable page, other users can make any changes to the order (addition, removal) of items and complete their payment.

Example:

- **Default Checkout URL**: `https://www.{storename}.com/checkout/#/cart`

- **Shared cart URL**: `https://www.{storename}.com/checkout/?orderFormId=31155bb8fd6944c99829c171aa8ed5c4#/cart`

> ⚠️ When building the shared cart URL, make sure that the querystring **?orderFormId=...** is placed between **/checkout/** and **#/cart**.

To gain access to cart identification information, access [Checkout API](https://developers.vtex.com/vtex-rest-api/reference/checkout-api-overview).

> ℹ️ The use of the abandoned cart functionality is optional, generating no impact for stores that do not use it.

## Information security

All information (personal, delivery and payment) is protected, being only viewed by the user registered on the platform (after logging in). The data appears masked to other people accessing the cart.

To learn more about data protection, visit [SmartCheckout Security](/en/tutorial/seguranca-do-smartcheckout--3SrJuuhrqwePUg1rp1exfB#).

## Page tracking

When new parameters are inserted into a URL, such as a `querystring`, page tracking can change, impacting assessments performed by systems such as the Google Analytics conversion funnel. To use page tracking service with additional parameters, see updated rules at [Setting up the sales funnel on Google Analytics](/en/tutorial/configurar-funil-de-vendas-no-google-analytics#).

> ℹ️ If you use another page tracking system in your store, check the internal documentation for that system.
