---
title: 'Close bigger deals with the shared cart'
id: 1gvY2p1Rc9hjkfyVvOHY2C
status: PUBLISHED
createdAt: 2019-02-18T21:26:10.613Z
updatedAt: 2019-12-31T15:13:41.446Z
publishedAt: 2019-12-31T15:13:41.446Z
contentType: updates
productTeam: Shopping
author: 245tA425AIeioKAk2eaiwS
slugEN: close-bigger-deals-with-the-shared-cart
locale: en
legacySlug: close-bigger-deals-with-the-shared-cart
announcementImageID: ''
announcementSynopsisEN: 'The shared cart is already available to all stores, allowing interactions of more than one customer.'
---

We've just released (in stable) the shared cart, a feature which allows more than one customer to add, remove, or update items or data of a single shopping cart. That way orders may contain more items, leading your store towards operational efficiency, while users can get together to get discounts.


## Convenience for your clients, efficiency for your store
With the shared cart, your clients will be able to share their shopping cart before completing the purchase.  That means more people can view, add, or remove the cart's items.

Sharing becomes possible through a new parameter in the shopping cart's URL. And by using it, people can team up to get discounts available only to orders that include a given number of items. On the store's side, there's an improvement in the operational efficiency with:

- Bigger sales opportunities
- Lower logistics effort
- Single order flows

More than that: your call center operators may select products and share the cart with a client. Then, the person will fill in personal data, without the need to inform sensitive information (like the credit card CVV) by phone.


## Security always comes first
Sensitive information, like user data and address, __is only visible to its real owner (and they must be logged in)__. Whoever receives the cart's link won't be able to read the data, which will be masked.


## What you need to do
The shared cart is only possible because of a new parameter on the checkout's URL: the `orderFormId`. So, if you decide to use the feature, you need to:

- Edit your store's tracking service (Google Analytics, for example) to read the new parameter correctly.
- Use [VTEX's APIs](https://github.com/vtex/vtex.js/tree/master/docs/checkout#getorderformexpectedorderformsections) to obtain the shopping cart's ID.
- Customize the cart's page to let the link display the ID.

>⚠️ Remember that the shared cart is an optional feature. Therefore, the changes pointed out in this article must be performed **only by stores that intend to use it**.

Read the [article about the shared cart](/en/tutorial/what-is-the-shared-cart) and learn more about this new feature.
