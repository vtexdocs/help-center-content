---
title: 'Configuring telesales features'
id: 76FNgQP2Glc4umMJ5Yr50R
status: PUBLISHED
createdAt: 2021-05-13T18:07:05.617Z
updatedAt: 2023-03-29T21:17:46.146Z
publishedAt: 2023-03-29T21:17:46.146Z
firstPublishedAt: 2021-05-17T12:07:03.757Z
contentType: tutorial
productTeam: Post-purchase
author: 1malnhMX0vPThsaJaZMYm2
slugEN: configuring-telesales-features
legacySlug: configuring-telesales-features
locale: en
subcategoryId: 6SEjoixhY5LlA7G15W6oZS
---

To structure a telesales and customer service operation, the store administrator must make some pre-configurations in the store.

See below the necessary steps to set up the telesales features available on VTEX:

- [Create a telesales user](#creating-a-telesales-user)
- [Configure the telesales toolbar](#configuring-the-telesales-toolbar)
- [Configure shareable carts](#configuring-shareable-carts) (Optional)
- [Enable manual pricing](#enabling-manual-pricing) (Optional)

Learn how to operate the features you have configured in our guide [How to use telesales features](/en/docs/tutorials/telesales-features).

## Creating a telesales user

Before starting a telesales operation in your store, you must assign the Call center operator role to telesales and customer service operators in **Account settings**.

Check out the tutorial [Creating a telesales user](/en/docs/tutorials/how-can-i-create-callcenter-user) to learn more about this process.

After logging in, the telesales user will be redirected to the store's home page, where the [telesales toolbar](/en/docs/tutorials/telesales-toolbar) will be displayed.

Users with the telesales role (Call center operator) can also view, track and make changes to orders in Admin in the [All Orders](/en/docs/tutorials/all-orders) page.

To understand all the roles available in your store, check out the article [Roles](/en/tutorial/como-criar-perfil-de-acesso).

## Configuring the telesales toolbar

For stores developed with [VTEX IO](https://developers.vtex.com/vtex-developer-docs/docs/what-is-vtex-io), you must configure the **VTEX Telemarketing** app to enable and customize the telesales toolbar. Learn more in our [VTEX Telemarketing](https://developers.vtex.com/vtex-developer-docs/docs/vtex-telemarketing) guide.

For other stores, you can customize the colors and buttons of the telesales toolbar. In the VTEX Admin, go to **Storefront > Layout**, or type **Layout** in the search bar at the top of the page. 

Learn more in [Customizing the telesales toolbar](/en/docs/tutorials/customizar-a-toolbar-de-televendas).

## Configuring shareable carts

The [Shareable shopping cart](https://apps.vtex.com/vtex-social-selling/p) app allows sales reps to select products for their customers and share the shopping cart with them on channels such as WhatsApp, Facebook Messenger, and email, in Social Selling actions.

To use this feature, you must install and activate the app. You can also customize the buttons on the cart sharing interface.

To make these configurations, follow the instructions in the article [How to activate the Shareable Cart app (Social Selling)](/en/docs/tutorials/how-to-activate-the-shareable-cart-app).

## Enabling manual pricing

The manual pricing feature allows users with the "Call center operator" and "Super Admin" roles to change the price of products in the shopping cart.

To use this feature, the store's developers must first enable manual pricing using the Checkout API. Read our [Checkout API documentation](https://developers.vtex.com/docs/api-reference/checkout-api) to learn more about this procedure.

Prices changed manually in the shopping cart need to be approved by the store administrator or an authorized user in the [Orders authorization](/en/docs/tutorials/how-order-authorization-works) system. Only after that can you proceed to the billing process.

> ℹ️ It is not possible to change prices by accessing the store through its final URL (*www.storedomain.com.br*). The manual price functionality in telesales only works if the operator accesses the store through the *www.storedomain.myvtex.com* domain and has the [Call Center operator](/en/docs/tutorials/predefined-roles#call-center-operator) in their [Access profile](/en/docs/tutorials/roles).
